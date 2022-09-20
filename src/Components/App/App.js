import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Articles from "../Articles/Articles";
import Footer from "../Footer/Footer";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  // On page load, see Top News Stories
  useEffect(() => {
    fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=GzKTz5zfmdAAPS5iUHTtNA4Vr9FGl8bE")
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
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchForm />
      <Articles data={data}/>
      <Footer />
    </div>
  );
};

export default App;
