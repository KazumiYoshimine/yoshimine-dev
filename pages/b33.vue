<template>
  <div class="container-fluid no-gutters">
    <div v-for="dbHeader in dbHeaders" :key="dbHeader.id" class="m-0 p-0">
      <h5 class="text-light text-center m-0 p-1" :style="commonData.buttonColorBasicSet">{{ dbHeader.myData.m33 }}</h5>
    </div>

    <!-- ＝＝＝＝ レイアウト type:0 の時 start ＝＝＝＝＝＝＝＝＝ -->
    <div v-if="layout.type === 0" class="row no-gutters">
      <div v-for="(dbPage, index) in dbPages" :key="dbPage.id" class="col-sm-6 col-md-4">
        <div class="card no-gutters m-1">
          <div v-b-modal="'data-' + index">
            <!-- タイトル ＆ 日付 -->
            <div class="px-1 d-flex justify-content-between align-items-center" style="background-color: honeydew">
              <h5 class="m-0 p-0">{{ dbPage.page.titleName }}</h5>
              <p :hidden="cCommonData.hiddenDate" class="m-0 p-0">{{ dbPage.page.mainDate }}</p>
            </div>

            <div class="m-0 p-0 border">
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

              <!-- 1行目 -->
              <div class="row m-0 p-0">
                <p :hidden="cCommonData.hiddenText1" class="col-4 m-0 p-0 px-1">{{ cCommonData.text1name }}</p>
                <p :hidden="cCommonData.hiddenText1" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text1 }}</p>
              </div>

              <!-- 2行目 -->
              <div class="row m-0 p-0">
                <p :hidden="cCommonData.hiddenText2" class="col-4 m-0 p-0 px-1">{{ cCommonData.text2name }}</p>
                <p :hidden="cCommonData.hiddenText2" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text2 }}</p>
              </div>

              <!-- 3行目 -->
              <div class="row m-0 p-0">
                <p :hidden="cCommonData.hiddenText3" class="col-4 m-0 p-0 px-1">{{ cCommonData.text3name }}</p>
                <p :hidden="cCommonData.hiddenText3" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text3 }}</p>
              </div>
            </div>

            <!-- 本文表示 mainText (長文) -->
            <div class="m-0 p-0 p-0 text-wrap card-body" style="background-color: whitesmoke">
              <p :hidden="cCommonData.hiddenMainText" class="m-0 p-0 pl-1 text-justify text-break overflow-auto bg-a13-linen" style="overflow-wrap: break-word; max-height: 62px; white-space: pre-wrap">{{ dbPage.page.mainText }}</p>
            </div>
          </div>

          <!-- <div class="m-0 p-0 col-12"> -->
          <div class="m-0 p-0">
            <!-- ボタン start -->
            <div class="d-flex justify-content-between align-items-center">
              <!-- 拡大ボタン -->
              <div v-b-modal="'data-' + index">
                <b-button :hidden="cCommonData.hiddenBtn" :size="commonData.selectedBtnSize" class="px-1 py-0 m-1 ml-2 mb-1 float-center text-body" style="background-color: honeydew">{{ cCommonData.btnName }}</b-button>
              </div>

              <!-- Linkボタン -->
              <div v-if="dbPage.page.myLink" class="m-0 p-0">
                <b-button :hidden="cCommonData.hiddenLink" :to="dbPage.page.myLink" :size="commonData.selectedBtnSize" class="px-1 py-0 m-1 ml-2 mb-1 float-center text-body" style="background-color: honeydew">{{ cCommonData.linkName }}</b-button>
              </div>

              <!-- 新しいページに Google Doc Viewer で表示 -->
              <b-button :hidden="cCommonData.hiddenNewTab" :size="commonData.selectedBtnSize" class="px-1 py-0 m-1 text-body" style="background-color: honeydew" @click="openNewTab(dbPage.page.fileUrl, dbPage.page.displayType)">{{ cCommonData.newTab }}</b-button>

              <!-- 端末(PC等)へダウンロード -->
              <b-button :hidden="cCommonData.hiddenDownload" :size="commonData.selectedBtnSize" class="px-1 py-0 m-1 text-body" style="background-color: honeydew" @click="downloadFile(dbPage)">{{ cCommonData.download }}</b-button>
            </div>
            <!-- ボタン end -->
          </div>
        </div>

        <!-- 。。。。。。。。。。。 モーダル表示 start 。。。。。。。。。。。 -->
        <b-modal :id="'data-' + index" hide-header size="xl">
          <!-- タイトル表示 -->
          <div class="border m-1 mt-3 p-2 d-flex justify-content-between" style="background-color: honeydew">
            <h5 class="m-0 px-1">{{ dbPage.page.titleName }}</h5>
            <p :hidden="cCommonData.hiddenDate" class="m-0 pl-2 pr-2">{{ dbPage.page.mainDate }}</p>
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
              <h5 :hidden="cCommonData.hiddenText1" class="col-4 m-0 p-0 px-1">{{ cCommonData.text1name }}</h5>
              <h5 :hidden="cCommonData.hiddenText1" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text1 }}</h5>
            </div>

            <div class="row m-0 p-0">
              <h5 :hidden="cCommonData.hiddenText2" class="col-4 m-0 p-0 px-1">{{ cCommonData.text2name }}</h5>
              <h5 :hidden="cCommonData.hiddenText2" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text2 }}</h5>
            </div>

            <div class="row m-0 p-0">
              <h5 :hidden="cCommonData.hiddenText3" class="col-4 m-0 p-0 px-1">{{ cCommonData.text3name }}</h5>
              <h5 :hidden="cCommonData.hiddenText3" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text3 }}</h5>
            </div>

            <!-- 本文表示 mainText (長文) -->
            <h5 :hidden="cCommonData.hiddenMainText" class="text-justify text-break m-0 p-2 bg-a13-linen" style="white-space: pre-wrap">{{ dbPage.page.mainText }}</h5>
          </div>
        </b-modal>
        <!-- 。。。。。。。。。。。 モーダル表示 end 。。。。。。。。。。。 -->
      </div>
    </div>
    <!-- ＝＝＝＝ レイアウト type:0 の時 start =================== -->

    <!-- ＝＝＝＝ レイアウト type:1 の時 start =================== -->
    <div v-else class="row no-gutters">
      <div v-for="(dbPage, index) in dbPages" :key="dbPage.id" class="col-md-6">
        <div class="card no-gutters m-1">
          <div v-b-modal="'data-' + index">
            <!-- タイトル ＆ 日付 -->
            <div class="px-1 d-flex justify-content-between align-items-center" style="background-color: honeydew">
              <h5 class="m-0 p-0">{{ dbPage.page.titleName }}</h5>
              <p :hidden="cCommonData.hiddenDate" class="m-0 p-0">{{ dbPage.page.mainDate }}</p>
            </div>

            <div class="row m-0 p-0">
              <div class="m-0 p-0 border col-md-5 col-sm-6">
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

                <!-- 1行目 -->
                <div class="row m-0 p-0">
                  <p :hidden="cCommonData.hiddenText1" class="col-4 m-0 p-0 px-1">{{ cCommonData.text1name }}</p>
                  <p :hidden="cCommonData.hiddenText1" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text1 }}</p>
                </div>

                <!-- 2行目 -->
                <div class="row m-0 p-0">
                  <p :hidden="cCommonData.hiddenText2" class="col-4 m-0 p-0 px-1">{{ cCommonData.text2name }}</p>
                  <p :hidden="cCommonData.hiddenText2" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text2 }}</p>
                </div>

                <!-- 3行目 -->
                <div class="row m-0 p-0">
                  <p :hidden="cCommonData.hiddenText3" class="col-4 m-0 p-0 px-1">{{ cCommonData.text3name }}</p>
                  <p :hidden="cCommonData.hiddenText3" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text3 }}</p>
                </div>
              </div>

              <!-- 本文表示 mainText (長文) -->
              <div class="m-0 p-0 col-md-7 col-sm-6 p-0 text-wrap card-body" style="background-color: whitesmoke">
                <!-- <p class="m-0 p-2 text-break overflow-auto" style="overflow-wrap: break-word; max-height: 230px">{{ dbPage.page.mainText }}</p> -->
                <!-- <h5 :hidden="cCommonData.hiddenMainText" class="text-justify text-break m-0 p-2 bg-a13-linen" style="white-space: pre-wrap">{{ dbPage.page.mainText }}</h5> -->
                <p :hidden="cCommonData.hiddenMainText" class="text-justify text-break m-0 p-2 bg-a13-linen" style="overflow-wrap: break-word; max-height: 230px; white-space: pre-wrap">{{ dbPage.page.mainText }}</p>
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
                <b-button :hidden="cCommonData.hiddenBtn" :size="commonData.selectedBtnSize" class="px-1 py-0 m-1 ml-2 mb-1 float-center text-body" style="background-color: honeydew">{{ cCommonData.btnName }}</b-button>
              </div>

              <!-- Linkボタン -->
              <div v-if="dbPage.page.myLink" class="m-0 p-0">
                <b-button :hidden="cCommonData.hiddenLink" :to="dbPage.page.myLink" :size="commonData.selectedBtnSize" class="px-1 py-0 m-1 ml-2 mb-1 float-center text-body" style="background-color: honeydew">{{ cCommonData.linkName }}</b-button>
              </div>

              <!-- 新しいページに Google Doc Viewer で表示 -->
              <b-button :hidden="cCommonData.hiddenNewTab" :size="commonData.selectedBtnSize" class="px-1 py-0 m-1 text-body" style="background-color: honeydew" @click="openNewTab(dbPage.page.fileUrl, dbPage.page.displayType)">{{ cCommonData.newTab }}</b-button>

              <!-- 端末(PC等)へダウンロード -->
              <b-button :hidden="cCommonData.hiddenDownload" :size="commonData.selectedBtnSize" class="px-1 py-0 m-1 text-body" style="background-color: honeydew" @click="downloadFile(dbPage)">{{ cCommonData.download }}</b-button>
            </div>
            <!-- ボタン end -->
          </div>
        </div>

        <!-- 。。。。。。。。。。。 モーダル表示 start 。。。。。。。。。。。 -->
        <b-modal :id="'data-' + index" hide-header size="xl">
          <!-- タイトル表示 -->
          <div class="border m-1 mt-3 p-2 d-flex justify-content-between" style="background-color: honeydew">
            <h5 class="m-0 px-1">{{ dbPage.page.titleName }}</h5>
            <p :hidden="cCommonData.hiddenDate" class="m-0 pl-2 pr-2">{{ dbPage.page.mainDate }}</p>
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
              <h5 :hidden="cCommonData.hiddenText1" class="col-4 m-0 p-0 px-1">{{ cCommonData.text1name }}</h5>
              <h5 :hidden="cCommonData.hiddenText1" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text1 }}</h5>
            </div>

            <div class="row m-0 p-0">
              <h5 :hidden="cCommonData.hiddenText2" class="col-4 m-0 p-0 px-1">{{ cCommonData.text2name }}</h5>
              <h5 :hidden="cCommonData.hiddenText2" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text2 }}</h5>
            </div>

            <div class="row m-0 p-0">
              <h5 :hidden="cCommonData.hiddenText3" class="col-4 m-0 p-0 px-1">{{ cCommonData.text3name }}</h5>
              <h5 :hidden="cCommonData.hiddenText3" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text3 }}</h5>
            </div>

            <!-- 本文表示 mainText (長文) -->
            <h5 :hidden="cCommonData.hiddenMainText" class="text-justify text-break m-0 p-2 bg-a13-linen" style="white-space: pre-wrap">{{ dbPage.page.mainText }}</h5>
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
          <b-button id="show-btn1" class="m-0 p-1" @click="showModal1">Page 設定</b-button>
          <b-button id="show-btn2" class="m-0 p-1" @click="showModal2">PageGroup-B 共通設定</b-button>
          <!-- modal 起動ボタン end ***** -->
        </div>

        <!--Page設定の modalウィンドウ start ********** -->

        <!-- <b-modal id="modal-1" ref="modal-1" hide-footer hide-header> -->
        <b-modal id="modal-1" ref="modal-1" title="ページのレイアウト設定" hide-footer>
          <div class="m-2">下の画像から選択してください。</div>
          <p class="m-0 p-0">
            現在の設定： レイアウト <strong>{{ layoutInput.type + 1 }} </strong>
          </p>
          <!-- <div class="m-2">
            <strong>{{ selectedFile }}</strong>
          </div> -->

          <!-- 画像の表示と選択 -->
          <!-- <div class="row m-0 p-0"> -->
          <div class="row no-gutters">
            <!-- <div class="col-6 image_box border m-1 p-0 pt-1" style="background-color: whitesmoke" @click="selEachPage(0)"> -->
            <b-button class="col-6 p-1 bg-info" @click="selEachPage(0)">
              <p class="m-0 p-1">レイアウト1</p>
              <!-- <p class="m-0 p-0">{{ layout.fileUrl[0] }}</p> -->
              <b-embed :src="layout.fileUrl[0]" class="m-0" type="embed" alt="file" fluid />
            </b-button>
            <!-- </div> -->
            <!-- <br /> -->
            <!-- <div class="col-6 image_box border m-1 p-0 pt-1" style="background-color: whitesmoke" @click="selEachPage(1)"> -->
            <b-button class="col-6 p-1 bg-info" @click="selEachPage(1)">
              <p class="m-0 p-1">レイアウト2</p>
              <!-- <p class="m-0 p-0">{{ layout.fileUrl[1] }}</p> -->
              <b-embed :src="layout.fileUrl[1]" class="m-0" type="embed" alt="file" fluid />
            </b-button>
            <!-- </div> -->
          </div>

          <!-- 登録、閉じる button start -->
          <div class="modal-footer m-0 mt-2 p-0">
            <b-button class="mt-1" variant="outline-primary" @click="regEachPage">設定</b-button>
            <b-button class="mt-1" variant="outline-dark" @click="$bvModal.hide('modal-1')">閉じる</b-button>
          </div>
          <!-- button end -->
        </b-modal>
        <!--Page 設定の modalウィンドウ end ********** -->

        <!--PageGroup-B 共通設定の modalウィンドウ start ********** -->

        <b-modal id="modal-2" ref="modal-2" hide-footer hide-header>
          <p class="my-2">以下の項目の「表示/非表示」及び「名称変更」</p>
          <!-- <label for="example-datepicker">Choose a date</label> -->
          <!-- <b-form-datepicker id="example-datepicker" v-model="cCommonWork.text1name" class="mb-2"></b-form-datepicker> -->

          <!-- sort & Date -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!cCommonWork.hiddenDate" @change="toggleChk(1)" />
            <p class="col-5 m-0 p-0 px-1">年月日（変更不可）</p>
            <span v-if="!cCommonWork.hiddenDate" class="col-6 m-0 p-0 px-1">
              <b-form-input disabled value="年月日" class="border pl-4"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input disabled value="年月日" class="border pl-4"></b-form-input>
            </del>
          </div>

          <!-- text1name -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!cCommonWork.hiddenText1" @change="toggleChk(11)" />
            <p class="col-5 m-0 p-0 px-1">1行目の名前</p>
            <span v-if="!cCommonWork.hiddenText1" class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="cCommonWork.text1name" class="border"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="cCommonWork.text1name" class="border"></b-form-input>
            </del>
          </div>

          <!-- text2name -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!cCommonWork.hiddenText2" @change="toggleChk(12)" />
            <p class="col-5 m-0 p-0 px-1">2行目の名前</p>
            <span v-if="!cCommonWork.hiddenText2" class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="cCommonWork.text2name" class="border"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="cCommonWork.text2name" class="border"></b-form-input>
            </del>
          </div>

          <!-- text3name -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!cCommonWork.hiddenText3" @change="toggleChk(13)" />
            <p class="col-5 m-0 p-0 px-1">3行目の名前</p>
            <span v-if="!cCommonWork.hiddenText3" class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="cCommonWork.text3name" class="border"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="cCommonWork.text3name" class="border"></b-form-input>
            </del>
          </div>

          <!-- 長文 -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!cCommonWork.hiddenMainText" @change="toggleChk(14)" />
            <p class="col-5 m-0 p-0 px-1">長文（変更不可）</p>
            <span v-if="!cCommonWork.hiddenMainText" class="col-6 m-0 p-0 px-1">
              <b-form-input disabled value="長文" class="border pl-4"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input disabled value="長文" class="border pl-4"></b-form-input>
            </del>
          </div>

          <!-- btnName -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!cCommonWork.hiddenBtn" @change="toggleChk(2)" />
            <p class="col-5 m-0 p-0 px-1">「拡大」のボタン名</p>
            <span v-if="!cCommonWork.hiddenBtn" class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="cCommonWork.btnName" class="border" required placeholder="<例> 拡大"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="cCommonWork.btnName" class="border" required placeholder="<例> 拡大"></b-form-input>
            </del>
          </div>

          <!-- linkName -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!cCommonWork.hiddenLink" @change="toggleChk(3)" />
            <p class="col-5 m-0 p-0 px-1">「リンク」のボタン名</p>
            <span v-if="!cCommonWork.hiddenLink" class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="cCommonWork.linkName" class="border" required placeholder="<例> 関連情報"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="cCommonWork.linkName" class="border" required placeholder="<例> 関連情報"></b-form-input>
            </del>
          </div>

          <!-- Open newTab -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!cCommonWork.hiddenNewTab" @change="toggleChk(4)" />
            <p class="col-5 m-0 p-0 px-1">「画像を拡大」のボタン名</p>
            <span v-if="!cCommonWork.hiddenNewTab" class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="cCommonWork.newTab" class="border" required placeholder="<例> 画像を拡大"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="cCommonWork.newTab" class="border" required placeholder="<例> 画像を拡大"></b-form-input>
            </del>
          </div>

          <!-- Download file -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input size="lg" class="col-1 m-0 p-0" type="checkbox" :checked="!cCommonWork.hiddenDownload" @change="toggleChk(5)" />
            <p class="col-5 m-0 p-0 px-1">「Fileを保存」のボタン名</p>
            <span v-if="!cCommonWork.hiddenDownload" class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="cCommonWork.download" class="border" required placeholder="<例> Fileを保存"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="cCommonWork.download" class="border" required placeholder="<例> Fileを保存"></b-form-input>
            </del>
          </div>

          <!-- 登録、閉じる button start -->
          <div class="modal-footer m-0 mt-2 p-0">
            <b-button class="mt-1" variant="outline-primary" @click="regCommon">登録</b-button>
            <b-button class="mt-1" variant="outline-dark" @click="$bvModal.hide('modal-2')">閉じる</b-button>
          </div>
          <!-- button end -->
        </b-modal>
        <!--PageGroup-B 共通設定の modalウィンドウ end ********** -->

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

                <!-- 本文表示 text1,2,3 -->
                <div class="row m-0 p-0">
                  <p :hidden="cCommonData.hiddenText1" class="col-4 m-0 p-0 px-1">{{ cCommonData.text1name }}</p>
                  <p :hidden="cCommonData.hiddenText1" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text1 }}</p>
                </div>

                <div class="row m-0 p-0">
                  <p :hidden="cCommonData.hiddenText2" class="col-4 m-0 p-0 px-1">{{ cCommonData.text2name }}</p>
                  <p :hidden="cCommonData.hiddenText2" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text2 }}</p>
                </div>

                <div class="row m-0 p-0">
                  <p :hidden="cCommonData.hiddenText3" class="col-4 m-0 p-0 px-1">{{ cCommonData.text3name }}</p>
                  <p :hidden="cCommonData.hiddenText3" class="col-8 m-0 p-0 px-1">{{ dbPage.page.text3 }}</p>
                </div>

                <!-- 本文表示 mainText -->
                <p :hidden="cCommonData.hiddenMainText" class="m-0 p-0 pl-1 text-break overflow-auto" style="overflow-wrap: break-word; max-height: 62px; background-color: linen">{{ dbPage.page.mainText }}</p>
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
              <b-form-group :hidden="cCommonData.hiddenText1" class="col-3 m-0 px-1 pt-2">{{ cCommonData.text1name }}</b-form-group>
              <div class="col-9 m-0 p-0">
                <b-form-input v-model="page.text1" :hidden="cCommonData.hiddenText1" class="border" required placeholder="空欄でもOK" />
              </div>
            </div>

            <!-- 短文2 -->
            <div class="row p-0 pt-2 m-0 mr-2">
              <b-form-group :hidden="cCommonData.hiddenText2" class="col-3 m-0 px-1 pt-2">{{ cCommonData.text2name }}</b-form-group>
              <div class="col-9 m-0 p-0">
                <b-form-input v-model="page.text2" :hidden="cCommonData.hiddenText2" class="border" required placeholder="空欄でもOK" />
              </div>
            </div>

            <!-- 短文3 -->
            <div class="row p-0 pt-2 m-0 mr-2">
              <b-form-group :hidden="cCommonData.hiddenText3" class="col-3 m-0 px-1 pt-2">{{ cCommonData.text3name }}</b-form-group>
              <div class="col-9 m-0 p-0">
                <b-form-input v-model="page.text3" :hidden="cCommonData.hiddenText3" class="border" required placeholder="空欄でもOK" />
              </div>
            </div>

            <!-- 本文登録（必須ではない） -->
            <div class="row p-0 pt-2 m-0 mr-1">
              <span :hidden="cCommonData.hiddenMainText" class="col-2 m-0 mt-2 p-1 pt-3">長文</span>
              <b-form-textarea v-model="page.mainText" :hidden="cCommonData.hiddenMainText" class="col-10" required placeholder="空欄でもOK。 入力した内容は画像クリックで閲覧できます。" rows="3" max-rows="6"></b-form-textarea>
            </div>

            <!-- 詳細情報へのリンク登録（必須ではない） -->
            <div v-show="!cCommonData.hiddenLink" class="row p-0 pt-2 m-0 mr-2">
              <div class="col-3 m-0 px-1 pt-2">リンク先:</div>
              <div class="col-9 m-0 p-0">
                <b-form-input v-model="page.myLink" class="border" required placeholder="関連情報へのジャンプ先を入力  <例> /a41" />
              </div>
            </div>

            <hr />

            <!-- 画像添付 start-->
            <div class="mx-2 pb-2">
              <p class="mb-0">画像を変更する場合は、「画像変更」ボタンをクリックしてください。</p>
              <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageListEdit()">画像変更</button>
              <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageTorikesi()">変更取消</button>
              <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageCancel()">添付しない</button>
            </div>

            <!-- <div v-show="showImageFlg" class="col-12"> -->
            <!-- <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageList()">画像リスト表示</button> -->
            <div v-show="toggleShow">
              <!-- <div class="m-2">
                下の画像から選択してください。: <strong>{{ selected }}</strong>
              </div> -->
              <div class="m-2">下の画像から選択してください。</div>
              <div class="m-2">
                <strong>{{ selectedFile }}</strong>
              </div>

              <!-- <div class="row no-gutters">
                <b-form-group v-for="(myImage, index2) in myImages" :key="myImage.id" class="col-4">
                  <div class="image_box" @click="selImage(myImage.url, index2)">
                    <b-embed v-model="selected" :src="myImage.url" fluid type="embed" class="m-0 p-1" alt="file"> </b-embed>
                    <b-form-radio v-model="selected" :value="'No.' + ++index2" class="positionRadioBtn ml-4 p-0"> </b-form-radio>
                  </div>
                </b-form-group>
              </div> -->

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

              <!-- タイトル -->
              <div class="row p-0 pt-2 m-0 mr-2">
                <!-- <b-form-group label="タイトル(必須)" class="col-sm-3 m-0 mt-1 p-0 px-1" /> -->
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
              <b-form-group :hidden="cCommonData.hiddenText1" class="col-3 m-0 px-1 pt-2">{{ cCommonData.text1name }}</b-form-group>
              <div class="col-9 m-0 p-0">
                <b-form-input v-model="page.text1" :hidden="cCommonData.hiddenText1" class="border" required placeholder="空欄でもOK" />
              </div>
            </div>

            <!-- 短文2 -->
            <div class="row p-0 pt-2 m-0 mr-2">
              <b-form-group :hidden="cCommonData.hiddenText2" class="col-3 m-0 px-1 pt-2">{{ cCommonData.text2name }}</b-form-group>
              <div class="col-9 m-0 p-0">
                <b-form-input v-model="page.text2" :hidden="cCommonData.hiddenText2" class="border" required placeholder="空欄でもOK" />
              </div>
            </div>

            <!-- 短文3 -->
            <div class="row p-0 pt-2 m-0 mr-2">
              <b-form-group :hidden="cCommonData.hiddenText3" class="col-3 m-0 px-1 pt-2">{{ cCommonData.text3name }}</b-form-group>
              <div class="col-9 m-0 p-0">
                <b-form-input v-model="page.text3" :hidden="cCommonData.hiddenText3" class="border" required placeholder="空欄でもOK" />
              </div>
            </div>

            <!-- 本文登録（必須ではない） -->
            <div class="row p-0 pt-2 m-0 mr-1">
              <span :hidden="cCommonData.hiddenMainText" class="col-2 m-0 mt-2 p-1 pt-3">長文</span>
              <b-form-textarea v-model="page.mainText" :hidden="cCommonData.hiddenMainText" class="col-10" required placeholder="空欄でもOK。 入力した内容は画像クリックで閲覧できます。" rows="3" max-rows="6"></b-form-textarea>
            </div>

            <!-- 詳細情報へのリンク登録（必須ではない） -->
            <div v-show="!cCommonData.hiddenLink" class="row p-0 pt-2 m-0 mr-2">
              <div class="col-3 m-0 px-1 pt-2">リンク先:</div>
              <div class="col-9 m-0 p-0">
                <b-form-input v-model="page.myLink" class="border" required placeholder="関連情報へのジャンプ先を入力  <例> /a41" />
              </div>
            </div>

            <hr />

            <!-- 画像添付 start-->
            <div class="mx-2 pb-2">
              <p class="mb-0">画像を添付する場合は、「画像添付」ボタンをクリックしてください。</p>
              <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageListReg()">画像添付</button>
              <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageCancel()">添付しない</button>
            </div>

            <div v-show="toggleShow">
              <div class="m-2">下の画像から選択してください。</div>
              <div class="m-2">
                <strong>{{ selectedFile }}</strong>
              </div>

              <!-- <div class="row no-gutters">
                <b-form-group v-for="(myImage, index2) in myImages" :key="myImage.id" class="col-4">
                  <div class="image_box" @click="selImage(myImage.url, index2)">
                    <b-embed v-model="selected" :src="myImage.url" fluid type="embed" class="m-0 p-1" alt="file"> </b-embed>
                    <b-form-radio v-model="selected" :value="'No.' + ++index2" class="positionRadioBtn ml-4 p-0"> </b-form-radio>
                  </div>
                </b-form-group>
              </div> -->

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

        <!-- =========== 画像登録、編集、削除 start -->
        <!-- <div class="col-12 m-0 p-0"> -->
        <!-- <div class="m-0 p-3 mt-3" style="background-color: midnightblue"> -->
        <!-- <h4 class="text-white">画像新規登録・削除</h4> -->
        <!-- 画像登録 Start -->
        <!-- <div class="col-12 m-0 p-2 mt-3" style="background-color: honeydew">
              <h5>画像登録</h5>
              <input ref="input" type="file" accept="image/*, .pdf" @change="fileExtension($event)" />
              <br />
            </div> -->
        <!-- 画像登録 End -->

        <!-- 画像削除 Start -->
        <!-- <div class="col-12 m-0 p-2 mt-2" style="background-color: honeydew">
              <h5>画像削除</h5>
              <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 ml-2 px-1 py-0" @click="imageDelete()">画像リスト表示</b-button>
              <b-button :size="commonData.selectedBtnSize" class="m-0 ml-2 px-1 py-0" @click="imageDeleteCancel()">閉じる</b-button>
            </div> -->

        <!-- 画像リスト表示 -->
        <!-- <div v-show="toggleDel" class="m-0 p-0">
              <div class="col-12 m-0 p-0 mt-2" style="background-color: honeydew">
                <div class="row no-gutters">
                  <div v-for="myImage in myImages" :key="myImage.id" class="m-0 p-1 col-4">
                    <div class="border m-0 p-0">
                      <b-embed :src="myImage.url" fluid class="m-0" type="embed" alt="file" />
                      <b-button :size="commonData.selectedBtnSize" class="m-1 ml-2 px-1 py-0 d-flex" @click="deleteImage(myImage.name, myImage.url)">削除</b-button>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
        <!-- 画像削除 End -->
        <!-- </div> -->
        <!-- </div> -->
        <div class="col-12 m-0 p-0">
          <div class="m-0 p-3 mt-3" style="background-color: midnightblue">
            <h4 class="text-white">画像新規登録・削除</h4>
            <!-- 画像登録 Start -->
            <div class="col-12 m-0 p-2 mt-3" style="background-color: honeydew">
              <h5>画像登録</h5>
              <input ref="input" type="file" accept="*.*" @change="fileExtension($event)" />
              <br />
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
        <!-- =========== 画像登録、編集、削除 end -->
      </div>
    </div>
    <p>{{ todaySet() }}</p>
    <p>{{ myDataSet() }}</p>
  </div>
