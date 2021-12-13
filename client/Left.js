function Left({handlePlusMinus, data}){
  return (
    <>
      <aside>
        <PlusMinus section="left" handle={handlePlusMinus}/>
        <div className="section">Left: {data.left}</div>
        <Data data={data}/>
      </aside>
    </>
  )
}