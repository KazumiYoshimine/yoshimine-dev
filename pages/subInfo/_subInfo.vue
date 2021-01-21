<template>
  <div class="container-fluid">
    <!-- <h5 v-if="myMenu" class="text-light text-center m-0 p-1" :style="myCommon.buttonColorBasicSet">{{ myMenu.m64 }}</h5> -->
    <h5 class="text-light text-center m-0 mb-2 p-2" :style="myCommon.buttonColorBasicSet">{{ pageName }}</h5>

    <div class="row m-0 mt-2 p-0 border text-center align-self-center" style="background-color: aliceblue">
      <span class="col-3">会社名</span>
      <span class="col-3 border-left">設立</span>
      <span class="col-3 border-left">事業内容</span>
      <span class="col-3 border-left">アクセス</span>
    </div>

    <div v-for="(dbPage, index) in dbPages" :key="dbPage.id" class="row m-0 p-0 border text-break overflow-auto">
      <b-link target="_blank" :href="dbPage.page.linkUrl" class="col-3 m-0 p-0 px-1 align-self-center">{{ dbPage.page.titleName }}</b-link>

      <div class="col-3 d-flex m-0 p-0 border-left">
        <div class="m-0 px-1 align-self-center text-break overflow-auto">
          <div class="m-0 p-0">{{ dbPage.page.mainDate }}</div>
        </div>
      </div>

      <div class="col-3 d-flex m-0 p-0 border-left">
        <div class="m-0 px-1 align-self-center text-break overflow-auto">
          <span class="m-0 p-0">{{ dbPage.page.mainText }}</span>
        </div>
      </div>

      <div class="col-3 d-flex m-0 p-0 border-left">
        <div class="m-0 p-0 align-self-center">
          <div v-b-modal="'data-' + index" class="m-1">
            <b-img :src="dbPage.page.fileUrl" fluid class="m-0" alt="file"> </b-img>
          </div>
        </div>
      </div>

      <!-- 。。。。。。。。。。。 モーダル表示 start 。。。。。。。。。。。 -->
      <b-modal :id="'data-' + index" hide-header size="xl">
        <!-- タイトル表示 -->
        <div class="border m-1 mt-1 pb-1" style="background-color: honeydew">
          <p class="m-0 p-1">{{ dbPage.page.titleName }}</p>
          <!-- <p class="text-right m-0 pl-2 pr-2">{{ dbPage.page.mainDate }}</p> -->
        </div>

        <!-- 画像表示 -->
        <b-img :src="dbPage.page.fileUrl" fluid alt="Responsive image"></b-img>

        <!-- 本文表示 -->
        <div class="modal-body m-1 p-1">
          <h5 class="text-justify text-break m-0 p-2" style="white-space: pre-wrap">{{ dbPage.page.mainText }}</h5>
        </div>
      </b-modal>
      <!-- 。。。。。。。。。。。 モーダル表示 end 。。。。。。。。。。。 -->
    </div>

    <div v-show="isLogin" class="m-0 p-0">
      <!-- ============================== 管理機能 ============================== -->
      <div class="row m-0 mt-2 p-2 bg-dark">
        <h5 class="col-12 mx-2 m-0 p-0 py-1 text-white">以下は管理機能です。</h5>
        <!-- 登録状況 -->

        <!-- 現在の登録状況 ＆ 削除 start -->
        <div class="col-12 m-0 mt-2 p-0" style="background-color: lightsteelblue">
          <h5 class="mx-2 mb-0 p-0 pt-1">現在の登録状況 ＆ 削除</h5>
          <p class="mx-2 mb-0 p-0">「日付」が新しい順にソートされます。</p>

          <div class="row m-0 mt-2 p-0 border text-center align-self-center" style="background-color: aliceblue">
            <span class="col-4">会社名</span>
            <span class="col-2 border-left">設立</span>
            <span class="col-3 border-left">事業内容</span>
            <span class="col-3 border-left">アクセス</span>
          </div>

          <!-- <div v-for="(dbPage, index) in dbPages" :key="dbPage.id" class="row m-0 p-0 border text-break overflow-auto"> -->
          <div v-for="dbPage in dbPages" :key="dbPage.id" class="row m-0 p-0 border text-break overflow-auto">
            <div class="col-1 m-0 p-0 align-self-center">
              <b-button :size="myCommon.selectedBtnSize" class="px-1 py-0 m-1" variant="primary" @click="edit(dbPage.id)">編集</b-button>
              <br />
              <b-button :size="myCommon.selectedBtnSize" class="px-1 py-0 m-1" @click="remove(dbPage.id)">削除</b-button>
            </div>

            <b-link target="_blank" :href="dbPage.page.linkUrl" class="col-3 m-0 p-0 px-1 align-self-center">{{ dbPage.page.titleName }}</b-link>

            <div class="col-2 d-flex m-0 p-0 border-left">
              <div class="m-0 px-1 align-self-center">
                <div class="m-0 p-0">{{ dbPage.page.mainDate }}</div>
              </div>
            </div>

            <div class="col-3 d-flex m-0 p-0 border-left">
              <div class="m-0 px-1 align-self-center text-break overflow-auto">
                <span class="m-0 p-0">{{ dbPage.page.mainText }}</span>
              </div>
            </div>

            <div class="col-3 d-flex m-0 p-0 border-left">
              <div class="m-0 p-0 align-self-center">
                <!-- <div v-b-modal="'data-' + index" class="m-1"> -->
                <div class="m-1">
                  <b-img :src="dbPage.page.fileUrl" fluid class="m-0" alt="file"> </b-img>
                </div>
              </div>
            </div>

            <!-- 。。。。。。。。。。。 モーダル表示 start 。。。。。。。。。。。 -->
            <!-- <b-modal :id="'data-' + index" hide-header size="xl"> -->
            <!-- タイトル表示 -->
            <!-- <div class="border m-1 mt-1 pb-1" style="background-color:honeydew;"> -->
            <!-- <p class="m-0 p-1">{{ dbPage.page.titleName }}</p> -->
            <!-- <p class="text-right m-0 pl-2 pr-2">{{ dbPage.page.mainDate }}</p> -->
            <!-- </div> -->

            <!-- 画像表示 -->
            <!-- <b-img :src="dbPage.page.fileUrl" fluid alt="Responsive image"></b-img> -->

            <!-- 本文表示 -->
            <!-- <div class="modal-body m-1 p-1"> -->
            <!-- <h5 class="text-justify text-break m-0 p-2" style="white-space:pre-wrap;">{{ dbPage.page.mainText }}</h5> -->
            <!-- </div> -->
            <!-- </b-modal> -->
            <!-- 。。。。。。。。。。。 モーダル表示 end 。。。。。。。。。。。 -->
          </div>
        </div>

        <!-- 編集 start -->
        <div v-show="showEdit" class="col-12 m-0 p-0">
          <div class="m-0 p-0 mt-2" style="background-color: linen">
            <div class="d-flex flex-low">
              <h4 class="mx-2 my-0 p-0 pt-1">編集</h4>
              <b-button :size="myCommon.selectedBtnSize" variant="dark" class="m-1 px-1 py-0" @click="editCancel()">編集取消</b-button>
            </div>

            <b-form @submit="onSubmitEdit" @reset="onReset">
              <!-- <div class="row p-0 pt-2 m-0 mr-2">
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
              </div> -->

              <div class="row p-0 pt-2 m-0 mr-2">
                <b-form-group label="会社名:" class="col-sm-3 m-0 mt-1 p-0 px-1" />
                <div class="col-sm-9 m-0 p-0">
                  <b-form-input v-model="page.titleName" class="border" required placeholder="○○株式会社" />
                </div>
              </div>

              <div class="row p-0 pt-2 m-0 mr-2">
                <b-form-group label="リンクURL:" class="col-sm-3 m-0 mt-1 p-0 px-1" />
                <div class="col-sm-9 m-0 p-0">
                  <b-form-input v-model="page.linkUrl" class="border" required placeholder="会社のURL" />
                </div>
              </div>

              <div class="row p-0 pt-2 m-0 mr-2">
                <b-form-group label="設立:" class="col-3 m-0 px-1 pt-2"> </b-form-group>
                <div class="col-9 m-0 p-0">
                  <b-form-datepicker v-model="page.mainDate" class="mb-1"></b-form-datepicker>
                </div>
              </div>

              <div class="row p-0 pt-2 m-0 mr-2">
                <b-form-group label="事業内容:" class="col-3 m-0 px-1 pt-2"> </b-form-group>
                <b-form-textarea v-model="page.mainText" class="col-9" required placeholder="事業内容を記入してください。" rows="3" max-rows="6"></b-form-textarea>
              </div>

              <!-- </div> -->
              <b-button :size="myCommon.selectedBtnSize" type="submit" variant="primary" class="m-1 ml-2 px-1 py-0">登録</b-button>
              <b-button :size="myCommon.selectedBtnSize" variant="dark" class="m-1 px-1 py-0" @click="dataReset()">データリセット</b-button>
            </b-form>

            <!-- 必須ではない項目はここへ記載 -->
            <!-- <div class="row p-0 pt-2 m-0 mr-1">
              <span class="col-2 m-0 mt-2 p-1 pt-3">本文:</span>
              <b-form-textarea v-model="page.mainText" class="col-10" required placeholder="入力した内容は画像クリックで閲覧できます。" rows="3" max-rows="6"></b-form-textarea>
            </div> -->

            <hr />

            <!-- 画像添付 start-->
            <div class="mx-2 pb-2">
              <p class="mb-0">画像を変更する場合は、「画像変更」ボタンをクリックしてください。</p>
              <button :size="myCommon.selectedBtnSize" class="ml-2" @click="imageListEdit()">画像変更</button>
              <button :size="myCommon.selectedBtnSize" class="ml-2" @click="imageTorikesi()">変更取消</button>
              <button :size="myCommon.selectedBtnSize" class="ml-2" @click="imageCancel()">添付しない</button>
            </div>

            <!-- <div v-show="showImageFlg" class="col-12"> -->
            <!-- <button :size="myCommon.selectedBtnSize" class="ml-2" @click="imageList()">画像リスト表示</button> -->
            <div v-show="toggleShow">
              <!-- ここから -->
              <div class="m-2">
                下の画像から選択してください。: <strong>{{ selected }}</strong>
              </div>

              <div class="row no-gutters">
                <b-form-group v-for="(myImage, index2) in myImages" :key="myImage.id" class="col-4">
                  <div class="image_box" @click="selImage(myImage.url, index2)">
                    <b-img v-model="selected" :src="myImage.url" class="m-0" alt="file" fluid> </b-img>
                    <b-form-radio v-model="selected" :value="'No.' + ++index2" class="positionRadioBtn ml-4 p-0"> </b-form-radio>
                  </div>
                </b-form-group>
              </div>

              <!-- 以下の float-cb について： 上記の float-left の解除ができないので、style で設定 -->
              <div class="float-cb p-2">以下の「画像登録・削除」から、新たに画像を追加したり、 不要な画像を削除することができます。</div>

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

            <b-form @submit="onSubmit" @reset="onReset">
              <div class="row p-0 pt-2 m-0 mr-2">
                <b-form-group label="会社名:" class="col-sm-3 m-0 mt-1 p-0 px-1" />
                <div class="col-sm-9 m-0 p-0">
                  <b-form-input v-model="page.titleName" class="border" required placeholder="○○株式会社" />
                </div>
              </div>

              <div class="row p-0 pt-2 m-0 mr-2">
                <b-form-group label="リンクURL:" class="col-sm-3 m-0 mt-1 p-0 px-1" />
                <div class="col-sm-9 m-0 p-0">
                  <b-form-input v-model="page.linkUrl" class="border" required placeholder="会社のURL" />
                </div>
              </div>

              <div class="row p-0 pt-2 m-0 mr-2">
                <b-form-group label="設立:" class="col-3 m-0 px-1 pt-2"> </b-form-group>
                <div class="col-9 m-0 p-0">
                  <b-form-datepicker v-model="page.mainDate" class="mb-1"></b-form-datepicker>
                </div>
              </div>

              <div class="row p-0 pt-2 m-0 mr-2">
                <b-form-group label="事業内容:" class="col-3 m-0 px-1 pt-2"> </b-form-group>
                <b-form-textarea v-model="page.mainText" class="col-9" required placeholder="事業内容を記入してください。" rows="3" max-rows="6"></b-form-textarea>
              </div>

              <b-button :size="myCommon.selectedBtnSize" type="submit" variant="primary" class="m-1 ml-2 px-1 py-0">登録</b-button>
              <b-button :size="myCommon.selectedBtnSize" type="reset" variant="dark" class="m-1 px-1 py-0">リセット</b-button>
            </b-form>

            <!-- 必須ではない項目はここへ記載 -->

            <hr />

            <!-- 画像添付 start-->
            <div class="mx-2 pb-2">
              <p class="mb-0">画像を添付する場合は、「画像添付」ボタンをクリックしてください。</p>
              <button :size="myCommon.selectedBtnSize" class="ml-2" @click="imageList()">画像添付</button>
              <button :size="myCommon.selectedBtnSize" class="ml-2" @click="imageCancel()">キャンセル</button>
            </div>

            <!-- <div v-show="showImageFlg" class="col-12"> -->
            <!-- <button :size="myCommon.selectedBtnSize" class="ml-2" @click="imageList()">画像リスト表示</button> -->
            <div v-show="toggleShow">
              <!-- ここから -->
              <div class="m-2">
                下の画像から選択してください。: <strong>{{ selected }}</strong>
              </div>

              <div class="row no-gutters">
                <b-form-group v-for="(myImage, index2) in myImages" :key="myImage.id" class="col-4">
                  <div class="image_box" @click="selImage(myImage.url, index2)">
                    <b-img v-model="selected" :src="myImage.url" fluid class="m-0 p-1" alt="file"> </b-img>
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
        <!-- 新規登録 End -->

        <div class="col-12 m-0 p-0">
          <div class="m-0 p-3 mt-3" style="background-color: midnightblue">
            <h4 class="text-white">画像新規登録・削除</h4>
            <!-- 画像登録 Start -->
            <!-- <div class="col-12 m-0 p-2 mt-3" style="background-color:skyblue;"> -->
            <div class="col-12 m-0 p-2 mt-3" style="background-color: honeydew">
              <h5>画像登録</h5>
              <input ref="input" type="file" accept=".jpg, .png, .pdf" @change="fileExtension($event)" />
              <br />

              <div v-show="reserve">
                <div>
                  <!-- サムネイル用canvas -->
                  <canvas ref="thumbnail" class="mt-1" :width="0" :height="0" />
                </div>

                <!-- <p>アップロードファイル名： {{ fileName }}</p> -->
                <!-- アップロードボタン -->
                <b-button :size="myCommon.selectedBtnSize" variant="primary" class="m-0 px-1 py-0" @click="upload()">Upload</b-button>
                <b-button :size="myCommon.selectedBtnSize" class="ml-2 m-0 px-1 py-0" my-0 @click="reset()">Cancel</b-button>
                <!-- upload()の最後で、リスト表示 -->
              </div>
            </div>
            <!-- 画像登録 End -->

            <!-- 画像削除 Start -->
            <!-- <div class="col-12 m-0 p-2 mt-2"> -->
            <div class="col-12 m-0 p-2 mt-2" style="background-color: honeydew">
              <h5>画像削除</h5>
              <b-button :size="myCommon.selectedBtnSize" variant="primary" class="m-0 ml-2 px-1 py-0" @click="imageDelete()">画像リスト表示</b-button>
              <b-button :size="myCommon.selectedBtnSize" class="m-0 ml-2 px-1 py-0" @click="imageDeleteCancel()">非表示</b-button>
            </div>
            <!-- </div> -->

            <!-- 画像リスト表示 -->
            <div v-show="toggleDel" class="m-0 p-0">
              <div class="col-12 m-0 p-0 mt-2" style="background-color: honeydew">
                <div class="row no-gutters">
                  <!-- <div v-for="myImage in myImages" :key="myImage.id" class="m-0 p-1 col-4" style="background-color:lightslategray;"> -->
                  <div v-for="myImage in myImages" :key="myImage.id" class="m-0 p-1 col-4">
                    <!-- <div v-for="myImage in myImages" :key="myImage.id" class="p-1 col-4" style="background-color:lightslategray;"> -->
                    <div class="border m-0 p-0">
                      <b-img :src="myImage.url" fluid class="m-0" alt="file" />
                      <b-button :size="myCommon.selectedBtnSize" class="m-1 ml-2 px-1 py-0 d-flex" @click="deleteImage(myImage.name, myImage.url)">削除</b-button>
                    </div>
                  </div>
                  <!-- <div class="float-cb col-12"></div> -->
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 画像削除 End -->
      </div>
    </div>
    <p>{{ todaySet() }}</p>
  </div>
