function Article({ handlePlusMinus, data }){
    return (
      <>
        <article>
          <PlusMinus section="article" handle={handlePlusMinus}/>
          <div className="section">
            Article: {data.article}
          </div>
          <Data data={data}/>
        </article>
      </>
    );
}