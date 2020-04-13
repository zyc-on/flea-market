<template>
  <div class="login-container">
    <div class="logo">
      <h1>LOGO</h1>
    </div>
    <div class="login">
      <div class="input-wrapper">
        <input @input="validateAccount" :class="[accountValid? 'success': 'failure']" type="text" v-model="user.account">
        <span :class="{fix:user.account}">账号</span>
      </div>
      <div class="input-wrapper">
        <input @input="validatePassword" :class="[passwordValid? 'success': 'failure']"  type="password" v-model="user.password">
        <span :class="{fix:user.password}">密码</span>
      </div>
      <div class="input-wrapper">
        <input @input="isTheSame" v-model="password2" type="password" :class="[same? 'success': 'failure']">
        <span :class="{fix:password2}">确认密码</span>
      </div>
      <div class="button-wrapper">
        <span>找回密码</span>
        <span>or</span>
        <span>去登录</span>
        <button @click="register" :disabled="!allValid" :class="{valid:allValid}">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
import validate from '@/mixins/login/validate'
import { register } from '@/api/user'

export default {
  name: 'Register',
  mixins: [validate],
  data () {
    return {
      user: {
        account: '',
        password: ''
      },
      password2: '',
      same: false
    }
  },
  computed: {
    allValid: function () {
      return this.accountValid && this.passwordValid && this.same
    }
  },
  methods: {
    isTheSame () {
      this.same = this.user.password === this.password2
    },
    async register () {
      await register(this.user)
      this.$notify({
        type: 'success',
        message: '注册成功，请登录'
      })
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/style/login/login.scss";
</style>
