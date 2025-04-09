import React from "react";
import "./PostCard.css";

export const PostCard = ({ post }) => {
  const { title, author, upvotes, commentCount, subreddit, image } = post;

  return (
    <div className="post-card">
      {/* Vote section */}
      <div className="vote-section">
        <button className="vote-btn">▲</button>
        <span>{upvotes}</span>
        <button className="vote-btn">▼</button>
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
