const { Op } = require('sequelize')
const db = require('../helpers/db')
const blogService = require('../services/blog')
const pageService = require('../services/page')

const createBlog = async (req, res) => {
  try {
    const result = await db.transaction(async (transaction) => {
      const data = req.body
      let blog
      const page = await pageService.create({Text: data.Text, Type: 'BLOG'}, transaction)
      data.Text = page.Id
      data.UserId = req.user.Id

      blog = await blogService.createBlog(data, transaction)

      return blog
    })
    return res.send({
      success: true,
      message: "SUCCESSFULLY CREATED BLOG",
      data: result,
    })
  } catch(err) {
    console.log(err)
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO CREATE BLOG",
    })
  }
}

const updateBlog = async (req, res) => {
  try {
    const result = await db.transaction(async (transaction) => {
      const data = req.body
      const blogData = { 
        Id: data.Id,
        Title: data.Title,
        Status: data.Status
      }
      const blog = await blogService.updateBlog(blogData, transaction)
      await pageService.update(blog.Text, { Text: data.Text }, transaction)

      return blog
    })
    return res.send({
      success: true,
      message: "SUCCESSFULLY UPDATED BLOG",
      data: result,
    })
  } catch(err) {
    console.log(err)
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO UPDATE BLOG",
    })
  }
}

const getAll = async (req, res) => {
  try {
    const problems = await blogService.getAll(null)
    return res.send({
      success: true,
      message: "SUCCESSFULLY FEATCHED ALL BLOG",
      data: problems,
    })
  } catch(err) {
    console.log(err)
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO FEATCH ALL BLOG",
    })
  }
}

const getUserBlogs = async (req, res) => {
  try {
    const filter = { UserId: req.user.Id }
    if (req.query?.status) {
      if (typeof req.query.status === 'object') filter.Status = { [Op.in]: req.query.status }
      else filter.Status = req.query.status
    }
    const problems = await blogService.getAll(filter)
    return res.send({ 
      success: true,
      message: "SUCCESSFULLY FEATCHED ALL BLOG",
      data: problems,
    })
  } catch(err) {
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO FEATCH ALL BLOG",
    })
  }
}

module.exports = {
  createBlog,
  updateBlog,
  getAll,
  getUserBlogs
}
