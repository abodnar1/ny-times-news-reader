import React from "react";
import "./Article.css";

const Article = ({ id, section, title, published, image }) => {
  return (
    <article className="article-wrapper">
      <img className="article-image" src={image} alt={section}/>
      <div className="info-wrapper">
        <h2 className="article-title">{title}</h2>
        <h3 className="article-section">Section: {section}</h3>
        <p className="article-published">Published: {published}</p>
      </div>
    </article>
  );
};

export default Article;