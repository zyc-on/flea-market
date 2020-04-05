<template>
  <div>
    <div class="menu-wrapper">
      <div class="menu-item" @click="$router.push('/user/address')">
        <van-icon name="location-o" />
        <span>我的地址</span>
        <van-icon name="arrow" />
      </div>
       <div class="menu-item" @click="$router.push('/user/profile')">
        <van-icon name="edit" />
        <span>修改个人信息</span>
        <van-icon name="arrow" />
      </div>
      <div class="menu-item" @click="$router.push('/user/following')">
        <van-icon name="contact" />
        <span>我关注的用户</span>
        <van-icon name="arrow" />
      </div>
      <div class="menu-item" @click="$router.push('/user/history')">
        <van-icon name="browsing-history-o"/>
        <span>我的足迹</span>
        <van-icon name="arrow" />
      </div>

      <div class="menu-item">
        <van-icon name="add-o" />
        <span>TODO</span>
        <van-icon name="arrow" />
      </div>
      <div class="menu-item" @click="showSetting=true">
        <van-icon name="setting-o" />
        <span>设置</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <van-action-sheet @select="onSelect" v-model="showSetting" :actions="actions" cancel-text="取消" @cancel="onCancle" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      showSetting: false,
      actions: [
        { name: '账号与安全', path: '/user/security' },
        { name: '退出登录' },
        { name: '关于我们' }
      ]
    }
  },
  methods: {
    onCancle () {
      this.showSetting = false
    },
    onSelect (item) {
      this.showSetting = false
      this.$router.push(item.path)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/style/user/userMenu.scss'
</style>
