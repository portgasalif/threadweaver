import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/header";
import { Subreddits } from "./components/Subreddits/Subreddits";
import PostsList from "./components/Posts/PostsList";
import { useSelector } from "react-redux";

function App() {
  const selectedSubreddit = useSelector(
    (state) => state.subreddits.selectedSubreddit
  );
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="App">
      <Header onSearch={handleSearchChange} />
      <div className="app-container">
        <main className="content">
          <h2>
            {searchTerm
              ? `Search results: "${searchTerm}"`
              : `r/${selectedSubreddit}`}
          </h2>
          <PostsList searchTerm={searchTerm} />
        </main>
        <aside className="sidebar">
          <Subreddits />
        </aside>
      </div>
    </div>
  );
}

export default App;
