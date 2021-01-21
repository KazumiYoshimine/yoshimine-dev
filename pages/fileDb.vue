<template>
  <div class="container-fluid">
    <!-- <div class="container"> -->
    <!-- <b-container fluid class="p-4 bg-dark"> -->
    <div class="row m-0 p-0">
      <div class="col-12 m-0 p-1 bg-info">
        <h5 class="text-light bg-info text-center m-0 p-1">{{ myCommon.mArchiveDB }}</h5>
        <p class="text-light text-center m-0 p-0">各種ファイル、写真、ビデオ等をDBに保存したり、DBからダウンロードできます。</p>
      </div>

      <!-- 画像 Upload / Download / Delete   start -->
      <div class="col-12 m-0 p-3 mt-3" style="background-color: midnightblue">
        <h4 class="text-white">画像 Upload / Download / Delete</h4>
        <h6 class="text-white">拡張子が jpg, jpeg, png の写真等を圧縮することができます。</h6>
        <!-- 画像登録 Start -->
        <div class="col-12 m-0 p-2 mt-3" style="background-color: lightsteelblue">
          <h5>Upload</h5>
          <!-- <input ref="input1" type="file" accept=".jpg, .png, .jpeg" @change="fileExtension($event)" /> -->
          <input ref="input1" type="file" accept=".jpg, .jpeg, .png" style="background-color: lightsteelblue" @change="selImage($event)" />
          <!-- <b-form-file v-model="file2" class="mt-1" plain @change="selImage($event)"></b-form-file>
          <div class="mt-1">Selected file: {{ file2 ? file2.name : '' }}</div> -->

          <!-- <input type="file" :multiple="false" accept="image/*" @change="selImage($event)" /> -->
          <br />
          <!-- サムネイル用canvas -->
          <div v-show="showSel">
            <div class="d-flex flex-row">
              <!-- <div class="float-left">
                <b-button :size="myCommon.selectedBtnSize" class="ml-3 mt-1 p-1" @click="cancelImage()">Cancel</b-button>
              </div> -->
              <canvas ref="thumbnail" :width="0" :height="0" class="mt-1 ml-1" />

              <div class="float-left mt-1 ml-2" style="background-color: white">
                <!-- <b-button :size="myCommon.selectedBtnSize" class="ml-2 mt-1 p-1" variant="primary" @click="changeSize()">ファイル圧縮</b-button> -->
                <!-- <b-button :size="myCommon.selectedBtnSize" class="ml-2 mt-1 p-1" variant="primary" @change="changeSize()"> -->
                <b-form-select v-model="selectedSize" :options="options" @change="changeSize()"></b-form-select>
                <!-- <b-form-select :options="options" @change="changeSize()"></b-form-select> -->
                <!-- </b-button> -->
                <!-- Selected: <strong>{{ selectedWidth}}</strong> -->
                <!-- <p class="order-1">現在のサイズ  ：{{ preFileSize }}</p> -->
                <!-- <p class="order-2 m-0 ml-4">↓</p> -->
                <!-- <p class="order-3">変換後のサイズ：{{ afterFileSize }}</p> -->
                <p class="m-0 mx-1">現在 の サイズ：{{ preFileSize | addComma }} KB</p>
                <p class="m-0 ml-5">↓</p>
                <p class="m-0 mx-1">変換後のサイズ：{{ afterFileSize | addComma }} KB</p>
                <!-- <p class="m-0 mx-1">変換後のサイズ：{{ selectedWidth| addComma }} KB</p> -->
              </div>
            </div>
          </div>

          <div v-show="reserve">
            <p class="m-0">アップロードファイル名： {{ imageName }}</p>
            <!-- 選択した画像をリセットするためのボタン -->
            <!-- アップロードボタン -->
            <b-button :size="myCommon.selectedBtnSize" class="ml-2 p-1" variant="primary" @click="uploadImage()">Upload</b-button>
            <b-button :size="myCommon.selectedBtnSize" class="ml-2 p-1" @click="cancelImage()">Cancel</b-button>
            <!-- upload()の最後で、リスト表示 -->
          </div>
        </div>
        <!-- 画像登録 End -->

        <!-- 画像 Upload / Delete   start -->
        <div class="col-12 m-0 p-2 mt-2" style="background-color: lightsteelblue">
          <!-- <div style="background-color:darkcyan;"> -->
          <h5>Download / Delete</h5>
          <!-- <button :size="myCommon.selectedBtnSize" class="pb-0 ml-2" @click="imageDelete()">画像一覧表示</button> -->
          <b-button :size="myCommon.selectedBtnSize" class="p-1 ml-1" variant="primary" @click="imageList()">画像一覧表示</b-button>
          <b-button :size="myCommon.selectedBtnSize" class="p-1 ml-1" @click="imageListCancel()">Close</b-button>
          <!-- <p>{{ fileSize }}</p> -->
          <!-- <div v-show="toggleDel" class="m-0"> -->
          <div v-show="imageListShow" class="m-0">
            <div v-for="myImage in myImages" :key="myImage.id" class="border mt-3 float-left">
              <b-img :src="myImage.url" height="96" width="128" class="m-1" alt="file" />
              <p class="text-white m-0 ml-1">size: {{ myImage.size | addComma }} KB</p>
              <div class="m-1 d-flex">
                <!-- <b-button> -->
                <!-- <area class="m-0 ml-1 px-1 py-0 float-left" href="https://firebasestorage.googleapis.com/v0/b/nb01-d6ef5.appspot.com/o/images%2F20200428-172147-anya-potsiadlo-P8_RmeffU-w-unsplash.jpg?alt=media&token=93b0a09d-ce0e-49e2-a542-ac64d104b12b" download="sample.pdf" variant="primary" /> -->
                <!-- <b-embed type="iframe" src="https://unsplash.com/photos/P7yYuaR2AYg" allowfullscreen></b-embed> -->
                <!-- </b-button> -->
                <b-button :size="myCommon.selectedBtnSize" class="m-0 ml-1 px-1 py-0 float-left" variant="primary" @click="downloadImage(myImage)">Download</b-button>
                <!-- <a class="m-0 ml-1 px-1 py-0 float-left" :href="myImage.url" download="sample.jpg" variant="primary">Download</a> -->
                <!-- <b-button :size="myCommon.selectedBtnSize" class="m-0 ml-1 px-1 py-0 float-left" href="https://firebasestorage.googleapis.com/v0/b/nb01-d6ef5.appspot.com/o/images%2F20200428-172147-anya-potsiadlo-P8_RmeffU-w-unsplash.jpg?alt=media&token=93b0a09d-ce0e-49e2-a542-ac64d104b12b" download="sample.pdf" variant="primary">Download</b-button> -->
                <!-- <area class="m-0 ml-1 px-1 py-0 float-left" href="https://firebasestorage.googleapis.com/v0/b/nb01-d6ef5.appspot.com/o/images%2F20200428-172147-anya-potsiadlo-P8_RmeffU-w-unsplash.jpg?alt=media&token=93b0a09d-ce0e-49e2-a542-ac64d104b12b" download="sample.pdf" variant="primary" /> -->
                <!-- <area href="URL" alt="代替テキスト" download="ファイル名.拡張子"> -->
                <!-- <object data="https://firebasestorage.googleapis.com/v0/b/nb01-d6ef5.appspot.com/o/images%2F20200428-172147-anya-potsiadlo-P8_RmeffU-w-unsplash.jpg?alt=media&token=93b0a09d-ce0e-49e2-a542-ac64d104b12b">Download</object> -->
                <b-button :size="myCommon.selectedBtnSize" class="m-0 ml-1 px-1 py-0 d-flex" @click="deleteImage(myImage.path)">Del</b-button>
              </div>
            </div>
          </div>
          <!-- </div> -->
        </div>
      </div>
      <!-- 画像 Upload / Delete   end -->

      <!-- ファイル Update / Download / Delete の start -->
      <div class="col-12 m-0 p-3 mt-3" style="background-color: darkslategray">
        <h4 class="text-white">ファイル Upload / Download / Delete</h4>
        <h6 class="text-white">Powerpoint, Excel, PDF等のファイルを保存することができます。</h6>
        <!-- ファイル登録 Start -->
        <div class="col-12 m-0 p-2 mt-3" style="background-color: lightsteelblue">
          <h5>Upload</h5>
          <input ref="input2" type="file" accept="*" style="background-color: lightsteelblue" @change="selFile($event)" />
          <br />

          <div v-show="reserve">
            <p class="m-0">アップロードファイル名： {{ fileName }}</p>
            <!-- アップロードボタン -->
            <b-button :size="myCommon.selectedBtnSize" class="ml-2 p-1" variant="primary" @click="uploadFile()">Upload</b-button>
            <b-button :size="myCommon.selectedBtnSize" class="ml-2 p-1" @click="cancelFile()">Cancel</b-button>
          </div>
        </div>
        <!-- ファイル登録 End -->

        <!-- ファイル Upload / Delete   start -->
        <div class="col-12 m-0 p-2 mt-2" style="background-color: lightsteelblue">
          <!-- <div style="background-color:darkcyan;"> -->
          <h5>Download / Delete</h5>
          <b-button :size="myCommon.selectedBtnSize" class="p-1 ml-1" variant="primary" @click="fileList()">ファイル一覧表示</b-button>
          <b-button :size="myCommon.selectedBtnSize" class="p-1 ml-1" @click="fileListCancel()">Close</b-button>
          <!-- <p>{{ fileSize }}</p> -->
          <!-- <div v-show="toggleDel" class="m-0"> -->
          <div v-show="fileListShow" class="m-0">
            <hr />
            <!-- <span class="m-0">格納 削除 files/西暦 -月 日 :時分秒 -ファイル名 ファイル容量</span> -->
            <span class="m-0">格納 削除 西暦 -月 日 :時分秒 -ファイル名</span>
            <span class="m-0 ml-2 text-primary">サイズ</span>
            <!-- <div v-for="myFile in myFiles" :key="myFile.id" class="border mt-3 float-left"> -->
            <div v-for="myFile in myFiles" :key="myFile.id" class="m-0">
              <div class="m-0 mt-1 d-flex flex-row">
                <!-- <b-button :size="myCommon.selectedBtnSize" class="m-0 px-1 py-0 float-left" variant="primary" @click="downloadFile(myFile)">格納</b-button> -->
                <!-- <b-button :size="myCommon.selectedBtnSize" class="m-0 ml-1 px-1 py-0 d-flex" @click="deleteFile(myFile.name)">削除</b-button> -->
                <b-button :size="myCommon.selectedBtnSize" class="m-0 p-0" variant="primary" @click="downloadFile(myFile)">格納</b-button>
                <b-button :size="myCommon.selectedBtnSize" class="m-0 ml-1 p-0" @click="deleteFile(myFile.path)">削除</b-button>
                <span class="m-0 ml-1 pr-1">{{ myFile.name }}</span>
                <span class="m-0 ml-1 pr-1 text-primary">{{ myFile.size | addComma }}KB</span>
              </div>
            </div>
            <!-- ダウンロード ファイルの表示 -->
          </div>
        </div>
      </div>
      <!-- ファイル Upload / Download / Delete  end -->
    </div>
    <!-- <br /> -->
  </div>
  <!-- </b-container> -->
