<template>
  <div>
    <van-nav-bar
      title="上架的商品"
      left-arrow
      @click-left="$router.push('/user')"
    />
    <van-swipe-cell v-for="item in selling" :key="item.id">
      <van-card
        :price="item.price"
        :desc="item.description"
        :title="item.name"
        :origin-price="item.oprice"
        :thumb="
          `http://localhost:3000/images/goods/${item.images.split('?')[1]}`
        "
        @click="$router.push(`/user/selling/${item.id}`)"
      />
      <template #right>
        <van-button square type="primary" text="编辑" />
        <van-button square type="danger" text="删除" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('user', ['selling'])
  },
  methods: {
    // onClose (id) {
    //   return (position, instance) => {
    //     console.log(id)
    //     console.log(position)

    //     instance.close()
    //   }
    // },
  }
}
</script>

<style lang="scss" scoped>
.van-swipe-cell {
  .van-button {
    height: 100%;
  }
}
</style>
