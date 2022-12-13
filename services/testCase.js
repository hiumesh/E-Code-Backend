const TestCase = require('../models/testCase')

const createPorblemTestCaseBulk = async (ProblemId, data=[], transaction={}) => {
  try {
    return await TestCase.bulkCreate(data.map((testCase) => ({ Value: testCase, ProblemId })), { transaction })
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO CREATE PROBLEM TEST CASE")
  }
}

const updateProblemTestCaseBulk = async (ProblemId, data=[], transaction={}) => {
  try {
    await TestCase.destroy({ where: { ProblemId }}, { transaction })
    return await TestCase.bulkCreate(data.map((testCase) => ({ Value: testCase, ProblemId })), { transaction })
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO UPDATE PROBLEM TEST CASE")
  }
}

module.exports = {
  createPorblemTestCaseBulk,
  updateProblemTestCaseBulk,
}
