import ArticleCard from '@/components/ArticleCard';
import articles from '@/data/articles';

export default function TagPage({ filteredArticles, tag }) {
  return (
    <div className='arc'>
      <h3>Articles with tag: {tag}</h3>
      {filteredArticles.map((article) => (
        <ArticleCard 
        title={article.title} 
        excerpt={article.excerpt} 
        photo={article.photo}
        alt={article.alt} 
        slug={article.slug}/>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { tag } = context.query;

  const filteredArticles = articles.filter((article) => {
    return article.tags.includes(tag);
  });

  return {
    props: {
      filteredArticles,
      tag,
    },
  };
}
