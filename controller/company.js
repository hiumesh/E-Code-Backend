const companyService = require('../services/company')

const findAllCompanies = async (req, res) => {
  try {
    const companies = await companyService.findAll()
    return res.send({
      success: true,
      message: "SUCCESSFULLY FEATCHED ALL COMPANIES",
      data: companies,
    })
  } catch(err) {
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO FEATCH ALL COMPANIES",
    })
  }
}

const createCompany = async(req, res) => {
  try {
    const company = await companyService.create(req.body)
    return res.send({
      success: true,
      message: "SUCCESSFULLY CREATED COMPANY",
      data: company,
    })
  } catch(err) {
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO CREATE COMPANY",
    })
  }
}

const createCompanyBulk = async (req, res) => {
  try {
    const companies = await companyService.createBulk(req.body)
    return res.send({
      success: true,
      message: "SUCCESSFULLY CREATED COMPANY",
      data: companies,
    })
  } catch(err) {
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO CREATE COMPANY",
    })
  }
}

module.exports = {
  findAllCompanies,
  createCompany,
  createCompanyBulk
}
