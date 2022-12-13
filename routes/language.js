const { Router } = require('express')
const { createLanguage, findAllCategoryLanguages, createLanguageBulk } = require('../controller/language')
const { checkAuth } = require('../middleware/auth')

const router = Router()

router.get('/getAll', checkAuth,  findAllCategoryLanguages)
router.post('/create', checkAuth, createLanguage)
router.post('/bulkCreate', checkAuth, createLanguageBulk)

module.exports = router
