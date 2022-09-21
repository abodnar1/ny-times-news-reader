import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Articles from "../Articles/Articles";
import Footer from "../Footer/Footer";
import ArticleDetails from "../ArticleDetails/ArticleDetails";

const App = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("home")
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=GzKTz5zfmdAAPS5iUHTtNA4Vr9FGl8bE`)
     .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        setError("Oops, something went wrong. Please try again.");
      }
     })
     .then(data => {
      setData(data.results)
      console.log(data.results)
     })
  }, [category]);

  return (
    <div className="App">
      <Header />
      <SearchForm setCategory={setCategory} />
      <ArticleDetails />
      <Articles data={data}/>
      <Footer />
    </div>
  );
};

export default App;
