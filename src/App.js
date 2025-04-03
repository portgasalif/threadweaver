import React from "react";
import "./App.css";
import { Header } from "./components/Header/header";

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
          <h2>Subreddits</h2>
          <p>Popular subreddits will appear here</p>
        </aside>
      </div>
    </div>
  );
}

export default App;
