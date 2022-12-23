import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  info: {},
  chords: []
};

export const fetchSingleKey = createAsyncThunk('singleKey', async (keyId) => {
  try {
    const { data } = await axios.get(`/api/keys/${keyId}`);
    console.log(data, "data");
    return data;
  } catch (err) {
    console.error("error fetching single key",err);
  }
});


export const fetchKeyChords = createAsyncThunk('singleKeyChords', async (keyId) => {
  try {
    const { data } = await axios.get(`/api/keys/${keyId}/chords`);
    console.log(data, "data");
    return data;
  } catch (err) {
    console.error("error fetching single key chords",err);
  }
});

const singleKeySlice = createSlice({
  name: 'singleKey',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchSingleKey.fulfilled, (state, action) => {
      state.info = action.payload;
    })
    .addCase(fetchKeyChords.fulfilled, (state, action)=>{
      state.chords = action.payload;
    })
  },
});

export const selectSingleKey = (state) => {
  return state.singleKey;
};

export default singleKeySlice.reducer;
