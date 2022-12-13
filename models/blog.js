const Sequelize = require('sequelize')
const db = require('../helpers/db')

const Blog = db.define('Tbl_Blog', {
  Id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  Title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  CoverImage: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Text: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_Page',
      key: 'Id',
    },
    allowNull: false
  },
  Status: {
    type: Sequelize.ENUM('PUBLIC', 'PRIVATE', 'DRAFT'),
    allowNull: false,
  },
  UserId: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_User',
      key: 'Id',
    },
    allowNull: false,
  }
}, { tableName: 'Tbl_Blog' })

module.exports = Blog
