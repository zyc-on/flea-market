const Koa = require('koa')
const cors = require('@koa/cors')
const static = require('koa-static')

const InitManager = require('./lib/init')
const catchError = require('./middlewares/catchError')

const app = new Koa()
app.use(cors())
app.use(static(__dirname + '/static'))

app.use(catchError)

InitManager.initRouters(app)

app.listen(3000)