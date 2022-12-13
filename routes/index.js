const { Router } = require('express')
const router  = Router()

router.use('/category', require('./category'))
router.use('/user', require('./user'))
router.use('/session', require('./session'))

module.exports = router
