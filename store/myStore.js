export const state = () => ({
  indexDb: {},
  pageListDb: [],
})

export const actions = {
  add(vuexContext, myIndex) {
    // console.log('myStore.js add --- myIndex: ', myIndex)
    vuexContext.commit('mutationsAdd', myIndex)
  },

  set(vuexContext, myIndex) {
    // console.log('myStore.js action-set --- myIndex: ', myIndex)
    vuexContext.commit('mutationsSet', myIndex)
  },

  update(vuexContext, myIndex) {
    vuexContext.commit('mutationsUpdate', myIndex)
  },

  // pageList 関連
  setPageList(vuexContext, pageList) {
    vuexContext.commit('mutationsSetPageList', pageList)
  },
}

export const mutations = {
  mutationsAdd(state, myIndex) {
    state.indexDb = JSON.parse(JSON.stringify(myIndex))
  },

  mutationsSet(state, myIndex) {
    // console.log('myStore.js mutations-set --- myIndex: ', myIndex)
    // state.indexDb.push({
    //   myIndex
    // })

    // state.indexDb = myIndex とすると以下のエラー発生のため JSONで処理
    // Error: [vuex] do not mutate vuex store state outside mutation handlers.
    state.indexDb = JSON.parse(JSON.stringify(myIndex))
  },

  mutationsPush(state, myIndex) {
    state.indexDb.push({
      myIndex,
    })
  },

  mutationsUpdate(state, myIndex) {
    state.indexDb.update({
      myIndex,
    })
  },

  // pageList 関連

  mutationsSetPageList(state, pageList) {
    // state.indexDb = myIndex とすると以下のエラー発生のため JSONで処理
    // Error: [vuex] do not mutate vuex store state outside mutation handlers.
    state.pageListDb = JSON.parse(JSON.stringify(pageList))
    // state.pageListDb.set({
    //   pageList,
    // })
  },
}

export const getters = {
  getMenuIndex(state) {
    // console.log('getMenuIndex-1 --- indexDb :', state.indexDb)
    return state.indexDb
  },

  getPageList(state) {
    // console.log('getMyStore-1 --- pageListDb:', state.pageListDb)
    return state.pageListDb
  },
}
