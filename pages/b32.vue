<template>
  <div class="container-fluid">
    <div v-for="dbHeader in dbHeaders" :key="dbHeader.id" class="m-0 p-0">
      <h5 class="text-light text-center m-0 p-1" :style="commonData.buttonColorBasicSet">{{ dbHeader.myData.m32 }}</h5>
    </div>

    <div class="row no-gutters">
      <!-- main表示 -->
      <!-- 以下の :key="dbPage.id" でソートされる -->
      <div v-for="(dbPage, index) in dbPages" :key="dbPage.id" class="col-12 mt-2 p-0">
        <div class="card">
          <div class="col-12 no-gutters card-header" style="background-color: honeydew">
            <h5 class="m-0 p-0 px-1 float-left">{{ dbPage.page.titleName }}</h5>
            <p class="text-right m-0 p-0 px-1">{{ dbPage.page.mainDate }}</p>
          </div>

          <div class="row m-0 p-0">
            <div class="m-0 p-0 border col-md-4 col-sm-5">
              <!-- +++++++ 画像等のファイル表示 start -->
              <div v-if="dbPage.page.displayType === 'image'" class="m-0 p-0">
                <b-embed :src="dbPage.page.fileUrl" class="m-0" type="embed" alt="file" fluid />
              </div>
              <div v-else-if="dbPage.page.displayType === 'googleDocViewer'" class="m-0 p-0">
                <b-embed :src="dbPage.page.googleUrl" class="m-0" type="embed" alt="file" fluid />
              </div>
              <div v-else class="m-0 p-0">
                <!-- <b-embed :src="dbPage.page.fileUrl" class="m-0" type="embed" alt="file" fluid /> -->
                <p class="m-0 p-0">表示未対応のファイル形式です。</p>
                <!-- <p class="m-0 p-0">下の「ダウンロード」ボタンからダウンロードして、ご利用ください。</p> -->
                <br />
              </div>
              <!-- +++++++ 画像等のファイル表示 end -->

              <p class="m-0 p-1">ファイル名：&nbsp; {{ dbPage.page.name }}</p>
              <!-- モーダル１： 「拡大表示」ボタン -->
              <span v-b-modal="'data-' + index" class="m-1 p-0">
                <b-button :size="commonData.selectedBtnSize" class="px-1 py-0 m-0 my-1 text-body float-center" style="background-color: honeydew">拡大表示</b-button>
              </span>

              <!-- 新しいページに Google Doc Viewer で表示 -->
              <b-button :size="commonData.selectedBtnSize" class="px-1 py-0 m-1 text-body" style="background-color: honeydew" @click="newPageOpen(dbPage.page.fileUrl, dbPage.page.displayType)">新しいページで開く</b-button>

              <!-- 端末(PC等)へダウンロード -->
              <b-button :size="commonData.selectedBtnSize" class="px-1 py-0 m-1 text-body" style="background-color: honeydew" @click="downloadFile(dbPage)">ダウンロード</b-button>
            </div>
            <div class="m-0 p-0 col-md-8 col-sm-7 p-0 text-wrap card-body" style="background-color: whitesmoke">
              <p class="m-0 p-2 text-break overflow-auto" style="overflow-wrap: break-word; max-height: 230px">{{ dbPage.page.mainText }}</p>
            </div>
          </div>
          <!-- </div> -->
        </div>

        <!-- 。。。。。。。。。。。 モーダル1 拡大表示 start -->
        <b-modal :id="'data-' + index" hide-header size="xl">
          <!-- タイトル表示 -->
          <div class="border m-1 mt-3 p-2" style="background-color: honeydew">
            <h5 class="m-0 px-1 float-left">{{ dbPage.page.titleName }}</h5>
            <p class="text-right m-0 pl-2 pr-2">{{ dbPage.page.mainDate }}</p>
          </div>

          <!-- +++++++ 画像等のファイル表示 start -->
          <!-- <b-embed :src="dbPage.page.fileUrl" class="m-0" type="embed" alt="file" fluid /> -->
          <div v-if="dbPage.page.displayType === 'image'" class="m-0 p-0">
            <b-embed :src="dbPage.page.fileUrl" class="m-0" type="embed" alt="file" fluid />
          </div>
          <div v-else-if="dbPage.page.displayType === 'googleDocViewer'" class="m-0 p-0">
            <b-embed :src="dbPage.page.googleUrl" class="m-0" type="embed" alt="file" fluid />
          </div>
          <div v-else class="m-0 p-0">
            <!-- <b-embed :src="dbPage.page.fileUrl" class="m-0" type="embed" alt="file" fluid /> -->
            <p class="m-0 p-0">表示未対応のファイル形式です。</p>
            <!-- <p class="m-0 p-0">下の「ダウンロード」ボタンからダウンロードして、ご利用ください。</p> -->
            <br />
          </div>
          <!-- +++++++ 画像等のファイル表示 end -->
          <div class="modal-body m-1 p-1">
            <h5 class="text-justify text-break m-0 p-2" style="white-space: pre-wrap">{{ dbPage.page.mainText }}</h5>
          </div>
        </b-modal>
        <!-- 。。。。。。。。。。。 モーダル1 拡大表示 end -->
      </div>
    </div>

    <div v-show="isLogin" class="m-0 p-0">
      <!-- ============================== 管理機能 ============================== -->
      <div class="row m-0 mt-2 p-2 bg-dark">
        <h5 class="col-12 mx-2 m-0 p-0 py-1 text-white">以下は管理機能です。</h5>
        <!-- <b-button :size="commonData.selectedBtnSize" class="px-1 py-0 m-1 float-left" variant="primary" @click="edit(dbPage.id)">編集</b-button> -->
        <!-- <b-button class="px-1 py-0 m-1 float-left" variant="primary" @click="test9()">test9</b-button> -->
        <!-- 登録状況 -->

        <!-- 現在の登録状況 ＆ 削除 start -->
        <div class="col-12 m-0 mt-2 p-0" style="background-color: lightsteelblue">
          <h5 class="mx-2 mb-0 p-0 pt-1">現在の登録状況 ＆ 削除</h5>
          <p class="mx-2 mb-0 p-0">「日付」が新しい順にソートされます。</p>

          <div class="row no-gutters">
            <div v-for="dbPage in dbPages" :key="dbPage.id" class="col-4">
              <div class="m-1 mt-2 border" style="background-color: whitesmoke">
                <!-- +++++++ 画像等のファイル表示 start -->
                <p class="m-0 p-1">ファイル名：&nbsp; {{ dbPage.page.name }}</p>
                <!-- <b-embed :src="dbPage.page.fileUrl" class="m-0" type="embed" alt="file" fluid /> -->
                <div v-if="dbPage.page.displayType === 'image'" class="m-0 p-0">
                  <b-embed :src="dbPage.page.fileUrl" class="m-0" type="embed" alt="file" fluid />
                </div>
                <div v-else-if="dbPage.page.displayType === 'googleDocViewer'" class="m-0 p-0">
                  <b-embed :src="dbPage.page.googleUrl" class="m-0" type="embed" alt="file" fluid />
                </div>
                <div v-else class="m-0 p-0">
                  <!-- <b-embed :src="dbPage.page.fileUrl" class="m-0" type="embed" alt="file" fluid /> -->
                  <p class="m-0 p-0">表示未対応のファイル形式です。</p>
                  <!-- <p class="m-0 p-0">下の「ダウンロード」ボタンからダウンロードして、ご利用ください。</p> -->
                  <br />
                </div>
                <!-- +++++++ 画像等のファイル表示 end -->

                <p class="m-0 p-0 pl-1" style="background-color: whitesmoke">{{ dbPage.page.titleName }}</p>
                <p class="m-0 p-0 pl-1" style="background-color: honeydew">{{ dbPage.page.mainDate }}</p>
                <p class="m-0 p-0 pl-1 text-break overflow-auto" style="overflow-wrap: break-word; max-height: 62px; background-color: gainsboro">{{ dbPage.page.mainText }}</p>
                <b-button :size="commonData.selectedBtnSize" class="px-1 py-0 m-1 float-left" variant="primary" @click="edit(dbPage.id)">編集</b-button>
                <b-button :size="commonData.selectedBtnSize" class="px-1 py-0 m-1" @click="remove(dbPage.id)">削除</b-button>
              </div>
            </div>
          </div>
        </div>

        <!-- =========== 編集 start -->
        <div v-show="showEdit" class="col-12 m-0 p-0">
          <div class="m-0 p-0 mt-2" style="background-color: linen">
            <!-- <h4 class="mx-2 mt-0 p-0 pt-1 float-left">編集</h4> -->
            <div class="d-flex flex-low">
              <h4 class="mx-2 my-0 p-0 pt-1">編集</h4>
              <!-- <b-button :size="commonData.selectedBtnSize" type="text" variant="dark" class="m-1 px-1 py-0">キャンセル</b-button> -->
              <b-button :size="commonData.selectedBtnSize" variant="dark" class="m-1 px-1 py-0" @click="editCancel()">編集取消</b-button>
            </div>
            <b-form @submit="onSubmitEdit" @reset="onReset">
              <b-button :size="commonData.selectedBtnSize" type="submit" variant="primary" class="m-1 ml-2 px-1 py-0">登録</b-button>
              <b-button :size="commonData.selectedBtnSize" variant="dark" class="m-1 px-1 py-0" @click="dataReset()">データリセット</b-button>
              <!-- <b-form> -->
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
            <div class="row p-0 pt-2 m-0 mr-1">
              <span class="col-2 m-0 mt-2 p-1 pt-3">本文:</span>
              <b-form-textarea v-model="page.mainText" class="col-10" required placeholder="入力なしでもOKです。" rows="3" max-rows="6"></b-form-textarea>
            </div>

            <hr />

            <!-- 画像添付 start-->
            <div class="mx-2 pb-2">
              <p class="mb-0">画像を変更する場合は、「画像変更」ボタンをクリックしてください。</p>
              <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageListEdit()">画像変更</button>
              <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageTorikesi()">変更取消</button>
              <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageCancel()">添付しない</button>
            </div>

            <div v-show="toggleShow">
              <div class="m-2">下の画像から選択してください。</div>
              <div class="m-2">
                <strong>{{ selectedFile }}</strong>
              </div>

              <div class="row no-gutters">
                <b-form-group v-for="(dbFile, index2) in dbFiles" :key="dbFile.id" class="col-4">
                  <div class="image_box border m-1 p-0 pt-1" style="background-color: whitesmoke" @click="selImage(dbFile, index2)">
                    <span class="m-1 p-0">{{ dbFile.fileItem.name }}</span>
                    <!-- +++++++ 画像等のファイル表示 start -->
                    <div v-if="dbFile.fileItem.displayType === 'image'" class="m-0 p-0">
                      <b-embed :src="dbFile.fileItem.httpUrl" class="m-0" type="embed" alt="file" fluid />
                    </div>
                    <div v-else-if="dbFile.fileItem.displayType === 'googleDocViewer'" class="m-0 p-0">
                      <b-embed :src="dbFile.fileItem.googleUrl" class="m-0" type="embed" alt="file" fluid />
                    </div>
                    <div v-else class="m-0 p-0">
                      <p class="m-0 p-0">表示未対応のファイル形式です。</p>
                      <p class="m-0 p-0">下の「ダウンロード」ボタンからダウンロードして、ご利用ください。</p>
                      <br />
                    </div>
                    <!-- +++++++ 画像等のファイル表示 end -->
                    <b-form-radio v-model="selected" :value="++index2" class="positionRadioBtn ml-0 p-0"> </b-form-radio>
                  </div>
                </b-form-group>
              </div>

              <!-- 以下の float-cb について： 上記の float-left の解除ができないので、style で設定 -->
              <div class="float-cb p-2">以下の「画像登録・削除」から、新たに画像を追加したり、 不要な画像を削除することができます。</div>
            </div>
            <!-- 画像添付 end -->
          </div>
        </div>
        <!-- 編集 End -->

        <!-- =========== 新規登録 start -->
        <div v-show="showReg" class="col-12 m-0 p-0">
          <div class="m-0 p-0 mt-2" style="background-color: lightblue">
            <h4 class="mx-2 mb-0 p-0 pt-1">新規登録</h4>
            <b-form @submit="onSubmit" @reset="onReset">
              <b-button :size="commonData.selectedBtnSize" type="submit" variant="primary" class="m-1 ml-2 px-1 py-0">登録</b-button>
              <b-button :size="commonData.selectedBtnSize" type="reset" variant="dark" class="m-1 px-1 py-0">リセット</b-button>
              <!-- <b-form> -->
              <div class="row p-0 pt-2 m-0 mr-2">
                <!-- <b-form-group label-for="input-11" label="タイトル(必須):" class="col-sm-3 m-0 mt-1 p-0 px-1" /> -->
                <b-form-group label="タイトル(必須):" class="col-sm-3 m-0 mt-1 p-0 px-1" />
                <div class="col-sm-9 m-0 p-0">
                  <!-- <b-form-input id="input-11" v-model="page.titleName" class="border" required placeholder="入力しないと登録できません。" /> -->
                  <b-form-input v-model="page.titleName" class="border" required placeholder="入力しないと登録できません。" />
                </div>
              </div>

              <div class="row p-0 pt-2 m-0 mr-2">
                <b-form-group label="日付(必須):" class="col-3 m-0 px-1 pt-2"> </b-form-group>
                <div class="col-9 m-0 p-0">
                  <b-form-datepicker v-model="page.mainDate" class="mb-1"></b-form-datepicker>
                </div>
              </div>
            </b-form>

            <!-- 本文登録（必須ではない） -->
            <div class="row p-0 pt-2 m-0 mr-1">
              <span class="col-2 m-0 mt-2 p-1 pt-3">本文:</span>
              <b-form-textarea v-model="page.mainText" class="col-10" required placeholder="入力なしでもOKです。" rows="3" max-rows="6"></b-form-textarea>
            </div>

            <hr />

            <!-- 画像添付 start-->
            <div class="mx-2 pb-2">
              <p class="mb-0">画像を添付する場合は、「画像添付」ボタンをクリックしてください。</p>
              <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageListReg()">画像添付</button>
              <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageCancel()">キャンセル</button>
            </div>

            <div v-show="toggleShow">
              <div class="m-2">下の画像から選択してください。</div>
              <div class="m-2">
                <strong>{{ selectedFile }}</strong>
              </div>

              <div class="row no-gutters">
                <b-form-group v-for="(dbFile, index2) in dbFiles" :key="dbFile.id" class="col-4">
                  <div class="image_box border m-1 p-0 pt-1" style="background-color: whitesmoke" @click="selImage(dbFile, index2)">
                    <span class="m-1 p-0">{{ dbFile.fileItem.name }}</span>
                    <!-- +++++++ 画像等のファイル表示 start -->
                    <div v-if="dbFile.fileItem.displayType === 'image'" class="m-0 p-0">
                      <b-embed :src="dbFile.fileItem.httpUrl" class="m-0" type="embed" alt="file" fluid />
                    </div>
                    <div v-else-if="dbFile.fileItem.displayType === 'googleDocViewer'" class="m-0 p-0">
                      <b-embed :src="dbFile.fileItem.googleUrl" class="m-0" type="embed" alt="file" fluid />
                    </div>
                    <div v-else class="m-0 p-0">
                      <p class="m-0 p-0">表示未対応のファイル形式です。</p>
                      <p class="m-0 p-0">下の「ダウンロード」ボタンからダウンロードして、ご利用ください。</p>
                      <br />
                    </div>
                    <!-- +++++++ 画像等のファイル表示 end -->
                    <b-form-radio v-model="selected" :value="++index2" class="positionRadioBtn ml-0 p-0"> </b-form-radio>
                  </div>
                </b-form-group>
              </div>

              <!-- 以下の float-cb について： 上記の float-left の解除ができないので、style で設定 -->
              <div class="float-cb p-2">以下の「画像新規登録・削除」から、新たに画像を追加したり、 不要な画像を削除することができます。</div>
            </div>
            <!-- 画像添付 end -->
          </div>
        </div>
        <!-- 新規登録 End -->

        <!-- =========== 画像登録、編集、削除 -->
        <div class="col-12 m-0 p-0">
          <div class="m-0 p-3 mt-3" style="background-color: midnightblue">
            <h4 class="text-white">画像新規登録・削除</h4>
            <!-- 画像登録 Start -->
            <div class="col-12 m-0 p-2 mt-3" style="background-color: honeydew">
              <h5>画像登録</h5>
              <!-- <input ref="input" type="file" accept=".jpg, .png, .pdf" @change="fileExtension($event)" /> -->
              <input ref="input" type="file" accept="*.*" @change="fileExtension($event)" />
              <br />

              <!-- <div v-show="reserve"> -->
              <!-- <div> -->
              <!-- サムネイル用canvas -->
              <!-- <canvas ref="thumbnail" class="mt-1" :width="0" :height="0" /> -->
              <!-- </div> -->

              <!-- <p>アップロードファイル名： {{ fileName }}</p> -->
              <!-- アップロードボタン -->
              <!-- <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 px-1 py-0" @click="upload()">Upload</b-button> -->
              <!-- <b-button :size="commonData.selectedBtnSize" class="ml-2 m-0 px-1 py-0" my-0 @click="reset()">Cancel</b-button> -->
              <!-- </div> -->
            </div>
            <!-- 画像登録 End -->

            <!-- 画像削除 Start -->
            <div class="col-12 m-0 p-2 mt-2" style="background-color: honeydew">
              <h5>画像削除</h5>
              <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 ml-2 px-1 py-0" @click="imageListDel()">画像リスト表示</b-button>
              <b-button :size="commonData.selectedBtnSize" class="m-0 ml-2 px-1 py-0" @click="imageListDelCancel()">閉じる</b-button>
            </div>

            <!-- 画像リスト表示 start -->
            <div v-show="toggleDel" class="m-0 p-0">
              <div class="col-12 m-0 p-0 mt-2" style="background-color: honeydew">
                <div class="row no-gutters">
                  <div v-for="dbFile in dbFiles" :key="dbFile.id" class="m-0 p-1 col-4">
                    <div class="border m-0 p-0" style="background-color: whitesmoke">
                      <!-- +++++++ 画像等のファイル表示 start -->
                      <div v-if="dbFile.fileItem.displayType === 'image'" class="m-0 p-0">
                        <b-embed :src="dbFile.fileItem.httpUrl" class="m-0" type="embed" alt="file" fluid />
                      </div>
                      <div v-else-if="dbFile.fileItem.displayType === 'googleDocViewer'" class="m-0 p-0">
                        <b-embed :src="dbFile.fileItem.googleUrl" class="m-0" type="embed" alt="file" fluid />
                      </div>
                      <div v-else class="m-0 p-0">
                        <p class="m-0 p-0">表示未対応のファイル形式です。</p>
                        <p class="m-0 p-0">下の「ダウンロード」ボタンからダウンロードして、ご利用ください。</p>
                        <br />
                      </div>
                      <!-- +++++++ 画像等のファイル表示 end -->
                      <b-button :size="commonData.selectedBtnSize" class="m-1 ml-2 px-1 py-0" @click="deleteImage(dbFile.id, dbFile.fileItem.name, dbFile.fileItem.httpUrl)">削除</b-button>
                      <span class="m-0 p-0">{{ dbFile.fileItem.name }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 画像リスト表示 end -->
          </div>
        </div>

        <!-- 画像削除 End -->
      </div>
    </div>
    <p>{{ todaySet() }}</p>
  </div>
</template>

<script>
// import { BIconPhone } from 'bootstrap-vue'
import firebase from '~/plugins/firebase'
// import { mySleep } from '~/plugins/my-import'

const storage = firebase.storage()
const storageRef = storage.ref()
const imagesRef = storageRef.child('bbb/b32')
const db = firebase.firestore()

export default {
  // asyncData の結果は data とマージされる
  // また、Pageがロードされる時、およびサーバサイドレンダリング時に呼び出される
  // また、this を経由してアクセスしてはいけません。
  // asyncData(context) {
  //   return {
  //     dbFiles: []
  //   }
  // },
  // filters: {
  //   dateFilter(date) {
  //     return moment(date).format('YYYY/MM/DD HH:mm:ss')
  //   }
  // },
  data() {
    return {
      pageNo: 'b32',
      todaySetFlg: false,
      editId: '',
      myData: {},
      commonData: {},
      selected: '',
      selectedFile: '選択されていません。',
      showEdit: false,
      showReg: true,
      // hihyouji: true,
      page: {
        titleName: '',
        mainDate: '',
        mainText: '',
        name: 'no_image.png',
        // contentType: '',
        displayType: 'image',
        googleUrl: '',
        fileUrl: process.env.NO_IMAGE_URL,
      },
      fileItem: {
        name: '',
        displayType: '',
        googleUrl: '',
        httpUrl: '',
      },
      displayType: '',
      contentType: '',
      newImage: '',
      newFile: '',
      pdfFormData: '',
      fileName: '',
      fileType: '',
      // reserve: false,
      toggleDel: false,
      toggleShow: false,
    }
  },

  // bbb DB からのデータ取得
  // computedは、値が変わるとその値に依存しているすべてのバインディングが更新される
  computed: {
    // ...mapGetters({ bbd: 'orderdMainDate' }),

    isLogin() {
      return this.$store.getters['user/isLogin']
    },

    dbPages() {
      return this.$store.getters['bbb/orderdMainDate']
    },
    dbHeaders() {
      return this.$store.getters['storeheader/orderdDbHeaders']
    },

    // 以下は b32File コレクション用
    dbFiles() {
      // return this.$store.getters['bbb/orderdDbFiles']
      const tempFiles = this.$store.getters['bbb/orderdDbFiles']
      // console.log('tempFiles ======= in dbFiles: ', tempFiles)
      return tempFiles
    },
  },
  // created は画面を開いたとき呼ばれる。
  created() {
    // 下記の bbb は store/bbb.js のファイル名
    // this.$store.dispatch('bbb/init')
    this.$store.dispatch('bbb/init', db.collection('bbb').doc(this.pageNo).collection(this.pageNo).orderBy('page.mainDate', 'desc'))

    this.$store.dispatch('bbb/initFile', db.collection('bbbFile').doc(this.pageNo).collection(this.pageNo).orderBy('created', 'desc'))

    // 下記の storeheader は store/storeheader.js のファイル名
    this.$store.dispatch('storeheader/init')

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
    this.selnum(32)
  },

  // ⑨ methods は呼び出される度に実行
  // データが変更された時、反映したくない場合はmethodsを利用
  methods: {
    selnum(num) {
      // this.selected = num
      // console.log('header selnum selected: ' + num)
      this.$nuxt.$emit('selnum', num)
    },

    // Google Doc Viewer にて新しいページで表示
    newPageOpen(url, displayType) {
      // console.log('1-1 ----- displayType: ', displayType)

      const encodeUrl = encodeURIComponent(url)
      const myUrl = 'https://docs.google.com/viewer?url=' + encodeUrl + '&embedded=true'

      switch (displayType) {
        case 'image':
          window.open(url, '_blank')
          // console.log('2-画像系 ---------- url in googleDocViewr: ', url)
          break
        case 'googleDocViewer':
          window.open(myUrl, '_blank')
          break
        case 'text':
          window.open(myUrl, '_blank')
          break
        default:
          alert('******** このファイルはダウンロードしてからご利用ください。 ********')
          break
      }
    },

    // ファイルを端末（PC等）へダウンロード
    downloadFile(dbPage) {
      // console.log('d-1 ---- url in downloadFile: ' + dbPage.page.fileUrl)

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
        aDL.download = dbPage.page.name
        aDL.style = 'display: none'
        aDL.click()
        document.body.appendChild(aDL)
      }
      xhr.open('GET', dbPage.page.fileUrl)
      xhr.send()
      // console.log('xhr in downloadFile' + xhr.response)
    },

    // bbb DB へのデータ追加
    initPage() {
      this.page.titleName = ''
      this.todaySet2()
      this.page.mainText = ''
      // this.page.contentType = ''
      this.page.name = 'no_image.png'
      this.page.displayType = 'image'
      this.page.googleUrl = ''
      this.page.fileUrl = process.env.NO_IMAGE_URL
      this.selectedFile = '選択されていません。'
    },

    // b32File のDB関連 start
    initFileItem() {
      this.fileItem = {}
      // this.selectedFile = '選択されていません。'
    },
    addFile() {
      // 下記の bbb は store/bbb.js のファイル名
      // this.$store.dispatch('bbb/addFile', this.fileItem)
      this.$store.dispatch('bbb/addFile', { pageNo: this.pageNo, fileItem: this.fileItem })
    },
    // b32File のDB関連 end

    // bbb DB へのデータ追加
    add() {
      // 下記の bbb は store/bbb.js のファイル名
      // console.log('1 ----------- page: ' + JSON.stringify(this.page))
      // this.$store.dispatch('bbb/add', this.page)
      this.$store.dispatch('bbb/add', { pageNo: this.pageNo, page: this.page })
      this.initPage()
    },
    update() {
      // 下記の bbb は store/bbb.js のファイル名
      // this.$store.dispatch('bbb/update', { id: this.editId, page: this.page })
      this.$store.dispatch('bbb/update', { pageNo: this.pageNo, id: this.editId, page: this.page })
    },
    edit(id) {
      this.showEdit = true
      this.showReg = false
      const myPage = this.$store.getters['bbb/getMyPageById'](id)
      this.page.titleName = myPage.page.titleName
      this.page.mainDate = myPage.page.mainDate
      this.page.mainText = myPage.page.mainText
      this.page.name = myPage.page.name
      // this.page.contentType = myPage.page.contentType
      this.page.displayType = myPage.page.displayType
      this.page.googleUrl = myPage.page.googleUrl
      this.page.fileUrl = myPage.page.fileUrl
      this.editId = id
    },
    editCancel() {
      this.initPage()
      this.showEdit = false
      this.showReg = true
    },
    dataReset() {
      const myPage = this.$store.getters['bbb/getMyPageById'](this.editId)
      this.page.titleName = myPage.page.titleName
      this.page.mainDate = myPage.page.mainDate
      this.page.mainText = myPage.page.mainText
      this.page.name = myPage.page.name
      // this.page.contentType = myPage.page.contentType
      this.page.displayType = myPage.page.displayType
      this.page.googleUrl = myPage.page.googleUrl
      this.page.fileUrl = myPage.page.fileUrl
    },
    remove(id) {
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
          // this.$store.dispatch('bbb/remove', id)
          this.$store.dispatch('bbb/remove', { pageNo: this.pageNo, id })
        }
      })
    },
    // DBに保存されている画像削除
    fileItemDel(id) {
      this.$store.dispatch('bbb/delFileItem', { pageNo: this.pageNo, id })
    },

    onSubmitEdit(evt) {
      // alert(JSON.stringify(this.page))
      evt.preventDefault()
      this.update()
      this.toastFileUpdate('編集', '登録しました。')
      // 以下はinputの入力をリセット
      this.initPage()
      this.showEdit = false
      this.showReg = true
      // this.selected = '選択されていません。'
      this.selected = ''
    },
    onSubmit(evt) {
      // alert(JSON.stringify(this.page))
      evt.preventDefault()
      this.add()
      this.toastFileUpdate('登録', '登録しました。')
      // 以下はinputの入力をリセット
      this.initPage()
      // this.selected = '選択されていません。'
      this.selected = ''
    },
    onReset(evt) {
      evt.preventDefault()
      this.initPage()
    },
    fileExtension(e) {
      const file = (e.target.files || e.dataTransfer.files)[0]

      if (typeof file === 'undefined') {
        // this.reserve = false
        // this.selected = '選択されていません。'
        this.selected = ''
        return
      }

      this.fileName = file.name
      const pos = this.fileName.lastIndexOf('.')
      // console.log('fileName-1: ' + this.fileName)
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

      this.uploadPop()
    },
    // 画像関連メソッド

    // 画像をリサイズする
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
          // console.log('image.src: ', image.src)
          image.onload = () => {
            // console.log('image.src: ', image.src)
            // console.log('this.width: ', this.width)
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
    async uploadImage() {
      // fileItem にデータをセット
      this.fileItem.name = this.fileName

      const photo = this.newImage
      const fileRef = imagesRef.child(this.fileName)

      // ①ファイルを Firestorage へアップロード
      await fileRef.putString(photo, 'data_url').then((snapshot) => {
        // fileRef.putString(photo, 'data_url').then((snapshot) => {
        // console.log('1-1 ------ uploaded data: ', snapshot)
        this.contentType = snapshot.metadata.contentType
        // console.log('1-2 ------ contentType: ', snapshot.metadata.contentType)
        // console.log('1-2 ------ contentType: ', this.contentType)

        // 入力データをリセット
        this.reset()
        // トースト: ファイル アップデート完了しました。
        this.toastFileUpdate('ファイル アップロード', '完了しました。')
      })

      // this.fileItem にデータをセット
      await fileRef.getDownloadURL().then((url) => {
        // fileRef.getDownloadURL().then((url) => {
        this.fileItem.httpUrl = url
        // console.log('httpUrl: ', this.fileItem.httpUrl)

        // googleUrl = googleDocViewer用にエンコードしたUrl
        const encodeUrl = encodeURIComponent(url)
        this.fileItem.googleUrl = 'https://docs.google.com/viewer?url=' + encodeUrl + '&embedded=true'
        // console.log('1-3 ----- googleUrl: ', this.fileItem.googleUrl)

        // set displayType
        // this.fileItem.displayType = this.setDisplayType(contentType)
        this.setDisplayType(this.contentType)
        this.fileItem.displayType = this.displayType
      })

      // ②Firestore へファイルの名前等を保存
      // this.addFile()
      // await this.$store.dispatch('bbb/addFile', this.fileItem)
      await this.$store.dispatch('bbb/addFile', { pageNo: this.pageNo, fileItem: this.fileItem })

      this.toastFileUpdate('登録', '登録しました。')
      // 以下はinputの入力をリセット
      // this.initFileItem()
      // console.log('c-1 +++++ fileItem: ', this.fileItem)
    },

    // 画像ファイル以外の保存
    async uploadNotImage() {
      // fileItem にデータをセット
      this.fileItem.name = this.fileName

      // アップロード先のフォルダ、ファイル名を指定
      // const dateNow = Date.now()
      // const fileNameDate = moment(dateNow).format('YYYYMMDD-HHmmss_')
      // const fileNameDate = this.todaySet3()
      // this.fileName = fileNameDate + this.fileName
      const fileRef = imagesRef.child(this.fileName)

      // ①ファイルを Firestorage へアップロード
      await fileRef.put(this.newFile).then((snapshot) => {
        // console.log('1-1 ------ uploaded data: ', snapshot)
        this.contentType = snapshot.metadata.contentType
        // console.log('1-2 ------ contentType: ', snapshot.metadata.contentType)
        // console.log('1-2 ------ contentType: ', this.contentType)

        // 入力データをリセット
        this.reset()
        // トースト: ファイル アップデート完了しました。
        this.toastFileUpdate('ファイル アップロード', '完了しました。')
      })

      // this.fileItem にデータをセット
      await fileRef.getDownloadURL().then((url) => {
        this.fileItem.httpUrl = url
        // console.log('httpUrl: ', this.fileItem.httpUrl)

        // googleUrl = googleDocViewer用にエンコードしたUrl
        const encodeUrl = encodeURIComponent(url)
        this.fileItem.googleUrl = 'https://docs.google.com/viewer?url=' + encodeUrl + '&embedded=true'
        // console.log('1-3 ----- googleUrl: ', this.fileItem.googleUrl)

        // set displayType
        // this.fileItem.displayType = this.setDisplayType(contentType)
        this.setDisplayType(this.contentType)
        this.fileItem.displayType = this.displayType
      })

      // this.fileItem のデータを ②Firestore へファイルの名前等を保存
      // this.addFile()
      // await this.$store.dispatch('bbb/addFile', this.fileItem)
      await this.$store.dispatch('bbb/addFile', { pageNo: this.pageNo, fileItem: this.fileItem })

      this.toastFileUpdate('登録', '登録しました。')
    },

    // ファイル Update 完了の toast 表示
    toastFileUpdate(titleData, mainData) {
      this.$bvToast.toast(mainData, {
        title: titleData,
        autoHideDelay: 5000,
      })
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
    imageListReg() {
      this.toggleShow = true
    },

    // 画像リスト表示 Edit
    imageListEdit() {
      this.toggleShow = true
    },

    selImage(dbFile, index2) {
      this.selected = index2
      this.selectedFile = 'No.' + this.selected + ':　' + dbFile.fileItem.name
      this.page.fileUrl = dbFile.fileItem.httpUrl
      this.page.name = dbFile.fileItem.name
      this.page.displayType = dbFile.fileItem.displayType
      this.page.googleUrl = dbFile.fileItem.googleUrl
    },

    imageTorikesi() {
      this.toggleShow = false
      // this.showImageReg = false
    },
    imageCancel() {
      this.toggleShow = false
      this.initPage()
      // this.selected = '選択されていません。'
      this.selected = ''
    },
    imageListDelCancel() {
      this.toggleDel = false
    },

    // 画像リスト表示 Del
    imageListDel() {
      // this.imageList()
      // this.imageListSort()
      this.toggleDel = true
    },

    deleteImage(id, deleteFileName, deleteFileUrl) {
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

            const delRef = imagesRef.child(deleteFileName)

            delRef
              // ① Firestorage のファイル削除
              .delete()
              .then(() => {
                this.imageListDel()

                // ② Firestore のfileItem(ファイル名等)削除
                this.fileItemDel(id)

                vm.toastFileUpdate('ファイル 削除', '完了しました。')
              })
              .catch((error) => {
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

    //       const delRef = storageRef.child(deleteFileName)

    //       delRef
    //         .delete()
    //         .then(() => {
    //           // alert('ファイル削除完了')
    //           vm.toastFileUpdate('ファイル 削除', '完了しました。')
    //           // this.toggleDel = false
    //           this.imageListDel()
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
  top: 1px;
  right: 3px;
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
