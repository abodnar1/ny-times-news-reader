import React from "react";
import "./ArticleDetails.css";

const ArticleDetails = ({ title, byline, published_date, caption, multimedia, url }) => {
  return (
    <main className="details-container">
      <section className="top-container">
        <h2 className="title">{title}</h2>
        <h3 className="byline">{byline}</h3>
        <p className="published">Published on {published_date}</p>
      </section>
      {/* <img className="jumbo-image" src={multimedia} alt="article full/> */}
      <section>
        <p className="caption">{caption}</p>
        <a href={url}><p className="article-link">Read the full article here.</p></a>
      </section>
    </main>
  );
};

export default ArticleDetails;
