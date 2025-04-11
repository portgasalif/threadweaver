import React, { useEffect, useState } from "react";
import "./PostsList.css";
import PostCard from "./PostCard";
import { fetchSubredditPosts } from "../../services/redditApi";
import { searchPosts } from "../../services/redditApi";

export const PostsList = ({ selectedSubreddit, searchTerm }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        let fetchedPosts;
        if (searchTerm) {
          fetchedPosts = await searchPosts(searchTerm);
        } else {
          fetchedPosts = await fetchSubredditPosts(selectedSubreddit);
        }
        setPosts(fetchedPosts);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [selectedSubreddit, searchTerm]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
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
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
