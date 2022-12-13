const Sequelize = require('sequelize')
const db = require('../helpers/db')

const BlogTags = db.define('Tbl_Blog_Tags', {
  BlogId: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_Blog',
      key: 'Id'
    },
    allowNull: false,
  },
  TagId: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_B_Tag',
      key: 'Id'
    },
    allowNull: false
  }
}, {
  tableName: 'Tbl_Blog_Tags',
  indexes: [
    {
      fields: ['BlogId', 'TagId'],
      type: 'UNIQUE'
    }
  ]
})

module.exports = BlogTags
