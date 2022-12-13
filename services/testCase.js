const TestCase = require('../models/testCase')

const createPorblemTestCaseBuilk = async (ProblemId, data=[], transaction={}) => {
  try {
    return await TestCase.bulkCreate(data.map((testCase) => ({ ...testCase, ProblemId })), { transaction })
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO CREATE PROBLEM TEST CASE")
  }
}

module.exports = {
  createPorblemTestCaseBuilk,
}
