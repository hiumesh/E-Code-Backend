const db = require('../helpers/db')
const problemService = require('../services/problem')
const problemTagService = require('../services/problemtags')
const testCaseService = require('../services/testCase')
const problemCompaniesService = require('../services/problemCompanies')
const pageService = require('../services/page')

const createProblem = async (req, res) => {
  try {
    const result = await db.transaction(async (transaction) => {
      const data = req.body
      console.log(data)
      let problem
      const page = await pageService.create({Text: data.Description, Type: 'DESCRIPTION'}, transaction)
      data.Description = page.Id
      data.UserId = req.user.Id
      if (data.SolutionMethod === 'MANUALLY') problem = await problemService.createProblem(data, transaction)
      else if (data.TestCaseMethod === 'FILE') throw new Error('SOLUTION FILE UPLOAD SERVICE NOT AVAILABLE')
      else throw new Error('NOT A VALID SOLUTION UPLOAD METHOD')
      
      await problemTagService.createProblemTagsBuilk(problem.Id, data.tags, transaction)
      if (data.TestCaseMethod === 'MANUALLY') await testCaseService.createPorblemTestCaseBuilk(problem.Id, data.ManuallyTestCases, transaction)
      else if (data.TestCaseMethod === 'FILE') throw new Error('TEST CASE FILE UPLOAD SERVICE NOT AVAILABLE')
      else throw new Error('NOT A VALID TEST CASE METHOD')

      await problemCompaniesService.createProblemCompaniesBulk(problem.Id, data.Compaines, transaction)

      return problem
    })
    return res.send({
      success: true,
      message: "SUCCESSFULLY CREATED CATEGORY",
      data: result,
    })
  } catch(err) {
    console.log(err)
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO CREATE CATEGORY",
    })
  }
}

const getAll = async (req, res) => {
  try {
    const problems = await problemService.getAll(null)
    return res.send({
      success: true,
      message: "SUCCESSFULLY FEATCHED ALL PROBLEMS",
      data: problems,
    })
  } catch(err) {
    console.log(err)
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO FEATCH ALL PROBLEMS",
    })
  }
}

const getUserProblems = async (req, res) => {
  try {
    const problems = await problemService.getAll({ UserId: req.user.Id })
    return res.send({ 
      success: true,
      message: "SUCCESSFULLY FEATCHED ALL PROBLEMS",
      data: problems,
    })
  } catch(err) {
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO FEATCH ALL PROBLEMS",
    })
  }
}

module.exports = {
  createProblem,
  getAll,
  getUserProblems
}
