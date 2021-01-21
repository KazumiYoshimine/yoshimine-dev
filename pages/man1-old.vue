<template>
  <div class="container-fluid no-gutters p-1">
    <div class="row m-0 p-0 bg-dark">
      <div class="col-12 m-0 p-1">
        <h3 class="text-light text-center m-0 p-0">管理： メニュー設定</h3>
        <p class="text-light text-center m-0 p-0">メニューの表示/非表示、および名称を変更できます。</p>
      </div>

      <!-- <div v-for="(dbGroup, indexGroup) in dbGroups" :key="dbGroup.id"> -->
      <div v-for="dbGroup in dbGroups" :key="dbGroup.id">
        <div class="col-md-6 m-0 p-2">
          <!-- list group : start -->
          <b-list-group class="p-0 mt-1">
            <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">Menu Group 1 : {{ myMenu.m1 }}</b-list-group-item>

            <!-- item start -->
            <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
              <div class="col-3 p-1">Group name</div>

              <!-- <div v-for="(item, indexItem) in dbGroup.item" :key="item.id"> -->
              <div v-for="item in dbGroup.item" :key="item.id">
                <div class="col-1 p-0 d-flex justify-content-end">
                  <b-form-checkbox v-model="myMenu2.chkMenu1" class="m-0 p-0"></b-form-checkbox>
                </div>

                <span v-if="myMenu2.chkMenu1" class="col-8 m-0 p-0">
                  <b-form-input v-model="myMenu2.m1" class="m-0 p-0 pl-1"></b-form-input>
                </span>
                <del v-else class="col-8 m-0 p-0">
                  <b-form-input v-model="myMenu2.m1" class="m-0 p-0 pl-1"></b-form-input>
                </del>
              </div>
            </b-input-group>
            <!-- item end -->
          </b-list-group>
          <!-- list group : end -->
        </div>
      </div>

      <!-- ------------------ -->

      <hr class="m-0 p-0 col-12" color="#000000" />
      <div class="col-12 m-0 mt-0 p-2">
        <div class="m-2 pb-2">
          <b-button :size="commonData.selectedBtnSize" class="mx-1" variant="primary" @click="myReg()">登録</b-button>
          <b-button :size="commonData.selectedBtnSize" class="mx-1" @click="myUndo()">登録取消</b-button>
          <!-- <b-button :size="commonData.selectedBtnSize" class="mx-1" @click="myTest()">テストLog</b-button> -->
          <p class="m-0 mt-1 p-0 text-light">「登録取消」は編集した内容を破棄して、登録前に戻します。</p>
          <p class="m-0 mt-1 p-0 text-light">なお一旦登録すると元に戻すことはできません。</p>
        </div>
      </div>
    </div>
    <p>{{ myMenuSet() }}</p>
  </div>
</template>

<script>
// import { firestore } from 'firebase'
export default {
  data() {
    return {
      myMenuSetFlg: false,
      commonData: {},
      myMenu: {},
      myMenu2: {},
    }
  },

  // beforeDestroy() {
  // this.$nuxt.$off('selnum')
  // },

  computed: {
    // dbOshirases() {
    //   // return this.$store.state.firestore.dbOshirases
    //   return this.$store.getters['firestore/orderdDbOshirases']
    // },
    dbHeaders() {
      // return this.$store.getters['storeheader/orderdDbHeaders']
      return this.$store.getters['storeheader/getDbHeadersById']('menu')
    },

    // Menu Group の全件検索
    dbGroups() {
      // const temp = this.$store.getters['storemenu/getGroups']
      // console.log('dbGroups-1 --- dbGroups: ', temp)
      return this.$store.getters['storemenu/getGroups']
    },
  },

  // elementへのマウントが行われた後処理される。
  // SSR(Firebase等)では使えない。
  // mounted() {
  // },

  // created は画面を開いたとき呼ばれる。
  created() {
    // 下記の firestore は store/firestore.js のファイル名
    // this.$store.dispatch('firestore/init')

    // 下記の storeheader は store/storeheader.js のファイル名
    this.$store.dispatch('storeheader/init')
  },
  // elementへのマウントが行われた後処理される。
  // SSR(Firebase等)では使えない。
  mounted() {
    this.$nuxt.$on('commondata', (commonData) => {
      this.commonData = commonData
    })
  },

  // ④ updated 画面が更新された後、呼び出される。
  // SSR(Firebase等)では使えない。
  updated() {
    this.selnum(921)
  },

  // ⑨ methods は呼び出される度に実行
  // データが変更された時、反映したくない場合はmethodsを利用
  methods: {
    selnum(num) {
      // this.selected = num
      // console.log('header selnum selected: ' + num)
      this.$nuxt.$emit('selnum', num)
    },

    test1() {
      // console.log('myMenu.chkNemu1 in test1(): ' + this.myMenu.chkMenu1)
      // console.log('myMenu2.chkNemu1 in test1(): ' + this.myMenu2.chkMenu1)
    },

    myReg() {
      this.$store.dispatch('storeheader/set', { id: 'menu', myMenu: this.myMenu2 }).then(() => {
        // 以下の２行： 初期デプロイ後 add , Firebabase(Database)に項目が作成されたら update に戻す
        // this.$store.dispatch('storeheader/add', this.myMenu2).then(() => {
        // this.$store.dispatch('storeheader/update', this.myMenu2).then(() => {
        this.toastFileUpdate('登録', '登録しました。')
      })
    },
    // 「登録取消」ボタンをクリックした時、Firestoreのデータを再設定
    myUndo() {
      this.$router.go()
    },
    // トースト
    toastFileUpdate(titleData, mainData) {
      this.$bvToast.toast(mainData, {
        title: titleData,
        autoHideDelay: 5000,
      })
    },
    // man1 Page を開いた時、メニューデータをFireStoreからロードしてセット
    myMenuSet() {
      // console.log('テスト in myMenuSet(): ' + this.myMenu2.m1)
      if (this.myMenuSetFlg === false) {
        try {
          // firestore のデータを myMenu にセット
          // this.myMenu = this.dbHeaders[0].myMenu
          this.myMenu = this.dbHeaders.myMenu
          // console.log('myMenuSet-1 --- myMenu: ', this.myMenu)

          // myMenu のデータを myMenu2(=入力用) にセット
          this.myMenu2 = JSON.parse(JSON.stringify(this.dbHeaders.myMenu))

          this.myMenuSetFlg = true
          // console.log('2 ********** myMenu2.id in myMenuset(): ', this.myMenu2.id)
        } catch (error) {
          // alert('テスト in myMenuSet(): ' + error)
          // console.log('テスト in myMenuSet(): ' + error)
        }
      }
    },
  },
}
</script>

<style scoped>
.float-cb {
  clear: both;
}
.image_box {
  position: relative;
}
/* .image_box .positionRadioBtn { */
.positionRadioBtn {
  position: absolute;
  top: 5px;
  right: 5px;
}
del {
  color: rgba(255, 0, 0, 1);
}
/* .row-eq-height {
  display: flex;
  flex-wrap: wrap;
} */

/* div.image-size b-img {
  height: 100px;
} */
/* li > span > span.done {
  text-decoration: line-through;
} */
/* .no-gutters {
  margin:0;
  padding:0;
}

.no-gutters > .col,
.no-gutters > [class*="col-"] {
  margin:0;
  padding:0;
} */
/* h1,
h2 {
  font-weight: normal;
} */
/* img {
  width: 100%;
} */
</style>
