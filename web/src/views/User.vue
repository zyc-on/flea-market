<template>
  <div class="container">
    <div class="user-wrapper">
      <div class="basic-info">
        <span>{{profile.username}}</span>
        <p>
          {{profile.motto}}
        </p>
      </div>
      <van-image
        height="60"
        width="60"
        round
        fit="cover"
        src="http://localhost:3000/images/avatar/112.jpg"
      />
    </div>

    <div class="board">
      <div>
        <span>26</span>
        <span>我卖出的</span>
      </div>
      <div>
        <span>6</span>
        <span>我买到的</span>
      </div>
      <div>
        <span>3</span>
        <span>正在卖</span>
      </div>
    </div>
    <user-menu />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import UserMenu from '../components/UserMenu'
export default {
  components: {
    UserMenu
  },
  computed: mapState('user', ['profile']),
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  padding: 36px 24px 0 24px;
}
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
.board {
  margin-top: 36px;
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
