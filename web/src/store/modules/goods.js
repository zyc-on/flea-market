// import { getLatestGoods } from '../../api/goods'

// export default {
//   namespaced: true,
//   state: {
//     latestGoods: [],
//     total: 0,
//     query: {
//       page: 1,
//       limit: 6
//     },

//   },
//   mutations: {
//     setLatestGoods(state, goods) {
//       state.latestGoods.push(...goods)
//     },
//     setTotal(state, total) {
//       state.total = total
//     }
//   },
//   actions: {
//     fetchLatestGoods({ state, commit }) {
//       return getLatestGoods(state.query)
//         .then(res => {
//           console.log('getLatestGoods,success')
//           commit('setLatestGoods', res.data.rows)
//           commit('setTotal', res.data.count)
//         })
//         .catch(err => Promise.reject(err))
//     }
//   }
// }
