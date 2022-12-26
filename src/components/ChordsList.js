import React from "react";

import NotesList from './NotesList';


const ChordsList = ({ chords }) => {
  console.log('ChordsList:', chords)

  return (
    <div id="chordslist">
      <ul>
        <h2>Chords:</h2>
        {chords.map(chord =>
          <li key={chord.id}>
<div>
              <h3>{chord.name} =>&nbsp;</h3>
              { chord.notes && chord.notes.length ?
                <NotesList notes={chord.notes} /> : 'no notes here'}
          </div></li>)}
      </ul>
    </div>
  );
};

export default ChordsList;
