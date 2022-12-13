const { Router } = require('express')
const { parse } = require('../controller/markdown')
const { checkAuth } = require('../middleware/auth')

const router = Router()

router.post('/parse', checkAuth, parse)

module.exports = router
