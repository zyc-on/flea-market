<template>
  <div class="container">
    <user-banner />
    <dash-board />
    <user-menu />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import UserBanner from '../components/UserBanner'
import UserMenu from '../components/UserMenu'
import DashBoard from '../components/DashBoard'
export default {
  components: {
    UserMenu,
    DashBoard,
    UserBanner
  },
  created () {
    !this.profile.username && this.initialize()
  },
  computed: {
    ...mapState('user', ['profile'])
  },
  methods: {
    ...mapActions('user', ['initialize', 'fetchProfile', 'fetchSelling'])
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  padding: 36px 24px 0 24px;
}
</style>
