function Header({handlePlusMinus, data}) {
  return (
    <>
      <header>
        <PlusMinus section="header" handle={handlePlusMinus}/>
        <div className="section">Header: {data.header}</div>
        <Data data={data}/>
      </header>
    </>
  )
}