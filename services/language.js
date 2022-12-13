const Language = require('../models/language')

const findAll = async (filter) => {
  try {
    return await Language.findAll({ where: filter })
  } catch(err) {
    console.log(err)
    throw err.name ? err : new Error("FAILED TO FETCH LANGUAGES")
  }
}

const create = async (data) => {
  try {
    return await Language.create(data)
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO CREATE LANGUAGE")
  }
}

const createBulk = async (data) => {
  try {
    return await Language.bulkCreate(data)
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO CREATE LANGUAGES")
  }
}


module.exports = {
  findAll,
  create,
  createBulk
}
