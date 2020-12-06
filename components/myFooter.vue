<template>
  <div class="container-fluid m-0 p-0">
    <br />
    <p class="m-0 mt-3 p-0">&nbsp;</p>

    <!-- サイトマップ start -->
    <div v-show="showSitemap" class="m-0 p-0">
      <div class="row m-0 p-0 pt-3 d-flex justify-content-between" style="background-color: black">
        <h5 class="m-0 mx-2 text-white">サイトマップ</h5>
        <!-- <div class="bg-white"> -->
        <b-button :size="commonData.selectedBtnSize" to="/home" :variant="commonData.selectedMenuBtnColor" class="m-0 mr-3 px-1 py-0 bg-white" :class="isBorder2(0, commonData.myBorder)" @click="selnum(0)">{{ home1 }}</b-button>
        <!-- </div> -->

        <!-- 以下の１行は消すな！ -->
        <!-- <b-button :size="commonData.selectedBtnSize" to="/notCreated" :variant="commonData.selectedMenuBtnColor" class="m-0 mr-3 px-1 py-0">このウェブサイトについて</b-button> -->
      </div>

      <div class="row m-0 p-2" style="background-color: black">
        <!-- 1 -->
        <div v-show="myData.chkMenu1" class="col-4 m-0 p-2">
          <!-- <div class="col-4 m-0 p-2"> -->
          <b-list-group>
            <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">{{ myData.m1 }}</b-list-group-item>
            <div v-show="myData.chkMenu11">
              <!-- <b-list-group-item to="/c11" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(11) }" @click="selected = 11">{{ myData.m11 }}</b-list-group-item> -->
              <!-- <b-list-group-item to="/c11" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(11) }" @click="selnumSide(11)">{{ myData.m11 }}</b-list-group-item> -->
              <!-- <b-list-group-item to="/c11" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(11) }" @click="selnum(11)">{{ myData.m11 }}</b-list-group-item> -->
              <b-list-group-item to="/b11" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(11) }">{{ myData.m11 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu12">
              <!-- <b-list-group-item to="/c12" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(12) }" @click="selected = 12">{{ myData.m12 }}</b-list-group-item> -->
              <b-list-group-item to="/b12" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(12) }">{{ myData.m12 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu13">
              <b-list-group-item to="/b13" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(13) }">{{ myData.m13 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu14">
              <b-list-group-item to="/b14" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(14) }">{{ myData.m14 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu15">
              <b-list-group-item to="/b15" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(15) }">{{ myData.m15 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu16">
              <b-list-group-item to="/b16" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(16) }">{{ myData.m16 }}</b-list-group-item>
            </div>
          </b-list-group>
        </div>
        <!-- </div> -->

        <!-- 2 -->
        <div v-show="myData.chkMenu2" class="col-4 m-0 p-2">
          <!-- <div class="col-4 m-0 p-2"> -->
          <b-list-group>
            <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">{{ myData.m2 }}</b-list-group-item>
            <div v-show="myData.chkMenu21">
              <b-list-group-item to="/b21" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(21) }">{{ myData.m21 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu22">
              <b-list-group-item to="/b22" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(22) }">{{ myData.m22 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu23">
              <b-list-group-item to="/b23" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(23) }">{{ myData.m23 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu24">
              <b-list-group-item to="/b24" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(24) }">{{ myData.m24 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu25">
              <b-list-group-item to="/b25" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(25) }">{{ myData.m25 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu26">
              <b-list-group-item to="/b26" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(26) }">{{ myData.m26 }}</b-list-group-item>
            </div>
          </b-list-group>
        </div>
        <!-- </div> -->

        <!-- 3 -->
        <div v-show="myData.chkMenu3" class="col-4 m-0 p-2">
          <b-list-group>
            <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">{{ myData.m3 }}</b-list-group-item>
            <div v-show="myData.chkMenu31">
              <b-list-group-item to="/b31" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(31) }">{{ myData.m31 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu32">
              <b-list-group-item to="/b32" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(32) }">{{ myData.m32 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu33">
              <b-list-group-item to="/b33" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(33) }">{{ myData.m33 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu34">
              <b-list-group-item to="/b34" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(34) }">{{ myData.m34 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu35">
              <b-list-group-item to="/b35" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(35) }">{{ myData.m35 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu36">
              <b-list-group-item to="/b36" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(36) }">{{ myData.m36 }}</b-list-group-item>
            </div>
          </b-list-group>
        </div>

        <!-- 4 -->
        <div v-show="myData.chkMenu4" class="col-4 m-0 p-2">
          <b-list-group>
            <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">{{ myData.m4 }}</b-list-group-item>
            <div v-show="myData.chkMenu41">
              <b-list-group-item to="/b41" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(41) }">{{ myData.m41 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu42">
              <b-list-group-item to="/b42" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(42) }">{{ myData.m42 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu43">
              <b-list-group-item to="/b43" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(43) }">{{ myData.m43 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu44">
              <b-list-group-item to="/b44" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(44) }">{{ myData.m44 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu45">
              <b-list-group-item to="/b45" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(45) }">{{ myData.m45 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu46">
              <b-list-group-item to="/b46" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(46) }">{{ myData.m46 }}</b-list-group-item>
            </div>
          </b-list-group>
        </div>

        <!-- 5 動画コレクション用 -->
        <!-- <div class="col-4 m-0 p-2"> -->
        <div v-show="myData.chkMenu5" class="col-4 m-0 p-2">
          <b-list-group>
            <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">{{ myData.m5 }}</b-list-group-item>
            <div v-show="myData.chkMenu51">
              <b-list-group-item to="/a51" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(51) }">{{ myData.m51 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu52">
              <b-list-group-item to="/a52" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(52) }">{{ myData.m52 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu53">
              <b-list-group-item to="/a53" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(53) }">{{ myData.m53 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu54">
              <b-list-group-item to="/a54" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(54) }">{{ myData.m54 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu55">
              <b-list-group-item to="/a55" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(55) }">{{ myData.m55 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu56">
              <b-list-group-item to="/a56" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(56) }">{{ myData.m56 }}</b-list-group-item>
            </div>
          </b-list-group>
        </div>
        <!-- </div> -->

        <!-- 6 カスタマイズ用 -->
        <!-- <div class="col-4 m-0 p-2"> -->
        <div v-show="myData.chkMenu6" class="col-4 m-0 p-2">
          <b-list-group>
            <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">{{ myData.m6 }}</b-list-group-item>
            <div v-show="myData.chkMenu61">
              <b-list-group-item to="/myQA" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(61) }">{{ myData.m61 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu62">
              <b-list-group-item to="/myQuestion" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(62) }">{{ myData.m62 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu63">
              <b-list-group-item to="/myAbout" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(63) }">{{ myData.m63 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu64">
              <b-list-group-item to="/myLink" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(64) }">{{ myData.m64 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu65">
              <b-list-group-item to="/myAccess" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(65) }">{{ myData.m65 }}</b-list-group-item>
            </div>
            <div v-show="myData.chkMenu66">
              <b-list-group-item to="/myParking" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(66) }">{{ myData.m66 }}</b-list-group-item>
            </div>
          </b-list-group>
        </div>
      </div>

      <!-- Side MENU start -->
      <!-- <div v-for="dbSide in dbSides" :key="dbSide.id" class="m-0 p-0"> -->
      <div v-if="dbSides" v-show="dbSides.mySide.chkSideMenu" class="m-0 p-0">
        <div class="row m-0 p-2" style="background-color: black">
          <!-- ========== PR動画 ========== -->
          <div v-show="dbSides.mySide.chkMenu2" class="col-4 m-0 p-2">
            <b-list-group>
              <!-- <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">{{ dbSides.mySide.v1 }}</b-list-group-item> -->
              <b-list-group-item class="text-break m-0 p-0 text-center text-light bg-dark font-weight-bold">{{ dbSides.mySide.v1 }}</b-list-group-item>

              <div v-show="dbSides.mySide.chkMenu11">
                <!-- <b-list-group-item to="/video1" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(111) }" @click="selected = 111">{{ dbSides.mySide.v11 }}</b-list-group-item> -->
                <b-list-group-item to="/video1" class="m-0 p-0 pl-1" :class="{ active: isSelected(111) }" @click="selnum(111)">{{ dbSides.mySide.v11 }}</b-list-group-item>
                <!-- <b-list-group-item to="/video1" class="m-0 p-1" :class="{ active: isSelected(111) }" @click="selnumSide(111)">{{ dbSides.mySide.v11 }}</b-list-group-item> -->
              </div>

              <div v-show="dbSides.mySide.chkMenu12">
                <b-list-group-item to="/video2" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(112) }" @click="selnum(112)">{{ dbSides.mySide.v12 }}</b-list-group-item>
              </div>

              <div v-show="dbSides.mySide.chkMenu13">
                <b-list-group-item to="/video3" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(113) }" @click="selnum(113)">{{ dbSides.mySide.v13 }}</b-list-group-item>
              </div>

              <div v-show="dbSides.mySide.chkMenu14">
                <b-list-group-item to="/video4" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(114) }" @click="selnum(114)">{{ dbSides.mySide.v14 }}</b-list-group-item>
              </div>

              <div v-show="dbSides.mySide.chkMenu15">
                <b-list-group-item to="/video5" class="m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(115) }" @click="selnum(115)">{{ dbSides.mySide.v15 }}</b-list-group-item>
              </div>
            </b-list-group>
          </div>

          <!-- ========== リンク集 ========== -->
          <div v-show="dbSides.mySide.chkMenu2" class="col-4 m-0 p-2">
            <b-list-group>
              <b-list-group-item class="text-break m-0 p-0 text-center text-light bg-dark font-weight-bold">{{ dbSides.mySide.l1 }}</b-list-group-item>
              <div v-show="dbSides.mySide.chkMenu21">
                <b-list-group-item target="_blank" :href="dbSides.mySide.l11a" class="text-break m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(121) }" @click="selnum(121)">{{ dbSides.mySide.l11 }}</b-list-group-item>
              </div>
              <div v-show="dbSides.mySide.chkMenu22">
                <b-list-group-item target="_blank" :href="dbSides.mySide.l12a" class="text-break m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(122) }" @click="selnum(122)">{{ dbSides.mySide.l12 }}</b-list-group-item>
              </div>
              <div v-show="dbSides.mySide.chkMenu23">
                <b-list-group-item target="_blank" :href="dbSides.mySide.l13a" class="text-break m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(123) }" @click="selnum(123)">{{ dbSides.mySide.l13 }}</b-list-group-item>
              </div>
              <div v-show="dbSides.mySide.chkMenu24">
                <b-list-group-item target="_blank" :href="dbSides.mySide.l14a" class="text-break m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(124) }" @click="selnum(124)">{{ dbSides.mySide.l14 }}</b-list-group-item>
              </div>
              <div v-show="dbSides.mySide.chkMenu25">
                <b-list-group-item target="_blank" :href="dbSides.mySide.l15a" class="text-break m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(125) }" @click="selnum(125)">{{ dbSides.mySide.l15 }}</b-list-group-item>
              </div>
            </b-list-group>
          </div>

          <!-- ========== アクセスマップ ========== -->
          <div v-show="dbSides.mySide.chkMenu3" class="col-4 m-0 p-2">
            <b-list-group>
              <b-list-group-item class="text-break m-0 p-0 text-center text-light bg-dark font-weight-bold">{{ dbSides.mySide.m1 }}</b-list-group-item>
              <div v-show="dbSides.mySide.chkMenu31">
                <b-list-group-item target="_blank" :href="dbSides.mySide.m11a" class="text-break m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(131) }" @click="selnum(131)">{{ dbSides.mySide.m11 }}</b-list-group-item>
              </div>
              <div v-show="dbSides.mySide.chkMenu32">
                <b-list-group-item target="_blank" :href="dbSides.mySide.m12a" class="text-break m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(132) }" @click="selnum(132)">{{ dbSides.mySide.m12 }}</b-list-group-item>
              </div>
              <div v-show="dbSides.mySide.chkMenu33">
                <b-list-group-item target="_blank" :href="dbSides.mySide.m13a" class="text-break m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(133) }" @click="selnum(133)">{{ dbSides.mySide.m13 }}</b-list-group-item>
              </div>
              <div v-show="dbSides.mySide.chkMenu34">
                <b-list-group-item target="_blank" :href="dbSides.mySide.m14a" class="text-break m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(134) }" @click="selnum(134)">{{ dbSides.mySide.m14 }}</b-list-group-item>
              </div>
              <div v-show="dbSides.mySide.chkMenu35">
                <b-list-group-item target="_blank" :href="dbSides.mySide.m15a" class="text-break m-0 p-0 pl-1 bg-mycolor" :class="{ active: isSelected(135) }" @click="selnum(135)">{{ dbSides.mySide.m15 }}</b-list-group-item>
              </div>
            </b-list-group>
          </div>
          <!-- 以下の１行は改行できないため、半角スペースを挿入 -->
          <!-- <p class="col-12">&nbsp;</p> -->
        </div>
      </div>
      <!-- </div> -->
      <!-- Side MENU end -->
    </div>
    <!-- サイトマップ end -->

    <!-- フッター -->
    <!-- <div class="col-12 mt-0 mb-0 p-1 fixed-bottom" style="background-color:rgba(130,130,130,0.95);"> -->
    <div class="row m-0 p-1" style="background-color: rgba(130, 130, 130, 0.95)">
      <!-- <div class="m-0 p-0 d-flex justify-content-center"> -->
      <!-- 文字サイズ変更 start -->
      <!-- <div class="col-sm-12 col-md-6 col-lg-4 m-0 p-0"> -->
      <!-- <div class="col-md-6 col-lg-4 m-0 p-0"> -->
      <div class="col-sm-6 col-md-4 m-0 p-0">
        <!-- <div class="col-sm-4 m-0 p-0"> -->
        <b-input-group prepend="文字サイズ" class="m-0 p-0">
          <b-input-group-append class="m-0 p-0">
            <b-button :size="commonData.selectedBtnSize" class="m-0 p-1 px-2 border" :variant="commonData.selectedMenuBtnColor" @click="fontSizePlus()">＋</b-button>
            <h5 class="m-0 p-1 text-white border bg-a33-slategray">{{ setFontSize }}</h5>
            <b-button :size="commonData.selectedBtnSize" class="m-0 p-1 px-2 border" :variant="commonData.selectedMenuBtnColor" @click="fontSizeMinus()">−</b-button>
          </b-input-group-append>
        </b-input-group>
      </div>

      <!-- コピーライト -->
      <!-- <div class="col-sm-12 col-md-6 col-lg-4 text-white copyright-box m-0 mt-2">&copy; 2020 {{ topTitle }}</div> -->
      <!-- <div class="col-md-6 col-lg-4 text-white copyright-box m-0 mt-2">&copy; 2020 {{ topTitle }}</div> -->
      <div class="col-sm-6 col-md-4 text-white copyright-box m-0 mt-2 d-flex justify-content-center">&copy; 2020 {{ topTitle }}</div>
      <!-- <div class="col-sm-4 text-white copyright-box m-0 mt-2">&copy; 2020 {{ topTitle }}</div> -->

      <!-- サイトマップ 表示/非表示 start -->
      <!-- <div class="col-sm-12 col-md-6 col-lg-4 m-0 p-0"> -->
      <!-- <div class="col-md-6 col-lg-4 m-0 p-0"> -->
      <div class="col-sm-6 col-md-4 m-0 p-0 pr-1">
        <!-- <div class="col-sm-4 m-0 p-0"> -->
        <!-- <b-input-group class="m-1 p-0" prepend="サイトマップ 表示/非表示" variant="my-midnightblue"> -->
        <b-input-group class="m-0 p-0 d-flex justify-content-end" prepend="サイトマップ表示">
          <b-input-group-prepend is-text>
            <input type="checkbox" :checked="showSitemap" @change="toggleChk()" />
          </b-input-group-prepend>
          <!-- <b-form-input v-model="editCategory.tab1Name"></b-form-input> -->
        </b-input-group>
      </div>
      <!-- サイトマップ 表示/非表示 end -->
    </div>
    <p class="mb-3"></p>
    <!-- </div> -->
    <!-- <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 ml-2 px-1 py-0" @click="test1()">test1</b-button> -->
    <!-- <p>{{ myDataSet() }}</p> -->
  </div>
