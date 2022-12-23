const router = require('express').Router()
const {Note, Chord} = require('../db')

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
router.get('/:chordId', async (req, res, next) => {
  try {
    const chord = await Chord.findByPk(req.params.chordId, {
      include: [
        {
          model: Note, as: "notes"
        }
      ]
    })
    res.json(chord)
  }
  catch (error) {
    next(error)
  }
})

module.exports = router
