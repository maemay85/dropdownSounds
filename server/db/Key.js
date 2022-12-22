const Sequelize = require('sequelize')
const db = require('./db')

const Key = db.define('key', {
  name: Sequelize.STRING,
})

module.exports = Key
