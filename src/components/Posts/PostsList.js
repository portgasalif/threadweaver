import React from "react";
import "./PostsList.css";
import PostCard from "./PostCard";

const dummyPosts = [
  {
    id: 1,
    title: "Ini adalah judul post pertama yang agak panjang untuk testing UI",
    author: "user123",
    subreddit: "webdev",
    upvotes: 420,
    commentCount: 69,
    timePosted: "5 hours ago",
    image: "https://picsum.photos/200/200",
  },
  {
    id: 2,
    title: "Cara membuat Reddit client dengan React dan Redux",
    author: "reactdev",
    subreddit: "reactjs",
    upvotes: 132,
    commentCount: 24,
    timePosted: "2 days ago",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    title: "Apa pendapat kalian tentang framework JavaScript terbaru?",
    author: "jsmaster",
    subreddit: "programming",
    upvotes: 55,
    commentCount: 43,
    timePosted: "12 hours ago",
    image: null,
  },
];
export const PostsList = () => {
  return (
    <div className="posts-container">
      {dummyPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
