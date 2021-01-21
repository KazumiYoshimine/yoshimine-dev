<template>
  <div class="container-fluid no-gutters">
    <!-- ---------- バックグラウンド画像 start ----------- -->
    <!--
    <div class="bg-image myColor">
    <div>abcd</div>
      <div>1234</div>
    </div>
    <p>xxxxxxxxx</p>
     -->
    <!-- ---------- バックグラウンド画像 end ----------- -->

    <div class="row no-gutters">
      <!-- main表示 -->
      <div v-for="(dbPage, index) in dbPages" :key="dbPage.id" class="col-12">
        <div v-b-modal="'data-' + index" class="m-1 mt-2 border">
          <!-- <b-img :src="dbPage.page.fileUrl" class="m-0" alt="file" fluid> </b-img> -->
          <b-embed :src="dbPage.page.fileUrl" class="m-0" type="embed" alt="file" fluid />
        </div>
      </div>
    </div>

    <!-- ============================== 管理機能 ============================== -->
    <div v-show="isLogin" class="m-0 p-0">
      <div class="row m-0 mt-2 p-2 bg-dark">
        <div class="col-12 d-flex justify-content-between align-items-center">
          <div class="m-0 p-1">
            <!-- <h5 class="col-12 mx-2 m-0 p-0 py-1 text-white">以下は管理機能です。</h5>
            <h6 class="col-12 mx-2 m-0 p-0 py-1 text-white">jpeg等のファイルを表示することができます。</h6>
            <h6 class="col-12 mx-2 m-0 p-0 py-1 text-white">表示するファイルの作成例: Powerpointのファイルメニューからエクスポート</h6> -->
            <h5 class="m-0 p-0 text-white">以下は管理機能です。</h5>
            <h6 class="m-0 p-0 text-white">jpeg等のファイルを表示することができます。</h6>
            <h6 class="m-0 p-0 text-white">表示するファイルの作成例: Powerpointのファイルメニューからエクスポート</h6>
          </div>
          <!-- modal 起動ボタン start ***** -->
          <!-- <b-button :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" class="m-1 ml-2" @click="$bvModal.show('regNewFileId')">ファイル追加</b-button> -->
          <!-- <b-button class="m-0 p-1" @click="notMenuData">メニューに無いデータ一覧</b-button> -->
          <!-- modal 起動ボタン end ***** -->
        </div>

        <!-- 登録状況 -->

        <!-- 現在の登録状況 ＆ 削除 start -->
        <div class="col-12 m-0 mt-2 p-0" style="background-color: lightsteelblue">
          <h5 class="mx-2 mb-0 p-0 pt-1">現在の登録状況 ＆ 削除</h5>
          <p class="mx-2 mb-0 p-0">「日付」が新しい順にソートされます。</p>

          <div class="row no-gutters">
            <div v-for="dbPage in dbPages" :key="dbPage.id" class="col-4">
              <div class="m-1 mt-2 border">
                <!-- <b-img :src="dbPage.page.fileUrl" fluid class="m-0" alt="file"> </b-img> -->
                <b-embed :src="dbPage.page.fileUrl" fluid class="m-0" type="embed" alt="file" />
                <b-button :size="myCommon.selectedBtnSize" class="px-1 py-0 m-1" @click="remove(dbPage.id)">削除</b-button>
              </div>
            </div>
          </div>
        </div>

        <!-- 新規登録 start -->
        <div v-show="showReg" class="col-12 m-0 p-0">
          <div class="m-0 p-0 mt-2" style="background-color: lightblue">
            <h4 class="mx-2 mb-0 p-0 py-1">新規登録</h4>

            <!-- <button :size="myCommon.selectedBtnSize" class="ml-2 mb-2" @click="fileList()">ファイル表示</button> -->
            <!-- <button :size="myCommon.selectedBtnSize" class="ml-2 mb-2" @click="fileListDisp()">ファイル表示</button> -->
            <!-- <div v-show="toggleShow">
              <div class="m-2">
                下のファイルから選択してください。: <strong>{{ selected }}</strong>
              </div>

              <div class="row no-gutters">
                <b-form-group v-for="(myFile, index2) in myFiles" :key="myFile.id" class="col-4">
                  <div class="image_box" @click="selFile(myFile.url, index2)">
                    <b-embed v-model="selected" :src="myFile.url" fluid type="embed" class="m-0 p-1" alt="file"> </b-embed>
                    <b-form-radio v-model="selected" :value="'No.' + ++index2" class="positionRadioBtn ml-4 p-0"> </b-form-radio>
                  </div>
                </b-form-group>
              </div>

              <b-button :size="myCommon.selectedBtnSize" variant="primary" class="m-1 ml-2 px-1 py-0" @click="myReg()">登録</b-button>
            </div> -->
            <!-- <div v-show="toggleShow"> -->
            <div class="m-2">下のファイルから選択してください。</div>
            <div class="m-2">
              <strong>{{ selectedFile }}</strong>
            </div>

            <div class="row no-gutters">
              <b-form-group v-for="(myFile, index2) in myFiles" :key="myFile.id" class="col-4">
                <div class="image_box border m-1 p-0 pt-1" style="background-color: whitesmoke" @click="selFile(myFile, index2)">
                  <span class="m-1 p-0">{{ myFile.fileName }}</span>
                  <!-- +++++++ ファイルのファイル表示 start -->
                  <div v-if="myFile.customMetadata.displayType === 'image'" class="m-0 p-0">
                    <b-embed :src="myFile.customMetadata.fileUrl" class="m-0" type="embed" alt="file" fluid />
                  </div>
                  <div v-else-if="myFile.customMetadata.displayType === 'googleDocViewer'" class="m-0 p-0">
                    <b-embed :src="myFile.customMetadata.googleUrl" class="m-0" type="embed" alt="file" fluid />
                  </div>
                  <div v-else class="m-0 p-0">
                    <p class="m-0 p-0">表示未対応のファイル形式です。</p>
                    <p class="m-0 p-0">下の「ダウンロード」ボタンからダウンロードして、ご利用ください。</p>
                    <br />
                  </div>
                  <!-- +++++++ ファイルのファイル表示 end -->
                  <b-form-radio v-model="selected" :value="++index2" class="positionRadioBtn ml-0 p-0"> </b-form-radio>

                  <!-- 削除ボタン -->
                  <b-button :size="myCommon.selectedBtnSize" class="m-1 ml-2 px-1 py-0" @click="deleteFile(myFile.id, myFile.fileName, myFile.customMetadata.fileUrl)">削除</b-button>
                </div>
              </b-form-group>
            </div>

            <b-button :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" class="m-1 ml-2" @click="myReg()">登録</b-button>

            <b-button :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" class="m-1 ml-2" @click="$bvModal.show('regNewFileId')">ファイル追加</b-button>

            <!-- ファイル追加関連 -->
            <b-modal id="regNewFileId" hide-footer>
              <input ref="input" type="file" accept="*.*" @change="fileSel($event)" />
              <br />
            </b-modal>

            <b-modal id="regSelectedFileId" title="ファイル登録" @cancel="regCancelBtn" @ok="regOkBtn">
              <div class="d-block text-center">
                <h5>登録してよろしいでしょうか？</h5>
              </div>
            </b-modal>

            <!-- ファイル添付 end -->
          </div>
        </div>
        <!-- 新規登録 End -->

        <!-- メニューに無いデータの処理関連 ----- start -->
        <!-- <b-modal ref="modal-notMenuData" hide-footer>
          <input ref="input" type="file" accept="*.*" @change="fileSel($event)" />
          <br />
        </b-modal> -->
        <!-- メニューに無いデータの処理関連 ----- start -->
      </div>
    </div>
  </div>
