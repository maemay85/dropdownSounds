import { configureStore } from "@reduxjs/toolkit";
import storiesSlice from "../features/stories/storiesSlice";

const store = configureStore({
  reducer: {
    stories: storiesSlice,
  },
});

export default store;
