<template>
  <div class="menu-wrapper">
    <van-nav-bar title="账号与安全" @click-left="$router.go(-1)" left-arrow />
    <menu-item
      @onSelect="$router.push('/user/profile')"
      icon="phone-o"
      name="修改手机号码"
      arrow="arrow"
    />
    <menu-item
      @onSelect="$router.push('/user/profile')"
      icon="envelop-o"
      name="修改邮箱地址"
      arrow="arrow"
    />

    <menu-item
      @onSelect="$router.push('/user/profile')"
      icon="closed-eye"
      name="修改登录密码"
      arrow="arrow"
    />

    <menu-item
      @onSelect="$router.push('/user/profile')"
      icon="comment-o"
      name="消息提醒"
      arrow="arrow"
    />
    <menu-item
      @onSelect="$router.push('/user/profile')"
      icon="orders-o"
      name="服务协议"
      arrow="arrow"
    />
    <menu-item
      @onSelect="$router.push('/user/profile')"
      icon="eye-o"
      name="隐私政策"
      arrow="arrow"
    />

    <menu-item
      @onSelect="$router.push('/user/profile')"
      icon="chat-o"
      name="联系我们"
      arrow="arrow"
    />

    <menu-item
      @onSelect="$router.push('/user/profile')"
      icon="close"
      name="注销账户"
      arrow="arrow"
    />
  </div>
</template>

<script>
import MenuItem from '../components/MenuItem'
export default {
  components: {
    MenuItem
  }
}
</script>

<style lang="scss" scoped></style>
