<template>
  <div class="container-fluid no-gutters">
    <h5 class="text-light text-center m-0 mb-2 p-2" :style="myCommon.buttonColorBasicSet">{{ pageName }}</h5>
    <!-- <b-button :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" class="m-2" @click="test1()">test1</b-button> -->

    <!-- ＝＝＝＝ レイアウト type:0 の時 start ＝＝＝＝＝＝＝＝＝ -->
    <div v-if="pageInfo.layout.type === 0" class="row no-gutters">
      <div v-for="(dbPage, index) in dbPages" :key="dbPage.id" :class="pageInfo.layout.retsuData[pageInfo.layout.retsuSuu]">
        <div class="card no-gutters m-1">
          <div v-b-modal="'data-' + index">
            <!-- タイトル ＆ 日付 -->
            <div class="px-1 d-flex justify-content-between align-items-center" style="background-color: honeydew">
              <h5 class="m-0 p-0">{{ dbPage.page.titleName }}</h5>
              <p :hidden="pageInfo.items.hiddenDate" class="m-0 p-0">{{ dbPage.page.mainDate }}</p>
            </div>

            <div class="m-0 p-0 border">
              <!-- +++++++ 画像等のファイル表示 start -->
              <div v-if="dbPage.page.displayType === 'image'" class="m-0 p-0">
                <b-embed :src="dbPage.page.fileUrlSmall" class="m-0" type="embed" alt="file" fluid />
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

              <!-- 1行目 -->
              <div class="row m-0 p-0">
                <p :hidden="pageInfo.items.hiddenText1" class="col-4 m-0 p-0 px-1">{{ pageInfo.items.text1name }}</p>
                <p :hidden="pageInfo.items.hiddenText1" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text1 }}</p>
              </div>

              <!-- 2行目 -->
              <div class="row m-0 p-0">
                <p :hidden="pageInfo.items.hiddenText2" class="col-4 m-0 p-0 px-1">{{ pageInfo.items.text2name }}</p>
                <p :hidden="pageInfo.items.hiddenText2" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text2 }}</p>
              </div>

              <!-- 3行目 -->
              <div class="row m-0 p-0">
                <p :hidden="pageInfo.items.hiddenText3" class="col-4 m-0 p-0 px-1">{{ pageInfo.items.text3name }}</p>
                <p :hidden="pageInfo.items.hiddenText3" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text3 }}</p>
              </div>
            </div>

            <!-- 本文表示 mainText (長文) -->
            <div class="m-0 p-0 p-0 text-wrap card-body" style="background-color: whitesmoke">
              <p :hidden="pageInfo.items.hiddenMainText" class="m-0 p-0 pl-1 text-justify text-break overflow-auto bg-a13-linen" style="overflow-wrap: break-word; max-height: 62px; white-space: pre-wrap">{{ dbPage.page.mainText }}</p>
            </div>
          </div>

          <!-- <div class="m-0 p-0 col-12"> -->
          <div class="m-0 p-0">
            <!-- ボタン start -->
            <div class="d-flex justify-content-between align-items-center">
              <!-- 拡大ボタン -->
              <div v-b-modal="'data-' + index">
                <!-- <b-button :hidden="pageInfo.items.hiddenBtn" :size="myCommon.selectedBtnSize" class="px-1 py-0 m-1 ml-2 mb-1 float-center text-body" style="background-color: honeydew">{{ pageInfo.items.btnName }}</b-button> -->
                <b-button :hidden="pageInfo.items.hiddenBtn" :size="myCommon.selectedBtnSize" class="m-0 ml-1 my-1 p-0 px-1 text-body" style="background-color: honeydew">{{ pageInfo.items.btnName }}</b-button>
              </div>

              <!-- Linkボタン -->
              <div v-if="dbPage.page.myLink" class="m-0 p-0">
                <!-- <b-button :hidden="pageInfo.items.hiddenLink" :to="dbPage.page.myLink" :size="myCommon.selectedBtnSize" class="px-1 py-0 m-1 ml-2 mb-1 float-center text-body" style="background-color: honeydew">{{ pageInfo.items.linkName }}</b-button> -->
                <b-button :hidden="pageInfo.items.hiddenLink" :to="dbPage.page.myLink" :size="myCommon.selectedBtnSize" class="m-0 my-1 p-0 px-1 text-body" style="background-color: honeydew">{{ pageInfo.items.linkName }}</b-button>
              </div>

              <!-- 新しいページに Google Doc Viewer で表示 -->
              <b-button :hidden="pageInfo.items.hiddenNewTab" :size="myCommon.selectedBtnSize" class="m-0 my-1 p-0 px-1 text-body" style="background-color: honeydew" @click="openNewTab(dbPage.page.fileUrl, dbPage.page.displayType)">{{ pageInfo.items.newTab }}</b-button>

              <!-- 端末(PC等)へダウンロード -->
              <!-- <b-button :hidden="pageInfo.items.hiddenDownload" :size="myCommon.selectedBtnSize" class="px-1 py-0 m-1 text-body" style="background-color: honeydew" @click="downloadFile(dbPage)">{{ pageInfo.items.download }}</b-button> -->
              <b-button :hidden="pageInfo.items.hiddenDownload" :size="myCommon.selectedBtnSize" class="m-0 mr-1 my-1 p-0 px-1 text-body" style="background-color: honeydew" @click="downloadFile(dbPage)">{{ pageInfo.items.download }}</b-button>
            </div>
            <!-- ボタン end -->
          </div>
        </div>

        <!-- 。。。。。。。。。。。 モーダル表示 start 。。。。。。。。。。。 -->
        <b-modal :id="'data-' + index" hide-header size="xl">
          <!-- タイトル表示 -->
          <div class="border m-1 mt-3 p-2 d-flex justify-content-between" style="background-color: honeydew">
            <h5 class="m-0 px-1">{{ dbPage.page.titleName }}</h5>
            <p :hidden="pageInfo.items.hiddenDate" class="m-0 pl-2 pr-2">{{ dbPage.page.mainDate }}</p>
          </div>

          <!-- 画像表示 -->
          <!-- <b-embed type="embed" :src="dbPage.page.fileUrl" class="m-0" alt="file"></b-embed> -->
          <!-- <b-img :src="dbPage.page.fileUrl" fluid alt="Responsive image"></b-img> -->
          <!-- <b-embed :src="dbPage.page.fileUrl" class="m-0" type="embed" alt="file" fluid /> -->
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
            <!-- 本文表示 text1,2,3 -->
            <div class="row m-0 p-0">
              <h5 :hidden="pageInfo.items.hiddenText1" class="col-4 m-0 p-0 px-1">{{ pageInfo.items.text1name }}</h5>
              <h5 :hidden="pageInfo.items.hiddenText1" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text1 }}</h5>
            </div>

            <div class="row m-0 p-0">
              <h5 :hidden="pageInfo.items.hiddenText2" class="col-4 m-0 p-0 px-1">{{ pageInfo.items.text2name }}</h5>
              <h5 :hidden="pageInfo.items.hiddenText2" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text2 }}</h5>
            </div>

            <div class="row m-0 p-0">
              <h5 :hidden="pageInfo.items.hiddenText3" class="col-4 m-0 p-0 px-1">{{ pageInfo.items.text3name }}</h5>
              <h5 :hidden="pageInfo.items.hiddenText3" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text3 }}</h5>
            </div>

            <!-- 本文表示 mainText (長文) -->
            <h5 :hidden="pageInfo.items.hiddenMainText" class="text-justify text-break m-0 p-2 bg-a13-linen" style="white-space: pre-wrap">{{ dbPage.page.mainText }}</h5>
          </div>
          <template #modal-footer>
            <div class="w-100">
              <b-button variant="outline-secondary" size="sm" class="float-right" @click="$bvModal.hide('data-' + index)"> 閉じる </b-button>
            </div>
          </template>
        </b-modal>
        <!-- 。。。。。。。。。。。 モーダル表示 end 。。。。。。。。。。。 -->
      </div>
    </div>
    <!-- ＝＝＝＝ レイアウト type:0 の時 start =================== -->

    <!-- ＝＝＝＝ レイアウト type:1 の時 start =================== -->
    <div v-else class="row no-gutters">
      <div v-for="(dbPage, index) in dbPages" :key="dbPage.id" :class="pageInfo.layout.retsuData[pageInfo.layout.retsuSuu]">
        <div class="card no-gutters m-1">
          <div v-b-modal="'data-' + index">
            <!-- タイトル ＆ 日付 -->
            <div class="px-1 d-flex justify-content-between align-items-center" style="background-color: honeydew">
              <h5 class="m-0 p-0">{{ dbPage.page.titleName }}</h5>
              <p :hidden="pageInfo.items.hiddenDate" class="m-0 p-0">{{ dbPage.page.mainDate }}</p>
            </div>

            <div class="row m-0 p-0">
              <div class="m-0 p-0 border col-md-5 col-sm-6">
                <!-- +++++++ 画像等のファイル表示 start -->
                <div v-if="dbPage.page.displayType === 'image'" class="m-0 p-0">
                  <b-embed :src="dbPage.page.fileUrlSmall" class="m-0" type="embed" alt="file" fluid />
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

                <!-- 1行目 -->
                <div class="row m-0 p-0">
                  <p :hidden="pageInfo.items.hiddenText1" class="col-4 m-0 p-0 px-1">{{ pageInfo.items.text1name }}</p>
                  <p :hidden="pageInfo.items.hiddenText1" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text1 }}</p>
                </div>

                <!-- 2行目 -->
                <div class="row m-0 p-0">
                  <p :hidden="pageInfo.items.hiddenText2" class="col-4 m-0 p-0 px-1">{{ pageInfo.items.text2name }}</p>
                  <p :hidden="pageInfo.items.hiddenText2" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text2 }}</p>
                </div>

                <!-- 3行目 -->
                <div class="row m-0 p-0">
                  <p :hidden="pageInfo.items.hiddenText3" class="col-4 m-0 p-0 px-1">{{ pageInfo.items.text3name }}</p>
                  <p :hidden="pageInfo.items.hiddenText3" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text3 }}</p>
                </div>
              </div>

              <!-- 本文表示 mainText (長文) -->
              <div class="m-0 p-0 col-md-7 col-sm-6 p-0 text-wrap card-body" style="background-color: whitesmoke">
                <p :hidden="pageInfo.items.hiddenMainText" class="text-justify text-break m-0 p-2 bg-a13-linen" style="overflow-wrap: break-word; max-height: 230px; white-space: pre-wrap">{{ dbPage.page.mainText }}</p>
              </div>
            </div>
          </div>

          <!-- <div class="m-0 p-0 border col-12"> -->
          <!-- <div class="m-0 p-0 col-12"> -->
          <div class="m-0 p-0">
            <!-- ボタン start -->
            <div class="d-flex justify-content-between align-items-center">
              <!-- 拡大ボタン -->
              <div v-b-modal="'data-' + index">
                <b-button :hidden="pageInfo.items.hiddenBtn" :size="myCommon.selectedBtnSize" class="m-0 ml-1 my-1 p-0 px-1 text-body" style="background-color: honeydew">{{ pageInfo.items.btnName }}</b-button>
              </div>

              <!-- Linkボタン -->
              <div v-if="dbPage.page.myLink" class="m-0 p-0">
                <b-button :hidden="pageInfo.items.hiddenLink" :to="dbPage.page.myLink" :size="myCommon.selectedBtnSize" class="m-0 my-1 p-0 px-1 text-body" style="background-color: honeydew">{{ pageInfo.items.linkName }}</b-button>
              </div>

              <!-- 新しいページに Google Doc Viewer で表示 -->
              <b-button :hidden="pageInfo.items.hiddenNewTab" :size="myCommon.selectedBtnSize" class="m-0 my-1 p-0 px-1 text-body" style="background-color: honeydew" @click="openNewTab(dbPage.page.fileUrl, dbPage.page.displayType)">{{ pageInfo.items.newTab }}</b-button>

              <!-- 端末(PC等)へダウンロード -->
              <b-button :hidden="pageInfo.items.hiddenDownload" :size="myCommon.selectedBtnSize" class="m-0 mr-1 my-1 p-0 px-1 text-body" style="background-color: honeydew" @click="downloadFile(dbPage)">{{ pageInfo.items.download }}</b-button>
            </div>
            <!-- ボタン end -->
          </div>
        </div>

        <!-- 。。。。。。。。。。。 モーダル表示 start 。。。。。。。。。。。 -->
        <b-modal :id="'data-' + index" hide-header size="xl">
          <!-- タイトル表示 -->
          <div class="border m-1 mt-3 p-2 d-flex justify-content-between" style="background-color: honeydew">
            <h5 class="m-0 px-1">{{ dbPage.page.titleName }}</h5>
            <p :hidden="pageInfo.items.hiddenDate" class="m-0 pl-2 pr-2">{{ dbPage.page.mainDate }}</p>
          </div>

          <!-- 画像表示 -->
          <!-- <b-embed type="embed" :src="dbPage.page.fileUrl" class="m-0" alt="file"></b-embed> -->
          <!-- <b-img :src="dbPage.page.fileUrl" fluid alt="Responsive image"></b-img> -->
          <!-- <b-embed :src="dbPage.page.fileUrl" class="m-0" type="embed" alt="file" fluid /> -->
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
            <!-- 本文表示 text1,2,3 -->
            <div class="row m-0 p-0">
              <h5 :hidden="pageInfo.items.hiddenText1" class="col-4 m-0 p-0 px-1">{{ pageInfo.items.text1name }}</h5>
              <h5 :hidden="pageInfo.items.hiddenText1" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text1 }}</h5>
            </div>

            <div class="row m-0 p-0">
              <h5 :hidden="pageInfo.items.hiddenText2" class="col-4 m-0 p-0 px-1">{{ pageInfo.items.text2name }}</h5>
              <h5 :hidden="pageInfo.items.hiddenText2" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text2 }}</h5>
            </div>

            <div class="row m-0 p-0">
              <h5 :hidden="pageInfo.items.hiddenText3" class="col-4 m-0 p-0 px-1">{{ pageInfo.items.text3name }}</h5>
              <h5 :hidden="pageInfo.items.hiddenText3" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text3 }}</h5>
            </div>

            <!-- 本文表示 mainText (長文) -->
            <h5 :hidden="pageInfo.items.hiddenMainText" class="text-justify text-break m-0 p-2 bg-a13-linen" style="white-space: pre-wrap">{{ dbPage.page.mainText }}</h5>
          </div>
        </b-modal>
        <!-- 。。。。。。。。。。。 モーダル表示 end 。。。。。。。。。。。 -->
      </div>
    </div>
    <!-- ＝＝＝＝ レイアウト type:1 の時 end ===================== -->
    <!-- </div> -->

    <div v-show="isLogin" class="m-0 p-0">
      <!-- ============================== 管理機能 ============================== -->
      <div class="row no-gutters mt-2 p-2 bg-dark">
        <div class="col-12 d-flex justify-content-between align-items-center">
          <h5 class="mx-1 m-0 p-0 py-1 text-white">以下は管理機能です。</h5>
          <!-- modal 起動ボタン start ***** -->
          <b-button class="m-0 p-1" @click="showModal_pageSet">Page 設定</b-button>
          <!-- modal 起動ボタン end ***** -->
        </div>

        <!--Page設定の modalウィンドウ ********** start -->
        <b-modal id="modal_pageSet" ref="modal_pageSet" title="ページのレイアウト設定" class="m-0 p-0" hide-footer>
          <!-- Default設定のボタン -->
          <b-button class="m-0 p-1" variant="outline-dark" @click="setDefaultToInput">デフォルト設定を以下に反映</b-button>
          <b-button class="m-0 ml-2 p-1" variant="outline-dark" @click="showModal_default">デフォルトの変更</b-button>

          <hr />
          <br />
          <!-- ① の設定 -->
          <p class="my-2">① 以下の項目の「表示/非表示」及び「名称変更」</p>

          <!-- sort & Date -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!pageInfoInput.items.hiddenDate" @change="pageInfoInput.items.hiddenDate = !pageInfoInput.items.hiddenDate" />
            <p class="col-5 m-0 p-0 px-1">年月日（変更不可）</p>
            <span v-if="!pageInfoInput.items.hiddenDate" class="col-6 m-0 p-0 px-1">
              <b-form-input disabled value="年月日" class="border pl-4"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input disabled value="年月日" class="border pl-4"></b-form-input>
            </del>
          </div>

          <!-- text1name -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!pageInfoInput.items.hiddenText1" @change="pageInfoInput.items.hiddenText1 = !pageInfoInput.items.hiddenText1" />
            <p class="col-5 m-0 p-0 px-1">1行目の名前</p>
            <span v-if="!pageInfoInput.items.hiddenText1" class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInput.items.text1name" class="border"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInput.items.text1name" class="border"></b-form-input>
            </del>
          </div>

          <!-- text2name -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!pageInfoInput.items.hiddenText2" @change="pageInfoInput.items.hiddenText2 = !pageInfoInput.items.hiddenText2" />
            <p class="col-5 m-0 p-0 px-1">2行目の名前</p>
            <span v-if="!pageInfoInput.items.hiddenText2" class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInput.items.text2name" class="border"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInput.items.text2name" class="border"></b-form-input>
            </del>
          </div>

          <!-- text3name -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!pageInfoInput.items.hiddenText3" @change="pageInfoInput.items.hiddenText3 = !pageInfoInput.items.hiddenText3" />
            <p class="col-5 m-0 p-0 px-1">3行目の名前</p>
            <span v-if="!pageInfoInput.items.hiddenText3" class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInput.items.text3name" class="border"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInput.items.text3name" class="border"></b-form-input>
            </del>
          </div>

          <!-- 長文 -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!pageInfoInput.items.hiddenMainText" @change="pageInfoInput.items.hiddenMainText = !pageInfoInput.items.hiddenMainText" />
            <p class="col-5 m-0 p-0 px-1">長文（変更不可）</p>
            <span v-if="!pageInfoInput.items.hiddenMainText" class="col-6 m-0 p-0 px-1">
              <b-form-input disabled value="長文" class="border pl-4"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input disabled value="長文" class="border pl-4"></b-form-input>
            </del>
          </div>

          <!-- btnName -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!pageInfoInput.items.hiddenBtn" @change="pageInfoInput.items.hiddenBtn = !pageInfoInput.items.hiddenBtn" />
            <p class="col-5 m-0 p-0 px-1">「拡大」のボタン名</p>
            <span v-if="!pageInfoInput.items.hiddenBtn" class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInput.items.btnName" class="border" required placeholder="<例> 拡大"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInput.items.btnName" class="border" required placeholder="<例> 拡大"></b-form-input>
            </del>
          </div>

          <!-- linkName -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!pageInfoInput.items.hiddenLink" @change="pageInfoInput.items.hiddenLink = !pageInfoInput.items.hiddenLink" />
            <p class="col-5 m-0 p-0 px-1">「リンク」のボタン名</p>
            <span v-if="!pageInfoInput.items.hiddenLink" class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInput.items.linkName" class="border" required placeholder="<例> 関連情報"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInput.items.linkName" class="border" required placeholder="<例> 関連情報"></b-form-input>
            </del>
          </div>

          <!-- Open newTab -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!pageInfoInput.items.hiddenNewTab" @change="pageInfoInput.items.hiddenNewTab = !pageInfoInput.items.hiddenNewTab" />
            <p class="col-5 m-0 p-0 px-1">「画像を拡大」のボタン名</p>
            <span v-if="!pageInfoInput.items.hiddenNewTab" class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInput.items.newTab" class="border" required placeholder="<例> 画像を拡大"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInput.items.newTab" class="border" required placeholder="<例> 画像を拡大"></b-form-input>
            </del>
          </div>

          <!-- Download file -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!pageInfoInput.items.hiddenDownload" @change="pageInfoInput.items.hiddenDownload = !pageInfoInput.items.hiddenDownload" />
            <p class="col-5 m-0 p-0 px-1">「Fileを保存」のボタン名</p>
            <span v-if="!pageInfoInput.items.hiddenDownload" class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInput.items.download" class="border" required placeholder="<例> Fileを保存"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInput.items.download" class="border" required placeholder="<例> Fileを保存"></b-form-input>
            </del>
          </div>

          <!-- ② の設定 -->
          <div class="border m-0 p-2" style="background-color: lightblue">
            <h6 class="m-0 p-0">② 下の画像をクリックして、レイアウトを選択してください。</h6>
            <div class="m-0 p-1 d-flex flex-row align-items-center">
              <p class="m-0 p-0 pr-2">現在の設定：</p>
              <h5>
                <strong class="text-primary">レイアウト{{ pageInfoInput.layout.type + 1 }} </strong>
              </h5>
            </div>

            <div class="row no-gutters">
              <b-button class="col-6 p-1 bg-info" @click="pageInfoInput.layout.type = 0">
                <p class="m-0 p-1">レイアウト1</p>
                <b-embed :src="pageInfoInput.layout.fileUrl[0]" class="m-0" type="embed" alt="file" fluid />
              </b-button>
              <b-button class="col-6 p-1 bg-info" @click="pageInfoInput.layout.type = 1">
                <p class="m-0 p-1">レイアウト2</p>
                <b-embed :src="pageInfoInput.layout.fileUrl[1]" class="m-0" type="embed" alt="file" fluid />
              </b-button>
            </div>
          </div>

          <hr />
          <!-- ③ の設定 -->
          <div class="border m-0 p-2" style="background-color: lightblue">
            <!-- <div class="m-0 p-0 d-flex justify-content-between align-items-center"> -->
            <div class="row m-0 p-0 d-flex flex-row align-items-center">
              <h6 class="col-auto m-0 p-0 pr-3">③ 列数(1〜4)を入力してください</h6>
              <b-form-input v-model="pageInfoInput.layout.retsuSuu" type="number" class="col-2 border"></b-form-input>
            </div>
            <br />
            <p>【参考】 スマホ等の横幅に応じて以下のように列数が変わります。</p>
            <ul>
              <li>設定列数１の場合： 列数１</li>
              <li>設定列数２の場合： 列数１〜２</li>
              <li>設定列数３の場合： 列数１〜３</li>
              <li>設定列数４の場合： 列数２〜４</li>
            </ul>

            <br />

            <dl>
              <dd>スマホの場合は、画面を縦や横に回転すると列数が変わります。</dd>
              <dd>パソコンの場合は、ブラウザの横幅を拡大・縮小すると列数が変わります。</dd>
            </dl>
          </div>

          <!-- 登録、閉じる button start -->
          <div class="modal-footer m-0 mt-2 p-0">
            <b-button class="mt-1" variant="outline-primary" @click="regEachPage">設定</b-button>
            <b-button class="mt-1" variant="outline-dark" @click="$bvModal.hide('modal_pageSet')">閉じる</b-button>
          </div>
          <!-- 登録、閉じる button end -->
        </b-modal>
        <!--Page 設定の modalウィンドウ ********** end -->

        <!--Page Default の modalウィンドウ ********** start -->
        <b-modal id="modal_default" ref="modal_default" hide-footer hide-header>
          <p class="my-2">① 以下の項目の「表示/非表示」及び「名称変更」</p>

          <!-- <div v-if="dbDefault" class="m-0 p-0"> -->
          <!-- <div v-if="pageInfoInputDefault.items !== 'undefined'" class="m-0 p-0"> -->
          <!-- sort & Date -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!pageInfoInputDefault.items.hiddenDate" @change="pageInfoInputDefault.items.hiddenDate = !pageInfoInputDefault.items.hiddenDate" />
            <p class="col-5 m-0 p-0 px-1">年月日（変更不可）</p>
            <span v-if="!pageInfoInputDefault.items.hiddenDate" class="col-6 m-0 p-0 px-1">
              <b-form-input disabled value="年月日" class="border pl-4"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input disabled value="年月日" class="border pl-4"></b-form-input>
            </del>
          </div>

          <!-- text1name -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!pageInfoInputDefault.items.hiddenText1" @change="pageInfoInputDefault.items.hiddenText1 = !pageInfoInputDefault.items.hiddenText1" />
            <p class="col-5 m-0 p-0 px-1">1行目の名前</p>
            <span v-if="!pageInfoInputDefault.items.hiddenText1" class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInputDefault.items.text1name" class="border"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInputDefault.items.text1name" class="border"></b-form-input>
            </del>
          </div>

          <!-- text2name -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!pageInfoInputDefault.items.hiddenText2" @change="pageInfoInputDefault.items.hiddenText2 = !pageInfoInputDefault.items.hiddenText2" />
            <p class="col-5 m-0 p-0 px-1">2行目の名前</p>
            <span v-if="!pageInfoInputDefault.items.hiddenText2" class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInputDefault.items.text2name" class="border"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInputDefault.items.text2name" class="border"></b-form-input>
            </del>
          </div>

          <!-- text3name -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!pageInfoInputDefault.items.hiddenText3" @change="pageInfoInputDefault.items.hiddenText3 = !pageInfoInputDefault.items.hiddenText3" />
            <p class="col-5 m-0 p-0 px-1">3行目の名前</p>
            <span v-if="!pageInfoInputDefault.items.hiddenText3" class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInputDefault.items.text3name" class="border"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInputDefault.items.text3name" class="border"></b-form-input>
            </del>
          </div>

          <!-- 長文 -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!pageInfoInputDefault.items.hiddenMainText" @change="pageInfoInputDefault.items.hiddenMainText = !pageInfoInputDefault.items.hiddenMainText" />
            <p class="col-5 m-0 p-0 px-1">長文（変更不可）</p>
            <span v-if="!pageInfoInputDefault.items.hiddenMainText" class="col-6 m-0 p-0 px-1">
              <b-form-input disabled value="長文" class="border pl-4"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input disabled value="長文" class="border pl-4"></b-form-input>
            </del>
          </div>

          <!-- btnName -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!pageInfoInputDefault.items.hiddenBtn" @change="pageInfoInputDefault.items.hiddenBtn = !pageInfoInputDefault.items.hiddenBtn" />
            <p class="col-5 m-0 p-0 px-1">「拡大」のボタン名</p>
            <span v-if="!pageInfoInputDefault.items.hiddenBtn" class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInputDefault.items.btnName" class="border" required placeholder="<例> 拡大"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInputDefault.items.btnName" class="border" required placeholder="<例> 拡大"></b-form-input>
            </del>
          </div>

          <!-- linkName -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!pageInfoInputDefault.items.hiddenLink" @change="pageInfoInputDefault.items.hiddenLink = !pageInfoInputDefault.items.hiddenLink" />
            <p class="col-5 m-0 p-0 px-1">「リンク」のボタン名</p>
            <span v-if="!pageInfoInputDefault.items.hiddenLink" class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInputDefault.items.linkName" class="border" required placeholder="<例> 関連情報"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInputDefault.items.linkName" class="border" required placeholder="<例> 関連情報"></b-form-input>
            </del>
          </div>

          <!-- Open newTab -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!pageInfoInputDefault.items.hiddenNewTab" @change="pageInfoInputDefault.items.hiddenNewTab = !pageInfoInputDefault.items.hiddenNewTab" />
            <p class="col-5 m-0 p-0 px-1">「画像を拡大」のボタン名</p>
            <span v-if="!pageInfoInputDefault.items.hiddenNewTab" class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInputDefault.items.newTab" class="border" required placeholder="<例> 画像を拡大"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInputDefault.items.newTab" class="border" required placeholder="<例> 画像を拡大"></b-form-input>
            </del>
          </div>

          <!-- Download file -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!pageInfoInputDefault.items.hiddenDownload" @change="pageInfoInputDefault.items.hiddenDownload = !pageInfoInputDefault.items.hiddenDownload" />
            <p class="col-5 m-0 p-0 px-1">「Fileを保存」のボタン名</p>
            <span v-if="!pageInfoInputDefault.items.hiddenDownload" class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInputDefault.items.download" class="border" required placeholder="<例> Fileを保存"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="pageInfoInputDefault.items.download" class="border" required placeholder="<例> Fileを保存"></b-form-input>
            </del>
          </div>

          <!-- ② の設定 -->
          <div class="border m-0 p-2" style="background-color: lightblue">
            <h6 class="m-0 p-0">② 下の画像をクリックして、レイアウトを選択してください。</h6>
            <div class="m-0 p-1 d-flex flex-row align-items-center">
              <p class="m-0 p-0 pr-2">現在の設定：</p>
              <h5>
                <strong class="text-primary">レイアウト{{ pageInfoInputDefault.layout.type + 1 }} </strong>
              </h5>
            </div>

            <div class="row no-gutters">
              <!-- <b-button class="col-6 p-1 bg-info" @click="selEachPage(0)"> -->
              <b-button class="col-6 p-1 bg-info" @click="pageInfoInputDefault.layout.type = 0">
                <p class="m-0 p-1">レイアウト1</p>
                <b-embed :src="pageInfoInputDefault.layout.fileUrl[0]" class="m-0" type="embed" alt="file" fluid />
              </b-button>
              <!-- <b-button class="col-6 p-1 bg-info" @click="selEachPage(1)"> -->
              <b-button class="col-6 p-1 bg-info" @click="pageInfoInputDefault.layout.type = 1">
                <p class="m-0 p-1">レイアウト2</p>
                <b-embed :src="pageInfoInputDefault.layout.fileUrl[1]" class="m-0" type="embed" alt="file" fluid />
              </b-button>
            </div>
          </div>

          <hr />
          <!-- ③ の設定 -->
          <div class="border m-0 p-2" style="background-color: lightblue">
            <!-- <div class="m-0 p-0 d-flex justify-content-between align-items-center"> -->
            <div class="row m-0 p-0 d-flex flex-row align-items-center">
              <h6 class="col-auto m-0 p-0 pr-3">③ 列数(1〜4)を入力してください</h6>
              <b-form-input v-model="pageInfoInputDefault.layout.retsuSuu" type="number" class="col-2 border"></b-form-input>
            </div>
            <br />
            <p>【参考】 スマホ等の横幅に応じて以下のように列数が変わります。</p>
            <ul>
              <li>設定列数１の場合： 列数１</li>
              <li>設定列数２の場合： 列数１〜２</li>
              <li>設定列数３の場合： 列数１〜３</li>
              <li>設定列数４の場合： 列数２〜４</li>
            </ul>

            <br />

            <dl>
              <dd>スマホの場合は、画面を縦や横に回転すると列数が変わります。</dd>
              <dd>パソコンの場合は、ブラウザの横幅を拡大・縮小すると列数が変わります。</dd>
            </dl>
          </div>

          <!-- 登録、閉じる button start -->
          <div class="modal-footer m-0 mt-2 p-0">
            <b-button class="mt-1" variant="outline-primary" @click="regDefault">登録</b-button>
            <b-button class="mt-1" variant="outline-dark" @click="$bvModal.hide('modal_default')">閉じる</b-button>
          </div>
          <!-- button end -->
          <!-- </div> -->
        </b-modal>
        <!--Page Default の modalウィンドウ ********** end -->

        <!-- 現在の登録状況 ＆ 削除 start -->
        <div class="col-12 m-0 mt-2 p-0" style="background-color: lightsteelblue">
          <h5 class="mx-2 mb-0 p-0 pt-1">現在の登録状況 ＆ 削除</h5>
          <p class="mx-2 mb-0 p-0">「日付」が新しい順にソートされます。</p>

          <div class="row no-gutters">
            <div v-for="dbPage in dbPages" :key="dbPage.id" class="col-4">
              <div class="m-1 mt-2 border">
                <div class="px-1 d-flex justify-content-between align-items-center">
                  <p class="m-0 p-0 pl-1">{{ dbPage.page.titleName }}</p>
                  <p class="m-0 p-0 pl-1">{{ dbPage.page.mainDate }}</p>
                </div>

                <!-- 画像 -->
                <!-- <b-embed :src="dbPage.page.fileUrl" fluid class="m-0" type="embed" alt="file" /> -->
                <!-- +++++++ 画像等のファイル表示 start -->
                <p class="m-0 p-1">ファイル名：&nbsp; {{ dbPage.page.fileName }}</p>
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

                <!-- text1,2,3 -->
                <div class="row m-0 p-0">
                  <p :hidden="pageInfo.items.hiddenText1" class="col-4 m-0 p-0 px-1">{{ pageInfo.items.text1name }}</p>
                  <p :hidden="pageInfo.items.hiddenText1" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text1 }}</p>
                </div>

                <div class="row m-0 p-0">
                  <p :hidden="pageInfo.items.hiddenText2" class="col-4 m-0 p-0 px-1">{{ pageInfo.items.text2name }}</p>
                  <p :hidden="pageInfo.items.hiddenText2" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text2 }}</p>
                </div>

                <div class="row m-0 p-0">
                  <p :hidden="pageInfo.items.hiddenText3" class="col-4 m-0 p-0 px-1">{{ pageInfo.items.text3name }}</p>
                  <p :hidden="pageInfo.items.hiddenText3" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text3 }}</p>
                </div>

                <!-- 本文表示 mainText -->
                <p :hidden="pageInfo.items.hiddenMainText" class="m-0 p-0 pl-1 text-break overflow-auto" style="overflow-wrap: break-word; max-height: 62px; background-color: linen">{{ dbPage.page.mainText }}</p>
                <b-button href="#scrollEdit" :size="myCommon.selectedBtnSize" class="px-1 py-0 m-1 float-left" variant="primary" @click="edit(dbPage.id)">編集</b-button>
                <b-button :size="myCommon.selectedBtnSize" class="px-1 py-0 m-1" @click="remove(dbPage.id)">削除</b-button>
              </div>
            </div>
          </div>
        </div>

        <!-- =========== 新規登録 start -->
        <div v-show="showReg" class="col-12 m-0 p-0">
          <div class="m-0 p-0 mt-2" style="background-color: lightblue">
            <h4 class="mx-2 mb-0 p-0 pt-1">新規登録</h4>
            <b-form @submit="onSubmit" @reset="onReset">
              <b-button :size="myCommon.selectedBtnSize" type="submit" variant="primary" class="m-1 ml-2 px-1 py-0">登録</b-button>
              <b-button :size="myCommon.selectedBtnSize" type="reset" variant="dark" class="m-1 px-1 py-0">リセット</b-button>

              <!-- タイトル -->
              <div class="row p-0 pt-2 m-0 mr-2">
                <b-form-group label="タイトル(必須)" class="col-sm-3 m-0 mt-1 p-0 px-1" />
                <div class="col-sm-9 m-0 p-0">
                  <b-form-input v-model="page.titleName" class="border" required placeholder="入力しないと登録できません。" />
                </div>
              </div>

              <!-- 日付 & Sort -->
              <div class="row p-0 pt-2 m-0 mr-2">
                <b-form-group label="日付(必須)" class="col-3 m-0 px-1 pt-2"> </b-form-group>
                <div class="col-9 m-0 p-0">
                  <b-form-datepicker v-model="page.mainDate" class="mb-1"></b-form-datepicker>
                </div>
              </div>
            </b-form>

            <!-- 短文1 -->
            <div class="row p-0 pt-2 m-0 mr-2">
              <b-form-group :hidden="pageInfo.items.hiddenText1" class="col-3 m-0 px-1 pt-2">{{ pageInfo.items.text1name }}</b-form-group>
              <div class="col-9 m-0 p-0">
                <b-form-input v-model="page.text1" :hidden="pageInfo.items.hiddenText1" class="border" required placeholder="空欄でもOK" />
              </div>
            </div>

            <!-- 短文2 -->
            <div class="row p-0 pt-2 m-0 mr-2">
              <b-form-group :hidden="pageInfo.items.hiddenText2" class="col-3 m-0 px-1 pt-2">{{ pageInfo.items.text2name }}</b-form-group>
              <div class="col-9 m-0 p-0">
                <b-form-input v-model="page.text2" :hidden="pageInfo.items.hiddenText2" class="border" required placeholder="空欄でもOK" />
              </div>
            </div>

            <!-- 短文3 -->
            <div class="row p-0 pt-2 m-0 mr-2">
              <b-form-group :hidden="pageInfo.items.hiddenText3" class="col-3 m-0 px-1 pt-2">{{ pageInfo.items.text3name }}</b-form-group>
              <div class="col-9 m-0 p-0">
                <b-form-input v-model="page.text3" :hidden="pageInfo.items.hiddenText3" class="border" required placeholder="空欄でもOK" />
              </div>
            </div>

            <!-- 本文登録（必須ではない） -->
            <div class="row p-0 pt-2 m-0 mr-1">
              <span :hidden="pageInfo.items.hiddenMainText" class="col-3 m-0 mt-2 p-1 pt-3">長文</span>
              <b-form-textarea v-model="page.mainText" :hidden="pageInfo.items.hiddenMainText" class="col-9" required placeholder="空欄でもOK。 入力した内容は画像クリックで閲覧できます。" rows="3" max-rows="6"></b-form-textarea>
            </div>

            <!-- 詳細情報へのリンク登録（必須ではない） -->
            <div v-show="!pageInfo.items.hiddenLink" class="row p-0 pt-2 m-0 mr-2">
              <div class="col-3 m-0 px-1 pt-2">リンク先:</div>
              <div class="col-9 m-0 p-0">
                <b-form-input v-model="page.myLink" class="border" required placeholder="関連情報へのジャンプ先を入力  <例> /a41" />
              </div>
            </div>

            <hr />

            <!-- ファイル添付 start-->
            <div class="mx-2 pb-2">
              <p class="mb-0">ファイルを添付する場合は、「ファイル添付」ボタンをクリックしてください。</p>
              <button :size="myCommon.selectedBtnSize" class="ml-2" @click="fileListDisp()">ファイル添付</button>
              <button :size="myCommon.selectedBtnSize" class="ml-2" @click="noAttachments()">添付しない</button>
            </div>

            <!-- <b-modal id="regNewFileId" hide-footer @cancel="regCancelBtn"> -->
            <!-- <b-modal id="regNewFileId" hide-footer>
              <input ref="input" type="file" accept="*.*" @change="fileSel($event)" />
              <br />
            </b-modal> -->

            <!-- <b-modal id="regSelectedFileId" title="画像登録" @cancel="regCancelBtn" @ok="regOkBtn">
              <div class="d-block text-center">
                <h5>登録してよろしいでしょうか？</h5>
              </div>
            </b-modal> -->

            <div v-show="toggleShow">
              <div class="m-2">下の画像から選択してください。</div>
              <div class="m-2">
                <strong>{{ selectedFile }}</strong>
              </div>

              <div class="row no-gutters">
                <b-form-group v-for="(myFile, index2) in myFiles" :key="myFile.id" class="col-4">
                  <div class="image_box border m-1 p-0 pt-1" style="background-color: whitesmoke" @click="selImage(myFile, index2)">
                    <span class="m-1 p-0">{{ myFile.fileName }}</span>
                    <!-- +++++++ 画像等のファイル表示 start -->
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
                    <!-- +++++++ 画像等のファイル表示 end -->
                    <b-form-radio v-model="selected" :value="++index2" class="positionRadioBtn ml-0 p-0"> </b-form-radio>

                    <!-- 削除ボタン -->
                    <b-button :size="myCommon.selectedBtnSize" class="m-1 ml-2 px-1 py-0" @click="deleteFile(myFile.id, myFile.fileName, myFile.customMetadata.fileUrl)">削除</b-button>
                  </div>
                </b-form-group>
              </div>

              <b-button :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" class="m-2" @click="regNewFile()">ファイル新規登録</b-button>
            </div>
            <!-- 画像添付 end -->
          </div>
        </div>
        <!-- 新規登録 End -->

        <!-- =========== 編集 start -->
        <div v-show="showEdit" class="col-12 m-0 p-0">
          <div class="m-0 p-0 mt-2" style="background-color: linen">
            <div class="d-flex flex-low">
              <h4 id="scrollEdit" class="mx-2 my-0 p-0 pt-1">編集</h4>
              <b-button :size="myCommon.selectedBtnSize" variant="dark" class="m-1 px-1 py-0" @click="editCancel()">編集取消</b-button>
            </div>
            <b-form @submit="onSubmitEdit" @reset="onReset">
              <b-button :size="myCommon.selectedBtnSize" type="submit" variant="primary" class="m-1 ml-2 px-1 py-0">登録</b-button>
              <b-button :size="myCommon.selectedBtnSize" variant="dark" class="m-1 px-1 py-0" @click="dataReset()">データリセット</b-button>

              <!-- タイトル -->
              <div class="row p-0 pt-2 m-0 mr-2">
                <b-form-group label="タイトル(必須)" class="col-sm-3 m-0 mt-1 p-0 px-1" />
                <div class="col-sm-9 m-0 p-0">
                  <b-form-input v-model="page.titleName" class="border" required placeholder="入力しないと登録できません。" />
                </div>
              </div>

              <!-- 日付 & Sort -->
              <div class="row p-0 pt-2 m-0 mr-2">
                <b-form-group label="日付(必須)" class="col-3 m-0 px-1 pt-2"> </b-form-group>
                <div class="col-9 m-0 p-0">
                  <b-form-datepicker v-model="page.mainDate" class="mb-1"></b-form-datepicker>
                </div>
              </div>
            </b-form>

            <!-- 短文1 -->
            <div class="row p-0 pt-2 m-0 mr-2">
              <b-form-group :hidden="pageInfo.items.hiddenText1" class="col-3 m-0 px-1 pt-2">{{ pageInfo.items.text1name }}</b-form-group>
              <div class="col-9 m-0 p-0">
                <b-form-input v-model="page.text1" :hidden="pageInfo.items.hiddenText1" class="border" required placeholder="空欄でもOK" />
              </div>
            </div>

            <!-- 短文2 -->
            <div class="row p-0 pt-2 m-0 mr-2">
              <b-form-group :hidden="pageInfo.items.hiddenText2" class="col-3 m-0 px-1 pt-2">{{ pageInfo.items.text2name }}</b-form-group>
              <div class="col-9 m-0 p-0">
                <b-form-input v-model="page.text2" :hidden="pageInfo.items.hiddenText2" class="border" required placeholder="空欄でもOK" />
              </div>
            </div>

            <!-- 短文3 -->
            <div class="row p-0 pt-2 m-0 mr-2">
              <b-form-group :hidden="pageInfo.items.hiddenText3" class="col-3 m-0 px-1 pt-2">{{ pageInfo.items.text3name }}</b-form-group>
              <div class="col-9 m-0 p-0">
                <b-form-input v-model="page.text3" :hidden="pageInfo.items.hiddenText3" class="border" required placeholder="空欄でもOK" />
              </div>
            </div>

            <!-- 本文登録（必須ではない） -->
            <div class="row p-0 pt-2 m-0 mr-1">
              <span :hidden="pageInfo.items.hiddenMainText" class="col-3 m-0 mt-2 p-1 pt-3">長文</span>
              <b-form-textarea v-model="page.mainText" :hidden="pageInfo.items.hiddenMainText" class="col-9" required placeholder="空欄でもOK。 入力した内容は画像クリックで閲覧できます。" rows="3" max-rows="6"></b-form-textarea>
            </div>

            <!-- 詳細情報へのリンク登録（必須ではない） -->
            <div v-show="!pageInfo.items.hiddenLink" class="row p-0 pt-2 m-0 mr-2">
              <div class="col-3 m-0 px-1 pt-2">リンク先:</div>
              <div class="col-9 m-0 p-0">
                <b-form-input v-model="page.myLink" class="border" required placeholder="関連情報へのジャンプ先を入力  <例> /a41" />
              </div>
            </div>

            <hr />

            <!-- ファイル添付 start-->
            <div class="mx-2 pb-2">
              <p class="mb-0">ファイルを変更する場合は、「ファイル変更」ボタンをクリックしてください。</p>
              <button :size="myCommon.selectedBtnSize" class="ml-2" @click="fileListDisp()">ファイル変更</button>
              <button :size="myCommon.selectedBtnSize" class="ml-2" @click="imageTorikesi()">変更取消</button>
              <button :size="myCommon.selectedBtnSize" class="ml-2" @click="noAttachments()">添付しない</button>
            </div>

            <!-- <b-modal id="regNewFileId" hide-footer @cancel="regCancelBtn"> -->
            <b-modal id="regNewFileId" hide-footer>
              <input ref="input" type="file" accept="*.*" @change="fileSel($event)" />
              <br />
            </b-modal>

            <b-modal id="regSelectedFileId" title="画像登録" @cancel="regCancelBtn" @ok="regOkBtn">
              <div class="d-block text-center">
                <h5>登録してよろしいでしょうか？</h5>
              </div>
            </b-modal>

            <div v-show="toggleShow">
              <div class="m-2">下の画像から選択してください。</div>
              <div class="m-2">
                <strong>{{ selectedFile }}</strong>
              </div>

              <div class="row no-gutters">
                <b-form-group v-for="(myFile, index2) in myFiles" :key="myFile.id" class="col-4">
                  <div class="image_box border m-1 p-0 pt-1" style="background-color: whitesmoke" @click="selImage(myFile, index2)">
                    <span class="m-1 p-0">{{ myFile.fileName }}</span>
                    <!-- +++++++ 画像等のファイル表示 start -->
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
                    <!-- +++++++ 画像等のファイル表示 end -->
                    <b-form-radio v-model="selected" :value="++index2" class="positionRadioBtn ml-0 p-0"> </b-form-radio>

                    <!-- 削除ボタン -->
                    <b-button :size="myCommon.selectedBtnSize" class="m-1 ml-2 px-1 py-0" @click="deleteFile(myFile.id, myFile.fileName, myFile.customMetadata.fileUrl)">削除</b-button>
                  </div>
                </b-form-group>
              </div>

              <b-button :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" class="m-2" @click="regNewFile()">ファイル新規登録</b-button>
            </div>
            <!-- 画像添付 end -->
          </div>
        </div>
        <!-- 編集 End -->
      </div>
    </div>
    <p>{{ todaySet() }}</p>
    <p>{{ myDataSet() }}</p>
    <!-- <p>{{ test1() }}</p> -->
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
  // asyncData の結果は data とマージされる
  // また、Pageがロードされる時、およびサーバサイドレンダリング時に呼び出される
  // また、this を経由してアクセスしてはいけません。
  // asyncData(context) {
  //   return {
  //     myFiles: []
  //   }
  // },
  data() {
    return {
      templateNo: 'general' + this.$route.params.general,
      pageName: '',
      todaySetFlg: false,
      showEdit: false,
      showReg: true,
      editId: '',
      // myMenu: {},
      myCommon: {},

      selected: '',
      selectedFile: '選択されていません。',

      // myStore 用 start
      myIndex: {
        indexGroup: -1,
        indexPage: 0,
        pageTemplate: 'home',
        pageNo: 0,
      },
      // myStore 用 end

      // page Info 用 start
      pageInfo: {
        items: {
          hiddenDate: false,
          hiddenText1: false,
          hiddenText2: false,
          hiddenText3: false,
          hiddenMainText: false,
          hiddenBtn: false,
          hiddenLink: false,
          hiddenNewTab: false,
          hiddenDownload: false,
          text1name: '価格',
          text2name: '生年月日',
          text3name: '性別',
          btnName: '拡大',
          linkName: '関連情報',
          newTab: '画像を拡大',
          download: 'Fileを保存',
        },

        layout: {
          retsuSuu: 3,
          retsuData: ['col-12', 'col-12', 'col-md-6', 'col-sm-6 col-md-4', 'col-sm-4 col-md-3 col-lg-2'],
          type: 0,
          fileUrl: ['https://firebasestorage.googleapis.com/v0/b/yoshimine-dev.appspot.com/o/layout%2Flayout-b1.png?alt=media&token=5b60e7ae-ea46-488f-9efd-477d473504ea', 'https://firebasestorage.googleapis.com/v0/b/yoshimine-dev.appspot.com/o/layout%2Flayout-b2.png?alt=media&token=c1baf4b8-b4d5-429d-84c1-308fa83b5f2d'],
        },
      },

      pageInfoInput: {},
      pageInfoInputDefault: {},
      // page Info 用 end

      // 削除予定 end
      // items: {
      //   hiddenDate: false,
      //   hiddenText1: false,
      //   hiddenText2: false,
      //   hiddenText3: false,
      //   hiddenMainText: false,
      //   hiddenBtn: false,
      //   hiddenLink: false,
      //   hiddenNewTab: false,
      //   hiddenDownload: false,
      //   text1name: '価格',
      //   text2name: '生年月日',
      //   text3name: '性別',
      //   btnName: '拡大',
      //   linkName: '関連情報',
      //   newTab: '画像を拡大',
      //   download: 'Fileを保存',
      // },

      // layout: {
      //   retsuSuu: 3,
      //   retsuData: ['col-12', 'col-12', 'col-md-6', 'col-sm-6 col-md-4', 'col-sm-4 col-md-3 col-lg-2'],
      //   type: 0,
      //   fileUrl: ['https://firebasestorage.googleapis.com/v0/b/yoshimine-dev.appspot.com/o/layout%2Flayout-b1.png?alt=media&token=5b60e7ae-ea46-488f-9efd-477d473504ea', 'https://firebasestorage.googleapis.com/v0/b/yoshimine-dev.appspot.com/o/layout%2Flayout-b2.png?alt=media&token=c1baf4b8-b4d5-429d-84c1-308fa83b5f2d'],
      // },
      // 削除予定 end

      // layoutInput: {},
      // itemsWork: {},
      // itemsInput: {},
      // itemsDefault: this.items,
      // itemsDefault: {},

      page: {
        titleName: '',
        mainDate: '',
        mainText: '',
        text1: '',
        text2: '',
        text3: '',
        myLink: '',
        fileUrl: process.env.NO_IMAGE_URL,
        fileUrlSmall: process.env.NO_IMAGE_URL,
        // contentType: '',
        fileName: 'no_image.png',
        displayType: 'image',
        googleUrl: '',
      },

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
        displayType: '',
        googleUrl: '',
        fileUrl: '',
        // fileUrlSmall: process.env.NO_IMAGE_URL,
      },

      displayType: '',
      contentType: '',
      newImage: '',
      newFile: '',
      fileName: '',
      fileType: '',
      // reserve: false,
      toggleDel: false,
      toggleShow: false,
    }
  },

  // ① computed は値が変わるとその値に依存しているすべてのバインディングが更新される
  // データが変更された時 その変更データを、反映したい場合はcomputed、反映したくない場合はmethodsを利用
  // 利用例： DB からのデータ取得
  // mapGetters は store(Firestore) の getters をローカルの算出プロパティにマッピングさせる
  computed: {
    // ...mapGetters({ general: 'orderdMainDate' }),

    isLogin() {
      return this.$store.getters['user/isLogin']
    },

    dbPages() {
      return this.$store.getters['general/orderdMainDate']
    },

    dbEachPage() {
      return this.$store.getters['general/getEachPageById'](this.templateNo)
    },

    dbDefault() {
      // const getDefault = this.$store.getters['general/getDefaultById']('defaults')
      // console.log('deDefault-1 --- dbDefault: ', getDefault)

      // if (getDefault === 'undefined') {
      //   return this.pageInfo
      // } else {
      return this.$store.getters['general/getDefaultById']('defaults')
      // }
    },

    getPageList() {
      return this.$store.getters['myStore/getPageList']
    },
  },

  // ①-2 watch は値が変わるとその値に依存しているすべてのバインディングが更新される
  // computed との違いは、関数定義はできないので return を返せない。
  // watch() {
  //   const temp = this.$store.getters['general/getDefaultById']('defaults')
  //   console.log('deDefault-1 --- dbDefault: ', temp)
  //   this.$store.getters['general/getDefaultById']('defaults')
  // },

  // ② created は画面を開いたとき呼ばれる。
  created() {
    this.pageInfoInputDefault = this.pageInfo
    this.pageInfoInput = this.pageInfo
    // console.log('mounted-1 --- pageInfoInputDefault: ', this.pageInfoInputDefault)
    // console.log('mounted-2 --- pageInfoInput: ', this.pageInfoInput)

    // 下記の general は store/general.js のファイル名
    this.$store.dispatch('storeheader/init')
    // this.$store.dispatch('storemenu/init')

    this.$store.dispatch('general/init', db.collection('general').doc(this.templateNo).collection(this.templateNo).orderBy('page.mainDate', 'desc'))
    // this.$store.dispatch('general/initFile', db.collection('generalFile').doc(this.templateNo).collection(this.templateNo).orderBy('created', 'desc'))
    this.$store.dispatch('general/initDefault')
    this.$store.dispatch('general/initEachPage')
  },

  // ③ mounted はelementへのマウントが行われた後処理される。
  // SSR(Firebase等)では使えない。
  mounted() {
    // this.pageInfoInputDefault = JSON.parse(JSON.stringify(this.pageInfo))

    this.$nuxt.$on('mycommon', (myCommon) => {
      this.myCommon = myCommon
    })

    // this.$nuxt.$on('mymenu', (myMenu) => {
    //   this.myMenu = myMenu
    // })
  },

  // ④ updated 画面が更新された後、呼び出される。
  // SSR(Firebase等)では使えない。
  updated() {
    this.getMenuIndex()

    //   if (typeof this.dbEachPage !== 'undefined') {
    //     this.layout = this.dbEachPage.layout
    //     this.items = this.dbEachPage.items
    //     // 上の行をコメントアウトして、以下の行を活かすと、暴走する
    //     // this.layout = JSON.parse(JSON.stringify(this.dbEachPage.layout))

    //   } else {
    //     console.log('updated-1 --- dbEachPage: ', this.dbEachPage)
    //   }
  },

  // ⑨ methods は呼び出される度に実行
  // データが変更された時、反映したくない場合はmethodsを利用
  methods: {
    // test1() {
    //   // dummy
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
      this.myIndex.indexGroup = indexGroup
      this.myIndex.indexPage = indexPage
      this.myIndex.pageTemplate = pageTemplate
      this.myIndex.pageNo = pageNo
      // console.log('setMenuIndex-1 --- myIndex: ', this.myIndex)
      this.$store.dispatch('myStore/set', this.myIndex)
    },

    // Google Doc Viewer にて新しいページで表示
    openNewTab(url, displayType) {
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
      // console.log('downloadFile-1 ---- dbPage: ', dbPage)

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
        aDL.download = dbPage.page.fileName
        aDL.style = 'display: none'
        aDL.click()
        document.body.appendChild(aDL)
      }
      xhr.open('GET', dbPage.page.fileUrl)
      xhr.send()
      // console.log('xhr in downloadFile' + xhr.response)
    },

    // modal 関連 ---------- start
    // showModalContent() {
    //   this.$refs['modal-content'].show()
    // },

    showModal_pageSet() {
      if (typeof this.dbEachPage !== 'undefined') {
        // this.layoutInput = JSON.parse(JSON.stringify(this.dbEachPage.layout))
        // this.itemsInput = JSON.parse(JSON.stringify(this.dbEachPage.items))
        this.pageInfoInput = JSON.parse(JSON.stringify(this.dbEachPage))
        // console.log('showModal_pageSet-1 --- pageInfoInput: ', this.pageInfoInput)
        // } else {
        //   // this.layoutInput = JSON.parse(JSON.stringify(this.layout))
        //   // this.itemsInput = JSON.parse(JSON.stringify(this.items))
        //   this.pageInfoInput = JSON.parse(JSON.stringify(this.pageInfo))
      }

      // this.itemsInput = JSON.parse(JSON.stringify(this.items))
      // this.itemsInput = JSON.parse(JSON.stringify(this.dbEachPage.items))

      this.$refs.modal_pageSet.show()
    },

    showModal_default() {
      if (this.dbDefault !== undefined) {
        // this.pageInfoInputDefault = JSON.parse(JSON.stringify(this.dbDefault.items))
        this.pageInfoInputDefault = JSON.parse(JSON.stringify(this.dbDefault))
        // console.log('showModal_default-1 --- pageInfoInputDefault: ', this.pageInfoInputDefault)
        // } else {
        //   this.pageInfoInputDefault = JSON.parse(JSON.stringify(this.pageInfo))
        //   console.log('showModal_default-1 --- dbDefault: ', this.dbDefault)
        //   console.log('showModal_default-2 --- pageInfoInputDefault: ', this.pageInfoInputDefault)
      }

      this.$refs.modal_default.show()
    },

    setDefaultToInput() {
      // this.itemsInput = JSON.parse(JSON.stringify(this.itemsDefault))
      if (this.dbDefault !== undefined) {
        // this.pageInfoInput = this.dbDefault.items
        this.pageInfoInput = this.dbDefault
        // console.log('setDefaultToInput-1 --- pageInfoInput: ', this.pageInfoInput)
        // } else {
        //   this.pageInfoInput = JSON.parse(JSON.stringify(this.pageInfo))
        //   console.log('setDefaultToInput-2 --- pageInfoInput: ', this.pageInfoInput)
      }
    },

    // claseModal() {
    //   this.$refs['modal_pageSet'].hide()
    // },

    regEachPage() {
      // console.log('1-11 -- layoutInput -----: ', this.layoutInput)
      // console.log('1-12 -- layoutInput -----: ', this.layoutInput)
      // modalウィンドウを閉じる
      this.$refs.modal_pageSet.hide()

      // Firestre への保存
      // console.log('regEachPage-1 ------ itemsInput ', this.itemsInput)
      this.$store
        // .dispatch('general/updateEachPage', { templateNo: this.templateNo, layout: this.layoutInput, items: this.itemsInput })
        .dispatch('general/updateEachPage', { templateNo: this.templateNo, pageInfoInput: this.pageInfoInput })
        .then((value) => {
          if (value === 'regOK') {
            this.toastFileUpdate('登録', '登録しました。')
            // this.layout.type = this.layoutInput.type
            // this.layout.retsuSuu = this.layoutInput.retsuSuu
          } else {
            alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
          }
        })
        .catch((error) => {
          alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？: ', error)
        })
    },

    regDefault() {
      // modalウィンドウを閉じる
      this.$refs.modal_default.hide()

      // console.log('regDefault-1 --- pageInfoInputDefault: ', this.pageInfoInputDefault)
      // Firestre への保存
      this.$store
        .dispatch('general/setDefault', this.pageInfoInputDefault)
        .then((value) => {
          if (value === 'regOK') {
            this.toastFileUpdate('登録', '登録しました。')
          } else {
            alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
          }
        })
        .catch((error) => {
          alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？: ', error)
        })

      // this.toastFileUpdate('登録', '登録しました。')
    },
    // modal 関連 ---------- end

    myDataSet() {
      try {
        // console.log('myDataSet-1 --- dbEackPage: ', this.dbEachPage)
        if (typeof this.dbEachPage !== 'undefined') {
          // this.layout = this.dbEachPage.layout
          // this.items = this.dbEachPage.items
          this.pageInfo = this.dbEachPage
          // this.itemsDefault = this.dbDefault
          // console.log('myDataSet-2 --- pageInfo: ', this.pageInfo)
          // this.itemsDefault = this.dbDefault.items
        } else {
          this.pageInfo = this.pageInfoInput
          // console.log('myDataSet-3 --- pageInfo: ', this.pageInfo)
        }
      } catch (error) {
        // alert('***** error ***** in myDataSet(): ' + error)
        // console.log('***** error ***** in myDataSet(): ' + error)
      }

      // if (this.dbDefault !== 'undefined') {
      //   // this.pageInfoInputDefault = JSON.parse(JSON.stringify(this.dbDefault))
      //   this.pageInfoInputDefault = this.dbDefault
      //   console.log('myDataSet-1 --- pageInfoInputDefault: ', this.pageInfoInputDefault)
      // } else {
      //   // this.pageInfoInputDefault = JSON.parse(JSON.stringify(this.pageInfo))
      //   this.pageInfoInputDefault = this.pageInfo
      //   console.log('myDataSet-2 --- pageInfoInputDefault: ', this.pageInfoInputDefault)
      // }
    },

    // b31File のDB関連 start
    // initFileItem() {
    //   this.customMetadata = {}
    //   // this.selectedFile = '選択されていません。'
    // },
    // addFile() {
    // 下記の general は store/general.js のファイル名
    // this.$store.dispatch('general/addFile', this.customMetadata)
    // this.$store.dispatch('general/addFile', { templateNo: this.templateNo, customMetadata: this.customMetadata })
    // },
    // b31File のDB関連 end

    // general DB へのデータ追加
    initPageData() {
      this.page.titleName = ''
      this.page.mainText = ''
      this.page.text1 = ''
      this.page.text2 = ''
      this.page.text3 = ''
      this.page.fileUrl = process.env.NO_IMAGE_URL
      // this.page.mainDate = ''
      this.todaySet2()
      // this.page.contentType = ''
      this.page.fileName = 'no_image.png'
      this.page.displayType = 'image'
      this.page.googleUrl = ''
      this.page.myLink = ''
      this.selectedFile = '選択されていません。'
    },

    add() {
      // 下記の general は store/general.js のファイル名
      // this.$store.dispatch('general/add', this.page)
      this.$store
        .dispatch('general/add', { templateNo: this.templateNo, page: this.page })
        .then((value) => {
          if (value === 'regOK') {
            this.toastFileUpdate('登録', '登録しました。')
          } else {
            alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
          }
        })
        .catch((error) => {
          alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？: ', error)
        })
    },

    update() {
      this.$store
        .dispatch('general/update', { templateNo: this.templateNo, id: this.editId, page: this.page })
        .then((value) => {
          if (value === 'regOK') {
            this.toastFileUpdate('登録', '登録しました。')
          } else {
            alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
          }
        })
        .catch((error) => {
          alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？: ', error)
        })
    },

    edit(id) {
      this.showEdit = true
      this.showReg = false
      const myPage = this.$store.getters['general/getMyPageById'](id)
      this.page.titleName = myPage.page.titleName
      this.page.mainDate = myPage.page.mainDate
      this.page.text1 = myPage.page.text1
      this.page.text2 = myPage.page.text2
      this.page.text3 = myPage.page.text3
      this.page.mainText = myPage.page.mainText
      this.page.fileUrl = myPage.page.fileUrl
      // this.page.contentType = myPage.page.contentType
      this.page.displayType = myPage.page.displayType
      this.page.googleUrl = myPage.page.googleUrl
      this.page.myLink = myPage.page.myLink
      this.page.fileName = myPage.page.fileName
      this.selectedFile = myPage.page.fileName
      this.editId = id
    },

    editCancel() {
      this.initPageData()
      this.showEdit = false
      this.showReg = true
    },

    dataReset() {
      const myPage = this.$store.getters['general/getMyPageById'](this.editId)
      this.page.titleName = myPage.page.titleName
      this.page.mainDate = myPage.page.mainDate
      this.page.text1 = myPage.page.text1
      this.page.text2 = myPage.page.text2
      this.page.text3 = myPage.page.text3
      this.page.mainText = myPage.page.mainText
      // this.page.contentType = myPage.page.contentType
      this.page.displayType = myPage.page.displayType
      this.page.googleUrl = myPage.page.googleUrl
      this.page.myLink = myPage.page.myLink
      this.page.fileUrl = myPage.page.fileUrl
      this.page.fileName = myPage.page.fileName
      this.selectedFile = myPage.page.fileName
    },

    remove(id) {
      // const myResult = confirm('本当に削除してよろしいでしょうか？')
      // if (myResult) {
      //   this.$store.dispatch('general/remove', id)
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
          // this.$store.dispatch('general/remove', id)
          this.$store
            .dispatch('general/remove', { templateNo: this.templateNo, id })
            .then((value) => {
              if (value === 'regOK') {
                this.toastFileUpdate('登録', '登録しました。')
              } else {
                alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
              }
            })
            .catch((error) => {
              alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？: ', error)
            })
        }
      })
    },

    onSubmitEdit(evt) {
      // alert(JSON.stringify(this.page))
      evt.preventDefault()
      this.update()
      // 以下はinputの入力をリセット
      this.initPageData()
      this.showEdit = false
      this.showReg = true
      // this.selected = '選択されていません。'
      this.selected = ''
    },

    onSubmit(evt) {
      // alert(JSON.stringify(this.page))
      evt.preventDefault()
      this.add()
      // this.toastFileUpdate('登録', '登録しました。')
      // 以下はinputの入力をリセット
      this.initPageData()
      this.selected = ''
    },

    onReset(evt) {
      evt.preventDefault()
      this.initPageData()
    },

    // 画像関連
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

      // サムネイル用canvasのサイズを0に
      // canvas.height = 0
      // canvas.width = 0

      // inputの入力をリセット
      // this.$refs.input.value = ''
      // this.reserve = false
      this.toggleDel = false
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
      const filesRef = storageRef.child('general/' + this.templateNo)
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
      // await this.$store.dispatch('general/addFile', { templateNo: this.templateNo, customMetadata: this.customMetadata })

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
      const filesRef = storageRef.child('general/' + this.templateNo)
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
      // await this.$store.dispatch('general/addFile', { templateNo: this.templateNo, customMetadata: this.customMetadata })

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

      const filesRef = storageRef.child('general/' + this.templateNo)

      filesRef
        .listAll()
        .then(function (res) {
          // res.prefixes.forEach(function(folderRef) {
          for (let i = 0; i < res.prefixes.length; i++) {
            // console.log('res.prefixes[i]: ', res.prefixes[i])
          }
          // res.items.forEach(function(itemRef) {
          for (let i = 0; i < res.items.length; i++) {
            // console.log('fileList-1 --- res.items[', i, ']: ', res.items[i])
            // console.log('fileList-2 --- res.items[', i, '].name : ', res.items[i].name)
            // console.log('fileList-1 --- res.items[', i, '].fullPath : ', res.items[i].fullPath)
            // console.log('res.items[i].location.path: ', res.items[i].location.path)
            // console.log('itemRef.location.path: ', itemRef.location.path)
            // vm.getFileInfo(res.items[i].fullPath)
            vm.getFileInfo(res.items[i])
          }
          // this.thisFileList = itemRef.location.path
          // console.log('res: ' + res)
        })
        .catch(function (error) {
          alert('error in fileList: ' + error)
          // console.error('error in fileList: ', error)
        })
      // console.log('myFiles.length in imageLise2: ' + this.myFiles.length)
    },

    // fileInfo で指定した画像ファイルの Path = Url を取得
    getFileInfo(fileInfo) {
      // console.log('getFileInfo-2 --- fileInfo: ' + fileInfo)
      // const setFileInfo = { name: fileInfo.name, url: '' }
      const setFileInfo = { fileName: fileInfo.name, customMetadata: {} }

      // console.log('getFileInfo-3 --- name: ' + fileInfo.name)
      const filesRef = storageRef.child('general/' + this.templateNo)
      const fileRef = filesRef.child(fileInfo.name)
      // Get metadata properties
      fileRef
        .getMetadata()
        .then(function (metadata) {
          setFileInfo.customMetadata = metadata.customMetadata
          // console.log('getFileInfo-4 --- metadata: ', metadata)
          // console.log('getFileInfo-5 --- displayType: ', setFileInfo.customMetadata.displayType)
        })
        .catch(function (error) {
          alert('getFileInfo-99 --- metadata update error: ', error)
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
    fileListDisp() {
      this.fileList()
      this.toggleShow = true
    },

    selImage(myFile, index2) {
      this.selected = index2
      this.selectedFile = 'No.' + this.selected + ':　' + myFile.fileName
      this.page.fileUrl = myFile.customMetadata.fileUrl
      this.page.fileName = myFile.fileName
      this.page.displayType = myFile.customMetadata.displayType
      this.page.googleUrl = myFile.customMetadata.googleUrl

      // ファイルをサムネイルに変更 : fileName.jpe -> thumbs/fileName_256x192.jpg
      const index = myFile.fileName.lastIndexOf('.')
      const a = myFile.fileName.slice(0, index)
      const b = myFile.fileName.slice(index)
      const filePath = 'general/' + this.templateNo + '/thumbs/' + a + '_256x192' + b
      // console.log('selImage-1 --- filePath: ', filePath)
      // filePath = 'general/' + this.templateNo + '/thumbs/' + 'grovemade-vfIx29EsLHA-unsplash_256x192.jpg'
      // await fileRef.getDownloadURL().then((url) => {
      const fileRef = storageRef.child(filePath)
      // await fileRef.getDownloadURL().then((url) => {
      fileRef
        .getDownloadURL()
        .then((url) => {
          this.page.fileUrlSmall = url
          // console.log('selImage-2 --- fileUrlSmall: ', this.page.fileUrlSmall)
        })
        // .catch((error) => {
        .catch(() => {
          // console.log('selImage-3 *** error *** getDownloadURL: ', error)
          this.page.fileUrlSmall = this.page.fileUrl
          // alert('mounted-2 *** error *** getMenus: ', error)
        })
    },

    imageTorikesi() {
      const myPage = this.$store.getters['general/getMyPageById'](this.editId)
      this.page.displayType = myPage.page.displayType
      this.page.googleUrl = myPage.page.googleUrl
      this.page.fileUrl = myPage.page.fileUrl
      this.page.myLink = myPage.page.myLink
      this.page.fileName = myPage.page.fileName
      this.selectedFile = myPage.page.fileName
      // this.showImageReg = false
      this.toggleShow = false
    },

    // ファイルを添付しない
    noAttachments() {
      this.toggleShow = false
      // this.initPageData()
      this.page.fileUrl = process.env.NO_IMAGE_URL
      // this.selected = '選択されていません。'
      this.selected = ''
      this.page.fileName = 'no_image.png'
      this.page.displayType = 'image'
      this.page.googleUrl = ''
      this.page.myLink = ''
      this.selectedFile = '選択されていません。'
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

      // 入力データをリセット
      this.reset()
    },

    regOkBtn() {
      // ファイル選択 window を閉じる
      this.$bvModal.hide('regNewFileId')

      // DBに保存
      this.upload()
    },
    // modal 関連 end

    fileListDelCancel() {
      this.toggleDel = false
    },

    // 画像リスト表示 Del
    fileListDel() {
      this.fileList()
      // this.fileListSort()
      this.toggleDel = true
    },

    // DBに保存されている画像削除
    // customMetadataDel(id) {
    //   this.$store.dispatch('general/delFileItem', { templateNo: this.templateNo, id })
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

            const filesRef = storageRef.child('general/' + this.templateNo)
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
  // methods の終わり
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
  top: 0px;
  right: 2px;
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

del {
  color: rgba(255, 0, 0, 1);
}
</style>
