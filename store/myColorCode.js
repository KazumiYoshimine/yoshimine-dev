import { myColorCode } from '~/contents/myColorCode.json'

export const state = () => ({
  myColorCodes: myColorCode,
})

export const actions = {
  add(vuexContext, text) {
    vuexContext.commit('add', text)
  },
  toggle(vuexContext, event) {
    vuexContext.commit('toggle', event)
  },
  remove(vuexContext, myColorCode) {
    vuexContext.commit('remove', myColorCode)
  },
}

export const mutations = {
  add(state, text) {
    state.myColorCodes.push({
      text,
      done: false,
    })
  },

  remove(state, myColorCode) {
    // console.log('1 - 2 myColorCode ---------:', myColorCode)
    state.myColorCodes.splice(state.myColorCodes.indexOf(myColorCode), 1)
  },

  // toggle(state, myColorCode) {
  //   myColorCode.done = !myColorCode.done
  // },
}

export const getters = {
  getColorCodeById: (state) => (Id) => {
    return Object.values(state.myColorCodes).filter((key) => key.Id === Id)
  },

  getColorCode: (state) => {
    return Object.values(state.myColorCodes)
  },
}
