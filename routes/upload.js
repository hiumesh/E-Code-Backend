const { Router } = require('express')
const multer = require('../middleware/multer')
const { checkAuth } = require('../middleware/auth')

const router = Router()

router.post('/pictures', checkAuth, multer.array('pictures', 12), (req, res) => {
  
  res.send({
    success: true,
    data: req.files
  })
})

module.exports = router
