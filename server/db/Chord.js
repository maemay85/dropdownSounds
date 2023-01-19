const Sequelize = require('sequelize')
const db = require('./db')

const Chord = db.define('chord', {
  name: Sequelize.STRING,
  complexity: Sequelize.ENUM('triad', '7th', '9th', '11th', '13th'),
  degree: Sequelize.INTEGER,
  musicalKey: Sequelize.ENUM('c', 'f', 'bFlat', 'eFlat', 'aFlat', 'dFlat', 'gFlat', 'g', 'd', 'a', 'e', 'b', 'fSharp', 'cSharp'),
  chordNotes: Sequelize.ARRAY(Sequelize.STRING)
}, { timestamps: false })

module.exports = Chord
