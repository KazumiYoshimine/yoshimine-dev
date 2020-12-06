<template>
  <div class="container-fluid">
    <h5 v-if="myMenu" class="text-light text-center m-0 p-1" :style="myCommon.buttonColorBasicSet">{{ myMenu.m61 }}</h5>

    <b-card no-body>
      <b-tabs v-model="tabSelected" card style="background-color: whitesmoke">
        <!-- #################### Tab start ##### -->
        <div v-for="(dbTab, index) in dbTabs" :key="dbTab.id" class="m-0 my-1 p-0">
          <!-- <div v-for="dbTab in dbTabs" :key="dbTab.id" class="m-0 my-1 p-0"> -->
          <b-tab :title="dbTab.tabs.tabName" :title-link-class="linkClass(index)" class="m-2 p-0">
            <!-- #################### 本番 start ##### -->
            <div class="row m-0 p-0">
              <!-- Q -->
              <div class="col-6 m-0 p-0 text-wrap text-center border" style="background-color: lightblue">
                <p class="m-0 p-1 text-break overflow-auto" style="overflow-wrap: break-word">Question</p>
              </div>

              <!-- A -->
              <div class="col-6 m-0 p-0 text-wrap text-center border" style="background-color: lightblue">
                <p class="m-0 p-1 text-break overflow-auto" style="overflow-wrap: break-word">Answer</p>
              </div>
            </div>

            <div v-for="(dbPage, index2) in dbPages" :key="dbPage.id" class="mt-1 p-0">
              <div v-b-modal="'tab' + index + '-' + index2">
                <div class="row m-0 p-0">
                  <!-- Q -->
                  <div class="col-6 m-0 p-0 text-wrap border" style="background-color: white">
                    <p class="m-0 p-1 text-break overflow-auto" style="overflow-wrap: break-word; max-height: 115px">{{ dbPage.page.q }}</p>
                  </div>

                  <!-- A -->
                  <div class="col-6 m-0 p-0 text-wrap border" style="background-color: white">
                    <p class="m-0 p-1 text-break overflow-auto" style="overflow-wrap: break-word; max-height: 115px">{{ dbPage.page.a }}</p>
                  </div>
                </div>
              </div>

              <!-- 。。。。。。。。。。。 モーダル表示 start 。。。。。。。。。。。 -->
              <b-modal :id="'tab' + index + '-' + index2" hide-header size="xl">
                <!-- Q -->
                <div class="border m-0 p-1" style="background-color: aliceblue">
                  <h4 class="border m-0 p-1 pl-3 text-wrap text-white" style="background-color: royalblue; width: 3rem">Q</h4>
                  <h5 class="text-justify text-break m-0 p-1 pl-3" style="white-space: pre-wrap">{{ dbPage.page.q }}</h5>
                </div>

                <!-- A -->
                <div class="modal-body border m-0 p-1" style="background-color: aliceblue">
                  <h4 class="border m-0 p-1 pl-3 text-wrap text-white" style="background-color: royalblue; width: 3rem">A</h4>
                  <h5 class="text-justify text-break m-0 p-1 pl-3" style="white-space: pre-wrap">{{ dbPage.page.a }}</h5>
                </div>
              </b-modal>
              <!-- 。。。。。。。。。。。 モーダル表示 end 。。。。。。。。。。。 -->
            </div>
          </b-tab>
        </div>
        <!-- #################### Tab end ##### -->
      </b-tabs>
    </b-card>

    <div v-show="isLogin" class="m-0 p-0">
      <!-- ============================== 管理機能 ============================== -->
      <div class="row d-flex flex-row m-0 mt-2 p-2 bg-dark">
        <h5 class="mx-2 m-0 p-0 py-1 text-white">以下は管理機能です。</h5>
        <b-button :size="myCommon.selectedBtnSize" style="background-color: midnightblue" class="m-0 ml-2 px-1 py-0" @click="onQA()">① Ｑ＆Ａ登録</b-button>
        <b-button :size="myCommon.selectedBtnSize" style="background-color: midnightblue" class="m-0 ml-2 px-1 py-0" @click="onCategory()">② カテゴリー設定</b-button>
      </div>

      <!-- ------------------------------ Tab(カテゴリー)設定 ----- -->
      <div v-show="showTab" class="m-0 mt-2 p-0">
        <div class="m-0 mt-2 p-2 bg-dark">
          <!-- 現在の登録状況 ＆ 削除 start -->
          <!-- <div class="row col-12 m-0 my-2 p-0" style="background-color:lightsteelblue;"> -->
          <div class="m-0 my-2 p-0" style="background-color: lightsteelblue">
            <h5 class="row col-12 mx-2 mb-0 p-0 py-2">【カテゴリー設定】現在の登録状況 ＆ 削除</h5>

            <div class="row text-center m-0 mx-1 p-0 border border-secondary" style="background-color: gainsboro">
              <!-- 空欄 -->
              <div class="col-2 m-0 p-1" style="background-color: lightsteelblue">
                <p class="m-0 p-0"></p>
              </div>

              <!-- 表示／非表示 -->
              <div class="col-2 text-center m-0 p-1 border-left border-secondary" style="background-color: lightsteelblue">
                <p class="m-0 p-0">表示/非表示</p>
              </div>

              <!-- tabIndex 以下の５行は消すな！ -->
              <!-- <div class="col-1 d-flex justify-content-center m-0 p-0 border-left border-secondary" style="background-color:lightsteelblue;">
                <div class="align-self-center m-0 p-1">
                  <p class="m-0 p-0">tabIndex</p>
                </div>
              </div> -->

              <!-- sortNo -->
              <div class="col-2 d-flex justify-content-center m-0 p-0 border-left border-secondary" style="background-color: lightsteelblue">
                <div class="align-self-center m-0 p-1">
                  <p class="m-0 p-0">ソート番号</p>
                </div>
              </div>

              <!-- タブ名 -->
              <!-- <div class="col-3 text-center m-0 p-1 border-left border-secondary" style="background-color:lightsteelblue;"> -->
              <div class="col-6 d-flex justify-content-center m-0 p-0 border-left border-secondary" style="background-color: lightsteelblue">
                <div class="align-self-center m-0 p-1">
                  <p class="m-0 p-0">カテゴリー名</p>
                </div>
              </div>
            </div>

            <div v-for="dbTab in dbTabsAll" :key="dbTab.id" class="m-0 mt-0 p-0">
              <div class="row m-0 mx-1 p-0 border border-secondary" style="background-color: gainsboro">
                <!-- 編集／削除 ボタン -->
                <div class="col-2 m-0 p-1">
                  <b-button :size="myCommon.selectedBtnSize" class="px-1 py-0 m-0 mt-1" variant="primary" @click="editDbTab(dbTab.id)">編集</b-button>
                  <b-button :size="myCommon.selectedBtnSize" class="px-1 py-0 m-0 mt-1" @click="removeTab(dbTab.id)">削除</b-button>
                </div>

                <!-- 表示／非表示 -->
                <!-- <div class="col-1 m-0 p-1 border-left border-secondary" style="background-color:gainsboro;"> -->
                <div class="col-2 d-flex justify-content-center m-0 p-0 border-left border-secondary" style="background-color: gainsboro">
                  <div class="align-self-center m-0 p-1">
                    <p class="m-0 p-0">{{ dbTab.tabs.tabFlg }}</p>
                  </div>
                </div>

                <!-- tabIndex 以下の５行は消すな！ -->
                <!-- <div class="col-1 d-flex justify-content-center m-0 p-0 border-left border-secondary" style="background-color:gainsboro;">
                  <div class="align-self-center m-0 p-1">
                    <p class="m-0 p-0">{{ dbTab.tabIndex }}</p>
                  </div>
                </div> -->

                <!-- sortNo -->
                <div class="col-2 d-flex justify-content-center m-0 p-0 border-left border-secondary" style="background-color: gainsboro">
                  <div class="align-self-center m-0 p-1">
                    <p class="m-0 p-0">{{ dbTab.tabs.sortNo }}</p>
                  </div>
                </div>

                <!-- タブ名 -->
                <!-- <div class="col-3 m-0 p-0 px-1 text-wrap border-left border-secondary" style="background-color:gainsboro;"> -->
                <div class="col-6 d-flex m-0 p-0 border-left border-secondary" style="background-color: gainsboro">
                  <div class="align-self-center m-0 p-1">
                    <p class="m-0 p-0 text-break overflow-auto" style="overflow-wrap: break-word; max-height: 60px">{{ dbTab.tabs.tabName }}</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- 現在の登録状況 ＆ 削除 end -->
          </div>
          <!-- <b-button :size="myCommon.selectedBtnSize" type="submit" variant="primary" class="m-1 ml-2 px-1 py-0">登録</b-button> -->
          <!-- <b-button :size="myCommon.selectedBtnSize" variant="info" class="m-1 px-1 py-0" @click="updateCategory()">登録</b-button> -->

          <!-- ¥¥¥¥¥¥¥¥¥ 編集 start -->
          <div v-show="showEditTab" class="col-12 m-0 p-0">
            <div class="m-0 p-0 mt-2" style="background-color: linen">
              <div class="d-flex flex-low">
                <h4 class="mx-2 my-0 p-0 pt-1">編集</h4>
                <b-button :size="myCommon.selectedBtnSize" variant="dark" class="m-1 px-1 py-0" @click="editCancelTab()">編集取消</b-button>
              </div>
              <b-form @submit="onSubmitTabEdit" @reset="onResetTab">
                <!-- 表示／非表示 -->
                <div class="row p-0 m-0 mr-1">
                  <div class="col-4 m-0 p-0">
                    <p class="m-0 mt-2 p-1 pt-0">表示/非表示</p>
                  </div>

                  <div class="col-8 m-0 mt-1 p-0">
                    <b-input-group class="mb-2">
                      <b-input-group-prepend is-text>
                        <input type="checkbox" :checked="editTab.tabFlg" @change="toggleCheck()" />
                      </b-input-group-prepend>
                    </b-input-group>
                  </div>
                </div>

                <!-- sort番号 -->
                <div class="row p-0 pt-2 m-0 mr-1">
                  <div class="col-4 m-0 p-0">
                    <p class="m-0 mt-2 p-1 pt-0">sort番号(必須)</p>
                  </div>
                  <b-form-input v-model="editTab.sortNo" type="number" class="col-8" required placeholder="若番順に表示します。"></b-form-input>
                </div>

                <!-- タブ名 -->
                <div class="row p-0 pt-2 m-0 mr-1">
                  <p class="col-4 m-0 mt-2 p-1 pt-0">カテゴリー名(必須)</p>
                  <b-form-input v-model="editTab.tabName" class="col-8" required placeholder="カテゴリー名を入力してください。" rows="3" max-rows="6"></b-form-input>
                </div>

                <b-button :size="myCommon.selectedBtnSize" type="submit" variant="primary" class="m-1 ml-2 px-1 py-0">登録</b-button>
                <!-- <b-button :size="myCommon.selectedBtnSize" variant="dark" class="m-1 px-1 py-0" @click="dataReset()">データクリアー</b-button> -->
              </b-form>

              <hr />
            </div>
          </div>
          <!-- ¥¥¥¥¥¥¥¥¥  編集 End -->

          <!-- ¥¥¥¥¥¥¥¥¥ 新規登録 start -->
          <div v-show="showRegTab" class="col-12 m-0 p-0">
            <div class="m-0 p-0 mt-2" style="background-color: lightblue">
              <h4 class="mx-2 mb-0 p-0 pt-1">新規登録</h4>

              <b-form @submit="onSubmitTab" @reset="onResetTab">
                <!-- 表示／非表示 -->
                <div class="row p-0 m-0 mr-1">
                  <div class="col-4 m-0 p-0">
                    <p class="m-0 mt-2 p-1 pt-0">表示/非表示</p>
                  </div>

                  <div class="col-8 m-0 mt-1 p-0">
                    <b-input-group class="mb-2">
                      <b-input-group-prepend is-text>
                        <input type="checkbox" :checked="editTab.tabFlg" @change="toggleCheck()" />
                      </b-input-group-prepend>
                    </b-input-group>

                    <!-- <del v-else> -->
                    <!-- <b-input-group class="mb-2">
                      <b-input-group-prepend is-text>
                        <input type="checkbox" :checked="tabFlg" @change="toggleCheck()" />
                      </b-input-group-prepend>
                      <b-form-input v-model="sortNo"></b-form-input>
                    </b-input-group>
                    <b-form-input v-model="editTab.tabName"></b-form-input> -->
                    <!-- </del> -->
                  </div>
                </div>

                <!-- sort番号 -->
                <div class="row p-0 pt-2 m-0 mr-1">
                  <div class="col-4 m-0 p-0">
                    <p class="m-0 mt-2 p-1 pt-0">sort番号(必須)</p>
                  </div>
                  <b-form-input v-model="editTab.sortNo" type="number" class="col-8" required placeholder="若番順に表示します。"></b-form-input>
                </div>

                <!-- タブ名 -->
                <div class="row p-0 pt-2 m-0 mr-1">
                  <p class="col-4 m-0 mt-2 p-1 pt-0">カテゴリー名(必須)</p>
                  <b-form-input v-model="editTab.tabName" class="col-8" required placeholder="カテゴリー名を入力してください。" rows="3" max-rows="6"></b-form-input>
                </div>

                <br />

                <b-button :size="myCommon.selectedBtnSize" type="submit" variant="primary" class="m-1 mt-2 px-1 py-0">登録</b-button>
                <b-button :size="myCommon.selectedBtnSize" type="reset" variant="dark" class="m-0 mt-2 px-1 py-0">データクリア</b-button>
              </b-form>

              <hr />
            </div>
          </div>
          <!-- 新規登録 End -->
        </div>
      </div>

      <!-- ------------------------------ Q&A設定 --- -->
      <div v-show="showQA" class="m-0 mt-2 p-0">
        <!-- <b-form-group label="カテゴリーを選択してください。" @submit="changeTabIndex()"> -->
        <b-form-group label="カテゴリーを選択してください。">
          <!-- <b-form-radio-group v-model="tabSelected" :options="tabData" buttons button-variant="outline-info" name="radios-btn-outline" @click="changeTabIndex()"></b-form-radio-group> -->
          <!-- <b-form-radio-group v-model="tabSelected" :options="tabData" buttons button-variant="outline-info" name="radios-btn-outline" @mouseout="changeTabIndex()"></b-form-radio-group> -->
          <!-- <b-form-radio-group v-model="tabSelected" :options="tabData" buttons button-variant="outline-info" name="radios-btn-outline" type="submit"></b-form-radio-group> -->
          <!-- <b-form-radio-group id="btn-radios-1" v-model="tabSelected" :options="tabOptions" buttons button-variant="outline-primary" size="lg" name="radio-btn-outline"></b-form-radio-group> -->
          <!-- <b-form-radio-group v-model="tabSelected" :options="tabData" buttons button-variant="outline-info" name="radios-btn-outline" @change="changeTabIndex()"></b-form-radio-group> -->
          <!-- <b-form-radio-group v-model="tabSelected" :options="tabData" buttons button-variant="outline-info" name="radios-btn-outline" @change="changeTabIndex()"></b-form-radio-group> -->
          <b-form-radio-group v-model="tabSelected" :options="tabData" buttons button-variant="outline-info" name="radios-btn-outline"></b-form-radio-group>
        </b-form-group>

        <!-- ¥¥¥¥¥¥¥¥¥ tab start ¥¥¥¥ -->
        <!-- <div v-show="showTab1" class="m-0 mt-2 p-0"> -->
        <!-- <div v-show="tabSelected === 'tab1'" class="m-0 mt-2 p-0"> -->
        <!-- <div v-show="tabSelected === 0" class="m-0 mt-2 p-0"> -->
        <div class="row m-0 mt-2 p-2 bg-dark">
          <!-- &&&&&&&&&&&&&&&&&&& 現在の登録状況 ＆ 削除 start -->
          <div class="col-12 m-0 my-2 p-0" style="background-color: lightsteelblue">
            <h5 class="mx-2 my-2 p-0 pt-1">【Ｑ＆Ａ】現在の登録状況 ＆ 削除</h5>

            <div class="row text-center m-0 mx-1 p-0 border border-secondary" style="background-color: gainsboro">
              <div class="col-1 m-0 p-1" style="background-color: lightsteelblue">
                <!-- <p class="m-0 p-0">Action</p> -->
                <p class="m-0 p-0"></p>
              </div>

              <div class="col-1 text-center m-0 p-1 border-left border-secondary" style="background-color: lightsteelblue">
                <p class="m-0 p-0">Sort</p>
              </div>

              <!-- Q -->
              <div class="col-5 text-center m-0 p-1 border-left border-secondary" style="background-color: lightsteelblue">
                <p class="m-0 p-0">Question</p>
              </div>

              <!-- A -->
              <div class="col-5 text-center m-0 p-1 border-left border-secondary" style="background-color: lightsteelblue">
                <p class="m-0 p-0">Answer</p>
              </div>
            </div>

            <div v-for="dbPage in dbPages" :key="dbPage.id" class="m-0 my-1 p-0">
              <div class="row m-0 mx-1 p-0 border border-secondary" style="background-color: gainsboro">
                <div class="col-1 m-0 p-1">
                  <b-button :size="myCommon.selectedBtnSize" class="px-1 py-0 m-0 mt-1" variant="primary" @click="edit(dbPage.id)">編集</b-button>
                  <b-button :size="myCommon.selectedBtnSize" class="px-1 py-0 m-0 mt-1" @click="remove(dbPage.id)">削除</b-button>
                </div>

                <div class="col-1 m-0 p-1 border-left border-secondary" style="background-color: gainsboro">
                  <p class="m-0 p-0">{{ dbPage.page.sort }}</p>
                </div>

                <!-- Q -->
                <div class="col-5 m-0 p-0 px-1 text-wrap border-left border-secondary" style="background-color: gainsboro">
                  <p class="m-0 p-0 text-break overflow-auto" style="overflow-wrap: break-word; max-height: 60px">{{ dbPage.page.q }}</p>
                </div>

                <!-- A -->
                <div class="col-5 m-0 p-0 px-1 text-wrap border-left border-secondary" style="background-color: gainsboro">
                  <p class="m-0 p-0 text-break overflow-auto" style="overflow-wrap: break-word; max-height: 60px">{{ dbPage.page.a }}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- ## 現在の登録状況 ＆ 削除 end -->

          <!-- &&&&&&&&&&&&&&&&&&& 編集 start -->
          <div v-show="showEdit" class="col-12 m-0 p-0">
            <div class="m-0 p-0 mt-2" style="background-color: linen">
              <!-- <h4 class="mx-2 mt-0 p-0 pt-1 float-left">編集</h4> -->
              <div class="d-flex flex-low">
                <h4 class="mx-2 my-0 p-0 pt-1">編集</h4>
                <b-button :size="myCommon.selectedBtnSize" variant="dark" class="m-1 px-1 py-0" @click="editCancel()">編集取消</b-button>
              </div>
              <b-form @submit="onSubmitEdit" @reset="onReset">
                <!-- Sort -->
                <div class="row p-0 pt-2 m-0 mr-1">
                  <span class="col-2 m-0 mt-2 p-1 pt-0">Sort(必須):</span>
                  <b-form-input v-model="page.sort" type="number" class="col-10" required placeholder=""></b-form-input>
                </div>

                <!-- Q -->
                <div class="row p-0 pt-2 m-0 mr-1">
                  <span class="col-2 m-0 mt-2 p-1 pt-3">Q(必須):</span>
                  <b-form-textarea v-model="page.q" class="col-10" required placeholder="" rows="3" max-rows="6"></b-form-textarea>
                </div>

                <!-- A -->
                <div class="row p-0 pt-2 m-0 mr-1">
                  <span class="col-2 m-0 mt-2 p-1 pt-3">A(必須):</span>
                  <b-form-textarea v-model="page.a" class="col-10" required placeholder="" rows="3" max-rows="6"></b-form-textarea>
                </div>

                <b-button :size="myCommon.selectedBtnSize" type="submit" variant="primary" class="m-1 ml-2 px-1 py-0">登録</b-button>
                <!-- <b-button :size="myCommon.selectedBtnSize" variant="dark" class="m-1 px-1 py-0" @click="dataReset()">データクリアー</b-button> -->
              </b-form>

              <hr />
            </div>
          </div>
          <!-- 編集 End -->

          <!-- &&&&&&&&&&&&&&&&&&& 新規登録 start -->
          <div v-show="showReg" class="col-12 m-0 p-0">
            <div class="m-0 p-0 mt-2" style="background-color: lightblue">
              <h4 class="mx-2 mb-0 p-0 pt-1">新規登録</h4>

              <b-form @submit="onSubmit" @reset="onReset">
                <!-- Sort -->
                <div class="row p-0 pt-2 m-0 mr-1">
                  <span class="col-2 m-0 mt-2 p-1 pt-0">Sort(必須):</span>
                  <b-form-input v-model="page.sort" type="number" class="col-10" required placeholder="若番順に表示します。連番でなくてもOKです。"></b-form-input>
                </div>

                <!-- Q -->
                <div class="row p-0 pt-2 m-0 mr-1">
                  <span class="col-2 m-0 mt-2 p-1 pt-3">Q(必須):</span>
                  <b-form-textarea v-model="page.q" class="col-10" required placeholder="質問内容を入力してください。" rows="3" max-rows="6"></b-form-textarea>
                </div>

                <!-- A -->
                <div class="row p-0 pt-2 m-0 mr-1">
                  <span class="col-2 m-0 mt-2 p-1 pt-3">A(必須):</span>
                  <b-form-textarea v-model="page.a" class="col-10" required placeholder="回答欄です" rows="3" max-rows="6"></b-form-textarea>
                </div>

                <b-button :size="myCommon.selectedBtnSize" type="submit" variant="primary" class="m-1 mt-2 px-1 py-0">登録</b-button>
                <b-button :size="myCommon.selectedBtnSize" type="reset" variant="dark" class="m-0 mt-2 px-1 py-0">データクリア</b-button>
              </b-form>

              <hr />
            </div>
          </div>
          <!-- &&&&&&&&&&&&&&&&&&& 現在の・・、編集、新規登録 End -->
        </div>
        <!-- </div> -->
        <!-- ¥¥¥¥¥¥¥¥¥ tab end ¥¥¥¥ -->
      </div>
    </div>
    <!-- <p>{{ CategoryDataSet() }}</p> -->
    <!-- <b-button :size="myCommon.selectedBtnSize" class="m-1 ml-2 px-1 py-0 d-flex" @click="test1()">テスト１</b-button> -->
    <!-- <br /> -->
  </div>
