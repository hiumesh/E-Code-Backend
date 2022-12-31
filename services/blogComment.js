const BlogComment = require('../models/blogComment')
const Blog = require('../models/blog')

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
      where: {
        ...filter,
        Status: 'COMMENT',
      },
      include: [
        {
          model: Blog,
          as: 'CommentBlog',
          attributes: [],
        }
      ]
    })
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO GET BLOGCOMMENTS")
  }
}

module.exports = {
  createComment,
  getComment
}
