import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'
import 'firebase/app'
// import 'firebase/firestore' // ここには使用するFirebaseSDKモジュールを記載
import 'firebase/firebase-firestore' // ここには使用するFirebaseSDKモジュールを記載

const db = firebase.firestore()
const QARef = db.collection('QA')

export const state = () => ({
  QA: [],
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('QA', QARef)
  }),
  add: firestoreAction((context, { tabIndex, page }) => {
    QARef.add({
      page,
      tabIndex,
      // created: firebase.firestore.FieldValue.serverTimestamp()
    })
    // }
  }),
  // update: firestoreAction((context, page) => {
  update: firestoreAction((context, { id, page }) => {
    // console.log('id in db_update: ' + id)
    QARef.doc(id).update({
      page,
      // created: firebase.firestore.FieldValue.serverTimestamp()
    })
  }),
  updateCategory: firestoreAction((context, { id, category }) => {
    // const category = editCategory
    // console.log('id in updateCategory of QADB.js: ' + id)
    QARef.doc(id).update({
      category,
    })
  }),
  // getPageById: firestoreAction((context, id) => {
  // getPageById: firestoreAction(({ bindFirestoreRef }, id) => {
  //   console.log('id in store/firestore.js: ' + id)
  //   return QARef.doc(id).get()
  // }),
  remove: firestoreAction((context, id) => {
    QARef.doc(id).delete()
  }),
  toggle: firestoreAction((context, dbPage) => {
    QARef.doc(dbPage.id).update({
      done: !dbPage.done,
    })
  }),
}

export const getters = {
  getMyPageByTabIndex: (state) => (tabIndex) => {
    // console.log('id in getMyPageByTabIndex: ' + tabIndex)

    // return state.QA.filter((dbPage) => dbPage.tabIndex === tabIndex).sort((a, b) => {
    //   if (a[state.page.sort] > b[state.page.sort]) {
    //     return 1
    //   }
    //   if (a[state.page.sort] < b[state.page.sort]) {
    //     return -1
    //   }
    //   return 0
    // })

    // return state.QA.filter((dbPage) => dbPage.tabIndex === tabIndex).sort((a, b) => a.page.sort.localeCompare(b.page.sort))

    return state.QA.filter((dbPage) => dbPage.tabIndex === tabIndex)
  },
  // filter Category : [ {配列} ] ← 複数の塊のデータ
  getCategorys: (state) => (id) => {
    // console.log('id in getCategorys: ' + id)
    return state.QA.filter((dbCategory) => dbCategory.id === id)
  },
  // find Category : {オブジェクト} ←１つの塊のみ
  getCategoryById: (state) => (id) => {
    // console.log('id in getCategoryById: ' + id)
    return state.QA.find((dbCategory) => dbCategory.id === id)
  },
  getMyPageById: (state) => (id) => {
    // console.log('id in getMyPageById: ' + id)
    return state.QA.find((dbPage) => dbPage.id === id)
  },
  // 多分以下の orderdDbPages は使われていない
  orderdDbPages: (state) => {
    // eslint-disable-next-line no-undef
    return _.sortBy(state.QA, 'created')
  },
  // ユーザが登録した日付で逆順ソート
  // orderdMainDate: (state) => {
  //   // eslint-disable-next-line no-undef
  //   return _.sortBy(state.QA, 'page.mainDate').reverse()
  // }
}
