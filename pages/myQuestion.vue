<template>
  <div class="container-fluid">
    <div v-for="dbHeader in dbHeaders" :key="dbHeader.id" class="m-0 p-0">
      <h5 class="text-light text-center m-0 p-0 py-2" :style="commonData.buttonColorBasicSet">{{ dbHeader.myData.m62 }}</h5>
    </div>

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

          <b-form-group id="input-group-2" label="棟名・部屋番号（必須）:" label-for="input-2" class="mt-2">
            <b-form-input id="input-2" v-model="form.organization" required placeholder="A 123"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="件名（必須）:" label-for="input-3" class="mt-2">
            <b-form-input id="input-3" v-model="form.subject" required placeholder="○○について"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="問合せ内容（必須）:" label-for="input-4" class="mt-2">
            <b-form-textarea id="input-4" v-model="form.message" required placeholder="ご意見、要望等についてご記入ください。" rows="3" max-rows="6"></b-form-textarea>
          </b-form-group>
          <!-- <pre class="mt-3 mb-0">{{ form.message }}</pre> -->

          <!-- <b-form-ckbox id="checkbox-1" v-model="status" name="checkbox-1" value="accepted" unchecked-value="not_accepted">メールで回答希望</b-form-cckbox> -->
          <b-form-checkbox id="checkbox-1" v-model="showMailFlg" name="checkbox-1" class="my-2">メールで回答希望</b-form-checkbox>

          <div v-show="showMailFlg">
            <!-- <b-form-group id="input-group-5" label="メールアドレス（回答希望の場合は入力願います。）:" label-for="input-5" description="" class="mt-2"> -->
            <b-form-group label="メールアドレス（メールにて連絡希望の場合は入力願います。）:" description="" class="mt-2">
              <!-- <b-form-input id="input-5" v-model="form.email" type="email" required placeholder="name@example.com"></b-form-input> -->
              <b-form-input v-model="form.email" type="email" required placeholder=""></b-form-input>
            </b-form-group>
          </div>

          <b-button :size="commonData.selectedBtnSize" type="submit" variant="primary">登録</b-button>
          <b-button :size="commonData.selectedBtnSize" type="reset" variant="dark">リセット</b-button>
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
          <p class="mx-2 m-0 p-0">本サービスでは、送信用と受信用の２つのメールアドレスを設定する必要がありますので、開発者へメールアドレスをご連絡ください。</p>
          <p class="mx-2 m-0 p-0">送信用として、Googleのメールアドレスを新たに取得してください。</p>
          <p class="mx-2 m-0 p-0">受信用は既存のメールアドレスでも結構ですが、できるだけ本サービス専用のメールアドレスをご用意ください。</p>
          <br />
          <p class="mx-2 m-0 p-0">なお受信用メールアドレスがGoogleのメールアドレスの場合、以下のページと共用可能です。</p>
          <p class="mx-2 m-0 ml-3 p-0">・ 駐車場予約状況</p>
          <br />
          <span class="mx-2 m-0 p-0">問合せ内容（例：お名前、棟名等）は修正する必要がありますので、開発者</span>
          <b-link href="#foo">(Ady)</b-link>
          <span class="mx-2 m-0 p-0">へご連絡ください。</span>
          <!-- <h6 class="mx-2 m-0 ml-3 p-0">・ アクセスマップ</h6> -->
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
  data: () => ({
    form: {
      name: '',
      organization: '',
      email: 'name@example.com',
      subject: '',
      message: '',
    },
    commonData: {},
    showMailFlg: false,
    show: true,
  }),
  // computedは、値が変わるとその値に依存しているすべてのバインディングが更新される
  computed: {
    isLogin() {
      return this.$store.getters['user/isLogin']
    },

    dbHeaders() {
      return this.$store.getters['storeheader/orderdDbHeaders']
    },
  },
  // created は画面を開いたとき呼ばれる。
  created() {
    // 下記の b31DB は store/b31DB.js のファイル名
    // this.$store.dispatch('b31DB/init')

    // 下記の storeheader は store/storeheader.js のファイル名
    // this.$store.dispatch('storeheader/init')

    this.$nuxt.$on('MYDATA', (myData) => {
      this.myData = myData
    })
  },
  // elementへのマウントが行われた後処理される。
  // SSR(Firebase等)では使えない。
  mounted() {
    this.$nuxt.$on('COMMONDATA', (commonData) => {
      this.commonData = commonData
    })
  },

  // ④ updated 画面が更新された後、呼び出される。
  // SSR(Firebase等)では使えない。
  updated() {
    this.selnum(62)
  },

  // ⑨ methods は呼び出される度に実行
  // データが変更された時、反映したくない場合はmethodsを利用
  methods: {
    selnum(num) {
      // this.selected = num
      // console.log('header selnum selected: ' + num)
      this.$nuxt.$emit('selnum', num)
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
      this.form.organization = ''
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
        alert('問合せの登録が完了しました。')
      } else {
        // const sendMail2 = firebase.functions().httpsCallable('sendMail2')
        const sendMail2 = functions.httpsCallable('sendMail2')
        sendMail2({ form })
          .then((response) => {
            alert('問合せの登録が完了しました。\n確認のため登録内容をメールで自動送信しました。\n\n３分たってもメールが届かない場合は\n登録いただいたメールアドレスの誤りや\n通信エラーが考えられます。\n\nお手数ですが再登録をお願いいたします。')
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
