import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import user from './modules/user'
import category from './modules/category'
// import goods from './modules/goods'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    category
    // goods
  },
  plugins: [createLogger]
})
