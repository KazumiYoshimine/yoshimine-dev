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
  // add: firestoreAction((context, { titleName, mainText }) => {
  add: firestoreAction((context, myData) => {
    // if (myData.mHome1.trim()) {
    // console.log('myData in store/storeside.js: ' + myData.mHome1)
    dbSidesRef.add({
      myData,
      myDataNo: '1',
      // created: firebase.firestore.FieldValue.serverTimestamp()
    })
    // }
  }),
  update: firestoreAction((context, myData) => {
    // console.log('0-myData.id in store/storeside.js: ' + myData.id)
    // console.log('0-myData.v1 in store/storeside.js: ' + myData.v1)
    if (myData.id) {
      // console.log('1-myData.id in store/storeside.js: ' + myData.id)
      // dbSidesRef.set({
      dbSidesRef.doc(myData.id).update({
        // console.log('2-myData.id in store/storeside.js: ' + myData.id)
        myData,
        // created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
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
  set: firestoreAction((context, myData) => {
    if (dbSidesRef.id) {
      // console.log('1-myData.id in store/storeside.js: ' + dbSidesRef.id)
      // dbSidesRef.set({
      dbSidesRef.doc(myData.id).update({
        // console.log('2-myData.id in store/storeside.js: ' + myData.id)
        myData,
        // created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  }),
  remove: firestoreAction((context, id) => {
    dbSidesRef.doc(id).delete()
  }),
  toggle: firestoreAction((context, myData) => {
    dbSidesRef.doc(myData.id).update({
      done: !myData.done,
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
  getSideByDataNo: (state) => (dataNo) => {
    return state.dbSides.find((dbData) => dbData.id === 'r3hqtN35p5jgABNTOgAR')
  },
  getSideById: (state) => (id) => {
    // const temp = state.dbSides.find((myData) => myData.id === id)
    // console.log('1111111111: ', temp)

    return state.dbSides.find((myData) => myData.id === id)
  },
}
