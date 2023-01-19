const router = require('express').Router()
const {Chord} = require('../db')

// GET /api/chords
router.get('/', async (req, res, next) => {
  try {
    const chords = await Chord.findAll()
    res.json(chords)
  }
  catch (error) {
    next(error)
  }
})

// GET /api/chords/:chordId
router.get('/:chordName', async (req, res, next) => {
  try {
    const chord = await Chord.findOne({where: {name: req.params.chordName}})
    res.json(chord)
  }
  catch (error) {
    next(error)
  }
})

module.exports = router
