import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleKey, selectSingleKey } from "../features/singleKey/singleKeySlice";
import ChordsList from "./ChordsList";
import NotesList from "./NotesList";



const SingleKey = () => {

  const { keyName } = useParams();
  const singleKey = useSelector(selectSingleKey);
  const { name, keyNotes, triads, seventhChords } = singleKey
  console.log("single key: ", name)
  const dispatch = useDispatch();
  const [complexity, setComplexity] = useState("triads");

  const handleComplexityChange = (e) => {
    setComplexity(e.target.checked ? "triads" : "sevenths");
  }

  useEffect(()=> {
    dispatch(fetchSingleKey(keyName));
  }, [keyName])

  return (
    <div id='single-key'>
      <div>
        <label className="switch">
          <input type="checkbox" name="complexity" onClick={handleComplexityChange} />
          <span className="slider"></span>
        </label>
        Complexity: {complexity === "triads" ? "Triads" : "7th Chords"}
      </div>
      <h3>Key: <br/>{name}</h3>

      {complexity === "triads" && triads && triads.length ? <ChordsList chords={triads}/> : null}
      {complexity === "sevenths" && seventhChords && seventhChords.length ? <ChordsList chords={seventhChords}/> : null}
      {keyNotes && keyNotes.length ? <NotesList notes={keyNotes}/> : null}

    </div>
  )
}

export default SingleKey
