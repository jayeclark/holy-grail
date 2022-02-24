function Article({ handlePlusMinus, data }){
    
    let text = Number(data.article) >= 0 && Number(data.article) > lorem.length ? lorem.join(' ').repeat(Math.floor(Number(data.article)) / lorem.length) : '';
    text += Number(data.article) >= 0 ? lorem.slice(0, Number(data.article)).join(' ') : '';

    return (
      <article style={{ height: "calc(100% - 24px)", position: "relative" }}>
        <div style={{ marginBottom: "10px", display: "flex", flexWrap: "nowrap", alignItems: "center"}}>
          <PlusMinus section="article" handle={handlePlusMinus}/>
          <div className="section" style={{color: "rgb(15, 37, 67)"}}>Article: {data.article}</div>
        </div>
        <span style={{fontSize: "1rem"}}>{
        text}</span>
        <Data data={data}/>
      </article>
    );
}