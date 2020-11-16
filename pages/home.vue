<template>
  <div class="container-fluid no-gutters m-0 p-0">
    <!-- ------------------ カルーセル-2（回転木馬） Start ------------------ -->
    <div class="row no-gutters">
      <div class="col-12 m-0 p-0"></div>
      <!-- 画像可変 start -->
      <b-carousel id="carousel-1" v-model="slide" :interval="mInterval" fade indicators class="m-0 p-1 pt-0" style="text-shadow: 1px 1px 2px #333" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
        <div v-for="dbCarousel in dbCarousels" :key="dbCarousel.id">
          <b-link :to="dbCarousel.carousel.myLink" @click="selnum(99999)">
            <b-carousel-slide :img-src="dbCarousel.carousel.imageUrl">
              <h2 class="textShadow m-0 p-0">{{ dbCarousel.carousel.comment }}</h2>
            </b-carousel-slide>
          </b-link>
        </div>
      </b-carousel>
      <!-- 画像可変 end -->

      <!-- 画像固定 start -->
      <!-- <b-carousel id="carousel-1" v-model="slide" :interval="1500" fade indicators background="#ababab" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
        <b-carousel-slide img-src="../assets/mansion1.jpg">
          <h2 class="text-primary">マンション外観</h2>
        </b-carousel-slide>
      </b-carousel> -->
      <!-- 画像固定 end -->
    </div>
    <!-- ------------------ カルーセル-2（回転木馬） End ------------------ -->

    <!-- ------------------ トピックス Start ------------------ -->
    <div class="row m-0 mt-3 p-0">
      <div class="col-12 m-0 p-1">
        <!-- <div v-for="dbHeader in dbHeaders" :key="dbHeader.id" class="m-0 p-0"> -->
        <!-- <h5 class="text-light bg-info text-center m-0 p-1">{{ commonData.mTopics }}</h5> -->
        <h5 class="text-light text-center m-0 p-1" :style="commonData.buttonColorBasicSet">{{ commonData.mTopics }}</h5>
        <!-- </div> -->
      </div>
    </div>

    <!-- main表示 -->
    <div class="row m-0 mt-3 p-0">
      <!-- 以下の :key="dbHome.id" でソートされる -->
      <div v-for="(dbHome, index) in dbHomes" :key="dbHome.id" class="col-sm-6 col-md-4 m-0 p-1">
        <!-- <div v-b-modal="'data-' + index" class="border m-0"> -->
        <div class="border m-0">
          <div class="m-0 p-0 d-flex justify-content-between">
            <div v-if="dbHome.home.myLink" class="m-0 p-0">
              <!-- <div v-if="dbHome.home.titleName === 'aaaa'" class="m-0 p-0"> -->
              <!-- <b-button href="/a41" :size="commonData.selectedBtnSize" class="px-1 py-0 m-1 ml-2 mb-1 float-center text-body" style="background-color:honeydew;">詳細</b-button> -->
              <b-button :to="dbHome.home.myLink" :size="commonData.selectedBtnSize" class="px-1 py-0 m-1 ml-2 mb-1 float-center text-body" style="background-color: honeydew">関連情報へジャンプ</b-button>
            </div>
            <div v-else class="m-0 p-0">
              <div v-b-modal="'data-' + index" class="m-0">
                <b-button :size="commonData.selectedBtnSize" class="px-1 py-0 m-1 ml-2 mb-1 float-center text-body" style="background-color: honeydew">拡大表示</b-button>
              </div>
            </div>
            <p class="m-0 p-0 pr-1 text-right">{{ dbHome.home.mainDate }}</p>
          </div>
          <p class="m-0 p-0 pl-1">{{ dbHome.home.titleName }}</p>
          <!-- <b-img :src="dbHome.home.fileUrl" class="m-0 p-0" alt="file" fluid> </b-img> -->
          <b-embed :src="dbHome.home.fileUrl" class="m-0 p-0" type="embed" alt="file" fluid />
          <!-- <p class="m-0 p-0 pl-1 text-break overflow-auto" style="overflow-wrap: break-word; max-height:61px; background-color:gainsboro;">{{ dbHome.home.mainText }}</p> -->
          <p class="m-0 p-0 pl-1 text-break overflow-auto" style="overflow-wrap: break-word; max-height: 61px">{{ dbHome.home.mainText }}</p>
        </div>
        <!-- <b-button class="px-1 py-0 m-1 float-left" variant="primary" @click="edit(dbHome.id)">編集</b-button> -->
        <!-- <b-button class="px-1 py-0 m-1" @click="remove(dbHome.id)">削除</b-button> -->

        <!-- 。。。。。。。。。。。 モーダル表示 start 。。。。。。。。。。。 -->
        <b-modal :id="'data-' + index" hide-header size="xl">
          <!-- タイトル表示 -->
          <div class="border m-1 mt-3 pb-1" style="background-color: honeydew">
            <h5 class="m-0 p-1 float-left">{{ dbHome.home.titleName }}</h5>
            <p class="text-right m-0 pl-2 pr-2">{{ dbHome.home.mainDate }}</p>
          </div>

          <!-- 画像表示 -->
          <b-embed :src="dbHome.home.fileUrl" class="m-0 p-0" type="embed" alt="file"></b-embed>
          <!-- <b-img :src="dbHome.home.fileUrl" fluid alt="Responsive image"></b-img> -->

          <!-- 1--------------------- モーダル body 表示 ------------------1 -->

          <div class="modal-body m-1 p-1">
            <!-- 本文表示 -->
            <h5 class="text-justify text-break m-0 p-2" style="white-space: pre-wrap">{{ dbHome.home.mainText }}</h5>
          </div>
        </b-modal>
        <!-- 。。。。。。。。。。。 モーダル表示 end 。。。。。。。。。。。 -->
        <!-- </div> -->
      </div>
    </div>
    <!-- ------------------ トピックス End ------------------ -->
    <!-- <b-button class="px-1 py-0 m-1" @click="test1()">manFlg表示</b-button> -->

    <div v-show="isLogin" class="m-0 p-0">
      <!-- ============================== 管理機能 ============== -->
      <!-- <div class="row m-0 mt-2 p-0 bg-dark"> -->
      <!-- <div class="d-flex flex-row col-12 m-0 p-2"> -->
      <div class="d-flex justify-content-between flex-row bg-dark m-0 mt-3 p-2">
        <h4 class="m-0 p-0 text-white">管理機能</h4>
        <!-- <b-button variant="primary" class="m-1 ml-2 px-1 py-0" @click="regCarousel">登録</b-button> -->
        <!-- <b-button variant="primary" class="m-1 ml-2 px-1 py-0" @click="onCarousel()">① カルーセル</b-button> -->
        <b-button :size="commonData.selectedBtnSize" style="background-color: midnightblue" class="m-0 ml-2 px-1 py-0" @click="onCarousel()">① パラパラ画像</b-button>
        <b-button :size="commonData.selectedBtnSize" style="background-color: midnightblue" class="m-0 ml-2 px-1 py-0" @click="onTopics()">② トピックス</b-button>
        <div class="d-flex align-items-center justify-content-end text-white m-0 p-0">a1.0.0</div>
      </div>
      <!-- </div> -->
      <!-- =========================== 管理： カルーセル機能 --------- -->
      <div v-show="showCarousel" class="m-0 mt-2 p-0">
        <div class="row m-0 p-2" style="background-color: midnightblue">
          <h6 class="mx-2 m-0 p-0 pt-1 text-white">① パラパラ画像（画像を複数登録するとSort番号順に表示されます）</h6>

          <!-- ーーーーー ーーー パラパラの間隔 start -->
          <!-- <div class="col-12 m-0 mt-2 p-2 d-flex flex-low" style="background-color:cornflowerblue;"> -->
          <div class="col-12 m-0 mt-2 p-2 d-flex flex-low" style="background-color: skyblue">
            <h5 class="col-4 m-0 p-0 pt-2">パラパラの間隔:</h5>
            <b-form-input v-model="inputInterval" class="col-3" required placeholder="入力例：2000" />
            <p class="col-2 m-0 pt-2">[ミリ秒]</p>
            <b-button :size="commonData.selectedBtnSize" class="col-2 m-1 ml-2 px-1 py-0" variant="primary" @click="setIntervalCarousel()">登録</b-button>
          </div>
          <!-- <p>{{ inputInterval }}</p> -->
          <!-- ーーーーー ーーー パラパラの間隔 end -->

          <!-- 現在の登録状況 ＆ 削除 start -->
          <!-- <div class="m-0 mt-2 p-0" style="background-color:cornflowerbluelightblue;"> -->
          <div class="col-12 m-0 mt-2 p-0" style="background-color: aliceblue">
            <h5 class="mx-2 mb-0 p-0 pt-1">現在の登録状況 ＆ 削除</h5>

            <div class="row m-0 p-0">
              <!-- <b-form-group v-for="dbCarousel in dbCarousels" :key="dbCarousel.id" class="border m-1 float-left"> -->
              <b-form-group v-for="dbCarousel in dbCarousels" :key="dbCarousel.id" class="col-4 m-0 p-1">
                <div class="border m-0 p-0" style="background-color: white">
                  <!-- <b-img :src="dbCarousel.carousel.imageUrl" height="144" width="192" class="m-0" alt="file"> </b-img> -->
                  <b-img :src="dbCarousel.carousel.imageUrl" fluid class="m-0" alt="file"> </b-img>
                  <p class="m-0 ml-1">{{ dbCarousel.carousel.sortNo }}</p>
                  <p class="m-0 ml-1">{{ dbCarousel.carousel.comment }}</p>
                  <b-button :size="commonData.selectedBtnSize" class="m-1 ml-2 px-1 py-0 d-flex" @click="deleteCarousel(dbCarousel.id)">削除</b-button>
                </div>
              </b-form-group>
            </div>
          </div>
          <!-- 現在の登録状況 ＆ 削除 end -->

          <!-- 新規登録 start -->
          <div v-show="showReg" class="col-12 m-0 p-0">
            <div class="m-0 mt-2 p-0" style="background-color: lightsteelblue">
              <h5 class="mx-2 mb-0 p-0 pt-1">新規登録</h5>

              <div class="m-2">
                下の画像から選択してください。: <strong>{{ selected }}</strong>
              </div>

              <div class="row no-gutters">
                <!-- <b-form-group v-for="(myImage, index2) in myImages" :key="myImage.id" class="border m-1 float-left"> -->
                <b-form-group v-for="(myImage, index2) in myImages" :key="myImage.id" class="col-4 m-0 p-1">
                  <div class="image_box border" @click="selImageCarousel(myImage.url, index2)">
                    <b-img v-model="selected" :src="myImage.url" fluid class="m-0" alt="file"> </b-img>
                    <b-form-radio v-model="selected" :value="'No.' + ++index2" class="positionRadioBtn ml-4 p-0"> </b-form-radio>
                  </div>
                </b-form-group>
              </div>

              <!-- 以下の float-cb について： 上記の float-left の解除ができないので、style で設定 -->
              <div class="float-cb row p-0 pt-2 m-0">
                <b-form-group label-for="input-1" label="Sort(数値):" class="col-2 m-0 mt-2 p-0 px-1" />
                <div class="col-10 m-0 p-0 pr-2">
                  <!-- <b-form-input id="input-1" v-model="carouselReg.sortNo" type="number" class="border" required placeholder="桁数を揃えてください。（入力例：01）" /> -->
                  <b-form-input id="input-1" v-model="carouselReg.sortNo" type="number" class="border" required placeholder="入力した番号(逆順)に表示されます。" />
                </div>

                <b-form-group label-for="input-2" label="コメント:" class="col-2 m-0 mt-3 p-0 px-1" />
                <div class="col-10 m-0 p-0 pr-2">
                  <b-form-input id="input-2" v-model="carouselReg.comment" class="border mt-1" required placeholder="空欄でもかまいません。" />
                </div>

                <!-- <b-form-group label-for="input-3" label="リンク:" class="col-2 m-0 mt-3 p-0 px-1" /> -->
                <b-form-group label="リンク:" class="col-2 m-0 mt-3 p-0 px-1" />
                <div class="col-10 m-0 p-0 pr-2">
                  <!-- <b-form-input id="input-3" v-model="carouselReg.myLink" class="border mt-1" required placeholder="空欄でもかまいません。" /> -->
                  <b-form-input v-model="carouselReg.myLink" class="border mt-1" required placeholder="空欄でもかまいません。" />
                </div>
              </div>

              <!-- 以下の row は改行のため -->
              <div class="row col-12 mt-2">
                <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-1 ml-2 px-1 py-0" @click="regCarousel">登録</b-button>
                <b-button :size="commonData.selectedBtnSize" variant="dark" class="m-1 px-1 py-0" @click="cancelCarousel">登録取消</b-button>
              </div>

              <!-- 以下の float-cb について： 上記の float-left の解除ができないので、style で設定 -->
              <div class="float-cb p-2">以下の「画像新規登録・削除」から、新たに画像を追加したり、 不要な画像を削除することができます。</div>

              <!-- 消すな ここから3行 -->
              <!-- <div v-show="hihyouji" class="col-12 mt-2">
              <b-form-input v-model="carousel.imageUrl" type="text" required placeholder=""></b-form-input>
            </div> -->
              <!-- 消すな ここまで -->
              <!-- 画像添付 end -->
            </div>
          </div>
          <!-- 新規登録 End -->

          <!-- 1--------- 画像新規登録・削除 ---------1  -->
          <div class="col-12 m-0 p-0">
            <!-- <div class="col-12 m-0 p-2 mt-2" style="background-color:midnightblue;"> -->
            <div class="m-0 p-2 mt-2" style="background-color: lightblue">
              <h5>画像新規登録・削除</h5>
              <!-- 画像登録 Start -->
              <!-- <div class="col-12 m-0 p-2 mt-3" style="background-color:thistle;"> -->
              <div class="m-0 p-2 mt-3" style="background-color: cadetblue">
                <h5>画像登録</h5>
                <input ref="input" type="file" accept=".jpg, .png, .pdf" @change="resizeCarousel($event)" />
                <!-- <input ref="input" type="file" accept="*" @change="fileExtension($event)" /> -->
                <!-- <input type="file" :multiple="false" accept="image/*" @change="resize($event)" /> -->
                <br />
                <div>
                  <!-- サムネイル用canvas -->
                  <canvas ref="thumbnail" class="mt-1" :width="0" :height="0" />
                </div>

                <div v-show="reserve">
                  <!-- <p>アップロードファイル名： {{ fileName }}</p> -->
                  <!-- アップロードボタン -->
                  <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 px-1 py-0" @click="uploadImageCarousel()">Upload</b-button>
                  <!-- <b-button :size="commonData.selectedBtnSize" class="ml-2 m-0 px-1 py-0" my-0 @click="resetCarousel()">Cancel</b-button> -->
                  <b-button :size="commonData.selectedBtnSize" class="ml-2 m-0 px-1 py-0" my-0 @click="reset()">Cancel</b-button>
                  <!-- upload()の最後で、リスト表示 -->
                </div>
              </div>
              <!-- 画像登録 End -->

              <!-- 画像削除 Start -->
              <div class="col-12 m-0 p-2 mt-2" style="background-color: lightslategray">
                <h5>画像削除</h5>
                <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 ml-2 px-1 py-0" @click="imageDeleteCarousel()">画像リスト表示</b-button>
                <b-button :size="commonData.selectedBtnSize" class="m-0 ml-2 px-1 py-0" @click="imageDeleteCancel()">閉じる</b-button>
              </div>
              <!-- 画像リスト表示 Start -->
              <div v-show="toggleDel" class="row m-0">
                <div v-for="myImage in myImages" :key="myImage.id" style="background-color: lightslategray" class="col-4 m-0 p-1">
                  <div class="border m-0 p-0">
                    <b-img :src="myImage.url" fluid class="m-0" alt="file" />
                    <br />
                    <b-button :size="commonData.selectedBtnSize" class="m-1 ml-2 px-1 py-0 d-flex" @click="deleteImageCarousel(myImage.name, myImage.url)">削除</b-button>
                  </div>
                </div>
              </div>
              <!-- 画像リスト表示 End -->
              <!-- 画像削除 End -->
            </div>
          </div>
        </div>
      </div>

      <!-- ================================ 管理： トピックス機能 -------- -->
      <div v-show="showTopics" class="m-0 mt-2 p-0">
        <div class="row m-0 p-2" style="background-color: midnightblue">
          <h5 class="col-12 mx-2 m-0 p-0 py-1 text-white">② トピックス</h5>

          <!-- 現在の登録状況 ＆ 削除 start -->
          <div class="col-12 m-0 mt-2 p-0" style="background-color: skyblue">
            <h5 class="mx-2 mb-0 p-0 pt-1">現在の登録状況 ＆ 編集・削除</h5>
            <p class="mx-2 mb-0 p-0">ソート番号（逆順）で表示されます。</p>

            <div class="row no-gutters">
              <!-- <div v-for="dbHome in dbHomes" :key="dbHome.id" class="border m-1 float-left"> -->
              <div v-for="dbHome in dbHomes" :key="dbHome.id" class="col-4 m-0 p-1">
                <div class="border m-0 p-0" style="background-color: white">
                  <p class="m-0 p-0 pl-1">ソート番号：{{ dbHome.home.sortNo }}</p>
                  <p class="m-0 p-0 pr-1 text-right">{{ dbHome.home.mainDate }}</p>
                  <p class="m-0 p-0 pl-1">{{ dbHome.home.titleName }}</p>
                  <!-- <b-img :src="dbHome.home.fileUrl" class="m-0 p-0" alt="file" fluid> </b-img> -->
                  <b-embed :src="dbHome.home.fileUrl" class="m-0 p-0" type="embed" alt="file" fluid />
                  <p class="m-0 p-0 pl-1 text-break overflow-auto" style="overflow-wrap: break-word; max-height: 62px; background-color: gainsboro">{{ dbHome.home.mainText }}</p>
                  <!-- <p class="m-0 p-0">{{ dbHome.home.mainText }}</p> -->
                  <b-button :size="commonData.selectedBtnSize" class="px-1 py-0 m-1 float-left" variant="primary" @click="edit(dbHome.id)">編集</b-button>
                  <b-button :size="commonData.selectedBtnSize" class="px-1 py-0 m-1" @click="remove(dbHome.id)">削除</b-button>
                </div>
              </div>
            </div>
          </div>
          <!-- 編集 start -->
          <div v-show="showEdit" class="col-12 m-0 p-0">
            <div class="m-0 p-0 mt-1" style="background-color: linen">
              <!-- <h4 class="mx-2 mt-0 p-0 pt-1 float-left">編集</h4> -->
              <div class="d-flex flex-low">
                <h4 class="mx-2 my-0 p-0 pt-1">編集</h4>
                <b-button :size="commonData.selectedBtnSize" variant="dark" class="m-1 px-1 py-0" @click="editCancel()">編集取消</b-button>
              </div>
              <b-form @submit="onSubmitEdit">
                <b-button :size="commonData.selectedBtnSize" type="submit" variant="primary" class="m-1 ml-2 px-1 py-0">登録</b-button>
                <b-button :size="commonData.selectedBtnSize" variant="dark" class="m-1 px-1 py-0" @click="dataResetEdit()">データリセット</b-button>
                <div class="row p-0 pt-2 m-0 mr-2">
                  <!-- <div class="col-3 m-0 p-0">
                    <b-form-group label-for="input-a1" label="SortNo(必須):" class="m-0 mt-1 p-0" />
                  </div> -->
                  <b-form-group label-for="input-a1" label="SortNo(必須):" class="col-3 m-0 px-1 pt-2"> </b-form-group>
                  <div class="col-9 m-0 p-0">
                    <b-form-input id="input-a1" v-model="home.sortNo" type="number" class="border" required placeholder="入力しないと登録できません。" />
                  </div>
                </div>

                <div class="row p-0 pt-2 m-0 mr-2">
                  <div class="col-3 m-0 p-0">
                    <b-form-group label-for="input-a2" label="タイトル(必須):" class="m-0 mt-1 p-0" />
                  </div>
                  <div class="col-9 m-0 p-0">
                    <b-form-input id="input-a2" v-model="home.titleName" class="border" required placeholder="入力しないと登録できません。" />
                  </div>
                </div>

                <div class="row p-0 pt-2 m-0 mr-2">
                  <b-form-group label-for="input-a3" label="日付(必須):" class="col-3 m-0 px-1 pt-2"> </b-form-group>
                  <div class="col-9 m-0 p-0">
                    <b-form-datepicker id="example-datepicker1" v-model="home.mainDate" class="mb-1"></b-form-datepicker>
                  </div>
                </div>
              </b-form>

              <!-- 詳細情報へのリンク登録（必須ではない） -->
              <div class="row p-0 pt-2 m-0 mr-2">
                <div class="col-3 m-0 px-1 pt-2">ジャンプ先:</div>
                <div class="col-9 m-0 p-0">
                  <b-form-input v-model="home.myLink" class="border" required placeholder="必要に応じて、詳細情報へのジャンプ先を入力  <例> /a41" />
                </div>
              </div>

              <!-- 本文登録（必須ではない） -->
              <div class="row p-0 pt-2 m-0 mr-2">
                <div class="col-3 m-0 px-1 pt-4">本文:</div>
                <b-form-textarea v-model="home.mainText" class="col-9" required placeholder="入力した内容は画像クリックで閲覧できます。" rows="3" max-rows="6"></b-form-textarea>
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
                <!-- ここから -->
                <div class="m-2">
                  下の画像から選択してください。: <strong>{{ selected }}</strong>
                </div>

                <div class="row m-0 p-0">
                  <!-- <b-form-group v-for="(myImage, index2) in myImages" :key="myImage.id" class="border m-1 float-left"> -->
                  <b-form-group v-for="(myImage, index2) in myImages" :key="myImage.id" class="col-4 m-0 p-1">
                    <div class="image_box m-0 p-0" @click="selImage(myImage.url, index2)">
                      <!-- <b-img v-model="selected" :src="myImage.url" height="100" width="130" class="m-0" alt="file"> </b-img> -->
                      <b-embed v-model="selected" :src="myImage.url" type="embed" class="m-0" alt="file" fluid> </b-embed>
                      <b-form-radio v-model="selected" :value="'No.' + ++index2" class="positionRadioBtn ml-4 p-0"> </b-form-radio>
                    </div>
                  </b-form-group>
                </div>

                <!-- 以下の float-cb について： 上記の float-left の解除ができないので、style で設定 -->
                <div class="float-cb p-2">以下の「画像登録・削除」から、新たに画像を追加したり、 不要な画像を削除することができます。</div>

                <!-- 消すな ここから４行 -->
                <div v-show="hihyouji" class="col-12 mt-2">
                  <!-- <div class="col-12 mt-2"> -->
                  <b-form-input v-model="home.fileUrl" type="text" required placeholder=""></b-form-input>
                </div>
                <!-- 消すな ここまで -->
              </div>
              <!-- 画像添付 end -->
            </div>
          </div>
          <!-- 編集 End -->

          <!-- 新規登録 start -->
          <div v-show="showReg" class="col-12 m-0 p-0">
            <div class="m-0 mt-1 p-0" style="background-color: lightblue">
              <h4 class="mx-2 mb-0 p-0 pt-1">新規登録</h4>
              <!-- <b-form v-if="show" @submit="onSubmit" @reset="onReset"> -->
              <b-form @submit="onSubmit" @reset="onReset">
                <b-button :size="commonData.selectedBtnSize" type="submit" variant="primary" class="m-0 ml-2 px-1 py-0">登録</b-button>
                <b-button :size="commonData.selectedBtnSize" type="reset" variant="dark" class="m-0 px-1 py-0">リセット</b-button>

                <div class="row p-0 pt-2 m-0 mr-2">
                  <b-form-group label-for="input-b1" label="SortNo(必須):" class="col-3 m-0 px-1 pt-2"> </b-form-group>
                  <div class="col-9 m-0 p-0">
                    <b-form-input id="input-b1" v-model="home.sortNo" type="number" class="border" required placeholder="入力しないと登録できません。" />
                  </div>
                </div>

                <div class="row p-0 pt-2 m-0 mr-2">
                  <b-form-group label-for="input-b2" label="タイトル(必須):" class="col-sm-3 m-0 mt-1 p-0 px-1" />
                  <div class="col-sm-9 m-0 p-0">
                    <b-form-input id="input-b2" v-model="home.titleName" class="border" required placeholder="入力しないと登録できません。" />
                  </div>
                </div>

                <div class="row p-0 pt-2 m-0 mr-2">
                  <b-form-group label-for="input-b3" label="日付(必須):" class="col-3 m-0 px-1 pt-2"> </b-form-group>
                  <div class="col-9 m-0 p-0">
                    <b-form-datepicker id="example-datepicker2" v-model="home.mainDate" class="mb-1"></b-form-datepicker>
                  </div>
                </div>
              </b-form>

              <!-- 本文登録（必須ではない） -->
              <!-- <div label-for="input-b4" class="col-12 mt-1 ml-1">
                <b-form-textarea id="input-b4" v-model="home.mainText" class="col-12" required placeholder="入力した内容は画像クリックで閲覧できます。" rows="3" max-rows="6"></b-form-textarea>
              </div> -->

              <!-- 詳細情報へのリンク登録（必須ではない） -->
              <div class="row p-0 pt-2 m-0 mr-2">
                <div class="col-3 m-0 px-1 pt-2">ジャンプ先:</div>
                <div class="col-9 m-0 p-0">
                  <b-form-input v-model="home.myLink" class="border" required placeholder="必要に応じて、詳細情報へのジャンプ先を入力  <例> /a41" />
                </div>
              </div>

              <!-- 本文登録（必須ではない） -->
              <div class="row p-0 pt-2 m-0 mr-2">
                <div class="col-3 m-0 px-1 pt-4">本文:</div>
                <b-form-textarea v-model="home.mainText" class="col-9" required placeholder="入力した内容は画像クリックで閲覧できます。" rows="3" max-rows="6"></b-form-textarea>
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

                <div class="row m-0 p-0">
                  <b-form-group v-for="(myImage, index2) in myImages" :key="myImage.id" class="col-4 m-0 p-1">
                    <!-- <b-form-group v-for="(myImage, index2) in myImages" :key="myImage.id" class="border m-1 float-left"> -->
                    <div class="image_box m-0 p-0" @click="selImage(myImage.url, index2)">
                      <!-- <b-img v-model="selected" :src="myImage.url" height="100" width="130" class="m-0" alt="file"> </b-img> -->
                      <b-embed v-model="selected" :src="myImage.url" type="embed" class="m-0" alt="file" fluid> </b-embed>
                      <b-form-radio v-model="selected" :value="'No.' + ++index2" class="positionRadioBtn ml-4 p-0"> </b-form-radio>
                    </div>
                  </b-form-group>
                </div>

                <!-- 以下の float-cb について： 上記の float-left の解除ができないので、style で設定 -->
                <div class="float-cb p-2">以下の「画像新規登録・削除」から、新たに画像を追加したり、 不要な画像を削除することができます。</div>

                <!-- 消すな ここから４行 -->
                <div v-show="hihyouji" class="col-12 mt-2">
                  <!-- <div class="col-12 mt-2"> -->
                  <b-form-input v-model="home.fileUrl" type="text" required placeholder=""></b-form-input>
                </div>
                <!-- 消すな ここまで -->
              </div>
              <!-- 画像添付 end -->
            </div>
          </div>
          <!-- 新規登録 End -->

          <div class="col-12 m-0 p-1 mt-3" style="background-color: lightblue">
            <h4>画像新規登録・削除</h4>
            <!-- 画像登録 Start -->
            <!-- <div class="col-12 m-0 p-2 mt-1" style="background-color:skybluethistle;"> -->
            <div class="col-12 m-0 p-2 mt-1" style="background-color: skyblue">
              <h5>画像登録</h5>
              <input ref="input" type="file" accept=".jpg, .png, .pdf" @change="fileExtension($event)" />

              <!-- <input type="file" :multiple="false" accept="image/*" @change="resize($event)" /> -->
              <br />
              <div>
                <!-- サムネイル用canvas -->
                <canvas ref="thumbnail" class="mt-1" :width="0" :height="0" />
              </div>

              <div v-show="reserve">
                <!-- <p>アップロードファイル名： {{ fileName }}</p> -->
                <!-- アップロードボタン -->
                <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 px-1 py-0" @click="upload()">Upload</b-button>
                <b-button :size="commonData.selectedBtnSize" class="ml-2 m-0 px-1 py-0" my-0 @click="reset()">Cancel</b-button>
                <!-- upload()の最後で、リスト表示 -->
              </div>
            </div>
            <!-- 画像登録 End -->

            <!-- 画像削除 Start -->
            <div class="col-12 m-0 p-2 mt-2" style="background-color: lightslategray">
              <h5>画像削除</h5>
              <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 ml-2 px-1 py-0" @click="imageDelete()">画像リスト表示</b-button>
              <b-button :size="commonData.selectedBtnSize" class="m-0 ml-2 px-1 py-0" @click="imageDeleteCancel()">キャンセル</b-button>

              <!-- 画像リスト表示 -->
              <div v-show="toggleDel" class="col-12 m-0 p-0">
                <div class="m-0 p-0 mt-2">
                  <!-- <div class="m-0 p-0 mt-2"> -->
                  <div class="row m-0 p-0">
                    <div v-for="myImage in myImages" :key="myImage.id" class="col-4 m-0 p-1">
                      <div class="border m-0 p-0" style="background-color: white">
                        <b-embed :src="myImage.url" fluid class="m-0" type="embed" alt="file" />
                        <b-button :size="commonData.selectedBtnSize" class="m-1 ml-2 px-1 py-0" @click="deleteImageTopics(myImage.name, myImage.url)">削除</b-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 画像リスト表示 end -->
          </div>
        </div>
      </div>
      <!-- 画像削除 End -->
    </div>
    <p>{{ mIntervalSet() }}</p>
  </div>
