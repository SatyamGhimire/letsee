import { useState } from "react";
import ArticleCard from "@/components/ArticleCard";
import articles from "@/data/articles";
import { useRouter } from "next/router";

export default function ArchivePage({ articles }) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search?query=${searchQuery}`);
  };

  return (
    <div className="arc">
      <form onSubmit={handleSearch}>
        <div className="arc-sch"><h3>Archive page</h3>
          <input className="sc-box"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
          />
          <button className="btnbtn" type="submit">Search</button>
        </div>
        <hr className="line" />
      </form>
      <div className="arc-card">
        {articles.reverse().map((article) => (
          <ArticleCard
            title={article.title}
            excerpt={article.excerpt}
            photo={article.photo}
            alt={article.alt}
            slug={article.slug}
          />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      articles,
    },
  };
}
