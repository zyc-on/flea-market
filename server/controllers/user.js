const { User, Goods } = require('../db/index')

const Auth = require('../middlewares/auth')
const {
  Success,
  ParameterException,
  NotFoundException,
} = require('../lib/http-exception')

const generateToken = require('../lib/token')
const login = async ctx => {
  console.log(ctx.request.body)

  const user = await User.login(ctx.request.body)

  // console.table(Object.getOwnPropertyDescriptors(user.dataValues))
  // console.log(delete user.dataValues.password)
  // console.log(user.password)
  delete user.dataValues.password

  const token = generateToken(user.id, Auth.USER)

  ctx.body = {
    user,
    token,
    message: '登录成功',
  }
}

const register = async ctx => {
  await User.register(ctx.request.body)
  throw new Success('注册成功，可以去登陆了')
}

const avatar = async ctx => {
  ctx.body = ctx.request.files.file.path.split('\\').pop()
}

const updateProfile = async ctx => {
  const id = ctx.params.id || ctx.state.auth.id
  console.log(id)

  // try {
  await User.updateProfile(id, ctx.request.body)
  // } catch (error) {
  //   throw error
  // }
  throw new Success('修改成功')
}

const changePassword = async ctx => {
  const id = ctx.params.id
  const user = await User.findByPk(id)
  if (!user) throw new NotFoundException('用户不存在')

  const vals = ctx.request.body

  switch (ctx.state.auth.rights) {
    case Auth.ADMIN:
      user.password = vals.password
      await user.save()
      break

    case Auth.USER:
      if (vals.oldPassword !== user.password)
        throw new ParameterException('旧密码输入错误')
      user.password = vals.password
      await user.save()
  }
}

const getProfile = async ctx => {
  const id = ctx.params.id || ctx.state.auth.id
  ctx.body = await User.findByPk(id)
}

const getSelling = async ctx => {
  const userId = ctx.params.id
  ctx.body = await Goods.findAll({
    where: { userId },
    attributes: { exclude: ['deletedAt'] }
  })
}

module.exports = {
  login,
  register,
  avatar,
  updateProfile,
  changePassword,
  getProfile,
  getSelling
}
