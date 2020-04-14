import http from './http'

const uploadImage = image => http.post('/goods/images', image)

const uploadGoods = goods => http.post('/goods', goods)

const updateGoods = (id, goods) => http.put(`/goods/${id}`, goods)

const getLatestGoods = params => http.get('goods/latest', { params })

const getGoodsByCategory = params =>
  http.get('/goods/category', {
    params: params
  })

const getGoodsById = id => http.get(`/goods/${id}`)

export {
  uploadImage,
  uploadGoods,
  updateGoods,
  getLatestGoods,
  getGoodsByCategory,
  getGoodsById
}
