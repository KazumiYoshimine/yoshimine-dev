<template>
  <div class="container-fluid">
    <div v-for="dbHeader in dbHeaders" :key="dbHeader.id" class="m-0 p-0">
      <h5 class="text-light text-center m-0 p-1" :style="commonData.buttonColorBasicSet">{{ dbHeader.myData.m51 }}</h5>
    </div>
    <h6 class="text-warning text-center m-0 p-1" :style="commonData.buttonColorBasicSet">※ 通信料が高額になる可能性があるので、Wi-Fi等でご利用ください。</h6>

    <div class="row no-gutters">
      <!-- main表示 -->
      <!-- 以下の :key="dbPage.id" でソートされる -->
      <!-- <div v-b-modal="'data-' + index" class="m-1 mt-2 border float-left"> -->
      <div v-for="(dbPage, index) in dbPages" :key="dbPage.id" class="col-sm-6 col-md-4">
        <div v-b-modal="'data-' + index" class="m-1 mt-2 border">
          <!-- <b-embed type="iframe" aspect="16by9" :src="dbPage.page.fileUrl" allowfullscreen preload="none"></b-embed> -->
          <b-embed type="iframe" aspect="16by9" :src="dbPage.page.fileUrl" allowfullscreen></b-embed>
          <p class="m-0 p-0 pl-1">{{ dbPage.page.titleName }}</p>
          <span class="m-0 p-0 pl-1">{{ dbPage.page.mainDate }}</span>
          <b-button :size="commonData.selectedBtnSize" class="px-1 py-0 m-1 ml-2 mb-1 float-center text-body" style="background-color: honeydew">拡大表示</b-button>
        </div>

        <!-- 。。。。。。。。。。。 モーダル表示 start 。。。。。。。。。。。 -->
        <b-modal :id="'data-' + index" hide-header size="xl">
          <!-- タイトル表示 -->
          <div class="border m-1 mt-3 pb-1" style="background-color: honeydew">
            <h5 class="m-0 p-1 float-left">{{ dbPage.page.titleName }}</h5>
            <p class="text-right m-0 pl-2 pr-2">{{ dbPage.page.mainDate }}</p>
          </div>

          <!-- 画像表示 -->
          <b-embed type="iframe" aspect="16by9" :src="dbPage.page.fileUrl" allowfullscreen></b-embed>

          <div class="modal-body m-1 p-1">
            <!-- 本文表示 -->
            <h5 class="text-justify text-break m-0 p-2" style="white-space: pre-wrap">{{ dbPage.page.mainText }}</h5>
          </div>
        </b-modal>
        <!-- 。。。。。。。。。。。 モーダル表示 end 。。。。。。。。。。。 -->
      </div>
    </div>

    <div v-show="isLogin" class="m-0 p-0">
      <!-- ============================== 管理機能 ============================== -->
      <!-- <div class="row no-gutters"> -->
      <div class="row m-0 mt-2 p-2 bg-dark">
        <h5 class="col-12 mx-2 m-0 p-0 py-1 text-white">以下は管理機能です。</h5>
        <!-- 登録状況 -->

        <!-- 現在の登録状況 ＆ 削除 start -->
        <div class="col-12 m-0 mt-2 p-0" style="background-color: lightsteelblue">
          <h5 class="mx-2 mb-0 p-0 pt-1">現在の登録状況 ＆ 編集・削除</h5>
          <p class="mx-2 mb-0 p-0">「日付」が新しい順にソートされます。</p>

          <div class="row no-gutters">
            <div v-for="dbPage in dbPages" :key="dbPage.id" class="col-4">
              <div class="m-1 mt-2 border">
                <b-embed type="iframe" aspect="16by9" :src="dbPage.page.fileUrl" allowfullscreen></b-embed>
                <p class="m-0 p-0 pl-1">{{ dbPage.page.titleName }}</p>
                <p class="m-0 p-0 pl-1">{{ dbPage.page.mainDate }}</p>
                <p class="m-0 p-0 pl-1">{{ dbPage.page.mainText }}</p>
                <b-button :size="commonData.selectedBtnSize" class="px-1 py-0 m-1" variant="primary" @click="edit(dbPage.id)">編集</b-button>
                <b-button :size="commonData.selectedBtnSize" class="px-1 py-0 m-1" @click="remove(dbPage.id)">削除</b-button>
              </div>
            </div>
          </div>
        </div>

        <!-- ---------- コメント start ---------- -->
        <p class="col-12 text-light m-0 mt-2 p-0">登録可能なファイルは拡張子が .mp4 のファイルです。</p>
        <p class="col-12 text-light m-0 p-0">事前に不要部分のカットや圧縮を行ってから登録願います。</p>
        <!-- ---------- コメント end ---------- -->

        <!-- 編集 start -->
        <div v-show="showEdit" class="col-12 m-0 p-0">
          <div class="m-0 p-0 mt-2" style="background-color: linen">
            <div class="d-flex flex-low">
              <h4 class="mx-2 my-0 p-0 pt-1">編集</h4>
              <b-button :size="commonData.selectedBtnSize" variant="dark" class="m-1 px-1 py-0" @click="editCancel()">編集取消</b-button>
            </div>
            <b-form @submit="onSubmitEdit" @reset="onReset">
              <b-button :size="commonData.selectedBtnSize" type="submit" variant="primary" class="m-1 ml-2 px-1 py-0">登録</b-button>
              <b-button :size="commonData.selectedBtnSize" variant="dark" class="m-1 px-1 py-0" @click="dataReset()">データリセット</b-button>
              <!-- <div class="form-group row p-0 pt-2 m-0"> -->
              <div class="row p-0 pt-2 m-0 mr-2">
                <div class="col-3 m-0 p-0">
                  <b-form-group label-for="input-1" label="タイトル(必須):" class="m-0 mt-1 p-0" />
                </div>
                <div class="col-9 m-0 p-0">
                  <b-form-input id="input-1" v-model="page.titleName" class="border" required placeholder="入力しないと登録できません。" />
                </div>
              </div>

              <div class="row p-0 pt-2 m-0 mr-2">
                <b-form-group label-for="input-2" label="日付(必須):" class="col-3 m-0 px-1 pt-2"> </b-form-group>
                <div class="col-9 m-0 p-0">
                  <b-form-datepicker id="example-datepicker1" v-model="page.mainDate" class="mb-1"></b-form-datepicker>
                </div>
              </div>
            </b-form>

            <!-- 本文登録（必須ではない） -->
            <div label="本文:" label-for="input-3" class="col-12 mt-2 ml-2">
              <b-form-textarea id="input-3" v-model="page.mainText" class="col-12" required placeholder="入力した内容は画像クリックで閲覧できます。" rows="3" max-rows="6"></b-form-textarea>
            </div>

            <hr />

            <!-- 画像添付 start-->
            <div class="mx-2 pb-2">
              <p class="mb-0">画像を変更する場合は、「画像変更」ボタンをクリックしてください。</p>
              <button :size="commonData.selectedBtnSize" class="ml-2" @click="fileListEdit()">画像変更</button>
              <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageTorikesi()">変更取消</button>
              <!-- <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageCancel()">添付しない</button> -->
            </div>

            <div v-show="toggleShow">
              <!-- ここから -->
              <div class="m-2">
                下の画像から選択してください。: <strong>{{ selected }}</strong>
              </div>

              <div class="row no-gutters">
                <b-form-group v-for="(myImage, index2) in myImages" :key="myImage.id" class="border col-4">
                  <div class="image_box" @click="selImage(myImage.url, index2)">
                    <b-embed type="iframe" aspect="16by9" :src="myImage.url" allowfullscreen></b-embed>
                    <b-form-radio v-model="selected" :value="'No.' + ++index2" class="positionRadioBtn ml-4 p-0"> </b-form-radio>
                  </div>
                </b-form-group>
              </div>

              <!-- 以下の float-cb について： 上記の float-left の解除ができないので、style で設定 -->
              <div class="float-cb p-2">以下の「画像新規登録・削除」から、新たに画像を追加したり、 不要な画像を削除することができます。</div>

              <!-- 消すな ここから４行 -->
              <div v-show="hihyouji" class="col-12 mt-2">
                <!-- <div class="col-12 mt-2"> -->
                <b-form-input v-model="page.fileUrl" type="text" required placeholder=""></b-form-input>
              </div>
              <!-- 消すな ここまで -->
            </div>
            <!-- 画像添付 end -->
          </div>
        </div>
        <!-- 編集 End -->

        <!-- 新規登録 start -->
        <div v-show="showReg" class="col-12 m-0 p-0">
          <div class="m-0 p-0 mt-2" style="background-color: lightblue">
            <h4 class="mx-2 mb-0 p-0 pt-1">新規登録</h4>
            <!-- <b-form v-if="show" @submit="onSubmit" @reset="onReset"> -->
            <b-form @submit="onSubmit" @reset="onReset">
              <!-- <b-form> -->
              <div class="row p-0 pt-2 m-0 mr-2">
                <b-form-group label-for="input-11" label="タイトル(必須):" class="col-sm-3 m-0 mt-1 p-0 px-1" />
                <div class="col-sm-9 m-0 p-0">
                  <b-form-input id="input-11" v-model="page.titleName" class="border" required placeholder="入力しないと登録できません。" />
                </div>
              </div>

              <div class="row p-0 pt-2 m-0 mr-2">
                <b-form-group label-for="input-12" label="日付(必須):" class="col-3 m-0 px-1 pt-2"> </b-form-group>
                <div class="col-9 m-0 p-0">
                  <b-form-datepicker id="example-datepicker2" v-model="page.mainDate" class="mb-1"></b-form-datepicker>
                </div>
              </div>

              <div class="m-2">
                下の画像から選択してください。: <strong>{{ selected }}</strong>
              </div>

              <div class="row no-gutters">
                <b-form-group v-for="(myImage, index2) in myImages" :key="myImage.id" class="border col-4">
                  <div class="image_box m-0" @click="selImage(myImage.url, index2)">
                    <b-embed type="iframe" aspect="16by9" :src="myImage.url" allowfullscreen></b-embed>
                    <b-form-radio v-model="selected" :value="'No.' + ++index2" class="positionRadioBtn ml-4 p-0"> </b-form-radio>
                  </div>
                </b-form-group>
              </div>

              <div class="float-cb p-2">
                <b-button :size="commonData.selectedBtnSize" type="submit" variant="primary" class="m-1 ml-2 px-1 py-0">登録</b-button>
                <b-button :size="commonData.selectedBtnSize" type="reset" variant="dark" class="m-1 px-1 py-0">リセット</b-button>
              </div>
            </b-form>
            <!-- </div> -->

            <!-- 本文登録（必須ではない） -->
            <div class="row p-0 pt-2 m-0">
              <div class="col-3">
                <b-form-group label-for="input-13" label="コメント:" class="m-0 px-1 pt-2"> </b-form-group>
                <b-form-group label-for="input-13" label="(任意)" class="m-0 px-2"> </b-form-group>
              </div>

              <div class="col-9 m-0 p-0 pr-2">
                <b-form-textarea id="input-13" v-model="page.mainText" required placeholder="入力した内容は画像クリックで閲覧できます。" rows="3" max-rows="6"></b-form-textarea>
              </div>
            </div>

            <hr />

            <!-- 画像添付 start-->
            <!-- 以下の float-cb について： 上記の float-left の解除ができないので、style で設定 -->
            <div class="float-cb p-2">以下の「画像新規登録・削除」から、新たに画像を追加したり、 不要な画像を削除することができます。</div>

            <!-- 消すな ここから４行 -->
            <div v-show="hihyouji" class="col-12 mt-2">
              <!-- <div class="col-12 mt-2"> -->
              <b-form-input v-model="page.fileUrl" type="text" required placeholder=""></b-form-input>
            </div>
            <!-- 消すな ここまで -->
            <!-- 画像添付 end -->
          </div>
        </div>
        <!-- 新規登録 End -->

        <div class="col-12 m-0 p-0">
          <div class="m-0 p-3 mt-3" style="background-color: midnightblue">
            <h4 class="text-white">画像新規登録・削除</h4>
            <!-- 画像登録 Start -->
            <div class="col-12 m-0 p-2 mt-3" style="background-color: skyblue">
              <h5>画像登録</h5>
              <!-- <input ref="input" type="file" accept=".mp4, .mpg, .mpeg" @change="selFile($event)" /> -->
              <input ref="input" type="file" accept="video/*" @change="selFile($event)" />

              <br />

              <!-- <div v-show="reserve"> -->
              <!-- <div> -->
              <!-- サムネイル用canvas -->
              <!-- <canvas ref="thumbnail" class="mt-1" :width="0" :height="0" /> -->
              <!-- </div> -->

              <!-- <p>アップロードファイル名： {{ fileName }}</p> -->
              <!-- アップロードボタン -->
              <!-- <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 px-1 py-0" @click="uploadFile()">Upload</b-button> -->
              <!-- <b-button :size="commonData.selectedBtnSize" class="ml-2 m-0 px-1 py-0" my-0 @click="reset()">Cancel</b-button> -->
              <!-- upload()の最後で、リスト表示 -->
              <!-- </div> -->
            </div>
            <!-- 画像登録 End -->

            <!-- 画像削除 Start -->
            <!-- <div class="col-12 m-0 p-2 mt-2"> -->
            <div class="col-12 m-0 p-2 mt-2" style="background-color: skyblue">
              <h5>画像削除</h5>
              <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 ml-2 px-1 py-0" @click="imageDelete()">画像リスト表示</b-button>
              <b-button :size="commonData.selectedBtnSize" class="m-0 ml-2 px-1 py-0" @click="imageDeleteCancel()">キャンセル</b-button>
            </div>
            <!-- </div> -->

            <!-- 画像リスト表示 -->
            <div v-show="toggleDel" class="m-0 mt-2 p-0">
              <!-- <div class="col-12 m-0 p-1 mt-2" style="background-color:skyblue;"> -->
              <div class="row m-0 p-0" style="background-color: skyblue">
                <div v-for="myImage in myImages" :key="myImage.id" class="border p-0 col-4" style="background-color: lightslategray">
                  <!-- <iframe :src="myImage.url" allowfullscreen></iframe> -->
                  <b-embed type="iframe" aspect="16by9" :src="myImage.url" allowfullscreen></b-embed>
                  <!-- <b-button :size="commonData.selectedBtnSize" variant="dark" class="m-1 ml-2 px-2 py-0 float-center d-flex" @click="deleteImage(myImage.name)">削除</b-button> -->
                  <b-button :size="commonData.selectedBtnSize" variant="dark" class="m-1 ml-2 px-2 py-0" @click="deleteImage(myImage.name, myImage.url)">削除</b-button>
                </div>
                <div class="float-cb col-12"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 画像削除 End -->
      </div>
    </div>
    <p>{{ myVideoDataSet() }}</p>
    <p>{{ todaySet() }}</p>
  </div>
