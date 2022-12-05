import React, { useEffect } from "react";
import { Navbar, AllStories, AllAuthors, SingleStory, SingleAuthor } from "./";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthorsAsync } from "../features/authors/authorsSlice";
import { fetchStoriesAsync } from "../features/stories/storiesSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthorsAsync());
    dispatch(fetchStoriesAsync());
  }, [dispatch]);

  return (
    <div id="main">
      <div className="column container">
        <div id="header">
          <h1>Readium</h1>
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path="/stories" element={<AllStories />} />
        <Route path="/authors" element={<AllAuthors />} />
        <Route path="/stories/:storyId/*" element={<SingleStory />} />
        <Route path="/authors/:authorId/*" element={<SingleAuthor />} />
        <Route path="/" element={<AllStories />} />
      </Routes>
    </div>
  );
};

export default App;
