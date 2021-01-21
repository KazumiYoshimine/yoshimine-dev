<template>
  <div class="container-fluid m-0 p-0">
    <br />
    <p class="m-0 mt-3 p-0">&nbsp;</p>

    <!-- サイトマップ start -->
    <div v-show="showSitemap" class="m-0 p-0">
      <div class="row m-0 p-0 pt-3 d-flex justify-content-between" style="background-color: black">
        <h5 class="m-0 mx-2 text-white">サイトマップ</h5>
        <!-- <div class="bg-white"> -->
        <!-- <b-button to="/home" :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" :class="isBorderColor(-1, myCommon.myBorder)" class="m-1 p-1" @click="selMenu(-1, 0, 'home', 0)">{{ myCommon.mHome1 }}</b-button> -->
        <b-button to="/home" :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" class="m-0 mr-2 p-1 bg-white" :class="isBorderColor(-1, myCommon2.myBorder)" @click="selMenu(-1, 0)">{{ myCommon.mHome1 }}</b-button>
        <!-- <b-button :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" class="m-1 p-1" @click="testDispInfo()">test-dispInfo</b-button> -->
        <!-- </div> -->

        <!-- 以下の１行は消すな！ -->
        <!-- <b-button :size="myCommon.selectedBtnSize" to="/notCreated" :variant="myCommon.selectedMenuBtnColor" class="m-0 mr-3 px-1 py-0">このウェブサイトについて</b-button> -->
      </div>

      <div class="row m-0 p-0" style="background-color: black">
        <!-- Group menu ++++++++++ start -->
        <div v-for="(dbGroup, indexGroup) in dbGroups" :key="dbGroup.id" class="col-sm-6 col-md-4 m-0 p-2">
          <div v-show="dbGroup.myMenu.myGroup.isGroup" class="m-0 p-0">
            <b-list-group>
              <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">{{ dbGroup.myMenu.myGroup.groupName }}</b-list-group-item>
              <div v-for="(myPage, indexPage) in dbGroup.myMenu.myPage" :key="myPage.id">
                <div v-show="myPage.isPage">
                  <b-list-group-item :to="'/' + myPage.pageTemplate + '/' + myPage.pageNo" class="m-0 p-0 pl-1 bg-mycolor" :active="isSelectedItem(indexGroup, indexPage)" @click="setMenuIndex(indexGroup, indexPage)">{{ myPage.pageName }}</b-list-group-item>
                </div>
              </div>
            </b-list-group>
          </div>
        </div>
        <!-- Group menu ++++++++++ end -->

        <!-- Side menu ++++++++++ start -->
        <div v-show="nowIsSideMenu" class="col-12 row m-0 p-0">
          <!-- <div v-for="(dbGroup, indexGroup) in dbGroups" :key="dbGroup.id" class="col-sm-6 col-md-4 m-0 p-2"> -->
          <div v-for="(sideMenu, indexGroup) in getSideMenus" :key="sideMenu.id" class="col-sm-6 col-md-4 m-0 p-2">
            <!-- <div v-show="dbGroup.myMenu.myGroup.isGroup" class="m-0 p-0"> -->
            <div v-show="sideMenu.myMenu.myGroup.isGroup" class="m-0 p-0">
              <b-list-group>
                <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">{{ sideMenu.myMenu.myGroup.groupName }}</b-list-group-item>
                <div v-for="(myPage, indexPage) in sideMenu.myMenu.myPage" :key="myPage.id">
                  <div v-show="myPage.isPage">
                    <!-- ================ リンク集 ==== start -->
                    <div v-if="myPage.pageTemplate === 'link'" class="m-0 p-0">
                      <!-- <b-list-group-item :to="'/' + myPage.pageTemplate + '/' + myPage.pageNo" class="m-0 p-0 pl-1 bg-mycolor" :active="isSelectedItem(indexGroup, indexPage)" @click="setMenuIndex(indexGroup, indexPage)">{{ myPage.pageName }}</b-list-group-item> -->
                      <b-list-group-item :href="myPage.linkUrl" target="_blank" class="m-0 p-0 pl-1" :active="isSelectedItem('side' + indexGroup, indexPage)" @click="setMenuIndex('side' + indexGroup, indexPage, myPage)">{{ myPage.pageName }}</b-list-group-item>
                    </div>
                    <!-- ================ リンク集 ==== end -->

                    <!-- ================ PR動画 start ==== -->
                    <div v-else class="m-0 p-0">
                      <!-- <b-list-group-item :to="'/' + myPage.pageTemplate + '/' + myPage.pageNo" class="m-0 p-0 pl-1 bg-mycolor" :active="isSelectedItem(indexGroup, indexPage)" @click="setMenuIndex(indexGroup, indexPage)">{{ myPage.pageName }}</b-list-group-item> -->
                      <b-list-group-item :to="'/' + myPage.pageTemplate + '/' + myPage.pageNo" class="m-0 p-0 pl-1" :active="isSelectedItem('side' + indexGroup, indexPage)" @click="setMenuIndex('side' + indexGroup, indexPage, myPage)">{{ myPage.pageName }}</b-list-group-item>
                    </div>
                    <!-- ================ PR動画 end ==== -->
                  </div>
                </div>
              </b-list-group>
            </div>
          </div>
        </div>
        <!-- Side menu ++++++++++ end -->
      </div>

      <!-- Side MENU start -->
      <!-- Side MENU end -->
    </div>
    <!-- サイトマップ end -->

    <!-- フッター -->
    <!-- <div class="col-12 mt-0 mb-0 p-1 fixed-bottom" style="background-color:rgba(130,130,130,0.95);"> -->
    <div class="row m-0 p-1" style="background-color: rgba(130, 130, 130, 0.95)">
      <!-- <div class="m-0 p-0 d-flex justify-content-center"> -->
      <!-- 文字サイズ変更 start -->
      <!-- <div class="col-sm-12 col-md-6 col-lg-4 m-0 p-0"> -->
      <!-- <div class="col-md-6 col-lg-4 m-0 p-0"> -->
      <div class="col-sm-6 col-md-4 m-0 p-0">
        <!-- <div class="col-sm-4 m-0 p-0"> -->
        <b-input-group prepend="文字サイズ" class="m-0 p-0">
          <b-input-group-append class="m-0 p-0">
            <b-button :size="myCommon.selectedBtnSize" class="m-0 p-1 px-2 border" :variant="myCommon.selectedMenuBtnColor" @click="fontSizePlus()">＋</b-button>
            <h5 class="m-0 p-1 text-white border bg-a33-slategray">{{ setFontSize }}</h5>
            <b-button :size="myCommon.selectedBtnSize" class="m-0 p-1 px-2 border" :variant="myCommon.selectedMenuBtnColor" @click="fontSizeMinus()">−</b-button>
          </b-input-group-append>
        </b-input-group>
      </div>

      <!-- コピーライト -->
      <div class="col-sm-6 col-md-4 text-white copyright-box m-0 mt-2 d-flex justify-content-center">&copy; 2020 {{ topTitle }}</div>

      <!-- サイトマップ 表示/非表示 start -->
      <!-- <div class="col-sm-12 col-md-6 col-lg-4 m-0 p-0"> -->
      <!-- <div class="col-md-6 col-lg-4 m-0 p-0"> -->
      <div class="col-sm-6 col-md-4 m-0 p-0 pr-1">
        <!-- <div class="col-sm-4 m-0 p-0"> -->
        <!-- <b-input-group class="m-1 p-0" prepend="サイトマップ 表示/非表示" variant="my-midnightblue"> -->
        <b-input-group class="m-0 p-0 d-flex justify-content-end" prepend="サイトマップ表示">
          <b-input-group-prepend is-text>
            <input type="checkbox" :checked="showSitemap" @change="toggleChk()" />
          </b-input-group-prepend>
          <!-- <b-form-input v-model="editCategory.tab1Name"></b-form-input> -->
        </b-input-group>
      </div>
      <!-- サイトマップ 表示/非表示 end -->
    </div>
    <p class="mb-3"></p>
    <!-- </div> -->
    <!-- <b-button :size="myCommon.selectedBtnSize" variant="primary" class="m-0 ml-2 px-1 py-0" @click="test1()">test1</b-button> -->
    <p>{{ myMenuSet() }}</p>
  </div>
