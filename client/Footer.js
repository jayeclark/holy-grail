function Footer({handlePlusMinus, data}) {
  return (
    <>
      <footer>
        <PlusMinus section="footer" handle={handlePlusMinus}/>
        <div className="section">Footer: {data.footer}</div>
        <Data data={data}/>
      </footer>
    </>
  )
}