import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'
import 'firebase/app'
// import 'firebase/firestore' // ここには使用するFirebaseSDKモジュールを記載
import 'firebase/firebase-firestore' // ここには使用するFirebaseSDKモジュールを記載

const db = firebase.firestore()
const aboutRef = db.collection('about')

export const state = () => ({
  about: [],
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('about', aboutRef)
  }),
  addTab1: firestoreAction((context, { tabIndex, tab1 }) => {
    aboutRef.add({
      tab1,
      tabIndex,
      // created: firebase.firestore.FieldValue.serverTimestamp()
    })
    // }
  }),
  // update: firestoreAction((context, page) => {
  updateTab1: firestoreAction((context, { id, tab1 }) => {
    // console.log('id in db_update: ' + id)
    aboutRef.doc(id).update({
      tab1,
      // created: firebase.firestore.FieldValue.serverTimestamp()
    })
  }),
  addTab2: firestoreAction((context, { tabIndex, tab2 }) => {
    // console.log('tabIndex in addTab2: ' + tabIndex)
    // console.log('tab2 in addTab2: ' + tab2.sort)
    // console.log('tab2 in addTab2: ' + tab2.comment)
    aboutRef.add({
      tab2,
      tabIndex,
      // created: firebase.firestore.FieldValue.serverTimestamp()
    })
    // }
  }),
  updateTab2: firestoreAction((context, { id, tab2 }) => {
    aboutRef.doc(id).update({
      tab2,
      // created: firebase.firestore.FieldValue.serverTimestamp()
    })
  }),
  addTab3: firestoreAction((context, { tabIndex, tab3 }) => {
    aboutRef.add({
      tab3,
      tabIndex,
      // created: firebase.firestore.FieldValue.serverTimestamp()
    })
    // }
  }),
  // update: firestoreAction((context, page) => {
  updateTab3: firestoreAction((context, { id, tab3 }) => {
    // console.log('id in db_update: ' + id)
    aboutRef.doc(id).update({
      tab3,
      // created: firebase.firestore.FieldValue.serverTimestamp()
    })
  }),
  updateCategory: firestoreAction((context, { id, category }) => {
    // const category = editCategory
    // console.log('id in updateCategory of aboutDB.js: ' + id)
    aboutRef.doc(id).update({
      category,
    })
  }),
  // getPageById: firestoreAction((context, id) => {
  // getPageById: firestoreAction(({ bindFirestoreRef }, id) => {
  //   console.log('id in store/firestore.js: ' + id)
  //   return aboutRef.doc(id).get()
  // }),
  remove: firestoreAction((context, id) => {
    aboutRef.doc(id).delete()
  }),
  toggle: firestoreAction((context, dbPage) => {
    aboutRef.doc(dbPage.id).update({
      done: !dbPage.done,
    })
  }),
}

export const getters = {
  getMyPageByTabIndex: (state) => (tabIndex) => {
    // console.log('id in getMyPageByTabIndex: ' + tabIndex)

    // return state.about.filter((dbPage) => dbPage.tabIndex === tabIndex).sort((a, b) => {
    //   if (a[state.page.sort] > b[state.page.sort]) {
    //     return 1
    //   }
    //   if (a[state.page.sort] < b[state.page.sort]) {
    //     return -1
    //   }
    //   return 0
    // })

    // return state.about.filter((dbPage) => dbPage.tabIndex === tabIndex).sort((a, b) => a.page.sort.localeCompare(b.page.sort))

    return state.about.filter((dbPage) => dbPage.tabIndex === tabIndex)
  },
  // filter Category : [ {配列} ] ← 複数の塊のデータ
  getCategorys: (state) => (id) => {
    // console.log('id in getCategorys: ' + id)
    return state.about.filter((dbCategory) => dbCategory.id === id)
  },
  // find Category : {オブジェクト} ←１つの塊のみ
  getCategoryById: (state) => (id) => {
    // console.log('id in getCategoryById: ' + id)
    return state.about.find((dbCategory) => dbCategory.id === id)
  },
  getByIdTab1: (state) => (id) => {
    return state.about.find((tab1) => tab1.id === id)
  },
  getByIdTab2: (state) => (id) => {
    return state.about.find((tab2) => tab2.id === id)
  },
  getByIdTab3: (state) => (id) => {
    return state.about.find((tab3) => tab3.id === id)
  },
  // 多分以下の orderdDbPages は使われていない
  orderdDbPages: (state) => {
    // eslint-disable-next-line no-undef
    return _.sortBy(state.about, 'created')
  },
  // ユーザが登録した日付で逆順ソート
  // orderdMainDate: (state) => {
  //   // eslint-disable-next-line no-undef
  //   return _.sortBy(state.about, 'page.mainDate').reverse()
  // }
}
