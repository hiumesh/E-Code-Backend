const Page = require('../models/page')

const create = async (data, transaction={}) =>  {
  try {
    return await Page.create(data, { transaction })
  } catch (err) {
    throw err.name ? err : new Error("FAILED TO CREATE PAGE")
  }
}

const update = async (PageId, data, transaction={}) => {
  try {
    return await Page.update(data, { where: { Id: PageId }, transaction })
  } catch (err) {
    throw err.name ? err : new Error('FAILED TO UPDATE PAGE')
  }
}

module.exports = {
  create,
  update,
}
