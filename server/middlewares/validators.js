const { ParameterException } = require('../lib/http-exception')

const { validateAccount, validatePassword,validateLogin,validateProfile } = require('../lib/validator/rules')

const loginValidator = async (ctx, next) => {

  const { account, password } = ctx.request.body
  const valid = validateLogin(account,password)
  if (!valid) throw new ParameterException('账号或密码格式错误')
  await next()
}

const profileValidator = async (ctx, next) => {

  const valid = validateProfile(ctx.request.body)

  if (!valid) throw new ParameterException('请按要求填写字段')

  await next()
  // TODO 图片
  // const valid = validator.isLength(username,{min:1,max:8})
}


module.exports = {
  loginValidator,
  profileValidator,
}
