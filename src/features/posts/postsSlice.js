import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSubredditPosts, searchPosts } from "../../services/redditApi";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (subreddit = "popular") => {
    const response = await fetchSubredditPosts(subreddit);
    return response;
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
  },
  reducers: {
    votePost: (state, action) => {
      const { postId, status, change } = action.payload;
      state.postVotes[postId] = { status, change };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
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

export const { votePost } = postsSlice.actions;
export default postsSlice.reducer;
