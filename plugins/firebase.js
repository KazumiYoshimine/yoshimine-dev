import firebase from 'firebase/app'
import 'firebase/functions'
import 'firebase/firestore'
import 'firebase/auth'

// FirebaseUI読み込み
// import firebaseui from 'firebaseui'
// import firebaseui from 'firebaseui-ja'
// import 'firebaseui-ja/dist/firebaseui.css'

// 以下は Firebase のプロジェクト作成時の Settings →CDNで
// var->const , config -> firebaseConfig へ変更したもの。

// const uiConfig = {
//   signInSuccessUrl: '/home',
//   signInOptions: [
// firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
// firebase.auth.EmailAuthProvider.PROVIDER_ID,
// firebase.auth.GoogleAuthProvider.PROVIDER_ID,
// firebase.auth.FacebookAuthProvider.PROVIDER_ID,
// firebase.auth.TwitterAuthProvider.PROVIDER_ID,
// firebase.auth.GithubAuthProvider.PROVIDER_ID,
// firebase.auth.PhoneAuthProvider.PROVIDER_ID
// ]
// }

const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DATABASE_URL,
  projectId: process.env.FB_PROJECTID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID,
  measurementId: process.env.FB_MEASUREMENT_ID,
}

// Initialize Firebase
// 以下の２箇所も config -> firebaseConfig へ変更
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
  // firebase.analytics()
  // console.log(firebaseConfig.projectId)
}

// const ui = new firebaseui.auth.AuthUI(firebase.auth())
// ui.start('#firebaseui-auth-container', uiConfig)

export default firebase
export const functions = firebase.functions()
