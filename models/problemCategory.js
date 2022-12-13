const Sequelize = require('sequelize')
const db = require('../helpers/db')

const ProblemCategory = db.define('Tbl_Problem_Category', {
  ProblemId: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_Problem',
      key: 'Id'
    }
  },
  CategoryId: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_Category',
      key: 'Id'
    }
  }
}, {
  indexes: [
    {
      fields: ['ProblemId', 'CategoryId'],
      type: 'UNIQUE'
    }
  ]
})

module.exports = ProblemCategory
