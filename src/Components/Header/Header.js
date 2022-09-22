import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {

  const today = new Date();
  const hours = today.getHours();
  let greeting;
  
  if (hours < 12) {
    greeting = "Good morning!";
  } else if (hours >= 12 && hours < 17) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  };

  return (
    <header className="header">
      <Link to="/" className="home-link">
        <h1 className="site-title">NY Times News Reader</h1>
      </Link>
      <p className="greeting">{`${greeting}`} Today is {`${today.toString().slice(0, 16)}`}</p>
    </header>
  );
};

export default Header;