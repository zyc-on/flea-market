const jwt = require('jsonwebtoken')

const {
	privateKey,
	expiresIn
} = require('../config/config').security

// 存储用户id和权限数据
const generateToken = (id, rights) => {
	const token = jwt.sign({
		id,
		rights
	}, privateKey, {
		expiresIn
	})

	return token
}

module.exports = generateToken