</template>

<script>
// import firebase from '~/plugins/firebase'
// const storage = firebase.storage()
// const storageRef = storage.ref()
// const imagesRef = storageRef.child('page/QA')

export default {
  data() {
    return {
      showTab: false,
      showQA: false,
      // showTab1: false,
      // showTab2: false,
      // showTab3: false,

      // 最初のTab機能 と 管理機能のカテゴリー選択ボタン で共用利用
      tabSelected: 0,

      // 管理機能のカテゴリー選択 ボタンで利用
      tabIndex: 0,
      tabData: [],

      // 上記 tabDataへpushするための一時的な保管データ
      addData: [
        { text: 'Dummy0', value: 0, tabIndex: 0 },
        { text: 'Dummy1', value: 1, tabIndex: 1 },
        { text: 'Dummy2', value: 2, tabIndex: 2 },
        { text: 'Dummy3', value: 3, tabIndex: 3 },
        { text: 'Dummy4', value: 4, tabIndex: 4 },
        { text: 'Dummy5', value: 5, tabIndex: 5 },
        { text: 'Dummy6', value: 6, tabIndex: 6 },
        { text: 'Dummy7', value: 7, tabIndex: 7 },
        { text: 'Dummy8', value: 8, tabIndex: 8 },
        { text: 'Dummy9', value: 9, tabIndex: 9 },
      ],

      // tempDbTab: '',

      // 上記のtabData[]に push するデータの定義
      pushData: {
        text: '',
        value: 0,
      },

      editTab: {
        sortNo: '',
        tabFlg: true,
        tabName: '',
      },
      // tabSelected: '',
      // tabData: [
      //   { text: 'Tab 1', value: 'tab1' },
      //   { text: 'Tab 2', value: 'tab2' },
      //   { text: 'Tab 3', value: 'tab3' }
      // ],

      editId: '',
      editCategory: {
        tab1Flg: '',
        tab2Flg: '',
        tab3Flg: '',
      },
      // tempCategory: {
      // tab1Flg: '',
      // tab2Flg: '',
      // tab3Flg: ''
      // },
      myMenu: {},
      myCommon: {},
      showEdit: false,
      showEditTab: false,
      showReg: true,
      showRegTab: true,
      page: {
        sort: '',
        q: '',
        a: '',
      },
    }
  },
  // QADB DB からのデータ取得
  // computedは、値が変わるとその値に依存しているすべてのバインディングが更新される
  computed: {
    isLogin() {
      return this.$store.getters['user/isLogin']
    },

    dbTabsAll() {
      const getTabsDataAll = this.$store.getters['qaTab/getTabsAll']
      // console.log('1 ===== getTabsDataAll: ', getTabsDataAll)
      return getTabsDataAll
    },
    dbTabs() {
      const getTabsData = this.$store.getters['qaTab/getTabs']

      getTabsData.forEach((item, index) => {
        if (!item.tabs.tabFlg) {
          getTabsData.splice(index, 1)
        }
      })

      return getTabsData
    },
    dbTabsSortTabIndex() {
      const tempTab = this.$store.getters['qaTab/getTabsSortTabIndex']
      return tempTab
    },
    dbPages() {
      if (this.tabSelected < 0) {
        return ''
      } else {
        const tempIndex = this.setTabIndex()
        // console.log('temuIndex: ', tempIndex)

        if (tempIndex !== '') {
          // this.tabIndex = tempIndex

          // return this.$store.state.QADB.dbPages
          // return this.$store.getters['QADB/orderdDbPages']
          // return this.$store.getters['QADB/getMyPageByTabIndex'](this.tabSelected)
          const tempPages = this.$store.getters['QADB/getMyPageByTabIndex'](this.tabIndex)
          // const tempPages = this.$store.getters['QADB/getMyPageByTabIndex'](1)
          // const tempPages = this.$store.getters['QADB/getMyPageByTabIndex'](this.tabSelected)
          // console.log('1 ------ tabIndex: ', this.tabSelected)
          // console.log('2 ------ tabIndex: ', this.addData[this.tabSelected])
          // console.log('========== tabIndex: ', this.addData[this.tabSelected].tabIndex)
          // const tempPages = this.$store.getters['QADB/getMyPageByTabIndex'](this.addData[this.tabSelected].tabIndex)

          // console.log('1 ---- tempPages: ', tempPages)

          return tempPages.slice().sort((a, b) => {
            if (a.page.sort > b.page.sort) {
              return 1
            }
            if (a.page.sort < b.page.sort) {
              return -1
            }
            return 0
          })
        } else {
          return ''
        }
      }
    },
    dbCategorys() {
      return this.$store.getters['QADB/getCategorys']('category1')
      // const myTestCategorys = this.$store.getters['QADB/getCategorys']('category1')
      // console.log('myTestCategorys: ', myTestCategorys)
      // return myTestCategorys
    },
    // dbCategoryById() {
    //   return this.$store.getters['QADB/getCategoryById']('category1')
    // },
    dbHeaders() {
      // return this.$store.getters['storeheader/orderdDbHeaders']
      return this.$store.getters['storeheader/getDbHeadersById']('menu')
    },
  },
  // created は画面を開いたとき呼ばれる。
  created() {
    // 下記の qaTab は store/qaTab.js のファイル名
    this.$store.dispatch('qaTab/init')

    // 下記の QADB は store/QADB.js のファイル名
    this.$store.dispatch('QADB/init')

    // 下記の storeheader は store/storeheader.js のファイル名
    this.$store.dispatch('storeheader/init')
  },
  // elementへのマウントが行われた後処理される。
  // SSR(Firebase等)では使えない。
  mounted() {
    this.$nuxt.$on('mycommon', (myCommon) => {
      this.myCommon = myCommon
    })

    this.$nuxt.$on('mymenu', (myMenu) => {
      this.myMenu = myMenu
    })
  },

  // ④ updated 画面が更新された後、呼び出される。
  // SSR(Firebase等)では使えない。
  updated() {
    this.selnum(61)
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
    //   console.log('------- tabSelected in changeTabIndex(): ' + this.tabSelected)
    //   // this.$router.go()
    // },
    addTab() {
      // 数値の桁数を２桁に揃える
      // const tempNum = ('00' + (this.dbTabs.length + 1)).slice(-2)

      this.editTab.sortNo = Number(this.editTab.sortNo)

      this.tabIndex = 0

      for (const tempTab of this.dbTabsSortTabIndex) {
        // console.log(this.tabIndex, ' : ', tempTab.tabIndex)

        if (this.tabIndex !== tempTab.tabIndex) {
          break
        }
        ++this.tabIndex
      }

      // this.dbTabs.forEach(function(elem, index) {
      // this.dbTabs.forEach((tempTab, index) => {
      //   console.log(index + ': ' + tempTab)
      // })

      // console.log('tabIndex: ', this.tabIndex)

      this.$store.dispatch('qaTab/add', { tabIndex: this.tabIndex, tabs: this.editTab })
      // this.$store.dispatch('qaTab/add', this.editTab)
      this.editCancelTab()
    },
    updateTab() {
      this.editTab.sortNo = Number(this.editTab.sortNo)

      // 下記の parkingDB は store/parkingDB.js のファイル名
      // this.$store.dispatch('qaTab/update', { id: this.editId, sortNo: this.sortNo, tabFlg: this.tabFlg, tabItem: this.editTab })
      this.$store.dispatch('qaTab/update', { id: this.editId, tabs: this.editTab })
    },
    editDbTab(id) {
      this.showEditTab = true
      this.showRegTab = false
      const myTab = this.$store.getters['qaTab/getTabById'](id)
      this.editTab.sortNo = myTab.tabs.sortNo
      this.editTab.tabFlg = myTab.tabs.tabFlg
      this.editTab.tabName = myTab.tabs.tabName
      this.editId = id
    },
    add() {
      // 下記の QADB は store/QADB.js のファイル名
      // console.log('tabSelected: ' + this.tabSelected)
      this.page.sort = Number(this.page.sort)

      this.tabIndex = this.dbTabs[this.tabSelected].tabIndex
      // console.log('tabIndex: ', this.tabIndex)

      this.$store.dispatch('QADB/add', { tabIndex: this.tabIndex, page: this.page })
      this.page.sort = ''
      this.page.q = ''
      this.page.a = ''
    },
    update() {
      this.page.sort = Number(this.page.sort)

      // 下記の QADB は store/QADB.js のファイル名
      this.$store.dispatch('QADB/update', { id: this.editId, page: this.page })
    },
    edit(id) {
      this.showEdit = true
      this.showReg = false
      const myPage = this.$store.getters['QADB/getMyPageById'](id)
      this.page.q = myPage.page.q
      this.page.a = myPage.page.a
      this.page.sort = myPage.page.sort
      this.editId = id
    },
    // editCategory() {
    // },
    // タブを選択した時の色等の変更
    linkClass(idx) {
      if (this.tabSelected === idx) {
        return ['bg-primary', 'text-light']
      } else {
        return ['bg-light', 'text-info']
      }
    },
    setTabIndex() {
      if (this.tabSelected < 0) {
        // console.log('0 ========== tabSelected: ', this.tabSelected)
        return ''
      } else {
        // console.log('1 ========== tabSelected: ', this.tabSelected)
        // this.tabIndex = this.dbTabs[this.tabSelected].tabIndex
        // this.tabIndex = 0
        const tempIndex = this.dbTabs
        if (tempIndex.length > 0) {
          // console.log('2 ========== tempIndex: ', tempIndex)
          // console.log('3 ========== tempIndex[]: ', tempIndex[this.tabSelected])

          try {
            this.tabIndex = tempIndex[this.tabSelected].tabIndex
            return this.tabIndex
          } catch (error) {
            // alert('エラー in setTabIndex(): ' + error)
            // console.log('エラー in setTabIndex(): ' + error)
            return ''
          }
        } else {
          return ''
        }
      }
    },
    toggleCheck() {
      this.editTab.tabFlg = !this.editTab.tabFlg
    },
    onCategory() {
      this.showTab = true
      this.showQA = false
      // const tempCategory = this.$store.getters['QADB/getCategoryById']('category1')
      // const getTabsData = this.$store.getters['qaTab/getTabs']
      // this.editCategory.tab1Flg = tempCategory.category.tab1Flg
      // this.editCategory.tab2Flg = tempCategory.category.tab2Flg
      // this.editCategory.tab3Flg = tempCategory.category.tab3Flg
      // this.editCategory.tab1Name = tempCategory.category.tab1Name
      // this.editCategory.tab2Name = tempCategory.category.tab2Name
      // this.editCategory.tab3Name = tempCategory.category.tab3Name
      // console.log('this.editCategory: ', this.editCategory)
      // console.log('tab1Name of this.editCategory: ', this.editCategory.tab1Name)
    },
    // updateCategory() {
    //   // 下記の QADB は store/QADB.js のファイル名
    //   this.$store.dispatch('QADB/updateCategory', { id: 'category1', category: this.editCategory })
    //   this.toastFileUpdate('登録', '更新しました。')
    // },

    onQA() {
      this.showTab = false
      this.showQA = true
      this.setTabData()
    },
    // setTabData() {
    //   this.tabData = []
    //   // const tempDbTab = this.dbTabs
    //   // tempDbTab.forEach(function(qaTab, index) { ← forEach{}内ではthis.tabData[]が利用不可
    //   // tempTabData.then(this.successCallback, this.failureCallback)
    //   // const tempTabData = this.$store.dispatch('qaTab/getMyTabs')
    //   this.$store
    //     .dispatch('qaTab/getMyTabs')
    //     // tempTabData
    //     // this.$store.dispatch('qaTab/getMyTabs')
    //     .then((result) => {
    //       console.log('tempTabData: ', result)
    //     })
    //     .catch((error) => {
    //       console.log('error: ', error)
    //     })

    //   // console.log('tempTabData: ', tempTabData)

    //   // tempTabData.forEach(function(doc) {
    //   //   console.log('doc.id: ', doc.id)
    //   // })

    //   // let myNum = 0
    //   // for (const qaTab of tempDbTab) {
    //   //   // console.log(myNum + ': ' + qaTab.tabs.tabName)
    //   //   this.pushData.text = qaTab.tabs.tabName
    //   //   this.pushData.value = myNum
    //   //   // this.tabData[myNum].text = qaTab.tabs.tabName
    //   //   this.tabData.push(this.pushData)
    //   //   ++myNum
    //   // }
    // },
    // successCallback() {
    //   console.log('成功')
    // },
    // failureCallback() {
    //   console.log('エラー')
    // },
    setTabData() {
      this.tabData = []
      const tempDbTab = this.dbTabs
      // this.tempDbTab = this.getSetdata
      // console.log('tempDbTab: ', tempDbTab)

      // ------- start ----------
      let myNum = 0
      for (const qaTab of tempDbTab) {
        // console.log(myNum + ': ' + qaTab.tabs.tabName)
        this.addData[myNum].text = qaTab.tabs.tabName
        this.addData[myNum].value = myNum
        // console.log(myNum + ': ', this.addData)
        ++myNum
      }

      for (let i = 0; i < myNum; ++i) {
        this.tabData.push(this.addData[i])
      }
      // console.log('tabData: ', this.tabData)
      // -------- end ---------

      // ------- start ----------
      // let myNum = 0
      // for (const qaTab of tempDbTab) {
      //   console.log(myNum + ': ' + qaTab.tabs.tabName)
      //   this.pushData.text = qaTab.tabs.tabName
      //   this.pushData.value = myNum
      //   this.tabData.push(this.pushData)
      //   ++myNum
      // }
      // console.log('tabData: ', this.tabData)
      // -------- end ---------
    },
    // async getSetdata() {
    // async setTabData() {
    //   const snapshot = await firebase
    //     .firestore()
    //     .collection('qaTab')
    //     .get()
    //   // return snapshot.docs.map((doc) => doc.data())
    //   const tempData = snapshot.docs.map((doc) => doc.data())
    //   // console.log('tempData: ', tempData)
    //   // -----------------
    //   let myNum = 0
    //   for (const qaTab of tempData) {
    //     console.log(myNum + ': ' + qaTab.tabs.tabName)
    //     this.pushData.text = qaTab.tabs.tabName
    //     this.pushData.value = myNum
    //     this.tabData.push(this.pushData)
    //     ++myNum
    //   }
    //   console.log('tabData: ', this.tabData)
    //   // -----------------
    // },
    onSubmitTabEdit(evt) {
      // alert(JSON.stringify(this.tabItem))
      evt.preventDefault()
      this.updateTab()
      this.toastFileUpdate('編集', '登録しました。')
      // 以下はinputの入力をリセット
      this.showEdit = false
      this.showReg = true
      // this.selected = '選択されていません。'
      this.editCancelTab()
    },
    onSubmitTab(evt) {
      // Tab登録数の制限
      const tabNum = this.dbTabs.length

      // 以下の preventDefault() で 人の介在(inputやButtonクリック等)があるところで動きを止める。
      evt.preventDefault()

      if (tabNum < 10) {
        // 以下が登録機能
        this.addTab()
        this.toastFileUpdate('登録', '登録しました。')
        // this.editCancelTab()
        this.editTab.tabFlg = true
        this.editTab.tabName = ''
        this.editTab.sortNo = ''
      } else {
        this.$swal({
          title: '登録数オーバー',
          text: 'カテゴリーは10個以上登録できません。',
          // icon: 'warning',
          icon: 'error',
          // showCancelButton: true,
          confirmButtonText: '登録キャンセル',
          // cancelButtonText: '登録キャンセル',
          // input: 'button',
          // type: 'success',
          // focusCancel: true
        }).then((result) => {
          // 以下が登録機能
          // evt.preventDefault()
          // this.add()
          this.toastFileUpdate('未登録', 'キャンセルしました。')
          // this.editCancelTab()
        })
      }
    },
    onResetTab(evt) {
      evt.preventDefault()
      this.editCancelTab()
      // this.editTab.tabFlg = true
      // this.editTab.tabName = ''
    },
    editCancelTab() {
      this.editTab.tabFlg = true
      this.editTab.tabName = ''
      this.editTab.sortNo = ''
      this.showEditTab = false
      this.showRegTab = true
    },
    removeTab(id) {
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
          this.$store.dispatch('qaTab/remove', id)
        }
      })
    },
    editCancel() {
      this.page.q = ''
      this.page.a = ''
      this.page.sort = ''
      this.showEdit = false
      this.showReg = true
    },
    dataReset() {
      const myPage = this.$store.getters['QADB/getMyPageById'](this.editId)
      this.page.q = myPage.page.q
      this.page.a = myPage.page.a
      this.page.sort = myPage.page.sort
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
          this.$store.dispatch('QADB/remove', id)
        }
      })
    },
    onSubmitEdit(evt) {
      // alert(JSON.stringify(this.page))
      evt.preventDefault()
      this.update()
      this.toastFileUpdate('編集', '登録しました。')
      // 以下はinputの入力をリセット
      this.page.q = ''
      this.page.a = ''
      this.page.sort = ''
      this.showEdit = false
      this.showReg = true
      // this.selected = '選択されていません。'
    },
    onSubmit(evt) {
      // alert(JSON.stringify(this.page))
      evt.preventDefault()
      this.add()
      this.toastFileUpdate('登録', '登録しました。')
      // 以下はinputの入力をリセット
      // this.$refs.input.value = ''
      this.page.q = ''
      this.page.a = ''
      this.page.sort = ''
      // this.showImageFlg = false
      // this.show = false
      // this.$nextTick(() => {
      //   this.show = true
      // })
      // this.selected = '選択されていません。'
      // this.reserve = false
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our page values
      this.page.q = ''
      this.page.a = ''
      this.page.sort = ''
      // this.show = false
      // this.showImageFlg = false
      // this.$nextTick(() => {
      //   this.show = true
      // })
    },
    // toggleChk(num) {
    //   switch (num) {
    //     case 1:
    //       this.editCategory.tab1Flg = !this.editCategory.tab1Flg
    //       break
    //     case 2:
    //       this.editCategory.tab2Flg = !this.editCategory.tab2Flg
    //       break
    //     case 3:
    //       this.editCategory.tab3Flg = !this.editCategory.tab3Flg
    //       break
    //     default:
    //       // console.log('---- error --- num in toggleChk(): ' + num)
    //       break
    //   }
    //   // console.log('------- chkNemu1 in toggleChk(): ' + this.editCategory.tab1Flg)
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
} */
/* li > span > span.done {
  text-decoration: line-through;
} */
/* .no-gutters {
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
