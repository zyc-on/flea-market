const Sequelize = require('sequelize')
const SubCategory = require('./SubCategory')

class Category extends Sequelize.Model {
  static getCategories() {
    return Category.findAll({
      attributes: ['id', ['name', 'text']],
      include: [
        {
          model: SubCategory,
          as: 'children',
          attributes: ['id', ['name', 'text']],
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
          unique: true,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'category',
      }
    )
  }

  static associate(models) {
    this.hasMany(models.SubCategory, { as: 'children' })
  }
}
module.exports = Category
