import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'
import 'firebase/app'
// import 'firebase/firestore' // ここには使用するFirebaseSDKモジュールを記載
import 'firebase/firebase-firestore' // ここには使用するFirebaseSDKモジュールを記載

const db = firebase.firestore()
const qaTabRef = db.collection('qaTab')

export const state = () => ({
  qaTab: [],
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('qaTab', qaTabRef)
  }),
  add: firestoreAction((context, { tabIndex, tabs }) => {
    qaTabRef.add({
      tabIndex,
      tabs,
      // created: firebase.firestore.FieldValue.serverTimestamp()
    })
  }),
  set: firestoreAction((context, { tabNo, tabs }) => {
    qaTabRef.doc(tabNo).set({
      // sortNo,
      // tabFlg,
      tabs,
      // created: firebase.firestore.FieldValue.serverTimestamp()
    })
  }),
  // update: firestoreAction((context, page) => {
  // update: firestoreAction((context, { id, sortNo, tabFlg, tabItem }) => {
  update: firestoreAction((context, { id, tabs }) => {
    // console.log('id in db_update: ' + id)
    qaTabRef.doc(id).update({
      // sortNo,
      // tabFlg,
      tabs,
      // created: firebase.firestore.FieldValue.serverTimestamp()
    })
  }),
  // getTabById: firestoreAction(({ bindFirestoreRef }, id) => {
  // getTabById: firestoreAction((context, id) => {
  //   console.log('id in store/firestore.js: ' + id)
  //   return qaTabRef.doc(id).get()
  // }),
  getMyTabs: firestoreAction((context) => {
    // console.log('---------- in store/qaTabs.js: ')
    // return qaTabRef.get()

    // qaTabRef.get().then(function(querySnapshot) {
    //   // querySnapshot.forEach(function(doc) {
    //   //   console.log('doc.id: ', doc.id)
    //   // })
    //   return querySnapshot
    // })

    qaTabRef.get().then((querySnapshot) => {
      const tabData = querySnapshot.docs.map((doc) => doc.data())
      // console.log('=========== tabData: ', tabData)
      return tabData
    })
  }),
  remove: firestoreAction((context, id) => {
    qaTabRef.doc(id).delete()
  }),
  // toggle: firestoreAction((context, dbTab) => {
  //   qaTabRef.doc(dbTab.id).update({
  //     done: !dbTab.done
  //   })
  // })
}

export const getters = {
  // getActiveTabs: (state) => (tabFlg) => {
  getActiveTabs: (state) => {
    // return state.qaTab.filter((dbTab) => dbTab.tabItem.tabFlg === tabFlg)
    // return state.qaTab.filter((dbTab) => dbTab.tabFlg === tabFlg)
    // return state.qaTab.filter((dbTab) => dbTab.tabItem.tabFlg === tabFlg)
    // return state.qaTab.filter((tabItem) => tabItem.tabFlg === tabFlg)
    return state.qaTab.filter((tabs) => tabs.tabFlg)
  },
  // getMyTabByTabIndex: (state) => (tabIndex) => {
  // console.log('id in getMyTabByTabIndex: ' + tabIndex)

  // return state.qaTab.filter((dbTab) => dbTab.tabIndex === tabIndex).sort((a, b) => {
  //   if (a[state.page.sort] > b[state.page.sort]) {
  //     return 1
  //   }
  //   if (a[state.page.sort] < b[state.page.sort]) {
  //     return -1
  //   }
  //   return 0
  // })

  // return state.qaTab.filter((dbTab) => dbTab.tabIndex === tabIndex).sort((a, b) => a.page.sort.localeCompare(b.page.sort))

  // return state.qaTab.filter((dbTab) => dbTab.tabIndex === tabIndex)
  // },
  // filter Category : [ {配列} ] ← 複数の塊のデータ
  // getCategorys: (state) => (id) => {
  //   // console.log('id in getCategorys: ' + id)
  //   return state.qaTab.filter((dbCategory) => dbCategory.id === id)
  // },
  // find Category : {オブジェクト} ←１つの塊のみ
  // getCategoryById: (state) => (id) => {
  //   // console.log('id in getCategoryById: ' + id)
  //   return state.qaTab.find((dbCategory) => dbCategory.id === id)
  // },
  getTabById: (state) => (id) => {
    // console.log('id in getMyTabById: ' + id)
    return state.qaTab.find((myKey) => myKey.id === id)
  },
  getTabsSortTabIndex: (state) => {
    // eslint-disable-next-line no-undef
    return _.sortBy(state.qaTab, 'tabIndex')
    // return _.sortBy(state.qaTab, 'tabs.tabName').reverse()
  },

  getTabs: (state) => {
    // eslint-disable-next-line no-undef
    return _.sortBy(state.qaTab, 'tabs.sortNo')
    // return _.sortBy(state.qaTab, 'tabs.tabName').reverse()
  },

  getTabsAll: (state) => {
    // eslint-disable-next-line no-undef
    return _.sortBy(state.qaTab, 'tabs.sortNo')
    // return _.sortBy(state.qaTab, 'tabs.tabName').reverse()
  },

  // getTabs: {
  // return qaTabRef.tabs.orderBy('sortNo')
  // return qaTabRef.orderBy('tabs')

  // Child 検索
  // return qaTabRef.orderByChild('tabs/sortNo')
  // return qaTabRef.orderBy('tabs.sortNo', 'desc')

  // 逆順 検索
  // return qaTabRef.orderBy('tabs.sortNo', 'desc')

  // 複数 検索
  // return qaTabRef.orderBy('tabs.tabFlg', 'desc').orderBy('tabs.sortNo')

  // 検索件数の制限
  // return qaTabRef.orderBy('tabs.sortNo').limit(2)
  // }

  // ユーザが登録した日付で逆順ソート
  // orderdMainDate: (state) => {
  //   // eslint-disable-next-line no-undef
  //   return _.sortBy(state.qaTab, 'page.mainDate').reverse()
  // }
}
