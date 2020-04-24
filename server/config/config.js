module.exports = {
  environment: 'dev',
  db: {
    name: 'market',
    host: '119.3.164.176',
    port: 3306,
    user: 'root',
    password: '123456',
  },
  security: {
    privateKey: 'fsdfauhqfas',
    expiresIn: 60 * 60 * 24,
  },
  email: {
    user: '1771922377@qq.com',
    pass: 'lazzdimgjyfadghh',
    get code() {
      return () => Math.random(16).toString().slice(2, 6).toUpperCase()
    },

    get expire() {
      return () => +new Date() + 60 * 1000
    },
  },
}
