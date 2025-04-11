import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/header";
import { Subreddits } from "./components/Subreddits/Subreddits";
import PostsList from "./components/Posts/PostsList";

function App() {
  const [selectedSubreddit, setSelectedSubreddit] = useState("popular");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelectSubreddit = (subreddit) => {
    setSelectedSubreddit(subreddit);
    setSearchTerm("");
  };

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
          <PostsList
            selectedSubreddit={selectedSubreddit}
            searchTerm={searchTerm}
          />
        </main>
        <aside className="sidebar">
          <Subreddits
            onSelectSubreddit={handleSelectSubreddit}
            selectedSubreddit={selectedSubreddit}
          />
        </aside>
      </div>
    </div>
  );
}

export default App;
