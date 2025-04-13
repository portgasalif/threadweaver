import React, { useEffect } from "react";
import "./Subreddits.css";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchSubreddits,
  selectSubreddit,
} from "../../features/subreddits/subredditsSlice";

export const Subreddits = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector((state) => state.subreddits.subreddits);
  const status = useSelector((state) => state.subreddits.status);
  const error = useSelector((state) => state.subreddits.error);
  const selectedSubreddit = useSelector(
    (state) => state.subreddits.selectedSubreddit
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSubreddits());
    }
  }, [dispatch, status]);

  const handleSubredditClick = (subreddit) => {
    dispatch(selectSubreddit(subreddit.name));
  };

  return (
    <div className="subreddits">
      <h2>Subreddits</h2>

      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error loading subreddits: {error}</p>}

      {status === "succeeded" && (
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

export default Subreddits;
