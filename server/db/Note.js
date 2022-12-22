const Sequelize = require('sequelize')
const db = require('./db')

const Note = db.define('note', {
  name: Sequelize.STRING, //c
  audioUrl: Sequelize.STRING, //./public/audio/c2.mp3
  octave: Sequelize.ENUM('2', '3') //2
})

// associations:
// belong to x number of keys
//   -
// belong to x number of chords


//example:

//The note 'C'
//Key | Degree
//----|-------
// C  |   I
// Db |   vii
// E  |   vi
// F  |   V
// G  |   IV
// Ab |   iii
// Bb |   ii


//The Key of C
// Deg       Chord   notes
//---------|--------|--------
// I  Maj  |  C Maj |  C E G
// ii min  |  D min |  D F A
// iii min |  E min |  E G B
// IV Maj  |  F Maj |  F A C
// V  Maj  |  G Maj |  G B C
// vi min  |  A min |  A C E
// vii dim |  B dim |  B D E

//Key

// name: String, (C Maj, D Maj, F# Maj)
// I : String, (C Maj, D Maj, F# Maj)
// ii: String, (d min, e min, g# min)
// iii: String,
// IV: St

//The Key of D
// Deg       Chord
//---------|------|
// I  Maj  |   D  |
// ii min  |   E  |
// iii min |   F# |
// IV Maj  |   G  |
// V  Maj  |   A  |
// vi min  |   B  |
// vii dim |   C# |



//The chord 'C Maj'
//Key | Degree
//----|-------
// C  |   I
// F  |   V
// G  |   IV





module.exports = Note
