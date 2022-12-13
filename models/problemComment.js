const Sequelize = require('sequelize')
const db = require('../helpers/db')

const ProblemComment = db.define('Tbl_Problem_Comment', {
  Id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  Text: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ParentId: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_Problem_Comment',
      key: 'Id'
    },
    allowNull: true,
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
    },
    allowNull: false,
  }
}, {
  tableName: 'Tbl_Problem_Comment',
  indexes: [
    {
      fields: ['ProblemId', 'UserId', 'ParentId'],
      type: 'UNIQUE'
    }
  ]
})

module.exports = ProblemComment
