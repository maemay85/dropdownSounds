import React from "react";


const NotesList = ({ notes }) => {
  console.log('NotesList:', notes)
  return (
    <div id="noteslist" className="column">

       {notes.map(note =>
        <div key={note.id}>
          {note.name}
        </div>)}
    </div>
  );
};

export default NotesList;
