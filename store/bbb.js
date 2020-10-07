import { firestoreAction } from 'vuexfire'
// import createPersistedState from 'vuex-persistedstate'
import firebase from '~/plugins/firebase'
import 'firebase/app'
// import 'firebase/firestore' // ここには使用するFirebaseSDKモジュールを記載
import 'firebase/firebase-firestore' // ここには使用するFirebaseSDKモジュールを記載

const db = firebase.firestore()
const bbbRef = db.collection('bbb')
const bbbFileRef = db.collection('bbbFile')

export const state = () => ({
  bbb: [],
  bbbFile: [],
})

export const actions = {
  // init: firestoreAction(({ bindFirestoreRef }) => {
  init: firestoreAction(({ bindFirestoreRef }, ref) => {
    bindFirestoreRef('bbb', ref)
  }),

  initFile: firestoreAction(({ bindFirestoreRef }, ref) => {
    bindFirestoreRef('bbbFile', ref)
  }),

  // 以下は bbb コレクション用
  // add: firestoreAction((context, page) => {
  add: firestoreAction((context, { pageNo, page }) => {
    // console.log('titleName in store/firestore.js: ' + page.titleName)
    bbbRef.doc(pageNo).collection(pageNo).add({
      page,
      created: firebase.firestore.FieldValue.serverTimestamp(),
    })
  }),
  // update: firestoreAction((context, { id, page }) => {
  update: firestoreAction((context, { pageNo, id, page }) => {
    // console.log('id in db_update: ' + id)
    bbbRef.doc(pageNo).collection(pageNo).doc(id).update({
      page,
    })
  }),
  // remove: firestoreAction((context, id) => {
  remove: firestoreAction((context, { pageNo, id }) => {
    // bbbRef.doc(id).delete()
    bbbRef.doc(pageNo).collection(pageNo).doc(id).delete()
  }),

  // 以下は bbbFile コレクション用
  // addFile: firestoreAction((context, fileItem) => {
  addFile: firestoreAction((context, { pageNo, fileItem }) => {
    // console.log('name --- in bbbDB: ', fileItem.name)
    bbbFileRef.doc(pageNo).collection(pageNo).add({
      fileItem,
      created: firebase.firestore.FieldValue.serverTimestamp(),
    })
  }),
  // delFileItem: firestoreAction((context, id) => {
  delFileItem: firestoreAction((context, { pageNo, id }) => {
    bbbFileRef.doc(pageNo).collection(pageNo).doc(id).delete()
  }),
}

export const getters = {
  getMyPageById: (state) => (id) => {
    // console.log('id in getMyPageById: ' + id)
    // 以下は全検索
    // getMyPageById: (state) => {
    // return state.bbb
    return state.bbb.find((dbPage) => dbPage.id === id)
  },
  // 多分以下の orderdDbPages は使われていない
  orderdDbPages: (state) => {
    // eslint-disable-next-line no-undef
    return _.sortBy(state.bbb, 'created')
  },
  // ユーザが登録した日付で逆順ソート
  orderdMainDate: (state) => {
    // return _.sortBy(state.bbb, 'page.mainDate')
    // eslint-disable-next-line no-undef
    return _.sortBy(state.bbb, 'page.mainDate').reverse()
  },
  orderdDbFiles: (state) => {
    // console.log('------- in orderDbFiles')
    // eslint-disable-next-line no-undef
    return _.sortBy(state.bbbFile, 'created').reverse()
  },
}
