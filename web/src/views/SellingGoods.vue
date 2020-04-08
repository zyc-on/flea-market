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
        :thumb="`http://localhost:3000/images/goods/${item.images.split('?')[1]}`"
      />
    </van-swipe-cell>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {

  computed: {
    ...mapState('user', ['selling'])
  }
}
</script>

<style></style>
