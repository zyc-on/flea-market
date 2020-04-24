const Sequelize = require('sequelize')

const User = require('./User')
class Goods extends Sequelize.Model {
  static getLatest({ page = 1, limit = 6 }) {
    return Goods.findAndCountAll({
      offset: (page - 1) * limit,
      limit: parseInt(limit),
      attributes: { exclude: ['deletedAt'] },
      include: [
        {
          model: User,
          attributes: ['username', 'avatar'],
        },
      ],
    })
  }
  static getById(id) {
    return Goods.findByPk(id, {
      attributes: { exclude: ['deletedAt'] },
      include: [
        {
          model: User,
          attributes: [
            'id',
            'username',
            'avatar',
            'school',
            'location',
            'createdAt',
            'motto',
          ],
        },
      ],
    })
  }

  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        images: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        oprice: Sequelize.INTEGER,
        price: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        rate: Sequelize.TINYINT,
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'goods',
      }
    )
  }

  static associate(models) {
    this.belongsTo(models.Category)
    this.belongsTo(models.SubCategory)
    this.belongsTo(models.User)
  }
}

module.exports = Goods
