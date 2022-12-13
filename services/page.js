const Page = require('../models/page')

const create = async (data, transaction={}) =>  {
  try {
    return await Page.create(data, { transaction })
  } catch (err) {
    throw err.name ? err : new Error("FAILED TO CREATE PAGE")
  }
}

module.exports = {
  create,
}
