<template>
  <div class="container-fluid no-gutters">
    <!-- ---------- バックグラウンド画像 start ----------- -->
    <!--
    <div class="bg-image myColor">
    <div>aaaaa</div>
      <div>bbbb</div>
    </div>
    <p>xxxxxxxxx</p>
     -->
    <!-- ---------- バックグラウンド画像 end ----------- -->

    <!-- <h5 class="text-light bg-info text-center m-0 p-1">{{ myData.m4 }} - {{ myData.m44 }}</h5> -->

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
        <h5 class="col-12 mx-2 m-0 p-0 py-1 text-white">以下は管理機能です。</h5>
        <h6 class="col-12 mx-2 m-0 p-0 py-1 text-white">画像ファイル(.jpeg等)を表示することができます。</h6>
        <h6 class="col-12 mx-2 m-0 p-0 py-1 text-white">画像ファイルの作成例: Powerpointのファイルメニューからエクスポート</h6>

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
                <b-button :size="commonData.selectedBtnSize" class="px-1 py-0 m-1" @click="remove(dbPage.id)">削除</b-button>
              </div>
            </div>
          </div>
        </div>

        <!-- 新規登録 start -->
        <div v-show="showReg" class="col-12 m-0 p-0">
          <div class="m-0 p-0 mt-2" style="background-color: lightblue">
            <h4 class="mx-2 mb-0 p-0 py-1">新規登録</h4>

            <button :size="commonData.selectedBtnSize" class="ml-2 mb-2" @click="imageList()">画像表示</button>
            <div v-show="toggleShow">
              <div class="m-2">
                下の画像から選択してください。: <strong>{{ selected }}</strong>
              </div>

              <div class="row no-gutters">
                <b-form-group v-for="(myImage, index2) in myImages" :key="myImage.id" class="col-4">
                  <div class="image_box" @click="selImage(myImage.url, index2)">
                    <!-- <b-img v-model="selected" :src="myImage.url" fluid class="m-0 p-1" alt="file"> </b-img> -->
                    <b-embed v-model="selected" :src="myImage.url" fluid type="embed" class="m-0 p-1" alt="file"> </b-embed>
                    <b-form-radio v-model="selected" :value="'No.' + ++index2" class="positionRadioBtn ml-4 p-0"> </b-form-radio>
                  </div>
                </b-form-group>
              </div>
              <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-1 ml-2 px-1 py-0" @click="myReg()">登録</b-button>

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
        <!-- 新規登録 End -->

        <div class="col-12 m-0 p-0">
          <div class="m-0 p-3 mt-3" style="background-color: midnightblue">
            <h4 class="text-white">画像新規登録・削除</h4>
            <!-- 画像登録 Start -->
            <div class="col-12 m-0 p-2 mt-3" style="background-color: honeydew">
              <h5>画像登録</h5>
              <!-- <input ref="input" type="file" accept=".jpg, .png, .pdf" @change="fileExtension($event)" /> -->
              <input ref="input" type="file" accept="image/*, .pdf" @change="fileExtension($event)" />
              <br />

              <!-- <div v-show="reserve">
                <div>
                  サムネイル用canvas
                  <canvas ref="thumbnail" class="mt-1" :width="0" :height="0" />
                </div>

                <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 px-1 py-0" @click="upload()">Upload</b-button>
                <b-button :size="commonData.selectedBtnSize" class="ml-2 m-0 px-1 py-0" my-0 @click="reset()">Cancel</b-button>
              </div> -->
            </div>
            <!-- 画像登録 End -->

            <!-- 画像削除 Start -->
            <div class="col-12 m-0 p-2 mt-2" style="background-color: honeydew">
              <h5>画像削除</h5>
              <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 ml-2 px-1 py-0" @click="imageDelete()">画像リスト表示</b-button>
              <b-button :size="commonData.selectedBtnSize" class="m-0 ml-2 px-1 py-0" @click="imageDeleteCancel()">閉じる</b-button>
            </div>
            <!-- </div> -->

            <!-- 画像リスト表示 -->
            <div v-show="toggleDel" class="m-0 p-0">
              <div class="col-12 m-0 p-0 mt-2" style="background-color: honeydew">
                <div class="row no-gutters">
                  <div v-for="myImage in myImages" :key="myImage.id" class="m-0 p-1 col-4">
                    <div class="border m-0 p-0">
                      <!-- <b-img :src="myImage.url" fluid class="m-0" alt="file" /> -->
                      <b-embed :src="myImage.url" fluid class="m-0" type="embed" alt="file" />
                      <b-button :size="commonData.selectedBtnSize" class="m-1 ml-2 px-1 py-0 d-flex" @click="deleteImage(myImage.name, myImage.url)">削除</b-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 画像削除 End -->
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
const imagesRef = storageRef.child('aaa/a44')
const db = firebase.firestore()

