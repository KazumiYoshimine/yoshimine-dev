import { firestoreAction } from 'vuexfire'
// import createPersistedState from 'vuex-persistedstate'
import firebase from '~/plugins/firebase'
import 'firebase/app'
// import 'firebase/firestore' // ここには使用するFirebaseSDKモジュールを記載
import 'firebase/firebase-firestore' // ここには使用するFirebaseSDKモジュールを記載

const db = firebase.firestore()
const cccRef = db.collection('ccc')
const commonRef = db.collection('cccCommon')

export const state = () => ({
  ccc: [],
  cccCommon: [],
})

export const actions = {
  // nuxtClientInit({ commit, state, dispatch }, { req }) {
  //   createPersistedState()(this)
  // },

  init: firestoreAction(({ bindFirestoreRef }, ref) => {
    // bindFirestoreRef('ccc', cccRef)
    bindFirestoreRef('ccc', ref)
  }),

  initCommon: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('cccCommon', commonRef)
    // bindFirestoreRef('ccc')
  }),

  // add: firestoreAction((context, page) => {
  add: firestoreAction((context, { pageNo, page }) => {
    // console.log('titleName in store/firestore.js: ' + page.titleName)
    cccRef.doc(pageNo).collection(pageNo).add({
      page,
      created: firebase.firestore.FieldValue.serverTimestamp(),
    })
  }),
  addCommon: firestoreAction((context, cCommon) => {
    // console.log('titleName in store/firestore.js: ' + page.titleName)
    commonRef.add({
      cCommon,
      // created: firebase.firestore.FieldValue.serverTimestamp(),
    })
  }),

  // update: firestoreAction((context, { id, page }) => {
  update: firestoreAction((context, { pageNo, id, page }) => {
    // console.log('id in db_update: ' + id)
    // cccRef.doc(id).update({
    cccRef.doc(pageNo).collection(pageNo).doc(id).update({
      page,
    })
  }),

  updateCommon: firestoreAction((context, cCommon) => {
    // console.log('id in updateCommon: ', cCommon)
    // commonRef.doc('common').update({
    commonRef.doc('common').set({
      cCommon,
    })
  }),

  // remove: firestoreAction((context, id) => {
  remove: firestoreAction((context, { pageNo, id }) => {
    // cccRef.doc(id).delete()
    cccRef.doc(pageNo).collection(pageNo).doc(id).delete()
  }),
}

export const getters = {
  getMyPageById: (state) => (id) => {
    // console.log('id -------- in getMyPageById ccc.js: ' + id)
    // 以下は全検索
    // getMyPageById: (state) => {
    // return state.ccc
    return state.ccc.find((key) => key.id === id)
  },

  // getCommonById: (state) => (id) => {
  // 以下は全検索
  // getCommonById: (state) => {
  getCommonById: (state) => (id) => {
    // console.log('myTemp -------- in getCommonById ccc.js: ' + myTemp)
    return state.cccCommon.find((key) => key.id === id)
  },

  // 多分以下の orderdDbPages は使われていない
  orderdDbPages: (state) => {
    // eslint-disable-next-line no-undef
    return _.sortBy(state.ccc, 'created')
  },
  // ユーザが登録した日付で逆順ソート
  orderdMainDate: (state) => {
    // return _.sortBy(state.ccc, 'page.mainDate')
    // eslint-disable-next-line no-undef
    return _.sortBy(state.ccc, 'page.mainDate').reverse()
  },
}
