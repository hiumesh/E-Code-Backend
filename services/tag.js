const Tag = require('../models/tag')

const findAll = async (filter) => {
  try {
    return await Tag.findAll({where: filter})
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO FETCH ALL TAGS")
  }
}

const create = async (data) => {
  try {
    return await Tag.create(data)
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO CREATE TAG")
  }
}

const bulkCreate = async (data) => {
  try {
    return await Tag.bulkCreate(data)
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO CREATE TAGS")
  }
}

module.exports = {
  findAll,
  create,
  bulkCreate,
}
