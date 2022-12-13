const ProblemComment = require('../models/problemComment')

const createComment = async (data) => {
  try {
    return await ProblemComment.create(data)
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO CREATE PROBLEMCOMMENT")
  }
}

const getComment = async (filter) => {
  try {
    return await ProblemComment.findAll({
      where: filter
    })
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO GET PROBLEMCOMMENTS")
  }
}

module.exports = {
  createComment,
  getComment
}
