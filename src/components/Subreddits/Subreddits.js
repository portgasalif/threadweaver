import React from "react";
import "./Subreddits.css";

export const Subreddits = () => {
  const subreddits = [
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
  return (
    <div className="subreddits">
      <h2>Subreddits</h2>
      
      <ul>
        {subreddits.map((subreddit) => (
          <li key={subreddit.id}>
            <span className="icon">{subreddit.icon}</span>
            {subreddit.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
