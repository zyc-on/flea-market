<template>
  <div>
    <div class="menu-wrapper">
      <menu-item
        @onSelect="$router.push('/user/profile')"
        icon="edit"
        name="修改个人信息"
        arrow="arrow"
      />
      <menu-item
        @onSelect="$router.push('/user/following')"
        icon="contact"
        name="我关注的用户"
        arrow="arrow"
      />
      <menu-item
        @onSelect="$router.push('/user/history')"
        icon="browsing-history-o"
        name="我的足迹"
        arrow="arrow"
      />
      <menu-item icon="add-o" name="TODO" />
      <menu-item
        @onSelect="showSetting = true"
        icon="setting-o"
        name="设置"
        arrow="arrow"
      />
    </div>
    <van-action-sheet
      @select="onSelect"
      v-model="showSetting"
      :actions="actions"
      cancel-text="取消"
      @cancel="onCancle"
    />
  </div>
</template>

<script>
import MenuItem from '../components/MenuItem'
export default {
  components: {
    MenuItem
  },
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
.menu-wrapper {
  margin-top: 32px;
}
</style>
