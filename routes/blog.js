const { Router } = require('express')
const { createBlog, getAll, getUserBlogs, updateBlog, changeBlogStatus, like, bookmark } = require('../controller/blog')
const { checkAuth } = require('../middleware/auth')

const router = Router()

router.get('/getAll', checkAuth, getAll)
router.get('/get', checkAuth, getUserBlogs)
router.post('/create', checkAuth, createBlog)
router.post('/update', checkAuth, updateBlog)
router.get('/status', checkAuth, changeBlogStatus)
router.get('/like', checkAuth, like)
router.get('/bookmark', checkAuth, bookmark)

module.exports = router
