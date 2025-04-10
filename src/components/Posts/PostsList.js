import React, { useEffect, useState } from "react";
import "./PostsList.css";
import PostCard from "./PostCard";
import { fetchSubredditPosts } from "../../services/redditApi";

export const PostsList = ({ selectedSubreddit }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const fetchedPosts = await fetchSubredditPosts(selectedSubreddit);
        setPosts(fetchedPosts);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [selectedSubreddit]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (posts.length === 0) {
    return (
      <div className="no-posts">
        No posts available in r/{selectedSubreddit}
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
