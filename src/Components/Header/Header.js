import React from "react";
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
      <h1 className="site-title">NY Times News Reader</h1>
      <p className="greeting">{`${greeting}`} Today is {`${today.toString().slice(0, 16)}`}</p>
    </header>
  );
};

export default Header;