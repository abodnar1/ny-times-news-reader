import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Articles from "../Articles/Articles";
import Footer from "../Footer/Footer";
import ArticleDetails from "../ArticleDetails/ArticleDetails";

const App = () => {
  
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("home");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    
    fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${process.env.REACT_APP_API_KEY}`)
     .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          setError("Oops, something went wrong. Please try again.");
        }
     })
     .then(data => {
      const fetchedArticles = data.results.filter(article => article.item_type === "Article")
      setArticles(fetchedArticles)
      setLoading(false)
     })
     .catch(error => {
      setError(error.message)
      setLoading(false)
    })
  }, [category]);

  return (
    <div className="App">
      <Header />
      {error && <p className="error-message">{error}</p>}
      <Route exact path="/">
        <SearchForm setCategory={setCategory} />
        {!loading ? <Articles articles={articles}/> : <p className="loading">Loading...</p>}
      </Route>
      <Route 
        exact path="/article/:id" 
        render={({ match }) =>  {
          const articleToView = articles.find(article => article.created_date === match.params.id)
          return <ArticleDetails {...articleToView} />}
        }>
      </Route>
      <Footer />
    </div>
  );
};

export default App;