</template>

<script>
// import { BIconClockHistory } from 'bootstrap-vue'
// import { mapGetters } from 'vuex'
import firebase from '~/plugins/firebase'
const storage = firebase.storage()
const storageRef = storage.ref()
const db = firebase.firestore()

export default {
  data() {
    return {
      // pageNo: 'a51',
      templateNo: 'simple' + this.$route.params.simple,
      selected: '選択されていません。',
      selectedFile: '選択されていません。',
      showReg: true,

      // myStore 用 start
      myIndex: {
        indexGroup: -1,
        indexPage: 0,
        pageTemplate: 'home',
        pageNo: 0,
      },
      // myStore 用 end

      myCommon: {},
      page: {
        fileUrl: process.env.NO_IMAGE_URL,
        fileName: 'no_image.png',
        displayType: 'image',
        googleUrl: '',
      },
      // myImages: [
      //   {
      //     name: '',
      //     url: '',
      //   },
      // ],
      myFiles: [
        // {
        //   fileName: '',
        //   customMetadata: {
        //     displayType: '',
        //     fileUrl: '',
        //     googleUrl: '',
        //   },
        // },
      ],

      metadata: {
        customMetadata: {},
      },

      customMetadata: {
        // fileName: '',
        displayType: '',
        googleUrl: '',
        fileUrl: '',
      },

      displayType: '',
      contentType: '',
      newImage: '',
      newFile: '',
      fileName: '',
      fileType: '',
      // toggleDel: false,
      // toggleShow: false,
    }
  },

  // ① computedは、値が変わるとその値に依存しているすべてのバインディングが更新される
  // データが変更された時 その変更データを、反映したい場合はcomputed、反映したくない場合はmethodsを利用
  // 利用例： DB からのデータ取得
  // mapGetters は store(Firestore) の getters をローカルの算出プロパティにマッピングさせる
  computed: {
    // ...mapGetters({ simple: 'orderdMainDate' }),

    isLogin() {
      return this.$store.getters['user/isLogin']
    },

    dbPages() {
      return this.$store.getters['simple/orderdMainDate']
    },

    // Menu Group の全件検索
    dbGroups() {
      // const temp = this.$store.getters['storemenu/getGroups']
      // console.log('dbGroups-1 --- dbGroups: ', temp)
      return this.$store.getters['storemenu/getGroups']
    },

    getPageList() {
      return this.$store.getters['myStore/getPageList']
    },
  },

  // created は画面を開いたとき呼ばれる。
  created() {
    // 下記の simple は store/simple.js のファイル名
    // this.$store.dispatch('simple/init')
    this.$store.dispatch('simple/init', db.collection('simple').doc(this.templateNo).collection(this.templateNo).orderBy('page.fileUrl', 'desc'))

    // 下記の storeheader は store/storeheader.js のファイル名
    this.$store.dispatch('storeheader/init')
  },

  // elementへのマウントが行われた後処理される。
  // SSR(Firebase等)では使えない。
  mounted() {
    this.$nuxt.$on('mycommon', (myCommon) => {
      this.myCommon = myCommon
    })

    // this.$nuxt.$on('commondata', (commonData) => {
    //   this.commonData = commonData
    // })

    this.fileList()
  },

  // ④ updated 画面が更新された後、呼び出される。
  // SSR(Firebase等)では使えない。
  updated() {
    this.getMenuIndex()
  },

  // ⑨ methods は呼び出される度に実行
  // データが変更された時、反映したくない場合はmethodsを利用
  methods: {
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
    // setMenuIndex(indexGroup, indexPage) {
    setMenuIndex(indexGroup, indexPage, pageTemplate, pageNo) {
      this.myIndex.indexGroup = indexGroup
      this.myIndex.indexPage = indexPage
      this.myIndex.pageTemplate = pageTemplate
      this.myIndex.pageNo = pageNo
      // console.log('setMenuIndex-1 --- myStore: ', this.myIndex)
      this.$store.dispatch('myStore/set', this.myIndex)
    },

    add() {
      this.$store.dispatch('simple/add', { templateNo: this.templateNo, page: this.page })
      // this.page.fileUrl = ''
      // this.page = ''
      this.initPageData()
    },

    initPageData() {
      this.page.fileUrl = process.env.NO_IMAGE_URL
      // this.selected = '選択されていません。'
      this.selected = ''
      this.page.fileName = 'no_image.png'
      this.page.displayType = 'image'
      this.page.googleUrl = ''
      // this.page.myLink = ''
      this.selectedFile = '選択されていません。'
    },

    remove(id) {
      this.$swal({
        title: 'ファイル削除',
        // text: 'この操作は取り消しできません。',
        text: 'ファイルを削除してよろしいでしょうか？',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '削除',
        cancelButtonText: 'キャンセル',
        focusCancel: true,
      }).then((result) => {
        if (result.value) {
          // DBに保存されている画像削除
          this.$store.dispatch('simple/remove', { templateNo: this.templateNo, id })
          this.fileList()
        }
      })
    },

    myReg() {
      // if (this.page.fileUrl === '') {
      if (this.selected === '選択されていません。') {
        this.$swal({
          title: '画像を選択してください。',
          // text: 'この操作は取り消しできません。',
          icon: 'warning',
          showCancelButton: false,
          // confirmButtonText: '削除',
          // cancelButtonText: 'キャンセル',
          // focusCancel: true
        }).then((result) => {})
      } else if (this.dbPages.length >= 1) {
        this.$swal({
          title: '画像は１つしか登録できません。',
          text: '登録済みの画像を削除してから、登録してください。',
          icon: 'warning',
          showCancelButton: false,
          // confirmButtonText: '削除',
          // cancelButtonText: 'キャンセル',
          // focusCancel: true
        }).then((result) => {})
      } else {
        // alert(JSON.stringify(this.page))
        this.add()
        this.toastFileUpdate('登録', '登録しました。')
        // this.page.fileUrl = ''
        // this.page = ''
        // this.selected = '選択されていません。'
        this.initPageData()
        // this.reserve = false
      }
    },

    // 画像関連 ------------ start
    fileSel(e) {
      const file = (e.target.files || e.dataTransfer.files)[0]
      // console.log('0--------------------- : ', file)
      if (typeof file === 'undefined') {
        // this.reserve = false
        this.selected = '選択されていません。'
        return
      }

      this.fileName = file.name
      const pos = this.fileName.lastIndexOf('.')

      this.fileType = this.fileName.slice(pos + 1)

      const vm = this

      switch (this.fileType) {
        case 'jpg':
        case 'jpeg':
        case 'png':
          vm.resize(e)
          break
        default:
          // console.log('**** fileType 画像以外: ', this.fileType)
          this.newFile = file
          // this.reserve = true
          break
      }

      // this.uploadPop()
      this.$bvModal.show('regSelectedFileId')
    },

    // 画像関連メソッド

    // 画像をリサイズする
    resize(e) {
      // console.log('画像をリサイズする')
      // const file = e.target.files[0]
      const file = (e.target.files || e.dataTransfer.files)[0]
      this.fileName = file.name

      if (file) {
        const image = new Image()
        const reader = new FileReader()
        const vm = this
        const maxWidth = 1280

        reader.readAsDataURL(file)

        reader.onload = (e) => {
          image.src = e.target.result
          image.onload = () => {
            // 通常サイズ（保存用）の画像を作る
            vm.newImage = this.width < maxWidth ? this.src : vm.makeImage(image)

            // 縮小サイズのサムネイルを作成する
            // vm.makeTumbnail(image)
          }
        }
        // this.reserve = true
      }
    },

    // 通常サイズ（保存用）の画像を作る
    makeImage(image) {
      // console.log('縮小画面を作る')
      // canvas要素を作成
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      // 縦横比を算出
      const ratio = image.height / image.width

      // 生成する画像の横幅
      const width = 1280

      const height = width * ratio
      canvas.width = width
      canvas.height = height

      // canvas描画作成
      ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height)

      // data_url形式に変換したものを返す
      return canvas.toDataURL('image/jpeg')
    },

    // 縮小サイズのサムネイルを作成する
    makeTumbnail(image) {
      // console.log('makeTumbnail: ' + image)
      // 予めHTMLに記述したcanvasを指定
      const canvas = this.$refs.thumbnail
      const ctx = canvas.getContext('2d')

      // 縦横比を算出
      const ratio = image.width / image.height

      // サムネイルのサイズを指定
      const height = 130
      const width = height * ratio

      // サムネイルに画像を描画
      canvas.height = height
      canvas.width = width

      // サムネイルに画像を描画
      ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height)
    },

    // 入力データをリセット
    reset() {
      this.newImage = ''
      this.newFile = ''
    },

    // 画像をアップロードする
    upload() {
      if (this.fileType === 'png' || this.fileType === 'jpg' || this.fileType === 'jpeg') {
        // console.log('file 拡張子は 画像: ' + fileType)
        this.uploadImage()
      } else {
        // console.log('file 拡張子は 画像以外: ' + fileType)
        // this.reserve = true
        this.uploadNotImage()
      }
    },

    // 画像ファイルの保存
    async uploadImage() {
      // customMetadata にデータをセット
      // this.customMetadata.fileName = this.fileName

      const photo = this.newImage
      const filesRef = storageRef.child('simple/' + this.templateNo)
      const fileRef = filesRef.child(this.fileName)

      // ①ファイルを Firestorage へアップロード
      await fileRef.putString(photo, 'data_url').then((snapshot) => {
        // fileRef.putString(photo, 'data_url').then((snapshot) => {
        // console.log('1-1 ------ uploaded data: ', snapshot)
        this.contentType = snapshot.metadata.contentType
        // console.log('1-2 ------ contentType: ', snapshot.metadata.contentType)
        // console.log('1-2 ------ contentType: ', this.contentType)

        // 入力データをリセット
        this.reset()
      })

      // this.customMetadata にデータをセット
      await fileRef.getDownloadURL().then((url) => {
        // fileRef.getDownloadURL().then((url) => {
        this.customMetadata.fileUrl = url
        // console.log('fileUrl: ', this.customMetadata.fileUrl)

        // googleUrl = googleDocViewer用にエンコードしたUrl
        const encodeUrl = encodeURIComponent(url)
        this.customMetadata.googleUrl = 'https://docs.google.com/viewer?url=' + encodeUrl + '&embedded=true'
        // console.log('1-3 ----- googleUrl: ', this.customMetadata.googleUrl)

        // set displayType
        // this.customMetadata.displayType = this.setDisplayType(contentType)
        this.setDisplayType(this.contentType)
        this.customMetadata.displayType = this.displayType
      })

      this.metadata.customMetadata = this.customMetadata
      // console.log('uploadImage-1 --- customMeata: ', this.metadata)

      // Update metadata properties
      await fileRef
        // .updateMetadata(this.customMetadata)
        .updateMetadata(this.metadata)
        .then(function (metadataResult) {
          // console.log('uploadImage-2 --- metadataResult: ', metadataResult)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(function (error) {
          // Uh-oh, an error occurred!
          alert('uploadImage-99 --- metadata update error: ', error)
          // console.log('uploadImage-99 --- metadata update error: ', error)
        })

      // ②Firestore へファイルの名前等を保存
      // await this.$store.dispatch('simple/addFile', { templateNo: this.templateNo, customMetadata: this.customMetadata })

      await this.fileList()

      // トースト: ファイル アップデート完了しました。
      this.toastFileUpdate('ファイル新規登録', '完了しました。')
    },

    // 画像ファイル以外の保存
    async uploadNotImage() {
      // customMetadata にデータをセット
      // this.customMetadata.fileName = this.fileName

      // アップロード先のフォルダ、ファイル名を指定
      // const dateNow = Date.now()
      // const fileNameDate = moment(dateNow).format('YYYYMMDD-HHmmss_')
      // const fileNameDate = this.todaySet3()
      // this.fileName = fileNameDate + this.fileName
      const filesRef = storageRef.child('simple/' + this.templateNo)
      const fileRef = filesRef.child(this.fileName)

      // ①ファイルを Firestorage へアップロード
      await fileRef.put(this.newFile).then((snapshot) => {
        // console.log('1-1 ------ uploaded data: ', snapshot)
        this.contentType = snapshot.metadata.contentType
        // console.log('1-2 ------ contentType: ', snapshot.metadata.contentType)
        // console.log('1-2 ------ contentType: ', this.contentType)

        // 入力データをリセット
        this.reset()
        // トースト: ファイル アップデート完了しました。
        // this.toastFileUpdate('ファイル アップロード', '完了しました。')
      })

      // this.customMetadata にデータをセット
      await fileRef.getDownloadURL().then((url) => {
        this.customMetadata.fileUrl = url
        // console.log('fileUrl: ', this.customMetadata.fileUrl)

        // googleUrl = googleDocViewer用にエンコードしたUrl
        const encodeUrl = encodeURIComponent(url)
        this.customMetadata.googleUrl = 'https://docs.google.com/viewer?url=' + encodeUrl + '&embedded=true'
        // console.log('1-3 ----- googleUrl: ', this.customMetadata.googleUrl)

        // set displayType
        // this.customMetadata.displayType = this.setDisplayType(contentType)
        this.setDisplayType(this.contentType)
        this.customMetadata.displayType = this.displayType
      })

      this.metadata.customMetadata = this.customMetadata

      // Update metadata properties
      await fileRef
        // .updateMetadata(this.customMetadata)
        .updateMetadata(this.metadata)
        .then(function (metadataResult) {
          // console.log('uploadNotImage-1 --- metadataResult: ', metadataResult)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(function (error) {
          // Uh-oh, an error occurred!
          alert('uploadNotImage-99 --- metadata update error: ', error)
          // console.log('uploadNotImage-99 --- metadata update error: ', error)
        })

      // this.customMetadata のデータを ②Firestore へファイルの名前等を保存
      // await this.$store.dispatch('simple/addFile', { templateNo: this.templateNo, customMetadata: this.customMetadata })

      await this.fileList()

      this.toastFileUpdate('ファイル新規登録', '完了しました。')
    },

    // ファイル Update 完了の toast 表示
    toastFileUpdate(titleData, mainData) {
      this.$bvToast.toast(mainData, {
        title: titleData,
        autoHideDelay: 5000,
      })
    },

    fileList() {
      // FireStrage のフォルダとファイルのリストを取得
      // this.showImageReg = false

      this.myFiles = []
      // const filesRef = storageRef
      // const filesRef = storageRef.child('images')
      const vm = this

      // console.log('filesRef: ', filesRef)
      // this.toggleShow = true
      const filesRef = storageRef.child('simple/' + this.templateNo)

      filesRef
        .listAll()
        .then(function (res) {
          // res.prefixes.forEach(function(folderRef) {
          for (let i = 0; i < res.prefixes.length; i++) {
            // console.log('res.prefixes[i]: ', res.prefixes[i])
          }
          // res.items.forEach(function(itemRef) {
          // if (res.items.length === 0) {
          //   console.log('fileList-1 ---- length: ', res.items.length)
          //   vm.toggleShow = true
          // } else {
          for (let i = 0; i < res.items.length; i++) {
            vm.getFileInfo(res.items[i])
          }
        })
        .catch(function (error) {
          alert('error in fileList: ' + error)
          // console.error('error in fileList: ', error)
        })
      // console.log('myFiles.length in imageLise2: ' + this.myFiles.length)
    },

    // fileInfo で指定した画像ファイルの Path = Url を取得
    getFileInfo(fileInfo) {
      // console.log('getFileInfo-1 --- fileInfo: ' + fileInfo)
      // const setFileInfo = { name: fileInfo.name, url: '' }
      const setFileInfo = { fileName: fileInfo.name, customMetadata: {} }

      // console.log('getFileInfo-2 --- name: ' + fileInfo.name)
      const filesRef = storageRef.child('simple/' + this.templateNo)
      const fileRef = filesRef.child(fileInfo.name)
      // Get metadata properties
      fileRef
        .getMetadata()
        .then(function (metadata) {
          setFileInfo.customMetadata = metadata.customMetadata
          // console.log('getFileInfo-3 --- metadata: ', metadata)
          // console.log('getFileInfo-4-- displayType: ', setFileInfo.customMetadata.displayType)
        })
        .catch(function (error) {
          alert('fileList-99 --- metadata update error: ', error)
          // console.log('error **** in getFileInfo: ', error)
        })

      this.myFiles.push(setFileInfo)

      // fileUrl のget & setFileInfo[]へのpush
      // firebase
      //   .storage()
      //   .ref()
      //   .child(fileInfo.name)
      //   .getDownloadURL()
      //   .then((url) => {
      //     // setFileInfo.url = url
      //     this.myFiles.push(setFileInfo)
      //     console.log('getFileInfo-1 --- myFiles.length in getFileInfo: ' + this.myFiles.length)
      //   })
    },

    setDisplayType(contentType) {
      const pos = contentType.lastIndexOf('/')
      const fileType1 = contentType.slice(0, pos)
      const fileType2 = contentType.slice(pos + 1)
      const fileType3 = fileType2.slice(0, 3)
      // console.log('1-1 --------- fileType1 in googleDocViewr: ', fileType1)

      this.displayType = ''

      switch (fileType1) {
        case 'image':
          this.displayType = 'image'
          break
        case 'video':
          this.displayType = 'image'
          break
        case 'text':
          this.displayType = 'googleDocViewer'
          break
        case 'application':
          if (fileType2 === 'pdf') {
            this.displayType = 'googleDocViewer'
          } else if (fileType3 === 'vnd') {
            this.displayType = 'googleDocViewer'
          } else {
            this.displayType = 'other'
          }

          break
        default:
          this.displayType = 'other'
          // console.log('2-その他 ---------- : ')
          break
      }
    },

    selFile(myFile, index2) {
      // console.log('selFile-1 --- myFile: ', myFile)
      // console.log('selFile-2 --- fileUrl: ', myFile.customMetadata.fileUrl)
      // console.log('selFile-3 --- fileUrl: ', this.page.fileUrl)
      this.selected = index2
      this.selectedFile = 'No.' + this.selected + ':　' + myFile.fileName
      this.page.fileUrl = 'simple'
      this.page.fileName = myFile.fileName
      this.page.displayType = myFile.customMetadata.displayType
      this.page.googleUrl = myFile.customMetadata.googleUrl
      this.page.fileUrl = myFile.customMetadata.fileUrl
    },

    // ファイルを添付しない
    noAttachments() {
      this.initPageData()
    },

    regNewFile() {
      this.$bvModal.show('regNewFileId')
    },

    // modal 関連 start
    regCancelBtn() {
      this.$bvModal.hide('regNewFileId')
      // 入力データをリセット
      this.reset()
    },

    regOkBtn() {
      // ファイル選択 window を閉じる
      this.$bvModal.hide('regNewFileId')

      // DBに保存
      this.upload()
      this.fileList()
    },
    // modal 関連 end

    // fileListDelCancel() {
    // this.toggleDel = false
    // },

    // 画像リスト表示 Del
    fileListDel() {
      this.fileList()
      this.initPageData()
      // this.fileListSort()
      // this.toggleDel = true
    },

    // DBに保存されている画像削除
    // customMetadataDel(id) {
    //   this.$store.dispatch('simple/delFileItem', { templateNo: this.templateNo, id })
    // },

    deleteFile(id, deleteFileName, deleteFileUrl) {
      // console.log('1-1 ----- deleteFileName: ', deleteFileName)
      const vm = this

      const tempPages = this.dbPages
      const myResult = tempPages.find((item) => item.page.fileUrl === deleteFileUrl)

      if (typeof myResult === 'undefined') {
        // 画像ファイル: 未使用

        this.$swal({
          title: '削除',
          text: '削除してよろしいでしょうか？',
          // text: 'この操作は取り消しできません。',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: '削除',
          cancelButtonText: 'キャンセル',
          focusCancel: true,
        }).then((result) => {
          if (result.value) {
            // DBに保存されている画像削除

            const filesRef = storageRef.child('simple/' + this.templateNo)
            const delRef = filesRef.child(deleteFileName)

            delRef
              // ① Firestorage のファイル削除
              .delete()
              .then(() => {
                this.fileListDel()

                // ② Firestore のcustomMetadata(ファイル名等)削除
                // this.customMetadataDel(id)

                vm.toastFileUpdate('ファイル 削除', '完了しました。')
              })
              .catch((error) => {
                alert('ファイル削除 error in deleteFile: ' + error)
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
    // 画像関連 ------------ end
  },
}
</script>

<style scoped>
.bg-image {
  background: url('https://firebasestorage.googleapis.com/v0/b/hiro1-223af.appspot.com/o/oshirase%2F20200512-150831-brandon-griggs-wR11KBaB86U-unsplash.jpg?alt=media&token=67783498-4c2e-4fa7-93a1-c421fe6bfce6');
}
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
.no-gutters {
  margin: 0;
  padding: 0;
}

.no-gutters > .col,
.no-gutters > [class*='col-'] {
  margin: 0;
  padding: 0;
}
</style>
