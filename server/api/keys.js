const router = require('express').Router()
const {Key} = require('../db')

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
router.get('/:keyName', async (req, res, next) => {
  try {
    const key = await Key.findOne({where: {name: `${req.params.keyName}`}})
    res.json(key)
  }
  catch (error) {
    next(error)
  }
})

module.exports = router
