import React from "react";


const ChordsList = ({ chords }) => {
  console.log('ChordsList:', chords)

  return (
    <div id="chordslist">
      <ul>
        <h2>Triads:</h2>
        {chords.map(chord =>
          <li key={chord}>
<div>
              <h3>{chord}</h3>

          </div></li>)}
      </ul>
    </div>
  );
};

export default ChordsList;
