import http from './http'

const uploadImage = image => http.post('/goods/images', image)

const uploadGoods = goods => http.post('/goods', goods)

export {
  uploadImage,
  uploadGoods
}
