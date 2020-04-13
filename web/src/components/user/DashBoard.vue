<template>
  <div class="board">
      <div @click="$router.push('/user/sold')">
        <span>0</span>
        <span>我卖出的</span>
      </div>

      <div @click="$router.push('/user/bought')">
        <span>0</span>
        <span>我买到的</span>
      </div>
      <div @click="$router.push('/user/selling')">
        <span>{{ sellingCount }}</span>
        <span>正在卖</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('user', ['sellingCount'])
  }
}
</script>

<style lang="scss" scoped>
.board {
  margin-top: 36px;
  padding: 2px;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;

    span:first-of-type {
      color: #2c2c2c;
      font-size: 20px;
    }

    span:last-of-type {
      font-size: 12px;
      color: #b0b0b0;
    }
  }
}
</style>
