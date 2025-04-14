import React from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchTerm,
  searchPostsThunk,
} from "../../features/posts/postsSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.posts.searchTerm);

  const handleSearchChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    if (searchTerm.trim()) {
      dispatch(searchPostsThunk(searchTerm));
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
