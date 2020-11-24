import { firestoreAction } from 'vuexfire'
// import createPersistedState from 'vuex-persistedstate'
import firebase from '~/plugins/firebase'
import 'firebase/app'
// import 'firebase/firestore' // ここには使用するFirebaseSDKモジュールを記載
import 'firebase/firebase-firestore' // ここには使用するFirebaseSDKモジュールを記載

const db = firebase.firestore()
const cccRef = db.collection('ccc')
const commonRef = db.collection('cccCommon')

export const state = () => ({
  ccc: [],
  cccCommon: [],
})

export const actions = {
  // nuxtClientInit({ commit, state, dispatch }, { req }) {
  //   createPersistedState()(this)
  // },

  init: firestoreAction(({ bindFirestoreRef }, ref) => {
    // bindFirestoreRef('ccc', cccRef)
    bindFirestoreRef('ccc', ref)
  }),

  initCommon: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('cccCommon', commonRef)
    // bindFirestoreRef('ccc')
  }),

  // add: firestoreAction((context, page) => {
  add: firestoreAction(async (context, { pageNo, page }) => {
    let myResult = ''

    // console.log('titleName in store/firestore.js: ' + page.titleName)
    await cccRef
      .doc(pageNo)
      .collection(pageNo)
      .add({
        page,
        created: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        // console.log('2-2-OK DB登録-OK ------- in updateCommon')
        myResult = 'regOK'
      })
      // .catch((error) => {
      .catch(() => {
        // alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
        // console.log('2-2-NG DB登録-NG ------- in updateCommon: ', error)
        myResult = 'regNG'
      })

    // 結果の戻し
    return myResult
  }),
  addCommon: firestoreAction(async (context, cCommon) => {
    let myResult = ''

    // console.log('titleName in store/firestore.js: ' + page.titleName)
    await commonRef
      .add({
        cCommon,
        // created: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        // console.log('2-2-OK DB登録-OK ------- in updateCommon')
        myResult = 'regOK'
      })
      // .catch((error) => {
      .catch(() => {
        // alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
        // console.log('2-2-NG DB登録-NG ------- in updateCommon: ', error)
        myResult = 'regNG'
      })

    // 結果の戻し
    return myResult
  }),

  // update: firestoreAction(async (context, { id, page }) => {
  update: firestoreAction(async (context, { pageNo, id, page }) => {
    let myResult = ''

    // console.log('id in db_update: ' + id)
    // await cccRef.doc(id).update({
    await cccRef
      .doc(pageNo)
      .collection(pageNo)
      .doc(id)
      .update({
        page,
      })
      .then(() => {
        // console.log('2-2-OK DB登録-OK ------- in updateCommon')
        myResult = 'regOK'
      })
      // .catch((error) => {
      .catch(() => {
        // alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
        // console.log('2-2-NG DB登録-NG ------- in updateCommon: ', error)
        myResult = 'regNG'
      })

    // 結果の戻し
    return myResult
  }),

  updateCommon: firestoreAction(async (context, cCommon) => {
    let myResult = ''

    // console.log('id in updateCommon: ', cCommon)
    // await commonRef.doc('common').update({
    await commonRef
      .doc('common')
      .set({
        cCommon,
      })
      .then(() => {
        // console.log('2-2-OK DB登録-OK ------- in updateCommon')
        myResult = 'regOK'
      })
      // .catch((error) => {
      .catch(() => {
        // alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
        // console.log('2-2-NG DB登録-NG ------- in updateCommon: ', error)
        myResult = 'regNG'
      })

    // 結果の戻し
    return myResult
  }),

  // remove: firestoreAction(async (context, id) => {
  remove: firestoreAction(async (context, { pageNo, id }) => {
    let myResult = ''

    // await cccRef.doc(id).delete()
    await cccRef
      .doc(pageNo)
      .collection(pageNo)
      .doc(id)
      .delete()
      .then(() => {
        // console.log('2-2-OK DB登録-OK ------- in updateCommon')
        myResult = 'regOK'
      })
      // .catch((error) => {
      .catch(() => {
        // alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
        // console.log('2-2-NG DB登録-NG ------- in updateCommon: ', error)
        myResult = 'regNG'
      })

    // 結果の戻し
    return myResult
  }),
}

export const getters = {
  getMyPageById: (state) => (id) => {
    // console.log('id -------- in getMyPageById ccc.js: ' + id)
    // 以下は全検索
    // getMyPageById: (state) => {
    // return state.ccc
    return state.ccc.find((key) => key.id === id)
  },

  // getCommonById: (state) => (id) => {
  // 以下は全検索
  // getCommonById: (state) => {
  getCommonById: (state) => (id) => {
    // console.log('myTemp -------- in getCommonById ccc.js: ' + myTemp)
    return state.cccCommon.find((key) => key.id === id)
  },

  // 多分以下の orderdDbPages は使われていない
  orderdDbPages: (state) => {
    // eslint-disable-next-line no-undef
    return _.sortBy(state.ccc, 'created')
  },
  // ユーザが登録した日付で逆順ソート
  orderdMainDate: (state) => {
    // return _.sortBy(state.ccc, 'page.mainDate')
    // eslint-disable-next-line no-undef
    return _.sortBy(state.ccc, 'page.mainDate').reverse()
  },
}
