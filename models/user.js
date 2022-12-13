const Sequelize = require('sequelize')
const db = require('../helpers/db')

const User = db.define('Tbl_User', {
  Id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  UserName: {
    type: Sequelize.STRING,
    unique: true,
  },
  FirstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  MiddleName: {
    type: Sequelize.STRING,
  },
  LastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Email: {
    type: Sequelize.STRING,
    unique: true,
  },
  Hash: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Salt: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, {
  tableName: 'Tbl_User',
})

module.exports = User
