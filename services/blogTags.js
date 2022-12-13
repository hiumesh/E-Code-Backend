const BlogTags = require('../models/blogTags')
const BTag = require('../models/bTags')


const createBlogTagsBulk = async (BlogId, UserId, data=[], transaction={}) => {
  try {
    
    const promises = data.map((tag) => BTag.findOrCreate({ where: { Name: tag }, defaults: { UserId: UserId }, transaction }))
    const bTags = await Promise.all(promises)
    console.log(bTags[0][0].Id, BlogId)
    return await BlogTags.bulkCreate(bTags.map((tag) => ({ TagId: tag[0].Id, BlogId })), { transaction })
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO CREATE PROBLEM TAGS")
  }
}

const updateBlogTagsBulk = async (BlogId, UserId, data=[], transaction={}) => {
  try {
    const promises = data.map((tag) => BTag.findOrCreate({ where: { Name: tag }, defaults: { UserId: UserId }, transaction}))
    const bTags = await Promise.all(promises)
    await BlogTags.destroy({ where: { BlogId }}, { transaction })
    return await BlogTags.bulkCreate(bTags.map((tag) => ({ TagId: tag[0].Id, BlogId })), { transaction })
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO UPDATE PROBLEM TAGS")
  }
}

module.exports = {
  createBlogTagsBulk,
  updateBlogTagsBulk
}
