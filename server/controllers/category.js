const { Category } = require('../db/index')

const getCategories = async ctx => {
  ctx.body = await Category.getCategories()
}

module.exports = {
  getCategories,
}
