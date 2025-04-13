import React, { useState, useEffect } from "react";
import "./Subreddits.css";
import { fetchPopularSubreddits } from "../../services/redditApi";
import { useSelector, useDispatch } from "react-redux";

export const Subreddits = ({ onSelectSubreddit, selectedSubreddit }) => {
  const [subreddits, setSubreddits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubreddits = async () => {
      setLoading(true);
      try {
        const data = await fetchPopularSubreddits();
        setSubreddits(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSubreddits();
  }, []);
  const handleSubredditClick = (subreddit) => {
    onSelectSubreddit(subreddit.name);
  };
  return (
    <div className="subreddits">
      <h2>Subreddits</h2>

      {loading && <p>Loading...</p>}
      {error && <p>Error loading subreddits</p>}

      {!loading && !error && (
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
      )}
    </div>
  );
};
