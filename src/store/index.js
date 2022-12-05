import { configureStore } from "@reduxjs/toolkit";
import storiesSlice from "../features/stories/storiesSlice";
import singleStorySlice from "../features/singleStory/singleStorySlice";

const store = configureStore({
  reducer: {
    stories: storiesSlice,
    singleStory: singleStorySlice,
  },
});

export default store;
