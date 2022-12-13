const tagService = require('../services/tag')

const findAllCategoryTags = async (req, res) => {
  try {
    const categoryId = req.query.cid
    const tags  = await tagService.findAll({ CategoryId: categoryId })
    return res.send({
      success: true,
      message: "SUCCESSFULLY FEATCHED ALL CATEGORY TAGS",
      data: tags,
    })
  } catch(err) {
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO FEATCH ALL CATEGORIE TAGS",
    })
  }
}


const createTag = async (req, res) => {
  try {
    const tag = await tagService.create(req.body)
    return res.send({
      success: true,
      message: "SUCCESSFULLY CREATED TAG",
      data: tag,
    })
  } catch(err) {
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO CREATE TAG",
    })
  }
}

const createTagBulk = async (req, res) => {
  try {
    const tags = await tagService.bulkCreate(req.body)
    return res.send({
      success: true,
      message: "SUCCESSFULLY CREATED TAGS",
      data: tags,
    })
  } catch(err) {
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO CREATE TAGS",
    })
  }
}

module.exports = {
  findAllCategoryTags,
  createTag,
  createTagBulk
}
