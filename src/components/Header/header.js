import React, { useState } from "react";
import "./header.css";

export const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearchSubmit = (event) => {
    event.preventDefault();

    if (searchTerm.trim()) {
      setSearchTerm("");
      onSearch(searchTerm);
    }
  };

  return (
    <header>
      <div className="logo-container">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1 className="title">ThreadWeaver</h1>
      </div>
      <div className="searchBar-container">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search..."
            className="searchBar"
            onChange={handleSearchChange}
            value={searchTerm}
          />
          <button className="searchButton">🔍</button>
        </form>
      </div>
    </header>
  );
};
