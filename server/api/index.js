const router = require('express').Router()

router.use('/chords', require('./chords'))
router.use('/keys', require('./keys'))
router.use('/notes', require('./notes'))


module.exports = router
