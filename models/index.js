const Problem = require('./problem')
const Page = require('./page')
const Category = require('./category')
const Tag = require('./tag')
const Company = require('./company')
const TestCase = require('./testCase')


Problem.hasOne(Page, { sourceKey: 'Description', foreignKey: 'Id', as: 'JSONDescription' })
Problem.hasOne(Category, { sourceKey: 'CategoryId', foreignKey: 'Id', as: 'Category' })
Problem.belongsToMany(Tag, { through: 'Tbl_Problem_Tags', foreignKey: 'ProblemId',  otherKey: 'TagId', as: 'Tags' })
Problem.belongsToMany(Company, { through: 'Tbl_Problem_Companies', foreignKey: 'ProblemId', otherKey: 'CompanyId', as: 'Companies' })
Problem.hasMany(TestCase, { foreignKey: 'ProblemId', as: 'TestCases' })
