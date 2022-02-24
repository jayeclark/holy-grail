function Right({handlePlusMinus, data}){
  
  let righttext = Number(data.right) >= 0 && Number(data.right) > lorem.length ? lorem.join(' ').repeat(Math.floor(Number(data.right)) / lorem.length) : '';
  righttext += Number(data.right) >= 0 ? lorem.slice(0, Number(data.right)).join(' ') : '';

  return (
    <aside style={{ height: "calc(100% - 24px)", position: "relative" }}>
      <div style={{ marginBottom: "10px", display: "flex", flexWrap: "nowrap", alignItems: "center"}}>
        <PlusMinus section="right" handle={handlePlusMinus}/>
        <div className="section" style={{color: "rgb(50, 116, 228)"}}>Right: {data.right}</div>
      </div>
      <span style={{fontSize: "0.8rem"}}><ul>{
      righttext.split('. ').map((x,i) => (<li key={i}>{x}</li>))
      }</ul></span>
      <Data data={data}/>
    </aside>
  )
}