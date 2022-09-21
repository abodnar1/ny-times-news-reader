import React from "react";
import "./Articles.css";
import Article from "../Article/Article";

const Articles = ({ data }) => {
  const articles = data.map(article => {
    return (
      <Article 
        id={article.created_date}
        key={article.uri}
        section={article.section}
        title={article.title}
        published={article.published_date}
        image={article.multimedia[2].url}
      />
    );
  });

  return (
    <main className="article-container">
      { articles }
    </main>
  );
};

export default Articles;
