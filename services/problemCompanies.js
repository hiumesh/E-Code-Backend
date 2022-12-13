const ProblemCompanies = require('../models/problemCompanies')

const createProblemCompaniesBulk = async (ProblemId, data=[], transaction={}) => {
  try {
    return await ProblemCompanies.bulkCreate(data?.map((company) => ({ CompanyId: company, ProblemId })), { transaction })
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO CREATE PROBLEM COMPANIES")
  }
}

module.exports = {
  createProblemCompaniesBulk,
}
