<template>
  <div class="container-fluid no-gutters">
    <h5 v-if="myMenu" class="text-light text-center m-0 p-0 py-2" :style="myCommon.buttonColorBasicSet">{{ myMenu.m65 }}</h5>

    <div id="mydiv" class="d-flex m-0 mt-3 p-0">
      <h6></h6>
    </div>

    <!-- ========================= 管理機能 start === -->
    <div v-show="isLogin" class="m-0 p-0">
      <div class="row m-0 mt-2 p-3 bg-dark">
        <h5 class="col-12 mx-2 m-0 p-0 pt-2 text-white">※ 以下は管理機能です。</h5>

        <!-- <div class="row m-0 mt-2 p-2 bg-dark"> -->
        <!-- 現在の登録状況 ＆ 削除 start -->
        <div class="col-12 m-0 my-2 p-0" style="background-color: snow">
          <h5 class="mx-2 my-2 p-0 pt-1">現在の登録状況 ＆ 削除</h5>

          <!-- <div v-for="dbPage in dbPages" :key="dbPage.id" class="m-0 my-1 p-0"> -->
          <div class="row m-2 p-0 border border-secondary" style="background-color: gainsboro">
            <div class="col-1 m-0 p-1 text-center">
              <!-- <b-button :size="myCommon.selectedBtnSize" class="px-1 py-0 m-0 mt-1" variant="primary" @click="edit(dbPage.id)">編集</b-button> -->
              <b-button :size="myCommon.selectedBtnSize" class="px-1 py-2 m-0 mt-1" @click="remove()">削除</b-button>
            </div>

            <div class="col-11 m-0 p-0 px-1 text-wrap border-left border-secondary" style="background-color: gainsboro">
              <p class="m-0 p-0 text-break overflow-auto" style="overflow-wrap: break-word">{{ mapUrl }}</p>
            </div>
          </div>
          <!-- </div> -->
        </div>
        <!-- 現在の登録状況 ＆ 削除 end -->

        <!-- 編集 start -->
        <!-- <div v-show="showEdit" class="col-12 m-0 p-0">
            <div class="m-0 p-0 mt-2" style="background-color:linen;">
              <div class="d-flex flex-low">
                <h4 class="mx-2 my-0 p-0 pt-1">編集</h4>
                <b-button :size="myCommon.selectedBtnSize" variant="dark" class="m-1 px-1 py-0" @click="editCancel()">編集取消</b-button>
              </div>
              <b-form @submit="onSubmitEdit" @reset="onReset">
                <div class="row p-0 pt-2 m-0 mr-1">
                  <span class="col-2 m-0 mt-2 p-1 pt-0">Sort(必須):</span>
                  <b-form-input v-model="page.sort" type="number" class="col-10" required placeholder=""></b-form-input>
                </div>

                <div class="row p-0 pt-2 m-0 mr-1">
                  <span class="col-2 m-0 mt-2 p-1 pt-3">Q(必須):</span>
                  <b-form-textarea v-model="page.q" class="col-10" required placeholder="" rows="3" max-rows="6"></b-form-textarea>
                </div>

                <div class="row p-0 pt-2 m-0 mr-1">
                  <span class="col-2 m-0 mt-2 p-1 pt-3">A(必須):</span>
                  <b-form-textarea v-model="page.a" class="col-10" required placeholder="" rows="3" max-rows="6"></b-form-textarea>
                </div>

                <b-button :size="myCommon.selectedBtnSize" type="submit" variant="primary" class="m-1 ml-2 px-1 py-0">登録</b-button>
              </b-form>

              <hr />
            </div>
          </div> -->
        <!-- 編集 End -->

        <!-- 新規登録 start -->
        <!-- <div v-show="showReg" class="col-12 m-0 p-0"> -->
        <div class="col-12 m-0 p-2 mt-2" style="background-color: lightsteelblue">
          <h4 class="m-2 p-0 pt-1">新規登録</h4>

          <!-- <div class="row p-0 pt-2 m-0 mr-1"> -->
          <!-- <div class="p-0 m-2"> -->
          <span class="m-0 mt-2 p-0">地図情報: 取得方法は以下の「地図情報の取得方法」を参照ください。</span>
          <b-form-textarea v-model="tempUrl" class="m-0 my-2 p-1" required placeholder="地図情報を入力してください。" rows="8" max-rows="8"></b-form-textarea>
          <!-- <b-form-textarea v-model="mapUrl" class="m-0 p-0" required placeholder="地図情報を入力してください。"></b-form-textarea> -->
          <!-- </div> -->

          <b-button :size="myCommon.selectedBtnSize" style="background-color: skyblue" class="m-0 ml-2 px-1 py-0 text-body" @click="onReg()">登録</b-button>
          <b-button :size="myCommon.selectedBtnSize" style="background-color: skyblue" class="m-0 ml-2 px-1 py-0 text-body" @click="onClear()">データクリア</b-button>
          <b-button :size="myCommon.selectedBtnSize" style="background-color: skyblue" class="m-0 ml-2 px-1 py-0 text-body" @click="onReset()">登録済みデータへ戻す</b-button>

          <hr />
        </div>
        <!-- </div> -->
        <!-- 新規登録 End -->
        <!-- </div> -->

        <div class="col-12 m-0 p-2" style="background-color: lightsteelblue">
          <!-- <p class="mx-2 m-0 p-0">本ページで入力した情報を受取るためには、メールアドレスを設定する必要がありますので、開発者へメールアドレスをご連絡ください。</p>
          <h6 class="mx-2 m-0 p-0">すでに用意したメールアドレスがなければGoogle等で新たにメールアドレスを取得してください。</h6>
          <br /> -->
          <p class="m-0 p-0">以下のリンク先の【地図やルートを埋め込む】を参照してください。</p>
          <b-link href="https://support.google.com/maps/answer/144361?co=GENIE.Platform%3DDesktop&hl=ja" target="_blank" class="m-0 text-primary"
            ><h5><u>地図情報の取得方法</u></h5></b-link
          >
        </div>
      </div>
    </div>
    <!-- ========================== 管理機能 end ========= -->
    <p>{{ myCommonSet() }}</p>
    <!-- <p>{{ myfunc() }}</p> -->
    <!-- <br /> -->
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      myCommon: {},
      myMenu: {},
      mapUrl: '',
      tempUrl: '',
    }
  },
  // computedは、値が変わるとその値に依存しているすべてのバインディングが更新される
  computed: {
    isLogin() {
      return this.$store.getters['user/isLogin']
    },

    dbAccessById() {
      return this.$store.getters['commonDB/getMyAccessById']('access')
      // const tempAccess = this.$store.getters['commonDB/getMyAccessById']('access')
      // this.mapUrl = tempAccess.access.mapUrl

      // return tempAccess
    },
    dbHeaders() {
      // return this.$store.getters['storeheader/orderdDbHeaders']
      return this.$store.getters['storeheader/getDbHeadersById']('menu')
    },
  },
  // created は画面を開いたとき呼ばれる。
  created() {
    // 下記の commonDB は store/commonDB.js のファイル名
    this.$store.dispatch('commonDB/init')

    // 下記の storeheader は store/storeheader.js のファイル名
    this.$store.dispatch('storeheader/init')

    // this.$nuxt.$on('mydata', (myData) => {
    //   this.myData = myData
    // })
  },
  // elementへのマウントが行われた後処理される。
  // SSR(Firebase等)では使えない。
  mounted() {
    this.$nuxt.$on('mycommon', (myCommon) => {
      this.myCommon = myCommon
    })

    this.$nuxt.$on('mymenu', (myMenu) => {
      this.myMenu = myMenu
    })
  },

  // ④ updated 画面が更新された後、呼び出される。
  // SSR(Firebase等)では使えない。
  updated() {
    this.selnum(65)
  },

  // ⑨ methods は呼び出される度に実行
  // データが変更された時、反映したくない場合はmethodsを利用
  methods: {
    selnum(num) {
      // this.selected = num
      // console.log('header selnum selected: ' + num)
      this.$nuxt.$emit('selnum', num)
    },

    // add() {
    //   this.$store.dispatch('commonDB/add', this.tempUrl)
    //   this.tempUrl = ''
    // },
    update() {
      this.$store.dispatch('commonDB/updateAccess', { id: 'access', mapUrl: this.tempUrl })
      this.toastFileUpdate('登録完了', 'DBへ登録しました。')
      this.tempUrl = ''
      // this.$router.go()
    },
    myCommonSet() {
      try {
        this.mapUrl = this.dbAccessById.mapUrl
        // console.log('mapUrl in myCommonSet(): ', this.mapUrl)
        this.myfunc()
      } catch (error) {
        // alert('テスト in myDataSet(): ' + error)
        // console.log('エラー in myCommonSet(): ' + error)
      }
    },
    myfunc() {
      const mydiv = document.getElementById('mydiv')
      mydiv.innerHTML = this.mapUrl
      // this.showMap = false
    },
    remove() {
      this.$swal({
        // title: '削除してよろしいでしょうか？',
        title: '削除して？',
        text: 'この操作は取り消しできません。',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '削除',
        cancelButtonText: 'キャンセル',
        focusCancel: true,
      }).then((result) => {
        if (result.value) {
          // DBに保存されているデータ削除
          // this.$store.dispatch('commonDB/remove', 'access')
          this.tempUrl = ''
          this.update()
        }
      })
    },
    onReg() {
      // evt.preventDefault()
      this.update()
      // 以下はinputの入力をリセット
      this.tempUrl = ''
    },
    onClear() {
      this.tempUrl = ''
    },
    onReset() {
      this.tempUrl = this.mapUrl
    },
    toastFileUpdate(titleData, mainData) {
      this.$bvToast.toast(mainData, {
        title: titleData,
        autoHideDelay: 5000,
      })
    },
  },
}
</script>

<style scoped>
/* .no-gutters {
  margin:0;
  padding:0;
}

.no-gutters > .col,
.no-gutters > [class*="col-"] {
  margin:0;
  padding:0;
} */
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: black;
}
img {
  width: 100%;
}
</style>
