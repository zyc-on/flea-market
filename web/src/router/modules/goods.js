import GoodsDetail from '@/views/goods/GoodsDetail'

export default [
  {
    path: '/goods/id/:id',
    name: 'goodsDetail',
    component: GoodsDetail,
    props: true
  }
]
