const validator = require('validator').default

const validateAccount = account => account && validator.isEmail(account)
const validatePassword = password =>
  password && validator.isLength(password, { min: 6, max: 18 })
  
const validateId = id => validator.isInt(id)

const validateLogin = (account, password) =>
  validateAccount(account) && validatePassword(password)

const validateProfile = profile => {
  // TODO 校验
  delete profile.password
  delete profile.deletedAt

  return ['username', 'avatar', 'school', 'location'].every(key => profile[key])
}

module.exports = {
  validateId,
  validateAccount,
  validatePassword,
  validateLogin,
  validateProfile,
}
