const Sequelize = require('sequelize')
const db = require('../helpers/db')

const Session = db.define('Tbl_Session', {
  Id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  LastAccess: {
    type: Sequelize.DATE,
  },
  UserId: {
    type: Sequelize.BIGINT,
    references: {
      model: 'Tbl_User',
      key: 'Id',
    }
  }
})

module.exports = Session
