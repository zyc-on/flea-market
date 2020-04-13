<template>
  <div class="detail-header">
    <van-nav-bar left-arrow @click-left="$router.go(-1)">
      <template #right>
        <van-icon @click="show = true" name="ellipsis" size="18" />
      </template>
    </van-nav-bar>
    <van-action-sheet
      v-model="show"
      :actions="actions"
      cancel-text="取消"
      @cancle="show = false"
    />
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  },
  data () {
    return {
      show: false,
      actions: [{ name: '举报' }, { name: '复制链接' }]
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-header {
  .van-nav-bar__right {
    right: 0;
  }
  .van-nav-bar__left {
    left: 0;
  }
}
</style>
