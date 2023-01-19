import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
};

export const fetchSingleKey = createAsyncThunk('singleKey', async (keyName) => {
  try {
    const { data } = await axios.get(`/api/keys/${keyName}`);
    return data;
  } catch (err) {
    console.error("error fetching single key",err);
  }
});


const singleKeySlice = createSlice({
  name: 'singleKey',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchSingleKey.fulfilled, (state, action) => {
      return action.payload;
    })
  },
});

export const selectSingleKey = (state) => {
  return state.singleKey;
};

export default singleKeySlice.reducer;
