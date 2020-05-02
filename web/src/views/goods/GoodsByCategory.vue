<template>
  <div>
    <van-nav-bar
      :title="category.text"
      left-arrow
      @click-left="$router.push('/home')"
    />
    <van-search show-action placeholder="请输入搜索关键词">
      <template #action>
        <div>搜索</div>
      </template>
    </van-search>
    <van-dropdown-menu>
      <van-dropdown-item v-model="type" :options="typeOptions" />
      <van-dropdown-item
        @change="reset"
        v-model="query.field"
        :options="fieldOptions"
      />
      <van-dropdown-item
        @change="reset"
        v-model="query.order"
        :options="orderOptions"
      />
    </van-dropdown-menu>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :error.sync="error"
      error-text="请求失败，点击重新加载"
      @load="load"
    >
      <div class="goods-card-wrapper">
        <goods-card v-for="item in goods" :goods="item" :key="item.id" />
      </div>
    </van-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import checkFinish from '@/mixins/goods/checkFinish'
import { getGoodsByCategory } from '@/api/goods'
import GoodsCard from '@/components/goods/GoodsCard'
export default {
  components: {
    GoodsCard
  },
  props: ['name'],
  mixins: [checkFinish],
  data () {
    return {
      category: '',
      type: 0,
      typeOptions: [
        { text: '商品', value: 0 },
        { text: '需求', value: 1 }
      ],
      fieldOptions: [
        { text: '发布时间', value: 'updatedAt' },
        { text: '价格', value: 'price' }
      ],
      orderOptions: [
        { text: '降序', value: 'DESC' },
        { text: '升序', value: 'ASC' }
      ],
      goods: [],
      loading: false,
      finished: false,
      error: false,
      total: 0,
      query: {
        field: 'updatedAt',
        order: 'DESC',
        page: 1
      }
    }
  },
  computed: mapGetters('category', ['mapCategory']),
  created () {
    this.category = this.mapCategory(this.name)
  },
  methods: {
    reset () {
      this.goods = []
      this.query.page = 1
      this.finished = false
      this.error = false
    },
    async load () {
      this.loading = true
      console.log(this.query.page)
      try {
        const res = await getGoodsByCategory(this.category.id, this.query)
        this.goods.push(...res.data.rows)
        this.loading = false
        this.total = res.data.count
        this.checkFinish()
      } catch (error) {
        console.log(error)
        this.error = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/goods/goodsCardWrapper.scss';
</style>
