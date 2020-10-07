// Firebase用の定義

// componets↔components、componente↔pages 間のデータ共有用
import { vuexfireMutations } from 'vuexfire'
// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)

// componets↔components、componee↔pages 間のデータ共有用
// componets や pages からの利用する場合は $store.state.message と記述する
// export const state = () => ({
//   message: 'Hello Vuex'
// })

// export default new Vuex.Store({
//   state: {
//     message: 'Hello Vuex'
//   },
//   mutations: {},
//   actions: {},
//   modules: {}
// })

// Firebase用の定義
export const mutations = {
  ...vuexfireMutations,
}
