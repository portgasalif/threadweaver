import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1 className="title">ThreadWeaver</h1>
      </div>
      <div className="searchBar-container">
        <input type="text" placeholder="Search..." className="searchBar" />
        <button className="searchButton">🔍</button>
      </div>
    </header>
  );
};
