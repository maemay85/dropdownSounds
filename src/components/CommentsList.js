import React from "react";
import { Link } from "react-router-dom";


const CommentsList = ({ comments }) => {

  return (
    <div id="comments">

        {comments && comments.length ? (comments.map((comment)=>
        (
          <div className="comment row" key={`Comments List: ${comment.id}`} >
            <img src={`/${comment.author.imageUrl}`} />
            <div className="column">
              <Link to={`/authors/${comment.author.id}`}>
                <h5>{comment.author.name}</h5>
              </Link>
              <div>{comment.content}</div>
            </div>
          </div>))) : null}
      </div>
  )
}

export default CommentsList
