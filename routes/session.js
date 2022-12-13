const { Router } = require('express')
const { destoryUserSession, findAllUserSessions } = require('../controller/session')
const { checkAuth } = require('../middleware/auth')

const router = Router()

router.get('/getAllUserSession', checkAuth, findAllUserSessions)
router.delete('/delete', checkAuth, destoryUserSession)

module.exports = router