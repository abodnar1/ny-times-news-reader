import React from "react";
import "./Articles.css";
import Article from "../Article/Article";

const Articles = ({ articles }) => {
  
  const mappedArticles = articles.map(article => {
    let thumbnailImage = article.multimedia ? article.multimedia.find(image => image.format === "Large Thumbnail").url : null;
    return (
      <Article 
        id={article.created_date}
        key={article.uri}
        section={article.section}
        title={article.title}
        published={article.published_date}
        image={thumbnailImage}
      />
    );
  });

  return (
    <main className="article-container">
      { mappedArticles }
    </main>
  );
};

export default Articles;
