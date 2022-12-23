import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchKeysAsync = createAsyncThunk("allKeys", async () => {
  try {
    const { data } = await axios.get(`/api/keys`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

const keysSlice = createSlice({
  name: "keys",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchKeysAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectKeys = (state) => {
  return state.keys;
};
export default keysSlice.reducer;
