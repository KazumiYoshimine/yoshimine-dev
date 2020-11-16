<template>
  <div class="container-fluid no-gutters p-1">
    <!-- <b-container fluid class="p-4 bg-dark"> -->
    <div class="row m-0 p-0 bg-dark">
      <div class="col-12 m-0 p-1">
        <h3 class="text-light text-center m-0 p-0">管理： 共通設定</h3>
        <!-- <p class="text-light text-center m-0 p-0">タイトル等の名称を変更できます。</p> -->
      </div>

      <hr class="col-12 m-0 p-0" color="#000000" />

      <!-- ------------------- Group 1 (ボタンの色) start -->
      <div class="row m-1 p-0">
        <!-- ボタンの色 Size -->
        <p class="col-12 m-0 my-1 p-0 text-white">カラー設定（各行の[通常時の色]の右側をクリックして、お好みの色を設定してください。)</p>

        <!-- 1 テーマカラー -->
        <b-input-group class="col-12 m-0 mt-1 p-0" prepend="テーマカラー:">
          <b-input-group-prepend is-text><b>通常時の色</b></b-input-group-prepend>
          <b-form-input v-model="myData2.buttonColorBasic" type="color"></b-form-input>
          <!-- ○○のHoverカラー -->
          <!-- <b-input-group-prepend is-text><b>Hover時の色</b></b-input-group-prepend> -->
          <!-- <b-form-input v-model="myData2.buttonColorMenu2" type="color"></b-form-input> -->
        </b-input-group>
        <!-- 1 end -->

        <!-- 2 Menu Barのカラー -->
        <b-input-group class="col-12 m-0 mt-1 p-0" prepend="Menu Ber:" append="%">
          <b-input-group-prepend is-text><b>通常時の色</b></b-input-group-prepend>
          <!-- <b-form-input v-model="myData2.buttonColorMenuBar" :formatter="formatterMenu" type="color"></b-form-input> -->
          <b-form-input v-model="myData2.buttonColorMenuBar" type="color"></b-form-input>
          <!-- 透明度 -->
          <b-input-group-prepend is-text><b>不透明度</b></b-input-group-prepend>
          <!-- <b-form-input v-model="myData2.buttonOpacityBar" type="range"></b-form-input> -->
          <!-- <b-form-input v-model="myData2.buttonOpacityBar" type="number"></b-form-input> -->
          <b-form-input v-model="buttonOpacityBarTemp" type="range"></b-form-input>
          <b-form-input v-model="buttonOpacityBarTemp" type="number" min="0" max="100"></b-form-input>

          <!-- <b-input-group-prepend is-text><b>{{ myData2.buttonOpacityBar }}</b></b-input-group-prepend> -->
        </b-input-group>
        <!-- 2 end -->

        <!-- 3 Menuボタンのカラー -->
        <b-input-group class="col-12 m-0 mt-1 p-0" prepend="Menuボタン:">
          <b-input-group-prepend is-text><b>通常時の色</b></b-input-group-prepend>
          <b-form-select v-model="selectedMenuBtnColor" :options="optionsColor"></b-form-select>
          <b-button :variant="selectedMenuBtnColor">{{ selectedMenuBtnColor }}</b-button>
        </b-input-group>
        <!-- 3 end -->

        <!-- 4 登録ボタンのカラー -->
        <b-input-group class="col-12 m-0 my-1 p-0" prepend="登録ボタン:">
          <b-input-group-prepend is-text><b>通常時の色</b></b-input-group-prepend>
          <b-form-input v-model="myData2.buttonColorReg1" type="color"></b-form-input>
          <!-- ○○のHoverカラー -->
          <b-input-group-prepend is-text><b>Hover時の色</b></b-input-group-prepend>
          <b-form-input v-model="myData2.buttonColorReg2" type="color"></b-form-input>
        </b-input-group>
        <!-- 4 end -->

        <!-- 5 編集ボタンのカラー -->
        <!-- <b-input-group class="col-12 m-0 my-1 p-0" prepend="編集ボタン:"> -->
        <!-- <b-input-group-prepend is-text><b>通常時の色</b></b-input-group-prepend> -->
        <!-- <b-form-input v-model="myData2.buttonColorEdit1" type="color"></b-form-input> -->
        <!-- ○○のHoverカラー -->
        <!-- <b-input-group-prepend is-text><b>Hover時の色</b></b-input-group-prepend> -->
        <!-- <b-form-input v-model="myData2.buttonColorEdit2" type="color"></b-form-input> -->
        <!-- </b-input-group> -->
        <!-- 5 end -->

        <!-- 6 削除ボタンのカラー -->
        <!-- <b-input-group class="col-12 m-0 my-1 p-0" prepend="削除ボタン:"> -->
        <!-- <b-input-group-prepend is-text><b>通常時の色</b></b-input-group-prepend> -->
        <!-- <b-form-input v-model="myData2.buttonColorDel1" type="color"></b-form-input> -->
        <!-- ○○のHoverカラー -->
        <!-- <b-input-group-prepend is-text><b>Hover時の色</b></b-input-group-prepend> -->
        <!-- <b-form-input v-model="myData2.buttonColorDel2" type="color"></b-form-input> -->
        <!-- </b-input-group> -->
        <!-- 6 end -->

        <!-- 7 取消ボタンのカラー -->
        <!-- <b-input-group class="col-12 m-0 my-1 p-0" prepend="取消ボタン:"> -->
        <!-- <b-input-group-prepend is-text><b>通常時の色</b></b-input-group-prepend> -->
        <!-- <b-form-input v-model="myData2.buttonColorCancel1" type="color"></b-form-input> -->
        <!-- ○○のHoverカラー -->
        <!-- <b-input-group-prepend is-text><b>Hover時の色</b></b-input-group-prepend> -->
        <!-- <b-form-input v-model="myData2.buttonColorCancel2" type="color"></b-form-input> -->
        <!-- </b-input-group> -->
        <!-- 7 end -->

        <!-- 8 ボタン枠のカラー -->
        <b-input-group class="col-12 m-0 my-1 p-0" prepend="ボタンの枠線:">
          <b-input-group-prepend is-text><b>選択箇所の色</b></b-input-group-prepend>
          <!-- <b-form-input v-model="myData2.myBorder" type="color"></b-form-input> -->
          <b-form-select v-model="selectedBtnBorderColor" :options="optionsColor"></b-form-select>
          <b-button :variant="selectedBtnBorderColor">{{ selectedBtnBorderColor }}</b-button>
        </b-input-group>
        <!-- 7 end -->
      </div>
      <!-- ------------------- Group 1 end -->

      <hr class="col-12 m-0 p-0" color="#000000" />

      <!-- ------------------- Group 2 start -->
      <div class="col-sm-6 m-0 mt-0 p-2">
        <!-- Tabタイトル -->
        <b-input-group class="mb-2" prepend="Tab タイトル">
          <b-form-input v-model="myData2.tabTitle"></b-form-input>
        </b-input-group>

        <!-- タイトル -->
        <b-input-group class="mb-2" prepend="タイトル">
          <b-form-input v-model="myData2.topTitle"></b-form-input>
        </b-input-group>

        <!-- Home  (ｍHome1) -->
        <b-input-group class="mb-2" prepend="Home">
          <b-form-input v-model="myData2.mHome1"></b-form-input>
        </b-input-group>

        <!-- HomeのTopics  (ｍTopics) -->
        <b-input-group class="mb-2" prepend="HomeのTopics">
          <b-form-input v-model="myData2.mTopics"></b-form-input>
        </b-input-group>

        <!-- 資料DB (mArchiveDB) -->
        <b-input-group class="mb-2" prepend="資料DB">
          <b-form-input v-model="myData2.mArchiveDB"></b-form-input>
        </b-input-group>

        <!-- 連絡先等 -->
        <b-input-group class="mb-2" prepend="連絡先等">
          <b-form-input v-model="myData2.mContact"></b-form-input>
        </b-input-group>

        <!-- 連絡先等のLink -->
        <b-input-group class="mb-2" prepend="連絡先のリンク">
          <b-form-input v-model="myData2.mLink" placeholder="<例1>https://www.yourpage.com <例2>mailto:youremail@gmail.com?subject=件名"></b-form-input>
        </b-input-group>

        <!-- <hr class="m-0 p-0" color="#000000" /> -->

        <!-- 全体の Font Size -->
        <b-input-group class="mb-2" prepend="フォント サイズ(6〜14)">
          <b-form-input v-model="myData2.bodyFontSize" type="number" required placeholder="デフォルト: 10"></b-form-input>
        </b-input-group>

        <!-- 全体の ボタン Size -->
        <b-input-group class="mb-2" prepend="ボタン サイズ(選択)">
          <b-form-radio-group v-model="myData2.selectedBtnSize" :options="optionsBtnSize" buttons button-variant="outline-info" size="md" style="background-color: honeydew"></b-form-radio-group>
        </b-input-group>
        <!-- ------------------- Group 2 end -->
      </div>

      <!-- <hr class="col-12 m-0 p-0" color="#000000" /> -->

      <!-- ------------------- Group 3 start -->

      <div class="col-sm-6 m-0 mt-0 p-2">
        <div class="m-0 mt-0 p-2" style="background-color: #405080">
          <h5 class="text-white">Tabアイコン</h5>

          <!-- Tabアイコン -->
          <!-- <b-input-group class="mb-2" prepend="Tab アイコン"> -->
          <b-input-group class="mb-2">
            <!-- <b-input-group-prepend is-text> -->
            <b-input-group-prepend>
              <b-button variant="info" @click="imageListIcon()">設定</b-button>
            </b-input-group-prepend>
            <b-form-input v-model="myData2.tabIcon" style="height: 37px"></b-form-input>
            <b-input-group-append>
              <b-input-group-text>
                <b-img :src="myData2.tabIcon" width="24" height="24" class="m-0 p-0" alt="file"> </b-img>
              </b-input-group-text>
            </b-input-group-append>
          </b-input-group>

          <!-- Tabアイコン 新規登録 start -->
          <div v-show="showTabReg" class="col-12 m-0 p-0">
            <div class="m-2 text-white">
              下の画像から選択してください。: <strong>{{ selected }}</strong>
            </div>

            <div class="row no-gutters">
              <b-form-group v-for="(myImage, index2) in myImages" :key="myImage.id" class="col-3">
                <div class="image_box" @click="selIcon(myImage.url, index2)">
                  <b-embed v-model="selected" :src="myImage.url" fluid type="embed" class="m-0" alt="file"> </b-embed>
                  <b-form-radio v-model="selected" :value="'No.' + ++index2" class="positionRadioBtn ml-4 p-0"> </b-form-radio>
                </div>
              </b-form-group>
            </div>
            <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-1 ml-2 px-1 py-0" @click="tabReg()">設定完了</b-button>
            <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-1 ml-2 px-1 py-0" @click="tabCancel()">取消</b-button>

            <!-- 以下の float-cb について： 上記の float-left の解除ができないので、style で設定 -->
            <div class="float-cb p-2 text-white">以下の「アイコン、ロゴの新規登録・削除」から、新たに画像を追加したり、 不要な画像を削除することができます。</div>
          </div>
          <!-- Tabアイコン 新規登録 End -->
        </div>

        <br />

        <div class="m-0 mt-0 p-2" style="background-color: #505080">
          <h5 class="text-white">ロゴ</h5>

          <!-- header Logo 1 -->
          <b-input-group class="mb-2">
            <b-input-group-prepend is-text>
              <!-- <b-input-group-prepend> -->
              <!-- <b-form-radio v-model="myData2.logoRadio" name="some-radios" value="selfRegFile" style="height: 37px"></b-form-radio> -->
              <b-form-radio v-model="myData2.logoRadio" name="some-radios" value="selfRegFile"></b-form-radio>
              <!-- <b-form-radio v-model="myData2.logoRadio" name="some-radios" value="selfRegFile"></b-form-radio> -->
            </b-input-group-prepend>
            <b-button variant="info" @click="imageListLogo()">設定</b-button>
            <b-form-input v-model="myData2.headerLogo" style="height: 37px"></b-form-input>
            <b-input-group-append>
              <b-input-group-text>
                <b-img :src="myData2.headerLogo" width="24" height="24" class="m-0 p-0" alt="file"> </b-img>
              </b-input-group-text>
            </b-input-group-append>
          </b-input-group>

          <!-- Logoアイコン 新規登録 start -->
          <div v-show="showLogoReg" class="col-12 m-0 p-0">
            <div class="m-2 text-white">
              下の画像から選択してください。: <strong>{{ selected }}</strong>
            </div>

            <div class="row no-gutters">
              <b-form-group v-for="(myImage, index2) in myImages" :key="myImage.id" class="col-3">
                <div class="image_box" @click="selLogo(myImage.url, index2)">
                  <b-embed v-model="selected" :src="myImage.url" fluid type="embed" class="m-0" alt="file"> </b-embed>
                  <b-form-radio v-model="selected" :value="'No.' + ++index2" class="positionRadioBtn ml-4 p-0"> </b-form-radio>
                </div>
              </b-form-group>
            </div>
            <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-1 ml-2 px-1 py-0" @click="logoReg()">設定完了</b-button>
            <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-1 ml-2 px-1 py-0" @click="logoCancel()">取消</b-button>

            <!-- 以下の float-cb について： 上記の float-left の解除ができないので、style で設定 -->
            <div class="float-cb p-2 text-white">以下の「アイコン、ロゴの新規登録・削除」から、新たに画像を追加したり、 不要な画像を削除することができます。</div>
          </div>
          <!-- Logoアイコン 新規登録 End -->

          <!-- header Logo 2 -->
          <b-input-group class="mb-2">
            <!-- <b-input-group-prepend> -->
            <!-- <b-button variant="info">設定</b-button> -->
            <!-- <input type="checkbox" aria-label="Checkbox for following text input"> -->
            <!-- <input type="checkbox" /> -->
            <!-- </b-input-group-prepend> -->

            <b-input-group-prepend is-text>
              <!-- <input type="checkbox" aria-label="Checkbox for following text input" /> -->
              <!-- <input type="checkbox" /> -->
              <b-form-radio v-model="myData2.logoRadio" name="some-radios" value="bootstrapIcon"></b-form-radio>
            </b-input-group-prepend>

            <b-button variant="info" @click="setLogo()">設定</b-button>

            <b-form-input v-model="myData2.topTitleLogo" style="height: 42px"></b-form-input>
            <b-input-group-append>
              <b-input-group-text>
                <!-- <b-icon :icon="myData2.topTitleLogo" class="rounded bg-primary p-1" variant="a28-azure" animation="throb" font-scale="2" /> -->
                <b-icon :icon="myData2.topTitleLogo" :class="myData2.myClass" :variant="myData2.myVariant" :animation="myData2.myAnimation" :font-scale="myData2.myFontScale" />
              </b-input-group-text>
            </b-input-group-append>
          </b-input-group>

          <!-- Logoアイコン(Bootstrap Icon) 新規登録 start -->
          <div v-show="showLogoReg2" class="col-12 m-0 p-0">
            <br />
            <div class="m-2 text-white">
              <span>以下の <b>Name</b> は「</span>
              <b-link target="_blank" href="https://bootstrap-vue.org/docs/icons#icons" class="col-3 m-0 p-0 px-1 align-self-center">Icons</b-link>
              <span>」をクリックして、開いたページを参考に Icon の名前を記入してください。</span>
              <h6>入力例：alarm-fill</h6>
            </div>
            <!-- アイコン名 -->
            <b-input-group class="mb-2" prepend="Name">
              <b-form-input v-model="myData2.topTitleLogo" type="text"></b-form-input>
              <b-input-group-append>
                <b-button variant="info" @click="topTitleLogoReset()">Reset</b-button>
              </b-input-group-append>
            </b-input-group>

            <br />
            <div class="m-2 text-white">
              <span>以下の <b>Color</b> は「</span>
              <b-link target="_blank" href="https://bootstrap-vue.org/docs/icons#variants" class="col-3 m-0 p-0 px-1 align-self-center">Variants</b-link>
              <span>」をクリックして、開いたページを参考に記入してください。</span>
              <h6>入力例：success</h6>
            </div>
            <!-- variant ←アイコン自体の色を設定 -->
            <b-input-group class="mb-2" prepend="Color">
              <b-form-input v-model="myData2.myVariant" type="text"></b-form-input>
              <b-input-group-append>
                <b-button variant="info" @click="myVariantReset()">Reset</b-button>
              </b-input-group-append>
            </b-input-group>

            <br />
            <div class="m-2 text-white">
              <span>以下の <b>Styling</b> は「</span>
              <b-link target="_blank" href="https://bootstrap-vue.org/docs/icons#styling" class="col-3 m-0 p-0 px-1 align-self-center">Styling</b-link>
              <span>」をクリックして、開いたページを参考に記入してください。</span>
              <h6>入力例：rounded bg-warning p-1</h6>
            </div>
            <!-- class ←アイコンのbg-color,枠線等を設定 -->
            <b-input-group class="mb-2" prepend="Styling">
              <b-form-input v-model="myData2.myClass" type="text"></b-form-input>
              <b-input-group-append>
                <b-button variant="info" @click="myClassReset()">Reset</b-button>
              </b-input-group-append>
            </b-input-group>

            <br />
            <div class="m-2 text-white">
              <span>以下の <b>Amimation</b> は「</span>
              <b-link target="_blank" href="https://bootstrap-vue.org/docs/icons#animated-icons" class="col-3 m-0 p-0 px-1 align-self-center">Animated icons</b-link>
              <span>」をクリックして、開いたページを参考に記入してください。</span>
              <h6>入力例：cylon</h6>
            </div>
            <!-- amimation ←アイコンのアニメーションを設定 -->
            <b-input-group class="mb-2" prepend="Amimation">
              <b-form-input v-model="myData2.myAnimation" type="text"></b-form-input>
              <b-input-group-append>
                <b-button variant="info" @click="myAnimationReset()">Reset</b-button>
              </b-input-group-append>
            </b-input-group>

            <!-- <br />
            <div class="m-2 text-white">
              <span>以下の <b>Name</b> は「</span>
              <b-link target="_blank" href="https://bootstrap-vue.org/docs/icons#sizing" class="col-3 m-0 p-0 px-1 align-self-center"></b-link>
              <span>」をクリックして、開いたページを参考に記入してください。</span>
              <h6>Icons の名前＜例：alarm-fill＞</h6>
            </div> -->
            <!-- font-scale ←アイコンのスケールを設定 -->
            <!-- <b-input-group class="mb-2" prepend="Icon scale">
              <b-form-input v-model="myData2.myFontScale" type="text"></b-form-input>
              <b-input-group-append>
                <b-button variant="info" @click="myFontScaleReset()">Reset</b-button>
              </b-input-group-append>
            </b-input-group> -->

            <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-1 ml-2 px-1 py-0" @click="logoReg2()">設定完了</b-button>
            <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-1 ml-2 px-1 py-0" @click="logoCancel2()">取消</b-button>
          </div>
          <!-- Logoアイコン (Bootstrap Icon) 新規登録 End -->
        </div>
      </div>
      <!-- ------------------- Group 3 end -->

      <hr class="col-12 m-0 p-0" color="#000000" />

      <!-- -------------------  登録 start -->
      <div class="col-12 m-0 mt-0 p-2">
        <!-- ボタン -->
        <div class="m-2 pb-2">
          <!-- <b-button :size="commonData.selectedBtnSize" class="mx-1" variant="primary" @click="myReg()">登録</b-button> -->
          <!-- テスト start -->
          <b-button v-b-hover="buttonColorRegHover" :size="commonData.selctedBtnSize" class="mx-1" :style="buttonColorReg" @click="myReg()">登録</b-button>
          <!-- <b-button :size="commonData.selctedBtnSize" class="btn-pink mx-1" @click="myReg()">登録</b-button> -->
          <!-- テスト end -->

          <b-button v-b-hover="buttonColorCancelHover" :size="commonData.selectedBtnSize" class="mx-1" :style="buttonColorCancel" @click="myUndo()">登録取消</b-button>
          <!-- <b-button :size="commonData.selectedBtnSize" class="mx-1" @click="myTest()">テストLog</b-button> -->
          <p class="m-0 mt-1 p-0 text-light">「登録取消」は変更した内容を破棄して、登録前に戻します。</p>
          <p class="m-0 mt-1 p-0 text-light">なお一旦登録すると元に戻すことはできません。</p>
        </div>
      </div>
      <!-- ------------------- 登録 end -->

      <!-- <div class="row m-0 my-2 p-0">
        <hr class="m-0 p-0 col-12" color="#000000" />
      </div> -->
    </div>

    <!-- ====  アイコン、ロゴの登録  start  ========================================= -->
    <div class="row m-0 mt-2 p-2" style="background-color: midnightblue">
      <!-- <h5 class="col-12 mx-2 m-0 p-0 py-1 text-white">以下は管理機能です。</h5>
        <h6 class="col-12 mx-2 m-0 p-0 py-1 text-white">画像ファイル(.jpeg等)を表示することができます。</h6>
        <h6 class="col-12 mx-2 m-0 p-0 py-1 text-white">画像ファイルの作成例: Powerpointのファイルメニューからエクスポート</h6> -->

      <!-- 登録状況 -->

      <!-- 現在の登録状況 ＆ 削除 start -->
      <!-- <div class="col-12 m-0 mt-2 p-0" style="background-color: lightsteelblue">
          <h5 class="mx-2 mb-0 p-0 pt-1">現在の登録状況 ＆ 削除</h5>
          <p class="mx-2 mb-0 p-0">「日付」が新しい順にソートされます。</p>

          <div class="row no-gutters">
            <div v-for="dbPage in dbPages" :key="dbPage.id" class="col-4">
              <div class="m-1 mt-2 border">
                <b-embed :src="dbPage.page.fileUrl" fluid class="m-0" type="embed" alt="file" />
                <b-button :size="commonData.selectedBtnSize" class="px-1 py-0 m-1" @click="remove(dbPage.id)">削除</b-button>
              </div>
            </div>
          </div>
        </div> -->

      <!-- 新規登録 start -->
      <!-- <div v-show="showReg" class="col-12 m-0 p-0">
        <div class="m-0 p-0 mt-2" style="background-color: #405080">
          <h4 class="text-white mx-2 mb-0 p-0 py-1">Tab アイコンの設定</h4>

          <button :size="commonData.selectedBtnSize" class="ml-2 mb-2" @click="imageList()">画像表示</button>
          <div v-show="toggleShow">
            <div class="m-2">
              下の画像から選択してください。: <strong>{{ selected }}</strong>
            </div>

            <div class="row no-gutters">
              <b-form-group v-for="(myImage, index2) in myImages" :key="myImage.id" class="col-4">
                <div class="image_box" @click="selImage(myImage.url, index2)">
                  <b-embed v-model="selected" :src="myImage.url" fluid type="embed" class="m-0" alt="file"> </b-embed>
                  <b-form-radio v-model="selected" :value="'No.' + ++index2" class="positionRadioBtn ml-4 p-0"> </b-form-radio>
                </div>
              </b-form-group>
            </div>
            <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-1 ml-2 px-1 py-0" @click="myReg()">登録</b-button>

            <div class="float-cb p-2">以下の「画像新規登録・削除」から、新たに画像を追加したり、 不要な画像を削除することができます。</div>
          </div>
        </div>
      </div> -->
      <!-- 新規登録 End -->

      <div class="col-12 m-0 p-0">
        <div class="m-0 p-3 mt-3" style="background-color: steelblue">
          <h4 class="text-white">アイコン、ロゴの新規登録・削除</h4>
          <!-- 画像登録 Start -->
          <div class="col-12 m-0 p-2 mt-3" style="background-color: honeydew">
            <h5>画像登録</h5>
            <input ref="input" type="file" accept="image/*, .pdf" @change="fileExtension($event)" />
            <br />
          </div>
          <!-- 画像登録 End -->

          <!-- 画像削除 Start -->
          <div class="col-12 m-0 p-2 mt-2" style="background-color: honeydew">
            <h5>画像削除</h5>
            <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 ml-2 px-1 py-0" @click="imageListDel()">画像リスト表示</b-button>
            <b-button :size="commonData.selectedBtnSize" class="m-0 ml-2 px-1 py-0" @click="imageListDelClose()">閉じる</b-button>
          </div>

          <!-- 画像リスト表示 -->
          <div v-show="toggleDel" class="m-0 p-0">
            <div class="col-12 m-0 p-0 mt-2" style="background-color: honeydew">
              <div class="row no-gutters">
                <div v-for="myImage in myImages" :key="myImage.id" class="m-0 p-1 col-3">
                  <div class="border m-0 p-0">
                    <b-embed :src="myImage.url" fluid class="m-0" type="embed" alt="file" />
                    <!-- <b-button :size="commonData.selectedBtnSize" class="m-1 ml-2 px-1 py-0 d-flex" @click="deleteImage(myImage.name, myImage.url)">削除</b-button> -->
                    <b-button :size="commonData.selectedBtnSize" class="m-0 ml-1 px-1 py-0 d-flex" @click="deleteImage(myImage.name)">削除</b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ====  アイコン、ロゴの登録  end  ============================================== -->

    <p>{{ myDataSet() }}</p>
    <!-- <br /> -->
  </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import firebase from '~/plugins/firebase'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

