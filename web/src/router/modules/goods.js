import GoodsDetail from '@/views/goods/GoodsDetail'
import SearchResult from '@/views/goods/SearchResult'
import GoodsByCategory from '@/views/goods/GoodsByCategory'
export default [
  {
    path: '/goods/id/:id',
    name: 'goodsDetail',
    component: GoodsDetail,
    props: true
  },
  {
    path: '/goods/search',
    name: 'search',
    component: SearchResult,
    props: route => ({ q: route.query.q })
  },
  {
    path: '/goods/:name',
    name: 'goodsByCategory',
    component: GoodsByCategory,
    props: true

  }
]
