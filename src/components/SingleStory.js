import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectSingleStory, fetchSingleStory } from "../features/singleStory/singleStorySlice";

const SingleStory = () => {

  const dispatch = useDispatch();
  const { storyId } = useParams();
  const singleStory = useSelector(selectSingleStory);
  const { content, comments, title } = singleStory;

  useEffect(()=> {
    dispatch(fetchSingleStory(storyId));}, [dispatch]);


  return (
    <div id="single-story" className="column">
    <h1>{title}</h1>
    {content && content.length ? content
      .split("\n")
      .map((line, idx) => (
        <p key={`Inside of content.split.map in single story${idx}`}>{line}</p>
      )) : null}
    <h3>Responses:</h3>
    <div id="comments">
      <div className="comment row">
        {comments && comments.length ? (
          <>
            <img src={`/${comments[0].author.imageUrl}`} />
            <div className="column">
              <a>
                <h5>{comments[0].author.name}</h5>
              </a>
              <div>{comments[0].content}</div>
            </div>
          </>) : null}
      </div>



    </div>
  </div>
  )

}

export default SingleStory
