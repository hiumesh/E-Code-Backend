const Company = require('../models/company')

const findAll = async () => {
  try {
    return await Company.findAll()
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO FETCH COMPANIES")
  }
}

const create = async (data) => {
  try {
    return await Company.create(data)
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO CREATE COMPANY")
  }
}

const createBulk = async (data) => {
  try {
    return await Company.bulkCreate(data)
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO CREATE COMPANYS")
  }
}

module.exports = {
  findAll,
  create,
  createBulk
}

