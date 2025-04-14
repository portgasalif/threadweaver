import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPopularSubreddits } from "../../services/redditApi";

export const fetchSubreddits = createAsyncThunk(
  "subreddits/fetchSubreddits",
  async () => {
    const response = await fetchPopularSubreddits();
    return response;
  }
);

const subredditsSlice = createSlice({
  name: "subreddits",
  initialState: {
    subreddits: [],
    status: "idle",
    error: null,
    selectedSubreddit: "popular",
  },

  reducers: {
    selectSubreddit: (state, action) => {
      state.selectedSubreddit = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchSubreddits.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSubreddits.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.subreddits = action.payload;
      })
      .addCase(fetchSubreddits.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { selectSubreddit } = subredditsSlice.actions;
export default subredditsSlice.reducer;
