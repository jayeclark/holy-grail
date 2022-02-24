
function PlusMinus({section, handle}){
  function handlePlusMinus(e) {
    if (e.target.id.includes('minus')) {
      handle({ name: section, value: -1 });
      return;
    }
    handle({ name: section, value: 1 });
  }

  return (<>
    <img src={`icons/${section}_minus.png`} id="minus" onClick={((e)=> handlePlusMinus(e))}/>
    <img src={`icons/${section}_plus.png`} id="plus" onClick={((e)=> handlePlusMinus(e))}/>
     </>)
}

function Data(props) {
  return (<div style={{ margin: "20px auto 0px auto", border:"1px solid #000", borderRadius: "5px", width: "max-content", display: "flex", padding: "5px 10px", fontSize: "12px", position: "relative", bottom: "0px", left: "0px"}}>
    H {props.data.header}&nbsp;-&nbsp; 
    L {props.data.left}&nbsp;-&nbsp; 
    A {props.data.article}&nbsp;-&nbsp; 
    R {props.data.right}&nbsp;-&nbsp; 
    F {props.data.footer}
  </div>)
}

function update(section, value) {
  return new Promise((resolve, reject) => {
    var url = `/update/${section}/${value}`;
    superagent.get(url).end((err, res) => {
      err ? reject(null) : resolve(res.body)
    });
  });
}

function read() {
  return new Promise((resolve, reject) => {
    var url = '/data';
    superagent.get(url).end((err, res) => {
      err ? reject(null) : resolve(res.body)
    })
  })
}

function App() {
  const [data, setData] = React.useState({
    header: 0, left: 0, article: 0, right: 0, footer: 0
  })

  React.useEffect(() => {
    const response = read().then(res => {
      setData(res);
    })
  }, []);

  function handlePlusMinus(section) {
    const response = update(section.name, section.value)
        .then(res => {
          setData(res)
        });
  }

  return (<>
    <div className="grid">
      <Header handlePlusMinus={handlePlusMinus} data={data}/>
      <Left handlePlusMinus={handlePlusMinus} data={data}/>
      <Article handlePlusMinus={handlePlusMinus} data={data}/>
      <Right handlePlusMinus={handlePlusMinus} data={data}/>
      <Footer handlePlusMinus={handlePlusMinus} data={data}/>
    </div>
  </>)
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)