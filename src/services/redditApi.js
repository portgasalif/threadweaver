export const fetchSubredditPosts = async (subreddit = "popular") => {
  try {
    const apiUrl = `https://www.reddit.com/r/${subreddit}.json`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    return data.data.children.map((post) => ({
      id: post.data.id,
      title: post.data.title,
      author: post.data.author,
      subreddit: post.data.subreddit,
      upvotes: post.data.ups ?? post.data.score ?? 0,
      commentCount: post.data.num_comments || 0,
      image:
        post.data.thumbnail !== "self" && post.data.thumbnail !== "default"
          ? post.data.thumbnail
          : null,
    }));
  } catch (error) {
    console.error("Error fetching subreddit posts:", error);
    throw error;
  }
};

export const searchPosts = async (searchTerm) => {
  try {
    const apiUrl = `https://www.reddit.com/search.json?q=${encodeURIComponent(
      searchTerm
    )}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    return data.data.children.map((post) => ({
      id: post.data.id,
      title: post.data.title,
      author: post.data.author,
      subreddit: post.data.subreddit,
      upvotes: post.data.ups || post.data.score || 0,
      commentCount: post.data.num_comments || 0,
      image:
        post.data.thumbnail !== "self" && post.data.thumbnail !== "default"
          ? post.data.thumbnail
          : null,
    }));
  } catch (error) {
    console.error("Error searching posts:", error);
    throw error;
  }
};

export const fetchPopularSubreddits = async () => {
  try {
    const response = await fetch(
      "https://www.reddit.com/subreddits/popular.json?limit=10"
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    const icons = ["📚", "🌐", "💬", "📰", "🔥", "✨", "👍", "🎮", "📷", "🎵"];

    return data.data.children.map((subreddit, index) => ({
      id: index,
      name: subreddit.data.display_name.toLowerCase(),
      icon: icons[index % icons.length],
    }));
  } catch (error) {
    console.error("Error fetching popular subreddits:", error);
    throw error;
  }
};
