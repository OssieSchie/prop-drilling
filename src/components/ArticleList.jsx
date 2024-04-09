import Article from "./Article";
function ArticleList({ articles }) {
  // function mapped = articles.map((article)=> <Article header={articles.header} content={articles.content});
  return (
    <div>
      <h2>Vores artikler</h2>
      <div className="grid">
        {articles.map((art) => (
          <Article {...art} />
        ))}
      </div>
    </div>
  );
}

export default ArticleList;

// { {articles.map((article) => {
//   return <Article header={article.header} content={article.content} />
// })} }

//^Let læselig måde at skrive "" <Article {..art} /> "" på^
