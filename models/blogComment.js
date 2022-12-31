const Sequelize = require('sequelize')
const db = require('../helpers/db')

const BlogComment = db.define('Tbl_Blog_Comment', {
  Id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  Text: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ParentId: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_Blog_Comment',
      key: 'Id'
    },
    allowNull: true
  },
  Status: {
    type: Sequelize.ENUM(["COMMENT", "COMPLAIN"]),
    defaultValue: "COMMENT",
  },
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
  tableName: 'Tbl_Blog_Comment',
  indexes: [
    {
      fields: ['BlogId', 'UserId', 'ParentId'],
      type: 'UNIQUE'
    }
  ]
})

module.exports = BlogComment
