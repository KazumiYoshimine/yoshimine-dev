<template>
  <!-- <div class="container-fluid no-gutters p-1"> -->
  <div class="container-fluid row m-0 m-1 p-1 bg-dark">
    <!-- <div class="row m-0 p-0 bg-dark"> -->
    <div class="col-12 m-0 p-1">
      <h3 class="text-light text-center m-0 p-0">管理： メニュー設定</h3>
      <p class="text-light text-center m-0 p-0">メニューの表示/非表示、および名称を変更できます。</p>
    </div>
    <hr class="col-12 m-0 my-2 p-0 py-1" color="#000000" />

    <!-- list group : start -->
    <b-list-group v-for="(dbGroup, indexGroup) in dbGroups" :key="dbGroup.id" class="col-lg-6 m-0 p-2">
      <div class="row m-0 p-0 border">
        <b-list-group-item class="col-12 m-0 p-1 bg-midnightblue d-flex justify-content-between align-items-center">
          <b-button class="m-0 p-1" variant="outline-limegreen" :size="myCommon.selectedBtnSize" @click="showEditModal(dbGroups[indexGroup])"><strong>編集</strong></b-button>
          <span class="m-0 p-0 text-center text-light">Menu Group : {{ dbGroup.myMenu.myGroup.groupName }}</span>
          <b-button class="m-0 p-1" variant="outline-limegreen" :size="myCommon.selectedBtnSize" @click="deleteGroup(dbGroups[indexGroup].id)"><strong>削除</strong></b-button>
        </b-list-group-item>

        <b-list-group-item class="col-12 row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
          <div class="col-12 row m-0 p-0 border text-center">
            <div class="col-2 m-0 p-0 bg-lightgoldenrodyellow">Sort</div>
            <div class="col-3 m-0 p-0 bg-linen">表示/非表示</div>
            <div class="col-7 m-0 p-0 bg-lightcyan">グループ名</div>
          </div>

          <b-input-group class="col-12 row m-0 p-0 bg-linen d-flex align-items-center">
            <div class="col-2 m-0 p-0 pl-1 bg-lightgoldenrodyellow">{{ dbGroup.myMenu.myGroup.sortNo }}</div>
            <b-form-checkbox v-model="dbGroup.myMenu.myGroup.isGroup" disabled class="col-3 m-0 p-0 pl-5 text-center"></b-form-checkbox>

            <div v-if="dbGroup.myMenu.myGroup.isGroup" class="col-7 m-0 p-0 bg-lightcyan">
              <div class="m-0 p-0 pl-1">{{ dbGroup.myMenu.myGroup.groupName }}</div>
            </div>
            <del v-else class="col-7 m-0 p-0 bg-lightcyan">
              <div class="m-0 p-0 pl-1">{{ dbGroup.myMenu.myGroup.groupName }}</div>
            </del>
          </b-input-group>
        </b-list-group-item>

        <!-- page start -->
        <b-input-group class="col-12 row m-0 mt-1 p-0 d-flex align-items-center" style="background-color: lightgray">
          <b-list-group-item class="col-12 m-0 p-0 text-center text-light bg-secondary">Menu Group : {{ dbGroup.myMenu.myGroup.groupName }} - Page list</b-list-group-item>
          <div class="col-12 row m-0 p-0 border text-center bg-secondary d-flex align-items-center">
            <div class="col-2 m-0 p-0 bg-linen">表示/非表示</div>
            <div class="col-6 m-0 p-0 bg-lightcyan">Page 名</div>
            <div class="col-2 m-0 p-0 bg-aquamarine">Page 雛形</div>
            <div class="col-2 m-0 p-0 bg-thistle">Page 番号</div>
          </div>

          <div v-for="myPage in dbGroup.myMenu.myPage" :key="myPage.id" class="col-12 row m-0 p-0 d-flex align-items-center">
            <div class="col-12 row m-0 p-0 border">
              <div class="col-2 row m-0 p-0 bg-linen text-center d-flex align-items-center">
                <b-form-checkbox v-model="myPage.isPage" disabled class="col-12 m-0 p-0 pl-5"></b-form-checkbox>
              </div>

              <div v-if="myPage.isPage" class="col-6 m-0 p-0 bg-lightcyan">
                <div class="m-0 p-0 px-1">{{ myPage.pageName }}</div>
              </div>
              <del v-else class="col-6 m-0 p-0 bg-lightcyan">
                <div class="m-0 p-0 px-1">{{ myPage.pageName }}</div>
              </del>

              <div class="col-2 m-0 p-0 px-1 bg-aquamarine">{{ myPage.pageTemplate }}</div>
              <div class="col-2 m-0 p-0 px-1 bg-thistle">{{ myPage.pageNo }}</div>
            </div>
          </div>
        </b-input-group>
        <!-- page end -->
      </div>
    </b-list-group>
    <!-- list group : end -->

    <!-- ------------------ -->

    <hr class="m-0 p-0 col-12" color="#000000" />
    <div class="col-12 m-0 mt-0 p-2">
      <div class="m-2 pb-2">
        <b-button variant="outline-cyan" :size="myCommon.selectedBtnSize" class="mx-1" @click="showAddModal()">Group 追加</b-button>
        <p class="m-0 mt-1 p-0 text-light">「登録取消」は編集した内容を破棄して、登録前に戻します。</p>
        <p class="m-0 mt-1 p-0 text-light">なお一旦登録すると元に戻すことはできません。</p>
      </div>
    </div>
    <!-- </div> -->

    <!-- Group追加の modalウィンドウ start ********** -->
    <b-modal id="addModal" ref="addModal" size="xl" title="グループ追加" class="m-0 p-0" hide-footer>
      <b-form v-if="evtShow" @submit="onSubmit" @reset="onReset">
        <!-- list group : start -->
        <b-list-group class="row m-0 p-1">
          <b-list-group-item class="col-12 row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-12 row m-0 p-0 border text-center d-flex align-items-center">
              <div class="col-2 m-0 p-0 bg-lightgoldenrodyellow">Sort</div>
              <div class="col-3 m-0 p-0 bg-linen">表示/非表示</div>
              <div class="col-7 m-0 p-0 bg-lightcyan">グループ名</div>
            </div>

            <div class="col-12 row m-0 p-0 d-flex align-items-center bg-linen">
              <b-form-input v-model="inputGroup.myGroup.sortNo" class="col-2 m-0 p-0 pl-1 bg-lightgoldenrodyellow form-control-sm" required></b-form-input>
              <b-form-checkbox v-model="inputGroup.myGroup.isGroup" class="col-3 m-0 p-0 pl-5 text-center"></b-form-checkbox>

              <div v-if="inputGroup.myGroup.isGroup" class="col-7 m-0 p-0">
                <b-form-input v-model="inputGroup.myGroup.groupName" class="m-0 p-0 pl-1 bg-lightcyan form-control-sm" required></b-form-input>
              </div>
              <del v-else class="col-7 m-0 p-0 bg-lightcyan">
                <b-form-input v-model="inputGroup.myGroup.groupName" class="m-0 p-0 pl-1 bg-lightcyan form-control-sm" required></b-form-input>
              </del>
            </div>
          </b-list-group-item>

          <br />
          <!-- page start -->
          <b-input-group class="col-12 row m-0 mt-1 p-0 d-flex align-items-center" style="background-color: lightgray">
            <b-list-group-item class="col-12 m-0 p-0 text-center text-light bg-secondary">Page list</b-list-group-item>
            <div class="col-12 row m-0 p-0 border text-center bg-secondary d-flex align-item-stretch">
              <div class="col-2 m-0 p-0 bg-linen">表示/非表示</div>
              <div class="col-5 m-0 p-0 bg-lightcyan">Page 名</div>
              <div class="col-2 m-0 p-0 bg-aquamarine">Page 雛形</div>
              <div class="col-2 m-0 p-0 bg-thistle">Page 番号</div>
              <div class="col-1 m-0 p-0 bg-secondary">削除</div>
            </div>

            <div v-for="(myPage, indexPage) in inputGroup.myPage" :key="myPage.id" class="col-12 row m-0 p-0 d-flex align-items-center">
              <div class="col-12 form-row m-0 p-0 border d-flex align-items-center">
                <div class="col-2 m-0 p-0 bg-linen d-flex align-items-center">
                  <b-form-checkbox v-model="myPage.isPage" class="col-12 pl-5 text-center"></b-form-checkbox>
                </div>

                <div v-if="myPage.isPage" class="col-5 m-0 p-0 bg-lightcyan">
                  <b-form-input v-model="myPage.pageName" class="m-0 p-0 px-1 bg-lightcyan form-control-sm" required></b-form-input>
                </div>
                <del v-else class="col-5 m-0 p-0 bg-lightcyan">
                  <b-form-input v-model="myPage.pageName" class="m-0 p-0 px-1 bg-lightcyan form-control-sm" required></b-form-input>
                </del>

                <b-form-select v-model="myPage.pageTemplate" :options="pageTemplates" class="col-2 m-0 p-0 px-1 bg-aquamarine form-control-sm" required></b-form-select>
                <b-form-input v-model="myPage.pageNo" type="number" class="col-2 m-0 p-0 px-1 bg-thistle form-control-sm" required></b-form-input>

                <b-button :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" class="col-1 m-0 p-0" @click="delPage(indexPage)">削除</b-button>
              </div>
            </div>
          </b-input-group>
          <!-- page end -->
          <!-- </div> -->
        </b-list-group>
        <!-- list group : end -->

        <b-button :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" type="submit" class="mx-1">登録</b-button>
        <b-button :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" class="mx-1" @click="addPage()">Page 追加</b-button>
        <b-button :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" type="reset" class="mx-1">登録取消</b-button>
      </b-form>
    </b-modal>
    <!-- Group追加の modalウィンドウ end ********** -->

    <!-- Group編集の modalウィンドウ start ********** -->
    <b-modal id="editModal" ref="editModal" size="xl" title="グループ編集" class="m-0 p-0" hide-footer>
      <b-form v-if="evtShowEdit" @submit="onSubmitEdit" @reset="onResetEdit">
        <!-- list group : start -->
        <b-list-group class="row m-0 p-1">
          <b-list-group-item class="col-12 row m-0 p-1 bg-secondary d-flex justify-content-center align-items-center">
            <span class="col-12 m-0 p-0 text-center text-light bg-secondary">Menu Group : {{ inputGroup.myGroup.groupName }}</span>
          </b-list-group-item>

          <b-list-group-item class="col-12 row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-12 row m-0 p-0 border text-center d-flex align-items-center">
              <div class="col-2 m-0 p-0 bg-lightgoldenrodyellow">Sort</div>
              <div class="col-3 m-0 p-0 bg-linen">表示/非表示</div>
              <div class="col-7 m-0 p-0 bg-lightcyan">グループ名</div>
            </div>

            <div class="col-12 row m-0 p-0 d-flex align-items-center bg-linen">
              <b-form-input v-model="inputGroup.myGroup.sortNo" class="col-2 m-0 p-0 pl-1 bg-lightgoldenrodyellow form-control-sm" required></b-form-input>
              <b-form-checkbox v-model="inputGroup.myGroup.isGroup" class="col-3 m-0 p-0 pl-5 text-center"></b-form-checkbox>

              <div v-if="inputGroup.myGroup.isGroup" class="col-7 m-0 p-0">
                <b-form-input v-model="inputGroup.myGroup.groupName" class="m-0 p-0 pl-1 bg-lightcyan form-control-sm" required></b-form-input>
              </div>
              <del v-else class="col-7 m-0 p-0 bg-lightcyan">
                <b-form-input v-model="inputGroup.myGroup.groupName" class="m-0 p-0 pl-1 bg-lightcyan form-control-sm" required></b-form-input>
              </del>
            </div>
          </b-list-group-item>

          <br />
          <!-- page start -->
          <b-input-group class="col-12 row m-0 mt-1 p-0 d-flex align-items-center" style="background-color: lightgray">
            <b-list-group-item class="col-12 m-0 p-0 text-center text-light bg-secondary">Page list</b-list-group-item>
            <div class="col-12 row m-0 p-0 border text-center bg-secondary d-flex align-items-center align-self-stretch">
              <div class="col-2 m-0 p-0 bg-linen">表示/非表示</div>
              <div class="col-5 m-0 p-0 bg-lightcyan">Page 名</div>
              <div class="col-2 m-0 p-0 bg-aquamarine">Page 雛形</div>
              <div class="col-2 m-0 p-0 bg-thistle">Page 番号</div>
              <div class="col-1 m-0 p-0 bg-secondary">削除</div>
            </div>

            <div v-for="(myPage, indexPage) in inputGroup.myPage" :key="myPage.id" class="col-12 row m-0 p-0 d-flex align-items-center">
              <div class="col-12 form-row m-0 p-0 border d-flex align-items-center">
                <div class="col-2 m-0 p-0 bg-linen d-flex align-items-center">
                  <b-form-checkbox v-model="myPage.isPage" class="col-12 pl-5 text-center"></b-form-checkbox>
                </div>

                <div v-if="myPage.isPage" class="col-5 m-0 p-0 bg-lightcyan">
                  <b-form-input v-model="myPage.pageName" class="m-0 p-0 px-1 bg-lightcyan form-control-sm" required></b-form-input>
                </div>
                <del v-else class="col-5 m-0 p-0 bg-lightcyan">
                  <b-form-input v-model="myPage.pageName" class="m-0 p-0 px-1 bg-lightcyan form-control-sm" required></b-form-input>
                </del>

                <b-form-select v-model="myPage.pageTemplate" :options="pageTemplates" class="col-2 m-0 p-0 px-1 bg-aquamarine form-control-sm"></b-form-select>
                <b-form-input v-model="myPage.pageNo" type="number" class="col-2 m-0 p-0 px-1 bg-thistle form-control-sm" required></b-form-input>

                <b-button :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" class="col-1 m-0 p-0" @click="delPage(indexPage)">削除</b-button>
              </div>
            </div>
          </b-input-group>
          <!-- page end -->
        </b-list-group>
        <!-- list group : end -->

        <b-button :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" type="submit" class="mx-1">登録</b-button>
        <b-button :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" class="mx-1" @click="addPage()">Page 追加</b-button>
        <b-button :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" class="mx-1" type="reset">編集取消</b-button>
      </b-form>
    </b-modal>
    <!-- Group編集の modalウィンドウ end ********** -->

    <!-- Group削除の modalウィンドウ start ********** -->
    <b-modal id="deleteModal" ref="deleteModal" size="xl" title="グループ削除" class="m-0 p-0" @ok="deleteOk">
      <p class="m-0 p-0">本当に削除してよろしいですか？</p>
    </b-modal>
    <!-- Group削除の modalウィンドウ end ********** -->

    <!-- sortNo重複の modalウィンドウ start ********** -->
    <b-modal id="sortNoDupModal" ref="sortNoDupModal" size="xl" title="ソート番号重複" class="m-0 p-0" @ok="sortNoDupOk">
      <p class="m-0 p-0">下記の Sort番号 が重複しています。 Sort番号を変更してください。</p>
      <div v-for="diffSortNo in diffSortNos" :key="diffSortNo.id" class="m-0 p-0">
        <p class="m-0 p-0">Sort:&nbsp; &nbsp; {{ diffSortNo }}</p>
      </div>
      <template #modal-footer>
        <div class="w-100">
          <b-button variant="outline-secondary" size="sm" class="float-right" @click="$bvModal.hide('sortNoDupModal')"> 閉じる </b-button>
        </div>
      </template>
    </b-modal>
    <!-- sortNo重複の modalウィンドウ end ********** -->

    <!-- Page重複の modalウィンドウ start ********** -->
    <b-modal id="pageDupModal" ref="pageDupModal" size="xl" title="ページ重複" class="m-0 p-0" @ok="pageDupOk">
      <p class="m-0 p-0">下記のページが重複しています。 ページ番号を変更してください。</p>
      <div v-for="diffPage in diffPages" :key="diffPage.id" class="m-0 p-0">
        <p class="m-0 p-0">{{ diffPage }}</p>
      </div>
      <template #modal-footer>
        <div class="w-100">
          <b-button variant="outline-secondary" size="sm" class="float-right" @click="$bvModal.hide('pageDupModal')"> 閉じる </b-button>
        </div>
      </template>
    </b-modal>
    <!-- Page重複の modalウィンドウ end ********** -->

    <!-- Page削除の modalウィンドウ start ********** -->
    <!-- <b-modal id="pageDelModal" ref="pageDelModal" size="xl" title="ページ削除" class="m-0 p-0" @cancel="pageDelCancel" @ok="pageDelOk"> -->
    <b-modal id="pageDelModal" ref="pageDelModal" size="xl" title="ページ削除" class="m-0 p-0" @ok="pageDelOk">
      <p class="m-0 p-0">削除してよろしいですか？</p>
    </b-modal>
    <!-- Page削除の modalウィンドウ end ********** -->

    <!-- <p>{{ myMenuSet() }}</p> -->
    <!-- <b-button :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" class="m-1 p-1" @click="testDispInfo()">test-dispInfo</b-button> -->
  </div>
