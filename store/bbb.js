import { firestoreAction } from 'vuexfire'
// import createPersistedState from 'vuex-persistedstate'
import firebase from '~/plugins/firebase'
import 'firebase/app'
// import 'firebase/firestore' // ここには使用するFirebaseSDKモジュールを記載
import 'firebase/firebase-firestore' // ここには使用するFirebaseSDKモジュールを記載

const db = firebase.firestore()
const bbbRef = db.collection('bbb')
const bbbFileRef = db.collection('bbbFile')
const commonRef = db.collection('bbbCommon')
const eachPageRef = db.collection('bbbEachPage')

export const state = () => ({
  bbb: [],
  bbbFile: [],
  bbbCommon: [],
  bbbEachPage: [],
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }, ref) => {
    bindFirestoreRef('bbb', ref)
  }),

  initEachPage: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('bbbEachPage', eachPageRef)
  }),

  initFile: firestoreAction(({ bindFirestoreRef }, ref) => {
    bindFirestoreRef('bbbFile', ref)
  }),

  initCommon: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('bbbCommon', commonRef)
  }),

  // 以下は bbb コレクション用
  // add: firestoreAction((context, page) => {
  add: firestoreAction(async (context, { pageNo, page }) => {
    let myResult = ''

    await bbbRef
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

  update: firestoreAction(async (context, { pageNo, id, page }) => {
    let myResult = ''

    // console.log('id in db_update: ' + id)
    await bbbRef
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

  remove: firestoreAction(async (context, { pageNo, id }) => {
    let myResult = ''

    // bbbRef.doc(id).delete()
    await bbbRef
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

  updateCommon: firestoreAction(async (context, cCommon) => {
    let myResult = ''

    // console.log('id in updateCommon: ', cCommon)
    await commonRef
      .doc('common')
      .update({
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

  // 以下は bbbFile コレクション用
  addFile: firestoreAction(async (context, { pageNo, fileItem }) => {
    let myResult = ''

    await bbbFileRef
      .doc(pageNo)
      .collection(pageNo)
      .add({
        fileItem,
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

  delFileItem: firestoreAction(async (context, { pageNo, id }) => {
    let myResult = ''

    await bbbFileRef
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

  // 以下は bbbEachPage コレクション用
  addEachPage: firestoreAction(async (context, layout) => {
    let myResult = ''

    await eachPageRef
      .add({
        layout,
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

  updateEachPage: firestoreAction(async (context, { pageNo, layout }) => {
    let myResult = ''

    // console.log('pageNo ---- in db_update: ', pageNo)
    // console.log('layout ---- in db_update: ', layout)
    await eachPageRef
      .doc(pageNo)
      .update({
        layout,
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

  removeEachPage: firestoreAction(async (context, id) => {
    let myResult = ''

    // bbbRef.doc(id).delete()
    await eachPageRef
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

// 以下はデータ取得
export const getters = {
  getMyPageById: (state) => (id) => {
    // console.log('id in getMyPageById: ' + id)
    // return state.bbb
    return state.bbb.find((key) => key.id === id)
  },

  getEachPageById: (state) => (id) => {
    // console.log('id in getEachPageById: ' + id)
    // return state.bbb
    return state.bbbEachPage.find((key) => key.id === id)
  },

  // getCommonById: (state) => (id) => {
  // 以下は全検索
  // getCommonById: (state) => {
  getCommonById: (state) => (id) => {
    // console.log('myTemp -------- in getCommonById bbb.js: ' + myTemp)
    return state.bbbCommon.find((key) => key.id === id)
  },

  // 多分以下の orderdDbPages は使われていない
  orderdDbPages: (state) => {
    // eslint-disable-next-line no-undef
    return _.sortBy(state.bbb, 'created')
  },

  // ユーザが登録した日付で逆順ソート
  orderdMainDate: (state) => {
    // return _.sortBy(state.bbb, 'page.mainDate')
    // eslint-disable-next-line no-undef
    return _.sortBy(state.bbb, 'page.mainDate').reverse()
  },

  orderdDbFiles: (state) => {
    // console.log('------- in orderDbFiles')
    // eslint-disable-next-line no-undef
    return _.sortBy(state.bbbFile, 'created').reverse()
  },
}
