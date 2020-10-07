// import { firestoreAction } from 'vuexfire'
// import firebase from 'firebase/app'
// import firebase from '~/plugins/firebase'
import 'firebase/app'
// import 'firebase/firestorage' // ここには使用するFirebaseSDKモジュールを記載
import 'firebase/firebase-storage' // ここには使用するFirebaseSDKモジュールを記載

// const db = firebase.firestore()
// const myAppsRef = db.collection('myApps')
// const db = firebase.storage()
// const myAppsRef = db.collection('myApps') ← エラー： storage()ではcolledtionは利用できない

// export const state = () => ({
//   myApps: []
// })

// export const actions = {
//   init: firestoreAction(({ bindFirestoreRef }) => {
//     bindFirestoreRef('myApps', myAppsRef)
//   }),
//   add: firestoreAction((context, name) => {
//     if (name.trim()) {
//       myAppsRef.add({
//         name,
//         done: false,
//         created: firebase.firestore.FieldValue.serverTimestamp()
//       })
//     }
//   }),
//   remove: firestoreAction((context, id) => {
//     myAppsRef.doc(id).delete()
//   }),
//   toggle: firestoreAction((context, myApp) => {
//     myAppsRef.doc(myApp.id).update({
//       done: !myApp.done
//     })
//   })
// }

export const getters = {
  orderdMyApps: (state) => {
    // eslint-disable-next-line no-undef
    return _.sortBy(state.myApps, 'created')
  },
}
