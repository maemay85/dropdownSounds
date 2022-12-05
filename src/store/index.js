import { configureStore } from "@reduxjs/toolkit";
import storiesSlice from "../features/stories/storiesSlice";
import singleStorySlice from "../features/singleStory/singleStorySlice";
import authorsSlice from "../features/authors/authorsSlice";
import singleAuthorSlice from "../features/singleAuthor/singleAuthorSlice";

const store = configureStore({
  reducer: {
    stories: storiesSlice,
    singleStory: singleStorySlice,
    authors: authorsSlice,
    singleAuthor: singleAuthorSlice,
  },
});

export default store;