const storage = firebase.storage()
const storageRef = storage.ref()
const imagesRef = storageRef.child('dbMan')
// const db = firebase.firestore()

export default {
  // el: '#listGroup',
  data() {
    return {
      isHovered: false,

      myDataSetFlg: false,
      myData: {},
      myData2: {
        headerLogo: '',
        topTitleLogo: '',
        myClass: '',
        myVariant: '',
        myAnimation: '',
        myFontScale: '',
        myBorder: '',
      },
      commonData: {},

      // add new ------- start
      // topTitleLogo: 'building',
      // topTitleLogoTemp: '',
      // tabIconRadio: 'selfRegFile',
      selected: '選択されていません。',
      // showReg: true,
      showTabReg: false,
      showLogoReg: false,
      showLogoReg2: false,
      toggleDel: false,
      // toggleShow: false,
      // page: {
      //   fileUrl: '',
      // },
      myImages: [
        {
          name: '',
          url: '',
        },
      ],
      // newImage: '',
      newFile: '',
      fileName: '',
      // fileType: '',
      // add new ------- end

      // カラー設定
      // colorInput: {},
      selectedMenuBtnColor: 'a35-royalblue',
      selectedMenuBtnColor2: '',
      selectedBtnBorderColor: '',
      optionsColor: [
        // { value: null, text: 'Please select an color' },
        // { value: 'a1-black', text: '1 black' },
        // { value: 'a2-dimgray', text: '2 dimgray' },
        // { value: 'a136-darkslateblue', text: '136 darkslateblue' },
        // { value: 'a34-steelblue', text: '34 steelblue' },
        // { value: 'a35-royalblue', text: '35 royalblue' },
        // { value: 'a36-midnightblue', text: '36 midnightblue' }
        { value: 'a1-black', text: '1-black' },
        { value: 'a2-dimgray', text: '2-dimgray' },
        { value: 'a3-gray', text: '3-gray' },
        { value: 'a4-darkgray', text: '4-darkgray' },
        { value: 'a5-silver', text: '5-silver' },
        { value: 'a6-lightgray', text: '6-lightgray' },
        { value: 'a7-gainsboro', text: '7-gainsboro' },
        { value: 'a8-whitesmoke', text: '8-whitesmoke' },
        { value: 'a9-white', text: '9-white' },
        { value: 'a10-snow', text: '10-snow' },
        { value: 'a11-ghostwhite', text: '11-ghostwhite' },
        { value: 'a12-floralwhite', text: '12-floralwhite' },
        { value: 'a13-linen', text: '13-linen' },
        { value: 'a14-antiquewhite', text: '14-antiquewhite' },
        { value: 'a15-papayawhip', text: '15-papayawhip' },
        { value: 'a16-blanchedalmond', text: '16-blanchedalmond' },
        { value: 'a17-bisque', text: '17-bisque' },
        { value: 'a18-moccasin', text: '18-moccasin' },
        { value: 'a19-navajowhite', text: '19-navajowhite' },
        { value: 'a20-peachpuff', text: '20-peachpuff' },
        { value: 'a21-mistyrose', text: '21-mistyrose' },
        { value: 'a22-lavenderblush', text: '22-lavenderblush' },
        { value: 'a23-seashell', text: '23-seashell' },
        { value: 'a24-oldlace', text: '24-oldlace' },
        { value: 'a25-ivory', text: '25-ivory' },
        { value: 'a26-honeydew', text: '26-honeydew' },
        { value: 'a27-mintcream', text: '27-mintcream' },
        { value: 'a28-azure', text: '28-azure' },
        { value: 'a29-aliceblue', text: '29-aliceblue' },
        { value: 'a30-lavender', text: '30-lavender' },
        { value: 'a31-lightsteelblue', text: '31-lightsteelblue' },
        { value: 'a32-lightslategray', text: '32-lightslategray' },
        { value: 'a33-slategray', text: '33-slategray' },
        { value: 'a34-steelblue', text: '34-steelblue' },
        { value: 'a35-royalblue', text: '35-royalblue' },
        { value: 'a36-midnightblue', text: '36-midnightblue' },
        { value: 'a37-navy', text: '37-navy' },
        { value: 'a38-darkblue', text: '38-darkblue' },
        { value: 'a39-mediumblue', text: '39-mediumblue' },
        { value: 'a40-blue', text: '40-blue' },
        { value: 'a41-dodgerblue', text: '41-dodgerblue' },
        { value: 'a42-cornflowerblue', text: '42-cornflowerblue' },
        { value: 'a43-deepskyblue', text: '43-deepskyblue' },
        { value: 'a44-lightskyblue', text: '44-lightskyblue' },
        { value: 'a45-skyblue', text: '45-skyblue' },
        { value: 'a46-lightblue', text: '46-lightblue' },
        { value: 'a47-powderblue', text: '47-powderblue' },
        { value: 'a48-paleturquoise', text: '48-paleturquoise' },
        { value: 'a49-lightcyan', text: '49-lightcyan' },
        { value: 'a50-cyan', text: '50-cyan' },
        { value: 'a51-aqua', text: '51-aqua' },
        { value: 'a52-turquoise', text: '52-turquoise' },
        { value: 'a53-mediumturquoise', text: '53-mediumturquoise' },
        { value: 'a54-darkturquoise', text: '54-darkturquoise' },
        { value: 'a55-lightseagreen', text: '55-lightseagreen' },
        { value: 'a56-cadetblue', text: '56-cadetblue' },
        { value: 'a57-darkcyan', text: '57-darkcyan' },
        { value: 'a58-teal', text: '58-teal' },
        { value: 'a59-darkslategray', text: '59-darkslategray' },
        { value: 'a60-darkgreen', text: '60-darkgreen' },
        { value: 'a61-green', text: '61-green' },
        { value: 'a62-forestgreen', text: '62-forestgreen' },
        { value: 'a63-seagreen', text: '63-seagreen' },
        { value: 'a64-mediumseagreen', text: '64-mediumseagreen' },
        { value: 'a65-mediumaquamarine', text: '65-mediumaquamarine' },
        { value: 'a66-darkseagreen', text: '66-darkseagreen' },
        { value: 'a67-aquamarine', text: '67-aquamarine' },
        { value: 'a68-palegreen', text: '68-palegreen' },
        { value: 'a69-lightgreen', text: '69-lightgreen' },
        { value: 'a70-springgreen', text: '70-springgreen' },
        { value: 'a71-mediumspringgreen', text: '71-mediumspringgreen' },
        { value: 'a72-lawngreen', text: '72-lawngreen' },
        { value: 'a73-chartreuse', text: '73-chartreuse' },
        { value: 'a74-greenyellow', text: '74-greenyellow' },
        { value: 'a75-lime', text: '75-lime' },
        { value: 'a76-limegreen', text: '76-limegreen' },
        { value: 'a77-yellowgreen', text: '77-yellowgreen' },
        { value: 'a78-darkolivegreen', text: '78-darkolivegreen' },
        { value: 'a79-olivedrab', text: '79-olivedrab' },
        { value: 'a80-olive', text: '80-olive' },
        { value: 'a81-darkkhaki', text: '81-darkkhaki' },
        { value: 'a82-palegoldenrod', text: '82-palegoldenrod' },
        { value: 'a83-cornsilk', text: '83-cornsilk' },
        { value: 'a84-beige', text: '84-beige' },
        { value: 'a85-lightyellow', text: '85-lightyellow' },
        { value: 'a86-lightgoldenrodyellow', text: '86-lightgoldenrodyellow' },
        { value: 'a87-lemonchiffon', text: '87-lemonchiffon' },
        { value: 'a88-wheat', text: '88-wheat' },
        { value: 'a89-burlywood', text: '89-burlywood' },
        { value: 'a90-tan', text: '90-tan' },
        { value: 'a91-khaki', text: '91-khaki' },
        { value: 'a92-yellow', text: '92-yellow' },
        { value: 'a93-gold', text: '93-gold' },
        { value: 'a94-orange', text: '94-orange' },
        { value: 'a95-sandybrown', text: '95-sandybrown' },
        { value: 'a96-darkorange', text: '96-darkorange' },
        { value: 'a97-goldenrod', text: '97-goldenrod' },
        { value: 'a98-peru', text: '98-peru' },
        { value: 'a99-darkgoldenrod', text: '99-darkgoldenrod' },
        { value: 'a100-chocolate', text: '100-chocolate' },
        { value: 'a101-sienna', text: '101-sienna' },
        { value: 'a102-saddlebrown', text: '102-saddlebrown' },
        { value: 'a103-maroon', text: '103-maroon' },
        { value: 'a104-darkred', text: '104-darkred' },
        { value: 'a105-brown', text: '105-brown' },
        { value: 'a106-firebrick', text: '106-firebrick' },
        { value: 'a107-indianred', text: '107-indianred' },
        { value: 'a108-rosybrown', text: '108-rosybrown' },
        { value: 'a109-darksalmon', text: '109-darksalmon' },
        { value: 'a110-lightcoral', text: '110-lightcoral' },
        { value: 'a111-salmon', text: '111-salmon' },
        { value: 'a112-lightsalmon', text: '112-lightsalmon' },
        { value: 'a113-coral', text: '113-coral' },
        { value: 'a114-tomato', text: '114-tomato' },
        { value: 'a115-orangered', text: '115-orangered' },
        { value: 'a116-red', text: '116-red' },
        { value: 'a117-crimson', text: '117-crimson' },
        { value: 'a118-mediumvioletred', text: '118-mediumvioletred' },
        { value: 'a119-deeppink', text: '119-deeppink' },
        { value: 'a120-hotpink', text: '120-hotpink' },
        { value: 'a121-palevioletred', text: '121-palevioletred' },
        { value: 'a122-pink', text: '122-pink' },
        { value: 'a123-lightpink', text: '123-lightpink' },
        { value: 'a124-thistle', text: '124-thistle' },
        { value: 'a125-magenta', text: '125-magenta' },
        { value: 'a126-fuchsia', text: '126-fuchsia' },
        { value: 'a127-violet', text: '127-violet' },
        { value: 'a128-plum', text: '128-plum' },
        { value: 'a129-orchid', text: '129-orchid' },
        { value: 'a130-mediumorchid', text: '130-mediumorchid' },
        { value: 'a131-darkorchid', text: '131-darkorchid' },
        { value: 'a132-darkviolet', text: '132-darkviolet' },
        { value: 'a133-darkmagenta', text: '133-darkmagenta' },
        { value: 'a134-purple', text: '134-purple' },
        { value: 'a135-indigo', text: '135-indigo' },
        { value: 'a136-darkslateblue', text: '136-darkslateblue' },
        { value: 'a137-blueviolet', text: '137-blueviolet' },
        { value: 'a138-mediumpurple', text: '138-mediumpurple' },
        { value: 'a139-slateblue', text: '139-slateblue' },
        { value: 'a140-mediumslateblue', text: '140-mediumslateblue' },
      ],
      buttonColorBasic: '',
      buttonColorBasicSet: '',
      buttonColorMenuBar: '',
      buttonColorMenu: '',
      buttonBarRGB: '',
      buttonHeaderRGB: '',
      buttonColorReg: '',
      buttonColorEdit: '',
      buttonColorDel: '',
      buttonColorCancel: '',
      buttonOpacityBarTemp: 90,

      // ボタンサイズ
      // selectedBtnSize: 'md',
      optionsBtnSize: [
        { text: '大', value: 'lg' },
        { text: '中', value: 'md' },
        { text: '小', value: 'sm' },
      ],
    }
  },
  // beforeDestroy() {
  // this.$nuxt.$off('selnum')
  // },
  computed: {
    dbCommon() {
      return this.$store.getters['commonDB/getCommonById']('common')
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
    // 下記の commonDB は store/commonDB.js のファイル名
    this.$store.dispatch('commonDB/init')

    // 下記の commonDB は store/commonDB.js のファイル名
    this.$store.dispatch('manDB/init')
  },

  // ④ updated 画面が更新された後、呼び出される。
  // SSR(Firebase等)では使えない。
  updated() {
    this.selnum(911)
  },

  // ⑨ methods は呼び出される度に実行
  // データが変更された時、反映したくない場合はmethodsを利用
  methods: {
    selnum(num) {
      // this.selected = num
      // console.log('header selnum selected: ' + num)
      this.$nuxt.$emit('selnum', num)
    },

    formatterMenu(value) {
      // const tempValue = 'rgba(' + value + Math.round(this.myData2.buttonOpacityBar * 100) /  100 + ')'
      const red = parseInt(value.substring(1, 3), 16)
      const green = parseInt(value.substring(3, 5), 16)
      const blue = parseInt(value.substring(5, 7), 16)
      const tempValue = 'background-color:rgba(' + red + ',' + green + ',' + blue + ',' + this.buttonOpacityBarTemp / 100 + ');'
      this.myData2.buttonBarRGB = tempValue
      // console.log(tempValue)
      return value
    },
    // カラー設定 1 Menu
    buttonColorMenuHover(hovered) {
      this.isHovered = hovered

      if (this.isHovered === true) {
        this.buttonColorMenu = 'background-color: ' + this.myData2.buttonColorMenu2 + ';'
      } else {
        this.buttonColorMenu = 'background-color: ' + this.myData2.buttonColorMenu1 + ';'
      }
    },
    // カラー設定 2 Reg
    buttonColorRegHover(hovered) {
      this.isHovered = hovered
      // console.log('1 ---------------- isHovered: ', this.isHovered)

      if (this.isHovered === true) {
        // this.buttonColorReg = 'background-color: ' + '#eee' + ';'
        this.buttonColorReg = 'background-color: ' + this.myData2.buttonColorReg2 + ';'
        // this.buttonColorReg = 'background-color: ' + this.buttonColorReg2 + ';'
      } else {
        // this.buttonColorReg = 'background-color: ' + '#7cc' + ';'
        this.buttonColorReg = 'background-color: ' + this.myData2.buttonColorReg1 + ';'
        // this.buttonColorReg = 'background-color: ' + this.buttonColorReg1 + ';'
      }
    },
    // カラー設定 3 Edit
    buttonColorEditHover(hovered) {
      this.isHovered = hovered

      if (this.isHovered === true) {
        this.buttonColorEdit = 'background-color: ' + this.myData2.buttonColorEdit2 + ';'
      } else {
        this.buttonColorEdit = 'background-color: ' + this.myData2.buttonColorEdit1 + ';'
      }
    },
    // カラー設定 4 Del
    buttonColorDelHover(hovered) {
      this.isHovered = hovered

      if (this.isHovered === true) {
        this.buttonColorDel = 'background-color: ' + this.myData2.buttonColorDel2 + ';'
      } else {
        this.buttonColorDel = 'background-color: ' + this.myData2.buttonColorDel1 + ';'
      }
    },
    // カラー設定 5 Cancel
    buttonColorCancelHover(hovered) {
      this.isHovered = hovered

      if (this.isHovered === true) {
        this.buttonColorCancel = 'background-color: ' + this.myData2.buttonColorCancel2 + ';'
      } else {
        this.buttonColorCancel = 'background-color: ' + this.myData2.buttonColorCancel1 + ';'
      }
    },
    // test1() {
    // console.log('myData.chkNemu1 in test1(): ' + this.myData.chkMenu1)
    // console.log('myData2.chkNemu1 in test1(): ' + this.myData2.chkMenu1)
    // this.$router.go()
    // },
    myReg() {
      this.myData2.bodyFontSize = Number(this.myData2.bodyFontSize)

      if (this.buttonOpacityBarTemp < 0) {
        this.buttonOpacityBarTemp = 0
      } else if (this.buttonOpacityBarTemp > 100) {
        this.buttonOpacityBarTemp = 100
      }

      this.myData2.buttonOpacityBar = Number(this.buttonOpacityBarTemp)
      // this.myData2.buttonOpacityBar = this.buttonOpacityBarTemp

      // メニューBar（1行目：ボタン行）の RGB をDBへ保存
      // this.myData2.buttonHeaderRGB = 'background-color:rgba(11,11,11,' + this.buttonOpacityBarTemp / 100 + ');'
      this.myData2.buttonHeaderRGB = 'background-color:rgba(255,255,255,' + this.buttonOpacityBarTemp / 100 + ');'

      // メニューBar（2行目：タイトル行） の RGB をDBへ保存
      const red = parseInt(this.myData2.buttonColorMenuBar.substring(1, 3), 16)
      const green = parseInt(this.myData2.buttonColorMenuBar.substring(3, 5), 16)
      const blue = parseInt(this.myData2.buttonColorMenuBar.substring(5, 7), 16)
      const tempValue = 'background-color:rgba(' + red + ',' + green + ',' + blue + ',' + this.buttonOpacityBarTemp / 100 + ');'
      this.myData2.buttonBarRGB = tempValue

      // テーマ（＝Basic）Color をDBへ保存
      this.myData2.buttonColorBasicSet = 'background-color: ' + this.myData2.buttonColorBasic + ';'

      // Menu, Reg, Edit, Cancel, Del のColor をDBへ保存
      this.myData2.selectedMenuBtnColor = this.selectedMenuBtnColor
      this.myData2.buttonColorMenu = 'background-color: ' + this.myData2.buttonColorMenu1 + ';'
      this.myData2.buttonColorReg = 'background-color: ' + this.myData2.buttonColorReg1 + ';'
      this.myData2.buttonColorEdit = 'background-color: ' + this.myData2.buttonColorEdit1 + ';'
      this.myData2.buttonColorCancel = 'background-color: ' + this.myData2.buttonColorCancel1 + ';'
      this.myData2.buttonColorDel = 'background-color: ' + this.myData2.buttonColorDel1 + ';'
      this.myData2.myBorder = this.selectedBtnBorderColor

      if (this.myData2.bodyFontSize >= 6 && this.myData2.bodyFontSize <= 14) {
        // console.log('bodyFontSize: ', this.myData2.bodyFontSize)
        // 以下の２行： 初期デプロイ後 add , Firebabase(Database)に項目が作成されたら update に戻す
        // this.$store.dispatch('commonDB/add', this.myData2).then(() => {
        this.$store.dispatch('commonDB/update', { id: 'common', myData: this.myData2 }).then(() => {
          this.toastFileUpdate('登録', '登録しました。')
        })
      } else {
        this.$swal({
          title: '登録はキャンセルされました。',
          text: 'フォントサイズは 6〜14 の範囲で登録してください。',
          icon: 'warning',
          showCancelButton: false,
          confirmButtonText: '確認しました。',
          // cancelButtonText: 'キャンセル',
          // focusCancel: true
        }).then((result) => {
          // if (result.value) {
          // }
        })
      }
    },
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
    // man1 Page を開いた時、メニューデータをFireStoreからロードしてセット
    myDataSet() {
      // console.log('======= テスト in myDataSet()')
      if (this.myDataSetFlg === false) {
        try {
          // firestore のデータを myData にセット
          this.myData = this.dbCommon.myData

          // myData のデータを myData2(=入力用) にセット
          // this.myData2.id = this.myData.id

          // 以下の６行、 初期データの登録時にコメントアウトを外し、終わったら元に戻す
          // this.myData2.mHome1 = 'a'
          // this.myData2.mArchiveDB= 'a'
          // this.myData2.mContact = 'a'
          // this.myData2.mLink = 'a'
          // this.myData2.topTitle = 'a'
          // this.myData2.myDataNo = '1'

          // 以下の６行、 初期データの登録時にコメントアウトし、終わったら元に戻す
          this.myData2.headerLogo = this.myData.headerLogo
          this.myData2.topTitleLogo = this.myData.topTitleLogo
          this.myData2.myClass = this.myData.myClass
          this.myData2.myVariant = this.myData.myVariant
          this.myData2.myAnimation = this.myData.myAnimation
          this.myData2.myFontScale = this.myData.myFontScale
          this.myData2.myBorder = this.myData.myBorder
          this.myData2.mTopics = this.myData.mTopics
          this.myData2.mHome1 = this.myData.mHome1
          this.myData2.mArchiveDB = this.myData.mArchiveDB
          this.myData2.mContact = this.myData.mContact
          this.myData2.mLink = this.myData.mLink
          this.myData2.tabIcon = this.myData.tabIcon
          this.myData2.logoRadio = this.myData.logoRadio
          this.myData2.tabTitle = this.myData.tabTitle
          this.myData2.topTitle = this.myData.topTitle
          this.myData2.bodyFontSize = this.myData.bodyFontSize
          this.myData2.selectedBtnSize = this.myData.selectedBtnSize

          // カラー設定 Start
          // 1 Basic
          this.myData2.buttonColorBasic = this.myData.buttonColorBasic
          // this.buttonColorBasicSet = 'background-color: ' + this.myData.buttonColorBasic + ';'
          this.buttonColorBasicSet = this.myData.buttonColorBasicSet

          this.selectedMenuBtnColor = this.myData.selectedMenuBtnColor
          this.myData2.selectedMenuBtnColor = this.myData.selectedMenuBtnColor

          // ボタン枠線の色
          this.selectedBtnBorderColor = this.myData.myBorder
          this.myData2.myBorder = this.myData.myBorder

          // 2 Menu Bar
          this.myData2.buttonColorMenuBar = this.myData.buttonColorMenuBar
          this.buttonColorMenuBar = 'background-color: ' + this.myData.buttonColorMenuBar + ';'
          this.myData2.buttonOpacityBar = this.myData.buttonOpacityBar
          this.buttonOpacityBarTemp = this.myData.buttonOpacityBar
          this.buttonHeaderRGB = this.myData.buttonHeaderRGB
          this.myData2.buttonHeaderRGB = this.myData.buttonHeaderRGB
          this.buttonBarRGB = this.myData.buttonBarRGB
          this.myData2.buttonBarRGB = this.myData.buttonBarRGB

          // 3 Menu
          // this.buttonColorMenu = 'background-color: ' + this.myData.buttonColorMenu1 + ';'
          this.buttonColorMenu = this.myData.buttonColorMenu
          this.myData2.buttonColorMenu = this.myData.buttonColorMenu
          this.myData2.buttonColorMenu1 = this.myData.buttonColorMenu1
          this.myData2.buttonColorMenu2 = this.myData.buttonColorMenu2

          // 4 reg
          this.buttonColorReg = this.myData.buttonColorReg
          this.myData2.buttonColorReg = this.myData.buttonColorReg
          this.myData2.buttonColorReg1 = this.myData.buttonColorReg1
          this.myData2.buttonColorReg2 = this.myData.buttonColorReg2

          // 5 Edit
          this.buttonColorEdit = this.myData.buttonColorEdit
          this.myData2.buttonColorEdit = this.myData.buttonColorEdit
          this.myData2.buttonColorEdit1 = this.myData.buttonColorEdit1
          this.myData2.buttonColorEdit2 = this.myData.buttonColorEdit2

          // 6 Del
          this.buttonColorDel1 = this.myData.buttonColorDel
          this.myData2.buttonColorDel = this.myData.buttonColorDel
          this.myData2.buttonColorDel1 = this.myData.buttonColorDel1
          this.myData2.buttonColorDel2 = this.myData.buttonColorDel2

          // 7 cancel
          this.buttonColorCancel = this.myData.buttonColorCancel
          this.myData2.buttonColorCancel = this.myData.buttonColorCancel
          this.myData2.buttonColorCancel1 = this.myData.buttonColorCancel1
          this.myData2.buttonColorCancel2 = this.myData.buttonColorCancel2

          // カラー設定 End

          this.myDataSetFlg = true
          // console.log('2 ********** buttonOpacityBar in myDataset(): ', this.myData2.buttonOpacityBar)
          // console.log('2 ********** myData2.id in myDataset(): ', this.myData2.id)
        } catch (error) {
          // alert('テスト in myDataSet(): ' + error)
          // console.log('テスト in myDataSet(): ' + error)
        }
      }
    },

    // ===== タブ、ロゴ start ==========================================
    tabReg() {
      this.showTabReg = false
    },

    tabCancel() {
      this.showTabReg = false
      this.myData2.tabIcon = this.myData.tabIcon
      this.selected = ''
      // console.log('1-1 -------------- tabIcon: ', this.myData.tabIcon)
    },

    logoReg() {
      this.showLogoReg = false
    },

    logoCancel() {
      this.showLogoReg = false
      this.myData2.headerLogo = this.myData.headerLogo
      this.selected = ''
    },

    // アイコン名
    topTitleLogoReset() {
      this.myData2.topTitleLogo = this.myData.topTitleLogo
      // console.log('2-1 -------- topTitleLogo: ', this.myData2.topTitleLogo)
    },

    // class ←アイコンのbg-color,枠線等を設定
    myClassReset() {
      this.myData2.myClass = this.myData.myClass
    },

    // variant ←アイコン自体の色を設定
    myVariantReset() {
      this.myData2.myVariant = this.myData.myVariant
    },

    // amimation ←アイコンのアニメーションを設定
    myAnimationReset() {
      this.myData2.myAnimation = this.myData.myAnimation
    },

    // font-scale ←アイコンのスケールを設定
    myFontScaleReset() {
      this.myData2.myFontScale = this.myData.myFontScale
    },

    logoReg2() {
      this.showLogoReg2 = false
    },

    logoCancel2() {
      this.showLogoReg2 = false
      this.myData2.topTitleLogo = this.myData.topTitleLogo
      this.myData2.myClass = this.myData.myClass
      this.myData2.myVariant = this.myData.myVariant
      this.myData2.myAnimation = this.myData.myAnimation
      this.myData2.myFontScale = this.myData.myFontScale
    },
    // ===== タブ、ロゴ end ==========================================

    //  ====== 画像関連 start =====================================
    fileExtension(e) {
      const file = (e.target.files || e.dataTransfer.files)[0]

      if (typeof file === 'undefined') {
        // this.reserve = false
        this.selected = '選択されていません。'
        return
      }

      this.fileName = file.name
      // const pos = this.fileName.lastIndexOf('.')

      // this.fileType = this.fileName.slice(pos + 1)

      // const vm = this

      this.newFile = file
      this.uploadPop()
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
          // DBに画像を保存
          this.uploadNotImage()
        } else {
          // 入力データをリセット
          this.reset()
        }
      })
    },

    // 画像をアップロードする
    // upload() {
    //   if (this.fileType === 'png' || this.fileType === 'jpg' || this.fileType === 'jpeg') {
    //     // console.log('file 拡張子は 画像: ' + fileType)
    //     this.uploadImage()
    //   } else {
    //     // console.log('file 拡張子は 画像以外: ' + fileType)
    //     // this.reserve = true
    //     this.uploadNotImage()
    //   }
    // },

    // 画像ファイル以外の保存
    uploadNotImage() {
      // const photo = this.newImage

      // アップロード先のフォルダ、ファイル名を指定
      // const dateNow = Date.now()
      // const fileNameDate = moment(dateNow).format('YYYYMMDD-HHmms)
      // const fileNameDate = this.todaySet3()
      // this.fileName = fileNameDate + this.fileName
      // console.log('1-1 ------------ fileName: ' + this.fileName)
      // console.log('1-2 ------------ newFile: ' + this.newFile)
      const fileImage = imagesRef.child(this.fileName)

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
    },

    // fileName で指定した画像ファイルの Path = Url を取得
    getImageUrl(fileName) {
      const nameUrl = { name: fileName, url: '' }

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

    imageListIcon() {
      this.showTabReg = true
      this.imageList()
    },

    imageListLogo() {
      this.showLogoReg = true
      this.imageList()
    },

    imageList() {
      // FireStrage のフォルダとファイルのリストを取得

      this.myImages = []
      const vm = this

      // this.showTabReg = true

      imagesRef
        .listAll()
        .then(function (res) {
          for (let i = 0; i < res.prefixes.length; i++) {}
          for (let i = 0; i < res.items.length; i++) {
            vm.getImageUrl(res.items[i].location.path)
          }
        })
        .catch(function (error) {
          alert('error in imageList: ' + error)
        })
    },

    setLogo() {
      this.showLogoReg2 = true
    },

    selIcon(imageUrl, index2) {
      this.selected = 'No.' + index2
      this.myData2.tabIcon = imageUrl
    },

    selLogo(imageUrl, index2) {
      this.selected = 'No.' + index2
      this.myData2.headerLogo = imageUrl
    },

    imageListDelClose() {
      this.toggleDel = false
    },

    imageListDel() {
      // FireStrage のフォルダとファイルのリストを取得

      this.myImages = []
      const vm = this

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
            vm.getImageUrl(res.items[i].location.path)
          }
        })
        .catch(function (error) {
          alert('error in imageListDel: ' + error)
          // console.error('error in imageListDel: ', error)
        })
    },

    // 削除用 画像リスト表示
    deleteImage(deleteImageName) {
      this.$swal({
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

          // console.log('3-1 ------------ deleteImagePath: ' + deleteImageName)
          const desertRef = storageRef.child(deleteImageName)

          desertRef
            .delete()
            .then(() => {
              // alert('ファイル削除完了')
              this.toastFileUpdate('ファイル 削除', '完了しました。')
              // this.toggleDel = false
              this.imageListShow = false
              this.imageList()
            })
            .catch((error) => {
              alert('ファイル削除 error in deleteImage: ' + error)
            })
        }
      })
    },

    // 入力データをリセット
    reset() {
      // const canvas = this.$refs.thumbnail
      // this.newImage = ''
      this.newFile = ''

      // サムネイル用canvasのサイズを0に
      // canvas.height = 0
      // canvas.width = 0

      // inputの入力をリセット
      this.$refs.input.value = ''
      // this.reserve = false
      this.toggleDel = false
    },
    //  ====== 画像関連 end =====================================
  },
}
</script>

<style scoped>
.float-cb {
  clear: both;
}

/* .positionRadioBtn { */
.image_box .positionRadioBtn {
  position: absolute;
  top: 5px;
  right: 20px;
}

/* .btn-pink {
  background-color: #ff7bff;
}
.btn-pink:hover {
  background-color: #cc9bcc;
} */
del {
  color: rgba(255, 0, 0, 1);
}
</style>
