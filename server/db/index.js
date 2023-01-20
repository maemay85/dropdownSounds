const db = require('./db')
const Key = require('./Key')
const Note = require('./Note')
const Chord = require('./Chord')
const KeyNotes = require('./KeyNotes')

Note.belongsToMany(Key, {
  through: KeyNotes,
})

Chord.belongsToMany(Note, {
  through: KeyNotes,
})

Chord.belongsToMany(Key, {
  through: KeyNotes,
})



/*
Note.belongsToMany(Chord, {
  through: 'ChordNotes',
  as: "chords",
  foreignKey: "noteId"
});

Chord.belongsToMany(Note, {
  through: 'ChordNotes',
  as: "notes",
  foreignKey: "chordId"
});

Chord.belongsToMany(Key, {
  through: 'KeyChords',
  as: "keys",
  foreignKey: "chordId"
});

Key.belongsToMany(Chord, {
  through: "KeyChords",
  as: "chords",
  foreignKey: "keyId"
});
 */




module.exports = {
  db,
  KeyNotes,
  Key,
  Note,
  Chord
}
