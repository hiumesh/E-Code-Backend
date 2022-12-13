const Session = require('../models/session')

const findSession = async (id) => {
  try {
    return await Session.findByPk(id)
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO GET SESSION")
  }
}

const findSessions = async (filter) => {
  try {
    return await Session.findAll({ where: filter })
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO GET ALL SESSION")
  }
}

const createSession = async (user, transaction) => {
  try {
    return await Session.create({ LastAccess: Date.now(), UserId: user.Id }, { transaction })
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO CREATE SESSION")
  }
}

const deleteSession = async (filter) => {
  try {
    return await Session.destroy({ where: filter })
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO DELETE SESSION")
  }
}

module.exports = {
  findSession,
  createSession,
  deleteSession,
  findSessions,
}
