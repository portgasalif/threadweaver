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
        <main className="content">
          <PostsList />
        </main>
        <aside className="sidebar">
          <Subreddits />
        </aside>
      </div>
    </div>
  );
}

export default App;
