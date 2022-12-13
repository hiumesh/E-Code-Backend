const { Router } = require('express')
const { createCategory, findAllCategories } = require('../controller/category')
const { checkAuth } = require('../middleware/auth')

const router = Router()

router.get('/get', checkAuth, findAllCategories)
router.post('/create', checkAuth, createCategory)

module.exports = router
