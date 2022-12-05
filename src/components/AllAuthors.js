import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAuthors } from "../features/authors/authorsSlice";

const AllAuthors = () => {
  const authors = useSelector(selectAuthors);
  return (
    <div>
      {authors && authors.length
        ? authors.map((author) => (
              <Link to={`/authors/${author.id}`}
                   key={`All Authors: ${author.id}`}>
                  <div className="author row">
                    <img src={author.imageUrl} />
                    <p>{author.name}</p>
                    </div>
              </Link>
          ))
        : null}
    </div>
  );
};

export default AllAuthors;
