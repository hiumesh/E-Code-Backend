const Category = require('../models/category')


const findAll = async () => {
  try {
    return await Category.findAll()
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO FETCH CATEGORIES")
  }
}

const create = async (data) => {
  try {
    return await Category.create(data)
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO CREATE CATEGORY")
  }
}

module.exports = {
  findAll,
  create,
}
