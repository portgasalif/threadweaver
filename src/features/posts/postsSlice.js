import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSubredditPosts, searchPosts } from "../../services/redditApi";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (subreddit = "popular", { rejectWithValue }) => {
    try {
      const response = await fetchSubredditPosts(subreddit);
      return response;
    } catch (error) {
      console.error("Error in fetchPosts thunk:", error);
      return rejectWithValue(error.message || "Failed to fetch posts");
    }
  }
);

export const searchPostsThunk = createAsyncThunk(
  "posts/searchPosts",
  async (searchTerm) => {
    const response = await searchPosts(searchTerm);
    return response;
  }
);
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
    postVotes: {},
    searchTerm: "",
  },
  reducers: {
    votePost: (state, action) => {
      const { postId, status, change } = action.payload;
      state.postVotes[postId] = { status, change };
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase("subreddits/selectSubreddit", (state) => {
        state.status = "idle";
      })
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
        state.error = null;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      })

      .addCase(searchPostsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchPostsThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(searchPostsThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { votePost, setSearchTerm } = postsSlice.actions;

export default postsSlice.reducer;
