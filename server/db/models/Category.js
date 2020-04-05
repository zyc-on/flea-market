const Sequelize = require('sequelize')

class Categoty extends Sequelize.Model {
	static init(sequelize) {
		return super.init({
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			name: {
				type: Sequelize.STRING,
				unique: true,
				allowNull: false
			}
		}, {
			sequelize,
			modelName: 'category'
		})
	}

	static associate(models) {
		this.hasMany(models.SubCategory)
	}
}
module.exports = Categoty