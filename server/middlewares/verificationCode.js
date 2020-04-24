const nodemailer = require('nodemailer')
const conf = require('../config/config').email
const { VerificationCode } = require('../db/index')

async function registerCode(ctx, next) {
  const { email } = ctx.request.body
}

//POP3/SMTP mdxgxpivoekwcggi

//IMAP/SMTP服务 eykbaeajfcxlcddh

//在第三方客户端登录时，密码框请输入以下授权码：lazzdimgjyfadghh

async function sendCode(to, subject) {
  const transportOptions = {
    service: 'QQ',
    auth: {
      user: conf.user,
      pass: conf.pass,
    },
  }

  let code = conf.code()
  let expire = conf.expire()

  const mailOptions = {
    from: `"验证邮件"<${conf.user}>`,
    to,
    subject,
    html: `<h3>您的验证码是${code}</h3>`,
  }

  let transporter = nodemailer.createTransport(transportOptions)

  let info
}
