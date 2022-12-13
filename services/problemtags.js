const ProblemTags = require('../models/problemtags')

const createProblemTagsBulk = async (ProblemId, data=[], transaction={}) => {
  try {
    return await ProblemTags.bulkCreate(data.map((tag) => ({TagId: tag, ProblemId })), { transaction })
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO CREATE PROBLEM TAGS")
  }
}

const updateProblemTagsBulk = async (ProblemId, data=[], transaction={}) => {
  try {
    await ProblemTags.destroy({ where: { ProblemId }}, { transaction })
    return await ProblemTags.bulkCreate(data.map((tag) => ({TagId: tag, ProblemId })), { transaction })
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO UPDATE PROBLEM TAGS")
  }
}

module.exports = {
  createProblemTagsBulk,
  updateProblemTagsBulk
}
