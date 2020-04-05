const Sequelize = require('sequelize')
const {name,host,port,user,password} = require('../config/config').db
const InitManager = require('../lib/init')

const sequelize = new Sequelize(name,user,password,{
	dialect:'mysql',
	host,
	port,
	timezone: '+08:00',
	define:{
		timestamp:true,
		paranoid:true,
		underscored: true,
	}
})

// const modelsDir = __dirname + '/models'
// const models = {}

// fs
// 	.readdirSync(modelsDir)
// 	.forEach(file=>{
// 		const model = require(path.join(modelsDir,file))
// 		models[model.name] = model.init(sequelize)
// 	})

// Object.values(models)
// 	.filter(model=> typeof model.associate === 'function')
// 	.forEach(model => model.associate(models))
const models = InitManager.initModels(sequelize)

sequelize.sync({
	// force:true
})

module.exports = {
	...models,
	sequelize
}
