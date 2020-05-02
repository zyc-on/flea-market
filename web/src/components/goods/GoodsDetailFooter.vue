<template>
  <div>
    <div class="user">
      <div>
        <span>{{ user&&user.username}}</span>
        <span>{{ user&&user.school }} 来闲集{{ days }}天了</span>
      </div>
      <van-image
        height="50"
        width="50"
        fit="cover"
        :src="`http://localhost:3000/images/avatar/${this.user&&this.user.avatar}`"
      />
    </div>
    <div class="holder"></div>
    <div class="operations">
      <div>
        <van-icon size="22" name="good-job-o" />
        <span>超赞</span>
      </div>
      <div>
        <van-icon size="22" name="star-o" />
        <span>收藏</span>
      </div>
      <div>
        <van-icon size="22" name="chat-o" />
        <span>留言</span>
      </div>
      <van-button round type="info" size="small">我想要</van-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['user', 'goodsId'],
  computed: {
    days () {
      const date = new Date(this.user && this.user.createdAt)
      const now = new Date()
      return Math.floor((now - date) / (1000 * 3600 * 24))
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  margin-top: 6px;
  display: flex;

  div:first-of-type {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    span:first-of-type {
      font-size: 18px;
    }
    span:last-of-type {
      font-size: 14px;
    }
  }
}

.operations {
  width: 100%;
  height: 45px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 4px 12px;
  display: flex;
  align-items: center;
  div:nth-of-type(3) {
    flex-grow: 1;
  }

  & > div {
    display: flex;
    flex-direction: column;
    span {
      font-size: 11px;
      margin-right: 8px;
    }
  }
}

.holder {
  height: 50px;
}
</style>
