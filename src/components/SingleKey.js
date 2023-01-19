import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleKey, selectSingleKey } from "../features/singleKey/singleKeySlice";



const SingleKey = () => {


  const { keyName } = useParams();

  const singleKey = useSelector(selectSingleKey);

  const { name, keyNotes, triads, seventhChords } = singleKey

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchSingleKey(keyName));
  }, [dispatch])

  return (
    <div id='single-key'>
    <div className="column">
      <h1>Key: {name}</h1>
      <h2>Notes: </h2>
      <h3>{keyNotes && keyNotes.length? keyNotes.map((note)=> `${note} `) : null}</h3>
      <h2>Triads: </h2>
      <h3>{triads && triads.length? triads.map((chord)=> `${chord} `) : null}</h3>
      <h2>Seventh Chords: </h2>
      <h3>{seventhChords && seventhChords.length? seventhChords.map((chord)=> `${chord} `) : null}</h3>
     </div>
    </div>
  )
}

export default SingleKey
