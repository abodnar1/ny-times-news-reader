import React from "react";
import "./ArticleDetails.css";

const ArticleDetails = ({ title, byline, published_date, abstract, multimedia, url }) => {
  
  const largeImage = multimedia ? multimedia.find(image => image.format === "threeByTwoSmallAt2X").url : null;

  return (
    <main className="details-container">
      <section className="top-container">
        <h2 className="title">{title}</h2>
        <h3 className="byline">{byline}</h3>
        <p className="published">Published on {published_date}</p>
      </section>
      <div className="large-image-container" >
        <img className="large-image" src={largeImage} alt={title}/>
      </div>
      <section className="bottom-container">
        <p className="abstract">{abstract}</p>
        <a href={url}><p className="article-link">Read the full article here</p></a>
      </section>
    </main>
  );
};

export default ArticleDetails;