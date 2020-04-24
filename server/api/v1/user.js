const Router = require('koa-router')
const koaBody = require('koa-body')
const path = require('path')

const Auth = require('../../middlewares/auth')
const {
  loginValidator,
  // profileValidator,
} = require('../../middlewares/validators')
const {
  login,
  register,
  avatar,
  updateProfile,
  changePassword,
  getProfile,
  getSelling,
} = require('../../controllers/user')

const getVerificationCode = require('../../controllers/verificationCode')

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

router.post('/code', getVerificationCode)

router.post('/avatar', avatar)

router.put('/:id/profile', updateProfile)

router.get('/profile', new Auth(6).m, getProfile)

router.put('/:id/password', changePassword)

router.get('/:id/selling', getSelling)

module.exports = router
