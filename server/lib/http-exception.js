class HttpException extends Error {
	constructor(message, errorCode = 1000, statusCode = 500) {
		super(message)
		this.errorCode = errorCode
		this.statusCode = statusCode
	}
}

class NotFoundException extends HttpException {
	constructor(message = '请求资源未找到', errorCode = 1000, statusCode = 404) {
		super(message, errorCode, statusCode)
	}
}

class AuthFailException extends HttpException {
	constructor(
		message = '身份校验失败，请重新登录',
		errorCode = 1000,
		statusCode = 401
	) {
		super(message, errorCode, statusCode)
	}
}

class UserAlreadyExistException extends HttpException {
	constructor(message = '该账号已被注册', errorCode = 1000, statusCode = 409) {
		super(message, errorCode, statusCode)
	}
}

class ParameterException extends HttpException {
	constructor(message = '请求参数错误', errorCode = 1000, statusCode = 400) {
		super(message, errorCode, statusCode)
	}
}

class Forbidden extends HttpException {
	constructor(
		message = '权限不足，禁止访问',
		errorCode = 1000,
		statusCode = 403
	) {
		super(message, errorCode, statusCode)
	}
}

class Success extends HttpException {
	constructor(message = 'OK', errorCode = 1000, statusCode = 200) {
		super(message, errorCode, statusCode)
	}
}

module.exports = {
	HttpException,
	AuthFailException,
	UserAlreadyExistException,
	NotFoundException,
	ParameterException,
	Forbidden,
	Success
}
