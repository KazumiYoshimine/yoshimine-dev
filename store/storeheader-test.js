import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'
import 'firebase/app'
// import 'firebase/firestore' // ここには使用するFirebaseSDKモジュールを記載
import 'firebase/firebase-firestore' // ここには使用するFirebaseSDKモジュールを記載

const db = firebase.firestore()
const dbHeadersRef = db.collection('dbHeaders')
// const myDataRef = dbHeadersRef.child('myData')

export const state = () => ({
  dbHeaders: [],
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('dbHeaders', dbHeadersRef)
  }),
  // add: firestoreAction((context, { titleName, mainText }) => {
  add: firestoreAction((context, myData) => {
    // if (myData.mHome1.trim()) {
    // console.log('myData in store/storeheader.js: ' + myData.mHome1)
    dbHeadersRef.add({
      myData,
      myDataNo: '1',
      // created: firebase.firestore.FieldValue.serverTimestamp()
    })
    // }
  }),
  // update: firestoreAction((context, { id, myData }) => {
  update: firestoreAction((context, { id, menuData }) => {
    // console.log('1-myData.id in store/storeheader.js: ' + myData.id)
    if (id) {
      dbHeadersRef.doc(id).update({
        // console.log('2-myData.id in store/storeheader.js: ' + myData.id)
        menuData,
        // created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  }),
  // mInterval の更新
  // updateInterval: firestoreAction((context, { id, mInterval }) => {
  //   console.log('1 id in store/storeheader.js: ' + id)
  //   if (id) {
  //     console.log('2 mInterval in store/storeheader.js: ' + mInterval)

  //     dbHeadersRef.doc(id).update({
  //       mInterval,
  //     })
  //   }
  // }),

  set: firestoreAction((context, { id, menuData }) => {
    // console.log('storeheader-1 --- id ---: ', id)
    // if (dbHeadersRef.id) {
    // console.log('1-myData.id in store/storeheader.js: ' + dbHeadersRef.id)
    // dbHeadersRef.set({
    dbHeadersRef.doc(id).set({
      // console.log('2-myData.id in store/storeheader.js: ' + myData.id)
      menuData,
      // created: firebase.firestore.FieldValue.serverTimestamp()
    })
    // }
  }),
  remove: firestoreAction((context, id) => {
    dbHeadersRef.doc(id).delete()
  }),
  toggle: firestoreAction((context, myData) => {
    dbHeadersRef.doc(myData.id).update({
      done: !myData.done,
    })
  }),
}

// データの取得は getters で行うこと。
// (参考) データ取得 以外の追加・更新・削除は、上記の actions で行うこと。
export const getters = {
  orderdDbHeaders: (state) => {
    // console.log('------------------ ccccc: ' + state.dbHeaders.myData.mHome1)
    // eslint-disable-next-line no-undef
    return _.sortBy(state.dbHeaders, 'myDataNo')
  },

  getDbHeadersById: (state) => (id) => {
    // console.log('getDbHeadersById-1 --- id: ', id)
    // const temp = state.dbHeaders.find((key) => key.id === id)
    // console.log('getDbHeadersById-2 --- menus: ', temp)
    return state.dbHeaders.find((key) => key.id === id)
  },
}
