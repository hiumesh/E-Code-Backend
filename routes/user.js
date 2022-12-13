const { Router } = require('express')
const { createUser, loginUser, logoutUser, checkUserAuthentication } = require('../controller/user')
const { checkAuth } = require('../middleware/auth')

const router = Router()

router.post('/login', loginUser)
router.post('/signup', createUser)
router.get('/logout', checkAuth, logoutUser)
router.get('/checkAuth', checkAuth, checkUserAuthentication)

module.exports = router