</template>

<script>
// import moment from 'moment'
import firebase from '~/plugins/firebase'
const storage = firebase.storage()
const storageRef = storage.ref()
const homesRef = storageRef.child('home')
const carouselsRef = homesRef.child('carousel')

export default {
  data() {
    return {
      // カルーセル 用 script
      slide: 0,
      sliding: null,
      mInterval: 3000,
      mIntervalFlg: true,
      inputInterval: '',
      dbHeaderId: '',

      // 利用確実
      // manFlg: false,
      // isLogged: false,
      showReg: true,
      // showCarousel: false,
      showCarousel: false,
      showTopics: false,
      showEdit: false,
      selected: '選択されていません。',
      carousel: {
        imageUrl: '',
        comment: '',
        sortNo: 0,
      },
      carouselReg: {
        imageUrl: '',
        comment: '',
        myLink: '',
        sortNo: 0,
      },
      hihyouji: false,
      // hihyouji: true,
      myImages: [
        {
          name: '',
          url: '',
        },
      ],
      // [home] はトピックスのデータです。
      home: {
        sortNo: 0,
        titleName: '',
        mainDate: '',
        mainText: '',
        fileUrl: process.env.NO_IMAGE_URL,
      },
      commonData: {},
      todaySetFlg: false,
      maxSortNo: 0,
      editId: '',
      newImage: '',
      newFile: '',
      fileName: '',
      fileType: '',
      reserve: false,
      toggleDel: false,
      toggleShow: false,

      // カラー設定 11 Line
      isHovered: false,
      isInitCalorSet: false,
      buttonBarRGB: '',
      buttonHeaderRGB: '',
      buttonColorBasicSet: '',
      buttonColorMenu: '',
      buttonColorReg: '',
      buttonColorEdit: '',
      buttonColorDel: '',
      buttonColorCancel: '',
    }
  },
  // fireStore DB からのデータ取得
  // computedは、値が変わるとその値に依存しているすべてのバインディングが更新される
  computed: {
    isLogin() {
      // return this.$store.getters['user/isLogin']
      // this.isLogged = this.$store.getters['user/isLogin']
      const isLogged = this.$store.getters['user/isLogin']
      // console.log('home-3 ------ isLogged: ', isLogged)
      return isLogged
    },

    dbCarousels() {
      return this.$store.getters['storehome/orderdDbCarousels']
    },
    dbHomes() {
      // return this.$store.state.storehome.dbHomes
      return this.$store.getters['storehome/orderdDbHomes']
    },

    //  カルーセル用の interval を取得
    getInterval() {
      return this.$store.getters['storeheader/getDbHeadersInterval']
    },
    // dbGetMyPageById() {
    //   return this.$store.getters['storehome/getMyPageById']
    //   // return this.$store.getters['storehome/getMyPageById'(id)]
    //   // return this.$store.getters['storehome/getMyPageById(id)']
    //   // }
    // },
    dbHeaders() {
      return this.$store.getters['storeheader/orderdDbHeaders']
    },
  },
  // elementへのマウントが行われた後処理される。
  // SSR(Firebase等)では使えない。
  mounted() {
    this.$nuxt.$on('commondata', (commonData) => {
      this.commonData = commonData
    })
  },
  // created は画面を開いたとき呼ばれる。
  created() {
    // 下記の storehome は store/storehome.js のファイル名
    this.$store.dispatch('storehome/init')

    // 下記の storeheader は store/storeheader.js のファイル名
    this.$store.dispatch('storeheader/init')

    // カルーセルの interval 取得 → 設定
    // const testData = this.$store.getters['storeheader/getDbHeadersInterval']
    // console.log('testData ------ in created(): ' + testData)
  },

  // ④ updated 画面が更新された後、呼び出される。
  // SSR(Firebase等)では使えない。
  updated() {
    this.selnum(0)
  },

  methods: {
    // test1() {
    //   // console.log($.fn.jquery)
    //   // alert(this.fn.jquery)

    //   // console.log('----- manFlg --- in test1: ' + this.manFlg)
    //   console.log('----- isLogin --- in test1: ' + this.isLog())
    // },
    // isLog() {
    //   // return this.$store.getters['user/isLogin']
    //   // this.isLogged = this.$store.getters['user/isLogin']
    //   this.isLogged = this.$store.getters['user/isLogin']
    //   console.log('home-4 ------ isLogged: ', this.isLogged)
    //   return this.isLogged
    // },

    // test2() {
    // const testData = this.$store.getters['storeheader/getDbHeadersInterval']
    // const testData = this.getInterval
    // console.log('testData ------ in test2(): ' + testData)
    // console.log('mInterval ------ in mIntervalSet(): ' + this.mInterval)
    //   console.log('home.titleName: ' + this.home.titleName)
    // },

    setIntervalCarousel() {
      // 下記の storeheader は store/storeheader.js のファイル名
      // this.$store.dispatch('storeheader/update', { myDataNo: '1', header: this.myData2 })
      this.$store.dispatch('storeheader/updateInterval', { id: this.dbHeaderId, mInterval: this.inputInterval })
      this.mInterval = Number(this.inputInterval)
    },
    // num を myHeader.vue へ渡す
    selnum(num) {
      // this.selected = num
      // console.log('num ----- in home selnum(): ', num)
      this.$nuxt.$emit('selnum', num)
    },
    onCarousel() {
      this.myImages = []
      this.carousel = []
      this.carouselReg = {}
      this.carouselList()
      this.showCarousel = true
      this.showTopics = false
      this.toggleDel = false
    },
    onTopics() {
      // this.myImages = []
      // this.carousel = []
      // this.carouselReg = {}
      this.setMaxSortNo()
      this.todaySet2()
      this.imageList()
      this.toggleShow = false
      this.showTopics = true
      this.showCarousel = false
    },
    // ------------- カルーセル−２ 用 script start ---------------
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    // ------------- カルーセル−２ 用 script end ---------------

    // ----------------- 管理機能： カルーセル start ----------------------
    carouselList() {
      // FireStrage のフォルダとファイルのリストを取得

      this.carousel = []
      // const homesRef = storageRef
      // const homesRef = storageRef.child('images')
      const vm = this

      // console.log('homesRef: ', homesRef)
      // this.toggleShow = true

      carouselsRef
        .listAll()
        .then(function (res) {
          // res.prefixes.forEach(function(folderRef) {
          for (let i = 0; i < res.prefixes.length; i++) {
            // console.log('res.prefixes[i]: ', res.prefixes[i])
          }
          // res.items.forEach(function(itemRef) {
          for (let i = 0; i < res.items.length; i++) {
            // console.log('res.items[i]: ', res.items[i])
            // alert('res.items[i]: ', res.items[i])
            // console.log('itemRef.location.path: ', itemRef.location.path)
            vm.getImageUrlCarousel(res.items[i].location.path)
          }
          // this.thisFileList = itemRef.location.path
          // console.log('this.myImages.length: ' + this.myImages.length)
        })
        .catch(function (error) {
          alert('error in carouselList: ' + error)
          // console.error('error in carouselList: ', error)
        })
    },
    regCarousel() {
      // console.log('this.carouselReg.imageUrl: ' + this.carouselReg.imageUrl)

      if (this.selected === '選択されていません。') {
        // alert('画像を選択してください。')
        this.$swal({
          title: '画像を選択してください。',
          // text: 'この操作は取り消しできません。',
          icon: 'warning',
          // showCancelButton: true,
          confirmButtonText: 'OK',
          // cancelButtonText: 'キャンセル',
          // focusCancel: true
        }).then((result) => {})
      } else {
        // evt.preventDefault()
        this.addCarousel()
        // 以下はinputの入力をリセット
        this.carouselReg = {}
        // this.showImageFlg = false
        // this.show = false
        // this.$nextTick(() => {
        //   this.show = true
        // })
        this.selected = '選択されていません。'
        // this.reserve = false
        this.toastFileUpdate('ファイル 登録', '完了しました。')
      }
    },
    deleteCarousel(id) {
      // console.log('---------------- id: ' + id)

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
          this.$store.dispatch('storehome/removeCarousel', id)
          this.toastFileUpdate('ファイル 登録', '完了しました。')
          // this.imageDeleteCarousel()
        }
      })
    },
    cancelCarousel() {
      this.carouselReg = {}
      this.selected = '選択されていません。'
      // this.showImageFlg = false
    },
    // メニューデータをFireStoreからロードしてセット
    mIntervalSet() {
      // if (this.mInterval <= 500) {
      if (this.mIntervalFlg === true) {
        try {
          // alert('テスト in myDataSet(): ')
          // this.mInterval = Number(this.dbHeaders[0].mInterval)
          // this.inputInterval = this.dbHeaders[0].mInterval
          this.mInterval = Number(this.getInterval)

          this.inputInterval = this.getInterval
          this.dbHeaderId = this.dbHeaders[0].id
          // console.log('mInterval ------ in mIntervalSet(): ' + this.mInterval)

          // this.mInterval = Number(this.dbHeaders[0].myData.mInterval)
          // this.inputInterval = this.dbHeaders[0].myData.mInterval
          // this.dbHeaderId = this.dbHeaders[0].myData.id

          // this.inputInterval = Number(this.dbHeaders[0].myData.mInterval)
          // this.myData.mHome1 = this.dbHeaders[0].myData.mHome1
          this.mIntervalFlg = false
        } catch (error) {
          this.mIntervalFlg = true
          // alert('テスト in mIntervalSet(): ' + error)
          // console.log('テスト in myDataSet(): ' + error)
        }
      }
      // }
    },
    // $().button('toggle'),
    // fireStore DB へのデータ追加
    addCarousel() {
      // console.log('1111 imageUrl: ' + this.carousel.imageUrl)

      // this.carouselReg.sortNo = Number(this.carouselReg.sortNo)

      if (typeof this.carouselReg.sortNo === 'undefined') {
        const tempCarousels = this.dbCarousels
        // console.log('1-sortNo: ', tempCarousels[0].carousel.sortNo)
        this.carouselReg.sortNo = tempCarousels[0].carousel.sortNo + 1
      }
      // console.log('2-sortNo: ', this.carouselReg.sortNo)
      // 下記の storehome は store/storehome.js のファイル名
      this.$store.dispatch('storehome/addCarousel', this.carouselReg)
      this.carouselReg = {}
    },
    // 画像ファイルの保存
    uploadImageCarousel() {
      const photo = this.newImage

      // アップロード先のフォルダ、ファイル名を指定
      // const dateNow = Date.now()
      // const fileNameDate = moment(dateNow).format('YYYYMMDD-HHmmss-')
      // const fileNameDate = this.todaySet3()
      // this.fileName = fileNameDate + this.fileName
      const fileImage = carouselsRef.child(this.fileName)

      // ファイルをアップロード
      fileImage.putString(photo, 'data_url').then((snapshot) => {
        // console.log('photo uploaded')

        // 入力データをリセット
        // this.resetCarousel()
        this.reset()
        // トースト: ファイル アップデート完了しました。
        this.toastFileUpdate('ファイル アップロード', '完了しました。')

        // 画像リスト 表示
        // this.imageList()
        this.imageDeleteCarousel()
        this.toggleDel = false
      })
      // this.showImageReg = false
      // console.log('showImageReg: ' + this.showImageReg)
    },
    imageDeleteCarousel() {
      // FireStrage のフォルダとファイルのリストを取得

      this.myImages = []
      // const homesRef = storageRef
      // const homesRef = storageRef.child('images')
      const vm = this

      // console.log('homesRef: ', homesRef)
      this.toggleDel = true

      carouselsRef
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
            vm.getImageUrlCarousel(res.items[i].location.path)
          }
          // this.thisFileList = itemRef.location.path
          // console.log('res: ' + res)
        })
        .catch(function (error) {
          alert('error in imageDeleteCarousel: ' + error)
          // console.error('error in imageDeleteCarousel: ', error)
        })
    },
    getImageUrlCarousel(fileName) {
      // console.log('1 fileName: ' + fileName)
      // fileName で指定した画像ファイルの Path を取得
      // const fileName = '20200402-170705-anya-potsiadlo-P8_RmeffU-w-unsplash.jpg'
      const nameUrl = { name: fileName, url: '' }
      // const nameUrl: {name: any, url: any}

      firebase
        .storage()
        .ref()
        .child(fileName)
        // .child('images/' + fileName)
        .getDownloadURL()
        .then((url) => {
          // console.log('1 url:  ' + url)
          nameUrl.url = url
          this.myImages.push(nameUrl)
        })
    },
    selImageCarousel(url, index2) {
      // console.log('選択ファイル in selImage: ' + url)
      this.selected = 'No.' + index2
      this.carouselReg.imageUrl = url
      // console.log('this.carouselReg.imageUrl: ' + this.carouselReg.imageUrl)
    },
    // 画像関連メソッド
    resizeCarousel(e) {
      // console.log('画像をリサイズする')
      // const file = e.target.files[0]
      const file = (e.target.files || e.dataTransfer.files)[0]

      if (typeof file === 'undefined') {
        this.reset()
        this.reserve = false
        this.selected = '選択されていません。'
        // console.log('ファイルが選択されていません。======== in resizeCarousel')
        return
      }

      this.fileName = file.name

      if (file) {
        const image = new Image()
        const reader = new FileReader()
        const vm = this
        // const maxWidth = 1280
        const maxHeight = 480

        reader.readAsDataURL(file)

        reader.onload = (e) => {
          image.src = e.target.result
          image.onload = () => {
            vm.newImage = this.height < maxHeight ? this.src : vm.makeImageCarousel(image)
            vm.makeTumbnail(image)
          }
        }
        this.reserve = true
      }
    },
    // 縮小画面を作る
    makeImageCarousel(image) {
      // console.log('image --------- in makeImageCarousel: ', image)
      // canvas要素を作成
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      // 縦横比を算出
      // const ratio = image.height / image.width

      // 生成する画像のサイズ
      const width = 1280
      const height = 480

      // const height = width * ratio
      // const width = height / ratio
      canvas.width = width
      canvas.height = height

      // canvas描画作成
      ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height)

      // data_url形式に変換したものを返す
      return canvas.toDataURL('image/jpeg')
    },

    // ----------------- 管理機能： カルーセル end ----------------------
    add() {
      // 下記の storehome は store/storehome.js のファイル名
      // console.log('titelName1: ' + this.home.titleName)
      // this.$store.dispatch('storehome/add', { titelName: this.home.titleName, mainText: this.home.mainText })
      this.home.sortNo = Number(this.home.sortNo)
      this.$store.dispatch('storehome/add', this.home)
    },
    update() {
      // 下記の storehome は store/storehome.js のファイル名
      // console.log('======= id: ', this.editId)
      this.home.sortNo = Number(this.home.sortNo)
      this.$store.dispatch('storehome/update', { id: this.editId, home: this.home })
    },
    edit(id) {
      this.showEdit = true
      this.showReg = false
      const myPage = this.$store.getters['storehome/getMyPageById'](id)
      this.home.sortNo = myPage.home.sortNo
      this.home.titleName = myPage.home.titleName
      this.home.mainDate = myPage.home.mainDate
      this.home.mainText = myPage.home.mainText
      this.home.fileUrl = myPage.home.fileUrl
      this.editId = id
    },
    editCancel() {
      this.home.sortNo = this.maxSortNo
      this.home.titleName = ''
      this.todaySet2()
      this.home.fileUrl = process.env.NO_IMAGE_URL
      this.home.mainText = ''
      this.showEdit = false
      this.showReg = true
    },
    // 入力データをリセット
    // resetCarousel() {
    //   const canvas = this.$refs.thumbnail
    //   this.newImage = ''
    //   this.newFile = ''

    //   // サムネイル用canvasのサイズを0に
    //   canvas.height = 0
    //   canvas.width = 0

    //   // inputの入力をリセット
    //   this.$refs.input.value = ''
    //   this.reserve = false
    // },
    dataResetEdit() {
      const myPage = this.$store.getters['storehome/getMyPageById'](this.editId)
      this.home.sortNo = myPage.home.sortNo
      this.home.titleName = myPage.home.titleName
      this.home.mainDate = myPage.home.mainDate
      this.home.mainText = myPage.home.mainText
      this.home.fileUrl = myPage.home.fileUrl
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
          this.$store.dispatch('storehome/remove', id)
        }
      })
    },
    toggle(dbHome) {
      this.$store.dispatch('storehome/toggle', dbHome)
    },
    onSubmitEdit(evt) {
      // console.log('in onSubmitEdit')
      evt.preventDefault()
      this.update()
      // 以下はinputの入力をリセット
      this.home.sortNo = this.maxSortNo
      this.home.titleName = ''
      this.todaySet2()
      this.home.mainText = ''
      this.home.fileUrl = process.env.NO_IMAGE_URL
      // this.showImageFlg = false
      this.showEdit = false
      this.showReg = true
      // this.$nextTick(() => {
      //   this.show = true
      // })
      this.selected = '選択されていません。'
    },
    // トピックスの「登録」ボタン押下でここへ
    onSubmit(evt) {
      evt.preventDefault()
      this.add()
      // 以下はinputの入力をリセット
      this.home.sortNo = ++this.maxSortNo
      this.home.titleName = ''
      this.todaySet2()
      this.home.mainText = ''
      this.home.fileUrl = process.env.NO_IMAGE_URL

      // その他の初期化
      // this.showImageFlg = false
      this.selected = '選択されていません。'
    },
    onReset(evt) {
      evt.preventDefault()
      this.home.sortNo = this.maxSortNo
      this.home.titleName = ''
      this.todaySet2()
      this.home.fileUrl = process.env.NO_IMAGE_URL
      this.home.mainText = ''
      this.show = false
      // this.showImageFlg = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    fileExtension(e) {
      const file = (e.target.files || e.dataTransfer.files)[0]

      if (typeof file === 'undefined') {
        this.reset()
        this.reserve = false
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
        // console.log('file extension 画像以外: ' + fileExt)
        // image.src = e.target.result
        this.newFile = file
        this.reserve = true
      }
    },
    // 画像関連メソッド
    resize(e) {
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
            vm.makeTumbnail(image)
          }
        }
        this.reserve = true
      }
    },
    // 縮小画面を作る
    makeImage(image) {
      // console.log('image --------- in madeImage: ', image)
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
      // 予めHTMLに記述したcanvasを指定
      const canvas = this.$refs.thumbnail
      const ctx = canvas.getContext('2d')

      // 縦横比を算出
      const ratio = image.width / image.height

      // サムネイルのサイズを指定
      const height = 120
      const width = height * ratio

      // サムネイルに画像を描画
      canvas.height = height
      canvas.width = width
      // console.log('height ------- in makeTumbnail: ' + height)

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
      this.toggleDel = false
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
      // const fileNameDate = this.todaySet3()
      // this.fileName = fileNameDate + this.fileName
      // console.log('fileName-2: ' + this.fileName)
      const fileImage = homesRef.child(this.fileName)

      // ファイルをアップロード
      fileImage.putString(photo, 'data_url').then((snapshot) => {
        // console.log('photo uploaded')

        // 入力データをリセット
        // this.resetCarousel()
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
      // const fileNameDate = moment(dateNow).format('YYYYMMDD-HHmmss_')
      // const fileNameDate = this.todaySet3()
      // this.fileName = fileNameDate + this.fileName
      const fileImage = homesRef.child(this.fileName)
      // console.log('fileName at aaaaa: ' + this.fileName)

      // ファイルをアップロード
      // fileImage.putString(this.newFile, 'data_url').then((snapshot) => {
      fileImage.put(this.newFile).then((snapshot) => {
        // console.log('photo uploaded')

        // 入力データをリセット
        // this.resetCarousel()
        this.reset()
        // トースト: ファイル アップデート完了しました。
        this.toastFileUpdate('ファイル アップロード', '完了しました。')
      })
      // 画像リスト 表示
      this.imageList()
      this.imageDelete()

      // this.showImageReg = false
      // console.log('showImageReg: ' + this.showImageReg)
    },
    toastFileUpdate(titleData, mainData) {
      this.$bvToast.toast(mainData, {
        title: titleData,
        autoHideDelay: 5000,
      })
    },
    getImageUrl(fileName) {
      // console.log('1 fileName: ' + fileName)
      // fileName で指定した画像ファイルの Path を取得
      // const fileName = '20200402-170705-anya-potsiadlo-P8_RmeffU-w-unsplash.jpg'
      const nameUrl = { name: fileName, url: '' }
      // const nameUrl: {name: any, url: any}

      firebase
        .storage()
        .ref()
        .child(fileName)
        // .child('images/' + fileName)
        .getDownloadURL()
        .then((url) => {
          // console.log('1 url:  ' + url)
          nameUrl.url = url
          this.myImages.push(nameUrl)
        })
    },

    imageList() {
      // FireStrage のフォルダとファイルのリストを取得

      this.myImages = []
      // const homesRef = storageRef
      // const homesRef = storageRef.child('images')
      const vm = this

      // console.log('homesRef: ', homesRef)
      this.toggleShow = true

      homesRef
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
            vm.getImageUrl(res.items[i].location.path)
          }
          // this.thisFileList = itemRef.location.path
          // console.log('this.myImages.length: ' + this.myImages.length)
        })
        .catch(function (error) {
          alert('error in imageList: ' + error)
          // console.error('error in imageList: ', error)
        })
    },
    imageListEdit() {
      // this.hihyouji = true
      // FireStrage のフォルダとファイルのリストを取得
      // this.showImageReg = false
      // console.log('showImageReg: ' + this.showImageReg)

      this.myImages = []
      // const homesRef = storageRef
      // const homesRef = storageRef.child('images')
      const vm = this

      // console.log('homesRef: ', homesRef)
      this.toggleShow = true

      homesRef
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
    },
    selImage(imageUrl, index2) {
      // alert('ファイル選択 in selImage: ' + imageUrl)
      this.selected = 'No.' + index2
      // this.carouselReg.imageUrl = imageUrl
      this.home.fileUrl = imageUrl
      // this.showImageReg = true
      // console.log('showImageReg: ' + this.showImageReg)
    },
    imageTorikesi() {
      this.toggleShow = false
      // this.showImageReg = false
    },
    imageCancel() {
      this.toggleShow = false
      // this.showImageReg = true
      this.home.fileUrl = process.env.NO_IMAGE_URL
      this.selected = '選択されていません。'
    },
    imageDeleteCancel() {
      this.toggleDel = false
    },
    imageDelete() {
      // FireStrage のフォルダとファイルのリストを取得

      this.myImages = []
      // const homesRef = storageRef
      // const homesRef = storageRef.child('images')
      const vm = this

      // console.log('homesRef: ', homesRef)
      this.toggleDel = true

      homesRef
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
          alert('error in imageDelete: ' + error)
          // console.error('error in imageDelete: ', error)
        })
    },
    deleteImageCarousel(deleteFileName, deleteFileUrl) {
      const vm = this

      const tempCarousel = this.dbCarousels
      // console.log('tempCarousels: ', tempCarousels)
      const myResult = tempCarousel.find((item) => item.carousel.imageUrl === deleteFileUrl)
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
                this.onCarousel()
                // this.toggleDel = false
                // this.showReg = false
                // this.showReg = true
                // this.imageDelete()
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
    deleteImageTopics(deleteFileName, deleteFileUrl) {
      // console.log('deleteFileName: ', deleteFileName)

      const vm = this

      const tempHomes = this.dbHomes
      const myResult = tempHomes.find((item) => item.home.fileUrl === deleteFileUrl)
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
          text: '上の「現在の登録状況 ＆ 編集・削除」で[削除]するか、[編集]ｰ>[添付しない]により、画像を解放してください。',
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
    setMaxSortNo() {
      let tempSortNo = this.dbHomes[0].home.sortNo
      this.home.sortNo = ++tempSortNo
      this.maxSortNo = tempSortNo
      // console.log('======= maxSortNo: ', this.maxSortNo)
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
      this.home.mainDate = YYYYMMDD
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
    // }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.float-cb {
  clear: both;
}
.textShadow {
  color: #fff;
  /* background: #fff; */
  font: bold 20px Arial;
  letter-spacing: 3px;
  text-shadow: 1px 3px #000, 1px -3px #000, -1px 3px #000, -1px -3px #000, 2px 2px #000, 2px -2px #000, -2px 2px #000, -2px -2px #000, 3px 1px #000, 3px -1px #000, -3px 1px #000, -3px -1px #000;
}
/* outline 黒 */
.image_box {
  position: relative;
}
/* .image_box .positionRadioBtn { */
.positionRadioBtn {
  position: absolute;
  top: 5px;
  right: 5px;
}
/* カルーセルの画像の高さを統一する  start   */
.b-carousel .item {
  height: 100%;
}

.b-carousel img {
  position: absolute;
  width: 100%;
}
/* カルーセルの画像の高さを統一する  start   */

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
