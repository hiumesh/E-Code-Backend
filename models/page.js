const Sequelize = require('sequelize')
const db = require('../helpers/db')

const Page = db.define('Tbl_Page', {
  Id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  Type: {
    type: Sequelize.ENUM(['BLOG', 'DESCRIPTION']),
    allowNull: false,
  },
  Text: {
    type: Sequelize.JSON,
    allowNull: false
  }
}, { tableName: 'Tbl_Page' })

module.exports = Page
