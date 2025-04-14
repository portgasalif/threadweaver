import React from "react";
import "./App.css";
import { Header } from "./components/Header/header";
import { Subreddits } from "./components/Subreddits/Subreddits";
import PostsList from "./components/Posts/PostsList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <div className="content">
          <PostsList />
        </div>
        <div className="sidebar">
          <Subreddits />
        </div>
      </div>
    </div>
  );
}

export default App;
