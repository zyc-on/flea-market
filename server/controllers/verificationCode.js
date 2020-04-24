const nodemailer = require('nodemailer')
const conf = require('../config/config').email
const { VerificationCode } = require('../db/index')
const { Success, HttpException, Forbidden } = require('../lib/http-exception')

async function sendCode(to) {
  const transportOptions = {
    service: 'QQ',
    auth: {
      user: conf.user,
      pass: conf.pass,
    },
  }

  let transporter = nodemailer.createTransport(transportOptions)

  let code = conf.code()
  let expire = conf.expire()

  const mailOptions = {
    from: `"验证邮件"<${conf.user}>`,
    to,
    subject: '验证码',
    html: `<h3>您的验证码是：${code}</h3>
          <p>有效期为10分钟</p>`,
  }
  console.log(to)

  try {
    await transporter.sendMail(mailOptions)
    await VerificationCode.create({
      email: to,
      code,
      expire,
    })
  } catch (error) {
    console.log(error)
    throw new HttpException('验证码发送失败，请重新尝试')
  }
  throw new Success('验证码发送成功')
}

async function getVerificationCode(ctx) {
  const email = ctx.request.body.email
  await canSend(email)
  await sendCode(email)
}

async function canSend(email) {
  console.log(email)

  const code = await VerificationCode.findByPk(email)
  console.log('00000000000000000000')
  console.log(!code)
  console.log(code)

  if (!code) return true
  console.log('1111111111111111111111')

  let expired = new Date() - code.expire >= 0
  console.log('2222222222222222222222222')

  console.log(expired)

  if (expired) {
    await code.destroy()
    return true
  }
  throw new Forbidden('请求过于频繁，请稍后再试')
}

module.exports = getVerificationCode
