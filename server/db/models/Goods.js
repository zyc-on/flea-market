const Sequelize = require('sequelize')


class Goods extends Sequelize.Model {
	static init(sequelize) {
		return super.init({
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true

			},
			name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			images: {
				type: Sequelize.STRING,
				allowNull: false
			},
			oprice: Sequelize.INTEGER,
			price: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			rate: Sequelize.TINYINT,
			description: {
				type: Sequelize.STRING,
				allowNull: false
			}
		}, 
		{
			sequelize,
			modelName: 'goods'
		})
	}

	static associate(models) {
		this.belongsTo(models.Category)
		this.belongsTo(models.SubCategory)
		this.belongsTo(models.User)
	}
}

module.exports = Goods