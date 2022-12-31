const Sequelize = require('sequelize')
const db = require('../helpers/db')

const BlogBookmark = db.define('Tbl_Blog_Bookmarks', {
  BlogId: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_Blog',
      key: 'Id'
    }
  },
  UserId: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_User',
      key: 'Id',
    },
    allowNull: false,
  }
}, {
  tableName: 'Tbl_Blog_Bookmarks',
  indexes: [
    {
      fields: ['BlogId', 'UserId'],
      type: 'UNIQUE'
    }
  ]
})

module.exports = BlogBookmark
