function Header({handlePlusMinus, data}) {

  let headertext = Number(data.header) >= 0 && Number(data.header) > lorem.length ? lorem.join(' ').repeat(Math.floor(Number(data.header)) / lorem.length) : '';
  headertext += Number(data.header) >= 0 ? lorem.slice(0, Number(data.header)).join(' ') : '';

  return (
    <>
      <header>
        <div style={{ display: "flex", flexWrap: "nowrap", alignItems: "center"}}>
        <PlusMinus section="header" handle={handlePlusMinus}/>
        <div className="section" style={{color: "rgb(232, 94, 88)"}}>Header: {data.header}</div>
        </div>
        <h2>{headertext}</h2>
        <Data data={data}/>
      </header>
    </>
  )
}