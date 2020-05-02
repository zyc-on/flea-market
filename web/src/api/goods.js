import http from './http'

const uploadImage = image => http.post('/goods/images', image)

const uploadGoods = goods => http.post('/goods', goods)

const updateGoods = (id, goods) => http.put(`/goods/${id}`, goods)

const getLatestGoods = query => http.get('goods/latest', { params: query })

const getGoodsByCategory = (id, query) =>
  http.get(`/goods/category/${id}`, {
    params: query
  })

const getGoodsById = id => http.get(`/goods/${id}`)

const searchGoods = query => http.get('/goods/search', {
  params: query
})

export {
  uploadImage,
  uploadGoods,
  updateGoods,
  getLatestGoods,
  getGoodsByCategory,
  getGoodsById,
  searchGoods
}
