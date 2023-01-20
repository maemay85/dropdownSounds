//eliminate this by adding musicalKey property to Chord model
// oh


const Sequelize = require('sequelize')
const db = require('./db')

const Key = db.define('key', {
  name: Sequelize.STRING,
  //keyNotes: Sequelize.ARRAY(Sequelize.STRING),
  triads: Sequelize.ARRAY(Sequelize.STRING),
  seventhChords: Sequelize.ARRAY(Sequelize.STRING),

}, { timestamps: false })

module.exports = Key
