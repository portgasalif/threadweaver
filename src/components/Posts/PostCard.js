import React from "react";
import "./PostCard.css";

export const PostCard = ({
  post,
  voteStatus = 0,
  voteChange = 0,
  handleVote,
}) => {
  const {
    title,
    author,
    upvotes: initialUpvotes,
    commentCount,
    subreddit,
    image,
  } = post;

  const handleUpVote = () => {
    const postId = post.id;
    if (voteStatus === 1) {
      handleVote(postId, 0, 0);
    } else {
      const change = voteStatus === -1 ? 2 : 1;
      handleVote(postId, 1, change);
    }
  };

  const handleDownVote = () => {
    const postId = post.id;
    if (voteStatus === -1) {
      handleVote(postId, 0, 0);
    } else {
      const change = voteStatus === 1 ? -2 : -1;
      handleVote(postId, -1, change);
    }
  };
  return (
    <div className="post-card">
      {/* Vote section */}
      <div className="vote-section">
        <button
          className={`vote-btn ${voteStatus === 1 ? "active" : ""}`}
          onClick={handleUpVote}
        >
          ▲
        </button>
        <span>{initialUpvotes + (voteChange || 0)}</span>
        <button
          className={`vote-btn ${voteStatus === -1 ? "active" : ""}`}
          onClick={handleDownVote}
        >
          ▼
        </button>
      </div>

      {/* Content section */}
      <div className="content-section">
        <h2>{title}</h2>
        {image && (
          <div className="post-thumbnail">
            <img src={image} alt="" />
          </div>
        )}
        <div className="post-details">
          <span>Posted by {author}</span>
          <span>Subreddit: {subreddit}</span>

          <div className="post-stats">
            <span>{commentCount} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
