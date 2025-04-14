import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Subreddits } from "./components/Subreddits/Subreddits";
import PostsList from "./components/Posts/PostsList";
<<<<<<< HEAD
import { useSelector } from "react-redux";

function App() {
  const selectedSubreddit = useSelector(
    (state) => state.subreddits.selectedSubreddit
  );
  const searchTerm = useSelector((state) => state.posts.searchTerm);
=======
function App() {
>>>>>>> 868083c3d5041d00e0a3bf39371c248f79a54786

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
