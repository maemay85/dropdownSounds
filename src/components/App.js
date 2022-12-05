import React, {useEffect} from "react";
import { Navbar, StoriesList, SingleStory } from "./";
import { fetchStoriesAsync } from "../features/stories/storiesSlice";
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStoriesAsync());
  }, [dispatch]);

  return (
    <div id="main">
      <div className="column container">
        <div id="header">
          <h1>Readium</h1>
        </div>
        <Navbar />
      </div>
      <Routes>
       <Route path='/stories' element={<StoriesList />} />
       <Route path='/single-story' element = {<SingleStory />} />
      </Routes>

    </div>
  );
};

export default App;
