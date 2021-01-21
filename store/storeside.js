import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'
import 'firebase/app'
// import 'firebase/firestore' // ここには使用するFirebaseSDKモジュールを記載
import 'firebase/firebase-firestore' // ここには使用するFirebaseSDKモジュールを記載

const db = firebase.firestore()
const dbSidesRef = db.collection('dbSides')
const dbSideMenusRef = db.collection('dbSideMenus')
// const myDataRef = dbSidesRef.child('myData')

export const state = () => ({
  dbSides: [],
  dbSideMenus: [],
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('dbSides', dbSidesRef)
    bindFirestoreRef('dbSideMenus', dbSideMenusRef)
  }),

  add: firestoreAction((context, { id, page }) => {
    dbSidesRef.doc(id).add({
      page,
      // created: firebase.firestore.FieldValue.serverTimestamp()
    })
  }),

  set: firestoreAction((context, { id, page }) => {
    // console.log('1-myData.id in store/storeside.js: ' + dbSidesRef.id)
    dbSidesRef.doc(id).set({
      // console.log('2-myData.id in store/storeside.js: ' + myData.id)
      page,
      // created: firebase.firestore.FieldValue.serverTimestamp()
    })
  }),

  update: firestoreAction((context, { id, page }) => {
    // console.log('0-myData.v1 in store/storeside.js: ' + myData.v1)
    dbSidesRef.doc(id).update({
      // console.log('2-myData.id in store/storeside.js: ' + myData.id)
      page,
      // created: firebase.firestore.FieldValue.serverTimestamp()
    })
  }),

  remove: firestoreAction((context, id) => {
    dbSidesRef.doc(id).delete()
  }),

  // 以下は dbSideMenusRef 用
  addMenu: firestoreAction(async (context, { myMenu }) => {
    // console.log('storemenu.js- addMenu-1 --- myMenu: ', myMenu)
    let myResult = ''
    await dbSideMenusRef
      .add({
        myMenu,
        // created: firebase.firestore.FieldValue.serverTimestamp()
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

  updateMenu: firestoreAction(async (context, { id, myMenu }) => {
    let myResult = ''
    await dbSideMenusRef
      .doc(id)
      .update({
        myMenu,
        // created: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        // console.log('2-2-OK DB登録-OK ------- in updateCommon')
        myResult = 'regOK'
      })
      .catch(() => {
        // alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
        // console.log('2-2-NG DB登録-NG ------- in updateCommon: ', error)
        myResult = 'regNG'
      })

    // 結果の戻し
    return myResult
  }),

  setMenu: firestoreAction(async (context, { id, myGroup }) => {
    let myResult = ''
    await dbSideMenusRef
      .doc(id)
      .set({
        myGroup,
        // created: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        myResult = 'regOK'
      })
      .catch(() => {
        // alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
        // console.log('2-2-NG DB登録-NG ------- in updateCommon: ', error)
        myResult = 'regNG'
      })

    // 結果の戻し
    return myResult
  }),

  deleteMenu: firestoreAction(async (context, id) => {
    let myResult = ''
    await dbSideMenusRef
      .doc(id)
      .delete()
      .then(() => {
        myResult = 'regOK'
      })
      .catch(() => {
        // alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
        myResult = 'regNG'
      })

    // 結果の戻し
    return myResult
  }),

  // 以下は Page Data 用
  addMenuPage: firestoreAction(async (context, { id, myPage }) => {
    let myResult = ''
    await dbSideMenusRef
      .doc(id)
      .collection('myPage')
      .add({
        myPage,
      })
      .then(() => {
        myResult = 'regOK'
      })
      .catch(() => {
        // alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
        myResult = 'regNG'
      })

    // 結果の戻し
    return myResult
  }),
}

// データの取得は getters で行うこと。
// (参考) データ取得 以外の追加・更新・削除は、上記の actions で行うこと。
export const getters = {
  // orderdDbSides: (state) => {
  //   // eslint-disable-next-line no-undef
  //   return _.sortBy(state.dbSides, 'myData.myDataNo')
  // },
  // getSideByDataNo: (state) => (dataNo) => {
  //   return state.dbSides.find((dbData) => dbData.id === 'r3hqtN35p5jgABNTOgAR')
  // },
  getSideById: (state) => (id) => {
    // const temp = state.dbSides.find((key) => key.id === id)
    // console.log('getSideById-1 --- getData: ', temp)
    return state.dbSides.find((key) => key.id === id)
  },

  getSideMenus: (state) => {
    // return state.dbMenus

    // eslint-disable-next-line no-undef
    // const temp = _.sortBy(state.dbSideMenus, 'myMenu.myGroup.sortNo')
    // console.log('==== storemenu.js - getGroups : ', temp)
    // return temp

    // eslint-disable-next-line no-undef
    return _.sortBy(state.dbSideMenus, 'myMenu.myGroup.sortNo')
  },
}
