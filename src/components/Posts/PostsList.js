import React, { useEffect, useState } from "react";
import "./PostsList.css";
import PostCard from "./PostCard";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchPosts,
  searchPostsThunk,
  votePost,
} from "../../features/posts/postsSlice";

export const PostsList = ({ searchTerm }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);
  const postVotes = useSelector((state) => state.posts.postVotes);
  const selectedSubreddit = useSelector(
    (state) => state.subreddits.selectedSubreddit
  );

  const handleVote = (postId, newStatus, changeAmount) => {
    dispatch(votePost({ postId, status: newStatus, change: changeAmount }));
  };

  useEffect(() => {
    if (status === "idle" || status === "succeeded") {
      if (searchTerm) {
        dispatch(searchPostsThunk(searchTerm));
      } else {
        dispatch(fetchPosts(selectedSubreddit));
      }
    }
  }, [dispatch, selectedSubreddit, searchTerm, status]);

  if (status === "loading") {
    return <div className="loading">Loading...</div>;
  }

  if (status === "failed") {
    return <div className="error">Error: {error}</div>;
  }

  if (posts.length === 0) {
    return (
      <div className="no-posts">
        {searchTerm
          ? `No posts found for "${searchTerm}"`
          : "No posts available in the selected subreddit."}
      </div>
    );
  }

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          voteStatus={postVotes[post.id]?.status || 0}
          voteChange={postVotes[post.id]?.change || 0}
          handleVote={handleVote}
        />
      ))}
    </div>
  );
};

export default PostsList;
