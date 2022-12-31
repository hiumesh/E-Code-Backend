const BlogLikes = require('../models/blogLikes');

const createLike = async (blogId, userId) => {
  try {
    return await BlogLikes.findOrCreate({ where: { BlogId: blogId, UserId: userId } });
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO CREATE BLOG Like")
  }
}

const removeLike = async (blogId, userId) => {
  try {
    return await BlogLikes.destroy({ where: { BlogId: blogId, UserId: userId } });
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO REMOVE BLOG LIKE")
  }
}

module.exports = {
  createLike,
  removeLike,
}
