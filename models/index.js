const Problem = require('./problem')
const Page = require('./page')
const Category = require('./category')
const Tag = require('./tag')
const BTag = require('./bTags')
const Company = require('./company')
const TestCase = require('./testCase')
const Blog = require('./blog')


Problem.hasOne(Page, { sourceKey: 'Description', foreignKey: 'Id', as: 'DescriptionPage' })
Problem.hasOne(Category, { sourceKey: 'CategoryId', foreignKey: 'Id', as: 'Category' })
Problem.belongsToMany(Tag, { through: 'Tbl_Problem_Tags', foreignKey: 'ProblemId',  otherKey: 'TagId', as: 'Tags' })
Problem.belongsToMany(Company, { through: 'Tbl_Problem_Companies', foreignKey: 'ProblemId', otherKey: 'CompanyId', as: 'Companies' })
Problem.hasMany(TestCase, { foreignKey: 'ProblemId', as: 'TestCases' })

Blog.hasOne(Page, { sourceKey: 'Text', foreignKey: 'Id', as: 'TextPage' })
Blog.belongsToMany(BTag, { through: 'Tbl_Blog_Tags', foreignKey: 'BlogId', otherKey: 'TagId', as: 'BTags' })
