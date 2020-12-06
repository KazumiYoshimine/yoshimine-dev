import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'
import 'firebase/app'
// import 'firebase/firestore' // ここには使用するFirebaseSDKモジュールを記載
import 'firebase/firebase-firestore' // ここには使用するFirebaseSDKモジュールを記載

const db = firebase.firestore()
const dbSidesRef = db.collection('dbSides')
// const myDataRef = dbSidesRef.child('myData')

export const state = () => ({
  dbSides: [],
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('dbSides', dbSidesRef)
  }),

  add: firestoreAction((context, { id, mySide }) => {
    // if (myData.mHome1.trim()) {
    // console.log('myData in store/storeside.js: ' + myData.mHome1)
    dbSidesRef.doc(id).add({
      mySide,
      // myDataNo: '1',
      // created: firebase.firestore.FieldValue.serverTimestamp()
    })
    // }
  }),

  set: firestoreAction((context, { id, mySide }) => {
    // console.log('1-myData.id in store/storeside.js: ' + dbSidesRef.id)
    dbSidesRef.doc(id).set({
      // console.log('2-myData.id in store/storeside.js: ' + myData.id)
      mySide,
      // created: firebase.firestore.FieldValue.serverTimestamp()
    })
  }),

  update: firestoreAction((context, { id, mySide }) => {
    // console.log('0-myData.v1 in store/storeside.js: ' + myData.v1)
    dbSidesRef.doc(id).update({
      // console.log('2-myData.id in store/storeside.js: ' + myData.id)
      mySide,
      // created: firebase.firestore.FieldValue.serverTimestamp()
    })
  }),

  // mInterval の更新
  updateInterval: firestoreAction((context, { id, mInterval }) => {
    if (id) {
      // console.log('1 id in store/storeside.js: ' + id)
      // console.log('2 mInterval in store/storeside.js: ' + mInterval)
      // mInterval = '2000'

      dbSidesRef.doc(id).update({
        // myDataRef.doc(id).update({
        mInterval,
        // mInterval: myData.mInterval
      })
    }
  }),

  remove: firestoreAction((context, id) => {
    dbSidesRef.doc(id).delete()
  }),

  toggle: firestoreAction((context, { id, mySide }) => {
    dbSidesRef.doc(id).update({
      done: !mySide.done,
    })
  }),
}

// データの取得は getters で行うこと。
// (参考) データ取得 以外の追加・更新・削除は、上記の actions で行うこと。
export const getters = {
  orderdDbSides: (state) => {
    // eslint-disable-next-line no-undef
    return _.sortBy(state.dbSides, 'myData.myDataNo')
  },
  // getSideByDataNo: (state) => (dataNo) => {
  //   return state.dbSides.find((dbData) => dbData.id === 'r3hqtN35p5jgABNTOgAR')
  // },
  getSideById: (state) => (id) => {
    // const temp = state.dbSides.find((myData) => myData.id === id)
    // console.log('getSideById-1 --- getData: ', temp)
    return state.dbSides.find((key) => key.id === id)
  },
}