</template>

<script>
// import moment from 'moment'
// import { BIconClockHistory } from 'bootstrap-vue'
import firebase from '~/plugins/firebase'
const storage = firebase.storage()
const storageRef = storage.ref()
// const imagesRef = storageRef.child('images')
const imagesRef = storageRef.child('dbLink')

export default {
  // filters: {
  //   dateFilter(date) {
  //     return moment(date).format('YYYY-MM-DD HH:mm:ss')
  //   }
  // },
  data() {
    return {
      templateNo: 'subInfo' + this.$route.params.general,
      pageName: '',
      todaySetFlg: false,
      editId: '',
      myMenu: {},
      myCommon: {},
      selected: '選択されていません。',
      showEdit: false,
      showReg: true,
      // showImageReg: true,
      // showImageFlg: false,
      // show: true,
      hihyouji: false,
      page: {
        titleName: '',
        linkUrl: '',
        // mainDate: moment(Date()).format('YYYY-MM-DD'),
        mainDate: '',
        mainText: '',
        // fileUrl: 'https://firebasestorage.googleapis.com/v0/b/hiro1-223af.appspot.com/o/no_image.png?alt=media&token=d8ab83f9-db9c-46a2-8795-fe2ad439f419'
        fileUrl: process.env.NO_IMAGE_URL,
      },
      myImages: [
        {
          name: '',
          url: '',
        },
      ],
      // thisFileList: '',
      newImage: '',
      newFile: '',
      fileName: '',
      fileType: '',
      reserve: false,
      toggleDel: false,
      toggleShow: false,
      // toastCount: 0,
      // myImageProp: {
      //   blank: true,
      //   // width: 75,
      //   width: 110,
      //   height: 75,
      //   class: 'm1'
      // }

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

  // subInfo DB からのデータ取得
  // computedは、値が変わるとその値に依存しているすべてのバインディングが更新される
  computed: {
    isLogin() {
      return this.$store.getters['user/isLogin']
    },

    dbPages() {
      // return this.$store.state.subInfo.dbPages
      // return this.$store.getters['subInfo/orderdDbPages']
      return this.$store.getters['subInfo/orderdMainDate']
    },

    // dbGetMyPageById() {
    //   return this.$store.getters['subInfo/getMyPageById']
    //   // return this.$store.getters['subInfo/getMyPageById'](id)
    //   // }
    // },

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
    // 下記の subInfo は store/subInfo.js のファイル名
    this.$store.dispatch('subInfo/init')

    // 下記の storeheader は store/storeheader.js のファイル名
    this.$store.dispatch('storeheader/init')
  },

  // elementへのマウントが行われた後処理される。
  // SSR(Firebase等)では使えない。
  mounted() {
    this.$nuxt.$on('mymenu', (myMenu) => {
      this.myMenu = myMenu
    })

    this.$nuxt.$on('mycommon', (myCommon) => {
      this.myCommon = myCommon
    })
  },

  // ④ updated 画面が更新された後、呼び出される。
  // SSR(Firebase等)では使えない。
  updated() {
    this.getMenuIndex()
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
    // // this.setMenuIndex(90, 0, 'link', 3)
    // // // Header メニューButtonの枠線情報を myStore へ保存 ------- start
    // // // console.log('updated-1 --- 現在のURLのファイル名: ', location.pathname.replace(/\//g, ''))
    // // const keyword = location.pathname.replace(/\//g, '')
    // // const pageList = this.getPageList
    // // // console.log('updated-2 --- pageList: ', pageList)
    // // const findResult = pageList.findIndex((key) => key.templateNo === keyword)
    // // // console.log('updated-3 --- findResult: ', findResult)

    // // if (findResult !== 'undefined') {
    // //   if (findResult !== -1) {
    // //     this.setMenuIndex(pageList[findResult].indexGroup, pageList[findResult].indexPage)

    // //     // ページの最上部で表示するページ名をセット
    // //     this.pageName = pageList[findResult].pageName
    // //     // console.log('updated-0-1 --- pageName: ', this.pageName)
    // //   }
    // // }
    // // // Header メニューButtonの枠線情報を myStore へ保存 ------- end
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

    // test1() {
    //   console.log('items: ', this.items)
    //   console.log('dbPages: ', this.dbPages)
    // },
    // subInfo DB へのデータ追加

    // Vuex Store への保存
    setMenuIndex(indexGroup, indexPage, pageTemplate, pageNo) {
      this.myIndex.indexGroup = indexGroup
      this.myIndex.indexPage = indexPage
      this.myIndex.pageTemplate = pageTemplate
      this.myIndex.pageNo = pageNo
      // console.log('setMenuIndex-1 --- myStore: ', this.myIndex)
      this.$store.dispatch('myStore/set', this.myIndex)
    },

    add() {
      // 下記の subInfo は store/subInfo.js のファイル名
      // console.log('titelName1: ' + this.page.titleName)
      // this.$store.dispatch('subInfo/add', { titelName: this.page.titleName, mainText: this.page.mainText })
      this.$store.dispatch('subInfo/add', this.page)
      this.page.titleName = ''
      this.page.linkUrl = ''
      this.page.mainText = ''
      this.page.fileUrl = ''
    },
    update() {
      // 下記の subInfo は store/subInfo.js のファイル名
      this.$store.dispatch('subInfo/update', { id: this.editId, page: this.page })
    },
    edit(id) {
      this.showEdit = true
      this.showReg = false
      const myPage = this.$store.getters['subInfo/getMyPageById'](id)
      this.page.titleName = myPage.page.titleName
      this.page.linkUrl = myPage.page.linkUrl
      this.page.mainDate = myPage.page.mainDate
      this.page.mainText = myPage.page.mainText
      this.page.fileUrl = myPage.page.fileUrl
      this.editId = id
    },
    editCancel() {
      this.page.titleName = ''
      this.page.linkUrl = ''
      // this.page.mainDate = moment(Date()).format('YYYY-MM-DD')
      this.todaySet2()
      // this.page.fileUrl = 'https://firebasestorage.googleapis.com/v0/b/hiro1-223af.appspot.com/o/no_image.png?alt=media&token=d8ab83f9-db9c-46a2-8795-fe2ad439f419'
      this.page.fileUrl = process.env.NO_IMAGE_URL
      this.page.mainText = ''
      this.showEdit = false
      this.showReg = true
    },
    dataReset() {
      const myPage = this.$store.getters['subInfo/getMyPageById'](this.editId)
      this.page.titleName = myPage.page.titleName
      this.page.linkUrl = myPage.page.linkUrl
      this.page.mainDate = myPage.page.mainDate
      this.page.mainText = myPage.page.mainText
      this.page.fileUrl = myPage.page.fileUrl
    },
    remove(id) {
      // const myResult = confirm('本当に削除してよろしいでしょうか？')
      // if (myResult) {
      //   this.$store.dispatch('subInfo/remove', id)
      // }
      this.$swal({
        title: '削除してよろしいでしょうか？',
        text: 'この操作は取り消しできません。',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '削除',
        cancelButtonText: 'キャンセル',
        focusCancel: true,
      }).then((result) => {
        if (result.value) {
          // DBに保存されている画像削除
          this.$store.dispatch('subInfo/remove', id)
        }
      })
    },
    // toggle(dbPage) {
    //   this.$store.dispatch('subInfo/toggle', dbPage)
    // },
    onSubmitEdit(evt) {
      // alert(JSON.stringify(this.page))
      evt.preventDefault()
      this.update()
      this.toastFileUpdate('編集', '登録しました。')
      // 以下はinputの入力をリセット
      // this.$refs.input.value = ''
      this.page.titleName = ''
      this.page.linkUrl = ''
      // this.page.mainDate = moment(Date()).format('YYYY-MM-DD')
      this.todaySet2()
      // this.page.fileUrl = 'https://firebasestorage.googleapis.com/v0/b/hiro1-223af.appspot.com/o/no_image.png?alt=media&token=d8ab83f9-db9c-46a2-8795-fe2ad439f419'
      this.page.fileUrl = process.env.NO_IMAGE_URL
      // this.page.subject = ''
      this.page.mainText = ''
      // this.showImageFlg = false
      this.showEdit = false
      this.showReg = true
      // this.$nextTick(() => {
      //   this.show = true
      // })
      this.selected = '選択されていません。'
      // this.reserve = false
    },
    onSubmit(evt) {
      // alert(JSON.stringify(this.page))
      evt.preventDefault()
      this.add()
      this.toastFileUpdate('登録', '登録しました。')
      // 以下はinputの入力をリセット
      // this.$refs.input.value = ''
      this.page.titleName = ''
      this.page.linkUrl = ''
      // this.page.mainDate = moment(Date()).format('YYYY-MM-DD')
      this.todaySet2()
      // this.page.fileUrl = 'https://firebasestorage.googleapis.com/v0/b/hiro1-223af.appspot.com/o/no_image.png?alt=media&token=d8ab83f9-db9c-46a2-8795-fe2ad439f419'
      this.page.fileUrl = process.env.NO_IMAGE_URL
      // this.page.subject = ''
      this.page.mainText = ''
      // this.showImageFlg = false
      // this.show = false
      // this.$nextTick(() => {
      //   this.show = true
      // })
      this.selected = '選択されていません。'
      // this.reserve = false
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our page values
      this.page.titleName = ''
      this.page.linkUrl = ''
      // this.page.mainDate = moment(Date()).format('YYYY-MM-DD')
      this.todaySet2()
      // this.page.fileUrl = 'https://firebasestorage.googleapis.com/v0/b/hiro1-223af.appspot.com/o/no_image.png?alt=media&token=d8ab83f9-db9c-46a2-8795-fe2ad439f419'
      this.page.fileUrl = process.env.NO_IMAGE_URL
      // this.page.subject = ''
      this.page.mainText = ''
      // this.show = false
      // this.showImageFlg = false
      // this.$nextTick(() => {
      //   this.show = true
      // })
    },
    fileExtension(e) {
      const file = (e.target.files || e.dataTransfer.files)[0]

      if (typeof file === 'undefined') {
        this.reserve = false
        this.selected = '選択されていません。'
        return
      }

      this.fileName = file.name
      const pos = this.fileName.lastIndexOf('.')

      // console.log('fileName-1: ' + this.fileName)

      this.fileType = this.fileName.slice(pos + 1)

      const vm = this

      if (this.fileType === 'png' || this.fileType === 'jpg' || this.fileType === 'jpeg') {
        // console.log('file extension 画像: ' + fileExt)
        vm.resize(e)
      } else {
        // console.log('file extension 画像以外: ' + fileExt)
        // image.src = e.target.result
        this.newFile = file
        this.reserve = true
      }
    },
    // 画像関連メソッド
    resize(e) {
      // console.log('画像をリサイズする')
      // const file = e.target.files[0]
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
            vm.makeTumbnail(image)
          }
        }
        this.reserve = true
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
      const canvas = this.$refs.thumbnail
      this.newImage = ''
      this.newFile = ''

      // サムネイル用canvasのサイズを0に
      canvas.height = 0
      canvas.width = 0

      // inputの入力をリセット
      this.$refs.input.value = ''
      this.reserve = false
    },
    // 画像をアップロードする
    upload() {
      if (this.fileType === 'png' || this.fileType === 'jpg' || this.fileType === 'jpeg') {
        // console.log('file 拡張子は 画像: ' + fileType)
        this.uploadImage()
      } else {
        // console.log('file 拡張子は 画像以外: ' + fileType)
        // this.newFile = this.src
        this.reserve = true
        this.uploadNotImage()
      }
    },
    // 画像ファイルの保存
    uploadImage() {
      const photo = this.newImage

      // アップロード先のフォルダ、ファイル名を指定
      // const dateNow = Date.now()
      // const fileNameDate = moment(dateNow).format('YYYYMMDD-HHmmss-')
      const fileNameDate = this.todaySet3()
      this.fileName = fileNameDate + this.fileName
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
        // this.imageList()
        this.imageDelete()
      })
      // this.showImageReg = false
    },
    // 画像ファイル以外の保存
    uploadNotImage() {
      // const photo = this.newImage

      // アップロード先のフォルダ、ファイル名を指定
      // const dateNow = Date.now()
      // const fileNameDate = moment(dateNow).format('YYYYMMDD-HHmmss_')
      const fileNameDate = this.todaySet3()
      this.fileName = fileNameDate + this.fileName
      const fileImage = imagesRef.child(this.fileName)
      // console.log('fileName at aaaaa: ' + this.fileName)

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
      this.imageDelete()

      // this.showImageReg = false
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
    imageList() {
      // FireStrage のフォルダとファイルのリストを取得
      // this.showImageReg = false

      this.myImages = []
      // const imagesRef = storageRef
      // const imagesRef = storageRef.child('images')
      const vm = this

      // console.log('imagesRef: ', imagesRef)
      this.toggleShow = true

      imagesRef
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
          alert('error in imageList: ' + error)
          // console.error('error in imageList: ', error)
        })
      // console.log('myImages.length in imageLise2: ' + this.myImages.length)
    },
    imageListEdit() {
      this.imageListEdit2()

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
    imageListEdit2() {
      // this.hihyouji = true
      // FireStrage のフォルダとファイルのリストを取得
      // this.showImageReg = false

      this.myImages = []
      // const imagesRef = storageRef
      // const imagesRef = storageRef.child('images')
      const vm = this

      // console.log('imagesRef: ', imagesRef)
      this.toggleShow = true

      imagesRef
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
          alert('error in imageListEdit: ' + error)
          // console.error('error in imageListEdit: ', error)
        })
    },
    selImage(imageUrl, index2) {
      // alert('ファイル選択 in selImage: ' + imageUrl)
      this.selected = 'No.' + index2
      this.page.fileUrl = imageUrl
      // this.showImageReg = true
    },
    imageTorikesi() {
      this.toggleShow = false
      // this.showImageReg = false
    },
    imageCancel() {
      this.toggleShow = false
      // this.showImageReg = true
      // this.page.fileUrl = 'https://firebasestorage.googleapis.com/v0/b/hiro1-223af.appspot.com/o/no_image.png?alt=media&token=d8ab83f9-db9c-46a2-8795-fe2ad439f419'
      this.page.fileUrl = process.env.NO_IMAGE_URL
      this.selected = '選択されていません。'
    },
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
      // const imagesRef = storageRef
      // const imagesRef = storageRef.child('images')
      const vm = this

      // console.log('imagesRef: ', imagesRef)
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
    todaySet3() {
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

      let hh = myNow.getHours()
      if (hh < 10) {
        hh = '0' + hh
      }

      let mm = myNow.getMinutes()
      if (mm < 10) {
        mm = '0' + mm
      }

      let ss = myNow.getSeconds()
      if (ss < 10) {
        ss = '0' + ss
      }

      const YYYYMMDD = String(YYYY) + String(MM) + String(DD)
      const hhmmss = String(hh) + String(mm) + String(ss)

      const myTodayTime = YYYYMMDD + '-' + hhmmss + '-'
      // console.log('myTodayTime in todaySet3(): ', myTodayTime)
      return myTodayTime
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
