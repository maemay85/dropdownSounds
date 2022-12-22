const db = require('./db')
const Key = require('./Key')
const Note = require('./Note')
const Chord = require('./Chord')

Key.belongsToMany(Chord, { through: 'KeyChords' });
Chord.belongsToMany(Key, { through: 'KeyChords' });

Chord.belongsToMany(Note, { through: 'ChordNotes' });
Note.belongsToMany(Chord, { through: 'ChordNotes' });

console.log('Key Magic methods: ', Object.keys(Key.prototype) );
console.log('Chord Magic methods: ', Object.keys(Chord.prototype) );
console.log('Note Magic methods: ', Object.keys(Note.prototype) );

module.exports = {
  db,
  Key,
  Note,
  Chord
}
