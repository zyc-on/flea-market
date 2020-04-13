<template>
  <div class="home-container">
    <search />
    <hot-categories />
    <latest-goods />
  </div>
</template>

<script>
import Search from '@/components/goods/Search'
import LatestGoods from '@/views/goods/LatestGoods'
import HotCategories from '@/components/category/HotCategories'
export default {
  components: {
    Search,
    LatestGoods,
    HotCategories
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  padding: 10px 12px;
}
</style>
