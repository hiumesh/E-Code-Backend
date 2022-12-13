const Sequelize = require('sequelize')
const db = require('../helpers/db')

const Page = db.define('Tbl_Page', {
  Id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  Text: {
    type: Sequelize.STRING,
  }
})

module.exports = Page
