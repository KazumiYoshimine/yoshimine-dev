/* eslint-disable no-const-assign */
import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'
import 'firebase/app'
import 'firebase/firebase-firestore' // ここには使用するFirebaseSDKモジュールを記載

const db = firebase.firestore()

// dbHomes はトピックス用DB
const dbHomesRef = db.collection('dbHomes')
const dbCarouselsRef = db.collection('dbHomesCarousel')
const commonRef = db.collection('dbHomesCommon')
// const dbResult = ''

export const state = () => ({
  dbHomes: [],
  dbHomesCarousel: [],
  dbHomesCommon: [],
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    // ＊＊＊＊＊＊ dbHomes, dbHomesCarousel の名前は他の箇所と合わせること。
    bindFirestoreRef('dbHomes', dbHomesRef)
    bindFirestoreRef('dbHomesCarousel', dbCarouselsRef)
    bindFirestoreRef('dbHomesCommon', commonRef)
  }),

  addCarousel: firestoreAction(async (context, carousel) => {
    let myResult = ''

    await dbCarouselsRef
      .add({
        carousel,
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

  // add: firestoreAction((context, { titleName, mainText }) => {
  add: firestoreAction(async (context, home) => {
    let myResult = ''

    await dbHomesRef
      .add({
        home,
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

  addCommon: firestoreAction(async (context, homeCommon) => {
    let myResult = ''

    await commonRef
      .add({
        homeCommon,
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

  update: firestoreAction(async (context, { id, home }) => {
    let myResult = ''

    if (id) {
      await dbHomesRef
        .doc(id)
        .update({
          home,
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
    }
  }),

  updateCommon: firestoreAction(async (context, homeCommon) => {
    let myResult = ''

    await commonRef
      .doc('common')
      .update({
        homeCommon,
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

  // mInterval の更新
  updateInterval: firestoreAction(async (context, mInterval) => {
    let myResult = ''

    await commonRef
      .doc('common')
      .update({
        mInterval,
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

  set: firestoreAction(async (context, home) => {
    let myResult = ''

    if (dbHomesRef.id) {
      await dbHomesRef
        .doc(home.id)
        .update({
          home,
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
    }
  }),

  removeCarousel: firestoreAction(async (context, id) => {
    let myResult = ''

    await dbCarouselsRef
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

  remove: firestoreAction(async (context, id) => {
    let myResult = ''

    await dbHomesRef
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

  toggle: firestoreAction(async (context, myDb) => {
    let myResult = ''

    await dbHomesRef
      .doc(myDb.id)
      .update({
        done: !myDb.done,
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
}

// データの取得は getters で行うこと。
// (参考) データ取得 以外の追加・更新・削除は、上記の actions で行うこと。
export const getters = {
  getMyPageById: (state) => (id) => {
    // console.log('id in getMyPageById: ' + id)
    // 以下は全検索
    // getMyPageById: (state) => {
    // return state.dbOshirases
    return state.dbHomes.find((home) => home.id === id)
  },

  getCommonById: (state) => (id) => {
    // console.log('myTemp -------- in getCommonById ccc.js: ' + myTemp)
    return state.dbHomesCommon.find((key) => key.id === id)
  },

  // Home コンポーネント情報の取得
  orderdDbHomes: (state) => {
    // eslint-disable-next-line no-undef
    // return _.sortBy(state.dbHomes, 'myDb.id')
    // eslint-disable-next-line no-undef
    return _.sortBy(state.dbHomes, 'home.sortNo').reverse()
    // return _.sortBy(state.dbHomes, 'home.mainDate').reverse()
  },

  orderdDbCarousels: (state) => {
    // console.log('------------------ : ' + state.dbHomesCarousel[0].carousel)
    // eslint-disable-next-line no-undef
    // return _.sortBy(state.dbHomes, 'myDb.id')
    // eslint-disable-next-line no-undef
    return _.sortBy(state.dbHomesCarousel, 'carousel.sortNo').reverse()
    // return _.sortBy(state.dbCarousels, 'imageUrl')
  },
}
