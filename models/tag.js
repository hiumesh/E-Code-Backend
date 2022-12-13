const Sequelize = require('sequelize')
const db = require('../helpers/db')

const Tag = db.define('Tbl_Tag', {
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
  CategoryId: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_Category',
      key: 'Id'
    }
  }
}, { tableName: 'Tbl_Tag' })

module.exports = Tag
