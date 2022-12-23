import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleChord, selectSingleChord } from "../features/singleChord/singleChordSlice";
import NotesList from "./NotesList";

const SingleChord = ( chordId ) => {

  const singleChord = useSelector(selectSingleChord);

  const { notes, name } = singleChord;

  console.log("single chord: ", singleChord)
  console.log("single chord notes: ", notes)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleChord(chordId.chordId));
}, [dispatch])

  return (
  <div id="single-chord" className="column">
    <h1>{name}</h1>
    { notes && notes.length ?
     <NotesList notes={notes} /> : 'no notes here'}
  </div>
  )

}

export default SingleChord


/* {notes && notes.length ? notes
.map((note) => (
  <p key={`${note.id}`}>{note.name}</p>
)) : null} */
