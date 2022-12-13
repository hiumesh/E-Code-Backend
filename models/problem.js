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
  Difficulty: {
    type: Sequelize.ENUM(),
    values: ['EASY', 'MEDIUM', 'HARD'],
    allowNull: false
  },
  Description: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_Page',
      key: 'Id',
    }
  },
  SolutionLanguage: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_Language',
      key: 'Id',
    },
    allowNull: false,
  },
  SolutionCode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  CategoryId: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_Category',
      key: 'Id'
    },
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
}, { tableName: 'Tbl_Problem' })

module.exports = Problem
