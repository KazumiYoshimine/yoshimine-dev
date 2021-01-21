<template>
  <div>
    <h2 class="title">ホームページ管理者用ログイン</h2>
    <div v-show="isLogin">
      <p class="login">ログイン中</p>
      <p class="name">名前：{{ displayName }}</p>
      <button @click="logout">ログアウト</button>
    </div>
    <div v-show="!isLogin" id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
// FirebaseUI読み込み
import firebaseui from 'firebaseui-ja'
import 'firebaseui-ja/dist/firebaseui.css'
// Firebase読み込み
import firebase from '~/plugins/firebase'

export default {
  data() {
    return {
      // manFlg: false
    }
  },

  // computedは、値が変わるとその値に依存しているすべてのバインディングが更新される
  computed: {
    isLogin() {
      return this.$store.getters['user/isLogin']
    },

    displayName() {
      // const temp = this.$store.getters['user/displayName']
      // console.log('******* displayName: ', temp)
      return this.$store.getters['user/displayName']
    },

    getMenuIndex() {
      return this.$store.getters['myStore/getMenuIndex']
    },

    getPageList() {
      return this.$store.getters['myStore/getPageList']
    },
  },

  // created は画面を開いたとき呼ばれる。
  created() {
    // this.logout()
    // this.$router.push('/home')
  },

  mounted() {
    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
        // firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ],
    }

    // 以下は消すな： Auth UI を初期化
    // const ui = new firebaseui.auth.AuthUI(firebase.auth())

    // 以下は消すな： ユーザ認証 || Auth UI を初期化
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth())
    // console.log('ui: ', ui)

    // ログインを実行し、Authenticationにユーザがなければ新規登録
    ui.start('#firebaseui-auth-container', uiConfig)

    // ② メアドとPWによるログイン start
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword('user.kazu@example.com', '123456')
    //   .catch(function(error) {
    //     // Handle Errors here.
    //     console.log('error.code: ', error.code)
    //     console.log('errorMassage: ', error.message)
    //     // ...
    //   })
    // ② メアドとPWによるログイン end

    // 以下は消すな： 現在ログインしているユーザーを取得
    firebase.auth().onAuthStateChanged((user) => {
      // if (user !== null) {
      if (user) {
        // console.log('2-1 ++++++++++++ user: ', user)
        // ログイン情報をFire
        this.$store.dispatch('user/login', user)
        this.$nuxt.$emit('loginuser', user)
        let pushPage = ''
        const menuIndex = this.getMenuIndex
        // console.log('reAuth- mounted-1 --- menuIndex: ', menuIndex)

        switch (menuIndex.pageTemplate) {
          case 'home':
          case 'fileDb':
          case 'commonSet':
          case 'menuSet':
          case 'sideSet':
            pushPage = '/' + menuIndex.pageTemplate
            break
          default:
            pushPage = '/' + menuIndex.pageTemplate + '/' + menuIndex.pageNo
            break
        }

        // console.log('reAuth- mounted-2 --- pushPage: ', pushPage)

        // 以下の２行は削除すること
        // const pageList = this.getPageList
        // console.log('reAuth- mounted-3 --- menuIndex: ', pageList)
        // ページ遷移
        this.$router.push(pushPage)
      }
    })
  },

  methods: {
    logout() {
      this.$store.dispatch('user/logout')
      firebase
        .auth()
        .signOut()
        .then(() => {
          // console.log('ログアウトしました')
        })
    },
  },
}
</script>

<style scoped>
.login {
  font-size: 1.25rem;
}
.name {
  font-size: 1.1rem;
}
</style>
