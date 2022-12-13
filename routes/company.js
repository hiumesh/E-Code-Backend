const { Router } = require('express')
const { createCompany, findAllCompanies, createCompanyBulk } = require('../controller/company')
const { checkAuth } = require('../middleware/auth')

const router = Router()

router.get('/getAll', checkAuth,  findAllCompanies)
router.post('/create', checkAuth, createCompany)
router.post('/bulkCreate', checkAuth, createCompanyBulk)

module.exports = router
