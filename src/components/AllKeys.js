import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectKeys } from "../features/keys/keysSlice";

const AllKeys = () => {
  const keys = useSelector(selectKeys);
  console.log(keys)
  return (
    <div id="keyslist">
      {keys && keys.length
        ? keys.map((key) => (
              <Link to={`/keys/${key.name}`}
                   key={`All Keys: ${key.name}`}>
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
