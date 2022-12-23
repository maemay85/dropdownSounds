const Sequelize = require('sequelize')
const db = require('./db')

const Chord = db.define('chord', {
  name: Sequelize.STRING, //examples: 'C Maj', 'a min'
  //complexity: Sequelize.ENUM('triad', '7th', '9th', '11th', '13th'),
})

module.exports = Chord
