import React from "react";
import { Navbar, StoriesList } from "./";
import { fetchStoriesAsync } from "../features/stories/storiesSlice";

const App = () => {
  return (
    <div id="main">
      <div className="column container">
        <div id="header">
          <h1>Readium</h1>
        </div>
        <Navbar />
      </div>
      <StoriesList />
    </div>
  );
};

export default App;
