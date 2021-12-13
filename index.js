const express = require('express');
const app = express();

const redis = require('redis');
const client = redis.createClient();
client.connect();

const setInitialData = async () => {
  await client
    .mSet(['header','0','left','0','article','0','right','0','footer','0'], { NX: false })
    .then(() => {
      client.mGet(['header', 'left', 'article', 'right', 'footer'])
            .then(result => console.log(result));
    })
}
setInitialData();

function data(){
  return new Promise((resolve, reject) => {
    
    const data = client.mGet(['header', 'left', 'article', 'right', 'footer'])
      .then((value) => {
        return {
          'header': +value[0],
          'left': +value[1],
          'article': +value[2],
          'right': +value[3],
          'footer': +value[4]
        }
      })
    resolve(data);
  })
}

app.use(express.static('client'));

app.get('/data', (req, res) => {
  data()
    .then(data => {
      res.send(data);
    })
})

app.get('/update/:key/:value', (req, res) => {
  const key = req.params.key;
  console.log(key);
  let newValue = Number(req.params.value);
  client.get(key).then((oldValue) => {
    newValue += Number(oldValue);
    client.set(key, newValue.toString(), { NX: false })
      .then(() => {
        data()
        .then(data => {
            console.log(data);
            res.send(data);
        })
      });
  })
})

app.listen(3000, () => console.log('Running on port: 3000...'));