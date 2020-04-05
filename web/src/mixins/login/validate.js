const validate = {
  data () {
    return {
      accountValid: false,
      passwordValid: false
    }
  },
  methods: {
    validateAccount () {
      this.accountValid = this.user.account.length > 5
    },
    validatePassword () {
      this.passwordValid = this.user.password.length > 5
    }
  }
}
export default validate
