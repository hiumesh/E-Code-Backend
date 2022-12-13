const problemCommentService = require('../services/problemComment')

const createProblemComment = async (req, res) => {
  try {
    const problemComment = await problemCommentService.createComment({ ...req.body, UserId: req.user.Id })
    return res.send({
      success: true,
      message: "SUCCESSFULLY CREATED PROBLEMCOMMENT",
      data: problemComment,
    })
  } catch(err) {
    console.log(err)
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO CREATE PROBLEMCOMMENT",
    })
  }
}

const getProblemComments = async (req, res) => {
  try {
    const problemId = req.query.id
    const problemComments = await problemCommentService.getComment({ ProblemId: problemId })
    return res.send({
      success: true,
      message: "SUCCESSFULLY GET PROBLEMCOMMENTS",
      data: problemComments,
    })
  } catch(err) {
    console.log(err)
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO GET PROBLEMCOMMENTS",
    })
  }
} 

module.exports = {
  createProblemComment,
  getProblemComments
}
