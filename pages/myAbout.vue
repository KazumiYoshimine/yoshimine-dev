<template>
  <div class="container-fluid">
    <div v-for="dbHeader in dbHeaders" :key="dbHeader.id" class="m-0 p-0">
      <h5 class="text-light text-center m-0 p-1" :style="commonData.buttonColorBasicSet">{{ dbHeader.myData.m63 }}</h5>
    </div>

    <div v-for="dbCategory in dbCategorys" :key="dbCategory.id" class="m-0 my-1 p-0">
      <b-card no-body>
        <b-tabs v-model="tabIndex" card style="background-color: whitesmoke">
          <!-- #################### Tab 1 ################## -->
          <!-- <div v-show="editCategory.tab1Flg"> -->
          <!-- <div v-if="editCategory.tab1Flg"> -->
          <b-tab :title="dbCategory.category.tab1Name" :title-link-class="linkClass(0)" class="m-2 p-0" style="background-color: white">
            <!-- トップ画像の表示 -->
            <b-img :src="dbCategory.category.tab1Url" class="m-0" alt="file" fluid> </b-img>

            <!-- メッセージの表示 -->
            <div v-for="dbPage in dbPagesTab1" :key="dbPage.id" class="m-0 p-3">
              <span v-if="dbPage.tab1.styleSelected === 'body'" class="m-0 p-1 text-break overflow-auto" style="white-space: pre-wrap">{{ dbPage.tab1.content }} </span>
              <span v-else-if="dbPage.tab1.styleSelected === 'bold'" class="m-0 p-1 font-weight-bold text-break overflow-auto" style="white-space: pre-wrap">
                <u>{{ dbPage.tab1.content }}</u>
              </span>
              <!-- <h3 v-else-if="dbPage.tab1.styleSelected === 'title'" class="m-0 p-1 text-break overflow-auto text-center"> -->
              <div v-else-if="dbPage.tab1.styleSelected === 'title'" class="myAboutTitle m-0 p-1 text-break overflow-auto text-center">
                <u>{{ dbPage.tab1.content }}</u>
              </div>
              <!-- <h4 v-else-if="dbPage.tab1.styleSelected === 'subTitle'" class="m-0 p-1 text-break overflow-auto text-center">{{ dbPage.tab1.content }}</h4> -->
              <div v-else-if="dbPage.tab1.styleSelected === 'subTitle'" class="myAboutTitle m-0 p-1 text-break overflow-auto text-center">{{ dbPage.tab1.content }}</div>
              <p v-else class="m-0 p-1 text-right text-break overflow-auto" style="white-space: pre-wrap">{{ dbPage.tab1.content }}</p>
            </div>
          </b-tab>
          <!-- </div> -->
          <!-- <div v-else>
            <p>未使用</p>
          </div> -->

          <!-- #################### Tab 2 ################## -->
          <b-tab :title="dbCategory.category.tab2Name" :title-link-class="linkClass(1)" class="m-2 p-0">
            <!-- <div class="row m-0 p-0"> -->
            <!-- Q -->
            <!-- <div class="col-6 m-0 p-0 text-wrap text-center border" style="background-color:lightblue;">
                <p class="m-0 p-1 text-break overflow-auto" style="overflow-wrap: break-word;">Question</p>
              </div> -->

            <!-- A -->
            <!-- <div class="col-6 m-0 p-0 text-wrap text-center border" style="background-color:lightblue;">
                <p class="m-0 p-1 text-break overflow-auto" style="overflow-wrap: break-word;">Answer</p>
              </div> -->
            <!-- </div> -->

            <div v-for="dbPage in dbPagesTab2" :key="dbPage.id" class="my-3 p-0">
              <!-- <div v-b-modal="'tab2-' + index"> -->
              <!-- <div class="row m-0 p-0"> -->
              <!-- タイトル -->
              <!-- <div class="col-6 m-0 p-0 text-wrap border" style="background-color:white;">
                  <p class="m-0 p-1 text-break overflow-auto" style="overflow-wrap: break-word; max-height:115px;">{{ dbPage.tab1.title }}</p>
                </div> -->

              <!-- 内容 -->
              <!-- <div class="col-6 m-0 p-0 text-wrap border" style="background-color:white;">
                  <p class="m-0 p-1 text-break overflow-auto" style="overflow-wrap: break-word; max-height:115px;">{{ dbPage.tab1.content }}</p>
                </div> -->
              <!-- </div> -->

              <div class="row m-0 mt-2 p-0 border">
                <!-- 画像 -->
                <!-- <div v-b-modal="'data-' + index" class="m-0 p-0 border col-md-4 col-sm-5"> -->
                <div class="m-0 p-0 col-md-3 col-sm-4">
                  <b-img :src="dbPage.tab2.imageUrl" class="m-0" alt="file" fluid> </b-img>
                  <!-- <b-button :size="commonData.selectedBtnSize" class="px-1 py-0 m-1 ml-2 mb-1 float-center text-body" style="background-color:honeydew;">拡大表示</b-button> -->
                </div>

                <!-- 役職・氏名 -->
                <div class="m-0 p-0 col-md-3 col-sm-3 p-0 text-wrap border-left" style="background-color: white">
                  <p class="m-0 p-2 text-break overflow-auto" style="overflow-wrap: break-word; max-height: 230px">{{ dbPage.tab2.positionName }}</p>
                </div>

                <!-- コメント -->
                <div class="m-0 p-0 col-md-6 col-sm-5 p-0 text-wrap border-left" style="background-color: white">
                  <p class="m-0 p-2 text-break overflow-auto" style="white-space: pre-wrap; max-height: 230px">{{ dbPage.tab2.comment }}</p>
                </div>
              </div>
            </div>

            <!-- </div> -->
          </b-tab>

          <!-- #################### Tab 3 ################## -->
          <b-tab :title="dbCategory.category.tab3Name" :title-link-class="linkClass(2)" class="m-3 p-0 border" style="background-color: white">
            <div class="row m-0 p-0 text-white" style="background-color: dimgray">
              <!-- 年・月 -->
              <!-- <div class="col-4 m-0 p-0 text-wrap text-center border" style="background-color:dimgray;"> -->
              <div class="col-4 m-0 p-0 text-wrap text-center border">
                <p class="m-0 p-1 text-break overflow-auto" style="overflow-wrap: break-word">年月</p>
              </div>

              <!-- あゆみ -->
              <!-- <div class="col-8 m-0 p-0 text-wrap text-center border" style="background-color:lightblue;"> -->
              <div class="col-8 m-0 p-0 text-wrap text-center border">
                <p class="m-0 p-1 text-break overflow-auto" style="overflow-wrap: break-word">あゆみ</p>
              </div>
            </div>

            <!-- <div v-for="(dbPage, index) in dbPagesTab3" :key="dbPage.id" class="mt-1 p-0"> -->
            <div v-for="dbPage in dbPagesTab3" :key="dbPage.id" class="mt-1 p-0">
              <!-- <div v-b-modal="'tab3-' + index"> -->
              <div class="row m-0 p-0 border" style="background-color: white">
                <!-- 年・月 -->
                <div class="col-4 m-0 p-0 align-self-center text-wrap">
                  <p class="m-0 p-1 text-break overflow-auto">{{ dbPage.tab3.nenGetsu }}</p>
                </div>

                <!-- あゆみ -->
                <div class="col-8 m-0 p-0 text-wrap border-left" style="background-color: white">
                  <p class="m-0 p-1 text-break overflow-auto" style="overflow-wrap: break-word; max-height: 130px">{{ dbPage.tab3.content }}</p>
                </div>
              </div>
              <!-- </div> -->
            </div>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>

    <div v-show="isLogin" class="m-0 p-0">
      <!-- ============================== 管理機能 ============================== -->
      <div class="row d-flex flex-row m-0 mt-2 p-2 bg-dark">
        <h5 class="mx-2 m-0 p-0 py-1 text-white">以下は管理機能です。</h5>
        <b-button :size="commonData.selectedBtnSize" style="background-color: midnightblue" class="m-0 ml-2 px-1 py-0" @click="onAbout()">② 各カテゴリーの内容登録</b-button>
        <b-button :size="commonData.selectedBtnSize" style="background-color: midnightblue" class="m-0 ml-2 px-1 py-0" @click="onCategory()">① カテゴリー登録</b-button>
      </div>

      <!-- ------------------------------ カテゴリー設定 ---------------------------------- -->
      <div v-show="showCategory" class="m-0 mt-2 p-0">
        <!-- aaa -->
        <div class="m-0 mt-2 p-2 bg-dark">
          <!-- 現在の登録状況 ＆ 削除 start -->
          <div class="row col-12 m-0 my-2 p-0" style="background-color: lightsteelblue">
            <!-- <h5 class="mx-2 mb-0 p-0 pt-1">【カテゴリー設定】表示/非表示 ＆ カテゴリー名の変更</h5> -->
            <h5 class="mx-2 mb-0 p-0 pt-1">【カテゴリー登録】カテゴリー名の変更</h5>
          </div>

          <!-- ==================------------- 現在の状況 start ----------------=============== -->

          <!--      管理機能:カテゴリー tab 1 start       -->
          <div v-if="editCategory.tab1Flg" class="m-0 p-0">
            <b-input-group class="mb-2">
              <b-input-group-prepend is-text>
                <!-- 以下の行は消すな！ -->
                <!-- <input type="checkbox" :checked="editCategory.tab1Flg" @change="toggleChk(1)" /> -->
              </b-input-group-prepend>
              <b-form-input v-model="editCategory.tab1Name"></b-form-input>
            </b-input-group>
          </div>

          <del v-else>
            <b-input-group class="mb-2">
              <b-input-group-prepend is-text>
                <input type="checkbox" :checked="editCategory.tab1Flg" @change="toggleChk(1)" />
              </b-input-group-prepend>
              <b-form-input v-model="editCategory.tab1Name"></b-form-input>
            </b-input-group>
          </del>

          <!--      管理機能:カテゴリー tab 2 start       -->
          <div v-if="editCategory.tab2Flg" class="m-0 p-0">
            <b-input-group class="mb-2">
              <b-input-group-prepend is-text>
                <!-- 以下の行は消すな！ -->
                <!-- <input type="checkbox" :checked="editCategory.tab2Flg" @change="toggleChk(2)" /> -->
              </b-input-group-prepend>
              <b-form-input v-model="editCategory.tab2Name"></b-form-input>
            </b-input-group>
          </div>

          <del v-else>
            <b-input-group class="mb-2">
              <b-input-group-prepend is-text>
                <input type="checkbox" :checked="editCategory.tab2Flg" @change="toggleChk(2)" />
              </b-input-group-prepend>
              <b-form-input v-model="editCategory.tab2Name"></b-form-input>
            </b-input-group>
          </del>

          <!--      管理機能:カテゴリー tab 3 start       -->
          <div v-if="editCategory.tab3Flg" class="m-0 p-0">
            <b-input-group class="mb-2">
              <b-input-group-prepend is-text>
                <!-- 以下の行は消すな！ -->
                <!-- <input type="checkbox" :checked="editCategory.tab3Flg" @change="toggleChk(3)" /> -->
              </b-input-group-prepend>
              <b-form-input v-model="editCategory.tab3Name"></b-form-input>
            </b-input-group>
          </div>

          <del v-else>
            <b-input-group class="mb-2">
              <b-input-group-prepend is-text>
                <input type="checkbox" :checked="editCategory.tab3Flg" @change="toggleChk(3)" />
              </b-input-group-prepend>
              <b-form-input v-model="editCategory.tab3Name"></b-form-input>
            </b-input-group>
          </del>

          <!--      管理機能:カテゴリー tab 1,2,3 end       -->

          <!-- <b-button :size="commonData.selectedBtnSize" type="submit" variant="primary" class="m-1 ml-2 px-1 py-0">登録</b-button> -->
          <b-button :size="commonData.selectedBtnSize" variant="info" class="m-1 px-1 py-0" @click="updateCategory()">登録</b-button>
        </div>
      </div>

      <!-- ------------------------------ カテゴリー内容登録 ---------------------------------->
      <div v-show="showAbout" class="m-0 mt-2 p-0">
        <!-- <b-form-group label="カテゴリーを選択してください。" @submit="changeTabIndex()"> -->
        <b-form-group label="カテゴリーを選択してください。">
          <b-form-radio-group v-model="tabIndex" :options="tabData" buttons button-variant="outline-info" name="radios-btn-outline"></b-form-radio-group>
        </b-form-group>

        <!-- ¥¥¥¥¥¥¥¥¥¥¥¥¥ 管理機能:カテゴリー内容 tab1 start ¥¥¥¥¥¥ -->
        <div v-show="tabIndex === 0" class="m-0 mt-2 p-0">
          <div class="row m-0 mt-2 p-2 bg-dark">
            <!-- 現在の登録状況 ＆ 削除 start -->
            <div class="col-12 m-0 my-2 p-0" style="background-color: lightsteelblue">
              <h5 class="mx-2 my-2 p-0 pt-1">【カテゴリー内容】現在の登録状況 ＆ 削除</h5>

              <hr />

              <!-- 画像添付 start-->
              <div class="mx-2 pb-2">
                <p class="mb-0">トップ画像を添付する場合は、「画像添付」ボタンをクリックしてください。</p>
                <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageList()">画像添付</button>
                <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageCancel()">キャンセル</button>
              </div>

              <!-- <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageList()">画像リスト表示</button> -->
              <div v-show="showImage">
                <div class="m-2">
                  下の画像から選択してください。: <strong>{{ selected }}</strong>
                </div>

                <div class="row no-gutters">
                  <b-form-group v-for="(myImage, index2) in myImages" :key="myImage.id" class="col-4">
                    <div class="image_box" @click="selImageTab1(myImage.url, index2)">
                      <b-img v-model="selected" :src="myImage.url" fluid class="m-0 p-1" alt="file"> </b-img>
                      <b-form-radio v-model="selected" :value="'No.' + ++index2" class="positionRadioBtn ml-4 p-0"> </b-form-radio>
                    </div>
                  </b-form-group>
                </div>

                <!-- 以下の float-cb について： 上記の float-left の解除ができないので、style で設定 -->
                <div class="float-cb p-2">以下の「画像新規登録・削除」から、新たに画像を追加したり、 不要な画像を削除することができます。</div>

                <!-- 消すな ここから3行 -->
                <!-- <p>{{ editCategory.tab1Url }}</p>
                  <p>{{ editCategory.tab1Name }}</p> -->
                <!-- 消すな ここまで -->

                <!-- <b-button :size="commonData.selectedBtnSize" style="background-color:midnightblue;" class="m-0 ml-2 px-1 py-0" @click="regImage()">画像登録</b-button> -->
                <b-button :size="commonData.selectedBtnSize" variant="info" class="m-1 px-1 py-0" @click="updateCategory()">登録</b-button>
                <br />
                <br />
              </div>
              <!-- 画像添付 end -->

              <div class="row text-center m-0 mx-1 p-0 border border-secondary" style="background-color: gainsboro">
                <div class="col-1 m-0 p-1" style="background-color: lightsteelblue">
                  <!-- <p class="m-0 p-0">Action</p> -->
                  <p class="m-0 p-0"></p>
                </div>

                <div class="col-3 text-center m-0 p-1 border-left border-secondary" style="background-color: lightsteelblue">
                  <p class="m-0 p-0">Sort/</p>
                  <p class="m-0 p-0">Style</p>
                </div>

                <!-- 表示内容 -->
                <div class="col-8 d-flex justify-content-center m-0 p-1 border-left border-secondary" style="background-color: lightsteelblue">
                  <div class="m-0 p-0 d-flex align-self-center">
                    <p class="m-0 p-0">表示内容</p>
                  </div>
                </div>

                <!-- A -->
                <!-- <div cl444Gass="col-5 text-center m-0 p-1 border-left border-secondary" style="background-color:lightsteelblue;">
                  <p clas444uvvs="m-0 p-0">Answer</p>
                </div> -->
              </div>

              <div v-for="dbPage in dbPagesTab1" :key="dbPage.id" class="m-0 my-1 p-0">
                <div class="row m-0 mx-1 p-0 border border-secondary" style="background-color: gainsboro">
                  <div class="col-1 m-0 p-1">
                    <b-button :size="commonData.selectedBtnSize" class="px-1 py-0 m-0 mt-1" variant="primary" @click="editTab1(dbPage.id)">編集</b-button>
                    <b-button :size="commonData.selectedBtnSize" class="px-1 py-0 m-0 mt-1" @click="removeTab1(dbPage.id)">削除</b-button>
                  </div>

                  <!-- Sort / Style -->
                  <div class="col-3 m-0 p-1 border-left border-secondary" style="background-color: gainsboro">
                    <p class="m-0 p-0">{{ dbPage.tab1.sort }}</p>
                    <b-form-select v-model="dbPage.tab1.styleSelected" :options="styleData"></b-form-select>
                    <!-- <b-form-select v-model="styleSelected" :options="styleData"></b-form-select> -->
                  </div>

                  <div class="col-8 m-0 p-0 px-1 text-wrap border-left border-secondary" style="background-color: gainsboro">
                    <!-- サブ タイトル -->
                    <!-- <h3 class="m-0 mt-1 p-0 text-center text-break overflow-auto" style="overflow-wrap: break-word;">
                      <b>
                        <u>{{ dbPage.tab1.title }}</u>
                      </b>
                    </h3> -->
                    <!-- 内容 -->
                    <!-- <p class="m-0 mt-3 p-0 text-break overflow-auto" style="overflow-wrap: break-word; max-height:100px;">{{ dbPage.tab1.content }}</p> -->
                    <!-- <p class="m-0 mt-3 p-0 text-break overflow-auto" style="max-height:100px;">{{ dbPage.tab1.content }}</p> -->
                    <span v-if="dbPage.tab1.styleSelected === 'body'" class="m-0 p-1 text-break overflow-auto" style="white-space: pre-wrap">{{ dbPage.tab1.content }} </span>
                    <!-- <span v-else-if="dbPage.tab1.styleSelected === 'bold'" class="m-0 p-1 font-weight-bold text-break overflow-auto" style="white-space: pre-wrap;">{{ dbPage.tab1.content }}</span> -->
                    <!-- <h3 v-else-if="dbPage.tab1.styleSelected === 'title'" class="m-0 p-1 text-break overflow-auto">{{ dbPage.tab1.content }}</h3> -->
                    <span v-else-if="dbPage.tab1.styleSelected === 'bold'" class="m-0 p-1 font-weight-bold text-break overflow-auto" style="white-space: pre-wrap">
                      <u>{{ dbPage.tab1.content }}</u>
                    </span>
                    <h3 v-else-if="dbPage.tab1.styleSelected === 'title'" class="m-0 p-1 text-break overflow-auto text-center">
                      <u>{{ dbPage.tab1.content }}</u>
                    </h3>
                    <h4 v-else-if="dbPage.tab1.styleSelected === 'subTitle'" class="m-0 p-1 text-break overflow-auto text-center">{{ dbPage.tab1.content }}</h4>
                    <p v-else class="m-0 p-1 text-right text-break overflow-auto" style="white-space: pre-wrap">{{ dbPage.tab1.content }}</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- 現在の登録状況 ＆ 削除 end -->

            <!-- 編集 start -->
            <div v-show="showEdit" class="col-12 m-0 p-0">
              <div class="m-0 p-0 mt-2" style="background-color: linen">
                <div class="d-flex flex-low">
                  <h4 class="mx-2 my-0 p-0 pt-1">編集</h4>

                  <b-button :size="commonData.selectedBtnSize" variant="dark" class="m-1 px-1 py-0" @click="editCancelTab1()">編集取消</b-button>
                </div>
                <!-- <b-form @submit="onSubmitEditTab1" @reset="onResetTab1"> -->
                <!-- Sort -->
                <div class="row p-0 pt-2 m-0 mr-1">
                  <span class="col-2 m-0 mt-2 p-1 pt-0">Sort:</span>
                  <b-form-input v-model="tab1.sort" type="number" class="col-10" required placeholder=""></b-form-input>
                </div>

                <!-- Style -->
                <div class="row p-0 pt-2 m-0 mr-1">
                  <span class="col-2 m-0 mt-2 p-1 pt-0">Style:</span>
                  <!-- <b-form-select v-model="dbPage.tab1.styleSelected" :options="styleData"></b-form-select> -->
                  <b-form-select v-model="tab1.styleSelected" :options="styleData" class="col-10 m-0 p-0"></b-form-select>
                </div>

                <!-- タイトル -->
                <!-- <div class="row p-0 pt-2 m-0 mr-1">
                  <span class="col-2 m-0 mt-2 p-1 pt-3">タイトル:</span>
                  <b-form-textarea v-model="tab1.title" class="col-10" required placeholder="" rows="3" max-rows="6"></b-form-textarea>
                </div> -->

                <!-- 内容 -->
                <div class="row p-0 pt-2 m-0 mr-1">
                  <span class="col-2 m-0 mt-2 p-1 pt-3">表示内容:</span>
                  <b-form-textarea v-model="tab1.content" class="col-10" required placeholder="" rows="3" max-rows="6"></b-form-textarea>
                </div>

                <!-- <b-button :size="commonData.selectedBtnSize" type="submit" variant="primary" class="m-1 ml-2 px-1 py-0">登録</b-button> -->
                <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-1 ml-2 px-1 py-0" @click="onSubmitEditTab1()">登録</b-button>
                <!-- </b-form> -->

                <hr />
              </div>
            </div>
            <!-- 編集 End -->

            <!-- 新規登録 start -->
            <div v-show="showReg" class="col-12 m-0 p-0">
              <div class="m-0 p-0 mt-2" style="background-color: lightblue">
                <h4 class="mx-2 mb-0 p-0 pt-1">新規登録</h4>

                <!-- <b-form @submit="onSubmitTab1" @reset="onResetTab1"> -->
                <!-- Sort -->
                <div class="row p-0 pt-2 m-0 mr-1">
                  <span class="col-2 m-0 mt-2 p-1 pt-0">Sort:</span>
                  <b-form-input v-model="tab1.sort" type="number" class="col-10" required placeholder="若番順に表示します。連番でなくてもOKです。"></b-form-input>
                </div>

                <!-- Style -->
                <div class="row p-0 pt-2 m-0 mr-1">
                  <span class="col-2 m-0 mt-2 p-1 pt-0">Style:</span>
                  <!-- <b-form-select v-model="dbPage.tab1.styleSelected" :options="styleData"></b-form-select> -->
                  <b-form-select v-model="tab1.styleSelected" :options="styleData" class="col-10 m-0 p-0 pl-2"></b-form-select>
                </div>

                <!-- サブ タイトル -->
                <!-- <div class="row p-0 pt-2 m-0 mr-1">
                  <span class="col-2 m-0 mt-1 p-1 pt-3">タイトル:</span>
                  <b-form-textarea v-model="tab1.title" class="col-10" required placeholder="タイトルを入力してください(未記入でもOKです）" rows="2" max-rows="3"></b-form-textarea>
                </div> -->

                <!-- 内容 -->
                <div class="row p-0 pt-2 m-0 mt-1 mr-1">
                  <span class="col-2 m-0 mt-2 p-1 pt-3">表示内容:</span>
                  <b-form-textarea v-model="tab1.content" class="col-10" required placeholder="内容を入力してください(未記入でもOKです)" rows="3" max-rows="6"></b-form-textarea>
                </div>

                <!-- <b-button :size="commonData.selectedBtnSize" type="submit" variant="primary" class="m-1 mt-2 px-1 py-0">登録</b-button>
                  <b-button :size="commonData.selectedBtnSize" type="reset" variant="dark" class="m-0 mt-2 px-1 py-0">データクリア</b-button> -->
                <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-1 mt-2 px-1 py-0" @click="onSubmitTab1()">登録</b-button>
                <b-button :size="commonData.selectedBtnSize" variant="dark" class="m-0 mt-2 px-1 py-0" @click="onResetTab1()">データクリア</b-button>
                <!-- </b-form> -->

                <hr />
              </div>
            </div>
            <!-- 新規登録 End -->
          </div>

          <!-- 画像新規登録・削除 start -->
          <div class="col-12 m-0 p-0">
            <div class="m-0 p-3 mt-3" style="background-color: midnightblue">
              <h4 class="text-white">画像新規登録・削除</h4>
              <!-- 画像登録 Start -->
              <!-- <div class="col-12 m-0 p-2 mt-3" style="background-color:skyblue;"> -->
              <div class="col-12 m-0 p-2 mt-3" style="background-color: honeydew">
                <h5>画像登録</h5>
                <!-- <input ref="input" type="file" accept=".jpg, .png, .pdf" @change="fileExtension($event)" /> -->
                <!-- <input ref="input" type="file" accept="*" @change="fileExtension($event)" /> -->
                <input ref="input" type="file" accept=".jpg, .png, .pdf" @change="resize($event)" />

                <!-- <input type="file" :multiple="false" accept="image/*" @change="resize($event)" /> -->
                <br />

                <div v-show="reserve">
                  <div>
                    <!-- サムネイル用canvas -->
                    <canvas ref="thumbnail" class="mt-1" :width="0" :height="0" />
                  </div>

                  <!-- アップロードボタン -->
                  <!-- <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 px-1 py-0" @click="upload()">Upload</b-button> -->
                  <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 px-1 py-0" @click="uploadImage()">Upload</b-button>
                  <b-button :size="commonData.selectedBtnSize" class="ml-2 m-0 px-1 py-0" my-0 @click="reset()">Cancel</b-button>
                  <!-- upload()の最後で、リスト表示 -->
                </div>
              </div>
              <!-- 画像登録 End -->

              <!-- 画像削除 Start -->
              <!-- <div class="col-12 m-0 p-2 mt-2"> -->
              <div class="col-12 m-0 p-2 mt-2" style="background-color: honeydew">
                <h5>画像削除</h5>
                <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 ml-2 px-1 py-0" @click="imageDelete()">画像リスト表示</b-button>
                <b-button :size="commonData.selectedBtnSize" class="m-0 ml-2 px-1 py-0" @click="imageDeleteCancel()">非表示</b-button>
              </div>
              <!-- </div> -->

              <!-- 画像リスト表示 -->
              <div v-show="showDel" class="m-0 p-0">
                <div class="col-12 m-0 p-0 mt-2" style="background-color: honeydew">
                  <div class="row no-gutters">
                    <!-- <div v-for="myImage in myImages" :key="myImage.id" class="m-0 p-1 col-4" style="background-color:lightslategray;"> -->
                    <div v-for="myImage in myImages" :key="myImage.id" class="m-0 p-1 col-4">
                      <!-- <div v-for="myImage in myImages" :key="myImage.id" class="p-1 col-4" style="background-color:lightslategray;"> -->
                      <div class="border m-0 p-0">
                        <b-img :src="myImage.url" fluid class="m-0" alt="file" />
                        <b-button :size="commonData.selectedBtnSize" class="m-1 ml-2 px-1 py-0 d-flex" @click="deleteImage(myImage.name, myImage.url)">削除</b-button>
                      </div>
                    </div>
                    <!-- <div class="float-cb col-12"></div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 画像新規登録・削除 end -->
        </div>
        <!-- ¥¥¥¥¥¥¥¥¥¥¥¥¥ 管理機能:カテゴリー内容 tab1 end ¥¥¥¥¥ -->

        <!-- ¥¥¥¥¥¥¥¥¥¥¥¥¥ 管理機能:カテゴリー内容 tab2 start ¥¥¥¥¥ -->
        <div v-show="tabIndex === 1" class="m-0 mt-2 p-0">
          <div class="row m-0 mt-2 p-2 bg-dark">
            <!-- 現在の登録状況 ＆ 削除 start -->
            <div class="col-12 m-0 my-2 p-0" style="background-color: lightsteelblue">
              <h5 class="mx-2 my-2 p-0 pt-1">【カテゴリー内容】現在の登録状況 ＆ 削除</h5>

              <!-- <div class="row text-center m-0 mx-1 p-0 border border-secondary" style="background-color:gainsboro;">
                <div class="col-1 m-0 p-1" style="background-color:lightsteelblue;">
                  <p class="m-0 p-0"></p>
                </div>

                <div class="col-1 text-center m-0 p-1 border-left border-secondary" style="background-color:lightsteelblue;">
                  <p class="m-0 p-0">Sort</p>
                </div>

                <div class="col-5 text-center m-0 p-1 border-left border-secondary" style="background-color:lightsteelblue;">
                  <p class="m-0 p-0">Question</p>
                </div>

                <div class="col-5 text-center m-0 p-1 border-left border-secondary" style="background-color:lightsteelblue;">
                  <p class="m-0 p-0">Answer</p>
                </div>
             </div> -->

              <div v-for="dbPage in dbPagesTab2" :key="dbPage.id" class="m-0 my-1 p-0">
                <div class="row m-0 mx-1 p-0 border border-secondary" style="background-color: gainsboro">
                  <div class="col-1 m-0 p-1">
                    <b-button :size="commonData.selectedBtnSize" class="px-1 py-0 m-0 mt-1" variant="primary" @click="editTab2(dbPage.id)">編集</b-button>
                    <b-button :size="commonData.selectedBtnSize" class="px-1 py-0 m-0 mt-1" @click="removeTab2(dbPage.id)">削除</b-button>
                  </div>

                  <!-- 古い記述 start -->
                  <!-- <div class="col-1 m-0 p-1 border-left border-secondary" style="background-color:gainsboro;">
                    <p class="m-0 p-0">{{ dbPage.tab1.sort }}</p>
                  </div> -->

                  <!-- タイトル -->
                  <!-- <div class="col-5 m-0 p-0 px-1 text-wrap border-left border-secondary" style="background-color:gainsboro;">
                    <p class="m-0 p-0 text-break overflow-auto" style="overflow-wrap: break-word; max-height:60px;">{{ dbPage.tab1.title }}</p>
                  </div> -->

                  <!-- 内容 -->
                  <!-- <div class="col-5 m-0 p-0 px-1 text-wrap border-left border-secondary" style="background-color:gainsboro;">
                    <p class="m-0 p-0 text-break overflow-auto" style="max-height:60px;">{{ dbPage.tab1.content }}</p>
                  </div> -->
                  <!-- 古い記述 end -->

                  <!-- 新しい記述 start -->
                  <!-- <div class="row m-0 p-0"> -->

                  <!-- sort -->
                  <div class="col-1 m-0 p-1 border-left border-secondary" style="background-color: gainsboro">
                    <p class="m-0 p-0">{{ dbPage.tab2.sort }}</p>
                  </div>

                  <!-- 画像 -->
                  <!-- <div v-b-modal="'data-' + index" class="m-0 p-0 border col-md-4 col-sm-5"> -->
                  <!-- <div class="m-0 p-0 border col-md-3 col-sm-4"> -->
                  <div class="col-2 m-0 p-0 border-left">
                    <b-img :src="dbPage.tab2.imageUrl" class="m-0" alt="file" fluid> </b-img>
                    <!-- <b-button :size="commonData.selectedBtnSize" class="px-1 py-0 m-1 ml-2 mb-1 float-center text-body" style="background-color:honeydew;">拡大表示</b-button> -->
                  </div>

                  <!-- 役職・氏名 -->
                  <div class="col-3 m-0 p-0 p-0 text-wrap border-left" style="background-color: whitesmoke">
                    <p class="m-0 p-1 text-break overflow-auto" style="overflow-wrap: break-word; max-height: 230px">{{ dbPage.tab2.positionName }}</p>
                  </div>

                  <!-- コメント -->
                  <div class="col-5 m-0 p-0 col-5 p-0 text-wrap border-left" style="background-color: whitesmoke">
                    <p class="m-0 p-1 text-break overflow-auto" style="white-space: pre-wrap; max-height: 230px">{{ dbPage.tab2.comment }}</p>
                  </div>
                  <!-- </div> -->
                  <!-- 新しい記述 end -->
                </div>
              </div>
            </div>
            <!-- 現在の登録状況 ＆ 削除 end -->

            <!-- 編集 start -->
            <div v-show="showEdit" class="col-12 m-0 p-0">
              <div class="m-0 p-0 mt-2" style="background-color: linen">
                <div class="d-flex flex-low">
                  <h4 class="mx-2 my-0 p-0 pt-1">編集</h4>
                  <b-button :size="commonData.selectedBtnSize" variant="dark" class="m-1 px-1 py-0" @click="editCancelTab2()">編集取消</b-button>
                </div>
                <b-form @submit="onSubmitEditTab2" @reset="onResetTab2">
                  <!-- Sort -->
                  <!-- <div class="row p-0 pt-2 m-0 mr-1">
                    <span class="col-2 m-0 mt-2 p-1 pt-0">Sort(必須):</span>
                    <b-form-input v-model="tab1.sort" type="number" class="col-10" required placeholder=""></b-form-input>
                  </div> -->

                  <!-- タイトル -->
                  <!-- <div class="row p-0 pt-2 m-0 mr-1">
                    <span class="col-2 m-0 mt-2 p-1 pt-3">タイトル:</span>
                    <b-form-textarea v-model="tab1.q" class="col-10" required placeholder="" rows="3" max-rows="6"></b-form-textarea>
                  </div> -->

                  <!-- 内容 -->
                  <!-- <div class="row p-0 pt-2 m-0 mr-1">
                    <span class="col-2 m-0 mt-2 p-1 pt-3">内容:</span>
                    <b-form-textarea v-model="tab1.a" class="col-10" required placeholder="" rows="3" max-rows="6"></b-form-textarea>
                  </div> -->

                  <!-- Sort -->
                  <div class="row p-0 pt-2 m-0 mr-1">
                    <span class="col-2 m-0 mt-1 p-1 pt-0">Sort(必須):</span>
                    <b-form-input v-model="tab2.sort" type="number" class="col-10" required placeholder="若番順に表示します。連番でなくてもOKです。"></b-form-input>
                  </div>

                  <!-- 役職・氏名 -->
                  <div class="row no-gutters pt-2 mr-1">
                    <div class="col-2 mt-3 px-1">
                      <p class="m-0 p-0">役職・氏名:</p>
                      <p class="m-0 p-0">(必須)</p>
                    </div>
                    <b-form-textarea v-model="tab2.positionName" class="col-10 p-1" required placeholder="役職・氏名を入力してください" rows="3" max-rows="6"></b-form-textarea>
                  </div>

                  <!-- 内容 -->
                  <div class="row no-gutters pt-2 px-1 mr-1">
                    <div class="col-2 mt-3">
                      <p class="m-0 p-0">コメント:</p>
                      <p class="m-0 p-0">(必須)</p>
                    </div>
                    <b-form-textarea v-model="tab2.comment" class="col-10 p-1" required placeholder="コメントを入力してください" rows="3" max-rows="6"></b-form-textarea>
                  </div>

                  <b-button :size="commonData.selectedBtnSize" type="submit" variant="primary" class="m-1 ml-2 px-1 py-0">登録</b-button>
                </b-form>

                <!-- 画像添付 start-->
                <div class="m-2 pb-2">
                  <p class="mb-0">画像を添付する場合は、「画像添付」ボタンをクリックしてください。</p>
                  <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageList()">画像添付</button>
                  <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageCancelTab2()">キャンセル</button>
                </div>
                <hr />

                <!-- <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageList()">画像リスト表示</button> -->
                <div v-show="showImage">
                  <div class="m-2">
                    下の画像から選択してください。: <strong>{{ selected }}</strong>
                  </div>

                  <div class="row no-gutters">
                    <b-form-group v-for="(myImage, index2) in myImages" :key="myImage.id" class="col-4">
                      <div class="image_box" @click="selImageTab2(myImage.url, index2)">
                        <b-img v-model="selected" :src="myImage.url" fluid class="m-0 p-1" alt="file"> </b-img>
                        <b-form-radio v-model="selected" :value="'No.' + ++index2" class="positionRadioBtn ml-4 p-0"> </b-form-radio>
                      </div>
                    </b-form-group>
                  </div>

                  <!-- 以下の float-cb について： 上記の float-left の解除ができないので、style で設定 -->
                  <div class="float-cb p-2">以下の「画像新規登録・削除」から、新たに画像を追加したり、 不要な画像を削除することができます。</div>

                  <!-- 消すな ここから４行 -->
                  <!-- <b-form-input v-model="page.fileUrl" type="text" required placeholder=""></b-form-input> -->
                  <p>{{ tab2.imageUrl }}</p>
                  <!-- 消すな ここまで -->
                </div>
                <!-- 画像添付 end -->

                <hr />
              </div>
            </div>
            <!-- 編集 End -->

            <!-- 新規登録 start -->
            <!-- <div v-show="showReg" class="col-12 m-0 p-0"> -->
            <div v-show="showReg" class="col-12 m-0 p-0">
              <div class="m-0 p-0 mt-2" style="background-color: lightblue">
                <h4 class="mx-2 mb-0 p-0 pt-1">新規登録</h4>

                <b-form @submit="onSubmitTab2" @reset="onResetTab2">
                  <!-- Sort -->
                  <div class="row p-0 pt-2 m-0 mr-1">
                    <span class="col-2 m-0 mt-1 p-1 pt-0">Sort(必須):</span>
                    <b-form-input v-model="tab2.sort" type="number" class="col-10" required placeholder="若番順に表示します。連番でなくてもOKです。"></b-form-input>
                  </div>

                  <!-- 役職・氏名 -->
                  <div class="row no-gutters pt-2 mr-1">
                    <div class="col-2 mt-3 px-1">
                      <p class="p-0 m-0">役職・氏名:</p>
                      <p class="p-0 m-0">(必須)</p>
                    </div>
                    <b-form-textarea v-model="tab2.positionName" class="col-10 p-1" required placeholder="役職・氏名を入力してください" rows="3" max-rows="6"></b-form-textarea>
                  </div>

                  <!-- 内容 -->
                  <div class="row no-gutters pt-2 px-1 mr-1">
                    <div class="col-2">
                      <p class="p-0 m-0 mt-3">コメント:</p>
                      <p class="p-0 m-0">(必須)</p>
                    </div>
                    <b-form-textarea v-model="tab2.comment" class="col-10 p-1" required placeholder="コメントを入力してください" rows="3" max-rows="6"></b-form-textarea>
                  </div>

                  <b-button :size="commonData.selectedBtnSize" type="submit" variant="primary" class="m-1 mt-2 px-1 py-0">登録</b-button>
                  <b-button :size="commonData.selectedBtnSize" type="reset" variant="dark" class="m-0 mt-2 px-1 py-0">データクリア</b-button>
                </b-form>

                <!-- 画像添付 start-->
                <div class="m-2 pb-2">
                  <p class="mb-0">画像を添付する場合は、「画像添付」ボタンをクリックしてください。</p>
                  <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageList()">画像添付</button>
                  <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageCancelTab2()">キャンセル</button>
                </div>
                <hr />

                <!-- <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageList()">画像リスト表示</button> -->
                <div v-show="showImage">
                  <div class="m-2">
                    下の画像から選択してください。: <strong>{{ selected }}</strong>
                  </div>

                  <div class="row no-gutters">
                    <b-form-group v-for="(myImage, index2) in myImages" :key="myImage.id" class="col-4">
                      <div class="image_box" @click="selImageTab2(myImage.url, index2)">
                        <b-img v-model="selected" :src="myImage.url" fluid class="m-0 p-1" alt="file"> </b-img>
                        <b-form-radio v-model="selected" :value="'No.' + ++index2" class="positionRadioBtn ml-4 p-0"> </b-form-radio>
                      </div>
                    </b-form-group>
                  </div>

                  <!-- 以下の float-cb について： 上記の float-left の解除ができないので、style で設定 -->
                  <div class="float-cb p-2">以下の「画像新規登録・削除」から、新たに画像を追加したり、 不要な画像を削除することができます。</div>

                  <!-- 消すな ここから４行 -->
                  <!-- <b-form-input v-model="page.fileUrl" type="text" required placeholder=""></b-form-input> -->
                  <p>{{ tab2.imageUrl }}</p>
                  <!-- 消すな ここまで -->
                </div>
                <!-- 画像添付 end -->

                <hr />
              </div>
            </div>
            <!-- 新規登録 End -->
          </div>

          <!-- 画像新規登録・削除 start -->
          <div class="col-12 m-0 p-0">
            <div class="m-0 p-3 mt-3" style="background-color: midnightblue">
              <h4 class="text-white">画像新規登録・削除</h4>
              <!-- 画像登録 Start -->
              <!-- <div class="col-12 m-0 p-2 mt-3" style="background-color:skyblue;"> -->
              <div class="col-12 m-0 p-2 mt-3" style="background-color: honeydew">
                <h5>画像登録</h5>
                <!-- <input ref="input" type="file" accept=".jpg, .png, .pdf" @change="fileExtension($event)" /> -->
                <!-- <input ref="input" type="file" accept="*" @change="fileExtension($event)" /> -->
                <input ref="input" type="file" accept=".jpg, .png, .pdf" @change="resizeTab2($event)" />

                <br />
                <div v-show="reserve">
                  <div>
                    <!-- サムネイル用canvas -->
                    <canvas ref="thumbnail" class="mt-1" :width="0" :height="0" />
                  </div>

                  <!-- <p>アップロードファイル名： {{ fileName }}</p> -->
                  <!-- アップロードボタン -->
                  <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 px-1 py-0" @click="uploadImage()">Upload</b-button>
                  <b-button :size="commonData.selectedBtnSize" class="ml-2 m-0 px-1 py-0" my-0 @click="reset()">Cancel</b-button>
                  <!-- upload()の最後で、リスト表示 -->
                </div>
              </div>
              <!-- 画像登録 End -->

              <!-- 画像削除 Start -->
              <!-- <div class="col-12 m-0 p-2 mt-2"> -->
              <div class="col-12 m-0 p-2 mt-2" style="background-color: honeydew">
                <h5>画像削除</h5>
                <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 ml-2 px-1 py-0" @click="imageDelete()">画像リスト表示</b-button>
                <b-button :size="commonData.selectedBtnSize" class="m-0 ml-2 px-1 py-0" @click="imageDeleteCancel()">非表示</b-button>
              </div>
              <!-- </div> -->

              <!-- 画像リスト表示 -->
              <div v-show="showDel" class="m-0 p-0">
                <div class="col-12 m-0 p-0 mt-2" style="background-color: honeydew">
                  <div class="row no-gutters">
                    <!-- <div v-for="myImage in myImages" :key="myImage.id" class="m-0 p-1 col-4" style="background-color:lightslategray;"> -->
                    <div v-for="myImage in myImages" :key="myImage.id" class="m-0 p-1 col-4">
                      <!-- <div v-for="myImage in myImages" :key="myImage.id" class="p-1 col-4" style="background-color:lightslategray;"> -->
                      <div class="border m-0 p-0">
                        <b-img :src="myImage.url" fluid class="m-0" alt="file" />
                        <b-button :size="commonData.selectedBtnSize" class="m-1 ml-2 px-1 py-0 d-flex" @click="deleteImage(myImage.name, myImage.url)">削除</b-button>
                      </div>
                    </div>
                    <!-- <div class="float-cb col-12"></div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 画像新規登録・削除 end -->
        </div>
        <!-- ¥¥¥¥¥¥¥¥¥¥¥¥¥ 管理機能:カテゴリー内容 tab2 end ¥¥¥¥¥ -->

        <!-- ¥¥¥¥¥¥¥¥¥¥¥¥¥ 管理機能:カテゴリー内容 tab3 start ¥¥¥¥¥¥ -->
        <div v-show="tabIndex === 2" class="m-0 mt-2 p-0">
          <div class="row m-0 mt-2 p-2 bg-dark">
            <!-- 現在の登録状況 ＆ 削除 start -->
            <div class="col-12 m-0 my-2 p-0" style="background-color: lightsteelblue">
              <h5 class="mx-2 my-2 p-0 pt-1">【カテゴリー内容】現在の登録状況 ＆ 削除</h5>

              <div class="row text-center m-0 mx-1 p-0 border border-secondary" style="background-color: gainsboro">
                <div class="col-1 m-0 p-1" style="background-color: lightsteelblue">
                  <!-- <p class="m-0 p-0">Action</p> -->
                  <p class="m-0 p-0"></p>
                </div>

                <!-- Sort -->
                <div class="col-1 text-center m-0 p-1 border-left border-secondary" style="background-color: lightsteelblue">
                  <p class="m-0 p-0">Sort</p>
                </div>

                <!-- 年・月 -->
                <div class="col-5 text-center m-0 p-1 border-left border-secondary" style="background-color: lightsteelblue">
                  <p class="m-0 p-0">年‐月</p>
                </div>

                <!-- あゆみ -->
                <div class="col-5 text-center m-0 p-1 border-left border-secondary" style="background-color: lightsteelblue">
                  <p class="m-0 p-0">あゆみ</p>
                </div>
              </div>

              <div v-for="dbPage in dbPagesTab3" :key="dbPage.id" class="m-0 my-1 p-0">
                <div class="row m-0 mx-1 p-0 border border-secondary" style="background-color: gainsboro">
                  <div class="col-1 m-0 p-1">
                    <b-button :size="commonData.selectedBtnSize" class="px-1 py-0 m-0 mt-1" variant="primary" @click="editTab3(dbPage.id)">編集</b-button>
                    <b-button :size="commonData.selectedBtnSize" class="px-1 py-0 m-0 mt-1" @click="removeTab3(dbPage.id)">削除</b-button>
                  </div>

                  <div class="col-1 m-0 p-1 border-left border-secondary" style="background-color: gainsboro">
                    <p class="m-0 p-0">{{ dbPage.tab3.sort }}</p>
                  </div>

                  <!-- 年・月 -->
                  <div class="col-5 m-0 p-0 px-1 text-wrap border-left border-secondary" style="background-color: gainsboro">
                    <p class="m-0 p-0 text-break overflow-auto" style="overflow-wrap: break-word; max-height: 60px">{{ dbPage.tab3.nenGetsu }}</p>
                  </div>

                  <!-- あゆみ -->
                  <div class="col-5 m-0 p-0 px-1 text-wrap border-left border-secondary" style="background-color: gainsboro">
                    <p class="m-0 p-0 text-break overflow-auto" style="max-height: 60px">{{ dbPage.tab3.content }}</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- 現在の登録状況 ＆ 削除 end -->

            <!-- 編集 start -->
            <div v-show="showEdit" class="col-12 m-0 p-0">
              <div class="m-0 p-0 mt-2" style="background-color: linen">
                <div class="d-flex flex-low">
                  <h4 class="mx-2 my-0 p-0 pt-1">編集</h4>
                  <b-button :size="commonData.selectedBtnSize" variant="dark" class="m-1 px-1 py-0" @click="editCancelTab3()">編集取消</b-button>
                </div>
                <b-form @submit="onSubmitEditTab3" @reset="onResetTab3">
                  <!-- Sort -->
                  <div class="row p-0 pt-2 m-0 mr-1">
                    <span class="col-2 m-0 p-1">Sort(必須):</span>
                    <b-form-input v-model="tab3.sort" type="number" class="col-10" required placeholder="若番順に表示します。連番でなくてもOKです。"></b-form-input>
                  </div>

                  <!-- 年月 -->
                  <div class="row no-gutters pt-2 mr-1">
                    <div class="col-2 mt-3 px-1">
                      <span class="p-1">年月(必須):</span>
                      <!-- <span class="p-1">(必須)</span> -->
                    </div>
                    <b-form-textarea v-model="tab3.nenGetsu" class="col-10 p-1" required placeholder="年月を入力してください (例：1999-01)" rows="1" max-rows="2"></b-form-textarea>
                  </div>

                  <!-- 内容 -->
                  <div class="row no-gutters pt-2 px-1 mr-1">
                    <div class="col-2">
                      <p class="m-0 p-1 pt-3">あゆみ:</p>
                      <p class="p-1">(必須)</p>
                    </div>
                    <b-form-textarea v-model="tab3.content" class="col-10 p-1" required placeholder="あゆみ等を入力してください" rows="3" max-rows="9"></b-form-textarea>
                  </div>

                  <b-button :size="commonData.selectedBtnSize" type="submit" variant="primary" class="m-1 ml-2 px-1 py-0">登録</b-button>
                </b-form>

                <hr />
              </div>
            </div>
            <!-- 編集 End -->

            <!-- 新規登録 start -->
            <div v-show="showReg" class="col-12 m-0 p-0">
              <div class="m-0 p-0 mt-2" style="background-color: lightblue">
                <h4 class="mx-2 mb-0 p-0 pt-1">新規登録</h4>

                <b-form @submit="onSubmitTab3" @reset="onResetTab3">
                  <!-- Sort -->
                  <div class="row p-0 pt-2 m-0 mr-1">
                    <span class="col-2 m-0 mt-2 p-1 pt-0">Sort(必須):</span>
                    <b-form-input v-model="tab3.sort" type="number" class="col-10" required placeholder="若番順に表示します。連番でなくてもOKです。"></b-form-input>
                  </div>

                  <!-- 年月 -->
                  <div class="row no-gutters pt-2 mr-1">
                    <div class="col-2 mt-3 px-1">
                      <p class="p-1">年月(必須):</p>
                      <!-- <p class="p-1">(必須)</p> -->
                    </div>
                    <b-form-textarea v-model="tab3.nenGetsu" class="col-10 p-1" required placeholder="年月を入力してください (例：1999-01)" rows="1" max-rows="3"></b-form-textarea>
                  </div>

                  <!-- 内容 -->
                  <div class="row no-gutters pt-2 px-1 mr-1">
                    <div class="col-2">
                      <p class="m-0 p-1 pt-3">あゆみ:</p>
                      <p class="p-1">(必須)</p>
                    </div>
                    <b-form-textarea v-model="tab3.content" class="col-10 p-1" required placeholder="あゆみ等を入力してください" rows="3" max-rows="9"></b-form-textarea>
                  </div>

                  <b-button :size="commonData.selectedBtnSize" type="submit" variant="primary" class="m-1 mt-2 px-1 py-0">登録</b-button>
                  <b-button :size="commonData.selectedBtnSize" type="reset" variant="dark" class="m-0 mt-2 px-1 py-0">データクリア</b-button>
                </b-form>

                <!-- 画像添付 start-->
                <!-- <div class="m-2 pb-2">
                  <p class="mb-0">背景画像を添付する場合は、「背景画像添付」ボタンをクリックしてください。</p>
                  <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageList()">画像添付</button>
                  <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageCancelTab3()">添付なし</button>
                </div> -->
                <hr />

                <!-- <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageList()">画像リスト表示</button> -->
                <!-- <div v-show="showImage"> -->
                <!-- <div class="m-2">
                    下の画像から選択してください。: <strong>{{ selected }}</strong>
                  </div> -->

                <!-- <div class="row no-gutters">
                    <b-form-group v-for="(myImage, index2) in myImages" :key="myImage.id" class="col-4">
                      <div class="image_box" @click="selImageTab3(myImage.url, index2)">
                        <b-img v-model="selected" :src="myImage.url" fluid class="m-0 p-1" alt="file"> </b-img>
                        <b-form-radio v-model="selected" :value="'No.' + ++index2" class="positionRadioBtn ml-4 p-0"> </b-form-radio>
                      </div>
                    </b-form-group>
                  </div> -->

                <!-- 以下の float-cb について： 上記の float-left の解除ができないので、style で設定 -->
                <!-- <div class="float-cb p-2">以下の「画像新規登録・削除」から、新たに画像を追加したり、 不要な画像を削除することができます。</div> -->

                <!-- 消すな ここから４行 -->
                <!-- <b-form-input v-model="page.fileUrl" type="text" required placeholder=""></b-form-input> -->
                <!-- <p>{{ tab3.imageUrl }}</p> -->
                <!-- 消すな ここまで -->
                <!-- </div> -->
                <!-- 画像添付 end -->

                <hr />
              </div>
            </div>
            <!-- 新規登録 End -->
          </div>

          <!-- 画像新規登録・削除 start -->
          <!-- <div class="col-12 m-0 p-0">
            <div class="m-0 p-3 mt-3" style="background-color:midnightblue;">
              <h4 class="text-white">画像新規登録・削除</h4>
              <div class="col-12 m-0 p-2 mt-3" style="background-color:honeydew;">
                <h5>画像登録</h5>
                <input ref="input" type="file" accept=".jpg, .png, .pdf" @change="resize($event)" />

                <br />
                <div>
                  <canvas ref="thumbnail" class="mt-1" :width="0" :height="0" />
                </div>

                <div v-show="reserve">
                  <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 px-1 py-0" @click="upload()">Upload</b-button>
                  <b-button :size="commonData.selectedBtnSize" class="ml-2 m-0 px-1 py-0" my-0 @click="reset()">Cancel</b-button>
                </div>
              </div>
              <div class="col-12 m-0 p-2 mt-2" style="background-color:honeydew;">
                <h5>画像削除</h5>
                <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 ml-2 px-1 py-0" @click="imageDelete()">画像リスト表示</b-button>
                <b-button :size="commonData.selectedBtnSize" class="m-0 ml-2 px-1 py-0" @click="imageDeleteCancel()">非表示</b-button>
              </div>

              <div v-show="showDel" class="m-0 p-0">
                <div class="col-12 m-0 p-0 mt-2" style="background-color:honeydew;">
                  <div class="row no-gutters">
                    <div v-for="myImage in myImages" :key="myImage.id" class="m-0 p-1 col-4">
                      <div class="border m-0 p-0">
                        <b-img :src="myImage.url" fluid class="m-0" alt="file" />
                        <b-button :size="commonData.selectedBtnSize" class="m-1 ml-2 px-1 py-0 d-flex" @click="deleteImage(myImage.name)">削除</b-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
          <!-- 画像新規登録・削除 end -->
        </div>
        <!-- ¥¥¥¥¥¥¥¥¥¥¥¥¥ 管理機能:カテゴリー内容 tab3 end ¥¥¥¥¥ -->
      </div>
    </div>
    <!-- <p>{{ CategoryDataSet() }}</p> -->
    <!-- <b-button :size="commonData.selectedBtnSize" class="m-1 ml-2 px-1 py-0 d-flex" @click="test1()">テスト１</b-button> -->
    <!-- <br />
    <br /> -->
  </div>
