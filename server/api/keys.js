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
    const key = await Key.findByPk(req.params.keyId, {
      include: [
        {
          model: Chord, as: "chords"
        }
      ]
    })
    res.json(key)
  }
  catch (error) {
    next(error)
  }
})

module.exports = router
