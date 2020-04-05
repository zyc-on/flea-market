const jwt = require('jsonwebtoken')
const privateKey = require('../config/config').security.privateKey
const { AuthFailException, Forbidden } = require('../lib/http-exception')

class Auth {
  static USER = 6
  static VIP = 8
  static ADMIN = 10

  // level表示当前认证接口的权限等级，默认为1,普通登录用户的默认权限级别为8
  constructor(level) {
    this.level = level || 1
  }

  get m() {
    return async (ctx, next) => {
      const token = (ctx.header.authorization || '').split(' ').pop()

      if (!token) throw new AuthFailException('请先登录')

      let decode

      try {
        decode = jwt.verify(token, privateKey)
      } catch (error) {
        if (error.name == 'TokenExpiredError')
          throw new AuthFailException('登录状态已过期，请重新登录')
        throw new Forbidden('token不合法')
      }

      if (decode.rights < this.level) throw new Forbidden('禁止访问')

      ctx.state.auth = { ...decode }

      // ctx.state.auth = {
      //   id: decode.id,
      //   rights: decode.rights,
      // }

      await next()
    }
  }
}

module.exports = Auth
