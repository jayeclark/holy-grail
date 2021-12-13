function Right({handlePlusMinus, data}){
  return (
    <>
      <aside>
        <PlusMinus section="right" handle={handlePlusMinus}/>
        <div className="section">Right: {data.right}</div>
        <Data data={data}/>
      </aside>
    </>
  )
}