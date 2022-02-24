function Left({handlePlusMinus, data}){

  let lefttext = Number(data.left) >= 0 && Number(data.left) > lorem.length ? lorem.join(' ').repeat(Math.floor(Number(data.left)) / lorem.length) : '';
  lefttext += Number(data.left) >= 0 ? lorem.slice(0, Number(data.left)).join(' ') : '';

  return (
    <>
      <aside style={{height: "calc(100% - 24px)", position: "relative"}}>
        <div style={{ marginBottom: "10px", display: "flex", flexWrap: "nowrap", alignItems: "center"}}>
          <PlusMinus section="left" handle={handlePlusMinus}/>
          <div className="section" style={{color: "rgb(50, 116, 228)"}}>Left: {data.left}</div>
        </div>
        <span style={{fontSize: "0.8rem"}}><ul>{
        lefttext.split('. ').map((x,i) => (<li key={i}>{x}</li>))
        }</ul></span>
        <Data data={data}/>
      </aside>
    </>
  )
}