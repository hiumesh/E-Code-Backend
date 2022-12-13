const Sequelize = require('sequelize')
const db = require('../helpers/db')

const Problem = db.define('Tbl_Problem', {
  Id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: Sequelize.STRING,
    unique: true,
  },
  Description: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_Page',
      key: 'Id',
    }
  },
  UserId: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_User',
      key: 'Id',
    }
  }
})

module.exports = Problem
