import { contentsMap } from '~/contents/contentsMap.json'

export const state = () => ({
  articleList: contentsMap,
})

export const actions = {
  addList(vuexContext, text) {
    vuexContext.commit('add', text)
  },
  toggle(vuexContext, event) {
    vuexContext.commit('toggle', event)
  },
  remove(vuexContext, article) {
    vuexContext.commit('remove', article)
  },
}

export const mutations = {
  add(state, text) {
    state.articleList.push({
      text,
      done: false,
    })
  },

  remove(state, article) {
    // console.log('1 - 2 article ---------:', article)
    state.articleList.splice(state.articleList.indexOf(article), 1)
  },

  toggle(state, article) {
    article.done = !article.done
  },
}

export const getters = {
  findArticlesByCategory: (state) => (category) => {
    return Object.values(state.articleList).filter((key) => key.category === category)
  },
}
