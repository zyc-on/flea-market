import {
  login,
  updateProfile,
  fetchProfile,
  fetchSelling
} from '@/api/user'
import { uploadGoods, updateGoods } from '@/api/goods'

import { resolveAccountId, resolveProfile } from '../lib/userLib'
export default {
  namespaced: true,
  state: {
    // user: {}
    account: '',
    id: '',
    profile: {},
    selling: [],
    sold: [],
    bought: []
  },
  getters: {
    sellingCount: state => state.selling.length,
    getSellingById: state => id =>
      state.selling.find(goods => goods.id === parseInt(id))
  },
  mutations: {
    setAccountId (state, payload) {
      state.id = payload.id
      state.account = payload.account
    },
    setProfile (state, profile) {
      state.profile = profile
    },
    addSelling (state, goods) {
      state.selling.push(goods)
    },
    setSelling (state, goods) {
      state.selling = goods
    },
    setTargetSelling (state, goods) {
      const index = state.selling.findIndex(item => item.id === goods.id)
      state.selling.splice(index, 1, goods)
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
    updateProfile ({ state, commit }, profile) {
      return updateProfile(state.id, profile)
        .then(res => {
          console.log('updateProfile')
          commit('setProfile', profile)
        })
        .catch(err => Promise.reject(err))
    },
    fetchProfile ({ state, commit }) {
      console.log('fetchProfile')
      return fetchProfile()
        .then(res => {
          console.log('fetchProfile,success')
          commit('setAccountId', resolveAccountId(res.data))
          commit('setProfile', resolveProfile(res.data))
        })
        .catch(err => Promise.reject(err))
    },
    uploadGoods ({ state, commit }, goods) {
      console.log('uploadGoods')
      return uploadGoods(goods)
        .then(res => {
          console.log('uploadGoods,success')
          commit('addSelling', res.data.gods)
        })
        .catch(err => Promise.reject(err))
    },

    fetchSelling ({ state, commit }) {
      console.log('fetchSelling')
      return fetchSelling(state.id)
        .then(res => {
          console.log('fetchSelling,success')
          commit('setSelling', res.data)
        })
        .catch(err => Promise.reject(err))
    },

    updateGoods ({ state, commit }, goods) {
      console.log('updateGoods')
      return updateGoods(goods.id, goods)
        .then(res => {
          console.log('updateGoods ,success')
          commit('setTargetSelling', goods)
        })
        .catch(err => Promise.reject(err))
    },

    async initialize ({ dispatch }) {
      await dispatch('fetchProfile')
      await dispatch('fetchSelling')
    }
  }
}
