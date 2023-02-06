import React from "react";
import { Howl, Howler } from 'howler';


const NotesList = ({ notes }) => {
  const formattedNotes = notes.map((note)=>note.includes('Flat') ? note[0]+'♭' : note).map((note)=>note.includes('Sharp') ? note[0]+'♯' : note)

  return (
    <div id="noteslist">
      <h3>Notes:</h3>
      <ul>

       {formattedNotes.map(note =>
      <li key = {note}>
        {note}
      </li>
       )}
    </ul>
    </div>
  );
};

export default NotesList;
