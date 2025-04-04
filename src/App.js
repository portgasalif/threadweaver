import React from "react";
import "./App.css";
import { Header } from "./components/Header/header";
import { Subreddits } from "./components/Subreddits/Subreddits";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <main className="content">
          <h2>Popular Posts</h2>
          <p>Reddit posts will appear here</p>
        </main>
        <aside className="sidebar">
          <Subreddits />
        </aside>
      </div>
    </div>
  );
}

export default App;
