import articles from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";

export default function SearchPage({ filteredArticles, query }) {
  return (
    <div className="arc">
      <h3>Search Results for "{query}":</h3>
      {filteredArticles.length > 0 ? (
        filteredArticles.map((article) => (
          <ArticleCard
            title={article.title}
            excerpt={article.excerpt}
            photo={article.photo}
            slug={article.slug}
            alt={article.alt}
          />
        ))
      ) : (
        <p>No search results found</p>
      )}
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(query.query.toLowerCase())
  );

  return {
    props: {
      filteredArticles,
      query: query.query,
    },
  };
}