export default {
  data() {
    return {
      pageNo: 'a44',
      selected: '選択されていません。',
      showReg: true,
      // reserve: false,
      toggleDel: false,
      toggleShow: false,
      hihyouji: false,
      page: {
        fileUrl: '',
      },
      myImages: [
        {
          name: '',
          url: '',
        },
      ],
      commonData: {},
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
    // ...mapGetters({ aaa: 'orderdMainDate' }),

    isLogin() {
      return this.$store.getters['user/isLogin']
    },

    dbPages() {
      return this.$store.getters['aaa/orderdMainDate']
    },
  },
  // created は画面を開いたとき呼ばれる。
  created() {
    // 下記の aaa は store/aaa.js のファイル名
    // this.$store.dispatch('aaa/init')
    this.$store.dispatch('aaa/init', db.collection('aaa').doc(this.pageNo).collection(this.pageNo).orderBy('page.fileUrl', 'desc'))

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
    this.selnum(44)
  },

  // ⑨ methods は呼び出される度に実行
  // データが変更された時、反映したくない場合はmethodsを利用
  methods: {
    selnum(num) {
      // this.selected = num
      // console.log('header selnum selected: ' + num)
      this.$nuxt.$emit('selnum', num)
    },

    add() {
      // 下記の aaa は store/aaa.js のファイル名
      // this.$store.dispatch('aaa/add', this.page)
      this.$store.dispatch('aaa/add', { pageNo: this.pageNo, page: this.page })
      // this.page.fileUrl = ''
      this.page = ''
    },
    remove(id) {
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
          // this.$store.dispatch('aaa/remove', id)
          this.$store.dispatch('aaa/remove', { pageNo: this.pageNo, id })
        }
      })
    },
    myReg() {
      if (this.page.fileUrl === '') {
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
        this.page = ''
        this.selected = '選択されていません。'
        // this.reserve = false
      }
    },
    fileExtension(e) {
      const file = (e.target.files || e.dataTransfer.files)[0]

      if (typeof file === 'undefined') {
        // this.reserve = false
        this.selected = '選択されていません。'
        return
      }

      this.fileName = file.name
      const pos = this.fileName.lastIndexOf('.')

      this.fileType = this.fileName.slice(pos + 1)

      const vm = this

      if (this.fileType === 'png' || this.fileType === 'jpg' || this.fileType === 'jpeg') {
        vm.resize(e)
      } else {
        this.newFile = file
        // this.reserve = true
      }

      this.uploadPop()
    },
    // 画像関連メソッド
    resize(e) {
      // console.log('画像をリサイズする')
      const file = (e.target.files || e.dataTransfer.files)[0]
      this.fileName = file.name
      // console.log('fileName-2: ' + this.fileName)

      if (file) {
        const image = new Image()
        const reader = new FileReader()
        const vm = this
        const maxWidth = 1280

        reader.readAsDataURL(file)

        reader.onload = (e) => {
          image.src = e.target.result
          image.onload = () => {
            vm.newImage = this.width < maxWidth ? this.src : vm.makeImage(image)
            // vm.makeTumbnail(image)
          }
        }
        // this.reserve = true
      }
    },
    // 縮小画面を作る
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
    // サムネイルを作成する
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
          this.upload()
        } else {
          // 入力データをリセット
          this.reset()
        }
      })
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
    uploadImage() {
      // fileItem にデータをセット
      // this.fileItem.name = this.fileName

      const photo = this.newImage

      // アップロード先のフォルダ、ファイル名を指定
      // const fileNameDate = this.todaySet3()
      // this.fileName = fileNameDate + this.fileName
      // console.log('fileName-2: ' + this.fileName)
      const fileImage = imagesRef.child(this.fileName)

      // ファイルをアップロード
      fileImage.putString(photo, 'data_url').then((snapshot) => {
        // console.log('photo uploaded')

        // 入力データをリセット
        this.reset()
        // トースト: ファイル アップデート完了しました。
        this.toastFileUpdate('ファイル アップロード', '完了しました。')

        // 画像リスト 表示
        this.imageList()
        // this.imageDelete()
      })
      // this.showImageReg = false
      // console.log('showImageReg: ' + this.showImageReg)
    },

    // 画像ファイル以外の保存
    uploadNotImage() {
      // const photo = this.newImage

      // アップロード先のフォルダ、ファイル名を指定
      // const dateNow = Date.now()
      // const fileNameDate = moment(dateNow).format('YYYYMMDD-HHmms)
      // const fileNameDate = this.todaySet3()
      // this.fileName = fileNameDate + this.fileName
      const fileImage = imagesRef.child(this.fileName)
      // console.log('newFile at bbbbbb: ' + this.newFile)

      // ファイルをアップロード
      // fileImage.putString(this.newFile, 'data_url').then((snapshot) => {
      fileImage.put(this.newFile).then((snapshot) => {
        // console.log('photo uploaded')

        // 入力データをリセット
        this.reset()
        // トースト: ファイル アップデート完了しました。
        this.toastFileUpdate('ファイル アップロード', '完了しました。')
      })
      // 画像リスト 表示
      this.imageList()
      // this.imageDelete()

      // this.showImageReg = false
    },
    toastFileUpdate(titleData, mainData) {
      this.$bvToast.toast(mainData, {
        title: titleData,
        autoHideDelay: 5000,
      })
    },

    // todaySet3() {
    //   const myNow = new Date()

    //   const YYYY = myNow.getFullYear()

    //   // .getMonth()は 0 〜 11 のため +1 すること
    //   let MM = myNow.getMonth() + 1
    //   if (MM < 10) {
    //     MM = '0' + MM
    //   }

    //   let DD = myNow.getDate()
    //   if (DD < 10) {
    //     DD = '0' + DD
    //   }

    //   let hh = myNow.getHours()
    //   if (hh < 10) {
    //     hh = '0' + hh
    //   }

    //   let mm = myNow.getMinutes()
    //   if (mm < 10) {
    //     mm = '0' + mm
    //   }

    //   let ss = myNow.getSeconds()
    //   if (ss < 10) {
    //     ss = '0' + ss
    //   }

    //   const YYYYMMDD = String(YYYY) + String(MM) + String(DD)
    //   const hhmmss = String(hh) + String(mm) + String(ss)

    //   const myTodayTime = YYYYMMDD + '-' + hhmmss + '-'
    //   // console.log('myTodayTime in todaySet3(): ', myTodayTime)
    //   return myTodayTime
    // },
    // toastFileUpdate(titleData, mainData) {
    //   this.$bvToast.toast(mainData, {
    //     title: titleData,
    //     autoHideDelay: 5000
    //   })
    // },
    // fileName で指定した画像ファイルの Path = Url を取得
    getImageUrl(fileName) {
      const nameUrl = { name: fileName, url: '' }

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
          // this.myImages.sort(function(a, b) {
          //   if (a.name > b.name) {
          //     return 1
          //   } else {
          //     return -1
          //   }
          // })
        })
    },
    imageList() {
      // console.log('aaaaaaa ---- in imageList: ')
      // FireStrage のフォルダとファイルのリストを取得

      this.myImages = []
      const vm = this

      this.toggleShow = true

      imagesRef
        .listAll()
        .then(function (res) {
          for (let i = 0; i < res.prefixes.length; i++) {}
          for (let i = 0; i < res.items.length; i++) {
            vm.getImageUrl(res.items[i].location.path)
          }
        })
        .catch(function (error) {
          alert('error in imageList: ' + error)
        })
    },
    selImage(imageUrl, index2) {
      // alert('ファイル選択 in selImage: ' + imageUrl)
      this.selected = 'No.' + index2
      this.page.fileUrl = imageUrl
      // this.showImageReg = true
      // console.log('showImageReg: ' + this.showImageReg)
    },
    imageDeleteCancel() {
      this.toggleDel = false
    },
    imageDelete() {
      // FireStrage のフォルダとファイルのリストを取得

      this.myImages = []
      const vm = this

      this.toggleDel = true

      imagesRef
        .listAll()
        .then(function (res) {
          // res.prefixes.forEach(function(folderRef) {
          for (let i = 0; i < res.prefixes.length; i++) {
            // console.log('res.prefixes[i]: ', res.prefixes[i])
          }
          // res.items.forEach(function(itemRef) {
          for (let i = 0; i < res.items.length; i++) {
            vm.getImageUrl(res.items[i].location.path)
          }
        })
        .catch(function (error) {
          alert('error in imageDelete: ' + error)
          // console.error('error in imageDelete: ', error)
        })
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
