const Sequelize = require('sequelize')
const db = require('../helpers/db')

const CodeSubmission = db.define('Tbl_Code_Submission', {
  Id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  Code: {
    type: Sequelize.STRING,
  },
  Status: {
    type: Sequelize.ENUM(['ACCEPTED', 'REJECTED']),
  },
  ProblemId: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_Problem',
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

module.exports = CodeSubmission
