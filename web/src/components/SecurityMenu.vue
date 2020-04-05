<template>
  <div>
    <div class="menu-wrapper">
      <div class="menu-item" @click="$router.push('/user/address')">
        <van-icon name="phone-o" />
        <span>修改手机号码</span>
        <van-icon name="arrow" />
      </div>
       <div class="menu-item" @click="$router.push('/user/profile')">
        <van-icon name="edit" />
        <span>修改邮箱地址</span>
        <van-icon name="envelop-o" />
      </div>
      <div class="menu-item" @click="$router.push('/user/following')">
        <van-icon name="browsing-history-o" />
        <span>修改登录密码</span>
        <van-icon name="arrow" />
      </div>
      <div class="menu-item" @click="$router.push('/user/history')">
        <van-icon name="close"/>
        <span>注销账户</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <van-action-sheet v-model="showSetting" :actions="actions" cancel-text="取消" @cancel="onCancle" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      showSetting: false,
      actions: [
        { name: '账号与安全' },
        { name: '退出登录' },
        { name: '关于我们' }
      ]
    }
  },
  methods: {
    onCancle () {
      this.showSetting = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/style/user/userMenu.scss'
</style>
