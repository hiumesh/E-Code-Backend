const { Router } = require('express')
const { createTag, findAllCategoryTags, createTagBulk } = require('../controller/tag')
const { checkAuth } = require('../middleware/auth')

const router = Router()

router.get('/getAll', checkAuth,  findAllCategoryTags)
router.post('/create', checkAuth, createTag)
router.post('/bulkCreate', checkAuth, createTagBulk)

module.exports = router
