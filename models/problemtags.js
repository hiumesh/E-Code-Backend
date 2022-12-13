const Sequelize = require('sequelize')
const db = require('../helpers/db')

const ProblemTags = db.define('Tbl_Problem_Tags', {
  ProblemId: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_Problem',
      key: 'Id'
    },
    allowNull: false,
  },
  TagId: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_Tag',
      key: 'Id'
    },
    allowNull: false
  }
}, {
  tableName: 'Tbl_Problem_Tags',
  indexes: [
    {
      fields: ['ProblemId', 'TagId'],
      type: 'UNIQUE'
    }
  ]
})

module.exports = ProblemTags
