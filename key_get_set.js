const redis = require("redis");

const client = redis.createClient();

const setData = async () => {
  client.connect();

  // set and get test key
  await client.set("my_key", "Hello World").then(() => {
    client
      .get("my_key")
      .then((result) => console.log(result));
  });

  // set and get multiple values
  await client
    .mSet(
      ["header", "1", "left", "2", "article", "3", "right", "4", "footer", "5"],
      { NX: false }
    )
    .then(() => {
      client
        .mGet(["header", "left", "article", "right", "footer"])
        .then((result) => console.log(result))
        .finally(client.quit());
    });
};

setData();
