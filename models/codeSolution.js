const Sequelize = require('sequelize')
const db = require('../helpers/db')

const CodeSolution = db.define('Tbl_Code_Solution', {
  Id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  Title: {
    type: Sequelize.STRING,
  },
  ProblemId: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_Problem',
      key: 'Id'
    }
  },
  UserId: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_User',
      key: 'Id',
    }
  },
  Text: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_Page',
      key: 'Id',
    }
  }
})

module.exports = CodeSolution