import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  info: {},
  comments: [],
  stories: []
};

export const fetchSingleAuthor = createAsyncThunk('singleAuthor', async (authorId) => {
  try {
    const { data } = await axios.get(`/api/authors/${authorId}`);
    console.log(data, "data");
    return data;
  } catch (err) {
    console.error("error fetching single author",err);
  }
});

export const fetchAuthorComments = createAsyncThunk('singleAuthorComments', async (authorId) => {
  try {
    const { data } = await axios.get(`/api/authors/${authorId}/comments`);
    console.log(data, "data");
    return data;
  } catch (err) {
    console.error("error fetching single author comments",err);
  }
});

export const fetchAuthorStories = createAsyncThunk('singleAuthorStories', async (authorId) => {
  try {
    const { data } = await axios.get(`/api/authors/${authorId}/stories`);
    console.log(data, "data");
    return data;
  } catch (err) {
    console.error("error fetching single author stories",err);
  }
});

const singleAuthorSlice = createSlice({
  name: 'singleAuthor',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchSingleAuthor.fulfilled, (state, action) => {
      state.info = action.payload;
    })
    .addCase(fetchAuthorComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(fetchAuthorStories.fulfilled, (state, action)=>{
      state.stories = action.payload;
    })
  },
});

export const selectSingleAuthor = (state) => {
  return state.singleAuthor;
};

export default singleAuthorSlice.reducer;