</template>

<script>
// import myHeader from '~/components/myHeader.vue'

export default {
  data() {
    return {
      showSitemap: false,
      selected: 0,
      numBorder: 0,
      myData: {},
      mySide: {},
      topTitle: 'ホームページ名',
      home1: 'home',
      commonData: {},
      // dbSideData: {},
      // myFontSize: 0,
      fontSizeFlg: true,
      setFontSize: 0,
    }
  },
  // computedは、値が変わるとその値に依存しているすべてのバインディングが更新される
  computed: {
    dbSides() {
      // return this.$store.getters['storeside/orderdDbSides']
      return this.$store.getters['storeside/getSideById']('side')
    },
  },
  mounted() {
    // this.$nuxt.$on('selnumside', (selected) => {
    // this.selected = selected
    // console.log('header components からのデータ: ' + selected)
    // })
    this.$nuxt.$on('selnum', (selected) => {
      this.selected = selected
      // console.log('header components からのデータ: ' + selected)
    })
    this.$nuxt.$on('mydata', (myData) => {
      this.myData = myData
      // console.log('header components からのデータ: ' + myData.m11)
    })
    // this.$nuxt.$on('myside', (myData) => {
    //   this.mySide = myData
    // })
    this.$nuxt.$on('toptitle', (topTitle) => {
      this.topTitle = topTitle
      // console.log('header components からのデータ: ' + topTitle)
    })
    this.$nuxt.$on('home1', (home1) => {
      this.home1 = home1
    })
    this.$nuxt.$on('commondata', (commonData) => {
      this.commonData = commonData
    })
    // this.$nuxt.$on('dbsidedata', (dbSideData) => {
    //   this.dbSideData = dbSideData
    // })
  },
  beforeDestroy() {
    this.$nuxt.$off('toptitle')
    this.$nuxt.$off('home1')
  },
  created() {
    // 下記の firestore は store/firestore.js のファイル名
    // this.$store.dispatch('firestore/init')

    // 下記の commonDB は store/commonDB.js のファイル名
    this.$store.dispatch('commonDB/init')
  },
  updated() {
    if (this.commonData.bodyFontSize !== undefined) {
      // console.log('0 ------------- setFontSize: ', this.setFontSize)
      if (this.fontSizeFlg) {
        try {
          this.setFontSize = this.commonData.bodyFontSize
          // console.log('1 ------------- setFontSize: ', this.setFontSize)
          document.body.style.fontSize = Number(this.setFontSize) / 10 + 'rem'
          this.fontSizeFlg = false
        } catch (error) {
          // alert('テスト in myDataSet(): ' + error)
          // console.log('テスト in myDataSet(): ' + error)
        }
      }
    }
  },

  methods: {
    // test1() {
    //   this.$nuxt.$emit('selnumside', '21')
    //   // this.$nuxt.$emit('selnum', '21')
    // },

    // ----------------------------------------
    // 文字サイズ変更 +
    fontSizePlus() {
      // console.log('2-1 ------------- setFontSize: ', this.setFontSize)
      if (this.setFontSize < 20) {
        this.setFontSize += 1
        // console.log('2-2 ------------- setFontSize: ', this.setFontSize)
        document.body.style.fontSize = Number(this.setFontSize) / 10 + 'rem'
      } else {
        this.$swal({
          title: 'これ以上大きくできません。',
          // text: 'これ以上大きくできません。',
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

    // 文字サイズ変更 -
    fontSizeMinus() {
      // console.log('3-1 ------------- setFontSize: ', this.setFontSize)
      if (this.setFontSize > 6) {
        this.setFontSize -= 1
        // console.log('3-2 ------------- setFontSize: ', this.setFontSize)
        document.body.style.fontSize = Number(this.setFontSize) / 10 + 'rem'
      } else {
        this.$swal({
          title: 'これ以上小さくできません。',
          // text: 'これ以上小さくできません。',
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
    // ----------------------------------------
    isSelected(i) {
      // console.log('rightSide-i:  ' + i)
      // console.log(i === this.selected)
      return i === this.selected
    },
    toggleChk() {
      this.showSitemap = !this.showSitemap
    },
    // num を rightside.vue へ渡す
    // selnumSide(num) {
    // this.selected = num
    // console.log('header selnum selected: ' + num)
    // this.$nuxt.$emit('selnumside', num)
    // },
    isBorder(i) {
      this.numBorder = Math.floor(this.selected / 10)
      // console.log('isBorder-tempNum:  ' + tempNum)
      return i === this.numBorder
    },

    isBorder2(i, myBorder) {
      this.numBorder = Math.floor(this.selected / 10)

      if (i === this.numBorder) {
        return 'border rounded-lg border-' + myBorder
      }
    },

    selnum(num) {
      // console.log('header selnum selected: ' + num)
      this.$nuxt.$emit('selnum', num)
    },
  },
}
</script>

<style>
/* .my-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
} */
/* .footer { */
/* background-color: #ddd; */
/* } */
</style>
