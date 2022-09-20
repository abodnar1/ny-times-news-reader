import React from "react";
import "./Articles.css";
import Article from "../Article/Article";

const Articles = ({ data }) => {

  // console.log("DATA IN ARTICLES COMPONENT: ", data);

  const articles = data.map(article => {
    return (
      <Article 
        id={article.uri}
        key={article.uri}
        title={article.title}
        published={article.published_date}
        image={article.multimedia[2].url}
        caption={article.multimedia[2].caption}
      />
    );
  });

  return (
    <div className="article-container">ARTICLE CONTAINER HERE
      { articles }
    </div>
  );
};

export default Articles;
