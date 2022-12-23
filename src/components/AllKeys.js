import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAuthors } from "../features/keys/keysSlice";

const AllKeys = () => {
  const keys = useSelector(selectKeys);
  return (
    <div>
      {keys && keys.length
        ? keys.map((key) => (
              <Link to={`/keys/${key.id}`}
                   key={`All Keys: ${key.id}`}>
                  <div className="key row">
                    <p>{key.name}</p>
                    </div>
              </Link>
          ))
        : null}
    </div>
  );
};

export default AllKeys;