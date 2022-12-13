const { Router } = require('express')
const { createProblem, getAll, getUserProblems } = require('../controller/problem')
const { checkAuth } = require('../middleware/auth')

const router = Router()

router.get('/getAll', checkAuth, getAll)
router.get('/get', checkAuth, getUserProblems)
router.post('/create', checkAuth, createProblem)

module.exports = router
