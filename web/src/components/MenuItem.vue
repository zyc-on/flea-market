<template>
  <div class="menu-item" @click="$emit('onSelect')">
    <van-icon :name="icon" />
      <span>{{name}}</span>
      <van-icon v-if="arrow" :name="arrow"/>
  </div>
</template>

<script>
export default {
  props: ['icon', 'name', 'arrow']
}
</script>

<style lang="scss" scoped>
  .menu-item {
    margin: 12px 0;
    display: flex;
    height: 46px;
    align-items: center;
    background: #fff;
    border-radius: 8px;

    i {
      margin: 0 8px 0 16px;
    }

    span {
      flex-grow: 1;
      font-size: 14px;
    }
  }
</style>
