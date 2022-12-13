const BlogComment = require('../models/blogComment')

const createComment = async (data) => {
  try {
    return await BlogComment.create(data)
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO CREATE BLOGCOMMENT")
  }
}

const getComment = async (filter) => {
  try {
    return await BlogComment.findAll({
      where: filter
    })
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO GET BLOGCOMMENTS")
  }
}

module.exports = {
  createComment,
  getComment
}
