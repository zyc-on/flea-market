const { Goods } = require('../db/index')

const uploadGoods = async ctx => {
  let goods = ctx.request.body
  goods.userId = ctx.state.auth.id
  goods = await Goods.create(goods)
  ctx.body = {
    goods,
    message: '上传成功',
  }
}

const images = async ctx => {
  ctx.body = ctx.request.files.file.path.split('\\').pop()
}

const updateGoods = async ctx => {
  ctx.body = await Goods.update(ctx.request.body, {
    where: {
      id: ctx.request.body.id,
    },
  })
}

const latestGoods = async ctx => {
  console.log(ctx.query.page)
  
  ctx.body = await Goods.getLatest(ctx.query)
}

const getGoodsById = async ctx => {
  ctx.body = await Goods.getById(ctx.params.id)
}

module.exports = {
  uploadGoods,
  images,
  updateGoods,
  latestGoods,
  getGoodsById
}
