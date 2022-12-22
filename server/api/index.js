const router = require('express').Router()

router.use('/chords', require('./chords'))
router.use('/keys', require('./keys'))

module.exports = router
