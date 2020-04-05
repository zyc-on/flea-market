<template>
  <div class="login-container">
    <div class="logo">
      <h1>LOGO</h1>
    </div>
    <div class="login">
      <div class="input-wrapper">
        <input
          @input="validateAccount"
          :class="[accountValid ? 'success' : 'failure']"
          type="text"
          v-model.trim="user.account"
        />
        <span :class="{ fix: user.account }">账号</span>
      </div>
      <div class="input-wrapper">
        <input
          @input="validatePassword"
          :class="[passwordValid ? 'success' : 'failure']"
          type="password"
          v-model="user.password"
        />
        <span :class="{ fix: user.password }">密码</span>
      </div>
      <div class="button-wrapper">
        <span>找回密码</span>
        <span>or</span>
        <span>创建账号</span>
        <button
          @click="submit"
          :disabled="!allValid"
          :class="{ valid: allValid }"
        >
          登录
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import validate from '../mixins/login/validate'
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  mixins: [validate],
  data () {
    return {
      user: {
        account: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('user', ['login']),
    submit () {
      this.login(this.user)
        .then(res => this.$router.push('/user'))
        .catch(err => console.log(err + '失败'))
    }
  },
  computed: {
    allValid: function () {
      return this.accountValid && this.passwordValid
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'src/assets/style/login/login.scss';
</style>
<!--<style lang="scss" scoped>-->
<!--.login-container{-->
<!--  height: 100%;-->
<!--  width: 100%;-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--  .login{-->
<!--    width: 70%;-->
<!--    .button-wrapper{-->
<!--      width: 100%;-->
<!--      display: flex;-->
<!--      justify-content: space-between;-->
<!--      align-items: center;-->

<!--      span{-->
<!--        font-size: 10px;-->
<!--      }-->

<!--      span:nth-of-type(3){-->
<!--        flex-grow: 1;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--  .input-wrapper{-->
<!--    position: relative;-->
<!--    width: 100%;-->
<!--    span{-->
<!--      font-size: 16px;-->
<!--      position: absolute;-->
<!--      top: 11px;-->
<!--      left: 14px;-->
<!--      transition: all 0.5s ease;-->
<!--    }-->
<!--  }-->
<!--  input{-->
<!--    display: block;-->
<!--    text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);-->
<!--    opacity: 0.5;-->
<!--    width: 100%;-->
<!--    padding: 12px;-->
<!--    margin: 14px 0;-->
<!--    border: 2px solid grey;-->
<!--    border-radius: 4px;-->

<!--    &:focus{-->
<!--      border: 2px solid blue;-->
<!--      &+span{-->
<!--        font-size: 12px;-->
<!--        top: -10px;-->
<!--        background-color: #fff;-->
<!--        padding: 0 5px;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--.fix{-->
<!--    top:-10px !important;-->
<!--    font-size: 12px !important;-->
<!--    background-color: #fff !important;-->
<!--    padding: 0 5px !important;-->
<!--  }-->
<!--</style>-->
