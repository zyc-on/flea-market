const fs = require('fs')
const path = require('path')
class InitManager {

	static initRouters(app) {

		const routerDir = path.join(__dirname, '../api/v1')

		fs
			.readdirSync(routerDir)
			.forEach(file => {
				const router = require(path.join(routerDir, file))
				app.use(router.routes())
			})
	}

	static initModels(sequelize) {

		const models = {}
		const modelsDir = path.join(__dirname, '../db/models')
		console.log(modelsDir)
		

		fs
			.readdirSync(modelsDir)
			.forEach(file => {
				const model = require(path.join(modelsDir, file))
				models[model.name] = model.init(sequelize)
			})

		Object.values(models)
			.filter(model => typeof model.associate === 'function')
			.forEach(model => model.associate(models))

		return models
	}
}

module.exports = InitManager