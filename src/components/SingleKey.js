import React, { useEffect } from "react";
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

  useEffect(()=> {
    dispatch(fetchSingleKey(keyName));
  }, [dispatch])

  return (
    <div id='single-key'>

      <h3>Key: <br/>{name}</h3>
      {triads && triads.length ? <ChordsList chords={triads}/> : null}
      {seventhChords && seventhChords.length ? <ChordsList chords={seventhChords}/> : null}
      {keyNotes && keyNotes.length ? <NotesList notes={keyNotes}/> : null}

    </div>
  )
}

export default SingleKey
