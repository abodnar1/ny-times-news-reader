import React from "react";
import { Link } from "react-router-dom";
import "./ArticleDetails.css";
import unavailableImage from "../../assets/unavilable.png";

const ArticleDetails = ({ title, byline, published_date, abstract, multimedia, url }) => {
  
  const largeImage = multimedia ? multimedia.find(image => image.format === "threeByTwoSmallAt2X").url : unavailableImage;
  let publishedDateReformatted = new Date(published_date).toString().slice(0, 16);

  return (
    <main className="details-container">
      <Link to="/" className="back-link">
        <div className="back-button-container">
          <span className="material-symbols-rounded">arrow_back</span>
          <p className="back">Back Home</p>
        </div>
      </Link>
      <section className="top-container">
        <h2 className="title">{title}</h2>
        <h3 className="byline">{byline}</h3>
        <p className="published">Published on {publishedDateReformatted}</p>
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