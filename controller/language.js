const languageService = require('../services/language')

const findAllCategoryLanguages = async (req, res) => {
  try {
    const categoryId = req.query.cid
    const languages = await languageService.findAll({ CategoryId: categoryId })
    return res.send({
      success: true,
      message: "SUCCESSFULLY FEATCHED ALL CATEGORY LANGUAGES",
      data: languages,
    })
  } catch(err) {
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO FEATCH ALL CATEGORY LANGUAGES",
    })
  }
}

const createLanguage = async(req, res) => {
  try {
    const language = await languageService.create(req.body)
    return res.send({
      success: true,
      message: "SUCCESSFULLY CREATED LANGUAGE",
      data: language,
    })
  } catch(err) {
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO CREATE LANGUAGE",
    })
  }
}

const createLanguageBulk = async (req, res) => {
  try {
    const languages = await languageService.createBulk(req.body)
    return res.send({
      success: true,
      message: "SUCCESSFULLY CREATED LANGUAGES",
      data: languages,
    })
  } catch(err) {
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO CREATE LANGUAGES",
    })
  }
}

module.exports = {
  createLanguage,
  findAllCategoryLanguages,
  createLanguageBulk
}
