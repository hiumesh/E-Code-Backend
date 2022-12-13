const Sequelize = require('sequelize')
const db = require('../helpers/db')

const Company = db.define('Tbl_Company', {
  Id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  }
}, { tableName: 'Tbl_Company' })

module.exports = Company
