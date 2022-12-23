import { configureStore } from "@reduxjs/toolkit";
import chordsSlice from "../features/chords/chordsSlice";
import singleChordSlice from "../features/singleChord/singleChordSlice";
import keysSlice from "../features/keys/keysSlice";
import singleKeySlice from "../features/singleKey/singleKeySlice";

const store = configureStore({
  reducer: {
    chords: chordsSlice,
    singleChord: singleChordSlice,
    keys: keysSlice,
    singleKey: singleKeySlice,
  },
});

export default store;