</template>

<script>
import moment from 'moment'
// import { analytics } from 'firebase'
import firebase from '~/plugins/firebase'
const formatter = new Intl.NumberFormat('ja-JP')
const storage = firebase.storage()
const storageRef = storage.ref()
// const imagesRef = storageRef.child('images')
const imagesRef = storageRef.child('images')
const filesRef = storageRef.child('files')
// const oshiraseRef = storageRef.child('oshirase')

export default {
  filters: {
    // dateFilter(date) {
    //   return moment(date).format('YYYY-MM-DD HH:mm:ss')
    // },
    addComma(num) {
      // return num.toLocalString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
      return num
    },
  },
  data() {
    return {
      templateNo: 'fileDb' + this.$route.params.general,
      pageName: '',
      file2: null,
      selected: '選択されていません。',
      selectedFile: '0',
      selectedSize: 1024,
      options: [
        { value: '128', text: '長辺 128 px' },
        { value: '320', text: '長辺 320 px' },
        { value: '640', text: '長辺 640 px' },
        { value: '1024', text: '長辺 1,024 px' },
        { value: '2048', text: '長辺 2,048 px' },
        { value: '0', text: '圧縮しない' },
      ],

      selectedWidth: 0,
      myCommon: {},
      hihyouji: false,
      showImageFlg: false,
      show: true,
      showSel: false,
      myImages: [
        {
          path: '',
          name: '',
          size: '',
          url: '',
        },
      ],
      myFiles: [
        {
          path: '',
          name: '',
          size: '',
          url: '',
        },
      ],
      myFileSize: '',
      preFileSize: '',
      afterFileSize: '',
      preFileWidth: '',
      preFileHeight: '',
      // thisFileList: '',
      // thisImageList: '',
      newImage: '',
      selectedImage: '',
      selectedImageSrc: '',
      newFile: '',
      imageName: '',
      fileName: '',
      // fileType: '',
      // fileSize: '',
      reserve: false,
      // toggleDel: false,
      imageListShow: false,
      fileListShow: false,
      toastCount: 0,
      myImageProp: {
        blank: true,
        width: 75,
        height: 75,
        class: 'm1',
      },
    }
  },
  // firestore DB からのデータ取得
  computed: {
    dbHeaders() {
      // return this.$store.getters['storeheader/orderdDbHeaders']
      return this.$store.getters['storeheader/getDbHeadersById']('menu')
    },

    getPageList() {
      return this.$store.getters['myStore/getPageList']
    },
  },
  created() {
    // 下記の firestore は store/firestore.js のファイル名
    this.$store.dispatch('firestore/init')

    // 下記の commonDB は store/commonDB.js のファイル名
    this.$store.dispatch('commonDB/init')
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
    // this.setMenuIndex(90, 0, 'fileDb', 0)
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
    // },
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
      const myIndex = {
        indexGroup,
        indexPage,
        pageTemplate,
        pageNo,
      }
      // console.log('setMenuIndex-1 --- myIndex: ', this.myIndex)
      this.$store.dispatch('myStore/set', myIndex)
    },

    selImage(e) {
      // console.log('----------- selimage ----- 1 ----------')
      // const file = e.target.files[0]
      const file = (e.target.files || e.dataTransfer.files)[0]
      this.imageName = file.name

      // changeSize() 用に this.selectedFile をセット
      this.selectedFile = e
      // console.log('----------- selimage ----- 2 ----------')
      // console.log('1-元画像のsize   in makeImage: ' + file.size)
      this.myFileSize = formatter.format((file.size / 1000).toFixed())
      this.preFileSize = this.myFileSize
      this.afterFileSize = this.myFileSize
      // console.log('2-元画像のsize   in makeImage: ' + this.preFileSize)
      // console.log('imageName in selimage: ' + this.imageName)
      // console.log('fileType in selimage: ' + file.type)
      // console.log('---- file.type ---- in selimage: ' + file.type)

      this.selectedWidth = this.selectedSize

      if (file) {
        // console.log('----------- selimage ----- 3 ----------')
        const image = new Image()
        const reader = new FileReader()
        let maxWidth = this.selectedSize

        // readAsDataURLでファイルの内容を取得
        reader.readAsDataURL(file)

        reader.onload = (e) => {
          // ファイル読取が完了した際に呼ばれる処理

          // srcに画像パスを設定することで読み込み処理が実行されます。
          image.src = e.target.result
          this.selectedImage = image
          this.selectedImageSrc = image.src
          // console.log('image.src in selImage: ' + image.src)

          image.onload = () => {
            this.preFileWidth = image.width
            this.preFileHeight = image.height
            // console.log('画像のpreFileWidth in selImage: ' + this.preFileWidth)
            // console.log('画像のpreFileHeight in selImage: ' + this.reFileHeight)

            if (this.selectedSize === '0') {
              maxWidth = image.width
              // this.selectedSize = maxWidth
              this.selectedWidth = image.width
            }

            if (image.width < image.height) {
              // 縦横比で、縦が長い場合の処理
              const ratio = image.width / image.height
              maxWidth = image.width * ratio
              // console.log('画像のmaxWidth in selImage: ' + maxWidth)
            }

            // this.newImage = image.width < maxWidth ? image.src : this.makeImage(image)
            this.newImage = this.preFileWidth < maxWidth ? this.selectedImageSrc : this.makeImage(this.selectedImage)

            if (this.selectedSize === '0') {
              this.afterFileSize = this.myFileSize
            } else {
              // 下記の 1.334 は実測値の平均で、根拠は不明
              this.afterFileSize = formatter.format((this.newImage.length / 1.334 / 1000).toFixed())
              // this.afterFileSize = this.newImage.length / 1.334
              // console.log('--------------- this.afterFileSize: ' + this.afterFileSize)
            }

            this.makeTumbnail(image)
          }
        }
        this.reserve = true
      }

      this.showSel = true
    },
    // 画像サイズ変更に伴う処理
    changeSize() {
      // console.log('画像をリサイズする')
      // const file = e.target.files[0]
      // const evt = this.selectedFile
      //  aaaaaaaaaaaaaaaaaaaaaaaaaa
      // const file = (this.selectedFile.target.files || this.selectedFile.dataTransfer.files)[0]
      // this.imageName = file.name
      // console.log('imageName in changeSize: ' + this.imageName)
      // this.preFileSize = formatter.format((file.size / 1000).toFixed())
      // this.afterFileSize = formatter.format((file.size / 1000).toFixed())
      // console.log('imageName in changeSize: ' + this.imageName)

      // const vm = this

      //  aaaaaaaaaaaaaaaaaaaaaaaaaa
      // if (file) {
      // const image = new Image()
      //  aaaaaaaaaaaaaaaaaaaaaaaaaa
      // const reader = new FileReader()

      // readAsDataURLでファイルの内容を取得
      //  aaaaaaaaaaaaaaaaaaaaaaaaaa
      // reader.readAsDataURL(file)

      // reader.onload = (e) => {
      // reader.onload = (this.selectedFile) => {
      // reader.onload = (evt) => {
      // console.log('----------- 1 in changeSize ------------------ ')
      // ファイル読取が完了した際に呼ばれる処
      // srcに画像パスを設定することで読み込み処理が実行されます。
      // image.src = evt.target.result
      // console.log('image.src in changeSize: ' + image.src)
      // console.log('imageName in changeSize: ' + this.imageName)
      // console.log('in selImage: ' + e.target.result)

      // image.onload = () => {
      // console.log('元画像のwidth in changeSize: ' + this.preFileWidth)
      // console.log('元画像のheight in changeSize: ' + this.preFileHeight)

      // if (this.selectedSize === '0') {
      //   maxWidth = image.width
      //   this.selectedWidth = maxWidth
      // }
      // let maxWidth = this.selectedSize

      let maxWidth = 0

      if (this.selectedSize === '0') {
        maxWidth = this.preFileWidth
        this.selectedWidth = this.preFileWidth
      } else {
        maxWidth = this.selectedSize
        this.selectedWidth = this.selectedSize
        // console.log('----------- maxWidth in changeSize : ' + maxWidth)
      }

      if (this.preFileWidth < this.preFileHeight) {
        // 縦横比で、縦が長い場合の処理
        const ratio = this.preFileWidth / this.preFileHeight
        maxWidth = this.preFileWidth * ratio
        // console.log('画像のmaxWidth in changeSize: ' + maxWidth)
      }

      // console.log('----------- 2 in changeSize ------------------ ')
      // console.log('元画像のwidth in changeSize: ' + this.preFileWidth)
      // console.log('新画像のmaxWidth in changeSize: ' + maxWidth)

      // this.newImage = this.preFileWidth < maxWidth ? this.selectedImageSrc : this.makeImage(this.selectedImage)

      if (this.selectedSize === '0') {
        this.afterFileSize = this.myFileSize
        this.newImage = this.selectedImageSrc
        // this.newImage = this.makeImage(this.selectedImageSrc)
        // console.log('---- 1-1 ----- this.newImage  in changeSize: ' + this.newImage)
      } else {
        if (this.preFileWidth < maxWidth) {
          this.newImage = this.selectedImageSrc
          // console.log('---- 2-1 ----- this.newImage  in changeSize: ' + this.newImage)
        } else {
          // console.log('---- 2-2-1 ----- this.selectedImage  in changeSize: ' + this.selectedImage)
          this.newImage = this.makeImage(this.selectedImage)
          // console.log('---- 2-2-2----- this.newImage  in changeSize: ' + this.newImage)
        }

        if (this.selectedSize === '0') {
          this.afterFileSize = this.myFileSize
        } else {
          // 下記の 1.334 は実測値の平均で、根拠は不明
          this.afterFileSize = formatter.format((this.newImage.length / 1.334 / 1000).toFixed())
          // console.log('---- 1-2 ----- this.afterFileSize  in changeSize: ' + this.afterFileSize)
          // this.afterFileSize = this.newImage.length / 1.334
          // console.log('---- 3-1 ----- this.afterFileSize in changeSize: ' + this.afterFileSize)
        }
      }

      // this.newImage = this.src
      // this.makeTumbnail(image)
      // }
      // }
      this.reserve = true
      //  aaaaaaaaaaaaaaaaaaaaaaaaaa
      // }

      this.showSel = true
    },
    // 圧縮画像を作る
    makeImage(image) {
      // console.log('縮小画面を作る')
      // canvas要素を作成
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      let width = this.selectedWidth
      let height = this.selectedWidth
      // const ratio = image.width / image.height
      const ratio = this.preFileWidth / this.preFileHeight
      // console.log('image.width   in makeImage: ' + image.width)
      // console.log('image.height in makeImage: ' + image.height)

      if (this.preFileWidth < this.preFileHeight) {
        width = width * ratio
      } else {
        height = height / ratio
      }

      // 縦横比を算出
      // const ratio = image.height / image.width

      // 生成する画像の横幅
      // const width = 320
      // width = 1024

      // console.log('画像のwidth in selImage: ' + width)
      // console.log('画像のheight in selImage: ' + height)

      // height = width * ratio
      canvas.width = width
      canvas.height = height

      // canvas描画作成
      ctx.drawImage(image, 0, 0, this.preFileWidth, this.preFileHeight, 0, 0, width, height)

      // ----------- サイズ計算のため追加 start -----------
      // console.log('元画像のsize   in makeImage: ' + this.preFileSize)
      // console.log('元画像のWidth  in makeImage: ' + this.preFileWidth)
      // console.log('元画像のHeight in makeImage: ' + this.preFileHeight)
      // console.log('新画像のWidth  in makeImage: ' + width)
      // console.log('新画像のHeight in makeImage: ' + height)

      // const thisPreFilesize = parseInt(this.preFileSize, 10)
      // const ratio2 = thisPreFilesize / (this.preFileWidth * this.preFileHeight)
      // this.afterFileSize = ratio2 * width * height

      // canvasに描画したデータを取得
      // const canvasImage = document.createElement('canvas').get(0)

      // オリジナル容量(画質落としてない場合の容量)を取得
      // const originalBinary = canvasImage.toDataURL('image/jpeg') // 画質落とさずバイナリ化
      // const originalBlob = base64ToBlob(originalBinary) // 画質落としてないblobデータをアップロード用blobに設定
      // console.log('originalBinary.size: ' + originalBinary.size)
      // ----------- サイズ計算のため追加 end -----------

      // data_url形式に変換したものを返す
      return canvas.toDataURL('image/jpeg')
    },
    // サムネイルを作成する
    makeTumbnail(image) {
      // console.log('makeTumbnail: ' + image)
      // 予めHTMLに記述したcanvasを指定
      const canvas = this.$refs.thumbnail
      const ctx = canvas.getContext('2d')

      // 縦横比を算出
      const ratio = image.width / image.height

      // サムネイルのサイズを指定
      const height = 128
      const width = height * ratio

      // サムネイルに画像を描画
      canvas.height = height
      canvas.width = width

      // サムネイルに画像を描画
      ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height)
    },
    // 入力データをリセット
    cancelImage() {
      const canvas = this.$refs.thumbnail
      this.newImage = ''
      this.newFile = ''

      // サムネイル用canvasのサイズを0に
      canvas.height = 0
      canvas.width = 0

      // inputの入力をリセット
      this.$refs.input1.value = ''
      // console.log('input1.value : ' + this.$refs.input1.value)

      // 選択したフィアル名のリセット
      this.imageName = ''

      this.reserve = false
      // this.reserve = true
      this.showSel = false
      // this.selected = '選択されていません。'
    },
    // 画像をアップロードする
    // upload() {
    //   if (this.fileType === 'png' || this.fileType === 'jpg' || this.fileType === 'jpeg') {
    //     console.log('file 拡張子は 画像: ' + this.fileType)
    //     this.uploadImage()
    //   } else {
    //     console.log('file 拡張子は 画像以外: ' + this.fileType)
    //     // this.newFile = this.src
    //     this.reserve = true
    //     this.uploadNotImage()
    //   }
    // },

    // 画像ファイル以外の保存
    // uploadNotImage() {

    //   const dateNow = Date.now()
    //   const imageNameDate = moment(dateNow).format('YYYYMMDD-HHmmss_')
    //   this.imageName = imageNameDate + this.imageName
    //   const fileImage = imagesRef.child(this.imageName)

    //   fileImage.put(this.newFile).then((snapshot) => {
    //     this.cancelImage()
    //     this.toastFileUpdate('ファイル アップロード', '完了しました。')

    //     this.imageList()
    //   })
    // },
    uploadImage() {
      const photo = this.newImage

      // アップロード先のフォルダ、ファイル名を指定
      const dateNow = Date.now()
      const imageNameDate = moment(dateNow).format('YYYYMMDD-HHmmss-')
      this.imageName = imageNameDate + this.imageName
      // console.log('imageName-2: ' + this.imageName)
      const fileImage = imagesRef.child(this.imageName)

      // ファイルをアップロード
      fileImage.putString(photo, 'data_url').then((snapshot) => {
        // console.log('photo uploaded')

        // 入力データをリセット
        this.cancelImage()
        // トースト: ファイル アップデート完了しました。
        this.toastFileUpdate('ファイル アップロード', '完了しました。')

        // 画像リスト 表示
        this.imageList()
      })
    },
    toastFileUpdate(titleData, mainData) {
      this.$bvToast.toast(mainData, {
        title: titleData,
        autoHideDelay: 5000,
      })
    },
    getImageUrl(filePath, imageName) {
      // console.log('1 filePath(フォルダ名含む) in getImageUrl: ' + filePath)
      // filePath で指定した画像ファイルの Path を取得
      const nameUrl = { path: filePath, name: imageName }
      // const nameUrl = { name: filePath, url: '', size: '' }
      // const nameUrl: {name: any, url: any}

      // Url の取得
      firebase
        .storage()
        .ref()
        .child(filePath)
        .getDownloadURL()
        .then((url) => {
          // this.myImage = url
          // console.log('1 url:  ' + url)
          nameUrl.url = url
          // console.log('nameUrl.path: ' + nameUrl.path)
          // console.log('nameUrl.name: ' + nameUrl.name)
          // console.log('nameUrl.url: ' + nameUrl.url)
          // this.myImages.push(nameUrl)
          // console.log('myImages.name: ' + this.myImages[0].name)
          // console.log('myImages.url: ' + this.myImages[0].url)
        })

      // ファイル サイズの取得
      // const mySize = ''

      firebase
        .storage()
        .ref()
        .child(filePath)
        // .child('images/' + filePath)
        // .getMetadata(mySize)
        .getMetadata()
        .then((metaData) => {
          nameUrl.size = formatter.format((metaData.size / 1000).toFixed())
          this.myImages.push(nameUrl)
          // console.log('nameUrl.size: ' + nameUrl.size)
        })

      // console.log('1: ' + this.myImage)
    },
    // getImageSize(imageName) {
    //   const nameUrl = { name: imageName, url: '', size: '' }

    //   firebase
    //     .storage()
    //     .ref()
    //     .child(imageName)
    //     .getDownloadURL()
    //     .then((url) => {
    //       nameUrl.url = url
    //       this.myImages.push(nameUrl)
    //     })
    // },
    imageList() {
      // FireStrage のフォルダとファイルのリストを取得
      // this.showImageReg = false

      this.myImages = []
      // const imagesRef = storageRef
      // const imagesRef = storageRef.child('images')
      const vm = this

      // console.log('imagesRef: ', imagesRef)
      this.imageListShow = true

      imagesRef
        .listAll()
        .then(function (res) {
          // res.prefixes.forEach(function(folderRef) {
          for (let i = 0; i < res.prefixes.length; i++) {
            // console.log('res.prefixes[i]: ', res.prefixes[i])
          }
          // res.items.forEach(function(itemRef) {
          for (let i = 0; i < res.items.length; i++) {
            // ****************** 以下の log は重要 ：Firestrageのデータを見れる ************
            // console.log('res.items[i]: ', res.items[i])
            // console.log('path: ' + res.items[i].location.path)
            // console.log('name: ' + res.items[i].name)
            vm.getImageUrl(res.items[i].location.path, res.items[i].name)
          }
          // this.thisFileList = itemRef.location.path
          // console.log('res: ' + res)
        })
        .catch(function (error) {
          alert('error in imageList: ' + error)
          // console.error('error in imageList: ', error)
        })
    },
    // selImage(imageUrl, index2) {
    // alert('ファイル選択 in selImage: ' + imageUrl)
    // this.selected = 'No.' + index2
    // this.oshirase.fileUrl = imageUrl
    // this.showImageReg = true
    // },
    // imageCancel() {
    //   this.imageListShow = false
    //   // this.showImageReg = true
    //   this.oshirase.fileUrl = 'https://firebasestorage.googleapis.com/v0/b/nb01-d6ef5.appspot.com/o/images%2F20200423-142543-no_image.png?alt=media&token=5542a43d-28f0-415b-a13c-8574c4a73999'
    //   this.selected = '選択されていません。'
    // },
    imageListCancel() {
      this.imageListShow = false
    },
    downloadImage(myImage) {
      // console.log('url in downloadFile: ' + myFile.url)
      // console.log('---- name in downloadFile: ' + myFile.name)

      const xhr = new XMLHttpRequest()
      xhr.responseType = 'blob'
      xhr.onload = function (event) {
        // blobがファイルのデータです
        const blob = xhr.response
        // aタグをつくります※この辺は自由にアプリに合わせてください
        const aDL = document.createElement('a')
        // ファイルデータに紐づくダウンロードリンクを設定します
        aDL.href = URL.createObjectURL(blob)
        // aDL.textContent = 'download link'
        aDL.download = myImage.name
        aDL.style = 'display: none'
        aDL.click()
        document.body.appendChild(aDL)
      }
      xhr.open('GET', myImage.url)
      xhr.send()
      // console.log('xhr in downloadFile' + xhr.response)
    },
    deleteImage(deleteImagePath) {
      this.$swal({
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

          const desertRef = storageRef.child(deleteImagePath)
          // const desertRef = storageRef.child('images/' + deleteImagePath)

          desertRef
            .delete()
            .then(() => {
              // alert('ファイル削除完了')
              this.toastFileUpdate('ファイル 削除', '完了しました。')
              // this.toggleDel = false
              this.imageListShow = false
              // this.imageDelete()
              this.imageList()
            })
            .catch((error) => {
              alert('ファイル削除 error in deleteImage: ' + error)
            })
        }
      })
    },
    // 画像関連処理はここまで

    // 以下は、画像以外のファイル処理
    selFile(e) {
      const file = (e.target.files || e.dataTransfer.files)[0]
      this.fileName = file.name
      this.selectedFile = file

      // console.log('fileName in selFile: ' + this.fileName)
      // console.log('fileType in selFile: ' + file.type)

      this.reserve = true
      // this.showSel = true
    },
    uploadFile() {
      // const fileData = this.selectedFile.target.result

      // アップロード先のフォルダ、ファイル名を指定
      const dateNow = Date.now()
      const fileNameDate = moment(dateNow).format('YYYY-MMDD:HHmmss-')
      this.fileName = fileNameDate + this.fileName
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
      })
    },
    cancelFile() {
      // inputの入力をリセット
      this.$refs.input2.value = ''
      // console.log('this.$refs.input2.value : ' + this.$refs.input2.value)

      // 選択したフィアル名のリセット
      this.fileName = ''

      this.reserve = false
      // this.showSel = false
    },
    fileList() {
      // FireStrage のフォルダとファイルのリストを取得

      this.myFiles = []
      // const filesRef = storageRef
      // const filesRef = storageRef.child('files')
      const vm = this

      // console.log('filesRef: ', filesRef)
      this.fileListShow = true

      filesRef
        .listAll()
        .then(function (res) {
          // res.prefixes.forEach(function(folderRef) {
          for (let i = 0; i < res.prefixes.length; i++) {
            // フォルダの検索
            // console.log('res.prefixes[i]: ', res.prefixes[i])
          }
          // res.items.forEach(function(itemRef) {
          for (let i = 0; i < res.items.length; i++) {
            // ファイルの検索
            // ****************** 以下の log は重要 ：Firestrageのデータを見れる ************
            // console.log('res.items[i]: ', res.items[i])
            // console.log('fimeName in fileList: ' + res.items[i].name)
            // alert('path: ' + res.items[i].location.path)
            vm.getFileUrl(res.items[i].location.path, res.items[i].name)
          }
          // this.thisFileList = itemRef.location.path
          // console.log('res: ' + res)
        })
        .catch(function (error) {
          alert('error in fileList: ' + error)
          // console.error('error in imageList: ', error)
        })
    },
    getFileUrl(filePath, fileName) {
      // console.log('111 filePath: ' + filePath)
      // console.log('222 fileName: ' + fileName)
      // const fileName = '20200402-170705-anya-potsiadlo-P8_RmeffU-w-unsplash.jpg'
      const nameUrl = { path: filePath, name: fileName }
      // const nameUrl = { name: fileName, url: '', size: '' }
      // const nameUrl: {name: any, url: any}

      // filePath で指定した画像ファイルの Url の取得
      firebase
        .storage()
        .ref()
        .child(filePath)
        .getDownloadURL()
        .then((url) => {
          // this.myImage = url
          // console.log('1 url:  ' + url)
          nameUrl.url = url
          // console.log('nameUrl.name: ' + nameUrl.name)
          // console.log('nameUrl.url: ' + nameUrl.url)
          // this.myImages.push(nameUrl)
          // console.log('myImages.name: ' + this.myImages[0].name)
          // console.log('myImages.url: ' + this.myImages[0].url)
        })

      // ファイル サイズの取得
      firebase
        .storage()
        .ref()
        .child(filePath)
        .getMetadata()
        .then((metaData) => {
          nameUrl.size = formatter.format((metaData.size / 1000).toFixed())
          this.myFiles.push(nameUrl)
          // console.log('nameUrl.size: ' + nameUrl.size)
        })

      // console.log('1: ' + this.myImage)
    },
    fileListCancel() {
      this.fileListShow = false
    },
    // downloadFile(myFile) {
    //   this.data = document.getElementById('fileId')
    //   console.log('url in downloadFile: ' + myFile.url)
    //   this.data.src = myFile.url
    // },
    downloadFile(myFile) {
      // console.log('url in downloadFile: ' + myFile.url)
      // console.log('name in downloadFile: ' + myFile.name)

      const xhr = new XMLHttpRequest()
      xhr.responseType = 'blob'
      xhr.onload = function (event) {
        // blobがファイルのデータです
        // const blob = xhr.response
        // aタグをつくります※この辺は自由にアプリに合わせてください
        const aDL = document.createElement('a')
        // ファイルデータに紐づくダウンロードリンクを設定します
        // aDL.href = URL.createObjectURL(blob)
        aDL.href = myFile.url
        // console.log('aDL.href in downloadFile: ' + aDL.href)
        // aDL.textContent = 'download link'
        // aDL.setAttribute('download', myFile.name)
        aDL.download = myFile.name
        aDL.style = 'display: none'
        aDL.click()
        document.body.appendChild(aDL)
      }
      xhr.open('GET', myFile.url)
      xhr.send()
      // appendText('処理を実行しました。' + '\n')
    },
    deleteFile(deleteFilePath) {
      this.$swal({
        title: '画像を削除します。よろしいでしょうか？',
        text: 'この操作は取り消しできません。',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '削除',
        cancelButtonText: 'キャンセル',
        focusCancel: true,
      }).then((result) => {
        if (result.value) {
          // console.log('deleteFilePath: ' + deleteFilePath)
          const desertRef = storageRef.child(deleteFilePath)
          // const desertRef = storageRef.child('images/' + deleteFilePath)

          // DBに保存されているファイルの削除
          desertRef
            .delete()
            .then(() => {
              // alert('ファイル削除完了')
              this.toastFileUpdate('ファイル 削除', '完了しました。')
              // ファイル一覧の再表示
              this.fileList()
              // this.fileListShow = false
            })
            .catch((error) => {
              alert('ファイル削除 error in deleteFile: ' + error)
            })
        }
      })
    },
    dummy() {
      // console.log('dummy')
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
