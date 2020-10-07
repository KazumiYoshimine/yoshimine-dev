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
  update: firestoreAction((context, myData) => {
    // console.log('1-myData.id in store/storeheader.js: ' + myData.id)
    if (myData.id) {
      dbHeadersRef.doc(myData.id).update({
        // console.log('2-myData.id in store/storeheader.js: ' + myData.id)
        myData,
        // created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  }),
  // mInterval の更新
  updateInterval: firestoreAction((context, { id, mInterval }) => {
    if (id) {
      // console.log('1 id in store/storeheader.js: ' + id)
      // console.log('2 mInterval in store/storeheader.js: ' + mInterval)
      // mInterval = '2000'

      dbHeadersRef.doc(id).update({
        // myDataRef.doc(id).update({
        mInterval,
        // mInterval: myData.mInterval
      })
    }
  }),
  set: firestoreAction((context, myData) => {
    if (dbHeadersRef.id) {
      // console.log('1-myData.id in store/storeheader.js: ' + dbHeadersRef.id)
      // dbHeadersRef.set({
      dbHeadersRef.doc(myData.id).update({
        // console.log('2-myData.id in store/storeheader.js: ' + myData.id)
        myData,
        // created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
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
    // console.log('------------------ ccccc: ' + state.dbHeaders[0].myDataNo)
    // eslint-disable-next-line no-undef
    // return _.sortBy(state.dbHeaders, 'myData.id')
    // eslint-disable-next-line no-undef
    return _.sortBy(state.dbHeaders, 'myDataNo')
  },

  // Home カルーセルのパラパラ間隔 interval の取得
  getDbHeadersInterval: (state) => {
    // console.log('------------------ ccccc: ' + state.dbHeaders.myData.mHome1)
    // console.log('1 ------------------ : ' + state.dbHeaders[0].myDataNo)
    // console.log('2 ------------------ : ' + state.dbHeaders[0].mInterval)
    // eslint-disable-next-line no-undef
    // return _.sortBy(state.dbHeaders, 'myData.id')
    // eslint-disable-next-line no-undef
    return state.dbHeaders[0].mInterval
  },
}
