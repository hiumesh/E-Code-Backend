const ProblemTags = require('../models/problemtags')

const createProblemTagsBuilk = async (ProblemId, data=[], transaction={}) => {
  try {
    return await ProblemTags.bulkCreate(data.map((tag) => ({TagId: tag, ProblemId })), { transaction })
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO CREATE PROBLEM TAGS")
  }
}

module.exports = {
  createProblemTagsBuilk,
}
