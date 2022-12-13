const { Router } = require('express')
const router  = Router()

router.use('/user', require('./user'))
router.use('/category', require('./category'))
router.use('/session', require('./session'))
router.use('/tag', require('./tag'))
router.use('/company', require('./company'))
router.use('/language', require('./language'))
router.use('/problem', require('./problem'))
router.use('/blog', require('./blog'))
router.use('comment', require('./comment'))
router.use('/upload', require('./upload'))

module.exports = router
