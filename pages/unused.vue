/* eslint-disable vue/no-parsing-error */
<template>
  <div class="container-fluid no-gutters">
    <!-- ============================== 管理機能 ============================== -->
    <div class="row m-0 mt-2 p-2 bg-dark">
      <div class="m-0 p-1">
        <h3 class="text-light text-center m-0 p-0">管理： 未使用データの整理</h3>
        <p class="text-light text-center m-0 p-0">未使用データが大量にあるとレスポンスや料金に影響しますので、不要なデータは削除してください。</p>
      </div>
      <div class="col-12 d-flex justify-content-between align-items-center">
        <!-- modal 起動ボタン start ***** -->
        <b-button class="m-0 p-1" @click="notMenuData">メニューに無いデータ一覧</b-button>
        <!-- <b-button class="m-0 p-1" @click="notMenuData">未使用と思われる画像の一覧</b-button> -->
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

      <!-- メニューに無いデータの処理関連 ----- start -->
      <b-modal ref="modal-unusedTemplateNo" hide-footer>
        <h5 class="m-0 mt-2 p-0">未使用と思われるデータのリスト</h5>
        <p class="m-0 mt-2 p-0">作成中： _simple.vueの差分だけなので、_general.vue等の差分も反映させること。</p>
        <div v-for="unusedTemplateNo in unusedTemplateNos" :key="unusedTemplateNo.id" class="col-4">
          <p class="m-0 p-0 pl-1">{{ unusedTemplateNo }}</p>
        </div>
      </b-modal>
      <!-- メニューに無いデータの処理関連 ----- start -->
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
const storage = firebase.storage()
const storageRef = storage.ref()
const db = firebase.firestore()

