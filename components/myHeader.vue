<template>
  <div class="container-fluid no-gutters">
    <div class="row m-0 p-0">
      <div class="col-12 d-flex justify-content-between align-items-center" :style="myCommon.buttonHeaderRGB">
        <b-link to="/home" class="d-flex flex-row align-items-center m-0 p-0" @click="selMenu(-1, 0, 'home', 0)">
          <!-- ロゴ set start -->
          <div v-if="myCommon.logoRadio === 'selfRegFile'" class="m-0 p-0">
            <img :src="myCommon.headerLogo" alt="Header image" width="36" height="36" title="building" />
          </div>
          <div v-else class="m-0 p-0">
            <b-icon :icon="myCommon.topTitleLogo" :class="myCommon.myClass" :variant="myCommon.myVariant" :animation="myCommon.myAnimation" :font-scale="myCommon.myFontScale" alt="Header image" width="36" height="36" title="building" />
          </div>
          <!-- ロゴ set end -->

          <span class="myTitle text-dark font-weight-bold m-0 p-1">{{ myCommon.topTitle }}</span>
        </b-link>
        <!--   連絡先等   -->
        <div v-if="myCommon.mLink" class="m-0 p-0">
          <a class="m-0 p-0" :href="myCommon.mLink" target="_blank">{{ myCommon.mContact }}</a>
        </div>
        <div v-else class="m-0 p-0">
          <a class="m-0 p-0">{{ myCommon.mContact }}</a>
        </div>
      </div>
    </div>

    <div class="mb-3">
      <b-navbar toggleable="md" type="light" class="d-flex justify-content-between m-0 p-1" :style="myCommon.buttonBarRGB">
        <div class="d-flex flex-row m-0 p-0">
          <!-- HOME ボタン -->
          <!-- <b-button id="idBorder" to="/home" :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" :class="isBorderColor(-1, myCommon.myBorder)" class="m-1 p-1" @click="selMenu(-1, 0)">{{ myCommon.mHome1 }}</b-button> -->
          <b-button to="/home" :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" :class="isBorderColor(-1, myCommon.myBorder)" class="m-1 p-1" @click="selMenu(-1, 0, 'home', 0)">{{ myCommon.mHome1 }}</b-button>

          <b-navbar-toggle target="nav-collapse" />
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <!-- Group menu ++++++++++ start -->
              <!-- <div v-for="(dbGroup, indexGroup) in dbGroups" :key="dbGroup.id" class="col-4"> -->
              <!-- <div v-for="(dbGroup, indexGroup) in dbGroups" :key="dbGroup.id"> -->
              <div v-for="(dbGroup, indexGroup) in dbGroups" :key="dbGroup.id">
                <!-- <div v-for="dbGroup in dbGroups" :key="dbGroup.id"> -->
                <!-- <div class="m-0 p-0"> -->
                <div v-show="dbGroup.myMenu.myGroup.isGroup">
                  <div class="m-0 p-0" @mouseover="onOver(indexGroup)" @mouseleave="onLeave(indexGroup)">
                    <!-- <b-dropdown id="dropdown-menu-1" ref="dropdown1" :size="myCommon.selectedBtnSize" :text="dbGroup.myMenu.myGroup.groupName" :variant="myCommon.selectedMenuBtnColor" :class="isBorderColor(indexGroup, myCommon.myBorder)" class="m-1 p-0"> -->
                    <b-dropdown :ref="'dropdown' + indexGroup" :size="myCommon.selectedBtnSize" :text="dbGroup.myMenu.myGroup.groupName" :variant="myCommon.selectedMenuBtnColor" :class="isBorderColor(indexGroup, myCommon.myBorder)" class="m-1 p-0">
                      <!-- <b-dropdown :size="myCommon.selectedBtnSize" :text="dbGroup.myMenu.myGroup.groupName" :variant="myCommon.selectedMenuBtnColor" :class="isBorderColor(indexGroup, myCommon.myBorder)" class="m-1 p-0 visible"> -->
                      <div v-for="(myPage, indexPage) in dbGroup.myMenu.myPage" :key="myPage.id">
                        <div v-show="myPage.isPage">
                          <!-- <b-dropdown-item :to="'/' + myPage.pageTemplate + '/' + myPage.pageNo" :active="isSelectedItem(11)" @click="setMenuIndex(indexGroup, indexPage)">{{ myPage.pageName }}</b-dropdown-item> -->
                          <b-dropdown-item :to="'/' + myPage.pageTemplate + '/' + myPage.pageNo" :active="isSelectedItem(indexGroup, indexPage)" @click="setMenuIndex(indexGroup, indexPage, myPage)">{{ myPage.pageName }}</b-dropdown-item>
                        </div>
                      </div>
                    </b-dropdown>
                  </div>
                </div>
                <!-- Group menu ++++++++++ end -->
              </div>

              <!-- <b-button :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" class="m-1 p-1" :class="isBorderColor(-2, myCommon.myBorder)" @click="selMenu(-2, 0), testDispInfo()">test-dispInfo</b-button> -->
            </b-navbar-nav>
          </b-collapse>
        </div>

        <div>
          <!-- ------------------ Sideber start -->
          <span v-show="nowIsSideMenu" class="m-0 p-0">
            <b-button v-b-toggle.sidebar-footer :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" class="m-0 p-1">Side Menu</b-button>
          </span>
          <!-- Sideber の位置： 左 -->
          <!-- <b-sidebar id="sidebar-footer" aria-label="Sidebar with custom footer" no-header shadow> -->
          <!-- <b-sidebar id="sidebar-footer" aria-label="Sidebar with custom footer" title="Side Menu" bg-variant="dark" text-variant="light"> -->
          <!-- <b-sidebar id="sidebar-footer" class="m-0 p-0" title="Side Menu" bg-variant="dark" text-variant="light"> -->
          <b-sidebar id="sidebar-footer" class="m-0 p-0" title="Side Menu" bg-variant="dark" text-variant="light">
            <!-- Sideber の位置： 右 -->
            <!-- <b-sidebar id="sidebar-footer" aria-label="Sidebar with custom footer" title="Side Menu" bg-variant="dark" text-variant="light" right> -->
            <template #footer="{ hide }">
              <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
                <strong class="mr-auto">Footer</strong>
                <b-button size="sm" @click="hide">Close</b-button>
              </div>
            </template>

            <!-- <div class="px-3 py-2"> -->
            <div v-for="(sideMenu, indexGroup) in getSideMenus" :key="sideMenu.id" class="m-0 p-2">
              <div v-show="sideMenu.myMenu.myGroup.isGroup">
                <b-list-group class="p-0">
                  <b-list-group-item class="text-break m-0 p-1 text-center text-light bg-info font-weight-bold">{{ sideMenu.myMenu.myGroup.groupName }}</b-list-group-item>

                  <div v-for="(myPage, indexPage) in sideMenu.myMenu.myPage" :key="myPage.id">
                    <div v-show="myPage.isPage">
                      <!-- ================ リンク集 ==== start -->
                      <div v-if="myPage.pageTemplate === 'link'" class="m-0 p-0">
                        <b-list-group-item :href="myPage.linkUrl" target="_blank" class="m-0 p-1" :active="isSelectedItem('side' + indexGroup, indexPage)" @click="setMenuIndex('side' + indexGroup, indexPage, myPage)">{{ myPage.pageName }}</b-list-group-item>
                      </div>
                      <!-- ================ リンク集 ==== end -->

                      <!-- ================ PR動画 start ==== -->
                      <div v-else class="m-0 p-0">
                        <b-list-group-item :to="'/' + myPage.pageTemplate + '/' + myPage.pageNo" class="m-0 p-1" :active="isSelectedItem('side' + indexGroup, indexPage)" @click="setMenuIndex('side' + indexGroup, indexPage, myPage)">{{ myPage.pageName }}</b-list-group-item>
                      </div>
                      <!-- ================ PR動画 end ==== -->
                    </div>
                  </div>
                </b-list-group>
                <br />
              </div>
            </div>
          </b-sidebar>
          <!-- ------------------ Sideber end -->
        </div>
      </b-navbar>

      <!-- 管理メニュー start -->
      <div v-show="manFlg" class="m-0 p-0">
        <b-navbar toggleable="sm" type="light" class="mt-1 p-1" style="background-color: rgba(100, 100, 100, 0.25)">
          <!-- 以下は ハンバーガー メニュー内 -->
          <b-navbar-toggle target="nav-collapse2"></b-navbar-toggle>
          <b-collapse id="nav-collapse2" is-nav>
            <!-- 管理 man start -->
            <div v-show="isLogin" class="m-0 p-0">
              <b-navbar-nav variant="info">
                <b-button to="/fileDb" :disabled="isMainUser" variant="outline-dark" :size="myCommon.selectedBtnSize" :class="isBorderColor(90, myCommon.myBorder)" class="m-1 p-1" @click="selMenu(90, 0, 'fileDb', 0)">{{ myCommon.mArchiveDB }}</b-button>
                <b-button to="/commonSet" :disabled="isMainUser" variant="outline-dark" :size="myCommon.selectedBtnSize" :class="isBorderColor(91, myCommon.myBorder)" class="m-1 p-1" @click="selMenu(91, 0, 'commonSet', 0)">共通設定</b-button>
                <b-button to="/menuSet" :disabled="isMainUser" variant="outline-dark" :size="myCommon.selectedBtnSize" :class="isBorderColor(92, myCommon.myBorder)" class="m-1 p-1" @click="selMenu(92, 0, 'menuSet', 0)">メニュー設定</b-button>
                <b-button to="/sideSet" :disabled="isMainUser" variant="outline-dark" :size="myCommon.selectedBtnSize" :class="isBorderColor(93, myCommon.myBorder)" class="m-1 p-1" @click="selMenu(93, 0, 'sideSet', 0)">Side Menu設定</b-button>
                <!-- <b-button to="/unused" :disabled="isMainUser" variant="outline-dark" :size="myCommon.selectedBtnSize" :class="isBorderColor(94, myCommon.myBorder)" class="m-1 p-1" @click="selMenu(94, 0)">未使用データの整理</b-button> -->
                <!-- ****** 本コメント、及び下記の2行(add, set) は消すな！ -->
                <!-- <b-button variant="dark" class="m-1 p-1" @click="add()">add</b-button> -->
                <!-- <b-button variant="dark" class="m-1 p-1" @click="set()">set</b-button> -->

                <!-- <div class="d-flex align-items-center" @mouseover="onOver(101)" @mouseleave="onLeave(101)"> -->
                <!-- <b-dropdown ref="dropdown101" :size="myCommon.selectedBtnSize" text="開発用メニュー" variant="dark" class="m-0"> -->
                <!-- <b-dropdown-item to="/test1" :class="isBorderColor(101, myCommon.myBorder)" @click="selMenu(101, 1)">test1</b-dropdown-item> -->
                <!-- <b-dropdown-item to="/test6" @click="selMenu(101, 6)">test6</b-dropdown-item> -->
                <!-- <b-dropdown-item to="/test7" @click="selMenu(101, 7)">test7</b-dropdown-item> -->
                <!-- <b-dropdown-item to="/test8" @click="selMenu(101, 8)">test8</b-dropdown-item> -->
                <!-- <b-dropdown-item to="/test9" @click="selMenu(101, 9)">test9</b-dropdown-item> -->
                <!-- </b-dropdown> -->
                <!-- </div> -->
              </b-navbar-nav>
            </div>
            <!-- 管理 man end -->

            <!-- ログイン start -->
            <b-navbar-nav class="ml-auto">
              <div v-if="isLogin" class="m-0 p-0 d-flex align-items-center">
                <!-- <span>{{ loginUser.displayName }}</span> -->
                <b-button :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" class="m-1 p-1" @click="logout">{{ loginUser.displayName }} logout</b-button>
                <b-img right :src="loginUser.photoURL" width="32" height="32" rounded="circle" alt="no_image"></b-img>
              </div>
              <div v-else class="m-0 p-0">
                <!-- <b-button :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" class="m-1 p-1">login</b-button> -->
                <b-button to="/reAuth" :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" class="m-1 p-1">login</b-button>
                <!-- <b-button variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" class="m-1 p-1" @click="reLogin()">login</b-button> -->
              </div>
            </b-navbar-nav>
            <!-- ログイン end -->
          </b-collapse>
        </b-navbar>
      </div>

      <!-- 再Login の modalウィンドウ ********** start -->
      <!-- <b-modal id="reLoginModal" ref="reLoginModal" size="xl" title="ログイン" class="m-0 p-0">
        <h2 class="m-0 p-0">ホームページ管理者用ログイン</h2>
        <p class="m-0 p-0">ログイン中</p>
        <div id="firebaseui-auth-container"></div>
      </b-modal> -->
      <!-- 再Login の modalウィンドウ ********** end -->

      <!-- 管理メニュー end -->
      <!-- <b-button class="px-1 py-0 m-1" @click="test1()">test1</b-button> -->
    </div>
    <p>{{ myMenuSet() }}</p>
    <p>{{ setGroups() }}</p>
    <p>{{ myCommonUsers() }}</p>
    <!-- <b-button :size="myCommon.selectedBtnSize" variant="primary" class="m-0 ml-2 px-1 py-0" @click="test1()">test1</b-button> -->
  </div>
