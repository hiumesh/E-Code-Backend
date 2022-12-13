const Problem = require('../models/problem');
const ProblemCategory = require('../models/problemCategory')

const createProblem = async (data, transaction={}) => {
  try {
    return await Problem.create(data, { transaction })
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO CREATE CATEGORY")
  }
}

module.exports = {
  createProblem,
}
