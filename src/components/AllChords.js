import React from "react";
import { useSelector } from "react-redux";
import { selectChords } from "../features/chords/chordsSlice";


const AllChords = () => {
  const chords = useSelector(selectChords);
  console.log(chords)
  return (
    <div id="chords" className="column">
      {chords && chords.length
        ? chords.map((chord) => (
            <div className="chord" key={`All Chords ${chord.id}`}>
                <h3>{chord.name}</h3>

              <hr />
            </div>
          ))
        : null}
    </div>
  );
};

export default AllChords;
