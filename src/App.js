import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Subreddits } from "./components/Subreddits/Subreddits";
import PostsList from "./components/Posts/PostsList";
import { useSelector } from "react-redux";

function App() {
  const selectedSubreddit = useSelector(
    (state) => state.subreddits.selectedSubreddit
  );
  const searchTerm = useSelector((state) => state.posts.searchTerm);

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Subreddits />
        <PostsList />
      </div>
    </div>
  );
}

export default App;
