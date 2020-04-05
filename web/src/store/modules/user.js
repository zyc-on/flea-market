import { login, updateUser } from '../../api/user'
import { resolveAccountId, resolveProfile } from '../lib/userLib'
export default {
  namespaced: true,
  state: {
    // user: {}
    account: '',
    id: '',
    profile: {}
  },
  getters: {
  },
  mutations: {
    // setUser (state, user) {
    //   state.user = user
    // }
    setAccountId (state, payload) {
      state.id = payload.id
      state.account = payload.account
    },
    setProfile (state, profile) {
      state.profile = profile
    }
  },
  actions: {
    login ({ commit }, user) {
      console.log('login')
      return login(user)
        .then(res => {
          commit('setAccountId', resolveAccountId(res.data.user))
          commit('setProfile', resolveProfile(res.data.user))
          localStorage.token = res.data.token
        })
        .catch(err => Promise.reject(err))
    },
    // 修改密码和个人信息公用 profile:{}  {pwd:123456}
    updateUser ({ state, commit }, newVal) {
      return updateUser(state.id, newVal)
        .then(res => {
          console.log('23333')

          if (!newVal.password) { commit('setProfile', newVal) }
        })
        .catch(err => Promise.reject(err))
    }
  }
}
