const {
	HttpException
} = require('../lib/http-exception')
const {
	environment
} = require('../config/config')
const catchError = async (ctx, next) => {
	try {
		await next()
	} catch (error) {
		const isHttpException = error instanceof HttpException
		const isDev = environment === 'dev'

		if (isDev && !isHttpException) {
			throw error
		}

		if (isHttpException) {
			ctx.status = error.statusCode
			ctx.body = {
				message: error.message,
				errorCode: error.errorCode,
				requestUrl: `${ctx.method}: ${ctx.path}`
			}
		} else {
			ctx.status = 500
			ctx.body = {
				msg: 'Sorry,an error occurs on the web serverヽ(。_°)ノ',
				errorCode: 999,
				requestUrl: `${ctx.method}: ${ctx.path}`
			}
		}
	}
}
module.exports = catchError