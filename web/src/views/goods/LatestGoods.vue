<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    :error.sync="error"
    error-text="请求失败，点击重新加载"
    @load="fetchLatestGoods"
  >
    <div class="latest">
      <goods-card v-for="item in latestGoods" :goods="item" :key="item.id" />
    </div>
  </van-list>
</template>

<script>
import { getLatestGoods } from '@/api/goods'
import GoodsCard from '@/components/goods/GoodsCard'
export default {
  components: {
    GoodsCard
  },
  data () {
    return {
      latestGoods: [],
      loading: false,
      finished: false,
      error: false,
      total: 0,
      query: {
        page: 1,
        limit: 6
      }
    }
  },
  // created () {
  //   this.fetchLatestGoods()
  // },
  methods: {
    fetchLatestGoods () {
      this.loading = true
      console.log(this.query.page)

      getLatestGoods(this.query)
        .then(res => {
          console.log('成功获取最新商品')
          this.latestGoods.push(...res.data.rows)
          this.loading = false
          this.total = res.data.count
          this.checkFinish()
        })
        .catch(e => (this.error = true))
    },
    checkFinish () {
      console.log(this.query.page)
      this.finished = this.total - this.query.page * this.query.limit <= 0
      if (this.finished) return
      this.query.page++
    }
  }
}
</script>

<style lang="scss" scoped>
.van-list{
  margin-bottom: 30px;
}

.latest {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