</template>

<script>
// import firebase from '~/plugins/firebase'
// const db = firebase.firestore()

export default {
  data() {
    return {
      templateNo: '',
      myMenuSetFlg: false,
      myCommon: {},
      inputGroup: {
        myGroup: {
          sortNo: 0,
          groupName: '',
          isGroup: true,
        },

        myPage: [
          {
            isPage: true,
            pageName: '',
            pageTemplate: '',
            pageNo: 0,
          },
        ],
      },
      inputGroup2: {},
      inputPage: {},
      editId: '',
      deleteId: '',
      delIndexPage: '',
      pageTemplates: ['general', 'simple', 'faq', 'question', 'about', 'subInfo', 'access', 'reserve'],
      evtShow: true,
      evtShowEdit: true,
      diffPages: [],
      diffSortNos: [],
    }
  },

  computed: {
    dbHeaders() {
      return this.$store.getters['storeheader/getDbHeadersById']('menu')
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
    this.$store.dispatch('storeheader/init')
    this.$store.dispatch('storemenu/init')
    // this.$store.dispatch('simple/init', db.collection('simple').doc(this.templateNo).collection(this.templateNo).orderBy('page.fileUrl', 'desc'))
    // this.$store.dispatch('simple/init', db.collection('simple').doc(this.templateNo).collection(this.templateNo).orderBy('page.fileUrl', 'desc'))
    // this.$store.dispatch('simple/initMenu')
  },

  // elementへのマウントが行われた後処理される。
  // SSR(Firebase等)では使えない。
  mounted() {
    this.setMenuIndex(92, 0, 'menuSet', 0)

    this.inputGroup2 = JSON.parse(JSON.stringify(this.inputGroup))
    // console.log('mounted-1 --- inputGroup2: ', this.inputGroup2)

    this.$nuxt.$on('mycommon', (myCommon) => {
      this.myCommon = myCommon
    })
  },

  // ④ updated 画面が更新された後、呼び出される。
  // SSR(Firebase等)では使えない。
  updated() {
    // this.setMenuIndex(92, 0, 'menuSet', 0)
  },

  // ⑨ methods は呼び出される度に実行
  // データが変更された時、反映したくない場合はmethodsを利用
  methods: {
    // testDispInfo() {
    // console.log('testDispInfo-1 --- inputGroups: ', this.inputGroups)
    // },

    selnum(num) {
      // this.selected = num
      // console.log('header selnum selected: ' + num)
      this.$nuxt.$emit('selnum', num)
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

    // グループ編集用のモーダル表示
    // showAddModal(dbGroup) {
    showAddModal() {
      this.inputGroup = JSON.parse(JSON.stringify(this.inputGroup2))

      // console.log('showAddModal-3 --- inputGroup: ', this.inputGroup)
      this.$refs.addModal.show()
    },

    // グループ編集用のモーダル表示
    showEditModal(dbGroup) {
      // if (typeof this.dbEachPage !== 'undefined') {
      //   this.layoutInput = JSON.parse(JSON.stringify(this.dbEachPage.layout))
      // } else {
      //   this.layoutInput = JSON.parse(JSON.stringify(this.layout))
      // }

      this.inputGroup = JSON.parse(JSON.stringify(dbGroup.myMenu))
      // console.log('showEditModal-1 --- dbGroup: ', this.inputGroup)

      this.editId = dbGroup.id
      // console.log('showEditModal-2 --- editId: ', this.editId)
      this.$refs.editModal.show()
    },

    // addGroup() {
    onSubmit(evt) {
      evt.preventDefault()
      // console.log('addGroup-1 --- inputGroup: ', this.inputGroup)

      this.inputGroup.myGroup.sortNo = Number(this.inputGroup.myGroup.sortNo)
      // console.log('addGroup-2 --- sortNo: ', this.inputGroup.myGroup.sortNo)

      for (let index = 0; index < this.inputGroup.myPage.length; index++) {
        this.inputGroup.myPage[index].pageNo = Number(this.inputGroup.myPage[index].pageNo)
        // console.log('addGroup-3 --- pageNo: ', this.inputGroup.myPage[index].pageNo)
      }

      // ① dbGroups から pageLists, sortLists を作成
      const pageLists = []
      const sortLists = []
      this.dbGroups.forEach((dbGroup) => {
        sortLists.push(dbGroup.myMenu.myGroup.sortNo)

        dbGroup.myMenu.myPage.forEach((thisPage) => {
          // console.log('editGroup-4 --- tempateNo: ', thisPage.pageTemplate + thisPage.pageNo)
          pageLists.push(thisPage.pageTemplate + '-' + thisPage.pageNo)
        })
      })

      // ② 新規登録予定のグループ（ID）を追加
      sortLists.push(this.inputGroup.myGroup.sortNo)

      this.inputGroup.myPage.forEach((thisPage) => {
        // console.log('editGroup-5 --- thisPage: ', thisPage)
        pageLists.push(thisPage.pageTemplate + '-' + thisPage.pageNo)
      })

      // ③-1 sortNo の重複の有無をチェック
      sortLists.sort()
      // console.log('editGroup-6 ---sortLists: ', sortLists)

      let preSortNo = ''
      this.diffSortNos = []
      sortLists.forEach((sortNo) => {
        // console.log('editGroup-7 ---sortNo: ', sortNo)

        if (preSortNo === sortNo) {
          // 重複
          this.diffSortNos.push(sortNo)
        }

        preSortNo = sortNo
      })

      // ③-2 ページの重複の有無をチェック
      pageLists.sort()
      // console.log('editGroup-6 ---pageLists: ', pageLists)

      let prePage = ''
      this.diffPages = []
      pageLists.forEach((page) => {
        // console.log('editGroup-7 ---page: ', page)

        if (prePage === page) {
          // 重複
          this.diffPages.push(page)
        }

        prePage = page
      })

      // // ④-1 ページ重複の無しの処理、及び有りの処理
      // if (this.diffPages.length === 0) {
      // ④-1 sortNo 重複の無しの処理、及び有りの処理
      if (this.diffSortNos.length === 0) {
        // ④-2 ページ重複の無しの処理、及び有りの処理
        if (this.diffPages.length === 0) {
          // 重複が無かった場合の処理
          this.$store
            .dispatch('storemenu/add', { myMenu: this.inputGroup })
            .then((result) => {
              if (result === 'regOK') {
                this.toastFileUpdate('グループ追加', '登録しました。')
              } else {
                alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
              }
            })
            .catch((error) => {
              alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？: ', error)
            })

          this.$refs.addModal.hide()
        } else {
          // pageの重複があった場合の処理
          this.$refs.pageDupModal.show()
        }
      } else {
        // sortNoの重複があった場合の処理
        // console.log('editGroup-8 --- 重複: ', 'あり')
        this.$refs.sortNoDupModal.show()
      }

      // // ④-2 sortNo 重複の無しの処理、及び有りの処理
      // if (this.diffSortNos.length === 0) {
      //   // 重複が無かった場合の処理
      //   this.$store
      //     .dispatch('storemenu/add', { myMenu: this.inputGroup })
      //     .then((result) => {
      //       if (result === 'regOK') {
      //         this.toastFileUpdate('グループ追加', '登録しました。')
      //       } else {
      //         alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
      //       }
      //     })
      //     .catch((error) => {
      //       alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？: ', error)
      //     })

      //   this.$refs.addModal.hide()
      // } else {
      //   // 重複があった場合の処理
      //   this.$refs.pageDupModal.show()
      // }
    },

    onReset(evt) {
      // alert('onReset:')
      evt.preventDefault()
      this.$refs.addModal.hide()

      this.evtShow = false
      this.$nextTick(() => {
        this.evtShow = true
      })
    },

    // editGroup(evt) {
    // onSubmitEdit() {
    onSubmitEdit(evt) {
      evt.preventDefault()

      this.inputGroup.myGroup.sortNo = Number(this.inputGroup.myGroup.sortNo)
      // console.log('addGroup-2 --- sortNo: ', this.inputGroup.myGroup.sortNo)

      for (let index = 0; index < this.inputGroup.myPage.length; index++) {
        this.inputGroup.myPage[index].pageNo = Number(this.inputGroup.myPage[index].pageNo)
        // console.log('addGroup-3 --- pageNo: ', this.inputGroup.myPage[index].pageNo)
      }

      // ① dbGroups から pageLists, sortLists を作成
      const pageLists = []
      const sortLists = []
      // let dupFlg = false

      this.dbGroups.forEach((dbGroup) => {
        // console.log('editGroup-1 --- dbGroup: ', dbGroup)
        // console.log('editGroup-2-1 --- dbGroup.myMenu: ', dbGroup.myMenu.myMenu)
        // console.log('editGroup-2-2 --- dbGroup.myGroup: ', dbGroup.myMenu.myGroup)

        // 編集中のグループ（ID）は除く
        if (this.editId !== dbGroup.id) {
          sortLists.push(dbGroup.myMenu.myGroup.sortNo)

          dbGroup.myMenu.myPage.forEach((thisPage) => {
            // console.log('editGroup-3 --- thisPage: ', thisPage)
            // console.log('editGroup-4 --- tempateNo: ', thisPage.pageTemplate + thisPage.pageNo)
            pageLists.push(thisPage.pageTemplate + '-' + thisPage.pageNo)
          })
        }
      })

      // ② 編集中のグループ（ID）を追加
      sortLists.push(this.inputGroup.myGroup.sortNo)

      this.inputGroup.myPage.forEach((thisPage) => {
        // console.log('editGroup-5 --- thisPage: ', thisPage)
        pageLists.push(thisPage.pageTemplate + '-' + thisPage.pageNo)
      })

      // ③-1 sortNo 番号の重複の有無をチェック
      sortLists.sort()
      // console.log('editGroup-6 ---sortLists: ', sortLists)

      let preSortNo = ''
      this.diffSortNos = []
      sortLists.forEach((sortNo) => {
        // console.log('editGroup-7 ---sortNo: ', sortNo)

        if (preSortNo === sortNo) {
          // 重複
          this.diffSortNos.push(sortNo)
        }

        preSortNo = sortNo
      })

      // ③-2 ページ番号の重複の有無をチェック
      pageLists.sort()
      // console.log('editGroup-6 ---pageLists: ', pageLists)

      let prePage = ''
      this.diffPages = []
      pageLists.forEach((page) => {
        // console.log('editGroup-7 ---page: ', page)

        if (prePage === page) {
          // 重複
          this.diffPages.push(page)
        }

        prePage = page
      })

      // ④-1 sortNo 重複の無しの処理、及び有りの処理
      if (this.diffSortNos.length === 0) {
        // ④-2 ページ重複の無しの処理、及び有りの処理
        if (this.diffPages.length === 0) {
          // 重複がなかった場合の処理
          this.$store
            .dispatch('storemenu/update', { id: this.editId, myMenu: this.inputGroup })
            .then((result) => {
              if (result === 'regOK') {
                this.toastFileUpdate('グループ編集', '登録しました。')
              } else {
                alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
              }
            })
            .catch((error) => {
              alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？: ', error)
            })

          this.$refs.editModal.hide()
        } else {
          // pageの重複があった場合の処理
          this.$refs.pageDupModal.show()
        }
      } else {
        // sortNoの重複があった場合の処理
        // console.log('editGroup-8 --- 重複: ', 'あり')
        this.$refs.sortNoDupModal.show()
      }

      // // ④-2 sortNo 重複の無しの処理、及び有りの処理
      // if (this.diffSortNos.length === 0) {
      //   // 重複がなかった場合の処理
      //   this.$store
      //     .dispatch('storemenu/update', { id: this.editId, myMenu: this.inputGroup })
      //     .then((result) => {
      //       if (result === 'regOK') {
      //         this.toastFileUpdate('グループ編集', '登録しました。')
      //       } else {
      //         alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
      //       }
      //     })
      //     .catch((error) => {
      //       alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？: ', error)
      //     })

      //   this.$refs.editModal.hide()
      // } else {
      //   // 重複があった場合の処理
      //   // console.log('editGroup-8 --- 重複: ', 'あり')

      //   this.$refs.pageDupModal.show()
      // }

      // this.$refs.editModal.hide()
    },

    // onResetEdit(evt) {
    onResetEdit() {
      // console.log('onResetEdit-1 --- nashi: ')
      // evt.preventDefault()
      this.$refs.editModal.hide()

      this.evtShowEdit = false
      this.$nextTick(() => {
        this.evtShowEdit = true
      })
    },

    deleteGroup(id) {
      this.$refs.deleteModal.show()

      this.$refs.deleteModal.hide()

      this.deleteId = id
      // this.$store.dispatch('storemenu/delete', id).then((result) => {
      //   if (result === 'regOK') {
      //     this.toastFileUpdate('グループ追加', '登録しました。')
      //   } else {
      //     alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
      //   }
      // })
      // .catch((error) => {
      //   alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？: ', error)
      //   this.toastFileUpdate('グループ削除', '削除しました。')
      // })
    },

    addPage() {
      this.inputPage = {}
      this.inputPage.isPage = true

      // test ----- start
      // 下記の行は仮の値で、実際は候補の番号をセット
      this.inputPage.pageNo = this.inputGroup.myPage.length
      // test ----- end

      this.inputGroup.myPage.push(this.inputPage)
      // this.inputGroup.myPage = this.inputPage
      // console.log('addPage-1 --- inputGroup: ', this.inputGroup)
    },

    delPage(indexPage) {
      // console.log('delPage-1 --- indexPage: ', indexPage)
      // console.log('delPage-2 --- myPage: ', this.inputGroup.myPage[indexPage])
      // console.log('delPage-3 --- templateNo: ', this.inputGroup.myPage[indexPage].pageTemplate + '-' + this.inputGroup.myPage[indexPage].pageNo)
      // console.log('delPage-4 --- inputGroup: ', this.inputGroup)
      // const templateNo = this.inputGroup.myPage[indexPage].pageTemplate + this.inputGroup.myPage[indexPage].pageNo
      // console.log('delPage-5 --- templateNo: ', templateNo)
      // const myPage = this.$store.getters['simple/getMyPageById'](this.inputGroup.myPage[indexPage].pageTemplate + this.inputGroup.myPage[indexPage].pageNo)
      // const myPage = this.$store.getters['simple/getMyPageAll']
      // const myPage = this.$store.getters['simple/getMyPageById'](this.editId)
      // const myPage = this.$store.getters['simple/orderdMainDate']
      // console.log('delPage-6 --- myPage: ', myPage)

      this.inputGroup.myPage.splice(indexPage, 1)
      // console.log('delPage-9 --- inputGroup.myPage: ', this.inputGroup.myPage)

      this.delIndexPage = indexPage
      this.$refs.pageDelModal.show()
    },

    // sortNoDupModal でOKボタンが押されたときの処理 ------- start
    sortNoDupOk() {
      // dummy
    },

    // pageDupModal でOKボタンが押されたときの処理 ------- start
    pageDupOk() {
      // this.$store
      //   .dispatch('storemenu/update', { id: this.editId, myMenu: this.inputGroup })
      //   .then((result) => {
      //     if (result === 'regOK') {
      //       this.toastFileUpdate('グループ編集', '登録しました。')
      //     } else {
      //       alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
      //     }
      //   })
      //   .catch((error) => {
      //     alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？: ', error)
      //   })
    },
    // pageDupModal でOKボタンが押されたときの処理 ------- end

    // pageDelModal でOKボタンが押されたときの処理 ------- start
    pageDelOk() {
      // console.log('pageDelOk-1 --- delIndexPage: ', this.delIndexPage)
      // this.$store.dispatch('storemenu/delPage', this.deleteId).then((value) => {
      //     if (result === 'regOK') {
      // this.toastFileUpdate('ページ削除', 'データを削しました。')
      //     } else {
      //       alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
      //     }
      //   })
      //   .catch((error) => {
      //     alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？: ', error)
      this.toastFileUpdate('ページ削除', 'データを削しました。')
      // })
    },
    // pageDelModal でOKボタンが押されたときの処理 ------- end

    // pageDelModal でCalcelボタンが押されたときの処理 ------- start
    // pageDelCancel() {
    //   this.inputGroup.myPage.splice(this.delIndexPage, 1)
    // },
    // pageDelModal でCalcelボタンが押されたときの処理 ------- end

    // deleteModal の OKボタン が押されたときの処理 ------- start
    deleteOk() {
      // bvModalEvt.preventDefault()
      this.$store
        .dispatch('storemenu/delete', this.deleteId)
        .then((result) => {
          if (result === 'regOK') {
            this.toastFileUpdate('グループ削除', '削除しました。')
          } else {
            alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
          }
        })
        .catch((error) => {
          alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？: ', error)
        })
    },
    // deleteModal の OKボタン が押されたときの処理 ------- end

    // 「登録取消」ボタンをクリックした時、Firestoreのデータを再設定
    myUndo() {
      this.$router.go()
    },
    // トースト
    toastFileUpdate(titleData, mainData) {
      this.$bvToast.toast(mainData, {
        title: titleData,
        autoHideDelay: 5000,
      })
    },

    // Page を開いた時、メニューデータをFireStoreからロードしてセット
    // myMenuSet() {
    //   if (this.myMenuSetFlg === false) {
    //     if (this.dbGroups.length !== 0) {
    //       try {
    //         this.inputGroups = JSON.parse(JSON.stringify(this.dbGroups))
    //         // console.log('myMenuSet-1 === inputGroups: ', this.inputGroups)

    //         this.myMenuSetFlg = true
    //       } catch (error) {
    //         // alert('テスト in myMenuSet(): ' + error)
    //         // console.log('テスト in myMenuSet(): ' + error)
    //       }
    //     }
    //   }
    // },
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

.positionCheckbox {
  /* position: absolute; */
  position: relative;
  /* top: 1px; */
  left: 12;
}

del {
  color: rgba(255, 0, 0, 1);
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
