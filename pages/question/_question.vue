<template>
  <div class="container-fluid">
    <!-- <h5 v-if="myMenu" class="text-light text-center m-0 p-0 py-2" :style="myCommon.buttonColorBasicSet">myMenu.m62</h5> -->
    <!-- <h5 class="text-light text-center m-0 mb-2 p-2" :style="myCommon.buttonColorBasicSet">{{ pageName }}</h5> -->
    <h5 class="text-light text-center m-0 mb-2 p-2" :style="myCommon.buttonColorBasicSet">{{ pageName }}</h5>

    <div class="row">
      <!-- <div class="col-12 m-0 p-1">
        <h3 class="text-light bg-info text-center m-0 p-1">問合せ</h3>
      </div> -->
      <!-- <div class="col-12 m-0 p-1 d-flex flex-row justify-content-center"> -->
      <div class="col-12 m-0 p-2">
        <b-form v-if="show" @submit="onSubmit" @reset="onReset">
          <b-form-group id="input-group-1" label="お名前（必須）:" label-for="input-1" class="mt-2">
            <b-form-input id="input-1" v-model="form.name" required placeholder="山田  太郎"></b-form-input>
          </b-form-group>

          <!-- <b-form-group id="input-group-2" label="棟名・部屋番号（必須）:" label-for="input-2" class="mt-2">
            <b-form-input id="input-2" v-model="form.organization" required placeholder="A 123"></b-form-input>
          </b-form-group> -->

          <b-form-group id="input-group-3" label="件名（必須）:" label-for="input-3" class="mt-2">
            <b-form-input id="input-3" v-model="form.subject" required placeholder="○○について"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="問合せ内容（必須）:" label-for="input-4" class="mt-2">
            <b-form-textarea id="input-4" v-model="form.message" required placeholder="ご意見、要望等についてご記入ください。" rows="3" max-rows="6"></b-form-textarea>
          </b-form-group>
          <!-- <pre class="mt-3 mb-0">{{ form.message }}</pre> -->

          <div @click="clearEmail()">
            <b-form-checkbox v-model="showMailFlg" class="my-2">メールで回答希望</b-form-checkbox>
          </div>

          <div v-show="showMailFlg">
            <!-- <b-form-group id="input-group-5" label="メールアドレス（回答希望の場合は入力願います。）:" label-for="input-5" description="" class="mt-2"> -->
            <b-form-group label="メールアドレス（メールにて連絡希望の場合は入力願います。）:" description="" class="mt-2">
              <!-- <b-form-input id="input-5" v-model="form.email" type="email" required placeholder="name@example.com"></b-form-input> -->
              <b-form-input v-model="form.email" type="email" required placeholder="<例>name@example.com"></b-form-input>
            </b-form-group>
          </div>

          <b-button :size="myCommon.selectedBtnSize" type="submit" variant="primary">登録</b-button>
          <b-button :size="myCommon.selectedBtnSize" type="reset" variant="dark">リセット</b-button>
        </b-form>
      </div>
      <!-- <br /> -->
      <!-- <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card> -->
    </div>

    <!-- ========================= 管理機能 start =========== -->
    <div v-show="isLogin" class="m-0 p-0">
      <div class="row m-0 mt-2 p-3 bg-dark">
        <h4 class="col-12 mx-2 m-0 p-0 py-2 text-white">※ 本ページをご利用について</h4>

        <div class="col-12 m-0 p-2" style="background-color: lightsteelblue">
          <!-- <p class="mx-2 m-0 p-0">本サービスは、送信用と受信用の２つのメールアドレスを設定する必要がありますので、開発者へメールアドレスをご連絡ください。</p> -->
          <p class="mx-2 m-0 p-0">本サービスは、受信用のメールアドレスを設定する必要がありますので、下記の開発者へメールにてご連絡願います。</p>
          <!-- <p class="mx-2 m-0 p-0">送信用として、Googleのメールアドレスを新たに取得してください。</p> -->
          <!-- <p class="mx-2 m-0 p-0">受信用は既存のメールアドレスでも結構ですが、できるだけ本サービス専用のメールアドレスをご用意ください。</p> -->
          <!-- <br /> -->
          <!-- <p class="mx-2 m-0 p-0">なお受信用メールアドレスがGoogleのメールアドレスの場合、以下のページと共用可能です。</p> -->
          <!-- <p class="mx-2 m-0 ml-3 p-0">・ 駐車場予約状況</p> -->
          <p class="mx-2 m-0 p-0">問合せ内容（例：お名前等）を変更したい場合も下記の開発者へご連絡願います。</p>
          <br />
          <b-link href="mailto:mail@yoshimine.dev?subject=問合せ" class="mx-2 m-0 p-0">開発者(mail@yoshimine.dev)</b-link>
          <!-- <span class="mx-2 m-0 p-0">へご連絡ください。</span> -->
        </div>
      </div>
    </div>
    <!-- ========================== 管理機能 end ========= -->
    <!-- <br /> -->
  </div>
