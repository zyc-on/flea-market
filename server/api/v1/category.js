const Router = require('koa-router')
const koaBody = require('koa-body')
const { getCategories } = require('../../controllers/category')

const router = new Router({
  prefix: '/category',
})

router.use(koaBody())

router.get('/', getCategories)

module.exports = router
