import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};

export const fetchSingleStory = createAsyncThunk('singleStory', async (id) => {
  try {
    const { data } = await axios.get(`/api/stories/${id}`);
    console.log(data, "data");
    return data;
  } catch (err) {
    console.log(err);
  }
});

const singleStorySlice = createSlice({
  name: 'singleStory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleStory.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectSingleStory = (state) => {
  return state.singleStory;
};

export default singleStorySlice.reducer;
