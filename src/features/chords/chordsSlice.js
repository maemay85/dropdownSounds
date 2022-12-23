import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchChordsAsync = createAsyncThunk("allChords", async () => {
  try {
    const { data } = await axios.get(`/api/chords`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

const chordsSlice = createSlice({
  name: "chords",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChordsAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectChords = (state) => {
  return state.chords;
};
export default chordsSlice.reducer;
