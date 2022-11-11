import React from "react";
import "./Articles.css";
import Article from "../Article/Article";
import unavailableImage from "../../assets/unavilable.png";

const Articles = ({ articles }) => {
  
  const mappedArticles = articles.map(article => {
    let thumbnailImage = article.multimedia ? article.multimedia.find(image => image.format === "Large Thumbnail").url : unavailableImage;
    let publishedDateReformatted = new Date(article.published_date).toString().slice(0, 16);

    return (
      <Article 
        id={article.created_date}
        key={article.uri}
        section={article.section}
        title={article.title}
        published={publishedDateReformatted}
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
