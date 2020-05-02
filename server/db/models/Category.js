const Sequelize = require('sequelize')
const SubCategory = require('./SubCategory')

class Category extends Sequelize.Model {
  static getCategories() {
    return Category.findAll({
      attributes: ['id', ['name', 'text'],'ename'],
      include: [
        {
          model: SubCategory,
          as: 'children',
          attributes: ['id', ['name', 'text'],'ename'],
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
        ename:{
          type:Sequelize.STRING,
          allowNull: false,
        }
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
