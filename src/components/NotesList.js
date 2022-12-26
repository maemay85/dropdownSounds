import React from "react";
import { Howl, Howler } from 'howler';


const NotesList = ({ notes }) => {
  console.log('NotesList:', notes)

  return (
    <div id="noteslist">
      <h3>Notes:</h3>
      <ul>

       {notes.map(note =>
      <li key = {note.id}>
        {note.name}
      </li>
       )}
    </ul>
    </div>
  );
};

export default NotesList;
