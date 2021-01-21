import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'
import 'firebase/app'
import 'firebase/firebase-firestore' // ここには使用するFirebaseSDKモジュールを記載

const db = firebase.firestore()
const dbMenusRef = db.collection('dbMenus')
// const myMenuRef = dbMenusRef.child('myMenu')

export const state = () => ({
  dbMenus: [],
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('dbMenus', dbMenusRef)
  }),

  // add: firestoreAction(async (context, { titleName, mainText }) => {
  // add: firestoreAction(async (context, myMenu) => {
  add: firestoreAction(async (context, { myMenu }) => {
    let myResult = ''
    // console.log('store/storemenu.js --- add: ', myMenu)
    // dbMenusRef.doc(id).add({
    await dbMenusRef
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

  // update: firestoreAction(async (context, myMenu) => {
  update: firestoreAction(async (context, { id, myMenu }) => {
    let myResult = ''
    // console.log('1-myMenu.id in store/storemenu.js: ' + myMenu.id)
    await dbMenusRef
      .doc(id)
      .update({
        // console.log('2-myMenu.id in store/storemenu.js: ' + myMenu.id)
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

  // set: firestoreAction(async (context, myMenu) => {
  set: firestoreAction(async (context, { id, myGroup }) => {
    let myResult = ''
    // console.log('store/storemenu-1 --- id : ', id)
    // await dbMenusRef.set({
    await dbMenusRef
      .doc(id)
      .set({
        // console.log('2-myMenu.id in store/storemenu.js: ' + myMenu.id)
        myGroup,
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

  delete: firestoreAction(async (context, id) => {
    let myResult = ''
    await dbMenusRef
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

  // 以下は Page Data 用
  addPage: firestoreAction(async (context, { id, myPage }) => {
    let myResult = ''
    // console.log('storemenu-1 --- id: ' + id)
    // console.log('storemenu-3 --- myItem: ' + myItem)
    await dbMenusRef
      .doc(id)
      .collection('myPage')
      .add({
        myPage,
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

  // 以下の getMenus はソートできないため、未使用
  // test: 各Page最上部のタイトル(pageName)用で、各.vue(general.vue, simple.vue, etc.) の mountedからGet
  getMenus: firestoreAction(async (context) => {
    // console.log('storemenu.js-getMenus-0 --- : ')
    // getMenus: firestoreAction(async (context) => {
    // await dbMenusRef.get().then((querySnapshot) => {
    //   const getData = querySnapshot.docs.map((doc) => doc.data())
    //   console.log('=========== getData: ', getData)
    //   return getData
    // })
    const menus = []
    // const temp = await dbMenusRef.orderBy('myMenu.myGroup.sortN')
    // console.log('storemenu.js-getMenus-1 --- temp: ', temp)

    await dbMenusRef.get().then((getData) => {
      // await dbMenusRef.orderBy('myMenu.myGroup.sortNo', 'desc').then((getData) => {
      // await dbMenusRef.orderBy('myMenu.myGroup.sortNo').then((getData) => {
      // await dbMenusRef.orderBy('myMenu.myGroup.sortNo').then((getData) => {
      // console.log('storemenu.js-getMenus-1 --- getData: ', getData)
      getData.docs.forEach((doc) => {
        // console.log('storemenu.js-getMenus-2 --- doc.id: ', doc.id)
        menus.push(doc.data())
      })
    })

    // console.log('storemenu.js-getMenus-3 --- menus: ', menus)
    return menus
  }),
}

// データの取得は getters で行うこと。
// (参考) データ取得 以外の追加・更新・削除は、上記の actions で行うこと。
export const getters = {
  // getGroups: (state) => (id) => {
  getGroups: (state) => {
    // return state.dbMenus

    // eslint-disable-next-line no-undef
    const temp = _.sortBy(state.dbMenus, 'myMenu.myGroup.sortNo')
    // console.log('***** storemenu.js - getGroups : ', temp)
    return temp

    // eslint-disable-next-line no-undef
    // return _.sortBy(state.dbMenus, 'myMenu.myGroup.sortNo')
  },

  // getItemsById: (state) => (id) => {
  // console.log('getItemsById-1 --- id: ', id)
  // const temp = state.dbMenus.find((key) => key.id === id)
  // console.log('getDbMenusById-2 --- menus: ', temp)
  // return state.dbMenus.find((key) => key.id === id).collection('item')
  // },
}
