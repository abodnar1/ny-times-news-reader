import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Articles from "../Articles/Articles";
import Footer from "../Footer/Footer";

const App = () => {
  const [data, setData] = useState([]);

  // On page load, see Top News Stories
  useEffect(() => {
    fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=GzKTz5zfmdAAPS5iUHTtNA4Vr9FGl8bE")
     .then(res => res.json())
     .then(data => {
      setData(data.results)
      console.log(data.results)
     })
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchForm />
      <Articles />
      <Footer />
    </div>
  );
};

export default App;
