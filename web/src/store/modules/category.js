import { fetchCategories } from '../../api/category'

export default {
  namespaced: true,
  state: {
    categories: []
  },
  getters: {
    mapCategory: state => ename => {
      console.log(ename)
      console.log(state.categories)

      return state.categories.find(item => item.ename === ename)
    }

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
