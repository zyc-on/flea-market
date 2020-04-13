<template>
  <div class="categories">
    <hot-category-item name="手机" icon="shouji" @onSelect="$router.push('/user')" />
    <hot-category-item name="美妆" icon="meitimeirong" />
    <hot-category-item name="男装" icon="tixu" />
    <hot-category-item name="女装" icon="qunzi" />
    <hot-category-item name="分类" icon="fenlei" />
  </div>
</template>

<script>
import HotCategoryItem from './HotCategoryItem'
export default {
  components: {
    HotCategoryItem
  }
}
</script>

<style lang="scss" scoped>
.categories{
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  margin-bottom: 8px;
}
</style>