</template>

<script>
import { functions } from '@/plugins/firebase'
// import firebase from 'firebase'
// import functions from '~/plugins/firebase.js'

export default {
  // data: () => ({
  data() {
    return {
      templateNo: 'question' + this.$route.params.general,
      pageName: '',
      form: {
        name: '',
        // organization: '',
        email: 'name@example.com',
        subject: '',
        message: '',
      },
      myCommon: {},
      myMenu: {},
      showMailFlg: false,
      show: true,

      // myStore 用 start
      myIndex: {
        indexGroup: -1,
        indexPage: 0,
        pageTemplate: 'home',
        pageNo: 0,
      },
      // myStore 用 end
    }
  },
  // computedは、値が変わるとその値に依存しているすべてのバインディングが更新される
  computed: {
    isLogin() {
      return this.$store.getters['user/isLogin']
    },

    dbHeaders() {
      // return this.$store.getters['storeheader/orderdDbHeaders']
      return this.$store.getters['storeheader/getDbHeadersById']('menu')
    },

    // getMenuIndex() {
    //   return this.$store.getters['myStore/getMenuIndex']
    // },

    getPageList() {
      return this.$store.getters['myStore/getPageList']
    },
  },
  // created は画面を開いたとき呼ばれる。
  created() {
    // 下記の b31DB は store/b31DB.js のファイル名
    // this.$store.dispatch('b31DB/init')

    // 下記の storeheader は store/storeheader.js のファイル名
    this.$store.dispatch('storeheader/init')

    // this.$nuxt.$on('mymenu', (myMenu) => {
    //   this.myMenu = myMenu
    // })
  },
  // elementへのマウントが行われた後処理される。
  // SSR(Firebase等)では使えない。
  mounted() {
    this.$nuxt.$on('mycommon', (myCommon) => {
      this.myCommon = myCommon
    })
  },

  // ④ updated 画面が更新された後、呼び出される。
  // SSR(Firebase等)では使えない。
  updated() {
    this.getMenuIndex()
    // this.setMenuIndex(90, 0, 'question', 1)
    // // Header メニューButtonの枠線情報を myStore へ保存 ------- start
    // // console.log('updated-1 --- 現在のURLのファイル名: ', location.pathname.replace(/\//g, ''))
    // const keyword = location.pathname.replace(/\//g, '')
    // const pageList = this.getPageList
    // // console.log('updated-2 --- pageList: ', pageList)
    // const findResult = pageList.findIndex((key) => key.templateNo === keyword)
    // // console.log('updated-3 --- findResult: ', findResult)

    // if (findResult !== 'undefined') {
    //   if (findResult !== -1) {
    //     this.setMenuIndex(pageList[findResult].indexGroup, pageList[findResult].indexPage)

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
    clearEmail() {
      if (this.showMailFlg) {
        // this.form.email = ''
        this.form.email = 'name@example.com'
        // console.log('1 email ++++++++ clearEmail: ', this.form.email)
      } else {
        // this.form.email = 'name@example.com'
        this.form.email = ''
        // console.log('2 email ++++++++ clearEmail: ', this.form.email)
      }
    },

    getMenuIndex() {
      // Header メニューButtonの枠線情報を myStore へ保存 ------- start
      // console.log('updated-1 --- 現在のURLのファイル名: ', location.pathname.replace(/\//g, ''))
      const keyword = location.pathname.replace(/\//g, '')
      const pageList = this.getPageList
      // console.log('updated-2 --- pageList: ', pageList)
      const findResult = pageList.findIndex((key) => key.templateNo === keyword)
      // console.log('updated-3 --- findResult: ', findResult)

      if (findResult !== 'undefined') {
        if (findResult !== -1) {
          // this.setMenuIndex(pageList[findResult].indexGroup, pageList[findResult].indexPage)
          this.setMenuIndex(pageList[findResult].indexGroup, pageList[findResult].indexPage, pageList[findResult].pageTemplate, pageList[findResult].pageNo)

          // ページの最上部で表示するページ名をセット
          this.pageName = pageList[findResult].pageName
          // console.log('updated-0-1 --- pageName: ', this.pageName)
        }
      }
      // Header メニューButtonの枠線情報を myStore へ保存 ------- end
    },

    // Vuex Store への保存
    setMenuIndex(indexGroup, indexPage, pageTemplate, pageNo) {
      this.myIndex.indexGroup = indexGroup
      this.myIndex.indexPage = indexPage
      this.myIndex.pageTemplate = pageTemplate
      this.myIndex.pageNo = pageNo
      // console.log('setMenuIndex-1 --- myStore: ', this.myIndex)
      this.$store.dispatch('myStore/set', this.myIndex)
    },

    onSubmit(evt) {
      // alert(JSON.stringify(this.form))
      evt.preventDefault()
      this.sendMail()
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.name = ''
      // this.form.organization = ''
      this.form.email = 'name@example.com'
      this.form.subject = ''
      this.form.message = ''
      this.show = false
      this.showMailFlg = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    sendMail() {
      const form = this.form

      const sendMail1 = functions.httpsCallable('sendMail1')
      // const sendMail1 = firebase.functions().httpsCallable('sendMail1')
      // console.log('sendMail1 ---------: ', sendMail1)
      sendMail1({ form })
        .then((response) => {
          // alert('管理者へのメール送信が完了しました。 in myQuestion.vue')
          // console.log('管理者へのメール送信sendMail1 OK: ')
        })
        .catch((error) => {
          alert('管理者へのメール送信エラー' + error)
        })

      if (form.email === 'name@example.com') {
        // console.log('問合せ者へのメール送信スキップ: ' + form.email)
        // alert('問合せの登録が完了しました。')
        this.$swal({
          title: '登録完了',
          text: '問合せ内容の登録が完了しました。',
          icon: 'info',
          // showCancelButton: true,
          confirmButtonText: 'OK',
          // cancelButtonText: 'キャンセル',
          // focusCancel: true
        }).then((result) => {})
      } else {
        // const sendMail2 = firebase.functions().httpsCallable('sendMail2')
        const sendMail2 = functions.httpsCallable('sendMail2')
        sendMail2({ form })
          .then((response) => {
            // alert('問合せの登録が完了しました。\n確認のため登録内容をメールで自動送信しました。\n\n３分たってもメールが届かない場合は\n登録いただいたメールアドレスの誤りや\n通信エラーが考えられます。\n\nお手数ですが再登録をお願いいたします。')
            this.$swal({
              title: '登録完了',
              text: '確認のため登録内容をメールで自動送信しました。\n\n３分たってもメールが届かない場合は\n登録いただいたメールアドレスの誤りや\n通信エラーが考えられます。\n\nお手数ですが再登録をお願いいたします。',
              icon: 'info',
              // showCancelButton: true,
              confirmButtonText: 'OK',
              // cancelButtonText: 'キャンセル',
              // focusCancel: true
            }).then((result) => {})
            // console.log('問合せ者へのメール送信sendMail2 OK: ')
          })
          .catch((error) => {
            alert('問合せ者へのメール送信エラー' + error)
          })
      }
    },
  },
}
</script>

<style scoped></style>
