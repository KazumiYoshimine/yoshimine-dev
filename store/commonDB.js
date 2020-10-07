import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'
import 'firebase/app'
// import 'firebase/firestore' // ここには使用するFirebaseSDKモジュールを記載
import 'firebase/firebase-firestore' // ここには使用するFirebaseSDKモジュールを記載

const db = firebase.firestore()
const dbCommonRef = db.collection('dbCommon')

export const state = () => ({
  dbCommon: [],
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('dbCommon', dbCommonRef)
  }),
  add: firestoreAction((context, { id, myData }) => {
    dbCommonRef.doc(id).set({
      myData,
    })
  }),
  set: firestoreAction((context, { id, myData }) => {
    dbCommonRef.doc(id).set({
      myData,
    })
  }),
  update: firestoreAction((context, { id, myData }) => {
    dbCommonRef.doc(id).set({
      myData,
    })
  }),
  addAccess: firestoreAction((context, mapUrl) => {
    dbCommonRef.add({
      mapUrl,
    })
  }),
  updateAccess: firestoreAction((context, { id, mapUrl }) => {
    dbCommonRef.doc(id).update({
      mapUrl,
    })
  }),

  // remove: firestoreAction((context, id) => {
  //   dbCommonRef.doc(id).delete()
  // })

  // getPageById: firestoreAction((context, id) => {
  // getPageById: firestoreAction(({ bindFirestoreRef }, id) => {
  //   console.log('id in store/firestore.js: ' + id)
  //   return dbCommonRef.doc(id).get()
  // }),
}

export const getters = {
  // filter : [ {配列} ] ← 複数の塊のデータ
  // getCategorys: (state) => (id) => {
  // console.log('id in getCategorys: ' + id)
  // return state.dbCommon.filter((dbCategory) => dbCategory.id === id)
  // },
  // find : {オブジェクト} ←１つの塊のみ
  getCommonById: (state) => (id) => {
    // const temp = state.dbCommon.find((key) => key.id === id)
    // console.log('1111111111: ', temp)

    return state.dbCommon.find((key) => key.id === id)
  },
  getMyAccessById: (state) => (id) => {
    // const temp = state.dbCommon.find((access) => access.id === id)
    // console.log('1111111111: ', temp)

    return state.dbCommon.find((access) => access.id === id)
  },
  // 多分以下の orderdDbPages は使われていない
  // orderdDbPages: (state) => {
  // eslint-disable-next-line no-undef
  // return _.sortBy(state.dbCommon, 'created')
  // }
  // ユーザが登録した日付で逆順ソート
  // orderdMainDate: (state) => {
  //   // eslint-disable-next-line no-undef
  //   return _.sortBy(state.dbCommon, 'page.mainDate').reverse()
  // }
}
