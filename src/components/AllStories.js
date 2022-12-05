import React from "react";
import { useSelector } from "react-redux";
import { selectStories } from "../features/stories/storiesSlice";

import { NavLink } from "react-router-dom";

const AllStories = () => {
  const stories = useSelector(selectStories);
  return (
    <div id="stories" className="column">
      {stories && stories.length
        ? stories.map((story) => (
            <div className="story" key={`All Stories ${story.id}`}>
              <NavLink to={`/stories/${story.id}`}>
                <h3>{story.title}</h3>
              </NavLink>
              <NavLink to={`/authors/${story.author.id}`}>
                <p>{story.author.name}</p>
              </NavLink>
              <hr />
            </div>
          ))
        : null}
    </div>
  );
};

export default AllStories;
