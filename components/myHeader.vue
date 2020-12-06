<template>
  <div class="container-fluid no-gutters">
    <!-- <div class="header m-0 p-0"> -->
    <!-- <div class="m-0 p-0"> -->
    <div class="row m-0 p-0">
      <div class="col-12 d-flex justify-content-between align-items-center" :style="myCommon.buttonHeaderRGB">
        <b-link to="/home" class="d-flex flex-row align-items-center m-0 p-0" @click="selnum(0)">
          <!-- ロゴ set start -->
          <div v-if="myCommon.logoRadio === 'selfRegFile'" class="m-0 p-0">
            <img :src="myCommon.headerLogo" alt="Header image" width="36" height="36" title="building" />
          </div>
          <div v-else class="m-0 p-0">
            <b-icon :icon="myCommon.topTitleLogo" :class="myCommon.myClass" :variant="myCommon.myVariant" :animation="myCommon.myAnimation" :font-scale="myCommon.myFontScale" alt="Header image" width="36" height="36" title="building" />
          </div>
          <!-- ロゴ set end -->

          <span class="myTitle text-dark font-weight-bold m-0 p-1">{{ myCommon.topTitle }}</span>
        </b-link>
        <!--   連絡先等   -->
        <div v-if="myCommon.mLink" class="m-0 p-0">
          <a class="m-0 p-0" :href="myCommon.mLink" target="_blank">{{ myCommon.mContact }}</a>
        </div>
        <div v-else class="m-0 p-0">
          <a class="m-0 p-0">{{ myCommon.mContact }}</a>
        </div>
      </div>
    </div>

    <div class="mb-3">
      <b-navbar toggleable="md" type="light" class="d-flex justify-content-between m-0 p-1" :style="myCommon.buttonBarRGB">
        <div class="d-flex flex-row m-0 p-0">
          <!-- HOME ボタン -->
          <b-button id="idBorder" to="/home" :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" :class="isBorder2(0, myCommon.myBorder)" class="m-1 p-1" @click="selnum(0)">{{ myCommon.mHome1 }}</b-button>

          <b-navbar-toggle target="nav-collapse" />
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <!-- HOME ボタン -->
              <!-- <b-button id="idBorder" to="/home" :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" :class="isBorder2(0, myCommon.myBorder)" class="m-1 p-1" @click="selnum(0)">{{ myCommon.mHome1 }}</b-button> -->

              <!-- 1 -->
              <div class="m-0 p-0" @mouseover="onOver(1)" @mouseleave="onLeave(1)">
                <div v-show="myMenu.chkMenu1">
                  <b-dropdown id="dropdown-menu-1" ref="dropdown1" :size="myCommon.selectedBtnSize" :text="myMenu.m1" :variant="myCommon.selectedMenuBtnColor" :class="isBorder2(1, myCommon.myBorder)" class="m-1 p-0">
                    <div v-show="myMenu.chkMenu11">
                      <b-dropdown-item to="/b11" :active="isSelected(11)">{{ myMenu.m11 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu12">
                      <b-dropdown-item to="/b12" :active="isSelected(12)">{{ myMenu.m12 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu13">
                      <b-dropdown-item to="/b13" :active="isSelected(13)">{{ myMenu.m13 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu14">
                      <b-dropdown-item to="/b14" :active="isSelected(14)">{{ myMenu.m14 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu15">
                      <b-dropdown-item to="/b15" :active="isSelected(15)">{{ myMenu.m15 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu16">
                      <b-dropdown-item to="/b16" :active="isSelected(16)">{{ myMenu.m16 }}</b-dropdown-item>
                    </div>
                  </b-dropdown>
                </div>
              </div>

              <!-- 2 -->
              <div @mouseover="onOver(2)" @mouseleave="onLeave(2)">
                <div v-show="myMenu.chkMenu2">
                  <b-dropdown id="dropdown-menu-2" ref="dropdown2" :size="myCommon.selectedBtnSize" :text="myMenu.m2" :variant="myCommon.selectedMenuBtnColor" :class="isBorder2(2, myCommon.myBorder)" class="m-1">
                    <div v-show="myMenu.chkMenu21">
                      <b-dropdown-item to="/b21" :active="isSelected(21)">{{ myMenu.m21 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu22">
                      <b-dropdown-item to="/b22" :active="isSelected(22)">{{ myMenu.m22 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu23">
                      <b-dropdown-item to="/b23" :active="isSelected(23)">{{ myMenu.m23 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu24">
                      <b-dropdown-item to="/b24" :active="isSelected(24)">{{ myMenu.m24 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu25">
                      <b-dropdown-item to="/b25" :active="isSelected(25)">{{ myMenu.m25 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu26">
                      <b-dropdown-item to="/b26" :active="isSelected(26)">{{ myMenu.m26 }}</b-dropdown-item>
                    </div>
                  </b-dropdown>
                </div>
              </div>

              <!-- 3 -->
              <div @mouseover="onOver(3)" @mouseleave="onLeave(3)">
                <div v-show="myMenu.chkMenu3">
                  <b-dropdown id="dropdown-menu-3" ref="dropdown3" :size="myCommon.selectedBtnSize" :text="myMenu.m3" :variant="myCommon.selectedMenuBtnColor" :class="isBorder2(3, myCommon.myBorder)" class="m-1">
                    <div v-show="myMenu.chkMenu31">
                      <b-dropdown-item to="/b31" :active="isSelected(31)">{{ myMenu.m31 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu32">
                      <b-dropdown-item to="/b32" :active="isSelected(32)">{{ myMenu.m32 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu33">
                      <b-dropdown-item to="/b33" :active="isSelected(33)">{{ myMenu.m33 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu34">
                      <b-dropdown-item to="/b34" :active="isSelected(34)">{{ myMenu.m34 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu35">
                      <b-dropdown-item to="/b35" :active="isSelected(35)">{{ myMenu.m35 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu36">
                      <b-dropdown-item to="/b36" :active="isSelected(36)">{{ myMenu.m36 }}</b-dropdown-item>
                    </div>
                  </b-dropdown>
                </div>
              </div>

              <!-- 4 -->
              <div @mouseover="onOver(4)" @mouseleave="onLeave(4)">
                <div v-show="myMenu.chkMenu4">
                  <b-dropdown id="dropdown-menu-4" ref="dropdown4" :size="myCommon.selectedBtnSize" :text="myMenu.m4" :variant="myCommon.selectedMenuBtnColor" :class="isBorder2(4, myCommon.myBorder)" class="m-1">
                    <div v-show="myMenu.chkMenu41">
                      <b-dropdown-item to="/b41" :active="isSelected(41)">{{ myMenu.m41 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu42">
                      <b-dropdown-item to="/b42" :active="isSelected(42)">{{ myMenu.m42 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu43">
                      <b-dropdown-item to="/b43" :active="isSelected(43)">{{ myMenu.m43 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu44">
                      <b-dropdown-item to="/b44" :active="isSelected(44)">{{ myMenu.m44 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu45">
                      <b-dropdown-item to="/b45" :active="isSelected(45)">{{ myMenu.m45 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu46">
                      <b-dropdown-item to="/b46" :active="isSelected(46)">{{ myMenu.m46 }}</b-dropdown-item>
                    </div>
                  </b-dropdown>
                </div>
              </div>

              <!-- 5 動画コレクション用 -->
              <div @mouseover="onOver(5)" @mouseleave="onLeave(5)">
                <div v-show="myMenu.chkMenu5">
                  <b-dropdown id="dropdown-menu-5" ref="dropdown5" :size="myCommon.selectedBtnSize" :text="myMenu.m5" :variant="myCommon.selectedMenuBtnColor" :class="isBorder2(5, myCommon.myBorder)" class="m-1">
                    <div v-show="myMenu.chkMenu51">
                      <b-dropdown-item to="/a51" :active="isSelected(51)">{{ myMenu.m51 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu52">
                      <b-dropdown-item to="/a52" :active="isSelected(52)">{{ myMenu.m52 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu53">
                      <b-dropdown-item to="/a53" :active="isSelected(53)">{{ myMenu.m53 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu54">
                      <b-dropdown-item to="/a54" :active="isSelected(54)">{{ myMenu.m54 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu55">
                      <b-dropdown-item to="/a55" :active="isSelected(55)">{{ myMenu.m55 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu56">
                      <b-dropdown-item to="/a56" :active="isSelected(56)">{{ myMenu.m56 }}</b-dropdown-item>
                    </div>
                  </b-dropdown>
                </div>
              </div>

              <!-- 6 カスタマイズ -->
              <div @mouseover="onOver(6)" @mouseleave="onLeave(6)">
                <div v-show="myMenu.chkMenu6">
                  <b-dropdown id="dropdown-menu-6" ref="dropdown6" :size="myCommon.selectedBtnSize" :text="myMenu.m6" :variant="myCommon.selectedMenuBtnColor" :class="isBorder2(6, myCommon.myBorder)" class="m-1">
                    <div v-show="myMenu.chkMenu61">
                      <b-dropdown-item to="/myQA" :active="isSelected(61)">{{ myMenu.m61 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu62">
                      <!-- <b-dropdown-item to="/myQuestion" :active="isSelected(62)">{{ myMenu.m62 }}</b-dropdown-item> -->
                      <b-dropdown-item to="/myQuestion" :active="isSelected(62)" @click="selnum(62)">{{ myMenu.m62 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu63">
                      <b-dropdown-item to="/myAbout" :active="isSelected(63)">{{ myMenu.m63 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu64">
                      <b-dropdown-item to="/myLink" :active="isSelected(64)">{{ myMenu.m64 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu65">
                      <b-dropdown-item to="/myAccess" :active="isSelected(65)">{{ myMenu.m65 }}</b-dropdown-item>
                    </div>
                    <div v-show="myMenu.chkMenu66">
                      <b-dropdown-item to="/myParking" :active="isSelected(66)">{{ myMenu.m66 }}</b-dropdown-item>
                    </div>
                  </b-dropdown>
                </div>
              </div>
            </b-navbar-nav>

            <!-- <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav> -->
          </b-collapse>
        </div>

        <div>
          <!-- ------------------ Sideber start -->
          <!-- <span v-show="dbSides.mySide.chkSideMenu" class="m-0 p-0"> -->
          <span v-if="dbSides" v-show="dbSides.mySide.chkSideMenu" class="m-0 p-0">
            <b-button v-b-toggle.sidebar-footer :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" class="m-0 p-1">Side Menu</b-button>
          </span>
          <!-- Sideber の位置： 左 -->
          <!-- <b-sidebar id="sidebar-footer" aria-label="Sidebar with custom footer" no-header shadow> -->
          <b-sidebar id="sidebar-footer" aria-label="Sidebar with custom footer" title="Side Menu" bg-variant="dark" text-variant="light">
            <!-- Sideber の位置： 右 -->
            <!-- <b-sidebar id="sidebar-footer" aria-label="Sidebar with custom footer" title="Side Menu" bg-variant="dark" text-variant="light" right> -->
            <template #footer="{ hide }">
              <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
                <strong class="mr-auto">Footer</strong>
                <b-button size="sm" @click="hide">Close</b-button>
              </div>
            </template>
            <div class="px-3 py-2">
              <!-- <p>テストです。</p> -->
              <!-- <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img> -->
              <!-- <p>{{ sideData() }}</p> -->

              <!-- ================ PR動画 start ==== -->
              <!-- <div v-for="dbSide in dbSides" :key="dbSide.id" class="m-0 p-0"> -->
              <div v-if="dbSides" v-show="dbSides.mySide.chkMenu1">
                <b-list-group class="p-0">
                  <b-list-group-item class="text-break m-0 p-1 text-center text-light bg-info font-weight-bold">{{ dbSides.mySide.v1 }}</b-list-group-item>
                  <!-- <b-list-group-item class="text-break m-0 p-1 text-center text-light font-weight-bold" :style="myCommon.buttonColorBasicSet">{{ dbSides.mySide.v1 }}</b-list-group-item> -->
                  <div v-show="dbSides.mySide.chkMenu11">
                    <!-- <b-list-group-item to="/video1" class="m-0 p-1" :class="{ active: isSelected(111) }" @click="selnumSide(111)">{{ dbSides.mySide.v11 }}</b-list-group-item> -->
                    <b-list-group-item to="/video1" class="m-0 p-1" :class="{ active: isSelected(111) }" @click="selnum(111)">{{ dbSides.mySide.v11 }}</b-list-group-item>
                  </div>
                  <div v-show="dbSides.mySide.chkMenu12">
                    <b-list-group-item to="/video2" class="m-0 p-1" :class="{ active: isSelected(112) }" @click="selnum(112)">{{ dbSides.mySide.v12 }}</b-list-group-item>
                  </div>
                  <div v-show="dbSides.mySide.chkMenu13">
                    <b-list-group-item to="/video3" class="m-0 p-1" :class="{ active: isSelected(113) }" @click="selnum(113)">{{ dbSides.mySide.v13 }}</b-list-group-item>
                  </div>
                  <div v-show="dbSides.mySide.chkMenu14">
                    <b-list-group-item to="/video4" class="m-0 p-1" :class="{ active: isSelected(114) }" @click="selnum(114)">{{ dbSides.mySide.v14 }}</b-list-group-item>
                  </div>
                  <div v-show="dbSides.mySide.chkMenu15">
                    <b-list-group-item to="/video5" class="m-0 p-1" :class="{ active: isSelected(115) }" @click="selnum(115)">{{ dbSides.mySide.v15 }}</b-list-group-item>
                  </div>
                </b-list-group>
                <br />
              </div>
              <!-- ================ PR動画 end ==== -->

              <!-- ================ リンク集 ==== -->
              <div v-if="dbSides" v-show="dbSides.mySide.chkMenu2">
                <b-list-group class="p-0">
                  <b-list-group-item class="text-break m-0 p-1 text-center text-light bg-info font-weight-bold">{{ dbSides.mySide.l1 }}</b-list-group-item>
                  <div v-show="dbSides.mySide.chkMenu21">
                    <!-- <b-list-group-item target="_blank" :href="dbSides.mySide.l11a" class="text-break m-0 p-1 bg-mycolor" :class="{ active: isSelected(121) }" @click="selected = 121">{{ dbSides.mySide.l11 }}</b-list-group-item> -->
                    <!-- <b-list-group-item target="_blank" :href="dbSides.mySide.l11a" class="m-0 p-1" :class="{ active: isSelected(121) }" @click="selnumSide(121)">{{ dbSides.mySide.l11 }}</b-list-group-item> -->
                    <b-list-group-item target="_blank" :href="dbSides.mySide.l11a" class="m-0 p-1" :class="{ active: isSelected(121) }" @click="selnum(121)">{{ dbSides.mySide.l11 }}</b-list-group-item>
                  </div>
                  <div v-show="dbSides.mySide.chkMenu22">
                    <b-list-group-item target="_blank" :href="dbSides.mySide.l12a" class="m-0 p-1" :class="{ active: isSelected(122) }" @click="selnum(122)">{{ dbSides.mySide.l12 }}</b-list-group-item>
                  </div>
                  <div v-show="dbSides.mySide.chkMenu23">
                    <b-list-group-item target="_blank" :href="dbSides.mySide.l13a" class="m-0 p-1" :class="{ active: isSelected(123) }" @click="selnum(123)">{{ dbSides.mySide.l13 }}</b-list-group-item>
                  </div>
                  <div v-show="dbSides.mySide.chkMenu24">
                    <b-list-group-item target="_blank" :href="dbSides.mySide.l14a" class="m-0 p-1" :class="{ active: isSelected(124) }" @click="selnum(124)">{{ dbSides.mySide.l14 }}</b-list-group-item>
                  </div>
                  <div v-show="dbSides.mySide.chkMenu25">
                    <b-list-group-item target="_blank" :href="dbSides.mySide.l15a" class="m-0 p-1" :class="{ active: isSelected(125) }" @click="selnum(125)">{{ dbSides.mySide.l15 }}</b-list-group-item>
                  </div>
                </b-list-group>
                <br />
              </div>

              <!-- ================ アクセスマップ ==== -->
              <div v-if="dbSides" v-show="dbSides.mySide.chkMenu3">
                <b-list-group class="p-0">
                  <b-list-group-item class="text-break m-0 p-1 text-center text-light bg-info font-weight-bold">{{ dbSides.mySide.m1 }}</b-list-group-item>
                  <div v-show="dbSides.mySide.chkMenu31">
                    <!-- <b-list-group-item target="_blank" :href="dbSides.mySide.m11a" class="text-break m-0 p-1 bg-mycolor" :class="{ active: isSelected(131) }" @click="selected = 131">{{ dbSides.mySide.m11 }}</b-list-group-item> -->
                    <!-- <b-list-group-item target="_blank" :href="dbSides.mySide.m11a" class="text-break m-0 p-1 bg-mycolor" :class="{ active: isSelected(131) }" @click="selnumSide(131)">{{ dbSides.mySide.m11 }}</b-list-group-item> -->
                    <b-list-group-item target="_blank" :href="dbSides.mySide.m11a" class="text-break m-0 p-1 bg-mycolor" :class="{ active: isSelected(131) }" @click="selnum(131)">{{ dbSides.mySide.m11 }}</b-list-group-item>
                  </div>
                  <div v-show="dbSides.mySide.chkMenu32">
                    <b-list-group-item target="_blank" :href="dbSides.mySide.m12a" class="text-break m-0 p-1 bg-mycolor" :class="{ active: isSelected(132) }" @click="selnum(132)">{{ dbSides.mySide.m12 }}</b-list-group-item>
                  </div>
                  <div v-show="dbSides.mySide.chkMenu33">
                    <b-list-group-item target="_blank" :href="dbSides.mySide.m13a" class="text-break m-0 p-1 bg-mycolor" :class="{ active: isSelected(133) }" @click="selnum(133)">{{ dbSides.mySide.m13 }}</b-list-group-item>
                  </div>
                  <div v-show="dbSides.mySide.chkMenu34">
                    <b-list-group-item target="_blank" :href="dbSides.mySide.m14a" class="text-break m-0 p-1 bg-mycolor" :class="{ active: isSelected(134) }" @click="selnum(134)">{{ dbSides.mySide.m14 }}</b-list-group-item>
                  </div>
                  <div v-show="dbSides.mySide.chkMenu35">
                    <b-list-group-item target="_blank" :href="dbSides.mySide.m15a" class="text-break m-0 p-1 bg-mycolor" :class="{ active: isSelected(135) }" @click="selnum(135)">{{ dbSides.mySide.m15 }}</b-list-group-item>
                  </div>
                </b-list-group>
                <br />
              </div>
              <!-- </div> -->
            </div>
          </b-sidebar>
          <!-- </div> -->
          <!-- ------------------ Sideber end -->
        </div>
      </b-navbar>

      <!-- 管理メニュー start -->
      <div v-show="manFlg" class="m-0 p-0">
        <b-navbar toggleable="sm" type="light" class="mt-1 p-1" style="background-color: rgba(100, 100, 100, 0.25)">
          <!-- <b-button to="/DB" variant="dark" :size="myCommon.selectedBtnSize" :class="{ 'border border-danger rounded-lg': isBorder(90) }" class="m-1 p-1" @click="selnum(901)">{{ myCommon.mHome2 }}</b-button> -->
          <!-- 以下は ハンバーガー メニュー内 -->
          <b-navbar-toggle target="nav-collapse2"></b-navbar-toggle>
          <b-collapse id="nav-collapse2" is-nav>
            <!-- 管理 man start -->
            <div v-show="isLogin" class="m-0 p-0">
              <b-navbar-nav variant="info">
                <b-button to="/DB" :disabled="isMainUser" variant="outline-dark" :size="myCommon.selectedBtnSize" :class="isBorder2(90, myCommon.myBorder)" class="m-1 p-1" @click="selnum(901)">{{ myCommon.mArchiveDB }}</b-button>
                <b-button to="/man" :disabled="isMainUser" variant="outline-dark" :size="myCommon.selectedBtnSize" :class="isBorder2(91, myCommon.myBorder)" class="m-1 p-1" @click="selnum(911)">共通設定</b-button>
                <b-button to="/man1" :disabled="isMainUser" variant="outline-dark" :size="myCommon.selectedBtnSize" :class="isBorder2(92, myCommon.myBorder)" class="m-1 p-1" @click="selnum(921)">メニュー設定</b-button>
                <b-button to="/man2" :disabled="isMainUser" variant="outline-dark" :size="myCommon.selectedBtnSize" :class="isBorder2(93, myCommon.myBorder)" class="m-1 p-1" @click="selnum(931)">Side Menu設定</b-button>
                <!-- ****** 本コメント、及び下記の2行(add, set) は消すな！ -->
                <!-- <b-button variant="dark" class="m-1 p-1" @click="add()">add</b-button> -->
                <!-- <b-button variant="dark" class="m-1 p-1" @click="set()">set</b-button> -->

                <!-- <div @mouseover="onOver(9)" @mouseleave="onLeave(9)"> -->
                <!-- <b-dropdown id="dropdown-menu-9" ref="dropdown9" :size="myCommon.selectedBtnSize" text="管理メニュー" variant="dark" class="m-0"> -->
                <b-dropdown-item to="/test1" @click="selnum(91)">test1</b-dropdown-item>
                <!-- <b-dropdown-item to="/test6" @click="selnum(96)">test6</b-dropdown-item> -->
                <!-- <b-dropdown-item to="/test7" @click="selnum(97)">test7</b-dropdown-item> -->
                <!-- <b-dropdown-item to="/test8" @click="selnum(98)">test8</b-dropdown-item> -->
                <!-- <b-dropdown-item to="/test9" @click="selnum(99)">test9</b-dropdown-item> -->
                <!-- </b-dropdown> -->
                <!-- </div> -->
              </b-navbar-nav>
            </div>
            <!-- 管理 man end -->

            <!-- ログイン start -->
            <b-navbar-nav class="ml-auto">
              <div v-if="isLogin" class="m-0 p-0 d-flex align-items-center">
                <!-- <span>{{ loginUser.displayName }}</span> -->
                <b-button :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" class="m-1 p-1" @click="logout">{{ loginUser.displayName }} logout</b-button>
                <b-img right :src="loginUser.photoURL" width="32" height="32" rounded="circle" alt="no_image"></b-img>
              </div>
              <div v-else class="m-0 p-0">
                <b-button to="/" :variant="myCommon.selectedMenuBtnColor" :size="myCommon.selectedBtnSize" class="m-1 p-1">login</b-button>
              </div>
            </b-navbar-nav>
            <!-- ログイン end -->
          </b-collapse>
        </b-navbar>
      </div>
      <!-- 管理メニュー end -->
      <!-- <b-button class="px-1 py-0 m-1" @click="test1()">test1</b-button> -->
    </div>
    <!-- </div> -->
    <p>{{ myMenuSet() }}</p>
    <!-- <p>{{ myMenuSendToRightSide() }}</p> -->
    <!-- <p>{{ myMenuSendToFooter() }}</p> -->
    <!-- <p>{{ myMenuSendToFooter() }}</p> -->
    <p>{{ myCommonUsers() }}</p>
    <!-- <b-button :size="myCommon.selectedBtnSize" variant="primary" class="m-0 ml-2 px-1 py-0" @click="test1()">test1</b-button> -->
  </div>
</template>

<script>
// IconsPlugin を使用するには、以下の Vue も import する必要がある
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
// const storage = firebase.storage()
// const storageRef = storage.ref()
// const imagesRef = storageRef.child('images')
// Vue.use(IconsPlugin)

export default {
  components: {
    // myFooter
    //   IconsPlugin
  },

  data() {
    return {
      manFlg: true,
      // manFlg: false,
      loginUser: {},
      isMainUser: true,
      selected: 0,
      numBorder: 0,
      visible: true,
      myMenu: {},
      myCommon: {},
      // dbSideData: {},

      // カラー設定 13 Line
      isHovered: false,
      isInitCalorSet: false,
      // buttonColorBasic: '',
      // buttonColorMenuBar: '',
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

  head() {
    return {
      // titleTemplate: '',
      // title: 'index',
      title: this.myCommon.tabTitle,
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',

          // ブラウザのタイトルTabのicon
          href: this.myCommon.tabIcon,
          // href: '/logo-yad-s-waku2.ico',
          // href: '/building-regular.svg',
          // href: '/icon-run.svg'
          // href: 'https://firebasestorage.googleapis.com/v0/b/hi-223af.appspot.com/o/icon-run.svg?alt=media&token=6f6172d8-5aff-4450-80b5-bd6410eaadc3'
        },
      ],
    }
  },

  // computedは、値が変わるとその値に依存しているすべてのバインディングが更新される
  computed: {
    isLogin() {
      return this.$store.getters['user/isLogin']
    },

    dbHeaders() {
      // console.log('::::::::::: dateTime in dbHeaders: ' + Date())
      // 下記の storeheader は store/storeheader.js のファイル名

      // sort しない場合
      // return this.$store.state.storeheader.dbHeaders

      // sort する場合(storeheader.jsの最後でソートキーを指定)
      // return this.$store.getters['storeheader/orderdDbHeaders']
      return this.$store.getters['storeheader/getDbHeadersById']('menu')
    },

    dbCommon() {
      return this.$store.getters['commonDB/getCommonById']('common')
    },

    dbCommonUsers() {
      return this.$store.getters['commonDB/getCommonById']('users')
    },

    // dbSideById() {
    //   try {
    //     const getData = this.$store.getters['storeside/getSideById']('side')

    //     if (getData === undefined) {
    //       console.log('dbSideById = undefined +++++++++++ in dbSideById(): ')
    //       return null
    //     } else {
    //       return getData
    //     }
    //   } catch (error) {
    //     console.log('error ****** in dbSideById(): ', error)
    //     return ''
    //   }
    // },

    dbSides() {
      // const temp = this.$store.getters['storeside/getSideById']('side')
      // console.log('dbSides in myHeader.vue ---: ', temp)
      return this.$store.getters['storeside/getSideById']('side')
    },
  },

  // watch は、値が変わるとその値に依存しているすべてのバインディングが更新される
  // computed との違いは return が不要など、
  // watch: {
  //   // ログインユーザが mainUser であったら、this.mainUser = true
  //   myCommonUsers() {
  //     const usersData = this.$store.getters['commonDB/getCommonById']('users')
  //     console.log('20201120-1-1 ------: ', usersData)
  //     console.log('20201120-1-2 ------: ', usersData.mainUser)
  //     console.log('20201120-1-3 ------: ', usersData.mainUser[0])
  //     console.log('20201120-1-4 ------: ', usersData.mainUser[1])
  //     console.log('20201120-2 ------: ', this.loginUser.email)
  //     const resultSearch = usersData.mainUser.indexOf(this.loginUser.email)
  //     console.log('Main User 検索結果： ', resultSearch)
  //     if (resultSearch > -1) {
  //       this.isMainUser = false
  //     }
  //   },
  // },

  // created は画面を開いたとき呼ばれる。
  created() {
    // 下記の storeheader は store/storeheader.js のファイル名
    this.$store.dispatch('storeheader/init')

    // 下記の commonDB は store/commonDB.js のファイル名
    this.$store.dispatch('commonDB/init')

    // 下記の storeside は store/storeside.js のファイル名
    this.$store.dispatch('storeside/init')
  },

  // マウント後のフックが呼び出される
  mounted() {
    this.$nuxt.$on('selnum', (selected) => {
      this.selected = selected
      // console.log('header components からのデータ: ' + selected)
    })

    this.$nuxt.$on('loginuser', (loginUser) => {
      this.loginUser = loginUser
      // console.log('1-1 loginUser ------ in mounte: ' + JSON.stringify(this.loginUser))
      // console.log('1-2 loginUser.displayName ------ in mounte: ' + this.loginUser.displayName)
      // console.log('1-3 loginUser.email ------ in mounte: ' + this.loginUser.email)
      // console.log('1-4 loginUser.photoURL ------ in mounte: ' + this.loginUser.photoURL)
    })

    // this.$nuxt.$on('selnumside', (selected) => {
    // this.selected = selected
    // this.numBorder = Math.floor(this.selected / 10)
    // })

    // const classBorder = document.getElementsByClassName('border-danger')
    // const classBorder = document.getElementById('myBorder')
    // classBorder.forEach((myBorder, myIndex) => {
    // console.log('1-1 --------- No : myBorder: ', myIndex, ' : ', myBorder)
    // console.log('1-1 --------- myBorder: ', classBorder)
    // classBorder[myIndex].className = 'border-warning'

    // classBorder.className = 'btn m-1 p-1 nuxt-link-exact-active nuxt-link-active btn-a34-steelblue btn-md border border-warning rounded-lg'
    // console.log('1-2 --------- myBorder: ', classBorder)
    // })
  },
  // beforeUpdate() {
  updated() {
    // const classBorder = document.getElementsByClassName('border-danger')
    // classBorder.forEach((myBorder, myIndex) => {
    // console.log('1-2 --------- No : myBorder: ', myIndex, ' : ', myBorder)
    // classBorder[myIndex].className = 'border-warning'
    // })

    // console.log('0-1 --- buttonColorMenu: ', this.buttonColorMenu)
    if (!this.isInitCalorSet) {
      if (this.myCommon.buttonColorMenu !== undefined) {
        // カラーデータ設定
        // this.buttonColorMenu = 'background-color: ' + this.myCommon.buttonColorMenu1 + ';'
        // console.log('0-2 --- buttonColorMenu: ', this.myCommon.buttonColorMenu)
        this.buttonColorMenu = this.myCommon.buttonColorMenu
        // console.log('0-3 --- buttonColorMenu: ', this.buttonColorMenu)
        this.buttonColorReg = this.myCommon.buttonColorReg
        this.buttonColorEdit = this.myCommon.buttonColorEdit
        this.buttonColorDel = this.myCommon.buttonColorDel
        this.buttonColorCancel = this.myCommon.buttonColorCancel
        this.isInitCalorSet = !this.isInitCalorSet
      }
    }
  },
  methods: {
    // test1() {
    //   this.myCommonUsers()
    // },

    logout() {
      this.$store.dispatch('user/logout')
      const firebase = require('firebase')
      firebase
        .auth()
        .signOut()
        .then(() => {
          // console.log('ログアウトしました')
        })
    },

    // ログインユーザが mainUser であったら、this.mainUser = true
    myCommonUsers() {
      try {
        const usersData = this.dbCommonUsers
        if (usersData !== undefined) {
          // console.log('20201120-1 ------: ', usersData)
          // console.log('20201120-2 ------: ', this.loginUser.email)
          const resultSearch = usersData.mainUser.indexOf(this.loginUser.email)
          // console.log('20201120-3 ------ Main User 検索結果： ', resultSearch)
          if (resultSearch > -1) {
            this.isMainUser = false
          }
        }
      } catch (error) {
        // console.log('error ****** in myCommonUsers(): ', error)
      }
    },

    // カラー設定 1 Menu
    buttonColorMenuHover(hovered) {
      this.isHovered = hovered
      if (this.isHovered === true) {
        this.buttonColorMenu = 'background-color: ' + this.myCommon.buttonColorMenu2 + ';'
        // console.log('2-1 --- buttonColorMenu: ', this.buttonColorMenu)
      } else {
        this.buttonColorMenu = 'background-color: ' + this.myCommon.buttonColorMenu1 + ';'
        // console.log('2-2 --- buttonColorMenu: ', this.buttonColorMenu)
      }
    },
    // カラー設定 2 Reg
    buttonColorRegHover(hovered) {
      this.isHovered = hovered

      if (this.isHovered === true) {
        this.buttonColorReg = 'background-color: ' + this.myCommon.buttonColorReg2 + ';'
      } else {
        this.buttonColorReg = 'background-color: ' + this.myCommon.buttonColorReg1 + ';'
      }
    },
    // カラー設定 3 Edit
    buttonColorEditHover(hovered) {
      this.isHovered = hovered

      if (this.isHovered === true) {
        this.buttonColorEdit = 'background-color: ' + this.myCommon.buttonColorEdit2 + ';'
      } else {
        this.buttonColorEdit = 'background-color: ' + this.myCommon.buttonColorEdit1 + ';'
      }
    },
    // カラー設定 4 Del
    buttonColorDelHover(hovered) {
      this.isHovered = hovered

      if (this.isHovered === true) {
        this.buttonColorDel = 'background-color: ' + this.myCommon.buttonColorDel2 + ';'
      } else {
        this.buttonColorDel = 'background-color: ' + this.myCommon.buttonColorDel1 + ';'
      }
    },
    // カラー設定 5 Cancel
    buttonColorCancelHover(hovered) {
      this.isHovered = hovered

      if (this.isHovered === true) {
        this.buttonColorCancel = 'background-color: ' + this.myCommon.buttonColorCancel2 + ';'
      } else {
        this.buttonColorCancel = 'background-color: ' + this.myCommon.buttonColorCancel1 + ';'
      }
    },
    selnum(num) {
      this.selected = num
      // console.log('header selnum selected: ' + num)
      this.$nuxt.$emit('selnum', num)
    },

    // selnumSide(num) {
    // this.selected = num
    // console.log('header selnum selected: ' + num)
    // this.$nuxt.$emit('selnumside', num)
    // },

    isSelected(i) {
      // console.log('isSelected-i:  ' + i)
      // console.log('i === selected : ', i, ' === ', this.selected)
      return i === this.selected
    },

    isBorder(i) {
      this.numBorder = Math.floor(this.selected / 10)
      return i === this.numBorder
    },

    isBorder2(i, myBorder) {
      this.numBorder = Math.floor(this.selected / 10)

      if (i === this.numBorder) {
        return 'border rounded-lg border-' + myBorder
      }
    },

    isBorder3(i, myBorder) {
      this.numBorder = Math.floor(this.selected / 10)
      if (i === this.numBorder) {
        // 以下は getElementById の利用例で、getElemetsByClassName とどちらかの方法を選ぶ
        document.addEventListener('DOMContentLoaded', function () {
          const idBorder = document.getElementById('idBorder')
          idBorder.className = 'active border border-warning rounded-lg'
        })

        // 以下は getElemetsByClassName の利用例で、getElementById とどちらかの方法を選ぶ
        // const classBorder = document.getElementsByClassName('border-danger')
        // console.log('2-2 +++++++ classBorder.length ', classBorder.length)
        // classBorder.forEach((myBorder, myIndex) => {
        // classBorder[myIndex].className = 'border-warning'
        // console.log('2-3 +++++++ No : myBorder: ', myIndex, ' : ', myBorder)
        // })
      }
    },

    onOver(num) {
      this.$refs['dropdown' + num].visible = true
    },

    onLeave(num) {
      this.$refs['dropdown' + num].visible = false
    },
    // myFooter.vueへデータを渡す
    // myMenuSendToFooter() {
    // console.log('in myMenuSendToFooter: ')
    // this.$nuxt.$emit('toptitle', this.myCommon.topTitle)
    // this.$nuxt.$emit('home1', this.myCommon.mHome1)
    // },
    // myMenu を rightside.vue へ渡す
    // myMenuSendToRightSide() {
    // this.$nuxt.$emit('mycommon', this.myCommon)
    // },
    // メニューデータをFireStoreからロードしてセット
    myMenuSet() {
      // console.log('***** Test log ***** in myMenuSet()')
      try {
        this.myMenu = this.dbHeaders.myMenu
        this.myCommon = this.dbCommon.myCommon
        // this.myCommon = this.dbCommon.myData
        // this.dbSideData = this.dbSideById.myMenu
        this.$nuxt.$emit('mymenu', this.myMenu)
        this.$nuxt.$emit('mycommon', this.myCommon)
        // console.log('Ok  =++++++++++++++ in myMenuSet(): ')
      } catch (error) {
        // alert('***** error ***** in myMenuSet(): ' + error)
        // console.log('***** error ***** in myMenuSet(): ' + error)
      }

      // this.myMenu.topTitle = 'ようこそ！'
      // console.log('***************** dateTime in dbHeaders: ' + Date())
    },

    // 以下の add は通常、未使用かも？ ←たぶん初期登録で利用
    add() {
      // 下記の storeheader は store/storeheader.js のファイル名
      // this.$store.dispatch('storeheader/add', { titelName: this.myMenu.titleName, mainText: this.myMenu.mainText })
      this.$store
        .dispatch('storeheader/add', this.myMenu)
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

    // 以下の set は通常、未使用かも？ ←たぶん初期登録で利用
    set() {
      // 下記の storeheader は store/storeheader.js のファイル名
      this.$store.dispatch('storeheader/set', this.myMenu)
    },
  },
}
</script>

<style scoped>
.btn {
  font-weight: 700;
  /* text-transform: uppercase; */
}

/* 大デバイス（デスクトップ, 992 以上） */
@media (min-width: 992px) {
  .myTitle {
    font-size: 1.4rem;
  }
}
/* 中デバイス（タブレット, 992px 未満） */
@media (max-width: 991.98px) {
  .myTitle {
    font-size: 1.2rem;
  }
}
/* 小デバイス（横向きモバイル, 768px 未満） */
@media (max-width: 767.98px) {
  .myTitle {
    font-size: 1rem;
  }
}
/* @include media-breakpoint-up(sm) { */
/* 極小デバイス（縦向きモバイル, 576px 未満） */
@media (max-width: 575.98px) {
  .myTitle {
    font-size: 0.4;
  }
}
</style>
