const ProblemCategory = require('../models/problemCategory')

const createProblemCategoryBuilk = async (ProblemId, data=[], transaction={}) => {
  try {
    return await ProblemCategory.bulkCreate(data.map((category) => ({...category, ProblemId })), { transaction })
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO CREATE CATEGORY")
  }
}

module.exports = {
  createProblemCategoryBuilk,
}
