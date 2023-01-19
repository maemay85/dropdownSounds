//eliminate this by adding musicalKey property to Chord model
// oh yeah?


const Sequelize = require('sequelize')
const db = require('./db')

const Key = db.define('key', {
  name: Sequelize.STRING,
})

module.exports = Key
