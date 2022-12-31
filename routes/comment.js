const { Router } = require('express')
const { createBlogComment, getBlogComments, getUserAllBlogComments } = require('../controller/blogComment')
const { createProblemComment, getProblemComments } = require('../controller/problemComment')
const { checkAuth } = require('../middleware/auth')

const router = Router()

router.get('/blog/get', checkAuth, getBlogComments)
router.get('/blog/getAll', checkAuth, getUserAllBlogComments)
router.post('/blog/create', checkAuth, createBlogComment)
router.get('/problem/get', checkAuth, getProblemComments)
router.post('/problem/create', checkAuth, createProblemComment)

module.exports = router
