const Problem = require('../models/problem');
const Page = require('../models/page')
const Category = require('../models/category')
const Company = require('../models/company')
const Tag = require('../models/tag')
const TestCase = require('../models/testCase')

const getAll = async (filter) => {
  try {
    return await Problem.findAll({
      where: filter,
      include: [
        {
          model: Category,
          as: 'Category'
        },
        {
          model: Page,
          as: 'JSONDescription'
        },
        {
          model: Company,
          as: 'Companies'
        },
        {
          model: Tag,
          as: 'Tags'
        },
        {
          model: TestCase,
          as: 'TestCases'
        }
      ]
    })
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO GET PROBLEM")
  }
}

const createProblem = async (data, transaction={}) => {
  try {
    return await Problem.create(data, { transaction })
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO CREATE PROBLEM")
  }
}

const updateProblem = async (data, transaction={}) => {
  try {
    const problem = await Problem.findOne({where: { Id: data.Id }})
    return await problem.update(data, { transaction })
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO UPDATE PROBLEM")
  }
}

module.exports = {
  getAll,
  createProblem,
  updateProblem,
}
