import { firestoreAction } from 'vuexfire'
// import createPersistedState from 'vuex-persistedstate'
import firebase from '~/plugins/firebase'
import 'firebase/app'
// import 'firebase/firestore' // ここには使用するFirebaseSDKモジュールを記載
import 'firebase/firebase-firestore' // ここには使用するFirebaseSDKモジュールを記載

const db = firebase.firestore()
const dddRef = db.collection('ddd')

export const state = () => ({
  ddd: [],
})

export const actions = {
  // nuxtClientInit({ commit, state, dispatch }, { req }) {
  //   createPersistedState()(this)
  // },
  // init: firestoreAction(({ bindFirestoreRef }) => {
  init: firestoreAction(({ bindFirestoreRef }, ref) => {
    // bindFirestoreRef('ddd', dddRef)
    bindFirestoreRef('ddd', ref)
  }),
  // add: firestoreAction((context, page) => {
  add: firestoreAction((context, { pageNo, page }) => {
    // console.log('titleName in store/ddd.js: ' + page.titleName)
    dddRef.doc(pageNo).collection(pageNo).add({
      page,
      created: firebase.firestore.FieldValue.serverTimestamp(),
    })
  }),
  // update: firestoreAction((context, page) => {
  update: firestoreAction((context, { pageNo, id, page }) => {
    // console.log('id in db_update: ' + id)
    // dddRef.doc(pageNo)
    dddRef.doc(pageNo).collection(pageNo).doc(id).update({
      page,
    })
  }),
  // remove: firestoreAction((context, id) => {
  remove: firestoreAction((context, { pageNo, id }) => {
    // dddRef.doc(id).delete()
    dddRef.doc(pageNo).collection(pageNo).doc(id).delete()
  }),
  // getPageByPages: firestoreAction((context, pageNo) => {
  //   // console.log('pages ---------- in ddd.js: ' + pages)
  //   return dddRef
  //     .doc(pageNo)
  //     .collection(pageNo)
  //     .get()
  // }),
  toggle: firestoreAction((context, dbPage) => {
    dddRef.doc(dbPage.id).update({
      done: !dbPage.done,
    })
  }),
}

export const getters = {
  getMyPageById: (state) => (id) => {
    // console.log('id in getMyPageById: ' + id)
    // 以下は全検索
    // getMyPageById: (state) => {
    // return state.ddd
    return state.ddd.find((dbPage) => dbPage.id === id)
  },
  // 多分以下の orderdddPages は使われていない
  orderdDdPages: (state) => {
    // eslint-disable-next-line no-undef
    return _.sortBy(state.ddd, 'created')
  },
  // ユーザが登録した日付で逆順ソート
  orderdMainDate: (state) => {
    // return _.sortBy(state.ddd, 'page.mainDate')
    // eslint-disable-next-line no-undef
    return _.sortBy(state.ddd, 'page.mainDate').reverse()
    // const tempData = _.sortBy(state.ddd, 'page.mainDate').reverse()
    // console.log('tempData ----- in ddd: ', tempData)
    // return tempData
  },
}
