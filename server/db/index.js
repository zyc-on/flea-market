const Sequelize = require('sequelize')
const { name, host, port, user, password } = require('../config/config').db
const InitManager = require('../lib/init')

const sequelize = new Sequelize(name, user, password, {
  dialect: 'mysql',
  host,
  port,
  timezone: '+08:00',

  //会为每个表加上这些字段
  define: {
		timestamp: true,
		
    // 不删除数据库条目,但将新添加的属性deletedAt设置为当前日期(删除完成时).
    // paranoid 只有在启用时间戳时才能工作
    paranoid: true,

    // 将自动设置所有属性的字段参数为下划线命名方式.
    // 不会覆盖已经定义的字段选项
    underscored: true,
  },
})

const models = InitManager.initModels(sequelize)

sequelize.sync({
  // force:true
})

module.exports = {
  ...models,
  sequelize,
}
