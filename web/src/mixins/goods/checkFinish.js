const checkFinish = {
  methods: {
    checkFinish () {
      console.log(this.query.page)
      this.finished = this.total - this.query.page * 6 <= 0
      if (this.finished) return
      this.query.page++
    }
  }
}

export default checkFinish
