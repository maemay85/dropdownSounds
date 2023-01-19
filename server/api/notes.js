const router = require('express').Router()
const {Note} = require('../db')

// GET /api/notes
router.get('/', async (req, res, next) => {
  try {
    const notes = await Note.findAll()
    res.json(notes)
  }
  catch (error) {
    next(error)
  }
})

// GET /api/notes/:noteName
router.get('/:noteName', async (req, res, next) => {
  try {
    const note = await Note.findOne({where: {name: req.params.noteName}})
    res.json(note)
  }
  catch (error) {
    next(error)
  }
})

module.exports = router
