import React from "react";
import "./ArticleDetails.css";

const ArticleDetails = () => {
  return (
    <main className="details-container">

      <section className="top-container">
        <h2 className="title">TITLE</h2>
        <h3 className="byline">BY: ALALALALA</h3>
        <p className="published">Published: 123456</p>
      </section>

      {/* <img className="jumbo-image" alt="article full/> */}

      <section>
        <p className="caption">CAPTION</p>
        <p className="full-article-link">LINK TO ARTICLE</p>
      </section>
      
    </main>
  );
};

export default ArticleDetails;
