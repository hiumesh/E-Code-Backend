const Sequelize = require('sequelize')
const db = require('../helpers/db')

const TestCase = db.define('Tbl_Test_Case', {
  Id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  Value: {
    type: Sequelize.STRING,
  },
  ProblemId: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_Problem',
      key: 'Id'
    }
  },
})

module.exports = TestCase
