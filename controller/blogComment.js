const blogCommentService = require('../services/blogComment')

const createBlogComment = async (req, res) => {
  try {
    const blogComment = await blogCommentService.createComment({ ...req.body, UserId: req.user.Id })
    return res.send({
      success: true,
      message: "SUCCESSFULLY CREATED BLOGCOMMENT",
      data: blogComment,
    })
  } catch(err) {
    console.log(err)
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO CREATE BLOGCOMMENT",
    })
  }
}

const getBlogComments = async (req, res) => {
  try {
    const blogId = req.query.id
    const blogComments = await blogCommentService.getComment({ BlogId: blogId })
    return res.send({
      success: true,
      message: "SUCCESSFULLY GET BLOGCOMMENTS",
      data: blogComments,
    })
  } catch(err) {
    console.log(err)
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO GET BLOGCOMMENTS",
    })
  }
} 

module.exports = {
  getBlogComments,
  createBlogComment,
}
