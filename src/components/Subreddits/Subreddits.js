import React from "react";
import "./Subreddits.css";

export const Subreddits = ({ onSelectSubreddit, selectedSubreddit }) => {
  const subreddits = [
    {
      id: 0,
      name: "popular",
      icon: "🔥",
    },
    {
      id: 1,
      name: "programming",
      icon: "💻",
    },
    {
      id: 2,
      name: "javascript",
      icon: "🟨",
    },
    {
      id: 3,
      name: "reactjs",
      icon: "⚛️",
    },
    {
      id: 4,
      name: "webdev",
      icon: "🌐",
    },
    {
      id: 5,
      name: "datascience",
      icon: "📊",
    },
  ];

  const handleSubredditClick = (subreddit) => {
    onSelectSubreddit(subreddit.name);
  };
  return (
    <div className="subreddits">
      <h2>Subreddits</h2>

      <ul>
        {subreddits.map((subreddit) => (
          <li
            key={subreddit.id}
            className={selectedSubreddit === subreddit.name ? "selected" : ""}
            onClick={() => handleSubredditClick(subreddit)}
          >
            <span className="icon">{subreddit.icon}</span>
            {subreddit.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
