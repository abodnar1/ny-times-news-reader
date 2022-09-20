import React from "react";
import "./Articles.css";
import Article from "../Article/Article";

const Articles = ({ data }) => {
  console.log("DATA IN ARTICLES COMPONENT: ", data);
  return (
    <div className="article-container">ARTICLE CONTAINER HERE
      <Article />
    </div>
  );
};

export default Articles;