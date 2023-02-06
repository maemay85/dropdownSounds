import React from "react";


const ChordsList = ({ chords }) => {
  console.log('ChordsList:', chords)
  const formattedChords = chords.map((chord)=>chord.includes('Flat') ? chord.replace('Flat', '♭') : chord).map((chord)=>chord.includes('Sharp') ? chord.replace('Sharp','♯') : chord)

  return (
    <div id="chordslist">
      <ul>
        {formattedChords[0].includes('7') ? <h3>Seventh Chords:</h3> : <h3>Triads:</h3>}
        {formattedChords.map(chord =>
          <li key={chord}>
<div>
              <h3>{chord}</h3>

          </div></li>)}
      </ul>
    </div>
  );
};

export default ChordsList;
