<template>
  <div class="container-fluid m-0 p-1">
    <div v-for="dbHeader in dbHeaders" :key="dbHeader.id" class="m-0 p-0">
      <h5 class="text-light text-center m-0 p-1" :style="commonData.buttonColorBasicSet">{{ dbHeader.myData.m22 }}</h5>
    </div>

    <div class="row no-gutters">
      <!-- main表示 -->
      <!-- 以下の :key="dbPage.id" でソートされる -->
      <div v-for="(dbPage, index) in dbPages" :key="dbPage.id" class="col-sm-6 col-md-4">
        <div v-b-modal="'data-' + index" class="m-1 mt-2 border">
          <!-- <b-img :src="dbPage.page.fileUrl" class="m-0" alt="file" fluid> </b-img> -->

          <!-- タイトル ＆ 日付 -->
          <div class="px-1 d-flex justify-content-between align-items-center">
            <p class="m-0 p-0">{{ dbPage.page.titleName }}</p>
            <p :hidden="cCommonData.hiddenDate" class="m-0 p-0">{{ dbPage.page.mainDate }}</p>
          </div>

          <!-- 画像 -->
          <b-embed :src="dbPage.page.fileUrl" class="m-0" type="embed" alt="file" fluid />

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

          <!-- ボタン -->
          <div class="d-flex justify-content-between align-items-center">
            <!-- <p :hidden="cCommonData.hiddenDate" class="m-0 p-0 pl-1">{{ dbPage.page.mainDate }}</p> -->
            <b-button :hidden="cCommonData.hiddenBtn" :size="commonData.selectedBtnSize" class="px-1 py-0 m-1 ml-2 mb-1 float-center text-body" style="background-color: honeydew">{{ cCommonData.btnName }}</b-button>
          </div>
        </div>

        <!-- 。。。。。。。。。。。 モーダル表示 start 。。。。。。。。。。。 -->
        <b-modal :id="'data-' + index" hide-header size="xl">
          <!-- タイトル表示 -->
          <div class="border m-1 mt-3 p-2 d-flex justify-content-between" style="background-color: honeydew">
            <!-- <h5 class="m-0 px-1 float-left">{{ dbPage.page.titleName }}</h5> -->
            <h5 class="m-0 px-1">{{ dbPage.page.titleName }}</h5>
            <!-- <p :hidden="cCommonData.hiddenDate" class="text-right m-0 pl-2 pr-2">{{ dbPage.page.mainDate }}</p> -->
            <p :hidden="cCommonData.hiddenDate" class="m-0 pl-2 pr-2">{{ dbPage.page.mainDate }}</p>
          </div>

          <!-- 画像表示 -->
          <!-- <b-embed type="embed" :src="dbPage.page.fileUrl" class="m-0" alt="file"></b-embed> -->
          <!-- <b-img :src="dbPage.page.fileUrl" fluid alt="Responsive image"></b-img> -->
          <b-embed :src="dbPage.page.fileUrl" class="m-0" type="embed" alt="file" fluid />

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
        <!-- </div> -->
      </div>
    </div>

    <div v-show="isLogin" class="m-0 p-0">
      <!-- ============================== 管理機能 ============================== -->
      <div class="row m-0 mt-2 p-2 bg-dark">
        <div class="col-12 d-flex justify-content-between align-items-center">
          <h5 class="mx-2 m-0 p-0 py-1 text-white">以下は管理機能です。</h5>
          <!-- modal 起動ボタン start ***** -->
          <!-- <b-button v-b-modal.modal-1 class="m-0 p-0">ページ設定(Cテンプレート共通)</b-button> -->
          <b-button id="show-btn" @click="showModal">Cテンプレート共通設定</b-button>
          <!-- <b-button @click="showModal">page設定</b-button> -->
          <!-- modal 起動ボタン end ***** -->
        </div>

        <!-- modal ウィンドウ start ***** -->

        <!-- <b-modal id="modal-1"> -->
        <!-- <b-modal id="modal-1" ref="modal-1" hide-footer title="ページ設定"> -->
        <b-modal id="modal-1" ref="modal-1" hide-footer hide-header>
          <p class="my-2">以下の項目の「表示/非表示」及び「名称変更」</p>
          <!-- <label for="example-datepicker">Choose a date</label> -->
          <!-- <b-form-datepicker id="example-datepicker" v-model="cCommonWork.text1name" class="mb-2"></b-form-datepicker> -->

          <!-- sortDate -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input id="idChk1" size="lg" class="col-2 m-0 p-0" type="checkbox" :checked="!cCommonWork.hiddenDate" @change="toggleChk(1)" />
            <p class="col-4 m-0 p-0 px-1">年月日（変更不可）</p>
            <span v-if="!cCommonWork.hiddenDate" class="col-6 m-0 p-0 px-1">
              <b-form-input disabled value="年月日" class="border pl-4" for="idChk1"></b-form-input>
              <!-- <p class="border" for="idChk1">年月日</p> -->
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input disabled value="年月日" class="border pl-4" for="idChk1"></b-form-input>
            </del>
          </div>

          <!-- btnName -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input id="idChk2" size="lg" class="col-2 m-0 p-0" type="checkbox" :checked="!cCommonWork.hiddenBtn" @change="toggleChk(2)" />
            <p class="col-4 m-0 p-0 px-1">ボタンの名前</p>
            <span v-if="!cCommonWork.hiddenBtn" class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="cCommonWork.btnName" class="border" for="idChk2"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="cCommonWork.btnName" class="border" for="idChk2"></b-form-input>
            </del>
          </div>

          <!-- text1name -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input id="idChk11" size="lg" class="col-2 m-0 p-0" type="checkbox" :checked="!cCommonWork.hiddenText1" @change="toggleChk(11)" />
            <p class="col-4 m-0 p-0 px-1">1行目の名前</p>
            <span v-if="!cCommonWork.hiddenText1" class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="cCommonWork.text1name" class="border" for="idChk11"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="cCommonWork.text1name" class="border" for="idChk11"></b-form-input>
            </del>
          </div>

          <!-- text2name -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input id="idChk12" size="lg" class="col-2 m-0 p-0" type="checkbox" :checked="!cCommonWork.hiddenText2" @change="toggleChk(12)" />
            <p class="col-4 m-0 p-0 px-1">2行目の名前</p>
            <span v-if="!cCommonWork.hiddenText2" class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="cCommonWork.text2name" class="border" for="idChk12"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="cCommonWork.text2name" class="border" for="idChk12"></b-form-input>
            </del>
          </div>

          <!-- text3name -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input id="idChk13" size="lg" class="col-2 m-0 p-0" type="checkbox" :checked="!cCommonWork.hiddenText3" @change="toggleChk(13)" />
            <p class="col-4 m-0 p-0 px-1">3行目の名前</p>
            <span v-if="!cCommonWork.hiddenText3" class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="cCommonWork.text3name" class="border" for="idChk13"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input v-model="cCommonWork.text3name" class="border" for="idChk13"></b-form-input>
            </del>
          </div>

          <!-- sortDate -->
          <div class="row m-0 p-0 d-flex align-items-center">
            <input id="idChk3" size="lg" class="col-2 m-0 p-0" type="checkbox" :checked="!cCommonWork.hiddenMainText" @change="toggleChk(3)" />
            <p class="col-4 m-0 p-0 px-1">長文（変更不可）</p>
            <span v-if="!cCommonWork.hiddenMainText" class="col-6 m-0 p-0 px-1">
              <b-form-input disabled value="長文" class="border pl-4" for="idChk3"></b-form-input>
            </span>
            <del v-else class="col-6 m-0 p-0 px-1">
              <b-form-input disabled value="長文" class="border pl-4" for="idChk3"></b-form-input>
            </del>
          </div>

          <!-- button start -->
          <div class="modal-footer m-0 mt-2 p-0">
            <b-button class="mt-1" variant="outline-primary" @click="regCommon">登録</b-button>
            <b-button class="mt-1" variant="outline-dark" @click="$bvModal.hide('modal-1')">閉じる</b-button>
          </div>
          <!-- button end -->
        </b-modal>
        <!-- modal ウィンドウ end ***** -->

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
                <b-embed :src="dbPage.page.fileUrl" fluid class="m-0" type="embed" alt="file" />

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

        <!-- 編集 start -->
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

              <!-- 以下の float-cb について： 上記の float-left の解除ができないので、style で設定 -->
              <div class="float-cb p-2">以下の「画像登録・削除」から、新たに画像を追加したり、 不要な画像を削除することができます。</div>
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

            <hr />

            <!-- 画像添付 start-->
            <div class="mx-2 pb-2">
              <p class="mb-0">画像を添付する場合は、「画像添付」ボタンをクリックしてください。</p>
              <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageList()">画像添付</button>
              <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageCancel()">キャンセル</button>
            </div>

            <!-- <div v-show="showImageFlg" class="col-12"> -->
            <!-- <button :size="commonData.selectedBtnSize" class="ml-2" @click="imageList()">画像リスト表示</button> -->
            <div v-show="toggleShow">
              <!-- ここから -->
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

              <!-- 以下の float-cb について： 上記の float-left の解除ができないので、style で設定 -->
              <div class="float-cb p-2">以下の「画像新規登録・削除」から、新たに画像を追加したり、 不要な画像を削除することができます。</div>
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
              <input ref="input" type="file" accept="image/*, .pdf" @change="fileExtension($event)" />
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
              <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 ml-2 px-1 py-0" @click="imageDelete()">画像リスト表示</b-button>
              <b-button :size="commonData.selectedBtnSize" class="m-0 ml-2 px-1 py-0" @click="imageDeleteCancel()">閉じる</b-button>
            </div>

            <!-- 画像リスト表示 -->
            <div v-show="toggleDel" class="m-0 p-0">
              <div class="col-12 m-0 p-0 mt-2" style="background-color: honeydew">
                <div class="row no-gutters">
                  <div v-for="myImage in myImages" :key="myImage.id" class="m-0 p-1 col-4">
                    <!-- <div v-for="myImage in myImages" :key="myImage.id" class="p-1 col-4" style="background-color:lightslategray;"> -->
                    <div class="border m-0 p-0">
                      <!-- <b-img :src="myImage.url" fluid class="m-0" alt="file" /> -->
                      <b-embed :src="myImage.url" fluid class="m-0" type="embed" alt="file" />
                      <b-button :size="commonData.selectedBtnSize" class="m-1 ml-2 px-1 py-0 d-flex" @click="deleteImage(myImage.name, myImage.url)">削除</b-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 画像削除 End -->
          </div>
        </div>
      </div>
    </div>
    <p>{{ todaySet() }}</p>
    <p>{{ myDataSet() }}</p>
    <!-- <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 ml-2 px-1 py-0" @click="test1()">test1</b-button> -->
  </div>
