const { Router } = require('express')
const { createBlog, getAll, getUserBlogs, updateBlog } = require('../controller/blog')
const { checkAuth } = require('../middleware/auth')

const router = Router()

router.get('/getAll', checkAuth, getAll)
router.get('/get', checkAuth, getUserBlogs)
router.post('/create', checkAuth, createBlog)
router.post('/update', checkAuth, updateBlog)

module.exports = router
