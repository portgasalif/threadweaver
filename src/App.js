import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/header";
import { Subreddits } from "./components/Subreddits/Subreddits";
import PostsList from "./components/Posts/PostsList";

function App() {
  const [selectedSubreddit, setSelectedSubreddit] = useState("popular");

  const handleSelectSubreddit = (subreddit) => {
    setSelectedSubreddit(subreddit);
  };

  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <main className="content">
          <h2>{selectedSubreddit}</h2>
          <PostsList selectedSubreddit={selectedSubreddit} />
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
