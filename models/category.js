const Sequelize = require('sequelize')
const db = require('../helpers/db')

const Category = db.define('Tbl_Category', {
  Id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  Description: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, { tableName: 'Tbl_Category' })

module.exports = Category
