import { firestoreAction } from 'vuexfire'
// import createPersistedState from 'vuex-persistedstate'
import firebase from '~/plugins/firebase'
import 'firebase/app'
// import 'firebase/firestore' // ここには使用するFirebaseSDKモジュールを記載
import 'firebase/firebase-firestore' // ここには使用するFirebaseSDKモジュールを記載

const db = firebase.firestore()
const simpleRef = db.collection('simple')

export const state = () => ({
  simple: [],
})

export const actions = {
  // init は export const getters = { } 内の記述に有効で、
  // simpleRef.・・・ には関係無いようだ！
  init: firestoreAction(({ bindFirestoreRef }, ref) => {
    // bindFirestoreRef('simple', simpleRef)
    bindFirestoreRef('simple', ref)
  }),

  // 上記の bindFirestoreRef('simple', ref) と
  // 以下の bindFirestoreRef('simple', simpleRef)
  // は 同じ simple を init しているので、NG
  // 最初の init は無効となり、後の init が有効となる。

  // initMenu: firestoreAction(({ bindFirestoreRef }) => {
  //   bindFirestoreRef('simple', simpleRef)
  // }),

  // add: firestoreAction((context, page) => {
  add: firestoreAction((context, { templateNo, page }) => {
    // console.log('titleName in store/simple.js: ' + page.titleName)
    simpleRef.doc(templateNo).collection(templateNo).add({
      page,
      created: firebase.firestore.FieldValue.serverTimestamp(),
    })
  }),
  // update: firestoreAction((context, page) => {
  update: firestoreAction((context, { templateNo, id, page }) => {
    // console.log('id in db_update: ' + id)
    // simpleRef.doc(id).update({
    simpleRef.doc(templateNo).collection(templateNo).doc(id).update({
      page,
    })
  }),
  // remove: firestoreAction((context, id) => {
  remove: firestoreAction((context, { templateNo, id }) => {
    // simpleRef.doc(id).delete()
    simpleRef.doc(templateNo).collection(templateNo).doc(id).delete()
  }),

  // サブコレクションの全 TemplateNo を取得
  getTemplateNo: firestoreAction(async (context) => {
    const templateNos = []
    await simpleRef.get().then((getData) => {
      getData.docs.forEach((doc) => {
        // console.log('getTemplateNo-1 --- getDage.doc.id', doc.id)
        templateNos.push(doc.id)
      })
    })

    // console.log('getTemplateNo-1 --- templateNos: ', templateNos)
    return templateNos
  }),

  // (多分未使用）サブコレクションの全Pageデータを取得
  getAllPage: firestoreAction(async (context) => {
    const subCollectionData = []
    await simpleRef.get().then((getData) => {
      getData.docs.forEach((doc) => {
        doc.ref
          .collection(doc.id)
          .get()
          .then((subCollection) => {
            subCollection.docs.forEach((doc2) => {
              subCollectionData.push(doc2.data().page)
            })
          })
      })
    })
    return subCollectionData
  }),

  // getPageByPages: firestoreAction(async (context, templateNo) => {
  //   await simpleRef
  //     .doc(templateNo)
  //     .collection(templateNo)
  //     .get()
  //     .then((querySnapshot) => {
  //       const myResult = querySnapshot.docs.map((doc) => doc.data())
  //       // console.log('simple.js - getPageByPages-3: ', myResult)
  //       return myResult
  //     })
  // }),

  // (多分未使用）
  toggle: firestoreAction((context, dbPage) => {
    simpleRef.doc(dbPage.id).update({
      done: !dbPage.done,
    })
  }),
}

export const getters = {
  // 以下は全検索
  // getMyPageAll: (simpleRef) => {
  //   console.log('getMyPageAll-1 --- DB simple: ', simpleRef)
  //   return simpleRef
  // },

  // 以下は全検索
  getMyPageAll: (state) => {
    // console.log('getMyPageAll-1 --- DB simple: ', state.simple)
    return state.simple
  },

  getMyPageById: (state) => (id) => {
    // console.log('id in getMyPageById: ' + id)
    // 以下は全検索
    // getMyPageById: (state) => {
    // console.log('getMyPageId-1 --- DB simple: ', state.simple)
    // return state.simple
    return state.simple.find((key) => key.id === id)
  },

  // 多分以下の orderdDbPages は使われていない
  orderdDbPages: (state) => {
    // eslint-disable-next-line no-undef
    return _.sortBy(state.simple, 'created')
  },
  // ユーザが登録した日付で逆順ソート
  orderdMainDate: (state) => {
    // return _.sortBy(state.simple, 'page.fileUrl')
    // eslint-disable-next-line no-undef
    // return _.sortBy(state.simple, 'page.fileUrl').reverse()
    // eslint-disable-next-line no-undef
    const tempData = _.sortBy(state.simple, 'page.fileUrl').reverse()
    // console.log('simple.js-1 ----- orderMainDate: ', tempData)
    return tempData
  },
}
