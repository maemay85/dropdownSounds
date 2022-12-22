import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CommentsList, StoriesList } from "./";
import { useParams, Routes, Route, NavLink } from "react-router-dom";
import { selectSingleAuthor, fetchSingleAuthor, fetchAuthorComments, fetchAuthorStories } from "../features/singleAuthor/singleAuthorSlice";



const SingleAuthor = () => {


  const { authorId } = useParams();

  const singleAuthor = useSelector(selectSingleAuthor);

  const { name, bio, id, imageUrl } = singleAuthor.info;
  console.log("single author info: ", singleAuthor.info)
  const { comments, stories } = singleAuthor



  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchSingleAuthor(authorId));
    dispatch(fetchAuthorComments(authorId));
    dispatch(fetchAuthorStories(authorId));
  }, [dispatch])

  return (
    <div id='single-author' className='column'>
      <div id='single-author-detail' className='row'>
        <div className='column mr1'>
          <h1>{name}</h1>
          <p>{bio}</p>
        </div>
        <img src={`/${imageUrl}`} />
      </div>
      <div id="single-author-nav">
        <NavLink to={`/authors/${id}/comments`}>Comments</NavLink>
        <NavLink to={`/authors/${id}/stories`}>Stories</NavLink>
      </div>
      <hr />
      <Routes>
        <Route path="/comments" element={<CommentsList comments={comments} />} />
        <Route path="/stories" element={<StoriesList stories={stories} />} />
      </Routes>
    </div>
  )
}

export default SingleAuthor
