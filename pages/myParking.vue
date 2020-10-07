<template>
  <div class="container-fluid">
    <div v-for="dbHeader in dbHeaders" :key="dbHeader.id" class="m-0 p-0">
      <h5 class="text-light text-center m-0 p-1" :style="commonData.buttonColorBasicSet">{{ dbHeader.myData.m66 }}</h5>
    </div>

    <b-card no-body>
      <b-tabs v-model="tabIndex" card style="background-color: whitesmoke">
        <!-- <b-tabs v-model="tabIndex" card style="background-color:lightblue;"> -->
        <div v-for="(dbTab, index) in dbActiveTabs" :key="dbTab.id" class="mt-1 p-0">
          <!-- ##### b-tab start ##### -->
          <b-tab :title="dbTab.tabItem.tabName" :title-link-class="linkClass(index)" class="m-2 p-0">
            <!-- #################### 本番 start ##### -->
            <div class="row m-0 mt-3 p-0">
              <div class="col-12 m-0 p-1">
                <!-- <div class="my-calendar"> -->
                <div class="myCalendar d-flex m-0 mt-3 p-0">
                  <h6>tabIndex: {{ tabIndex }}</h6>
                </div>
                <!-- </div> -->
              </div>
            </div>

            <!-- #################### 本番 end ##### -->
          </b-tab>
          <!-- #################### b-tab end ##### -->
          <!-- <p>{{ setCalendar0(dbTab.tabItem.tabCalendar, index) }}</p> -->
          <!-- <p>{{ setCalendar() }}</p> -->
        </div>
      </b-tabs>
    </b-card>
    <!-- </div> -->

    <div v-show="isLogin" class="m-0 p-0">
      <!-- ============================== 管理機能 ===== -->
      <div class="row d-flex flex-row m-0 mt-2 p-2 bg-dark">
        <h5 class="mx-2 m-0 p-0 py-1 text-white">以下は管理機能です。</h5>
        <!-- <b-button :size="commonData.selectedBtnSize" style="background-color:midnightblue;" class="m-0 ml-2 px-1 py-0" @click="onSet()">設定</b-button> -->
        <!-- <b-button :size="commonData.selectedBtnSize" style="background-color:midnightblue;" class="m-0 ml-2 px-1 py-0" @click="onCategory()">② カテゴリ設定</b-button> -->
      </div>

      <!-- ------------------ タブ情報設定 ----- -->
      <!-- <div v-show="showParking" class="m-0 mt-2 p-0"> -->
      <!-- <b-form-group label="カテゴリを選択してください。">
        <b-form-radio-group v-model="tabIndex" :options="tabData" buttons button-variant="outline-info" name="radios-btn-outline"></b-form-radio-group>
      </b-form-group> -->

      <!-- <div v-show="tabIndex === 0" class="m-0 mt-2 p-0"> -->
      <div class="row m-0 mt-2 p-2 bg-dark">
        <!-- ¥¥¥¥¥¥¥¥¥ 現在の登録状況 ＆ 削除 start -->
        <div class="col-12 m-0 my-2 p-0" style="background-color: lightsteelblue">
          <h5 class="mx-2 my-2 p-0 pt-1">現在の登録状況 ＆ 削除</h5>

          <div class="row text-center m-0 mx-1 p-0 border border-secondary" style="background-color: gainsboro">
            <div class="col-1 m-0 p-1" style="background-color: lightsteelblue">
              <p class="m-0 p-0"></p>
            </div>

            <!-- 表示／非表示 -->
            <div class="col-1 text-center m-0 p-1 border-left border-secondary" style="background-color: lightsteelblue">
              <p class="m-0 p-0">表示/非表示</p>
            </div>

            <!-- sortNo -->
            <div class="col-1 d-flex justify-content-center m-0 p-0 border-left border-secondary" style="background-color: lightsteelblue">
              <div class="align-self-center m-0 p-1">
                <p class="m-0 p-0">Sort</p>
              </div>
            </div>

            <!-- タブ名 -->
            <!-- <div class="col-3 text-center m-0 p-1 border-left border-secondary" style="background-color:lightsteelblue;"> -->
            <div class="col-3 d-flex justify-content-center m-0 p-0 border-left border-secondary" style="background-color: lightsteelblue">
              <div class="align-self-center m-0 p-1">
                <p class="m-0 p-0">タブ名</p>
              </div>
            </div>

            <!-- タブ情報 -->
            <!-- <div class="col-6 text-center m-0 p-1 border-left border-secondary" style="background-color:lightsteelblue;"> -->
            <div class="col-6 d-flex justify-content-center m-0 p-0 border-left border-secondary" style="background-color: lightsteelblue">
              <div class="align-self-center m-0 p-1">
                <p class="m-0 p-0">タブ情報</p>
              </div>
            </div>
          </div>

          <div v-for="dbTab in dbTabs" :key="dbTab.id" class="m-0 my-1 p-0">
            <div class="row m-0 mx-1 p-0 border border-secondary" style="background-color: gainsboro">
              <div class="col-1 m-0 p-1">
                <b-button :size="commonData.selectedBtnSize" class="px-1 py-0 m-0 mt-1" variant="primary" @click="edit(dbTab.id)">編集</b-button>
                <b-button :size="commonData.selectedBtnSize" class="px-1 py-0 m-0 mt-1" @click="remove(dbTab.id)">削除</b-button>
              </div>

              <!-- 表示／非表示 -->
              <!-- <div class="col-1 m-0 p-1 border-left border-secondary" style="background-color:gainsboro;"> -->
              <div class="col-1 d-flex justify-content-center m-0 p-0 border-left border-secondary" style="background-color: gainsboro">
                <div class="align-self-center m-0 p-1">
                  <p class="m-0 p-0">{{ dbTab.tabFlg }}</p>
                </div>
              </div>

              <!-- sortNo -->
              <!-- <div class="col-1 m-0 p-1 border-left border-secondary" style="background-color:gainsboro;"> -->
              <div class="col-1 d-flex justify-content-center m-0 p-0 border-left border-secondary" style="background-color: gainsboro">
                <div class="align-self-center m-0 p-1">
                  <p class="m-0 p-0">{{ dbTab.sortNo }}</p>
                </div>
              </div>

              <!-- タブ名 -->
              <!-- <div class="col-3 m-0 p-0 px-1 text-wrap border-left border-secondary" style="background-color:gainsboro;"> -->
              <div class="col-3 d-flex m-0 p-0 border-left border-secondary" style="background-color: gainsboro">
                <div class="align-self-center m-0 p-1">
                  <p class="m-0 p-0 text-break overflow-auto" style="overflow-wrap: break-word; max-height: 60px">{{ dbTab.tabItem.tabName }}</p>
                </div>
              </div>

              <!-- タブ情報 -->
              <!-- <div class="col-6 m-0 p-0 px-1 text-wrap border-left border-secondary" style="background-color:gainsboro;"> -->
              <div class="col-6 d-flex m-0 p-0 border-left border-secondary" style="background-color: gainsboro">
                <div class="align-self-center m-0 p-1 text-break overflow-auto">
                  <!-- <p class="m-0 p-0 text-break overflow-auto" style="overflow-wrap: break-word; max-height:60px;">{{ dbTab.tabItem.tabCalendar }}</p> -->
                  <p class="m-0 p-0" style="overflow-wrap: break-word; max-height: 60px">{{ dbTab.tabItem.tabCalendar }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 現在の登録状況 ＆ 削除 end -->

        <!-- ¥¥¥¥¥¥¥¥¥ 編集 start -->
        <div v-show="showEdit" class="col-12 m-0 p-0">
          <div class="m-0 p-0 mt-2" style="background-color: linen">
            <div class="d-flex flex-low">
              <h4 class="mx-2 my-0 p-0 pt-1">編集</h4>
              <b-button :size="commonData.selectedBtnSize" variant="dark" class="m-1 px-1 py-0" @click="editCancel()">編集取消</b-button>
            </div>
            <b-form @submit="onSubmitEdit" @reset="onReset">
              <!-- 表示／非表示 -->
              <div class="row p-0 m-0 mr-1">
                <div class="col-4 m-0 p-0">
                  <p class="m-0 mt-2 p-1 pt-0">表示/非表示</p>
                </div>

                <div class="col-8 m-0 mt-1 p-0">
                  <!-- <div v-if="tabFlg"> -->
                  <b-input-group class="mb-2">
                    <b-input-group-prepend is-text>
                      <input type="checkbox" :checked="tabFlg" @change="toggleCheck()" />
                    </b-input-group-prepend>
                    <!-- <b-form-input v-model="sortNo"></b-form-input> -->
                  </b-input-group>
                  <!-- </div> -->

                  <!-- <del v-else> -->
                  <!-- <b-input-group class="mb-2">
                      <b-input-group-prepend is-text>
                        <input type="checkbox" :checked="tabFlg" @change="toggleCheck()" />
                      </b-input-group-prepend>
                      <b-form-input v-model="sortNo"></b-form-input>
                    </b-input-group>
                    <b-form-input v-model="editItem.tabName"></b-form-input> -->
                  <!-- </del> -->
                </div>
              </div>
              <!-- sort番号 -->
              <div class="row p-0 pt-2 m-0 mr-1">
                <div class="col-4 m-0 p-0">
                  <p class="m-0 mt-2 p-1 pt-0">sort番号(必須)</p>
                </div>
                <b-form-input v-model="sortNo" type="number" class="col-8" required placeholder="若番順に表示します。"></b-form-input>
              </div>

              <!-- タブ名 -->
              <div class="row p-0 pt-2 m-0 mr-1">
                <p class="col-4 m-0 mt-2 p-1 pt-0">タブ名(必須)</p>
                <b-form-input v-model="editItem.tabName" class="col-8" required placeholder="タブ名を入力してください。" rows="3" max-rows="6"></b-form-input>
              </div>

              <!-- タブ情報 -->
              <div class="row p-0 pt-2 m-0 mr-1">
                <div class="col-2 m-0 p-0">
                  <!-- <span class="col-2 m-0 mt-2 p-1 pt-0">タブ情報</span> -->
                  <p class="m-0 mt-3 p-1 pt-0">タブ情報</p>
                  <p class="m-0 p-1 pt-0">(必須)</p>
                </div>
                <b-form-textarea v-model="editItem.tabCalendar" class="col-10" required placeholder="カレンダー等の [埋め込みコード] を入力してください。" rows="7" max-rows="9"></b-form-textarea>
              </div>

              <b-button :size="commonData.selectedBtnSize" type="submit" variant="primary" class="m-1 ml-2 px-1 py-0">登録</b-button>
              <!-- <b-button :size="commonData.selectedBtnSize" variant="dark" class="m-1 px-1 py-0" @click="dataReset()">データクリアー</b-button> -->
            </b-form>

            <hr />
          </div>
        </div>
        <!-- 編集 End -->

        <!-- ¥¥¥¥¥¥¥¥¥ 新規登録 start -->
        <div v-show="showReg" class="col-12 m-0 p-0">
          <div class="m-0 p-0 mt-2" style="background-color: lightblue">
            <h4 class="mx-2 mb-0 p-0 pt-1">新規登録</h4>

            <b-form @submit="onSubmit" @reset="onReset">
              <!-- 表示／非表示 -->
              <div class="row p-0 m-0 mr-1">
                <div class="col-4 m-0 p-0">
                  <p class="m-0 mt-2 p-1 pt-0">表示/非表示</p>
                </div>

                <div class="col-8 m-0 mt-1 p-0">
                  <!-- <div v-if="tabFlg"> -->
                  <b-input-group class="mb-2">
                    <b-input-group-prepend is-text>
                      <input type="checkbox" :checked="tabFlg" @change="toggleCheck()" />
                    </b-input-group-prepend>
                    <!-- <b-form-input v-model="sortNo"></b-form-input> -->
                  </b-input-group>
                  <!-- </div> -->

                  <!-- <del v-else> -->
                  <!-- <b-input-group class="mb-2">
                      <b-input-group-prepend is-text>
                        <input type="checkbox" :checked="tabFlg" @change="toggleCheck()" />
                      </b-input-group-prepend>
                      <b-form-input v-model="sortNo"></b-form-input>
                    </b-input-group>
                    <b-form-input v-model="editItem.tabName"></b-form-input> -->
                  <!-- </del> -->
                </div>
              </div>
              <!-- sort番号 -->
              <div class="row p-0 pt-2 m-0 mr-1">
                <div class="col-4 m-0 p-0">
                  <p class="m-0 mt-2 p-1 pt-0">sort番号(必須)</p>
                </div>
                <b-form-input v-model="sortNo" type="number" class="col-8" required placeholder="若番順に表示します。"></b-form-input>
              </div>

              <!-- タブ名 -->
              <div class="row p-0 pt-2 m-0 mr-1">
                <p class="col-4 m-0 mt-2 p-1 pt-0">タブ名(必須)</p>
                <b-form-input v-model="editItem.tabName" class="col-8" required placeholder="タブ名を入力してください。" rows="3" max-rows="6"></b-form-input>
              </div>

              <br />
              <!-- カレンダー情報の取得方法 -->
              <p class="m-1 p-0">カレンダーの[埋め込みコード]の取得方法は以下の「カレンダー情報の取得方法」を参照ください。</p>
              <!-- タブ情報 -->
              <div class="row p-0 pt-2 m-0 mr-1">
                <div class="col-2 m-0 p-0">
                  <!-- <span class="col-2 m-0 mt-2 p-1 pt-0">タブ情報</span> -->
                  <p class="m-0 mt-3 p-1 pt-0">タブ情報</p>
                  <p class="m-0 p-1 pt-0">(必須)</p>
                </div>
                <b-form-textarea v-model="editItem.tabCalendar" class="col-10" required placeholder="カレンダー等の [埋め込みコード] を入力してください。" rows="7" max-rows="9"></b-form-textarea>
              </div>

              <b-button :size="commonData.selectedBtnSize" type="submit" variant="primary" class="m-1 mt-2 px-1 py-0">登録</b-button>
              <b-button :size="commonData.selectedBtnSize" type="reset" variant="dark" class="m-0 mt-2 px-1 py-0">データクリア</b-button>
            </b-form>

            <hr />
          </div>
        </div>
        <!-- 新規登録 End -->
      </div>
      <!-- </div> -->
      <!-- <div class="row m-0 mt-2 p-3" style="background-color:dimgray;"> -->
      <div class="row m-0 mt-2 p-3 bg-dark">
        <h5 class="col-12 mx-2 m-0 p-0 py-1 text-white">※ 本ページのご利用について</h5>

        <!-- <div class="col-12 m-0 p-2" style="background-color:midnightblue;"> -->
        <div class="col-12 m-0 p-2" style="background-color: silver">
          <h6 class="mx-2 m-0 p-0">本ページの予約状況はGoogleカレンダーを表示していますので、お持ちのスマホ等で登録や修正が可能です。</h6>
          <h6 class="mx-2 m-0 p-0">設定がわからない場合は、開発者へご連絡ください。</h6>
        </div>

        <!-- カレンダー情報の取得方法 -->
        <div class="col-12 m-0 mt-3 p-2" style="background-color: lightsteelblue">
          <p class="m-0 p-0">以下のリンク先の【カレンダーをウェブサイトに埋め込む】を参照してください。</p>
          <b-link href="https://support.google.com/calendar/answer/41207?hl=ja" target="_blank" class="m-0 text-primary"
            ><h5><u>カレンダー情報の取得方法</u></h5></b-link
          >

          <br />
          <p class="m-0 p-0">※ なお埋め込みコードの取得はパソコンにて取得してください。</p>
        </div>
        <!-- カレンダー情報の取得方法 end -->
      </div>
    </div>
    <!-- <p>{{ myDataSet() }}</p> -->
    <!-- <p>{{ setCalendar2() }}</p> -->
    <p>{{ setCalendar() }}</p>
    <!-- <b-button :size="commonData.selectedBtnSize" class="m-1 ml-2 px-1 py-0 d-flex" @click="test1()">テスト１</b-button> -->
    <!-- <br /> -->
    <!-- <br /> -->
  </div>
</template>

<script>
// import { numberToIdentifer } from 'webpack/lib/Template'
// import moment from 'moment'
// import { BIconClockHistory } from 'bootstrap-vue'
// import firebase from '~/plugins/firebase'
// const storage = firebase.storage()
// const storageRef = storage.ref()
// const imagesRef = storageRef.child('tabItem/parking')

export default {
  data() {
    return {
      showCategory: false,
      // showParking: false,

      // showTab1: false,
      // showTab2: false,
      // showTab3: false,

      // 最初のTab機能 と 管理機能のカテゴリ選択ボタン で共用利用
      tabIndex: 0,

      // 管理機能のカテゴリ選択 ボタンで利用
      // tabSelected: '',
      tabData: [
        { text: 'Tab 0', value: 0, tabCalendar: 'c0' },
        { text: 'Tab 1', value: 1, tabCalendar: 'c1' },
        { text: 'Tab 2', value: 2, tabCalendar: 'c2' },
        { text: 'Tab 3', value: 3, tabCalendar: 'c3' },
        { text: 'Tab 4', value: 4, tabCalendar: 'c4' },
        { text: 'Tab 5', value: 5, tabCalendar: 'c5' },
        { text: 'Tab 6', value: 6, tabCalendar: 'c6' },
        { text: 'Tab 7', value: 7, tabCalendar: 'c7' },
        { text: 'Tab 8', value: 8, tabCalendar: 'c8' },
        { text: 'Tab 9', value: 9, tabCalendar: 'c9' },
      ],

      // tabSelected: '',
      // tabData: [
      //   { text: 'Tab 1', value: 'tab1' },
      //   { text: 'Tab 2', value: 'tab2' },
      //   { text: 'Tab 3', value: 'tab3' }
      // ],
      tempDbTab: '',

      editId: '',
      tabCalendar: '',
      tabCalendars: [],
      // editCategory: {
      //   tab1Flg: '',
      //   tab2Flg: '',
      //   tab3Flg: ''
      // },
      // tempCategory: {
      // tab1Flg: '',
      // tab2Flg: '',
      // tab3Flg: ''
      // },
      myData: {},
      commonData: {},
      showEdit: false,
      showReg: true,
      tabItem: {
        // tabFlg: '',
        tabName: '',
        tabCalendar: '',
      },
      sortNo: '',
      tabFlg: true,
      editItem: {
        // tabFlg: true,
        // sortNo: 0,
        tabName: '',
        tabCalendar: '',
      },
    }
  },
  // parkingDB DB からのデータ取得
  // computedは、値が変わるとその値に依存しているすべてのバインディングが更新される
  computed: {
    isLogin() {
      return this.$store.getters['user/isLogin']
    },

    dbTabs() {
      return this.$store.getters['parkingDB/getTabs']
      // return this.$store.state.parkingDB.dbTabs
      // return this.$store.getters['parkingDB/getMyTabByTabIndex'](this.tabIndex)
      // const tempTabs = this.$store.getters['parkingDB/getMyTabByTabIndex'](this.tabIndex)
      // const tempTabs = this.$store.getters['parkingDB/getMyTabByTabIndex']
      // const tempTabs = this.$store.getters['parkingDB/getMyTabByTabFlg']

      // 以下の処理： 配列の最後は category1 のため削除
      // 以下の3行について： computedプロパティの他のデータは編集しないでください。代わりにwatchを使用してください
      // const tempTabs = this.$store.getters['parkingDB/getTabs']
      // const returnTabs = tempTabs.slice(0, tempTabs.length - 1)
      // return returnTabs
    },
    dbActiveTabs() {
      // return this.$store.state.parkingDB.dbTabs
      // return this.$store.getters['parkingDB/orderdDbTabs']
      // return this.$store.getters['parkingDB/getMyTabByTabIndex'](this.tabIndex)
      // const tempTabs = this.$store.getters['parkingDB/getMyTabByTabIndex'](this.tabIndex)
      // const tempTabs = this.$store.getters['parkingDB/getMyTabByTabIndex']
      // const tempTabs = this.$store.getters['parkingDB/getMyTabByTabFlg']
      // const tempTabs = this.$store.getters['parkingDB/getActiveTabs'](true)
      const tempTabs = this.$store.getters['parkingDB/getActiveTabs']

      // console.log('2 ---- tempTabs: ', tempTabs)

      // return tempTabs
      if (tempTabs.length > 0) {
        return tempTabs.slice().sort((a, b) => {
          if (a.sortNo > b.sortNo) {
            return 1
          }
          if (a.sortNo < b.sortNo) {
            return -1
          }
          return 0
        })
      } else {
        return null
      }
    },
    dbHeaders() {
      return this.$store.getters['storeheader/orderdDbHeaders']
    },
  },
  // created は画面を開いたとき呼ばれる。
  created() {
    // 下記の parkingDB は store/parkingDB.js のファイル名
    this.$store.dispatch('parkingDB/init')

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
    this.selnum(66)
  },

  // ⑨ methods は呼び出される度に実行
  // データが変更された時、反映したくない場合はmethodsを利用
  methods: {
    selnum(num) {
      // this.selected = num
      // console.log('header selnum selected: ' + num)
      this.$nuxt.$emit('selnum', num)
    },

    // test1() {
    // },
    add() {
      // 下記の parkingDB は store/parkingDB.js のファイル名
      this.sortNo = Number(this.sortNo)

      this.$store.dispatch('parkingDB/add', { sortNo: this.sortNo, tabFlg: this.tabFlg, tabItem: this.editItem })
      this.editCancel()
    },
    update() {
      this.sortNo = Number(this.sortNo)

      // 下記の parkingDB は store/parkingDB.js のファイル名
      this.$store.dispatch('parkingDB/update', { id: this.editId, sortNo: this.sortNo, tabFlg: this.tabFlg, tabItem: this.editItem })
    },
    myDataSet() {
      try {
        const tempCalendars = this.dbActiveTabs
        this.tabCalendars[0] = tempCalendars[0].tabItem.tabCalendar
        this.tabCalendars[1] = tempCalendars[1].tabItem.tabCalendar
        this.tabCalendars[2] = tempCalendars[2].tabItem.tabCalendar
        this.tabCalendars[3] = tempCalendars[3].tabItem.tabCalendar
        this.tabCalendars[4] = tempCalendars[4].tabItem.tabCalendar
        this.tabCalendars[5] = tempCalendars[5].tabItem.tabCalendar
        this.tabCalendars[6] = tempCalendars[6].tabItem.tabCalendar
        this.tabCalendars[7] = tempCalendars[7].tabItem.tabCalendar
        this.tabCalendars[8] = tempCalendars[8].tabItem.tabCalendar
        this.tabCalendars[9] = tempCalendars[9].tabItem.tabCalendar
      } catch (error) {
        // alert('テスト in myDataSet(): ' + error)
        // console.log('エラー in test1(): ' + error)
      }
    },
    setCalendar() {
      this.myDataSet()
      try {
        const $myCalendar = document.getElementsByClassName('myCalendar')
        for (let i = 0; i < $myCalendar.length; i++) {
          // console.log('===== i: ', i)
          // console.log('===== this.tabCalendars[i]: ', this.tabCalendars[i])
          $myCalendar[i].innerHTML = this.tabCalendars[i]
        }
      } catch (error) {
        // alert('テスト in myDataSet(): ' + error)
        // console.log('エラー in setCalendar(): ' + error)
      }
    },
    edit(id) {
      this.showEdit = true
      this.showReg = false
      const myTab = this.$store.getters['parkingDB/getMyTabById'](id)
      this.sortNo = myTab.sortNo
      this.tabFlg = myTab.tabFlg
      this.editItem.tabName = myTab.tabItem.tabName
      this.editItem.tabCalendar = myTab.tabItem.tabCalendar
      this.editId = id
    },
    // タブを選択した時の色等の変更
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ['bg-primary', 'text-light']
      } else {
        return ['bg-light', 'text-info']
      }
    },
    editCancel() {
      this.tabFlg = true
      this.sortNo = ''
      this.editItem.tabName = ''
      this.editItem.tabCalendar = ''
      this.showEdit = false
      this.showReg = true
    },
    dataReset() {
      const myTab = this.$store.getters['parkingDB/getMyTabById'](this.editId)
      this.sortNo = myTab.sortNo
      this.tabFlg = myTab.tabFlg
      this.editItem.tabName = myTab.tabItem.tabName
      this.editItem.tabCalendar = myTab.tabItem.tabCalendar
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
          // DBに保存されているデータ削除
          this.$store.dispatch('parkingDB/remove', id)
        }
      })
    },
    onSubmitEdit(evt) {
      // alert(JSON.stringify(this.tabItem))
      evt.preventDefault()
      this.update()
      this.toastFileUpdate('編集', '登録しました。')
      // 以下はinputの入力をリセット
      this.showEdit = false
      this.showReg = true
      // this.selected = '選択されていません。'
      this.editCancel()
    },
    onSubmit(evt) {
      // カレンダー登録数の制限
      const calendarNum = this.dbTabs.length
      // console.log('calendarNum: ', calendarNum)
      if (calendarNum > 9) {
        this.$swal({
          title: '登録数オーバー',
          text: 'タブは10個以上登録できません。',
          icon: 'error',
          showCancelButton: false,
          confirmButtonText: '確認しました',
          cancelButtonText: '登録キャンセル',
          focusCancel: true,
        }).then((result) => {
          if (result.value) {
            this.toastFileUpdate('キャンセル', '不要な登録を削除してから登録してください。')
          }
        })
      } else {
        // 以下が登録機能
        evt.preventDefault()
        this.add()
        this.toastFileUpdate('登録', '登録しました。')
        this.editCancel()
      }
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our tabItem values
      this.editCancel()
      // this.show = false
      // this.showImageFlg = false
      // this.$nextTick(() => {
      //   this.show = true
      // })
    },
    toggleCheck() {
      this.tabFlg = !this.tabFlg
    },
    // toggleChk(num) {
    //   switch (num) {
    //     case 1:
    //       this.editItem.tab1Flg = !this.editItem.tab1Flg
    //       break
    //     case 2:
    //       this.editItem.tab2Flg = !this.editItem.tab2Flg
    //       break
    //     case 3:
    //       this.editItem.tab3Flg = !this.editItem.tab3Flg
    //       break
    //     default:
    //       break
    //   }
    // },
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
del {
  color: rgba(255, 0, 0, 1);
}
/* .my-calendar {
  text-align: center;
}
.my-calendar iframe {
  width: 100%;
  max-width: 1200px;
  height: 600px;
} */
/* @media (min-width: 768px) {
  .my-calendar iframe {
    height: 800px;
  }
} */
/* .float-cb {
  clear: both;
} */
/* .image_box {
  position: relative;
} */
/* .image_box .positionRadioBtn { */
/* .positionRadioBtn {
  position: absolute;
  top: 5px;
  right: 5px;
} */
/* .row-eq-height {
  display: flex;
  flex-wrap: wrap;
} */

/* div.image-size b-img {
  height: 100px;
  margin: 0;
  padding: 0;
} */

/* .no-gutters > .col,
.no-gutters > [class*='col-'] {
  margin: 0;
  padding: 0;
} */
/* h1,
h2 {
  font-weight: normal;
} */
/* img {
  width: 100%;
} */
</style>
