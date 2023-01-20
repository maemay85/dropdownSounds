const Sequelize = require('sequelize')
const db = require('./db')
const Note = require('./Note')
const Chord = require('./Chord')

const KeyNotes = db.define('KeyNotes', {
  noteId: {
    type: Sequelize.INTEGER,
    references: {
      model: Note,
      key: 'id'
    }
  },
  chordId: {
    type: Sequelize.INTEGER,
    references: {
      model: Chord,
      key: 'id'
    }
  }

}, { timestamps: false })

module.exports = KeyNotes
