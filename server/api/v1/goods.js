const Router = require('koa-router')
const koaBody = require('koa-body')
const path = require('path')

const Auth = require('../../middlewares/auth')

const { uploadGoods, images, updateGoods,latestGoods,getGoodsById,search,getGoodsByCategory } = require('../../controllers/goods')

const router = new Router({
  prefix: '/goods',
})

router.use(
  koaBody({
    multipart: true,
    formidable: {
      uploadDir: path.join(__dirname, '../../static/images/goods'),
      keepExtensions: true,
    },
  })
)

router.post('/', new Auth(6).m, uploadGoods)

router.put('/:id', new Auth(6).m, updateGoods)

router.post('/images', new Auth(6).m, images)

router.get('/search',search)

router.get('/latest',latestGoods)

router.get('/:id',getGoodsById)

router.get('/category/:id',getGoodsByCategory)




module.exports = router