</template>

<script>
// import myHeader from '~/components/myHeader.vue'

export default {
  data() {
    return {
      showSitemap: false,
      selected: 0,
      numBorder: 0,
      myData: {},
      mySide: {},
      topTitle: 'ホームページ名',
      // home1: 'home',
      myCommon: {},
      myCommon2: {},
      // dbSideData: {},
      // myFontSize: 0,
      fontSizeFlg: true,
      setFontSize: 0,

      // myStore 用 start
      myIndex: {
        indexGroup: -1,
        indexPage: 0,
      },
      // myStore 用 end
      nowIsSideMenu: true,
    }
  },
  // computedは、値が変わるとその値に依存しているすべてのバインディングが更新される
  computed: {
    dbCommon() {
      // console.log('myFooter.vue-computed-1 --- dbCommon: 実行されました。 ')
      return this.$store.getters['commonDB/getCommonById']('common')
    },

    // Menu Group の全件検索
    dbGroups() {
      // const temp = this.$store.getters['storemenu/getGroups']
      // console.log('dbGroups-1 --- dbGroups: ', temp)
      return this.$store.getters['storemenu/getGroups']
    },

    // Vuex からデータ取得 : ボタンの枠線やDoropdownの選択箇所を反転に利用
    getMenuIndex() {
      return this.$store.getters['myStore/getMenuIndex']
    },

    getIsSideMenu() {
      return this.$store.getters['storeside/getSideById']('useSideMenu')
    },

    getSideMenus() {
      return this.$store.getters['storeside/getSideMenus']
    },
    // dbSides() {
    //   return this.$store.getters['storeside/getSideById']('side')
    // },
  },

  mounted() {
    // this.$nuxt.$on('selnum', (selected) => {
    //   this.selected = selected
    // })

    this.$nuxt.$on('mydata', (myData) => {
      this.myData = myData
    })

    this.$nuxt.$on('nowissidemenu', (nowIsSideMenu) => {
      this.nowIsSideMenu = nowIsSideMenu
    })

    this.$nuxt.$on('mycommon', (myCommon) => {
      this.myCommon = myCommon
    })
  },

  created() {
    // 下記の commonDB は store/commonDB.js のファイル名
    this.$store.dispatch('commonDB/init')
  },

  updated() {
    try {
      this.myCommon2 = this.dbCommon.myCommon
    } catch (error) {
      // alert('***** error ***** in updated(): ', error)
      // console.log('***** error ***** in updated(): ', error)
    }

    if (this.myCommon.bodyFontSize !== undefined) {
      // console.log('0 ------------- setFontSize: ', this.setFontSize)
      if (this.fontSizeFlg) {
        try {
          this.setFontSize = this.myCommon.bodyFontSize
          // console.log('1 ------------- setFontSize: ', this.setFontSize)
          document.body.style.fontSize = Number(this.setFontSize) / 10 + 'rem'
          this.fontSizeFlg = false
        } catch (error) {
          // alert('テスト in updated(): ' + error)
          // console.log('テスト in updated(): ' + error)
        }
      }
    }
  },

  methods: {
    testDispInfo() {
      // const temp = this.getMenuIndex
    },

    // test1() {
    //   this.$nuxt.$emit('selnumside', '21')
    // },

    // ----------------------------------------
    // 文字サイズ変更 +
    fontSizePlus() {
      // console.log('2-1 ------------- setFontSize: ', this.setFontSize)
      if (this.setFontSize < 20) {
        this.setFontSize += 1
        // console.log('2-2 ------------- setFontSize: ', this.setFontSize)
        document.body.style.fontSize = Number(this.setFontSize) / 10 + 'rem'
      } else {
        this.$swal({
          title: 'これ以上大きくできません。',
          // text: 'これ以上大きくできません。',
          icon: 'warning',
          showCancelButton: false,
          confirmButtonText: '確認しました。',
          // cancelButtonText: 'キャンセル',
          // focusCancel: true
        }).then((result) => {
          // if (result.value) {
          // }
        })
      }
    },

    // 文字サイズ変更 -
    fontSizeMinus() {
      // console.log('3-1 ------------- setFontSize: ', this.setFontSize)
      if (this.setFontSize > 6) {
        this.setFontSize -= 1
        // console.log('3-2 ------------- setFontSize: ', this.setFontSize)
        document.body.style.fontSize = Number(this.setFontSize) / 10 + 'rem'
      } else {
        this.$swal({
          title: 'これ以上小さくできません。',
          // text: 'これ以上小さくできません。',
          icon: 'warning',
          showCancelButton: false,
          confirmButtonText: '確認しました。',
          // cancelButtonText: 'キャンセル',
          // focusCancel: true
        }).then((result) => {
          // if (result.value) {
          // }
        })
      }
    },
    // ----------------------------------------

    toggleChk() {
      this.showSitemap = !this.showSitemap
    },
    // num を rightside.vue へ渡す
    // selnumSide(num) {
    // this.selected = num
    // console.log('header selnum selected: ' + num)
    // this.$nuxt.$emit('selnumside', num)
    // },
    isBorder(i) {
      this.numBorder = Math.floor(this.selected / 10)
      // console.log('isBorder-tempNum:  ' + tempNum)
      return i === this.numBorder
    },

    // isBorder2(i, myBorder) {
    //   this.numBorder = Math.floor(this.selected / 10)

    //   if (i === this.numBorder) {
    //     return 'border rounded-lg border-' + myBorder
    //   }
    // },

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

    myMenuSet() {
      try {
        this.myCommon2 = this.dbCommon.myCommon
      } catch (error) {
        // alert('***** error ***** in updated(): ', error)
        // console.log('***** error ***** in myMenuSet(): ', error)
      }
    },

    // selnum(num) {
    //   // console.log('header selnum selected: ' + num)
    //   this.$nuxt.$emit('selnum', num)
    // },

    isSelectedItem(indexGroup, indexPage) {
      try {
        if (indexGroup === this.getMenuIndex.indexGroup) {
          if (indexPage === this.getMenuIndex.indexPage) {
            return true
          } else {
            return false
          }
        }
      } catch (error) {
        // console.log('error ****** in isSelectedItem(): ', error)
      }
    },

    selMenu(indexGroup, indexPage) {
      this.setMenuIndex(indexGroup, indexPage)
    },

    // Vuex Store への保存
    setMenuIndex(indexGroup, indexPage) {
      this.myIndex.indexGroup = indexGroup
      this.myIndex.indexPage = indexPage
      // console.log('setMenuIndex-1 --- myStore: ', this.myIndex)
      this.$store.dispatch('myStore/set', this.myIndex)
    },
  },
}
</script>

<style>
/* .my-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
} */
/* .footer { */
/* background-color: #ddd; */
/* } */
</style>
