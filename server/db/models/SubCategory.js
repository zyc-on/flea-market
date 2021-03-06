const Sequelize = require('sequelize')

class SubCategory extends Sequelize.Model {
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
			},
			ename:{
				type:Sequelize.STRING,
				unique: true,
				allowNull: false
			}
		}, {
			sequelize,
			modelName: 'subcategory'
		})
	}
	static associate(models) {
		this.belongsTo(models.Category)
	}
}
module.exports = SubCategory