</template>

<script>
// import { BIconClockHistory } from 'bootstrap-vue'
// import moment from 'moment'
import firebase from '~/plugins/firebase'
const storage = firebase.storage()
const storageRef = storage.ref()
const imagesRef = storageRef.child('about')

export default {
  data() {
    return {
      showCategory: false,
      showAbout: false,

      // 最初のTab機能 と 管理機能のカテゴリー選択ボタン で共用利用
      tabIndex: 0,

      // 管理機能のカテゴリー選択 ボタンで利用
      // tabSelected: '',
      tabData: [
        { text: 'Tab 1', value: 0 },
        { text: 'Tab 2', value: 1 },
        { text: 'Tab 3', value: 2 },
      ],

      // 管理機能のTab1: style設定で利用
      styleSelected: 'body',
      styleData: [
        { value: 'body', text: '本文' },
        // { value: 'bold', text: '本文(強調)' },
        { value: 'title', text: 'タイトル' },
        { value: 'subTitle', text: 'ｻﾌﾞﾀｲﾄﾙ' },
        { value: 'footer', text: 'フッター' },
      ],

      editId: '',
      editCategory: {
        tab1Flg: '',
        tab1Url: '',
        tab2Flg: '',
        tab3Flg: '',
      },
      tempCategory: {},
      myData: {},
      commonData: {},
      showEdit: false,
      showReg: true,
      page: {
        sort: '',
        q: '',
        a: '',
      },
      tab1: {
        sort: '',
        styleSelected: 'body',
        content: '',
      },
      tab2: {
        sort: '',
        // imageUrl: 'https://firebasestorage.googleapis.com/v0/b/hiro1-223af.appspot.com/o/no_image.png?alt=media&token=d8ab83f9-db9c-46a2-8795-fe2ad439f419',
        imageUrl: process.env.NO_IMAGE_URL,
        positionName: '',
        comment: '',
      },
      tab3: {
        sort: '',
        // imageUrl: '',
        // nenGetsu: moment(Date()).format('YYYY-MM'),
        nenGetsu: '',
        content: '',
      },
      // 以下は画像関連
      showImage: false,
      showDel: false,
      selected: '選択されていません。',
      myImages: [
        {
          name: '',
          url: '',
        },
      ],
      newImage: '',
      newFile: '',
      fileName: '',
      fileType: '',
      reserve: false,
    }
  },
  // aboutDB からのデータ取得
  // computedは、値が変わるとその値に依存しているすべてのバインディングが更新される
  computed: {
    isLogin() {
      return this.$store.getters['user/isLogin']
    },

    dbPagesTab1() {
      // const tempPages = this.$store.getters['aboutDB/getMyPageByTabIndex'](this.tabIndex)
      const tempPages = this.$store.getters['aboutDB/getMyPageByTabIndex'](0)
      // console.log('1 ---- tempPages: ', tempPages)

      return tempPages.slice().sort((a, b) => {
        if (a.tab1.sort > b.tab1.sort) {
          return 1
        }
        if (a.tab1.sort < b.tab1.sort) {
          return -1
        }
        return 0
      })
    },
    dbPagesTab2() {
      const tempPages = this.$store.getters['aboutDB/getMyPageByTabIndex'](1)
      // console.log('1 ---- tempPages: ', tempPages)

      return tempPages.slice().sort((a, b) => {
        if (a.tab2.sort > b.tab2.sort) {
          return 1
        }
        if (a.tab2.sort < b.tab2.sort) {
          return -1
        }
        return 0
      })
    },
    dbPagesTab3() {
      const tempPages = this.$store.getters['aboutDB/getMyPageByTabIndex'](2)

      return tempPages.slice().sort((a, b) => {
        if (a.tab3.sort > b.tab3.sort) {
          return 1
        }
        if (a.tab3.sort < b.tab3.sort) {
          return -1
        }
        return 0
      })
    },
    dbCategorys() {
      return this.$store.getters['aboutDB/getCategorys']('category1')
      // const myTestCategorys = this.$store.getters['aboutDB/getCategorys']('category1')
      // console.log('myTestCategorys: ', myTestCategorys)
      // return myTestCategorys
    },
    // dbCategoryById() {
    //   return this.$store.getters['aboutDB/getCategoryById']('category1')
    // },
    dbHeaders() {
      return this.$store.getters['storeheader/orderdDbHeaders']
    },
  },
  // created は画面を開いたとき呼ばれる。
  created() {
    // 下記の aboutDB は store/aboutDB.js のファイル名
    this.$store.dispatch('aboutDB/init')

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
    this.selnum(63)
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

    // ¥¥¥¥¥¥¥¥¥¥¥ tab1 firebase関連
    addTab1() {
      // 下記の aboutDB は store/aboutDB.js のファイル名
      // console.log('tabIndex: ' + this.tabIndex)
      this.tab1.sort = Number(this.tab1.sort)

      this.$store.dispatch('aboutDB/addTab1', { tabIndex: this.tabIndex, tab1: this.tab1 })
      this.tab1.styleSelected = 'body'
      this.tab1.sort = 0
      this.tab1.content = ''
      // this.tab1.title = ''
    },
    updateTab1() {
      this.tab1.sort = Number(this.tab1.sort)

      // 下記の aboutDB は store/aboutDB.js のファイル名
      this.$store.dispatch('aboutDB/updateTab1', { id: this.editId, tab1: this.tab1 })
    },
    editTab1(id) {
      this.showEdit = true
      this.showReg = false
      const myPage = this.$store.getters['aboutDB/getByIdTab1'](id)
      this.tab1.styleSelected = myPage.tab1.styleSelected
      this.tab1.sort = myPage.tab1.sort
      // this.tab1.title = myPage.tab1.title
      this.tab1.content = myPage.tab1.content
      this.editId = id
    },

    // ¥¥¥¥¥¥¥¥¥¥¥ tab2 firebase関連
    addTab2() {
      // 下記の aboutDB は store/aboutDB.js のファイル名
      // console.log('tabIndex: ' + this.tabIndex)
      // this.tab1.sort = Number(this.tab1.sort)

      this.$store.dispatch('aboutDB/addTab2', { tabIndex: this.tabIndex, tab2: this.tab2 })
      // this.tab1.styleSelected = 'body'
      // this.tab1.sort = 0
      // this.tab1.title = ''
      // this.tab1.content = ''
      // this.tab2.imageUrl = 'https://firebasestorage.googleapis.com/v0/b/hiro1-223af.appspot.com/o/no_image.png?alt=media&token=d8ab83f9-db9c-46a2-8795-fe2ad439f419'
      this.onResetTab2()
    },
    updateTab2() {
      // this.tab1.sort = Number(this.tab1.sort)

      // 下記の aboutDB は store/aboutDB.js のファイル名
      this.$store.dispatch('aboutDB/updateTab2', { id: this.editId, tab2: this.tab2 })
    },
    editTab2(id) {
      this.showEdit = true
      this.showReg = false
      const myPage = this.$store.getters['aboutDB/getByIdTab2'](id)
      this.tab2.sort = myPage.tab2.sort
      this.tab2.imageUrl = myPage.tab2.imageUrl
      this.tab2.positionName = myPage.tab2.positionName
      this.tab2.comment = myPage.tab2.comment
      this.editId = id
    },

    // ¥¥¥¥¥¥¥¥¥¥¥ tab3 firebase関連
    addTab3() {
      // 下記の aboutDB は store/aboutDB.js のファイル名
      // console.log('tabIndex: ' + this.tabIndex)
      // this.tab1.sort = Number(this.tab1.sort)

      this.$store.dispatch('aboutDB/addTab3', { tabIndex: this.tabIndex, tab3: this.tab3 })
      // this.tab1.sort = 0
      // this.tab1.title = ''
      this.onResetTab3()
    },
    updateTab3() {
      // this.tab1.sort = Number(this.tab1.sort)

      // 下記の aboutDB は store/aboutDB.js のファイル名
      this.$store.dispatch('aboutDB/updateTab3', { id: this.editId, tab3: this.tab3 })
    },
    editTab3(id) {
      this.showEdit = true
      this.showReg = false
      const myPage = this.$store.getters['aboutDB/getByIdTab3'](id)
      this.tab3.sort = myPage.tab3.sort
      // this.tab3.imageUrl = myPage.tab3.imageUrl
      this.tab3.nenGetsu = myPage.tab3.nenGetsu
      this.tab3.content = myPage.tab3.content
      this.editId = id
    },
    // ¥¥¥¥¥¥¥¥¥¥¥ tab1,tab2,tab3 firebase関連 end

    // editCategory() {
    // },
    // タブを選択した時の色等の変更
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ['bg-primary', 'text-light']
      } else {
        return ['bg-light', 'text-info']
      }
    },
    onCategory() {
      this.showCategory = true
      this.showAbout = false
      this.tempCategory = this.$store.getters['aboutDB/getCategoryById']('category1')
      this.editCategory.tab1Flg = this.tempCategory.category.tab1Flg
      this.editCategory.tab2Flg = this.tempCategory.category.tab2Flg
      this.editCategory.tab3Flg = this.tempCategory.category.tab3Flg
      this.editCategory.tab1Name = this.tempCategory.category.tab1Name
      this.editCategory.tab2Name = this.tempCategory.category.tab2Name
      this.editCategory.tab3Name = this.tempCategory.category.tab3Name
      this.editCategory.tab1Url = this.tempCategory.category.tab1Url
      // console.log('this.editCategory: ', this.editCategory)
      // console.log('tab1Name of this.editCategory: ', this.editCategory.tab1Name)
    },
    updateCategory() {
      // 下記の aboutDB は store/aboutDB.js のファイル名
      this.$store.dispatch('aboutDB/updateCategory', { id: 'category1', category: this.editCategory })
      this.toastFileUpdate('登録', '更新しました。')
      this.imageCancel()
    },

    onAbout() {
      this.showCategory = false
      this.showAbout = true
      this.tabSelected = ''
      this.tempCategory = this.$store.getters['aboutDB/getCategoryById']('category1')
      this.tabData[0].text = this.tempCategory.category.tab1Name
      this.tabData[1].text = this.tempCategory.category.tab2Name
      this.tabData[2].text = this.tempCategory.category.tab3Name
      this.editCategory.tab1Flg = this.tempCategory.category.tab1Flg
      this.editCategory.tab2Flg = this.tempCategory.category.tab2Flg
      this.editCategory.tab3Flg = this.tempCategory.category.tab3Flg
      this.editCategory.tab1Name = this.tempCategory.category.tab1Name
      this.editCategory.tab2Name = this.tempCategory.category.tab2Name
      this.editCategory.tab3Name = this.tempCategory.category.tab3Name
      this.editCategory.tab1Url = this.tempCategory.category.tab1Url
      // console.log('this.editCategory.tab1Url: ', this.editCategory.tab1Url)
    },

    // Tab1用 start
    editCancelTab1() {
      this.tab1.styleSelected = 'body'
      this.tab1.sort = 0
      // this.tab1.title = ''
      this.tab1.content = ''
      this.showEdit = false
      this.showReg = true
    },
    dataResetTab1() {
      const myPage = this.$store.getters['aboutDB/getMyPageById'](this.editId)
      this.tab1.styleSelected = myPage.tab1.styleSelected
      // this.tab1.title = myPage.tab1.title
      this.tab1.content = myPage.tab1.content
      this.tab1.sort = myPage.tab1.sort
    },
    removeTab1(id) {
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
          this.$store.dispatch('aboutDB/remove', id)
        }
      })
    },
    // onSubmitEditTab1(evt) {
    onSubmitEditTab1() {
      // evt.preventDefault()
      this.updateTab1()
      this.toastFileUpdate('編集', '登録しました。')
      // 以下はinputの入力をリセット
      this.tab1.styleSelected = 'body'
      // this.tab1.title = ''
      this.tab1.content = ''
      this.showEdit = false
      this.showReg = true
      this.tab1.sort = 0
    },
    // onSubmitTab1(evt) {
    onSubmitTab1() {
      // evt.preventDefault()
      this.addTab1()
      this.toastFileUpdate('登録', '登録しました。')
      // 以下はinputの入力をリセット
      this.tab1.styleSelected = 'body'
      this.tab1.sort = 0
      // this.tab1.title = ''
      this.tab1.content = ''
    },
    // onResetTab1(evt) {
    onResetTab1() {
      // evt.preventDefault()
      // Reset our tab1 values
      this.tab1.styleSelected = 'body'
      this.tab1.sort = 0
      // this.tab1.title = ''
      this.tab1.content = ''
    },
    // Tab1用 end

    // Tab2用 start
    editCancelTab2() {
      this.onResetTab2()
      this.showEdit = false
      this.showReg = true
    },
    dataResetTab2() {
      const myPage = this.$store.getters['aboutDB/getMyPageById'](this.editId)
      // this.tab1.title = myPage.tab1.title
      this.tab1.content = myPage.tab1.content
      // this.tab1.sort = myPage.tab1.sort
    },
    removeTab2(id) {
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
          this.$store.dispatch('aboutDB/remove', id)
        }
      })
    },
    onSubmitEditTab2(evt) {
      // alert(JSON.stringify(this.tab1))
      evt.preventDefault()
      this.updateTab2()
      this.toastFileUpdate('編集', '登録しました。')
      // 以下はinputの入力をリセット
      // this.tab1.title = ''
      // this.tab1.content = ''
      // this.tab1.sort = 0
      this.onResetTab2()
      this.showEdit = false
      this.showReg = true
      // this.selected = '選択されていません。'
    },
    onSubmitTab2(evt) {
      // alert(JSON.stringify(this.tab1))
      evt.preventDefault()
      this.addTab2()
      this.toastFileUpdate('登録', '登録しました。')
      // 以下はinputの入力をリセット
      // this.$refs.input.value = ''
      // this.tab1.title = ''
      this.onResetTab2()
    },
    onResetTab2(evt) {
      // evt.preventDefault()
      // this.tab2 = ''
      this.tab2.sort = ''
      this.tab2.positionName = ''
      this.tab2.comment = ''
      // this.tab2.imageUrl = 'https://firebasestorage.googleapis.com/v0/b/hiro1-223af.appspot.com/o/no_image.png?alt=media&token=d8ab83f9-db9c-46a2-8795-fe2ad439f419'
      this.tab2.imageUrl = process.env.NO_IMAGE_URL
    },
    // Tab2用 end

    // Tab3用 start
    editCancelTab3() {
      this.onResetTab3()
      // this.tab3.content = ''
      this.showEdit = false
      this.showReg = true
    },
    dataResetTab3() {
      const myPage = this.$store.getters['aboutDB/getMyPageById'](this.editId)
      this.tab3.sort = myPage.tab3.sort
      this.tab3.nenGetsu = myPage.tab3.nenGetsu
      this.tab3.content = myPage.tab3.content
    },
    removeTab3(id) {
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
          this.$store.dispatch('aboutDB/remove', id)
        }
      })
    },
    onSubmitEditTab3(evt) {
      // alert(JSON.stringify(this.tab1))
      evt.preventDefault()
      this.updateTab3()
      this.toastFileUpdate('編集', '登録しました。')
      // 以下はinputの入力をリセット
      this.onResetTab3()
      this.showEdit = false
      this.showReg = true
    },
    onSubmitTab3(evt) {
      // alert(JSON.stringify(this.tab1))
      evt.preventDefault()
      this.addTab3()
      this.toastFileUpdate('登録', '登録しました。')
      // 以下はinputの入力をリセット
      this.onResetTab3()
    },
    onResetTab3(evt) {
      this.tab3.sort = ''
      // this.tab3.nenGetsu = moment(Date()).format('YYYY-MM')
      this.tab3.nenGetsu = this.todaySet4()
      this.tab3.content = ''
      this.showEdit = false
      this.showReg = true
    },
    // Tab3用 end

    toggleChk(num) {
      switch (num) {
        case 1:
          this.editCategory.tab1Flg = !this.editCategory.tab1Flg
          break
        case 2:
          this.editCategory.tab2Flg = !this.editCategory.tab2Flg
          break
        case 3:
          this.editCategory.tab3Flg = !this.editCategory.tab3Flg
          break
        default:
          // console.log('---- error --- num in toggleChk(): ' + num)
          break
      }
      // console.log('------- chkNemu1 in toggleChk(): ' + this.editCategory.tab1Flg)
    },
    toastFileUpdate(titleData, mainData) {
      this.$bvToast.toast(mainData, {
        title: titleData,
        autoHideDelay: 5000,
      })
    },
    // 画像関連メソッド
    // 画像選択後の処理
    // fileExtension(e) {
    //   const file = (e.target.files || e.dataTransfer.files)[0]

    //   this.fileName = file.name
    //   const pos = this.fileName.lastIndexOf('.')

    //   // console.log('fileName-1: ' + this.fileName)

    //   this.fileType = this.fileName.slice(pos + 1)

    //   const vm = this

    //   if (this.fileType === 'png' || this.fileType === 'jpg' || this.fileType === 'jpeg') {
    //     // console.log('file extension 画像: ' + fileExt)
    //     vm.resize(e)
    //   } else {
    //     // console.log('file extension 画像以外: ' + fileExt)
    //     // image.src = e.target.result
    //     this.newFile = file
    //     this.reserve = true
    //   }
    // },
    // 画像選択後の処理
    resize(e) {
      // console.log('画像をリサイズする')
      // const file = e.target.files[0]
      const file = (e.target.files || e.dataTransfer.files)[0]

      if (typeof file === 'undefined') {
        this.reserve = false
        this.selected = '選択されていません。'
        return
      }

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
    resizeTab2(e) {
      // console.log('画像をリサイズする')
      // const file = e.target.files[0]
      const file = (e.target.files || e.dataTransfer.files)[0]

      if (typeof file === 'undefined') {
        this.reserve = false
        this.selected = '選択されていません。'
        return
      }

      this.fileName = file.name
      // console.log('fileName-2: ' + this.fileName)

      if (file) {
        const image = new Image()
        const reader = new FileReader()
        const vm = this
        const maxWidth = 640

        reader.readAsDataURL(file)

        reader.onload = (e) => {
          image.src = e.target.result
          image.onload = () => {
            vm.newImage = this.width < maxWidth ? this.src : vm.makeImageTab2(image)
            vm.makeTumbnail(image)
          }
        }
        this.reserve = true
      }
    },
    makeImage(image) {
      // console.log('縮小画面を作る')
      // canvas要素を作成
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      // 縦横比を算出
      // const ratio = image.height / image.width

      // 生成する画像の横幅
      const width = 1280
      const height = 512
      // const height = width * ratio

      canvas.width = width
      canvas.height = height

      // canvas描画作成
      ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height)

      // data_url形式に変換したものを返す
      return canvas.toDataURL('image/jpeg')
    },
    // 縮小画面を作る
    makeImageTab2(image) {
      // console.log('縮小画面を作る')
      // canvas要素を作成
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      // 縦横比を算出
      // const ratio = image.height / image.width

      // 生成する画像の横幅
      const width = 640
      const height = 480
      // const height = width * ratio

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
      this.tab2 = {}
    },
    // 画像をアップロードする
    // upload() {
    //   if (this.fileType === 'png' || this.fileType === 'jpg' || this.fileType === 'jpeg') {
    //     // console.log('file 拡張子は 画像: ' + fileType)
    //     this.uploadImage()
    //   } else {
    //     // console.log('file 拡張子は 画像以外: ' + fileType)
    //     // this.newFile = this.src
    //     this.reserve = true
    //     this.uploadNotImage()
    //   }
    // },
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
    },
    // 画像ファイル以外の保存
    // uploadNotImage() {
    //   // const photo = this.newImage

    //   // アップロード先のフォルダ、ファイル名を指定
    //   const dateNow = Date.now()
    //   const fileNameDate = moment(dateNow).format('YYYYMMDD-HHmmss_')
    //   this.fileName = fileNameDate + this.fileName
    //   const fileImage = imagesRef.child(this.fileName)
    //   // console.log('fileName at aaaaa: ' + this.fileName)

    //   // ファイルをアップロード
    //   // fileImage.putString(this.newFile, 'data_url').then((snapshot) => {
    //   fileImage.put(this.newFile).then((snapshot) => {
    //     // console.log('photo uploaded')

    //     // 入力データをリセット
    //     this.reset()
    //     // トースト: ファイル アップデート完了しました。
    //     this.toastFileUpdate('ファイル アップロード', '完了しました。')
    //   })
    //   // 画像リスト 表示
    //   this.imageList()
    //   this.imageDelete()

    //   // this.showImageReg = false
    // },
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

      this.myImages = []
      const vm = this

      // console.log('imagesRef: ', imagesRef)
      this.showImage = true

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
      // FireStrage のフォルダとファイルのリストを取得

      this.myImages = []
      const vm = this

      // console.log('imagesRef: ', imagesRef)
      this.showImage = true

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
    selImageTab1(imageUrl, index2) {
      // alert('ファイル選択 in selImageTab1: ' + imageUrl)
      this.selected = 'No.' + index2
      this.editCategory.tab1Url = imageUrl
    },
    selImageTab2(imageUrl, index2) {
      // alert('ファイル選択 in selImageTab2: ' + imageUrl)
      this.selected = 'No.' + index2
      this.tab2.imageUrl = imageUrl
    },
    imageTorikesi() {
      this.showImage = false
      // this.showImageReg = false
    },
    imageCancel() {
      this.showImage = false
      // this.tab1.fileUrl = 'https://firebasestorage.googleapis.com/v0/b/hiro1-223af.appspot.com/o/no_image.png?alt=media&token=d8ab83f9-db9c-46a2-8795-fe2ad439f419'
      // this.editCategory.tab1Url = ''
      this.selected = '選択されていません。'
    },
    imageCancelTab2() {
      this.showImage = false
      // this.tab1.fileUrl = 'https://firebasestorage.googleapis.com/v0/b/hiro1-223af.appspot.com/o/no_image.png?alt=media&token=d8ab83f9-db9c-46a2-8795-fe2ad439f419'
      this.tab2.imageUrl = ''
      this.selected = '選択されていません。'
    },
    // imageCancelTab3() {
    //   this.showImage = false
    // this.tab1.fileUrl = 'https://firebasestorage.googleapis.com/v0/b/hiro1-223af.appspot.com/o/no_image.png?alt=media&token=d8ab83f9-db9c-46a2-8795-fe2ad439f419'
    // this.tab3.imageUrl = ''
    //   this.selected = '選択されていません。'
    // },
    imageDeleteCancel() {
      this.showDel = false
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
      const vm = this

      // console.log('imagesRef: ', imagesRef)
      this.showDel = true

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
      // const vm = this

      const tempPages = this.dbPagesTab2
      // console.log('tempPages: ', tempPages)
      const myResult = tempPages.find((item) => item.tab2.imageUrl === deleteFileUrl)
      // console.log('myResult: ', myResult)

      if (typeof myResult === 'undefined') {
        // 画像ファイル: 未使用
        // console.log('1----------myResult = undefined')
        this.deleteImageCategory(deleteFileName, deleteFileUrl)

        // this.$swal({
        //   // title: '画像削除',
        //   // text: '削除してよろしいでしょうか？',
        //   title: '画像を削除してよろしいでしょうか？',
        //   text: 'この操作は取り消しできません。',
        //   icon: 'warning',
        //   showCancelButton: true,
        //   confirmButtonText: '削除',
        //   cancelButtonText: 'キャンセル',
        //   focusCancel: true
        // }).then((result) => {
        //   if (result.value) {
        //     // DBに保存されている画像削除

        //     const desertRef = storageRef.child(deleteFileName)
        //     // const desertRef = storageRef.child('images/' + deleteFileName)

        //     desertRef
        //       .delete()
        //       .then(() => {
        //         // alert('ファイル削除完了')
        //         vm.toastFileUpdate('ファイル 削除', '完了しました。')
        //         // this.toggleDel = false
        //         this.imageDelete()
        //       })
        //       // eslint-disable-next-line handle-callback-err
        //       .catch((error) => {
        //         // Uh-oh, an error occurred!
        //         alert('ファイル削除 error in deleteImage: ' + error)
        //       })
        //   }
        // })
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
    deleteImageCategory(deleteFileName, deleteFileUrl) {
      const vm = this

      const tempPages = this.dbCategorys
      // console.log('tempPages: ', tempPages)
      const myResult = tempPages.find((item) => item.category.tab1Url === deleteFileUrl)
      // console.log('myResult: ', myResult)

      if (typeof myResult === 'undefined') {
        // 画像ファイル: 未使用
        // console.log('2----------myResult in category = undefined')

        this.$swal({
          // title: '画像削除',
          // text: '削除してよろしいでしょうか？',
          title: '画像を削除してよろしいでしょうか？',
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

    //       desertRef
    //         .delete()
    //         .then(() => {
    //           // alert('ファイル削除完了')
    //           vm.toastFileUpdate('ファイル 削除', '完了しました。')
    //           // this.showDel = false
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
    todaySet4() {
      const myNow = new Date()

      const YYYY = myNow.getFullYear()

      // .getMonth()は 0 〜 11 のため +1 すること
      let MM = myNow.getMonth() + 1
      if (MM < 10) {
        MM = '0' + MM
      }

      // let DD = myNow.getDate()
      // if (DD < 10) {
      //   DD = '0' + DD
      // }

      // const YYYYMMDD = String(YYYY) + '-' + String(MM) + '-' + String(DD)
      const YYYYMMDD = String(YYYY) + '-' + String(MM)
      return YYYYMMDD
    },
  },
}
</script>

<style scoped>
.float-cb {
  clear: both;
}
del {
  color: rgba(255, 0, 0, 1);
}
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
/* span {
  white-space: pre-wrap;
} */
/* p {
  white-space: pre-wrap;
} */

/* 大デバイス（デスクトップ, 1200px 未満） */
@media (min-width: 992px) {
  .myAboutTitle {
    font-size: 1.6rem;
  }
}
/* 中デバイス（タブレット, 992px 未満） */
@media (max-width: 991.98px) {
  .myAboutTitle {
    font-size: 1.4rem;
  }
}
/* 小デバイス（横向きモバイル, 768px 未満） */
@media (max-width: 767.98px) {
  .myAboutTitle {
    font-size: 1.2rem;
  }
}
/* @include media-breakpoint-up(sm) { */
/* 極小デバイス（縦向きモバイル, 576px 未満） */
@media (max-width: 575.98px) {
  .myAboutTitle {
    font-size: 1.2rem;
  }
}
</style>
