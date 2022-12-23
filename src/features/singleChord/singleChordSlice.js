import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};

export const fetchSingleChord = createAsyncThunk('singleChord', async (id) => {
  try {
    const { data } = await axios.get(`/api/chords/${id}`);
    console.log(data, "data");
    return data;
  } catch (err) {
    console.log(err);
  }
});

const singleChordSlice = createSlice({
  name: 'singleChord',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleChord.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectSingleChord = (state) => {
  return state.singleChord;
};

export default singleChordSlice.reducer;
