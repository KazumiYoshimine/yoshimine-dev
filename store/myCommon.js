export const state = () => ({
  myCommonDb: {},
  // myCommonDb: []
})

export const actions = {
  add(vuexContext, myCommon) {
    // console.log('1-1 category -----: ', myCommon.category)
    vuexContext.commit('add', myCommon)
  },

  set(vuexContext, myCommon) {
    // console.log('1-2 category -----: ', myCommon.category)
    vuexContext.commit('set', myCommon)
  },

  update(vuexContext, myCommon) {
    vuexContext.commit('update', myCommon)
  },

  updateCategory(vuexContext, category) {
    vuexContext.commit('updateCategory', category)
  },

  // toggle (vuexContext, myCommon) {
  //   vuexContext.commit('toggle', myCommon)
  // },
  // remove (vuexContext, myCommon) {
  //   vuexContext.commit('remove', myCommon)
  // }
}

export const mutations = {
  add(state, myCommon) {
    // console.log('1-1-1 category -----: ', myCommon.category)
    // state.myCommonDb.push({
    //   myCommon
    // })
    state.myCommonDb = myCommon
  },

  set(state, myCommon) {
    // console.log('1-2-1 category -----: ', myCommon.category)
    state.myCommonDb.set({
      myCommon,
    })
  },

  update(state, myCommon) {
    state.myCommonDb.update({
      myCommon,
    })
  },

  updateCategory(state, category) {
    state.myCommonDb.category = category
  },

  // remove (state, myCommon) {
  //   // console.log('1 - 2 article ---------:', article)
  //   state.myCommonDb.splice(state.article.indexOf(myCommon), 1)
  // },

  // toggle (state, myCommon) {
  //   myCommon.done = !myCommon.done
  // }
}

export const getters = {
  getMyCommon(state) {
    // console.log('4-1 myCommonDb ------ :', state.myCommonDb)
    return state.myCommonDb
  },
}