</template>

<script>
// import { BIconClockHistory } from 'bootstrap-vue'
// import { mapGetters } from 'vuex'
import firebase from '~/plugins/firebase'

const storage = firebase.storage()
const storageRef = storage.ref()
const imagesRef = storageRef.child('ccc/c22')
const db = firebase.firestore()

export default {
  data() {
    return {
      myCount: 0,
      pageNo: 'c22',
      todaySetFlg: false,
      editId: '',
      myData: {},
      commonData: {},

      cCommonData: {
        hiddenDate: false,
        hiddenBtn: false,
        hiddenText1: false,
        hiddenText2: false,
        hiddenText3: false,
        btnName: '拡大表示',
        text1name: '価格',
        text2name: '生年月日',
        text3name: '性別',
        hiddenMainText: false,
      },
      cCommonWork: {
        hiddenDate: false,
        hiddenBtn: false,
        hiddenText1: false,
        hiddenText2: false,
        hiddenText3: false,
        btnName: '',
        text1name: '',
        text2name: '',
        text3name: '',
        hiddenMainText: false,
      },
      cCommon: {},
      selected: '選択されていません。',
      showEdit: false,
      showReg: true,
      page: {
        titleName: '',
        mainDate: '',
        mainText: '',
        text1: '',
        text2: '',
        text3: '',
        fileUrl: process.env.NO_IMAGE_URL,
      },

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
    // ...mapGetters({ ccc: 'orderdMainDate' }),

    isLogin() {
      return this.$store.getters['user/isLogin']
    },

    dbPages() {
      // return this.$store.getters['ccc/orderdDbPages']('c22')
      return this.$store.getters['ccc/orderdMainDate']
    },

    dbCcommon() {
      return this.$store.getters['ccc/getCommonById']('common')
    },

    dbHeaders() {
      return this.$store.getters['storeheader/orderdDbHeaders']
    },
  },

  // ② created は画面を開いたとき呼ばれる。
  created() {
    // 下記の ccc は store/ccc.js のファイル名
    this.$store.dispatch('ccc/init', db.collection('ccc').doc(this.pageNo).collection(this.pageNo).orderBy('page.mainDate', 'desc'))
    this.$store.dispatch('ccc/initCommon')

    // 下記の storeheader は store/storeheader.js のファイル名
    this.$store.dispatch('storeheader/init')
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
    this.selnum(22)
  },

  // ⑨ methods は呼び出される度に実行
  // データが変更された時、反映したくない場合はmethodsを利用
  methods: {
    // test1() {
    //   this.$store.dispatch('ccc/updateCommon', this.cCommonWork)
    //   this.toastFileUpdate('登録', '登録しました。')
    // },

    toggleChk(num) {
      switch (num) {
        case 1:
          this.cCommonWork.hiddenDate = !this.cCommonWork.hiddenDate
          break
        case 2:
          this.cCommonWork.hiddenBtn = !this.cCommonWork.hiddenBtn
          break
        case 3:
          this.cCommonWork.hiddenMainText = !this.cCommonWork.hiddenMainText
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
        default:
          // console.log('---- error --- num in toggleChk(): ' + num)
          break
      }
    },

    // console.log('------- chkNemu1 in toggleChk(): ' + this.myData2.chkMenu1)

    // modal 関連 ---------- start
    showModal() {
      // this.cCommonWork.hiddenDate = this.cCommonData.hiddenDate
      // this.cCommonWork.hiddenBtn = this.cCommonData.hiddenBtn
      // this.cCommonWork.hiddenText1 = this.cCommonData.hiddenText1
      // this.cCommonWork.hiddenText2 = this.cCommonData.hiddenText2
      // this.cCommonWork.hiddenText3 = this.cCommonData.hiddenText3
      // this.cCommonWork.btnName = this.cCommonData.btnName
      // this.cCommonWork.text1name = this.cCommonData.text1name
      // this.cCommonWork.text2name = this.cCommonData.text2name
      // this.cCommonWork.text3name = this.cCommonData.text3name
      // this.cCommonWork.hiddenMainText = this.cCommonData.hiddenMainText
      this.cCommonWork = JSON.parse(JSON.stringify(this.cCommonData))
      this.$refs['modal-1'].show()
    },

    // claseModal() {
    //   this.$refs['modal-1'].hide()
    // },

    regCommon() {
      // modalウィンドウを閉じる
      this.$refs['modal-1'].hide()

      // Firestre への保存
      // console.log('1-1 ------ cCommonWork ----: ', this.cCommonWork)
      this.$store
        .dispatch('ccc/updateCommon', this.cCommonWork)
        .then((value) => {
          // console.log('3-1-OK +++++++++ in home-(): ', value)
          if (value === 'regOK') {
            this.toastFileUpdate('登録', '登録しました。')
          } else {
            alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
          }
        })
        .catch((error) => {
          alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？: ', error)
          // console.log('3-1-NG ***** error ***** in home-(): ', error)
        })

      // this.toastFileUpdate('登録', '登録しました。')
    },
    // modal 関連 ---------- end

    myDataSet() {
      // console.log('***** Test log ***** in myDataSet()')
      try {
        // this.commonData = this.dbCommon.myData
        this.cCommonData = this.dbCcommon.cCommon
      } catch (error) {
        // alert('***** error ***** in myDataSet(): ' + error)
        // console.log('***** error ***** in myDataSet(): ' + error)
      }
    },

    selnum(num) {
      // this.selected = num
      // console.log('header selnum selected: ' + num)
      this.$nuxt.$emit('selnum', num)
    },

    // メニューデータをFireStoreからロードしてセット
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
      // console.log('mainDate in todaySet2(): ', this.page.mainDate)
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
    // $().button('toggle'),
    // ccc DB へのデータ追加
    add() {
      // 下記の ccc は store/ccc.js のファイル名
      // this.$store.dispatch('ccc/add', this.page)
      this.$store
        .dispatch('ccc/add', { pageNo: this.pageNo, page: this.page })
        .then((value) => {
          // console.log('3-1-OK +++++++++ in home-(): ', value)
          if (value === 'regOK') {
            this.toastFileUpdate('登録', '登録しました。')
          } else {
            alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
          }
        })
        .catch((error) => {
          alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？: ', error)
          // console.log('3-1-NG ***** error ***** in home-(): ', error)
        })

      // this.page.titleName = ''
      // this.page.mainText = ''
      // this.page.fileUrl = ''
      this.page = ''
    },
    update() {
      // 下記の ccc は store/ccc.js のファイル名
      // this.$store.dispatch('ccc/update', { id: this.editId, page: this.page })
      this.$store
        .dispatch('ccc/update', { pageNo: this.pageNo, id: this.editId, page: this.page })
        .then((value) => {
          // console.log('3-1-OK +++++++++ in home-(): ', value)
          if (value === 'regOK') {
            this.toastFileUpdate('登録', '登録しました。')
          } else {
            alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
          }
        })
        .catch((error) => {
          alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？: ', error)
          // console.log('3-1-NG ***** error ***** in home-(): ', error)
        })
    },
    edit(id) {
      this.showEdit = true
      this.showReg = false
      const myPage = this.$store.getters['ccc/getMyPageById'](id)
      this.page.titleName = myPage.page.titleName
      this.page.mainDate = myPage.page.mainDate
      this.page.text1 = myPage.page.text1
      this.page.text2 = myPage.page.text2
      this.page.text3 = myPage.page.text3
      this.page.mainText = myPage.page.mainText
      this.page.fileUrl = myPage.page.fileUrl
      // this.page.hiddenBtn = myPage.page.hiddenBtn
      this.editId = id
    },
    editCancel() {
      // this.page.titleName = ''
      // this.page.mainDate = moment(Date()).format('YYYY-MM-DD')
      this.initPageData()
      this.todaySet2()
      // this.page.fileUrl = 'https://firebasestorage.googleapis.com/v0/b/hiro1-223af.appspot.com/o/no_image.png?alt=media&token=d8ab83f9-db9c-46a2-8795-fe2ad439f419'
      this.showEdit = false
      this.showReg = true
    },
    dataReset() {
      const myPage = this.$store.getters['ccc/getMyPageById'](this.editId)
      this.page.titleName = myPage.page.titleName
      this.page.mainDate = myPage.page.mainDate
      this.page.text1 = myPage.page.text1
      this.page.text2 = myPage.page.text2
      this.page.text3 = myPage.page.text3
      this.page.mainText = myPage.page.mainText
      this.page.fileUrl = myPage.page.fileUrl
      // this.page.hiddenBtn = myPage.page.hiddenBtn
    },

    initPageData() {
      this.page.titleName = ''
      this.page.mainText = ''
      this.page.text1 = ''
      this.page.text2 = ''
      this.page.text3 = ''
      this.page.fileUrl = process.env.NO_IMAGE_URL
      // this.page.mainDate = ''
      this.todaySet2()
    },

    remove(id) {
      // const myResult = confirm('本当に削除してよろしいでしょうか？')
      // if (myResult) {
      //   this.$store.dispatch('ccc/remove', id)
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
          // this.$store.dispatch('ccc/remove', id)
          this.$store
            .dispatch('ccc/remove', { pageNo: this.pageNo, id })
            .then((value) => {
              // console.log('3-1-OK +++++++++ in home-(): ', value)
              if (value === 'regOK') {
                this.toastFileUpdate('登録', '登録しました。')
              } else {
                alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？')
              }
            })
            .catch((error) => {
              alert('***** error ***** 登録に失敗しました。\n 管理者用アカウントでログインしていますか？: ', error)
              // console.log('3-1-NG ***** error ***** in home-(): ', error)
            })
        }
      })
    },
    // toggle(dbPage) {
    //   this.$store.dispatch('ccc/toggle', dbPage)
    // },
    onSubmitEdit(evt) {
      // alert(JSON.stringify(this.page))
      evt.preventDefault()
      this.update()
      // this.toastFileUpdate('編集', '登録しました。')
      // 以下はinputの入力をリセット
      // this.$refs.input.value = ''
      this.page.titleName = ''
      // this.page.mainDate = moment(Date()).format('YYYY-MM-DD')
      // this.todaySet2()
      // this.page.fileUrl = 'https://firebasestorage.googleapis.com/v0/b/hiro1-223af.appspot.com/o/no_image.png?alt=media&token=d8ab83f9-db9c-46a2-8795-fe2ad439f419'
      this.initPageData()
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
      // this.toastFileUpdate('登録', '登録しました。')
      // 以下はinputの入力をリセット
      // this.$refs.input.value = ''
      // this.page.titleName = ''
      this.page = {}
      this.todaySet2()
      this.initPageData()
      this.selected = '選択されていません。'
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our page values
      this.page.titleName = ''
      // this.page.mainDate = moment(Date()).format('YYYY-MM-DD')
      // this.todaySet2()
      // this.page.fileUrl = 'https://firebasestorage.googleapis.com/v0/b/hiro1-223af.appspot.com/o/no_image.png?alt=media&token=d8ab83f9-db9c-46a2-8795-fe2ad439f419'
      this.initPageData()
      // this.$nextTick(() => {
      //   this.show = true
      // })
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

      if (this.fileType === 'png' || this.fileType === 'jpg' || this.fileType === 'jpeg') {
        // console.log('file extension 画像: ' + fileExt)
        vm.resize(e)
      } else {
        // console.log('file extension 画像以外: ' + fileExt)
        this.newFile = file
        // this.reserve = true
      }

      this.uploadPop()
    },
    // 画像関連メソッド
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
      // console.log('1 ----------- myImages in imageDelete: ' + JSON.stringify(this.myImages))
      // console.log('2 ----------- myImages.length in imageDelete: ' + this.myImages.length)
      // console.log('3 ----------- myImages.name in imageDelete: ' + this.myImages[0].name)

      // ソート ←上記の myImage.length が 0 でソートできない
      this.myImages.sort(function (a, b) {
        // if (a.url > b.url) return 1
        // if (a.url < b.url) return -1
        // return 0
        // if (a.name > b.name) {
        //   // console.log('1-a.name: ' + a.name)
        //   return 1
        // } else {
        //   // console.log('2-a.name: ' + a.name)
        //   return -1
        // }
      })
    },
    imageListEdit2() {
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
      // console.log('1 ----------- myImages in imageDelete: ' + JSON.stringify(this.myImages))
      // console.log('2 ----------- myImages.length in imageDelete: ' + this.myImages.length)
      // console.log('3 ----------- myImages.name in imageDelete: ' + this.myImages[0].name)

      // ソート ←上記の myImage.length が 0 でソートできない
      // this.myImages.sort(function(a, b) {
      //   if (a.name > b.name) {
      //     // console.log('1-a.name: ' + a.name)
      //     return 1
      //   } else {
      //     // console.log('2-a.name: ' + a.name)
      //     return -1
      //   }
      // })
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

del {
  color: rgba(255, 0, 0, 1);
}

/* h1,
h2 {
  font-weight: normal;
} */
/* img {
  width: 100%;
} */
</style>
