import { firestoreAction } from 'vuexfire'
// import createPersistedState from 'vuex-persistedstate'
import firebase from '~/plugins/firebase'
import 'firebase/app'
// import 'firebase/firestore' // ここには使用するFirebaseSDKモジュールを記載
import 'firebase/firebase-firestore' // ここには使用するFirebaseSDKモジュールを記載

const db = firebase.firestore()
const generalRef = db.collection('general')
// const generalFileRef = db.collection('generalFile')
const defaultRef = db.collection('generalDefault')
const eachPageRef = db.collection('generalEachPage')

export const state = () => ({
  general: [],
  // generalFile: [],
  generalDefault: [],
  generalEachPage: [],
})

// （注意） 以下の ref は呼出し元の _general.vue で サブコレクション を指定
export const actions = {
  init: firestoreAction(({ bindFirestoreRef }, ref) => {
    bindFirestoreRef('general', ref)
  }),

  initEachPage: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('generalEachPage', eachPageRef)
  }),

  // initFile: firestoreAction(({ bindFirestoreRef }, ref) => {
  //   bindFirestoreRef('generalFile', ref)
  // }),

  initDefault: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('generalDefault', defaultRef)
  }),

  // 以下は general コレクション用
  // add: firestoreAction((context, page) => {
  add: firestoreAction(async (context, { templateNo, page }) => {
    let myResult = ''

    await generalRef
      .doc(templateNo)
      .collection(templateNo)
      .add({
        page,
        created: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        myResult = 'regOK'
      })
      // .catch((error) => {
      .catch(() => {
        // alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
        myResult = 'regNG'
      })

    // 結果の戻し
    return myResult
  }),

  update: firestoreAction(async (context, { templateNo, id, page }) => {
    let myResult = ''

    // console.log('id in db_update: ' + id)
    await generalRef
      .doc(templateNo)
      .collection(templateNo)
      .doc(id)
      .update({
        page,
      })
      .then(() => {
        myResult = 'regOK'
      })
      // .catch((error) => {
      .catch(() => {
        // alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
        myResult = 'regNG'
      })

    // 結果の戻し
    return myResult
  }),

  remove: firestoreAction(async (context, { templateNo, id }) => {
    let myResult = ''

    // generalRef.doc(id).delete()
    await generalRef
      .doc(templateNo)
      .collection(templateNo)
      .doc(id)
      .delete()
      .then(() => {
        myResult = 'regOK'
      })
      // .catch((error) => {
      .catch(() => {
        // alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
        myResult = 'regNG'
      })

    // 結果の戻し
    return myResult
  }),

  addDefault: firestoreAction(async (context, items) => {
    let myResult = ''

    // console.log('titleName in store/firestore.js: ' + page.titleName)
    await defaultRef
      .add({
        items,
        // created: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        // console.log('2-2-OK DB登録-OK ------- in updateDefault')
        myResult = 'regOK'
      })
      // .catch((error) => {
      .catch(() => {
        // alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
        // console.log('2-2-NG DB登録-NG ------- in updateDefault: ', error)
        myResult = 'regNG'
      })

    // 結果の戻し
    return myResult
  }),

  // updateDefault: firestoreAction(async (context, items) => {
  setDefault: firestoreAction(async (context, pageInfoInputDefault) => {
    let myResult = ''
    const items = pageInfoInputDefault.items
    const layout = pageInfoInputDefault.layout

    // console.log('setDefault-1 --- items: ', items)
    // console.log('setDefault-2 --- items: ', layout)
    await defaultRef
      .doc('defaults')
      // .update({
      .set({
        items,
        layout,
      })
      .then(() => {
        // console.log('2-2-OK DB登録-OK ------- in updateDefault')
        myResult = 'regOK'
      })
      // .catch((error) => {
      .catch(() => {
        // alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
        // console.log('2-2-NG DB登録-NG ------- in updateDefault: ', error)
        myResult = 'regNG'
      })

    // 結果の戻し
    return myResult
  }),

  // // 以下は generalFile コレクション用
  // addFile: firestoreAction(async (context, { templateNo, fileItem }) => {
  //   let myResult = ''

  //   await generalFileRef
  //     .doc(templateNo)
  //     .collection(templateNo)
  //     .add({
  //       fileItem,
  //       created: firebase.firestore.FieldValue.serverTimestamp(),
  //     })
  //     .then(() => {
  //       // console.log('2-2-OK DB登録-OK ------- in updateDefault')
  //       myResult = 'regOK'
  //     })
  //     // .catch((error) => {
  //     .catch(() => {
  //       // alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
  //       // console.log('2-2-NG DB登録-NG ------- in updateDefault: ', error)
  //       myResult = 'regNG'
  //     })

  //   // 結果の戻し
  //   return myResult
  // }),

  // delFileItem: firestoreAction(async (context, { templateNo, id }) => {
  //   let myResult = ''

  //   await generalFileRef
  //     .doc(templateNo)
  //     .collection(templateNo)
  //     .doc(id)
  //     .delete()
  //     .then(() => {
  //       // console.log('2-2-OK DB登録-OK ------- in updateDefault')
  //       myResult = 'regOK'
  //     })
  //     // .catch((error) => {
  //     .catch(() => {
  //       // alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
  //       // console.log('2-2-NG DB登録-NG ------- in updateDefault: ', error)
  //       myResult = 'regNG'
  //     })

  //   // 結果の戻し
  //   return myResult
  // }),

  // 以下は generalEachPage コレクション用
  addEachPage: firestoreAction(async (context, layout) => {
    let myResult = ''

    await eachPageRef
      .add({
        layout,
        // created: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        // console.log('2-2-OK DB登録-OK ------- in updateDefault')
        myResult = 'regOK'
      })
      // .catch((error) => {
      .catch(() => {
        // alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
        // console.log('2-2-NG DB登録-NG ------- in updateDefault: ', error)
        myResult = 'regNG'
      })

    // 結果の戻し
    return myResult
  }),

  // updateEachPage: firestoreAction(async (context, { templateNo, layout, items }) => {
  updateEachPage: firestoreAction(async (context, { templateNo, pageInfoInput }) => {
    let myResult = ''
    const items = pageInfoInput.items
    const layout = pageInfoInput.layout

    // console.log('templateNo ---- in db_update: ', templateNo)
    // console.log('layout ---- in db_update: ', layout)
    // console.log('items ---- in db_update: ', items)
    await eachPageRef
      .doc(templateNo)
      .set({
        layout,
        items,
      })
      .then(() => {
        // console.log('2-2-OK DB登録-OK ------- in updateDefault')
        myResult = 'regOK'
      })
      // .catch((error) => {
      .catch(() => {
        // alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
        // console.log('2-2-NG DB登録-NG ------- in updateDefault: ', error)
        myResult = 'regNG'
      })

    // 結果の戻し
    return myResult
  }),

  removeEachPage: firestoreAction(async (context, id) => {
    let myResult = ''

    // generalRef.doc(id).delete()
    await eachPageRef
      .doc(id)
      .delete()
      .then(() => {
        // console.log('2-2-OK DB登録-OK ------- in updateDefault')
        myResult = 'regOK'
      })
      // .catch((error) => {
      .catch(() => {
        // alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
        // console.log('2-2-NG DB登録-NG ------- in updateDefault: ', error)
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
    // return state.general
    return state.general.find((key) => key.id === id)
  },

  getEachPageById: (state) => (id) => {
    // console.log('id in getEachPageById: ' + id)
    // return state.general
    return state.generalEachPage.find((key) => key.id === id)
  },

  // getDefaultById: (state) => (id) => {
  // 以下は全検索
  // getDefaultById: (state) => {
  getDefaultById: (state) => (id) => {
    // console.log('myTemp -------- in getDefaultById general.js: ' + myTemp)
    return state.generalDefault.find((key) => key.id === id)
  },

  // 多分以下の orderdDbPages は使われていない
  orderdDbPages: (state) => {
    // eslint-disable-next-line no-undef
    return _.sortBy(state.general, 'created')
  },

  // ユーザが登録した日付で逆順ソート
  orderdMainDate: (state) => {
    // return _.sortBy(state.general, 'page.mainDate')
    // eslint-disable-next-line no-undef
    return _.sortBy(state.general, 'page.mainDate').reverse()
  },

  orderdDbFiles: (state) => {
    // console.log('------- in orderDbFiles')
    // eslint-disable-next-line no-undef
    return _.sortBy(state.generalFile, 'created').reverse()
  },
}
