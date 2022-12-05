import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CommentsList from './CommentsList';
import { selectSingleStory, fetchSingleStory } from "../features/singleStory/singleStorySlice";

const SingleStory = () => {

  const dispatch = useDispatch();
  const { storyId } = useParams();
  const singleStory = useSelector(selectSingleStory);
  const { content, comments, title } = singleStory;

  useEffect(()=> {
    dispatch(fetchSingleStory(storyId))}, [dispatch]);


  return (
    <div id="single-story" className="column">
    <h1>{title}</h1>
    {content && content.length ? content
      .split("\n")
      .map((line, idx) => (
        <p key={`Inside of content.split.map in single story${idx}`}>{line}</p>
      )) : null}
    <h3>Responses:</h3>
    <CommentsList comments={comments} />
  </div>
  )

}

export default SingleStory
