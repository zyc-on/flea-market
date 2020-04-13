<template>
  <div class="hot-item" @click="$emit('onSelect')">
    <van-icon class="iconfont" class-prefix="icon" :name="icon" />
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    icon: String
  }
}
</script>

<style lang="scss" scoped>
.hot-item{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  i{
    font-size: 32px;
    color: #b0b0b0;;
  }

  span{
    font-size: 12px;
  }
}
</style>
