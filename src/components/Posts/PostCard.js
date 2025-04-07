import React from "react";
import "./PostCard.css";

export const PostCard = ({
  title,
  author,
  upvotes,
  num_comments,
  subreddit,
  thumbnail,
}) => {
  return (
    <div className="post-card">
      <h2>{title}</h2>
      {thumbnail && (
        <div className="post-thumbnail">
          <img src={thumbnail} alt="" />
        </div>
      )}
      <div className="post-details">
        <span>Posted by {author}</span>
        <span>Subreddit: {subreddit}</span>

        <div className="post-stats">
          <span>{upvotes} upvotes</span>
          <span>{num_comments} comments</span>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
