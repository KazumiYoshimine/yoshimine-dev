import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'
import 'firebase/app'
// import 'firebase/firestore' // ここには使用するFirebaseSDKモジュールを記載
import 'firebase/firebase-firestore' // ここには使用するFirebaseSDKモジュールを記載

const db = firebase.firestore()
const dbParkingRef = db.collection('dbParking')

export const state = () => ({
  dbParking: [],
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('dbParking', dbParkingRef)
  }),
  add: firestoreAction((context, { sortNo, tabFlg, tabItem }) => {
    dbParkingRef.add({
      sortNo,
      tabFlg,
      tabItem,
      // created: firebase.firestore.FieldValue.serverTimestamp()
    })
    // }
  }),
  // update: firestoreAction((context, page) => {
  update: firestoreAction((context, { id, sortNo, tabFlg, tabItem }) => {
    // console.log('id in db_update: ' + id)
    dbParkingRef.doc(id).update({
      sortNo,
      tabFlg,
      tabItem,
      // created: firebase.firestore.FieldValue.serverTimestamp()
    })
  }),
  // updateCategory: firestoreAction((context, { id, category }) => {
  //   // const category = editCategory
  //   // console.log('id in updateCategory of dbParkingDB.js: ' + id)
  //   dbParkingRef.doc(id).update({
  //     category
  //   })
  // }),
  // getTabById: firestoreAction((context, id) => {
  // getTabById: firestoreAction(({ bindFirestoreRef }, id) => {
  //   console.log('id in store/firestore.js: ' + id)
  //   return dbParkingRef.doc(id).get()
  // }),
  remove: firestoreAction((context, id) => {
    dbParkingRef.doc(id).delete()
  }),
  // toggle: firestoreAction((context, dbTab) => {
  //   dbParkingRef.doc(dbTab.id).update({
  //     done: !dbTab.done
  //   })
  // })
}

export const getters = {
  // orderdDbTabs: (state) => {
  getTabs: (state) => {
    // eslint-disable-next-line no-undef
    return _.sortBy(state.dbParking, 'sortNo')
  },
  // getActiveTabs: (state) => (tabFlg) => {
  getActiveTabs: (state) => {
    // return state.dbParking.filter((dbTab) => dbTab.tabItem.tabFlg === tabFlg)
    // return state.dbParking.filter((dbTab) => dbTab.tabFlg === tabFlg)
    // return state.dbParking.filter((dbTab) => dbTab.tabItem.tabFlg === tabFlg)
    // return state.dbParking.filter((tabItem) => tabItem.tabFlg === tabFlg)
    return state.dbParking.filter((tabItem) => tabItem.tabFlg)
  },
  // getMyTabByTabIndex: (state) => (tabIndex) => {
  // console.log('id in getMyTabByTabIndex: ' + tabIndex)

  // return state.dbParking.filter((dbTab) => dbTab.tabIndex === tabIndex).sort((a, b) => {
  //   if (a[state.page.sort] > b[state.page.sort]) {
  //     return 1
  //   }
  //   if (a[state.page.sort] < b[state.page.sort]) {
  //     return -1
  //   }
  //   return 0
  // })

  // return state.dbParking.filter((dbTab) => dbTab.tabIndex === tabIndex).sort((a, b) => a.page.sort.localeCompare(b.page.sort))

  // return state.dbParking.filter((dbTab) => dbTab.tabIndex === tabIndex)
  // },
  // filter Category : [ {配列} ] ← 複数の塊のデータ
  // getCategorys: (state) => (id) => {
  //   // console.log('id in getCategorys: ' + id)
  //   return state.dbParking.filter((dbCategory) => dbCategory.id === id)
  // },
  // find Category : {オブジェクト} ←１つの塊のみ
  // getCategoryById: (state) => (id) => {
  //   // console.log('id in getCategoryById: ' + id)
  //   return state.dbParking.find((dbCategory) => dbCategory.id === id)
  // },
  getMyTabById: (state) => (id) => {
    // console.log('id in getMyTabById: ' + id)
    return state.dbParking.find((dbTab) => dbTab.id === id)
  },
  // ユーザが登録した日付で逆順ソート
  // orderdMainDate: (state) => {
  //   // eslint-disable-next-line no-undef
  //   return _.sortBy(state.dbParking, 'page.mainDate').reverse()
  // }
}
