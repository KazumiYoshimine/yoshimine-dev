import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'
import 'firebase/app'
// import 'firebase/firestore' // ここには使用するFirebaseSDKモジュールを記載
import 'firebase/firebase-firestore' // ここには使用するFirebaseSDKモジュールを記載

// ＊＊＊＊＊＊ dbHomes, dbHomesCarousel の名前は他の箇所と合わせること。
const db = firebase.firestore()

// dbHomes はトピックス用DB
const dbHomesRef = db.collection('dbHomes')
// const dbCarouselsRef = db.collection('dbHomes.carousel')
const dbCarouselsRef = db.collection('dbHomesCarousel')

// ＊＊＊＊＊＊ dbHomes, dbHomesCarousel の名前は他の箇所と合わせること。
export const state = () => ({
  dbHomes: [],
  dbHomesCarousel: [],
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    // ＊＊＊＊＊＊ dbHomes, dbHomesCarousel の名前は他の箇所と合わせること。
    bindFirestoreRef('dbHomes', dbHomesRef)
    bindFirestoreRef('dbHomesCarousel', dbCarouselsRef)
  }),
  addCarousel: firestoreAction((context, carousel) => {
    // if (carousel.comment.trim()) {
    // if (carousel.trim()) {
    // console.log('carousel.imageUrl in store/storeheader.js: ' + carousel)
    // console.log('carousel.imageUrl in store/storeheader.js: ' + carousel.comment)
    // console.log('carousel.imageUrl in store/storeheader.js: ' + carousel.imageUrl)
    // carousel2.comment = carousel.comment
    // carousel2.imageUrl = carousel.imageUrl

    dbCarouselsRef.add({
      // carousel2,
      carousel,
      // myDbNo: '1'
      created: firebase.firestore.FieldValue.serverTimestamp(),
    })
    // }
  }),
  // add: firestoreAction((context, { titleName, mainText }) => {
  add: firestoreAction((context, home) => {
    // if (home.comment.trim()) {
    // console.log('myDb in store/storeheader.js: ' + home.comment)
    dbHomesRef.add({
      home,
      // myDbNo: '1'
      // created: firebase.firestore.FieldValue.serverTimestamp()
    })
    // }
  }),
  update: firestoreAction((context, { id, home }) => {
    // 更新する場合、ひょっとしたら id を削除して追加？
    if (id) {
      // console.log('1-id in store/storeheader.js: ' + id)
      // dbHomesRef.set({
      dbHomesRef.doc(id).update({
        // console.log('2-myDb.id in store/storeheader.js: ' + myDb.id)
        home,
        // created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  }),
  update_old: firestoreAction((context, myDb) => {
    if (myDb.id) {
      // console.log('1-myDb.id in store/storeheader.js: ' + myDb.id)
      // dbHomesRef.set({
      dbHomesRef.doc(myDb.id).update({
        // console.log('2-myDb.id in store/storeheader.js: ' + myDb.id)
        myDb,
        // created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  }),
  set: firestoreAction((context, home) => {
    // 更新する場合、ひょっとしたら id を削除して追加？
    if (dbHomesRef.id) {
      // console.log('1-myDb.id in store/storeheader.js: ' + dbHomesRef.id)
      // dbHomesRef.set({
      dbHomesRef.doc(home.id).update({
        // console.log('2-myDb.id in store/storeheader.js: ' + myDb.id)
        home,
        // created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  }),
  removeCarousel: firestoreAction((context, id) => {
    dbCarouselsRef.doc(id).delete()
  }),
  remove: firestoreAction((context, id) => {
    dbHomesRef.doc(id).delete()
  }),
  toggle: firestoreAction((context, myDb) => {
    dbHomesRef.doc(myDb.id).update({
      done: !myDb.done,
    })
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

  // Home コンポーネント情報の取得
  orderdDbHomes: (state) => {
    // console.log('1 ------------------ in storehome.js: ')
    // console.log('2 ------------------ in storehome.js: ' + state.dbHomes.length)
    // console.log('3 ------------------ in storehome.js: ' + state.dbHomes[0].home.titleName)
    // eslint-disable-next-line no-undef
    // return _.sortBy(state.dbHomes, 'myDb.id')
    // eslint-disable-next-line no-undef
    return _.sortBy(state.dbHomes, 'home.sortNo').reverse()
    // return _.sortBy(state.dbHomes, 'home.mainDate').reverse()
    // return _.sortBy(state.dbHomes, 'home.mainDate')
  },

  // ＊＊＊＊＊＊ dbHomes, dbHomesCarousel の名前は他の箇所と合わせること。
  orderdDbCarousels: (state) => {
    // console.log('------------------ : ' + state.dbHomesCarousel.length)
    // console.log('------------------ : ' + state.dbHomesCarousel[0].carousel.imageUrl)
    // console.log('------------------ : ' + state.dbHomesCarousel[0].carousel.comment)
    // console.log('------------------ : ' + state.dbHomesCarousel[0].carousel)
    // eslint-disable-next-line no-undef
    // return _.sortBy(state.dbHomes, 'myDb.id')
    // eslint-disable-next-line no-undef
    return _.sortBy(state.dbHomesCarousel, 'carousel.sortNo').reverse()
    // return _.sortBy(state.dbCarousels, 'imageUrl')
  },
}
