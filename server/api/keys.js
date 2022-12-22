const router = require('express').Router()
const {Key, Note, Chord} = require('../db')

// GET /api/keys
router.get('/', async (req, res, next) => {
  try {
    const keys = await Key.findAll()
    res.json(keys)
  }
  catch (error) {
    next(error)
  }
})

// GET /api/keys/:keyId
router.get('/:keyId', async (req, res, next) => {
  try {
    const key = await Key.findByPk(req.params.keyId)
    res.json(key)
  }
  catch (error) {
    next(error)
  }
})

// GET /api/keys/:keyId/notes
router.get('/:keyId/notes', async (req, res, next) => {
  try {
    const notes = await Note.findAll({
      where: {
        keyId: req.params.keyId
      },
      include: [Key]
    })
    res.json(notes)
  }
  catch (error) {
    next(error)
  }
})

// GET /api/keys/:keyId/chords
router.get('/:keyId/chords', async (req, res, next) => {
  try {
    const chord = await Chord.findAll({
      where: {
        keyId: req.params.keyId
      },
      include: [Key]
    })
    res.json(chord)
  }
  catch (error) {
    next(error)
  }
})

module.exports = router
