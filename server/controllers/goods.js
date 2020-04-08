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

module.exports = {
  uploadGoods,
  images,
}
