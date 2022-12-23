import React from "react";

import SingleChord from "./SingleChord";


const ChordsList = ({ chords }) => {
  console.log('ChordsList:', chords)
  return (
    <div id="chordslist" className="column">
      <h2>Chords:</h2>
       {chords.map(chord =>
        <div key={chord.id}>
          <SingleChord chordId={chord.id} />
        </div>)}
    </div>
  );
};

export default ChordsList;
