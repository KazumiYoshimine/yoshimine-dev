<template>
  <div class="container-fluid">
    <!-- <div v-for="dbSide in dbSides" :key="dbSide.id" class="m-0 p-0"> -->
    <!-- <b-list-group v-for="(sideMenu, indexGroup) in getSideMenus" :key="sideMenu.id" class="m-0 p-2"> -->
    <!-- <div v-for="(sideMenu, indexGroup) in getSideMenus" :key="sideMenu.id" class="m-0 p-0"> -->
    <!-- <div v-for="sideMenu in getSideMenus" :key="sideMenu.id" class="m-0 p-0"> -->
    <!-- <h5 class="text-light bg-info text-center m-0 p-1">{{ dbSide.myData.v11 }}</h5> -->
    <h5 class="text-light text-center m-0 mb-2 p-2" :style="myCommon.buttonColorBasicSet">{{ pageName }}</h5>

    <div class="row no-gutters">
      <div class="col-12 m-1 mt3-1 p-1">
        <!-- <b-embed type="iframe" aspect="16by9" :src="dbSide.myData.v11a" allowfullscreen></b-embed> -->
        <b-embed type="iframe" aspect="16by9" :src="linkUrl" allowfullscreen></b-embed>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      templateNo: 'video' + this.$route.params.general,
      pageName: 'aaaaa',
      linkUrl: 'bbbbb',
      myCommon: {},
    }
  },
  // computedは、値が変わるとその値に依存しているすべてのバインディングが更新される
  computed: {
    // dbSides() {
    //   return this.$store.getters['storeside/orderdDbSides']
    // },

    // getMenuIndex() {
    //   return this.$store.getters['myStore/getMenuIndex']
    // },

    getPageList() {
      return this.$store.getters['myStore/getPageList']
    },

    getSideMenus() {
      // const aaa = this.$store.getters['storeside/getSideMenus']
      // console.log('getSideMenus-1 --- getSideMenus: ', aaa)
      return this.$store.getters['storeside/getSideMenus']
    },
  },

  // created は画面を開いたとき呼ばれる。
  created() {
    this.$store.dispatch('storeside/init')
    // this.$store.dispatch('commonDB/init')
  },

  // elementへのマウントが行われた後処理される。
  // SSR(Firebase等)では使えない。
  mounted() {
    // this.setMenuIndex(93, 0, 'video', 0)

    // this.inputGroup2 = JSON.parse(JSON.stringify(this.inputGroup))
    // console.log('mounted-1 --- inputGroup2: ', this.inputGroup2)

    this.$nuxt.$on('mycommon', (myCommon) => {
      this.myCommon = myCommon
    })

    // Side Menu を利用する/しないの 情報を get
    // this.setNowIsSideMenu()
  },

  // ④ updated 画面が更新された後、呼び出される。
  // SSR(Firebase等)では使えない。
  updated() {
    this.getMenuIndex()
    // // this.selnum(111)
    // // Header メニューButtonの枠線情報を myStore へ保存 ------- start
    // // console.log('updated-1 --- 現在のURLのファイル名: ', location.pathname.replace(/\//g, ''))
    // const keyword = location.pathname.replace(/\//g, '')
    // const pageList = this.getPageList
    // // console.log('updated-2 --- pageList: ', pageList)
    // const findResult = pageList.findIndex((key) => key.templateNo === keyword)
    // // console.log('updated-3 --- findResult: ', findResult)

    // if (findResult !== 'undefined') {
    //   if (findResult !== -1) {
    //     // this.setMenuIndex(pageList[findResult].indexGroup, pageList[findResult].indexPage)
    //     this.setMenuIndex(pageList[findResult].indexGroup, pageList[findResult].indexPage, pageList[findResult].pageTemplate, pageList[findResult].pageNo)

    //     // ページの最上部で表示するページ名をセット
    //     this.pageName = pageList[findResult].pageName
    //     // console.log('updated-0-1 --- pageName: ', this.pageName)
    //   }
    // }
    // // Header メニューButtonの枠線情報を myStore へ保存 ------- end
  },

  // ⑨ methods は呼び出される度に実行
  // データが変更された時、反映したくない場合はmethodsを利用
  methods: {
    // selnum(num) {
    //   // this.selected = num
    //   // console.log('header selnum selected: ' + num)
    //   this.$nuxt.$emit('selnum', num)
    // },

    // Vuex Store への保存
    setMenuIndex(indexGroup, indexPage, pageTemplate, pageNo) {
      const myIndex = {
        indexGroup,
        indexPage,
        pageTemplate,
        pageNo,
      }

      // console.log('setMenuIndex-1 --- myIndex: ', this.myIndex)
      this.$store.dispatch('myStore/set', myIndex)
    },

    getMenuIndex() {
      // Header メニューButtonの枠線情報を myStore へ保存 ------- start
      const keyword = location.pathname.replace(/\//g, '')
      // console.log('getMenuIndex-1 --- 現在のURLのファイル名: ', location.pathname.replace(/\//g, ''))
      const pageList = this.getPageList
      // console.log('getMenuIndex-2 --- pageList: ', pageList)
      const findResult = pageList.findIndex((key) => key.templateNo === keyword)
      // console.log('getMenuIndex-3 --- findResult: ', findResult)

      if (findResult !== 'undefined') {
        if (findResult !== -1) {
          // this.setMenuIndex(pageList[findResult].indexGroup, pageList[findResult].indexPage)
          this.setMenuIndex(pageList[findResult].indexGroup, pageList[findResult].indexPage, pageList[findResult].pageTemplate, pageList[findResult].pageNo)

          // ページの最上部で表示するページ名をセット
          this.pageName = pageList[findResult].pageName
          this.linkUrl = pageList[findResult].linkUrl
          // console.log('getMenuIndex-4 --- pageName: ', this.pageName)
        }
      }
      // Header メニューButtonの枠線情報を myStore へ保存 ------- end
    },
  },
}
</script>

<style scoped>
.no-gutters {
  margin: 0;
  padding: 0;
}
</style>
