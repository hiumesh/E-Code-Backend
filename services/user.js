const User = require('../models/user')
const { createPassword } = require('../helpers/validators')

const createUser = async (data, transaction={}) => {
  try {
    const { Hash, Salt } = createPassword(data.Password)
    return await User.create({ ...data, Hash, Salt }, { transaction })
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO CREATE USER")
  }
}

const findUser = async (query={}) => {
  try {
    return await User.findOne({ where: query })
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO GET USER")
  }
}

module.exports = {
  createUser,
  findUser,
}
