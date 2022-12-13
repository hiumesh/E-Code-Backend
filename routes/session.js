const { Router } = require('express')
const { destoryUserSession, findAllUserSessions } = require('../controller/session')
const { checkAuth } = require('../middleware/auth')

const router = Router()

router.post('/getAllUserSession', checkAuth, findAllUserSessions)
router.post('/delete', checkAuth, destoryUserSession)

module.exports = router