</template>

<script>
// import { BIconClockHistory } from 'bootstrap-vue'
// import { mapGetters } from 'vuex'
import firebase from '~/plugins/firebase'

const storage = firebase.storage()
const storageRef = storage.ref()
const imagesRef = storageRef.child('bbb/b33')
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
  data() {
    return {
      pageNo: 'b33',
      todaySetFlg: false,
      showEdit: false,
      showReg: true,
      editId: '',
      myData: {},
      commonData: {},
      cCommon: {},

      layout: {
        type: 0,
        fileUrl: [],
      },
      layoutInput: {},

      selected: '',
      selectedFile: '選択されていません。',

      cCommonData: {
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
      cCommonWork: {
        // hiddenDate: false,
        // hiddenText1: false,
        // hiddenText2: false,
        // hiddenText3: false,
        // hiddenMainText: false,
        // hiddenBtn: false,
        // hiddenLink: false,
        // hiddenNewTab: false,
        // hiddenDownload: false,
        // text1name: '',
        // text2name: '',
        // text3name: '',
        // btnName: '拡大',
        // newTab: '画像拡大',
        // download: 'Fileを保存',
      },

      page: {
        titleName: '',
        mainDate: '',
        mainText: '',
        text1: '',
        text2: '',
        text3: '',
        myLink: '',
        fileUrl: process.env.NO_IMAGE_URL,
        // contentType: '',
        name: 'no_image.png',
        displayType: 'image',
        googleUrl: '',
      },

      // myImages: [
      //   {
      //     name: '',
      //     url: '',
      //   },
      // ],

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
    // ...mapGetters({ bbb: 'orderdMainDate' }),

    isLogin() {
      return this.$store.getters['user/isLogin']
    },

    dbPages() {
      return this.$store.getters['bbb/orderdMainDate']
    },

    dbEachPage() {
      return this.$store.getters['bbb/getEachPageById']('b33')
    },

    dbCcommon() {
      return this.$store.getters['bbb/getCommonById']('common')
    },

    dbHeaders() {
      return this.$store.getters['storeheader/orderdDbHeaders']
    },

    // 以下は b31File コレクション用
    dbFiles() {
      // return this.$store.getters['bbb/orderdDbFiles']
      const tempFiles = this.$store.getters['bbb/orderdDbFiles']
      // console.log('tempFiles ======= in dbFiles: ', tempFiles)
      return tempFiles
    },
  },

  // ② created は画面を開いたとき呼ばれる。
  created() {
    // 下記の bbb は store/bbb.js のファイル名
    this.$store.dispatch('bbb/init', db.collection('bbb').doc(this.pageNo).collection(this.pageNo).orderBy('page.mainDate', 'desc'))
    this.$store.dispatch('bbb/initFile', db.collection('bbbFile').doc(this.pageNo).collection(this.pageNo).orderBy('created', 'desc'))
    this.$store.dispatch('bbb/initCommon')
    this.$store.dispatch('bbb/initEachPage')

    // 下記の storeheader は store/storeheader.js のファイル名
    this.$store.dispatch('storeheader/init')

    this.$nuxt.$on('mydata', (myData) => {
      this.myData = myData
    })
  },

  // ③ mounted はelementへのマウントが行われた後処理される。
  // SSR(Firebase等)では使えない。
  mounted() {
    this.$nuxt.$on('commondata', (commonData) => {
      this.commonData = commonData
    })
  },

  // ④ updated 画面が更新された後、呼び出される。
  // SSR(Firebase等)では使えない。
  updated() {
    this.selnum(33)

    if (typeof this.dbEachPage !== 'undefined') {
      this.layout = this.dbEachPage.layout
      // console.log('2-1 ---- layout: ', this.layout)
      // this.layout.type = Number(this.dbEachPage.layout.type)
      // console.log('2-2 ---- layout: ', this.layout)
      // 上の行をコメントアウトして、以下の行を活かすと、暴走する
      // this.layout = JSON.parse(JSON.stringify(this.dbEachPage.layout))

      // } else {
      //   console.log('1-18 layout ***** ')
    }
  },

  // ⑨ methods は呼び出される度に実行
  // データが変更された時、反映したくない場合はmethodsを利用
  methods: {
    // test1() {
    //   this.$store.dispatch('bbb/updateCommon', this.cCommonWork)
    //   this.toastFileUpdate('登録', '登録しました。')
    // },

    selnum(num) {
      this.$nuxt.$emit('selnum', num)
    },

    toggleChk(num) {
      switch (num) {
        case 1:
          this.cCommonWork.hiddenDate = !this.cCommonWork.hiddenDate
          break
        case 2:
          this.cCommonWork.hiddenBtn = !this.cCommonWork.hiddenBtn
          break
        case 3:
          this.cCommonWork.hiddenLink = !this.cCommonWork.hiddenLink
          break
        case 11:
          this.cCommonWork.hiddenText1 = !this.cCommonWork.hiddenText1
          break
        case 12:
          this.cCommonWork.hiddenText2 = !this.cCommonWork.hiddenText2
          break
        case 13:
          this.cCommonWork.hiddenText3 = !this.cCommonWork.hiddenText3
          break
        case 14:
          this.cCommonWork.hiddenMainText = !this.cCommonWork.hiddenMainText
          break
        default:
          // console.log('---- error --- num in toggleChk(): ' + num)
          break
      }
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

    // modal 関連 ---------- start
    // showModalContent() {
    //   this.$refs['modal-content'].show()
    // },

    showModal1() {
      this.layoutInput = JSON.parse(JSON.stringify(this.dbEachPage.layout))
      // console.log('3-10 layout ------ showModal(): ', this.layoutInput)
      // this.cCommonWork = JSON.parse(JSON.stringify(this.cCommonData))
      // this.layout = this.dbEachPage
      // console.log('1-1 layout ----------- : ', this.layout)
      // console.log('1-2 type ----------- : ', this.layout.type)
      // console.log('1-3 fileUrl[0] ----------- : ', this.layout.fileUrl[0])
      // console.log('1-3 fileUrl[1] ----------- : ', this.layout.fileUrl[1])
      this.$refs['modal-1'].show()
    },

    showModal2() {
      this.cCommonWork = JSON.parse(JSON.stringify(this.cCommonData))
      this.$refs['modal-2'].show()
    },

    // claseModal() {
    //   this.$refs['modal-1'].hide()
    // },

    regEachPage() {
      // console.log('1-11 -- layoutInput -----: ', this.layoutInput)
      // console.log('1-12 -- layoutInput -----: ', this.layoutInput)
      // modalウィンドウを閉じる
      this.$refs['modal-1'].hide()

      // Firestre への保存
      // console.log('1-1 ------ cCommonWork ----: ', this.cCommonWork)
      this.$store
        .dispatch('bbb/updateEachPage', { pageNo: this.pageNo, layout: this.layoutInput })
        .then((value) => {
          if (value === 'regOK') {
            this.toastFileUpdate('登録', '登録しました。')
            this.layout.type = this.layoutInput.type
          } else {
            alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
          }
        })
        .catch((error) => {
          alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？: ', error)
        })
    },

    selEachPage(num) {
      this.layoutInput.type = num
    },

    regCommon() {
      // modalウィンドウを閉じる
      this.$refs['modal-2'].hide()

      // Firestre への保存
      // console.log('1-1 ------ cCommonWork ----: ', this.cCommonWork)
      this.$store
        .dispatch('bbb/updateCommon', this.cCommonWork)
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
      // console.log('----- Test log ----- in myDataSet()')
      try {
        this.cCommonData = this.dbCcommon.cCommon
        // this.layout = this.dbEachPage.layout
      } catch (error) {
        // alert('***** error ***** in myDataSet(): ' + error)
        // console.log('***** error ***** in myDataSet(): ' + error)
      }
    },

    // b31File のDB関連 start
    // initFileItem() {
    //   this.fileItem = {}
    //   // this.selectedFile = '選択されていません。'
    // },
    addFile() {
      // 下記の bbb は store/bbb.js のファイル名
      // this.$store.dispatch('bbb/addFile', this.fileItem)
      this.$store.dispatch('bbb/addFile', { pageNo: this.pageNo, fileItem: this.fileItem })
    },
    // b31File のDB関連 end

    // bbb DB へのデータ追加
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
      this.page.name = 'no_image.png'
      this.page.displayType = 'image'
      this.page.googleUrl = ''
      this.selectedFile = '選択されていません。'
      this.page.myLink = ''
    },

    add() {
      // 下記の bbb は store/bbb.js のファイル名
      // this.$store.dispatch('bbb/add', this.page)
      this.$store
        .dispatch('bbb/add', { pageNo: this.pageNo, page: this.page })
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

      // this.page.titleName = ''
      // this.page.mainText = ''
      // this.page.fileUrl = ''
      // this.page = ''
    },

    update() {
      // 下記の bbb は store/bbb.js のファイル名
      // this.$store.dispatch('bbb/update', { id: this.editId, page: this.page })
      this.$store
        .dispatch('bbb/update', { pageNo: this.pageNo, id: this.editId, page: this.page })
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
      const myPage = this.$store.getters['bbb/getMyPageById'](id)
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
      this.page.name = myPage.page.name
      this.selectedFile = myPage.page.name
      this.editId = id
    },

    editCancel() {
      this.initPageData()
      this.showEdit = false
      this.showReg = true
    },

    dataReset() {
      const myPage = this.$store.getters['bbb/getMyPageById'](this.editId)
      this.page.titleName = myPage.page.titleName
      this.page.mainDate = myPage.page.mainDate
      this.page.text1 = myPage.page.text1
      this.page.text2 = myPage.page.text2
      this.page.text3 = myPage.page.text3
      this.page.mainText = myPage.page.mainText
      // this.page.contentType = myPage.page.contentType
      this.page.displayType = myPage.page.displayType
      this.page.googleUrl = myPage.page.googleUrl
      this.page.fileUrl = myPage.page.fileUrl
      this.page.name = myPage.page.name
      this.selectedFile = myPage.page.name
    },

    remove(id) {
      // const myResult = confirm('本当に削除してよろしいでしょうか？')
      // if (myResult) {
      //   this.$store.dispatch('bbb/remove', id)
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
          // this.$store.dispatch('bbb/remove', id)
          this.$store
            .dispatch('bbb/remove', { pageNo: this.pageNo, id })
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

    fileExtension(e) {
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

      this.uploadPop()
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

      // トースト: ファイル アップデート完了しました。
      this.toastFileUpdate('ファイル アップロード', '完了しました。')

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
      const myPage = this.$store.getters['bbb/getMyPageById'](this.editId)
      this.page.displayType = myPage.page.displayType
      this.page.googleUrl = myPage.page.googleUrl
      this.page.fileUrl = myPage.page.fileUrl
      this.page.name = myPage.page.name
      this.selectedFile = myPage.page.name
      // this.showImageReg = false
      this.toggleShow = false
    },

    // ファイルを添付しない
    imageCancel() {
      this.toggleShow = false
      // this.initPageData()
      this.page.fileUrl = process.env.NO_IMAGE_URL
      // this.selected = '選択されていません。'
      this.selected = ''
      this.page.name = 'no_image.png'
      this.page.displayType = 'image'
      this.page.googleUrl = ''
      this.selectedFile = '選択されていません。'
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

    // DBに保存されている画像削除
    fileItemDel(id) {
      this.$store.dispatch('bbb/delFileItem', { pageNo: this.pageNo, id })
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
