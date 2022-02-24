function Footer({handlePlusMinus, data}) {

  let footertext = Number(data.footer) >= 0 && Number(data.footer) > lorem.length ? lorem.join(' ').repeat(Math.floor(Number(data.footer)) / lorem.length) : '';
  footertext += Number(data.footer) >= 0 ? lorem.slice(0, Number(data.footer)).join(' ') : '';

  return (
    <footer style={{ height: "calc(100% - 24px)", position: "relative" }}>
      <div style={{ marginBottom: "10px", display: "flex", flexWrap: "nowrap", alignItems: "center"}}>
        <PlusMinus section="footer" handle={handlePlusMinus}/>
        <div className="section" style={{color: "rgb(79, 173, 132)"}}>Footer: {data.footer}</div>
      </div>
      <span style={{fontSize: "0.65rem", color: "#888"}}>{footertext}</span>
      <Data data={data}/>
    </footer>
  )
}