import React from "react";
import { Link } from "react-router-dom";
import "./Article.css";

const Article = ({ id, section, title, published, image }) => {
  
  return (
    <Link to={`/article/${id}`} className="link-to-details">
      <article className="article-wrapper">
        <img className="article-image" src={image} alt={title}/>
        <div className="info-wrapper">
          <h2 className="article-title">{title}</h2>
          <h3 className="article-section">Section: {section}</h3>
          <p className="article-published">Published: {published}</p>
        </div>
      </article>
    </Link>
  );
};

export default Article;