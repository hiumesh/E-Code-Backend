const BlogBookmark = require('../models/blogBookmarks');

const createBookmark = async (blogId, userId) => {
  try {
    return await BlogBookmark.findOrCreate({ where: { BlogId: blogId, UserId: userId } });
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO CREATE BLOG BOOKMARK")
  }
}

const removeBookmark = async (blogId, userId) => {
  try {
    return await BlogBookmark.destroy({ where: { BlogId: blogId, UserId: userId } });
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO REMOVE BLOG BOOKMARK")
  }
}


module.exports = {
  createBookmark,
  removeBookmark,
}
