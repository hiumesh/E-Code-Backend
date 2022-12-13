const Sequelize = require('sequelize')
const db = require('../helpers/db')

const ProblemCompanies = db.define('Tbl_Problem_Companies', {
  ProblemId: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_Problem',
      key: 'Id'
    }
  },
  CompanyId: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_Company',
      key: 'Id'
    }
  }
}, {
  indexes: [
    {
      fields: ['ProblemId', 'CompanyId'],
      type: 'UNIQUE'
    }
  ]
})

module.exports = ProblemCompanies
