const db = require('../helpers/db')
const problemService = require('../services/problem')
const problemCategoryService = require('../services/problemCategory')
const testCaseService = require('../services/testCase')

const createProblem = async (req, res) => {
  try {
    const result = await db.transaction(async (transaction) => {
      const data = req.body
      const problem = await problemService.createProblem(data, transaction)
      await problemCategoryService.createProblemCategoryBuilk(problem.Id, data.categories, transaction)
      await testCaseService.createPorblemTestCaseBuilk(problem.Id, data.testCases, transaction)
      return problem
    })
    return res.send({
      success: true,
      message: "SUCCESSFULLY CREATED CATEGORY",
      data: result,
    })
  } catch(err) {
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO CREATE CATEGORY",
    })
  }
}

module.exports = {
  createProblem,
}
