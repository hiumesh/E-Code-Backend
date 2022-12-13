const categoryService = require('../services/category')

const findAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.findAll()
    return res.send({
      success: true,
      message: "SUCCESSFULLY FEATCHED ALL CATEGORIES",
      data: categories,
    })
  } catch(err) {
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO FEATCH ALL CATEGORIES",
    })
  }
}

const createCategory = async(req, res) => {
  try {
    const category = await categoryService.create(req.body)
    return res.send({
      success: true,
      message: "SUCCESSFULLY CREATED CATEGORY",
      data: category,
    })
  } catch(err) {
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO CREATE CATEGORY",
    })
  }
}


module.exports = {
  findAllCategories,
  createCategory,
}
