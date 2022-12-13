const Blog = require('../models/blog')
const Page = require('../models/page')

const getAll = async (filter) => {
  try {
    return await Blog.findAll({
      where: filter,
      include: [
        {
          model: Page,
          as: 'JSONText'
        },
      ]
    })
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO GET BLOG")
  }
}

const createBlog = async (data, transaction={}) => {
  try {
    return await Blog.create(data, { transaction })
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO CREATE BLOG")
  }
}

const updateBlog = async (data, transaction={}) => {
  try {
    const blog = await Blog.findOne({where: { Id: data.Id }})
    return await blog.update(data, { transaction })
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO UPDATE BLOG")
  }
}

module.exports = {
  getAll,
  createBlog,
  updateBlog
}
