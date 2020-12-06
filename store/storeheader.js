import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'
import 'firebase/app'
// import 'firebase/firestore' // ここには使用するFirebaseSDKモジュールを記載
import 'firebase/firebase-firestore' // ここには使用するFirebaseSDKモジュールを記載

const db = firebase.firestore()
const dbHeadersRef = db.collection('dbHeaders')
// const myMenuRef = dbHeadersRef.child('myMenu')

export const state = () => ({
  dbHeaders: [],
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('dbHeaders', dbHeadersRef)
  }),
  // add: firestoreAction((context, { titleName, mainText }) => {
  // add: firestoreAction((context, myMenu) => {
  add: firestoreAction((context, { id, myMenu }) => {
    // if (myMenu.mHome1.trim()) {
    // console.log('myMenu in store/storeheader.js: ' + myMenu.mHome1)
    dbHeadersRef.doc(id).add({
      myMenu,
      // myMenuNo: '1',
      // created: firebase.firestore.FieldValue.serverTimestamp()
    })
    // }
  }),

  // update: firestoreAction((context, myMenu) => {
  update: firestoreAction((context, { id, myMenu }) => {
    // console.log('1-myMenu.id in store/storeheader.js: ' + myMenu.id)
    if (id) {
      dbHeadersRef.doc(id).update({
        // console.log('2-myMenu.id in store/storeheader.js: ' + myMenu.id)
        myMenu,
        // created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  }),

  set: firestoreAction((context, { id, myMenu }) => {
    // set: firestoreAction((context, myMenu) => {
    if (id) {
      // console.log('1-myMenu.id in store/storeheader.js: ' + dbHeadersRef.id)
      // dbHeadersRef.set({
      dbHeadersRef.doc(id).set({
        // console.log('2-myMenu.id in store/storeheader.js: ' + myMenu.id)
        myMenu,
        // created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  }),

  remove: firestoreAction((context, id) => {
    dbHeadersRef.doc(id).delete()
  }),

  toggle: firestoreAction((context, myMenu) => {
    dbHeadersRef.doc(myMenu.id).update({
      done: !myMenu.done,
    })
  }),
}

// データの取得は getters で行うこと。
// (参考) データ取得 以外の追加・更新・削除は、上記の actions で行うこと。
export const getters = {
  orderdDbHeaders: (state) => {
    // console.log('------------------ ccccc: ' + state.dbHeaders.myMenu.mHome1)
    // console.log('------------------ ccccc: ' + state.dbHeaders[0].myMenuNo)
    // eslint-disable-next-line no-undef
    // return _.sortBy(state.dbHeaders, 'myMenu.id')
    // eslint-disable-next-line no-undef
    return _.sortBy(state.dbHeaders, 'myMenuNo')
  },

  getDbHeadersById: (state) => (id) => {
    // console.log('getDbHeadersById-1 --- id: ', id)
    // const temp = state.dbHeaders.find((key) => key.id === id)
    // console.log('getDbHeadersById-2 --- menus: ', temp)
    return state.dbHeaders.find((key) => key.id === id)
  },

  // Home カルーセルのパラパラ間隔 interval の取得   ←storehome.js へ移動
  // getDbHeadersInterval: (state) => {
  //   return state.dbHeaders[0].mInterval
  // },
}
