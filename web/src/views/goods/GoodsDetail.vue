<template>
  <div class="detail-container">
    <goods-detail-header />
    <goods-detail-main :goods="goods" />
    <goods-detail-footer :user="goods.user" />
  </div>
</template>

<script>
import { getGoodsById } from '@/api/goods'
import GoodsDetailHeader from '@/components/goods/GoodsDetailHeader'
import GoodsDetailMain from '@/components/goods/GoodsDetailMain'
import GoodsDetailFooter from '@/components/goods/GoodsDetailFooter'
export default {
  props: ['id'],
  components: {
    GoodsDetailHeader,
    GoodsDetailMain,
    GoodsDetailFooter
  },
  data () {
    return {
      goods: {}
    }
  },
  created () {
    this.fetchGoods()
  },
  methods: {
    async fetchGoods () {
      console.log('fetch')
      this.goods = (await getGoodsById(this.id)).data
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-container{
  padding:0 13px;
  background-color: #fff;
}
</style>
