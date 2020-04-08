import { fetchCategories } from '../../api/category'

export default {
  namespaced: true,
  state: {
    categories: ''
  },
  mutations: {
    setCategories (state, payload) {
      state.categories = payload
    }
  },
  actions: {
    fetchCategories ({ commit }) {
      return fetchCategories()
        .then(res => commit('setCategories', res.data))
        .catch(err => Promise.reject(err))
    }
  }
}