</template>

<script>
// FirebaseUI読み込み
// import firebaseui from 'firebaseui-ja'
// import 'firebaseui-ja/dist/firebaseui.css'

// IconsPlugin を使用するには、以下の Vue も import する必要がある
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
// Firebase読み込み
// import firebase from '~/plugins/firebase'

// import firebase from '~/plugins/firebase'
// const db = firebase.firestore()

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
// const storage = firebase.storage()
// const storageRef = storage.ref()
// const imagesRef = storageRef.child('images')
// Vue.use(IconsPlugin)

export default {
  components: {
    // myFooter
    //   IconsPlugin
  },

  data() {
    return {
      manFlg: true,
      // manFlg: false,
      loginUser: {},
      isMainUser: true,
      // selected: 0,
      numBorder: 0,
      // isVisible: true,
      myMenu: {},
      myCommon: {},
      // dbSideData: {},

      // カラー設定 13 Line
      isHovered: false,
      isInitCalorSet: false,
      // buttonColorBasic: '',
      // buttonColorMenuBar: '',
      buttonBarRGB: '',
      buttonHeaderRGB: '',
      buttonColorBasicSet: '',
      buttonColorMenu: '',
      buttonColorReg: '',
      buttonColorEdit: '',
      buttonColorDel: '',
      buttonColorCancel: '',

      // myStore 用 start
      myIndex: {
        indexGroup: -1,
        indexPage: 0,
        pageTemplate: 'home',
        pageNo: 0,
      },
      // myStore 用 end

      nowIsSideMenu: true,
    }
  },

  head() {
    return {
      // titleTemplate: '',
      // title: 'index',
      title: this.myCommon.tabTitle,
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',

          // ブラウザのタイトルTabのicon
          href: this.myCommon.tabIcon,
          // href: '/logo-yad-s-waku2.ico',
          // href: '/building-regular.svg',
          // href: '/icon-run.svg'
          // href: 'https://firebasestorage.googleapis.com/v0/b/hi-223af.appspot.com/o/icon-run.svg?alt=media&token=6f6172d8-5aff-4450-80b5-bd6410eaadc3'
        },
      ],
    }
  },

  // computedは、値が変わるとその値に依存しているすべてのバインディングが更新される
  computed: {
    isLogin() {
      return this.$store.getters['user/isLogin']
    },

    dbHeaders() {
      // console.log('::::::::::: dateTime in dbHeaders: ' + Date())
      // 下記の storeheader は store/storeheader.js のファイル名

      // sort しない場合
      // return this.$store.state.storeheader.dbHeaders

      // sort する場合(storeheader.jsの最後でソートキーを指定)
      // return this.$store.getters['storeheader/orderdDbHeaders']
      return this.$store.getters['storeheader/getDbHeadersById']('menu')
    },

    // Vuex からデータ取得 : ボタンの枠線やDoropdownの選択箇所を反転に利用
    getMenuIndex() {
      return this.$store.getters['myStore/getMenuIndex']
    },

    // Menu Group の全件検索
    dbGroups() {
      // const temp = this.$store.getters['storemenu/getGroups']
      // console.log('dbGroups-1 --- dbGroups: ', temp)
      return this.$store.getters['storemenu/getGroups']
    },

    // idで指定したMenu Groupの Itemを取得
    // dbItems(id) {
    // dbItems() {
    //   const temp = this.$store.getters['storemenu/getItems']
    //   console.log('dbItems-1 --- dbItems: ', temp)
    //   return this.$store.getters['storemenu/getItems']
    // },

    dbCommon() {
      return this.$store.getters['commonDB/getCommonById']('common')
    },

    dbCommonUsers() {
      return this.$store.getters['commonDB/getCommonById']('users')
    },

    getPageList() {
      return this.$store.getters['myStore/getPageList']
    },

    getIsSideMenu() {
      return this.$store.getters['storeside/getSideById']('useSideMenu')
    },

    getSideMenus() {
      return this.$store.getters['storeside/getSideMenus']
    },
  },

  // watch は、値が変わるとその値に依存しているすべてのバインディングが更新される
  // computed との違いは return が不要など、
  // watch: {
  // },

  // created は画面を開いたとき呼ばれる。
  created() {
    // 以下の 'storeheader/init' は利用していないかも？
    this.$store.dispatch('storeheader/init')

    this.$store.dispatch('storemenu/init')
    this.$store.dispatch('commonDB/init')
    this.$store.dispatch('storeside/init')
  },

  // マウント後のフックが呼び出される
  mounted() {
    // // 以下は消すな： ユーザ認証 || Auth UI を初期化
    // const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth())
    // console.log('ui: ', ui)

    // // ログインを実行し、Authenticationにユーザがなければ新規登録
    // ui.start('#firebaseui-auth-container', uiConfig)

    // // 以下は消すな： 現在ログインしているユーザーを取得
    // firebase.auth().onAuthStateChanged((user) => {
    //   // if (user !== null) {
    //   if (user) {
    //     // console.log('2-1 ++++++++++++ user: ', user)
    //     // ログイン情報をFire
    //     this.$store.dispatch('user/login', user)
    //     this.$nuxt.$emit('loginuser', user)

    //     // ページ遷移
    //     // this.$router.push('/home')
    //   }
    // })

    // loginuser名の設定
    this.$nuxt.$on('loginuser', (loginUser) => {
      this.loginUser = loginUser
      // console.log('1-1 loginUser ------ in mounte: ' + JSON.stringify(this.loginUser))
      // console.log('1-2 loginUser.displayName ------ in mounte: ' + this.loginUser.displayName)
      // console.log('1-3 loginUser.email ------ in mounte: ' + this.loginUser.email)
      // console.log('1-4 loginUser.photoURL ------ in mounte: ' + this.loginUser.photoURL)
    })

    // 以下の set は利用していないかも？
    this.$store.dispatch('myStore/set', this.myIndex)
  },

  // beforeUpdate() {
  updated() {
    // const pageLists = this.getPageList
    // console.log('myHeader-updated-1: ', pageLists)
    // if (pageLists.length === 0) {
    // console.log('myHeader-updated-2: ', pageLists)
    // this.setGroups()
    // this.setPageList()
    // }

    // console.log('0-1 --- buttonColorMenu: ', this.buttonColorMenu)
    if (!this.isInitCalorSet) {
      if (this.myCommon.buttonColorMenu !== undefined) {
        // カラーデータ設定
        // this.buttonColorMenu = 'background-color: ' + this.myCommon.buttonColorMenu1 + ';'
        // console.log('0-2 --- buttonColorMenu: ', this.myCommon.buttonColorMenu)
        this.buttonColorMenu = this.myCommon.buttonColorMenu
        // console.log('0-3 --- buttonColorMenu: ', this.buttonColorMenu)
        this.buttonColorReg = this.myCommon.buttonColorReg
        this.buttonColorEdit = this.myCommon.buttonColorEdit
        this.buttonColorDel = this.myCommon.buttonColorDel
        this.buttonColorCancel = this.myCommon.buttonColorCancel
        this.isInitCalorSet = !this.isInitCalorSet
      }
    }
  },
  methods: {
    // testDispInfo() {
    //   // console.log('testDispInfo-1 --- テストです。')
    // },

    logout() {
      this.$store.dispatch('user/logout')
      const firebase = require('firebase')
      firebase
        .auth()
        .signOut()
        .then(() => {
          // console.log('ログアウトしました')
        })
    },

    // reLogin() {
    //   this.$refs.reLoginModal.show()
    // },

    // ログインユーザが mainUser であったら、this.mainUser = true
    myCommonUsers() {
      try {
        const usersData = this.dbCommonUsers
        if (usersData !== undefined) {
          // console.log('20201120-1 ------: ', usersData)
          // console.log('20201120-2 ------: ', this.loginUser.email)
          const resultSearch = usersData.mainUser.indexOf(this.loginUser.email)
          // console.log('20201120-3 ------ Main User 検索結果： ', resultSearch)
          if (resultSearch > -1) {
            this.isMainUser = false
          }
        }
      } catch (error) {
        // console.log('error ****** in myCommonUsers(): ', error)
      }
    },

    // Vuex Store への保存
    setMenuIndex(indexGroup, indexPage, myPage) {
      this.myIndex.indexGroup = indexGroup
      this.myIndex.indexPage = indexPage
      this.myIndex.pageTemplate = myPage.pageTemplate
      this.myIndex.pageNo = myPage.pageNo
      // console.log('setMenuIndex-1 --- myIndex: ', this.myIndex)
      this.$store.dispatch('myStore/set', this.myIndex)
    },

    // 以下の setPageList はソートしたデータでは無いため未使用
    // ①dbMenus と ②dbSideMenus のデータから pageLists を作成して、③myStore へ保存
    // setPageList() {
    //   console.log('myHeader- setPageList-0 --- getPageLists')
    //   let templateNo = ''
    //   let pageName = ''
    //   let pageTemplate = ''
    //   let pageNo = ''
    //   // let indexGroup2 = ''
    //   // let indexPage2 = ''

    //   const pageLists = []

    //   // ① dbMenus から pageLists を作成
    //   this.$store
    //     .dispatch('storemenu/getMenus')
    //     .then((value) => {
    //       console.log('myHeader- setPageList-1 --- getPageLists: ', value)

    //       // 取得した menuデータの処理 ------- start
    //       value.forEach((dbGroup, indexGroup) => {
    //         // console.log('myHeader- setPageList-2 --- dbGroup: ', dbGroup)
    //         dbGroup.myMenu.myPage.forEach((thisPage, indexPage) => {
    //           // console.log('myHeader- setPageList-3 --- thisPage: ', thisPage)
    //           templateNo = thisPage.pageTemplate + thisPage.pageNo
    //           pageName = thisPage.pageName
    //           pageTemplate = thisPage.pageTemplate
    //           pageNo = thisPage.pageNo
    //           // pageLists.push({ templateNo, indexGroup, indexPage, pageName })
    //           pageLists.push({ templateNo, indexGroup, indexPage, pageName, pageTemplate, pageNo })
    //         })
    //       })
    //       console.log('myHeader- setPageList-4 --- getPageLists: ', pageLists)
    //       // 取得した menuデータの処理 ------- end
    //     })
    //     .catch((error) => {
    //       console.log('mounted-2 *** error *** getMenus: ', error)
    //       alert('mounted-2 *** error *** getMenus: ', error)
    //     })

    //   // ②dbSideMenus のデータから pageLists を作成
    //   if (this.getSideMenus !== 'undefined') {
    //     this.getSideMenus.forEach((sideMenu, indexGroup2) => {
    //       console.log('myHeader- setPageList-5 --- thisPage: ', sideMenu)
    //       sideMenu.myMenu.myPage.forEach((thisPage, indexPage) => {
    //         console.log('myHeader- setPageList-6 --- thisPage: ', thisPage)
    //         // pageLists.push(thisPage.pageTemplate + '-' + thisPage.linkUrl)
    //         templateNo = thisPage.pageTemplate + thisPage.pageNo
    //         pageName = thisPage.pageName
    //         pageTemplate = thisPage.pageTemplate
    //         pageNo = thisPage.pageNo
    //         const indexGroup = 'side' + indexGroup2
    //         // pageLists.push({ templateNo, indexGroup, indexPage, pageName })
    //         pageLists.push({ templateNo, indexGroup, indexPage, pageName, pageTemplate, pageNo })
    //       })
    //     })
    //   }

    //   // ③ 作成した pageLists を myStore へ保存
    //   console.log('setpageList-1 保存直前-1: ', pageLists)
    //   this.$store.dispatch('myStore/setPageList', pageLists)
    // },

    // ①dbMenus と ②dbSideMenus のデータから pageLists を作成して、③myStore へ保存
    setGroups() {
      // <p>{{ setGroups2() }}</p> の場合に上記の戻り値  [object promise]  が表示されるため、
      // <p>{{ setGroups() }}</p> として、javascript から<p>{{ setGroups2() }}</p> を呼ぶ
      this.setGroups2()
    },

    async setGroups2() {
      let templateNo = ''
      let pageName = ''
      let pageTemplate = ''
      let pageNo = ''
      let linkUrl = ''
      // 以下の pageLists を使いまわしたい場合は、exportのdata()で定義すること。
      const pageLists = []

      // ① dbMenus から pageLists を作成
      // const getPageLists = this.dbGroups

      // console.log('myHeader- setGroups-1 --- getPageLists: ', getPageLists)

      // 取得した menuデータの処理 ------- start
      // getPageLists.forEach((dbGroup, indexGroup) => {
      await this.dbGroups.forEach((dbGroup, indexGroup) => {
        // console.log('myHeader- setGroups-2 --- dbGroup: ', dbGroup)
        dbGroup.myMenu.myPage.forEach((thisPage, indexPage) => {
          // console.log('myHeader- setGroups-3 --- thisPage: ', thisPage)
          templateNo = thisPage.pageTemplate + thisPage.pageNo
          pageName = thisPage.pageName
          pageTemplate = thisPage.pageTemplate
          pageNo = thisPage.pageNo
          // pageLists.push({ templateNo, indexGroup, indexPage, pageName })
          pageLists.push({ templateNo, indexGroup, indexPage, pageName, pageTemplate, pageNo })
        })
      })

      // ②dbSideMenus のデータから pageLists を作成
      // const getSideLists = this.getSideMenus

      // console.log('setGroups-4 --- getSideLists: ', getSideLists)
      // if (getSideLists.length !== 0) {
      // getSideLists.forEach((sideMenu, indexGroup2) => {
      await this.getSideMenus.forEach((sideMenu, indexGroup2) => {
        // console.log('myHeader- setGroups-5 --- thisPage: ', sideMenu)
        sideMenu.myMenu.myPage.forEach((thisPage, indexPage) => {
          // console.log('myHeader- setGroups-6 --- thisPage: ', thisPage)
          // pageLists.push(thisPage.pageTemplate + '-' + thisPage.linkUrl)
          templateNo = thisPage.pageTemplate + thisPage.pageNo
          pageName = thisPage.pageName
          pageTemplate = thisPage.pageTemplate
          pageNo = thisPage.pageNo
          const indexGroup = 'side' + indexGroup2
          linkUrl = thisPage.linkUrl
          // pageLists.push({ templateNo, indexGroup, indexPage, pageName })
          pageLists.push({ templateNo, indexGroup, indexPage, pageName, pageTemplate, pageNo, linkUrl })
        })
      })
      // }

      // ③ 作成した pageLists を myStore へ保存
      // console.log('myHeader- setGroups-7 --- pageLists: ', pageLists)
      // console.log('myHeader- setGroups-7 保存直前: ', pageLists)
      // await this.$store.dispatch('myStore/setPageList', pageLists)
      this.$store.dispatch('myStore/setPageList', pageLists)
      // 取得した menuデータの処理 ------- end
    },

    // カラー設定 1 Menu
    buttonColorMenuHover(hovered) {
      this.isHovered = hovered
      if (this.isHovered === true) {
        this.buttonColorMenu = 'background-color: ' + this.myCommon.buttonColorMenu2 + ';'
        // console.log('2-1 --- buttonColorMenu: ', this.buttonColorMenu)
      } else {
        this.buttonColorMenu = 'background-color: ' + this.myCommon.buttonColorMenu1 + ';'
        // console.log('2-2 --- buttonColorMenu: ', this.buttonColorMenu)
      }
    },
    // カラー設定 2 Reg
    buttonColorRegHover(hovered) {
      this.isHovered = hovered

      if (this.isHovered === true) {
        this.buttonColorReg = 'background-color: ' + this.myCommon.buttonColorReg2 + ';'
      } else {
        this.buttonColorReg = 'background-color: ' + this.myCommon.buttonColorReg1 + ';'
      }
    },
    // カラー設定 3 Edit
    buttonColorEditHover(hovered) {
      this.isHovered = hovered

      if (this.isHovered === true) {
        this.buttonColorEdit = 'background-color: ' + this.myCommon.buttonColorEdit2 + ';'
      } else {
        this.buttonColorEdit = 'background-color: ' + this.myCommon.buttonColorEdit1 + ';'
      }
    },
    // カラー設定 4 Del
    buttonColorDelHover(hovered) {
      this.isHovered = hovered

      if (this.isHovered === true) {
        this.buttonColorDel = 'background-color: ' + this.myCommon.buttonColorDel2 + ';'
      } else {
        this.buttonColorDel = 'background-color: ' + this.myCommon.buttonColorDel1 + ';'
      }
    },
    // カラー設定 5 Cancel
    buttonColorCancelHover(hovered) {
      this.isHovered = hovered

      if (this.isHovered === true) {
        this.buttonColorCancel = 'background-color: ' + this.myCommon.buttonColorCancel2 + ';'
      } else {
        this.buttonColorCancel = 'background-color: ' + this.myCommon.buttonColorCancel1 + ';'
      }
    },

    isSelectedItem(indexGroup, indexPage) {
      // console.log('isSelectedItem-1 --- indexGroup: ', indexGroup)
      // console.log('isSelectedItem-2 --- this.getMenuIndex.indexGroup: ', this.getMenuIndex.indexGroup)
      // console.log('i === selected : ', i, ' === ', this.selected)
      if (indexGroup === this.getMenuIndex.indexGroup) {
        if (indexPage === this.getMenuIndex.indexPage) {
          return true
        } else {
          return false
        }
      }
    },

    selMenu(indexGroup, indexPage, pageTemplate, pageNo) {
      const myPage = {
        indexGroup,
        indexPage,
        pageTemplate,
        pageNo,
      }
      this.setMenuIndex(indexGroup, indexPage, myPage)
    },

    // isBorderColor = is Border Color Of Selected Button
    isBorderColor(index, myBorder) {
      try {
        // console.log('isBorderColor-1 --- index: ', index)
        if (index === this.getMenuIndex.indexGroup) {
          // console.log('isBorderColor-3 --- myBorder: ', myBorder)
          // 以下の myBorder は色の指定（例：pink）
          return 'border rounded-lg border-' + myBorder
        }
      } catch (error) {
        // console.log('error ****** in isBorderColor(): ', error)
      }
    },

    onOver(num) {
      // console.log('noOver-1 --- num: ', num)
      // console.log('noOver-2 --- refs: ', this.$refs)
      // console.log('noOver-0 --- refs.dropdown0: ', this.$refs.dropdown0)
      // console.log('noOver-1 --- refs.dropdown1: ', this.$refs.dropdown1)
      // console.log('noOver-101 --- refs.dropdown101: ', this.$refs.dropdown101)

      if (num < 100) {
        this.$refs['dropdown' + num][0].visible = true
      } else {
        this.$refs['dropdown' + num].visible = true
      }
    },

    onLeave(num) {
      // console.log('onLeave-1 --- num: ', num)

      if (num < 100) {
        this.$refs['dropdown' + num][0].visible = false
      } else {
        this.$refs['dropdown' + num].visible = false
      }
    },

    // メニューデータをFireStoreからロードしてセット
    myMenuSet() {
      try {
        this.myMenu = this.dbHeaders.myMenu
        this.myCommon = this.dbCommon.myCommon
        // this.dbSideData = this.getIsSideMenu.myMenu.myPage
        // console.log('myMenuSet-1 --- dbSideData.chkSideMenu: ', this.dbSideData.chkSideMenu)
        this.$nuxt.$emit('mymenu', this.myMenu)
        this.$nuxt.$emit('mycommon', this.myCommon)
        // console.log('Ok  =++++++++++++++ in myMenuSet(): ')
      } catch (error) {
        // alert('***** error ***** in myMenuSet(): ' + error)
        // console.log('***** error ***** in myMenuSet(): ' + error)
      }

      // Side Menu を利用する/しないの 情報を get
      this.setNowIsSideMenu()
    },

    // Side Menu を利用する/しないの 情報を set
    setNowIsSideMenu() {
      // const getData = this.$store.getters['storeside/getSideById']('useSideMenu')
      const getData = this.getIsSideMenu
      // console.log('setNowIsSideMenu-1 --- getData: ', getData)
      if (getData !== undefined) {
        this.nowIsSideMenu = getData.page
        this.$nuxt.$emit('nowissidemenu', getData.page)
        // console.log('setNowIsSideMenu-2 --- nowIsSideMenu: ', this.nowIsSideMenu)
      }
    },

    // 以下の add は通常、未使用かも？ ←たぶん初期登録で利用
    add() {
      // 下記の storeheader は store/storeheader.js のファイル名
      // this.$store.dispatch('storeheader/add', { titelName: this.myMenu.titleName, mainText: this.myMenu.mainText })
      this.$store
        .dispatch('storeheader/add', this.myMenu)
        .then((value) => {
          // console.log('3-1-OK +++++++++ in home-(): ', value)
          if (value === 'regOK') {
            this.toastFileUpdate('登録', '登録しました。')
          } else {
            alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
          }
        })
        .catch((error) => {
          alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？: ', error)
          // console.log('3-1-NG ***** error ***** in home-(): ', error)
        })
    },

    // 以下の set は通常、未使用かも？ ←たぶん初期登録で利用
    set() {
      // 下記の storeheader は store/storeheader.js のファイル名
      this.$store.dispatch('storeheader/set', this.myMenu)
    },
  },
}
</script>

<style scoped>
/* .visible {
  visibility: visible !important;
}
.invisible {
  visibility: hidden !important;
} */

/* .btn {
  font-weight: 700;
} */

/* 大デバイス（デスクトップ, 992 以上） */
@media (min-width: 992px) {
  .myTitle {
    font-size: 1.4rem;
  }
}
/* 中デバイス（タブレット, 992px 未満） */
@media (max-width: 991.98px) {
  .myTitle {
    font-size: 1.2rem;
  }
}
/* 小デバイス（横向きモバイル, 768px 未満） */
@media (max-width: 767.98px) {
  .myTitle {
    font-size: 1rem;
  }
}
/* @include media-breakpoint-up(sm) { */
/* 極小デバイス（縦向きモバイル, 576px 未満） */
@media (max-width: 575.98px) {
  .myTitle {
    font-size: 0.4;
  }
}
</style>
