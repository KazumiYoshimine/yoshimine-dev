import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'
import 'firebase/app'
// import 'firebase/firestore' // ここには使用するFirebaseSDKモジュールを記載
import 'firebase/firebase-firestore' // ここには使用するFirebaseSDKモジュールを記載

const db = firebase.firestore()
const dbLinksRef = db.collection('dbLinks')

export const state = () => ({
  dbLinks: [],
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('dbLinks', dbLinksRef)
  }),
  // add: firestoreAction((context, { titleName, mainText }) => {
  add: firestoreAction((context, page) => {
    // console.log('titleName in store/firestore.js: ' + page.titleName)
    // if (page.titleName.trim()) {
    dbLinksRef.add({
      page,
      created: firebase.firestore.FieldValue.serverTimestamp(),
    })
    // }
  }),
  // update: firestoreAction((context, page) => {
  update: firestoreAction((context, { id, page }) => {
    // console.log('id in db_update: ' + id)
    // console.log('titleName in db_update: ' + page.titleName)
    // console.log('titleName in store/firestore.js: ' + page.titleName)
    // if (page.titleName.trim()) {
    // dbLinksRef.add({
    dbLinksRef.doc(id).update({
      page,
      // created: firebase.firestore.FieldValue.serverTimestamp()
    })
    // }
  }),
  // getPageById: firestoreAction((context, id) => {
  // getPageById: firestoreAction(({ bindFirestoreRef }, id) => {
  //   console.log('id in store/firestore.js: ' + id)
  //   return dbLinksRef.doc(id).get()
  // }),
  remove: firestoreAction((context, id) => {
    dbLinksRef.doc(id).delete()
  }),
  toggle: firestoreAction((context, dbPage) => {
    dbLinksRef.doc(dbPage.id).update({
      done: !dbPage.done,
    })
  }),
}

export const getters = {
  getMyPageById: (state) => (id) => {
    // console.log('id in getMyPageById: ' + id)
    // 以下は全検索
    // getMyPageById: (state) => {
    // return state.dbLinks
    return state.dbLinks.find((dbPage) => dbPage.id === id)
  },
  // 多分以下の orderdDbPages は使われていない
  orderdDbPages: (state) => {
    // eslint-disable-next-line no-undef
    return _.sortBy(state.dbLinks, 'created')
  },
  // ユーザが登録した日付で逆順ソート
  orderdMainDate: (state) => {
    // return _.sortBy(state.dbLinks, 'page.mainDate')
    // eslint-disable-next-line no-undef
    return _.sortBy(state.dbLinks, 'page.mainDate').reverse()
  },
}
