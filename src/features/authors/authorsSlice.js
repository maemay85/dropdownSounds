import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchAuthorsAsync = createAsyncThunk("allAuthors", async () => {
  try {
    const { data } = await axios.get(`/api/authors`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

const authorsSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAuthorsAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAuthors = (state) => {
  return state.authors;
};
export default authorsSlice.reducer;
