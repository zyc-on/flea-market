const validateName = val => val && val.length <= 8

const validateMotto = val => val.length <= 18

const validatePassword = val => val.length >= 6 && val.length <= 12

export { validateName, validateMotto, validatePassword }