</template>

<script>
// import { BIconClockHistory } from 'bootstrap-vue'
// import { mapGetters } from 'vuex'
import firebase from '~/plugins/firebase'
const storage = firebase.storage()
const storageRef = storage.ref()
const filesRef = storageRef.child('ddd/d51')
const db = firebase.firestore()

export default {
  data() {
    return {
      pageNo: 'd51',
      todaySetFlg: false,
      myVideoDataSetFlg: true,
      selectedFile: '',

      editId: '',
      myData: {},
      commonData: {},
      selected: '選択されていません。',
      showEdit: false,
      showReg: true,
      showImageReg: true,
      showImageFlg: false,
      show: true,
      hihyouji: false,
      page: {
        titleName: '',
        mainDate: '',
        mainText: '',
        fileUrl: '',
      },
      myImages: [
        {
          name: '',
          url: '',
        },
      ],
      thisFileList: '',
      newImage: '',
      newFile: '',
      fileName: '',
      fileType: '',
      // reserve: false,
      toggleDel: false,
      toggleShow: false,
    }
  },

  // ① computed は値が変わるとその値に依存しているすべてのバインディングが更新される
  // データが変更された時 その変更データを、反映したい場合はcomputed、反映したくない場合はmethodsを利用
  // 利用例： DB からのデータ取得
  // mapGetters は store(Firestore) の getters をローカルの算出プロパティにマッピングさせる
  computed: {
    // ...mapGetters({ ddd: 'orderdMainDate' }),

    isLogin() {
      return this.$store.getters['user/isLogin']
    },

    dbPages() {
      // return this.$store.getters['ddd/orderdMainDate']('d51')
      return this.$store.getters['ddd/orderdMainDate']

      // return this.$store.dispatch('ddd/getPageByPages', 'd51')
      // const tempData = this.$store.dispatch('ddd/getPageByPages', 'd51').then((result) => {
      // eslint-disable-next-line vue/no-async-in-computed-properties
      // this.$store
      //   .dispatch('ddd/getPageByPages', 'd51')
      //   .then((result) => {
      //     console.log('result ------ in dbPages: ', result)
      //     return result
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //     return error
      //   })
      // return ''
    },
    dbGetMyPageById() {
      return this.$store.getters['ddd/getMyPageById']
      // return this.$store.getters['ddd/getMyPageById'](id)
    },
    dbHeaders() {
      return this.$store.getters['storeheader/orderdDbHeaders']
    },
  },

  // ② created は画面を開いたとき呼ばれる。
  created() {
    // 下記の ddd は store/ddd.js のファイル名
    // this.$store.dispatch('ddd/init')
    this.$store.dispatch('ddd/init', db.collection('ddd').doc(this.pageNo).collection(this.pageNo).orderBy('page.mainDate', 'desc'))

    this.$store.dispatch('storeheader/init')
  },

  // ③ mounted はelementへのマウントが行われた後処理される。
  // SSR(Firebase等)では使えない。
  mounted() {
    this.$nuxt.$on('commondata', (commonData) => {
      this.commonData = commonData
    })
  },

  // ④ updated 画面が更新された後、呼び出される。
  // SSR(Firebase等)では使えない。
  updated() {
    this.selnum(51)
  },

  // ⑨ methods は呼び出される度に実行
  // データが変更された時、反映したくない場合はmethodsを利用
  methods: {
    selnum(num) {
      // this.selected = num
      // console.log('header selnum selected: ' + num)
      this.$nuxt.$emit('selnum', num)
    },

    myVideoDataSet() {
      if (this.myVideoDataSetFlg === true) {
        try {
          this.imageDelete()
          this.toggleDel = false
          this.myVideoDataSetFlg = false
        } catch (error) {
          // console.log('テスト in myDataSet(): ' + error)
        }
      }
    },
    // DB へのデータ追加
    add() {
      // this.$store.dispatch('ddd/add', this.page)
      this.$store.dispatch('ddd/add', { pageNo: this.pageNo, page: this.page })
      // this.page.titleName = ''
      // this.page.mainText = ''
      // this.page.fileUrl = ''
      this.page = ''
    },
    update() {
      // this.$store.dispatch('ddd/update', { id: this.editId, page: this.page })
      this.$store.dispatch('ddd/update', { pageNo: this.pageNo, id: this.editId, page: this.page })
    },
    edit(id) {
      this.showEdit = true
      this.showReg = false
      const myPage = this.$store.getters['ddd/getMyPageById'](id)
      this.page.titleName = myPage.page.titleName
      this.page.mainDate = myPage.page.mainDate
      this.page.mainText = myPage.page.mainText
      this.page.fileUrl = myPage.page.fileUrl
      this.editId = id
    },
    editCancel() {
      this.page.titleName = ''
      // this.page.mainDate = moment(Date()).format('YYYY-MM-DD')
      this.todaySet2()
      this.page.fileUrl = ''
      this.page.mainText = ''
      this.showEdit = false
      this.showReg = true
    },
    dataReset() {
      const myPage = this.$store.getters['ddd/getMyPageById'](this.editId)
      this.page.titleName = myPage.page.titleName
      this.page.mainDate = myPage.page.mainDate
      this.page.mainText = myPage.page.mainText
      this.page.fileUrl = myPage.page.fileUrl
    },
    remove(id) {
      this.$swal({
        title: '動画を削除してよろしいでしょうか？',
        text: 'この操作は取り消しできません。',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '削除',
        cancelButtonText: 'キャンセル',
        focusCancel: true,
      }).then((result) => {
        if (result.value) {
          // DBに保存されている画像削除
          // this.$store.dispatch('ddd/remove', id)
          this.$store.dispatch('ddd/remove', { pageNo: this.pageNo, id })
        }
      })
    },
    onSubmitEdit(evt) {
      evt.preventDefault()
      this.update()
      this.toastFileUpdate('編集', '登録しました。')
      // 以下はinputの入力をリセット
      this.page.titleName = ''
      // this.page.mainDate = moment(Date()).format('YYYY-MM-DD')
      this.todaySet2()
      this.page.fileUrl = ''
      this.page.mainText = ''
      this.showImageFlg = false
      this.showEdit = false
      this.showReg = true
      this.$nextTick(() => {
        this.show = true
      })
      this.selected = '選択されていません。'
    },
    onSubmit(evt) {
      evt.preventDefault()

      if (this.selected === '選択されていません。') {
        // alert('画像を選択してください。')
        this.$swal({
          title: '画像を選択してください。',
          // text: 'この操作は取り消しできません。',
          icon: 'warning',
          // showCancelButton: true,
          confirmButtonText: 'OK',
          // cancelButtonText: 'キャンセル',
          // focusCancel: true
        }).then((result) => {
          return ''
        })
      } else {
        // evt.preventDefault()
        this.add()
        this.toastFileUpdate('登録', '登録しました。')
        // 以下はinputの入力をリセット
        // this.page.titleName = ''
        // this.page.fileUrl = ''
        // this.page.mainText = ''
        this.page = {}
        this.todaySet2()

        this.showImageFlg = false
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
        this.selected = '選択されていません。'
      }
    },
    onReset(evt) {
      evt.preventDefault()
      this.page.titleName = ''
      // this.page.mainDate = moment(Date()).format('YYYY-MM-DD')
      this.todaySet2()
      this.page.fileUrl = ''
      this.page.mainText = ''
      this.show = false
      this.showImageFlg = false
      this.$nextTick(() => {
        this.show = true
      })
    },

    // 以下は、画像以外のファイル処理
    selFile(e) {
      const file = (e.target.files || e.dataTransfer.files)[0]

      if (typeof file === 'undefined') {
        // this.reserve = false
        this.selected = '選択されていません。'
        return
      }

      this.fileName = file.name
      this.selectedFile = file

      // console.log('fileName in selFile: ' + this.fileName)
      // console.log('fileType in selFile: ' + file.type)

      // this.reserve = true
      // this.showSel = true
      this.uploadPop()
    },

    uploadFile() {
      // const fileData = this.selectedFile.target.result

      // アップロード先のフォルダ、ファイル名を指定
      // const dateNow = Date.now()
      // const fileNameDate = moment(dateNow).format('YYYY-MMDD:HHmmss-')
      // const fileNameDate = this.todaySet3()
      // this.fileName = fileNameDate + this.fileName
      // console.log('fileName-2: ' + this.fileName)
      const fileNameRef = filesRef.child(this.fileName)

      // ファイルをアップロード
      // fileImage.putString(fileData, 'data_url').then((snapshot) => {
      fileNameRef.put(this.selectedFile).then((snapshot) => {
        // 入力データをリセット
        this.cancelFile()
        // トースト: ファイル アップデート完了しました。
        this.toastFileUpdate('ファイル アップロード', '完了しました。')

        // ファイルリスト 表示
        this.fileList()
        this.toggleDel = false
      })
    },

    cancelFile() {
      // inputの入力をリセット
      this.$refs.input.value = ''
      // console.log('this.$refs.input2.value : ' + this.$refs.input2.value)

      // 選択したフィアル名のリセット
      this.fileName = ''

      // this.reserve = false
      // this.showSel = false
    },

    // 入力データをリセット
    reset() {
      // const canvas = this.$refs.thumbnail
      this.newImage = ''
      this.newFile = ''

      // サムネイル用canvasのサイズを0に
      // canvas.height = 0
      // canvas.width = 0

      // inputの入力をリセット
      this.$refs.input.value = ''
      // this.reserve = false
      this.toggleDel = false
    },

    // 画像アップロードのポップアップ
    uploadPop() {
      this.$swal({
        title: '画像登録',
        text: '登録してよろしいでしょうか？',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: '登録',
        cancelButtonText: 'キャンセル',
        focusCancel: false,
      }).then((result) => {
        if (result.value) {
          // DBに保存されている画像削除
          this.uploadFile()
        } else {
          // 入力データをリセット
          this.reset()
        }
      })
    },

    toastFileUpdate(titleData, mainData) {
      this.$bvToast.toast(mainData, {
        title: titleData,
        autoHideDelay: 5000,
      })
    },
    // fileName で指定した画像ファイルの Path = Url を取得
    getImageUrl(fileName) {
      // console.log('1 fileName: ' + fileName)
      const nameUrl = { name: fileName, url: '' }
      // const nameUrl: {name: any, url: any}

      firebase
        .storage()
        .ref()
        .child(fileName)
        // .child('images/' + fileName)
        .getDownloadURL()
        .then((url) => {
          nameUrl.url = url
          this.myImages.push(nameUrl)
          // console.log('myImages.length in getImageUrl: ' + this.myImages.length)

          // ソート
          this.myImages.sort(function (a, b) {
            if (a.name > b.name) {
              return 1
            } else {
              return -1
            }
          })
        })
    },
    fileList() {
      // FireStrage のフォルダとファイルのリストを取得
      // this.showImageReg = false
      // console.log('showImageReg: ' + this.showImageReg)

      this.myImages = []
      // const filesRef = storageRef
      // const filesRef = storageRef.child('images')
      const vm = this

      // console.log('filesRef: ', filesRef)
      this.toggleShow = true

      filesRef
        .listAll()
        .then(function (res) {
          // res.prefixes.forEach(function(folderRef) {
          for (let i = 0; i < res.prefixes.length; i++) {
            // console.log('res.prefixes[i]: ', res.prefixes[i])
          }
          // res.items.forEach(function(itemRef) {
          for (let i = 0; i < res.items.length; i++) {
            // console.log('res.items[i]: ', res.items[i])
            // console.log('itemRef.location.path: ', itemRef.location.path)
            // alert('path: ' + res.items[i].location.path)
            vm.getImageUrl(res.items[i].location.path)
          }
          // this.thisFileList = itemRef.location.path
          // console.log('res: ' + res)
        })
        .catch(function (error) {
          alert('error in fileList: ' + error)
          // console.error('error in fileList: ', error)
        })
      // console.log('myImages.length in imageLise2: ' + this.myImages.length)
    },
    fileListEdit() {
      this.fileListEdit2()

      // ソート
      this.myImages.sort(function (a, b) {
        // if (a.url < b.url) return -1
        // if (a.url > b.url) return 1
        // return 0
        if (a.name > b.name) {
          // console.log('1-a.name: ' + a.name)
          return 1
        } else {
          // console.log('2-a.name: ' + a.name)
          return -1
        }
      })
    },
    fileListEdit2() {
      // this.hihyouji = true
      // FireStrage のフォルダとファイルのリストを取得
      // this.showImageReg = false
      // console.log('showImageReg: ' + this.showImageReg)

      this.myImages = []
      // const filesRef = storageRef
      // const filesRef = storageRef.child('images')
      const vm = this

      // console.log('filesRef: ', filesRef)
      this.toggleShow = true

      filesRef
        .listAll()
        .then(function (res) {
          // res.prefixes.forEach(function(folderRef) {
          for (let i = 0; i < res.prefixes.length; i++) {
            // console.log('res.prefixes[i]: ', res.prefixes[i])
          }
          // res.items.forEach(function(itemRef) {
          for (let i = 0; i < res.items.length; i++) {
            // console.log('res.items[i]: ', res.items[i])
            // console.log('itemRef.location.path: ', itemRef.location.path)
            // alert('path: ' + res.items[i].location.path)
            vm.getImageUrl(res.items[i].location.path)
          }
          // this.thisFileList = itemRef.location.path
          // console.log('res: ' + res)
        })
        .catch(function (error) {
          alert('error in fileListEdit: ' + error)
          // console.error('error in fileListEdit: ', error)
        })
    },
    selImage(imageUrl, index2) {
      // alert('ファイル選択 in selImage: ' + imageUrl)
      this.selected = 'No.' + index2
      this.page.fileUrl = imageUrl
      this.showImageReg = true
      // console.log('showImageReg: ' + this.showImageReg)
    },
    imageTorikesi() {
      this.toggleShow = false
      // this.showImageReg = false
    },
    // imageCancel() {
    //   this.toggleShow = false
    //   this.showImageReg = true
    //   this.page.fileUrl = 'https://firebasestorage.googleapis.com/v0/b/hiro1-223af.appspot.com/o/no_image.png?alt=media&token=d8ab83f9-db9c-46a2-8795-fe2ad439f419'
    //   this.selected = '選択されていません。'
    // },
    imageDeleteCancel() {
      this.toggleDel = false
    },
    imageDelete() {
      this.imageDelete2()

      // ソート
      this.myImages.sort(function (a, b) {
        // if (a.url < b.url) return -1
        // if (a.url > b.url) return 1
        // return 0
        if (a.name > b.name) {
          // console.log('1-a.name: ' + a.name)
          return 1
        } else {
          // console.log('2-a.name: ' + a.name)
          return -1
        }
      })
    },
    imageDelete2() {
      // FireStrage のフォルダとファイルのリストを取得

      this.myImages = []
      // const filesRef = storageRef
      // const filesRef = storageRef.child('images')
      const vm = this

      // console.log('filesRef: ', filesRef)
      this.toggleDel = true

      filesRef
        .listAll()
        .then(function (res) {
          // res.prefixes.forEach(function(folderRef) {
          for (let i = 0; i < res.prefixes.length; i++) {
            // console.log('res.prefixes[i]: ', res.prefixes[i])
          }
          // res.items.forEach(function(itemRef) {
          for (let i = 0; i < res.items.length; i++) {
            // console.log('res.items[i]: ', res.items[i])
            // console.log('itemRef.location.path: ', itemRef.location.path)
            // alert('path: ' + res.items[i].location.path)
            vm.getImageUrl(res.items[i].location.path)
          }
        })
        .catch(function (error) {
          alert('error in imageDelete: ' + error)
          // console.error('error in imageDelete: ', error)
        })
      // this.thisFileList = itemRef.location.path
      // console.log('res: ' + res)
    },
    deleteImage(deleteFileName, deleteFileUrl) {
      const vm = this

      const tempPages = this.dbPages
      // console.log('tempPages: ', tempPages)
      const myResult = tempPages.find((item) => item.page.fileUrl === deleteFileUrl)
      // console.log('myResult: ', myResult)

      if (typeof myResult === 'undefined') {
        // 画像ファイル: 未使用
        // console.log('myResult = undefined')

        this.$swal({
          // title: '画像削除',
          // text: '削除してよろしいでしょうか？',
          title: '画像を削除します。よろしいでしょうか？',
          text: 'この操作は取り消しできません。',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: '削除',
          cancelButtonText: 'キャンセル',
          focusCancel: true,
        }).then((result) => {
          if (result.value) {
            // DBに保存されている画像削除

            const desertRef = storageRef.child(deleteFileName)
            // const desertRef = storageRef.child('images/' + deleteFileName)

            desertRef
              .delete()
              .then(() => {
                // alert('ファイル削除完了')
                vm.toastFileUpdate('ファイル 削除', '完了しました。')
                // this.toggleDel = false
                this.imageDelete()
              })
              // eslint-disable-next-line handle-callback-err
              .catch((error) => {
                // Uh-oh, an error occurred!
                alert('ファイル削除 error in deleteImage: ' + error)
              })
          }
        })
      } else {
        // 画像ファイル: 使用中
        this.$swal({
          title: '選択した画像は現在利用中のため削除できません。',
          text: '上の「現在の登録状況 ＆ 削除」で[削除]するか、[編集]ｰ>[添付しない]により、画像を解放してください。',
          icon: 'error',
          // showCancelButton: true,
          confirmButtonText: '確認しました',
          // cancelButtonText: 'キャンセル',
          focusCancel: true,
        }).then((result) => {
          // if (result.value) {
          // }
        })
      }
    },
    // deleteImage(deleteFileName) {
    //   const vm = this

    //   this.$swal({
    //     title: '画像を削除します。よろしいでしょうか？',
    //     text: 'この操作は取り消しできません。',
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonText: '削除',
    //     cancelButtonText: 'キャンセル',
    //     focusCancel: true
    //   }).then((result) => {
    //     if (result.value) {
    //       // DBに保存されている画像削除

    //       const desertRef = storageRef.child(deleteFileName)
    //       // const desertRef = storageRef.child('images/' + deleteFileName)

    //       desertRef
    //         .delete()
    //         .then(() => {
    //           // alert('ファイル削除完了')
    //           vm.toastFileUpdate('ファイル 削除', '完了しました。')
    //           // this.toggleDel = false
    //           this.imageDelete()
    //         })
    //         // eslint-disable-next-line handle-callback-err
    //         .catch((error) => {
    //           // Uh-oh, an error occurred!
    //           alert('ファイル削除 error in deleteImage: ' + error)
    //         })
    //     }
    //   })
    // },
    todaySet() {
      // this.page.mainDate = moment(Date()).format('YYYY-MM-DD')
      if (this.todaySetFlg === false) {
        this.todaySet2()
        this.todaySetFlg = true
      }
    },
    todaySet2() {
      const myNow = new Date()

      const YYYY = myNow.getFullYear()

      // .getMonth()は 0 〜 11 のため +1 すること
      let MM = myNow.getMonth() + 1
      if (MM < 10) {
        MM = '0' + MM
      }

      let DD = myNow.getDate()
      if (DD < 10) {
        DD = '0' + DD
      }

      const YYYYMMDD = String(YYYY) + '-' + String(MM) + '-' + String(DD)
      this.page.mainDate = YYYYMMDD
      // console.log('mainDate in todaySet(): ', this.page.mainDate)
    },
    //     todaySet3() {
    //       const myNow = new Date()

    //       const YYYY = myNow.getFullYear()

    //       // .getMonth()は 0 〜 11 のため +1 すること
    //       let MM = myNow.getMonth() + 1
    //       if (MM < 10) {
    //         MM = '0' + MM
    //       }

    //       let DD = myNow.getDate()
    //       if (DD < 10) {
    //         DD = '0' + DD
    //       }

    //       let hh = myNow.getHours()
    //       if (hh < 10) {
    //         hh = '0' + hh
    //       }

    //       let mm = myNow.getMinutes()
    //       if (mm < 10) {
    //         mm = '0' + mm
    //       }

    //       let ss = myNow.getSeconds()
    //       if (ss < 10) {
    //         ss = '0' + ss
    //       }

    //       const YYYYMMDD = String(YYYY) + String(MM) + String(DD)
    //       const hhmmss = String(hh) + String(mm) + String(ss)

    //       const myTodayTime = YYYYMMDD + '-' + hhmmss + '-'
    //       // console.log('myTodayTime in todaySet3(): ', myTodayTime)
    //       return myTodayTime
    //     }
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
/* .bg-image {
  background-image: url('../assets/mansion1.jpg');
} */
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
.no-gutters {
  margin: 0;
  padding: 0;
}

.no-gutters > .col,
.no-gutters > [class*='col-'] {
  margin: 0;
  padding: 0;
}
/* h1,
h2 {
  font-weight: normal;
} */
/* img {
  width: 100%;
} */
</style>
