import React from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Articles from "../Articles/Articles";

const App = () => {
  return (
    <div className="App">
      <Header />
      <SearchForm />
      <Articles />
    </div>
  );
};

export default App;
