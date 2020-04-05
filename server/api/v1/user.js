const Router = require('koa-router')
const koaBody = require('koa-body')
const path = require('path')

const Auth = require('../../middlewares/auth')
const {
  loginValidator,
  // profileValidator,
} = require('../../middlewares/validators')
const { login, register, avatar, profile,password } = require('../../controllers/user')

const router = new Router({
  prefix: '/user',
})

router.use(
  koaBody({
    multipart: true,
    formidable: {
      uploadDir: path.join(__dirname, '../../static/images/avatar'),
      keepExtensions: true,
    },
  })
)

router.post('/login', loginValidator, login)

router.post('/register', loginValidator, register)

router.post('/avatar', avatar)

router.post('/:id/profile', profile)

router.post('/:id/password',password)


module.exports = router
