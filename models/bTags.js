const Sequelize = require('sequelize')
const db = require('../helpers/db')

const BTag = db.define('Tbl_B_Tag', {
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
  UserId: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_User',
      key: 'Id',
    },
    allowNull: false,
  }
}, { tableName: 'Tbl_B_Tag' })

module.exports = BTag
