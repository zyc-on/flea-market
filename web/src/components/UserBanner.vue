<template>
  <div class="user-wrapper">
    <div class="basic-info">
      <span>{{ profile.username }}</span>
      <p>
        {{ profile.motto }}
      </p>
    </div>
    <van-image
      height="60"
      width="60"
      round
      fit="cover"
      :src="`http://localhost:3000/images/avatar/${this.profile.avatar}`"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState('user', ['profile'])
}
</script>

<style lang="scss" scoped>
.user-wrapper {
  display: flex;
  flex-wrap: nowrap;

  .basic-info {
    height: 60px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      font-size: 22px;
      color: #2c2c2c;
      line-height: 48px;
      font-weight: bold;
    }

    p {
      font-size: 12px;
      max-width: 220px;
      color: #b0b0b0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
