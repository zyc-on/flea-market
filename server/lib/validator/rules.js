const validator = require('validator').default

const validateLogin = (account, password) =>
  validateAccount(account) && validatePassword(password)

const validateRegister = ({ account, password, code }) => {
  validateAccount(account) && validatePassword(password) && code
}

const validateProfile = profile => {
  // TODO 校验
  delete profile.password
  delete profile.deletedAt

  return ['username', 'avatar', 'school', 'location'].every(key => profile[key])
}

const validateId = id => validator.isInt(id)

const validateAccount = account => account && validator.isEmail(account)
const validatePassword = password =>
  password && validator.isLength(password, { min: 6, max: 18 })

module.exports = {
  validateId,
  validateAccount,
  validatePassword,
  validateLogin,
  validateRegister,
  validateProfile,
}
