const dummyPosts = [
  {
    id: "post1",
    title: "How to solve CORS issues when developing React applications",
    author: "dev_expert",
    subreddit: "programming",
    upvotes: 423,
    commentCount: 56,
    image: "https://picsum.photos/id/237/400/300",
  },
  {
    id: "post2",
    title: "Amazing sunset I captured yesterday in Bali",
    author: "traveller99",
    subreddit: "travel",
    upvotes: 2105,
    commentCount: 132,
    image: "https://picsum.photos/id/1002/400/300",
  },
  {
    id: "post3",
    title: "My thoughts on React 18's new features",
    author: "reactfan",
    subreddit: "reactjs",
    upvotes: 843,
    commentCount: 75,
    image: null,
  },
  {
    id: "post4",
    title: "This simple trick reduced my bundle size by 40%",
    author: "webdev_guru",
    subreddit: "webdev",
    upvotes: 1256,
    commentCount: 97,
    image: "https://picsum.photos/id/3/400/300",
  },
  {
    id: "post5",
    title: "The most underrated JavaScript feature you should be using",
    author: "js_wizard",
    subreddit: "javascript",
    upvotes: 738,
    commentCount: 42,
    image: null,
  },
];

export const fetchSubredditPosts = async (subreddit = "popular") => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (subreddit && subreddit !== "popular") {
        const filteredPosts = dummyPosts.filter(
          (post) => post.subreddit.toLowerCase() === subreddit.toLowerCase()
        );
        resolve(filteredPosts);
      } else {
        resolve(dummyPosts);
      }
    }, 800);
  });
};

export const searchPosts = async (searchTerm) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredPosts = dummyPosts.filter(
        (post) =>
          post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.subreddit.toLowerCase().includes(searchTerm.toLowerCase())
      );
      resolve(filteredPosts);
    }, 800);
  });
};