export default {
  data() {
    return {
      templateNo: 'simple' + this.$route.params.simple,
      unusedTemplateNos: [],
      selected: '選択されていません。',
      selectedFile: '選択されていません。',
      showReg: true,

      // myStore 用 start
      myStore: {
        myIndex: {
          indexGroup: -1,
          indexPage: 0,
        },
      },
      // myStore 用 end

      myCommon: {},
      page: {
        fileUrl: process.env.NO_IMAGE_URL,
        fileName: 'no_image.png',
        displayType: 'image',
        googleUrl: '',
      },
      myFiles: [],

      metadata: {
        customMetadata: {},
      },

      customMetadata: {
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
  },

  // created は画面を開いたとき呼ばれる。
  created() {
    // 下記の simple は store/simple.js のファイル名
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
  updated() {
    // const keyWord = location.pathname.replace(/\//g, '')
    // let templateNo = ''
    // const pageList = []
    // this.dbGroups.forEach((dbGroup, indexGroup) => {
    //   dbGroup.myMenu.myPage.forEach((thisPage, indexPage) => {
    //     templateNo = thisPage.pageTemplate + thisPage.pageNo
    //     pageList.push({ templateNo, indexGroup, indexPage })
    //   })
    // })
    // const findResult = pageList.findIndex((key) => key.templateNo === keyWord)
    // if (findResult !== 'undefined') {
    //   if (findResult !== -1) {
    //     this.setMyStore(pageList[findResult].indexGroup, pageList[findResult].indexPage)
    //   }
    // }
  },

  // ⑨ methods は呼び出される度に実行
  // データが変更された時、反映したくない場合はmethodsを利用
  methods: {
    // selnum(num) {
    //   this.$nuxt.$emit('selnum', num)
    // },

    // selMenu(indexGroup, indexPage) {
    //   this.setMyStore(indexGroup, indexPage)
    // },

    // Vuex Store への保存
    setMyStore(indexGroup, indexPage) {
      this.myStore.myIndex.indexGroup = indexGroup
      this.myStore.myIndex.indexPage = indexPage
      // console.log('setMyStore-1 --- myStore: ', this.myStore)
      this.$store.dispatch('myStore/set', this.myStore)
    },

    // add() {
    //   this.$store.dispatch('simple/add', { templateNo: this.templateNo, page: this.page })
    //   // this.page.fileUrl = ''
    //   // this.page = ''
    //   this.initPageData()
    // },

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

    async dbAllPages() {
      let getAllPages = []

      await this.$store
        .dispatch('simple/getAllPage')
        .then((result) => {
          // console.log('dbAllPages-1 --- getData: ', result)
          getAllPages = result
        })
        .catch((error) => {
          alert('error: ', error)
          getAllPages = []
        })

      // console.log('dbAllPages-2 --- getAllPages: ', getAllPages)
      return getAllPages
    },

    async notMenuData() {
      // ① Firestore の dbMenus に保存されている templeteNo リストを取得
      const pageList = []
      // let dupFlg = false

      this.dbGroups.forEach((dbGroup) => {
        // console.log('editGroup-1 --- dbGroup: ', dbGroup)

        // (1) 編集中のグループ（ID）は除く
        // if (this.editId !== dbGroup.id) {
        dbGroup.myMenu.myPage.forEach((thisPage) => {
          // console.log('editGroup-3 --- thisPage: ', thisPage)
          // console.log('editGroup-4 --- tempateNo: ', thisPage.pageTemplate + thisPage.pageNo)
          pageList.push(thisPage.pageTemplate + thisPage.pageNo)
        })
        // }
      })

      // templeteNo の重複を除く
      // const newPageList = new Set(pageList)
      // (注意) pageListは配列、newPageListはオブジェクトです。

      // console.log('notMenuData-0 --- pageList: ', pageList)
      // console.log('notMenuData-1 --- pageList: ', pageList.length)
      // console.log('notMenuData-2 --- newPageList: ', newPageList.size)

      // ② 当該.vue でFirestoreに保存している templeteNo リストを取得
      // console.log('notMenuData-1 --- dbAllPages:', this.dbAllPages())
      let templateNos = []
      templateNos = await this.simpleTemplateNo()
      // await console.log('notMenuData-3 --- templateNos:', templateNos)
      // if (typeof this.dbEachPage !== 'undefined') {
      //   this.layoutInput = JSON.parse(JSON.stringify(this.dbEachPage.layout))
      // } else {
      //   this.layoutInput = JSON.parse(JSON.stringify(this.layout))
      // }

      // ③ 上記①②の差分を取得
      this.unusedTemplateNos = pageList.filter((i) => !templateNos.includes(i))
      // console.log('notMenuData-3 --- unusedTemplateNos: ', this.unusedTemplateNos)

      // this.$refs.modalnotMenuData.show()
      await this.$refs['modal-unusedTemplateNo'].show()
    },

    async simpleTemplateNo() {
      let templateNos = []

      await this.$store
        .dispatch('simple/getTemplateNo')
        .then((result) => {
          // console.log('dbAllPages-1 --- getData: ', result)
          templateNos = result
        })
        .catch((error) => {
          alert('error: ', error)
          templateNos = []
        })

      // console.log('dbAllPages-2 --- templateNos: ', templateNos)
      return templateNos
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

      // if (this.fileType === 'png' || this.fileType === 'jpg' || this.fileType === 'jpeg') {
      //   // console.log('file extension 画像: ' + fileExt)
      //   vm.resize(e)
      // } else {
      //   // console.log('file extension 画像以外: ' + fileExt)
      //   this.newFile = file
      //   // this.reserve = true
      // }

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
      // const canvas = this.$refs.thumbnail
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

    // 画像リスト表示 Reg
    // fileListDisp() {
    //   this.fileList()
    //   // this.toggleShow = true
    // },

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
      // this.toggleShow = false
      this.initPageData()
      // this.page.fileUrl = process.env.NO_IMAGE_URL
      // this.selected = '選択されていません。'
      // this.selected = ''
      // this.page.fileName = 'no_image.png'
      // this.page.displayType = 'image'
      // this.page.googleUrl = ''
      // this.selectedFile = '選択されていません。'
    },

    regNewFile() {
      this.$bvModal.show('regNewFileId')
    },

    // modal 関連 start
    regCancelBtn() {
      // this.$bvToast.toast('Cancelボタンが押されました。', {
      //   title: 'キャンセル',
      //   autoHideDelay: 5000,
      // })

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

<style scoped></style>
