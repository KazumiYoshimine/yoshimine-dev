import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'
import 'firebase/app'
// import 'firebase/firestore' // ここには使用するFirebaseSDKモジュールを記載
import 'firebase/firebase-firestore' // ここには使用するFirebaseSDKモジュールを記載

const db = firebase.firestore()
const dbManRef = db.collection('dbMan')

export const state = () => ({
  dbMan: [],
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('dbMan', dbManRef)
  }),
  add: firestoreAction((context, { id, myData }) => {
    dbManRef.doc(id).set({
      myData,
    })
  }),
  set: firestoreAction((context, { id, myData }) => {
    dbManRef.doc(id).set({
      myData,
    })
  }),
  update: firestoreAction((context, { id, myData }) => {
    dbManRef.doc(id).set({
      myData,
    })
  }),
  addAccess: firestoreAction((context, mapUrl) => {
    dbManRef.add({
      mapUrl,
    })
  }),
  updateAccess: firestoreAction((context, { id, mapUrl }) => {
    dbManRef.doc(id).update({
      mapUrl,
    })
  }),

  // remove: firestoreAction((context, id) => {
  //   dbManRef.doc(id).delete()
  // })

  // getPageById: firestoreAction((context, id) => {
  // getPageById: firestoreAction(({ bindFirestoreRef }, id) => {
  //   console.log('id in store/firestore.js: ' + id)
  //   return dbManRef.doc(id).get()
  // }),
}

export const getters = {
  // filter : [ {配列} ] ← 複数の塊のデータ
  // getCategorys: (state) => (id) => {
  // console.log('id in getCategorys: ' + id)
  // return state.dbMan.filter((dbCategory) => dbCategory.id === id)
  // },
  // find : {オブジェクト} ←１つの塊のみ
  getManById: (state) => (id) => {
    // const temp = state.dbMan.find((key) => key.id === id)
    // console.log('1111111111: ', temp)

    return state.dbMan.find((key) => key.id === id)
  },
  getMyAccessById: (state) => (id) => {
    // const temp = state.dbMan.find((access) => access.id === id)
    // console.log('1111111111: ', temp)

    return state.dbMan.find((access) => access.id === id)
  },
  // 多分以下の orderdDbPages は使われていない
  // orderdDbPages: (state) => {
  // eslint-disable-next-line no-undef
  // return _.sortBy(state.dbMan, 'created')
  // }
  // ユーザが登録した日付で逆順ソート
  // orderdMainDate: (state) => {
  //   // eslint-disable-next-line no-undef
  //   return _.sortBy(state.dbMan, 'page.mainDate').reverse()
  // }
}
