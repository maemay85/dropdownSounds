import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchStoriesAsync = createAsyncThunk("allStories", async () => {
  try {
    const { data } = await axios.get(`/api/stories`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStoriesAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectStories = (state) => {
  return state.stories;
};
export default storiesSlice.reducer;
