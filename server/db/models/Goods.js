const Sequelize = require('sequelize')

const Category = require('./Category')
const User = require('./User')
const SubCategory = require('./SubCategory')

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

  static getByCategory(id,{page=1,limit = 6,order,field}){
    order = order === 'DESC' ? 'DESC' : 'ASC'
    field = field === 'updatedAt' ? 'updatedAt' : 'price'
    return Goods.findAndCountAll({ 
      offset: (page - 1) * limit,
      limit: parseInt(limit),
      where: {
        categoryId:id
      },
      attributes: { exclude: ['deletedAt'] },
      include: [
        {
          model: User,
          attributes: ['username', 'avatar'],
        },
      ],
      order: [[field, order]],   
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

  static search({ q, page = 1, order = 'DESC', field = 'updatedAt' }) {
    order = order === 'DESC' ? 'DESC' : 'ASC'
    field = field === 'updatedAt' ? 'updatedAt' : 'price'

    return Goods.findAndCountAll({
      offset: (page - 1) * 6,
      limit: 8,
      where: {
        name: {
          [Sequelize.Op.like]: '%' + q + '%',
        },
      },
      attributes: { exclude: ['deletedAt'] },
      include: [
        {
          model: User,
          attributes: ['id', 'username'],
        },
        {
          model: Category,
          attributes: ['id', 'name'],
        },
        {
          model: SubCategory,
          attributes: ['id', 'name'],
        },
      ],
      order: [[field, order]],
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
