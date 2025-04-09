export const fetchSubredditPosts = async (subreddit = "popular") => {
  try {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const json = await response.json();
    return json.data.children.map((post) => ({
      id: post.data.id,
      title: post.data.title,
      author: post.data.author,
      subreddit: post.data.subreddit,
      upvotes: post.data.ups,
      commentCount: post.data.num_comments,
      image:
        post.data.thumbnail && post.data.thumbnail.includes("http")
          ? post.data.thumbnail
          : null,
    }));
  } catch (error) {
    console.error("Error fetching subreddit posts:", error);
    throw error;
  }
};
