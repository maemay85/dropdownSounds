import React from "react";
import { Howl, Howler } from 'howler';


const NotesList = ({ notes }) => {

  const SoundPlay = (src) => {
   const sound = new Howl({
      src
    })
    Howler.volume(.5)
    sound.play()
  }


  console.log('NotesList:', notes)
  return (
    <div id="noteslist" className="column">
       {notes.map((note, index) => {
      return (
        <button key={index} onClick={() => SoundPlay(note.audioUrl)}>{note.name}</button>
      )
    })}
    </div>
  );
};

export default NotesList;
