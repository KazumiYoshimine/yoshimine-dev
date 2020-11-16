<template>
  <div class="container-fluid no-gutters">
    <!-- <div class="header m-0 p-0"> -->
    <!-- <div class="m-0 p-0"> -->
    <div class="row m-0 p-0">
      <div class="col-12 d-flex justify-content-between align-items-center" :style="commonData.buttonHeaderRGB">
        <b-link to="/home" class="d-flex flex-row align-items-center m-0 p-0" @click="selnum(0)">
          <!-- ロゴ set start -->
          <div v-if="commonData.logoRadio === 'selfRegFile'" class="m-0 p-0">
            <img :src="commonData.headerLogo" alt="Header image" width="36" height="36" title="building" />
          </div>
          <div v-else class="m-0 p-0">
            <b-icon :icon="commonData.topTitleLogo" :class="commonData.myClass" :variant="commonData.myVariant" :animation="commonData.myAnimation" :font-scale="commonData.myFontScale" alt="Header image" width="36" height="36" title="building" />
          </div>
          <!-- ロゴ set end -->

          <span class="myTitle text-dark font-weight-bold m-0 p-1">{{ commonData.topTitle }}</span>
        </b-link>
        <!--   連絡先等   -->
        <div v-if="commonData.mLink" class="m-0 p-0">
          <a class="m-0 mt-2 mr-3" :href="commonData.mLink" target="_blank">{{ commonData.mContact }}</a>
        </div>
        <div v-else class="m-0 p-0">
          <a class="m-0 mt-2 mr-3">{{ commonData.mContact }}</a>
        </div>
      </div>
    </div>

    <div class="mb-3">
      <b-navbar toggleable="md" type="light" class="m-0 p-1" :style="commonData.buttonBarRGB">
        <!-- <b-button to="/" :variant="commonData.selectedMenuBtnColor" :size="commonData.selectedBtnSize" :class="{ 'border border-danger rounded-lg': isBorder(0) }" class="m-1 p-1" @click="selnum(0)">{{ commonData.mHome1 }}</b-button> -->
        <!-- <b-button to="/home" :variant="commonData.selectedMenuBtnColor" :size="commonData.selectedBtnSize" :class="{ 'border border-danger rounded-lg': isBorder(0) }" class="m-1 p-1" @click="selnum(0)">{{ commonData.mHome1 }}</b-button> -->
        <b-button id="idBorder" to="/home" :variant="commonData.selectedMenuBtnColor" :size="commonData.selectedBtnSize" :class="isBorder2(0, commonData.myBorder)" class="m-1 p-1" @click="selnum(0)">{{ commonData.mHome1 }}</b-button>

        <b-navbar-toggle target="nav-collapse" />
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <!-- 1 -->
            <div class="m-0 p-0" @mouseover="onOver(1)" @mouseleave="onLeave(1)">
              <div v-show="myData.chkMenu1">
                <b-dropdown id="dropdown-menu-1" ref="dropdown1" :size="commonData.selectedBtnSize" :text="myData.m1" :variant="commonData.selectedMenuBtnColor" :class="isBorder2(1, commonData.myBorder)" class="m-1 p-0">
                  <div v-show="myData.chkMenu11">
                    <b-dropdown-item to="/c11" :active="isSelected(11)">{{ myData.m11 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu12">
                    <b-dropdown-item to="/c12" :active="isSelected(12)">{{ myData.m12 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu13">
                    <b-dropdown-item to="/c13" :active="isSelected(13)">{{ myData.m13 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu14">
                    <b-dropdown-item to="/c14" :active="isSelected(14)">{{ myData.m14 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu15">
                    <b-dropdown-item to="/c15" :active="isSelected(15)">{{ myData.m15 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu16">
                    <b-dropdown-item to="/c16" :active="isSelected(16)">{{ myData.m16 }}</b-dropdown-item>
                  </div>
                </b-dropdown>
              </div>
            </div>

            <!-- 2 -->
            <div @mouseover="onOver(2)" @mouseleave="onLeave(2)">
              <div v-show="myData.chkMenu2">
                <b-dropdown id="dropdown-menu-2" ref="dropdown2" :size="commonData.selectedBtnSize" :text="myData.m2" :variant="commonData.selectedMenuBtnColor" :class="isBorder2(2, commonData.myBorder)" class="m-1">
                  <div v-show="myData.chkMenu21">
                    <b-dropdown-item to="/c21" :active="isSelected(21)">{{ myData.m21 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu22">
                    <b-dropdown-item to="/c22" :active="isSelected(22)">{{ myData.m22 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu23">
                    <b-dropdown-item to="/c23" :active="isSelected(23)">{{ myData.m23 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu24">
                    <b-dropdown-item to="/c24" :active="isSelected(24)">{{ myData.m24 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu25">
                    <b-dropdown-item to="/c25" :active="isSelected(25)">{{ myData.m25 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu26">
                    <b-dropdown-item to="/c26" :active="isSelected(26)">{{ myData.m26 }}</b-dropdown-item>
                  </div>
                </b-dropdown>
              </div>
            </div>

            <!-- 3 -->
            <div @mouseover="onOver(3)" @mouseleave="onLeave(3)">
              <div v-show="myData.chkMenu3">
                <b-dropdown id="dropdown-menu-3" ref="dropdown3" :size="commonData.selectedBtnSize" :text="myData.m3" :variant="commonData.selectedMenuBtnColor" :class="isBorder2(3, commonData.myBorder)" class="m-1">
                  <div v-show="myData.chkMenu31">
                    <b-dropdown-item to="/b31" :active="isSelected(31)">{{ myData.m31 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu32">
                    <b-dropdown-item to="/b32" :active="isSelected(32)">{{ myData.m32 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu33">
                    <b-dropdown-item to="/b33" :active="isSelected(33)">{{ myData.m33 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu34">
                    <b-dropdown-item to="/b34" :active="isSelected(34)">{{ myData.m34 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu35">
                    <b-dropdown-item to="/b35" :active="isSelected(35)">{{ myData.m35 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu36">
                    <b-dropdown-item to="/b36" :active="isSelected(36)">{{ myData.m36 }}</b-dropdown-item>
                  </div>
                </b-dropdown>
              </div>
            </div>

            <!-- 4 -->
            <div @mouseover="onOver(4)" @mouseleave="onLeave(4)">
              <div v-show="myData.chkMenu4">
                <b-dropdown id="dropdown-menu-4" ref="dropdown4" :size="commonData.selectedBtnSize" :text="myData.m4" :variant="commonData.selectedMenuBtnColor" :class="isBorder2(4, commonData.myBorder)" class="m-1">
                  <div v-show="myData.chkMenu41">
                    <b-dropdown-item to="/a41" :active="isSelected(41)">{{ myData.m41 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu42">
                    <b-dropdown-item to="/a42" :active="isSelected(42)">{{ myData.m42 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu43">
                    <b-dropdown-item to="/a43" :active="isSelected(43)">{{ myData.m43 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu44">
                    <b-dropdown-item to="/a44" :active="isSelected(44)">{{ myData.m44 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu45">
                    <b-dropdown-item to="/a45" :active="isSelected(45)">{{ myData.m45 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu46">
                    <b-dropdown-item to="/a46" :active="isSelected(46)">{{ myData.m46 }}</b-dropdown-item>
                  </div>
                </b-dropdown>
              </div>
            </div>

            <!-- 5 動画コレクション用 -->
            <div @mouseover="onOver(5)" @mouseleave="onLeave(5)">
              <div v-show="myData.chkMenu5">
                <b-dropdown id="dropdown-menu-5" ref="dropdown5" :size="commonData.selectedBtnSize" :text="myData.m5" :variant="commonData.selectedMenuBtnColor" :class="isBorder2(5, commonData.myBorder)" class="m-1">
                  <div v-show="myData.chkMenu51">
                    <b-dropdown-item to="/d51" :active="isSelected(51)">{{ myData.m51 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu52">
                    <b-dropdown-item to="/d52" :active="isSelected(52)">{{ myData.m52 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu53">
                    <b-dropdown-item to="/d53" :active="isSelected(53)">{{ myData.m53 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu54">
                    <b-dropdown-item to="/d54" :active="isSelected(54)">{{ myData.m54 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu55">
                    <b-dropdown-item to="/d55" :active="isSelected(55)">{{ myData.m55 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu56">
                    <b-dropdown-item to="/d56" :active="isSelected(56)">{{ myData.m56 }}</b-dropdown-item>
                  </div>
                </b-dropdown>
              </div>
            </div>

            <!-- 6 カスタマイズ -->
            <div @mouseover="onOver(6)" @mouseleave="onLeave(6)">
              <div v-show="myData.chkMenu6">
                <b-dropdown id="dropdown-menu-6" ref="dropdown6" :size="commonData.selectedBtnSize" :text="myData.m6" :variant="commonData.selectedMenuBtnColor" :class="isBorder2(6, commonData.myBorder)" class="m-1">
                  <div v-show="myData.chkMenu61">
                    <b-dropdown-item to="/myQA" :active="isSelected(61)">{{ myData.m61 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu62">
                    <!-- <b-dropdown-item to="/myQuestion" :active="isSelected(62)">{{ myData.m62 }}</b-dropdown-item> -->
                    <b-dropdown-item to="/myQuestion" :active="isSelected(62)" @click="selnum(62)">{{ myData.m62 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu63">
                    <b-dropdown-item to="/myAbout" :active="isSelected(63)">{{ myData.m63 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu64">
                    <b-dropdown-item to="/myLink" :active="isSelected(64)">{{ myData.m64 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu65">
                    <b-dropdown-item to="/myAccess" :active="isSelected(65)">{{ myData.m65 }}</b-dropdown-item>
                  </div>
                  <div v-show="myData.chkMenu66">
                    <b-dropdown-item to="/myParking" :active="isSelected(66)">{{ myData.m66 }}</b-dropdown-item>
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

        <div>
          <!-- ------------------ Sideber start -->
          <span v-show="dbSideData.chkSideMenu" class="m-0 p-0">
            <b-button v-b-toggle.sidebar-footer :variant="commonData.selectedMenuBtnColor" :size="commonData.selectedBtnSize" class="m-0 p-1">Side Menu</b-button>
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
              <div v-for="dbSide in dbSides" :key="dbSide.id" class="m-0 p-0">
                <div v-show="dbSide.myData.chkMenu1">
                  <b-list-group class="p-0">
                    <b-list-group-item class="text-break m-0 p-1 text-center text-light bg-info font-weight-bold">{{ dbSide.myData.v1 }}</b-list-group-item>
                    <!-- <b-list-group-item class="text-break m-0 p-1 text-center text-light font-weight-bold" :style="commonData.buttonColorBasicSet">{{ dbSide.myData.v1 }}</b-list-group-item> -->
                    <div v-show="dbSide.myData.chkMenu11">
                      <!-- <b-list-group-item to="/video1" class="m-0 p-1" :class="{ active: isSelected(111) }" @click="selnumSide(111)">{{ dbSide.myData.v11 }}</b-list-group-item> -->
                      <b-list-group-item to="/video1" class="m-0 p-1" :class="{ active: isSelected(111) }" @click="selnum(111)">{{ dbSide.myData.v11 }}</b-list-group-item>
                    </div>
                    <div v-show="dbSide.myData.chkMenu12">
                      <b-list-group-item to="/video2" class="m-0 p-1" :class="{ active: isSelected(112) }" @click="selnum(112)">{{ dbSide.myData.v12 }}</b-list-group-item>
                    </div>
                    <div v-show="dbSide.myData.chkMenu13">
                      <b-list-group-item to="/video3" class="m-0 p-1" :class="{ active: isSelected(113) }" @click="selnum(113)">{{ dbSide.myData.v13 }}</b-list-group-item>
                    </div>
                    <div v-show="dbSide.myData.chkMenu14">
                      <b-list-group-item to="/video4" class="m-0 p-1" :class="{ active: isSelected(114) }" @click="selnum(114)">{{ dbSide.myData.v14 }}</b-list-group-item>
                    </div>
                    <div v-show="dbSide.myData.chkMenu15">
                      <b-list-group-item to="/video5" class="m-0 p-1" :class="{ active: isSelected(115) }" @click="selnum(115)">{{ dbSide.myData.v15 }}</b-list-group-item>
                    </div>
                  </b-list-group>
                  <br />
                </div>
                <!-- ================ PR動画 end ==== -->

                <!-- ================ リンク集 ==== -->
                <div v-show="dbSide.myData.chkMenu2">
                  <b-list-group class="p-0">
                    <b-list-group-item class="text-break m-0 p-1 text-center text-light bg-info font-weight-bold">{{ dbSide.myData.l1 }}</b-list-group-item>
                    <div v-show="dbSide.myData.chkMenu21">
                      <!-- <b-list-group-item target="_blank" :href="dbSide.myData.l11a" class="text-break m-0 p-1 bg-mycolor" :class="{ active: isSelected(121) }" @click="selected = 121">{{ dbSide.myData.l11 }}</b-list-group-item> -->
                      <!-- <b-list-group-item target="_blank" :href="dbSide.myData.l11a" class="m-0 p-1" :class="{ active: isSelected(121) }" @click="selnumSide(121)">{{ dbSide.myData.l11 }}</b-list-group-item> -->
                      <b-list-group-item target="_blank" :href="dbSide.myData.l11a" class="m-0 p-1" :class="{ active: isSelected(121) }" @click="selnum(121)">{{ dbSide.myData.l11 }}</b-list-group-item>
                    </div>
                    <div v-show="dbSide.myData.chkMenu22">
                      <b-list-group-item target="_blank" :href="dbSide.myData.l12a" class="m-0 p-1" :class="{ active: isSelected(122) }" @click="selnum(122)">{{ dbSide.myData.l12 }}</b-list-group-item>
                    </div>
                    <div v-show="dbSide.myData.chkMenu23">
                      <b-list-group-item target="_blank" :href="dbSide.myData.l13a" class="m-0 p-1" :class="{ active: isSelected(123) }" @click="selnum(123)">{{ dbSide.myData.l13 }}</b-list-group-item>
                    </div>
                    <div v-show="dbSide.myData.chkMenu24">
                      <b-list-group-item target="_blank" :href="dbSide.myData.l14a" class="m-0 p-1" :class="{ active: isSelected(124) }" @click="selnum(124)">{{ dbSide.myData.l14 }}</b-list-group-item>
                    </div>
                    <div v-show="dbSide.myData.chkMenu25">
                      <b-list-group-item target="_blank" :href="dbSide.myData.l15a" class="m-0 p-1" :class="{ active: isSelected(125) }" @click="selnum(125)">{{ dbSide.myData.l15 }}</b-list-group-item>
                    </div>
                  </b-list-group>
                  <br />
                </div>

                <!-- ================ アクセスマップ ==== -->
                <div v-show="dbSide.myData.chkMenu3">
                  <b-list-group class="p-0">
                    <b-list-group-item class="text-break m-0 p-1 text-center text-light bg-info font-weight-bold">{{ dbSide.myData.m1 }}</b-list-group-item>
                    <div v-show="dbSide.myData.chkMenu31">
                      <!-- <b-list-group-item target="_blank" :href="dbSide.myData.m11a" class="text-break m-0 p-1 bg-mycolor" :class="{ active: isSelected(131) }" @click="selected = 131">{{ dbSide.myData.m11 }}</b-list-group-item> -->
                      <!-- <b-list-group-item target="_blank" :href="dbSide.myData.m11a" class="text-break m-0 p-1 bg-mycolor" :class="{ active: isSelected(131) }" @click="selnumSide(131)">{{ dbSide.myData.m11 }}</b-list-group-item> -->
                      <b-list-group-item target="_blank" :href="dbSide.myData.m11a" class="text-break m-0 p-1 bg-mycolor" :class="{ active: isSelected(131) }" @click="selnum(131)">{{ dbSide.myData.m11 }}</b-list-group-item>
                    </div>
                    <div v-show="dbSide.myData.chkMenu32">
                      <b-list-group-item target="_blank" :href="dbSide.myData.m12a" class="text-break m-0 p-1 bg-mycolor" :class="{ active: isSelected(132) }" @click="selnum(132)">{{ dbSide.myData.m12 }}</b-list-group-item>
                    </div>
                    <div v-show="dbSide.myData.chkMenu33">
                      <b-list-group-item target="_blank" :href="dbSide.myData.m13a" class="text-break m-0 p-1 bg-mycolor" :class="{ active: isSelected(133) }" @click="selnum(133)">{{ dbSide.myData.m13 }}</b-list-group-item>
                    </div>
                    <div v-show="dbSide.myData.chkMenu34">
                      <b-list-group-item target="_blank" :href="dbSide.myData.m14a" class="text-break m-0 p-1 bg-mycolor" :class="{ active: isSelected(134) }" @click="selnum(134)">{{ dbSide.myData.m14 }}</b-list-group-item>
                    </div>
                    <div v-show="dbSide.myData.chkMenu35">
                      <b-list-group-item target="_blank" :href="dbSide.myData.m15a" class="text-break m-0 p-1 bg-mycolor" :class="{ active: isSelected(135) }" @click="selnum(135)">{{ dbSide.myData.m15 }}</b-list-group-item>
                    </div>
                  </b-list-group>
                  <br />
                </div>
              </div>
            </div>
          </b-sidebar>
          <!-- </div> -->
          <!-- ------------------ Sideber end -->
        </div>
      </b-navbar>

      <!-- 管理メニュー start -->
      <div v-show="manFlg" class="m-0 p-0">
        <b-navbar toggleable="sm" type="light" class="mt-1 p-1" style="background-color: rgba(100, 100, 100, 0.25)">
          <!-- <b-button to="/DB" variant="dark" :size="commonData.selectedBtnSize" :class="{ 'border border-danger rounded-lg': isBorder(90) }" class="m-1 p-1" @click="selnum(901)">{{ commonData.mHome2 }}</b-button> -->
          <!-- 以下は ハンバーガー メニュー内 -->
          <b-navbar-toggle target="nav-collapse2"></b-navbar-toggle>
          <b-collapse id="nav-collapse2" is-nav>
            <!-- 管理 man start -->
            <div v-show="isLogin" class="m-0 p-0">
              <b-navbar-nav variant="info">
                <b-button to="/DB" variant="dark" :size="commonData.selectedBtnSize" :class="isBorder2(90, commonData.myBorder)" class="m-1 p-1" @click="selnum(901)">{{ commonData.mArchiveDB }}</b-button>
                <b-button to="/man" variant="dark" :size="commonData.selectedBtnSize" :class="isBorder2(91, commonData.myBorder)" class="m-1 p-1" @click="selnum(911)">共通設定</b-button>
                <b-button to="/man1" variant="dark" :size="commonData.selectedBtnSize" :class="isBorder2(92, commonData.myBorder)" class="m-1 p-1" @click="selnum(921)">メニュー設定</b-button>
                <b-button to="/man2" variant="dark" :size="commonData.selectedBtnSize" :class="isBorder2(93, commonData.myBorder)" class="m-1 p-1" @click="selnum(931)">Side Menu設定</b-button>
                <!-- ****** 本コメント、及び下記の2行(add, set) は消すな！ -->
                <!-- <b-button variant="dark" class="m-1 p-1" @click="add()">add</b-button> -->
                <!-- <b-button variant="dark" class="m-1 p-1" @click="set()">set</b-button> -->

                <!-- <div @mouseover="onOver(9)" @mouseleave="onLeave(9)"> -->
                <!-- <b-dropdown id="dropdown-menu-9" ref="dropdown9" :size="commonData.selectedBtnSize" text="管理メニュー" variant="dark" class="m-0"> -->
                <!-- <b-dropdown-item to="/test5" @click="selnum(95)">test5</b-dropdown-item> -->
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
              <div v-if="isLogin" class="m-0 p-0">
                <b-button :variant="commonData.selectedMenuBtnColor" :size="commonData.selectedBtnSize" class="m-1 p-1" @click="logout">ログアウト</b-button>
              </div>
              <div v-else class="m-0 p-0">
                <b-button to="/" :variant="commonData.selectedMenuBtnColor" :size="commonData.selectedBtnSize" class="m-1 p-1">ログイン</b-button>
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
    <p>{{ myDataSet() }}</p>
    <p>{{ myDataSendToRightSide() }}</p>
    <p>{{ myDataSendToFooter() }}</p>
    <!-- <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 ml-2 px-1 py-0" @click="test1()">test1</b-button> -->
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
      selected: 0,
      numBorder: 0,
      visible: true,
      myData: {},
      commonData: {},
      dbSideData: {},

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
      title: this.commonData.tabTitle,
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',

          // ブラウザのタイトルTabのicon
          href: this.commonData.tabIcon,
          // href: '/logo-yad-s-waku2.ico',
          // href: '/building-regular.svg',
          // href: '/icon-run.svg'
          // href: 'https://firebasestorage.googleapis.com/v0/b/hi-223af.appspot.com/o/icon-run.svg?alt=media&token=6f6172d8-5aff-4450-80b5-bd6410eaadc3'
        },
      ],
    }
  },

  // firestore DB からのデータ取得
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
      return this.$store.getters['storeheader/orderdDbHeaders']
    },
    dbCommon() {
      return this.$store.getters['commonDB/getCommonById']('common')
    },
    dbSideById() {
      try {
        const getData = this.$store.getters['storeside/getSideById']('f8sO13EuzfLTFSFeEjQw')

        if (getData === undefined) {
          // console.log('true')
          return
        } else {
          // console.log('false')
          return getData
        }
      } catch (error) {
        // console.log('error ****** in dbSideById(): ', error)
        return ''
      }
    },
    dbSides() {
      return this.$store.getters['storeside/orderdDbSides']
    },
  },

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
      if (this.commonData.buttonColorMenu !== undefined) {
        // カラーデータ設定
        // this.buttonColorMenu = 'background-color: ' + this.commonData.buttonColorMenu1 + ';'
        // console.log('0-2 --- buttonColorMenu: ', this.commonData.buttonColorMenu)
        this.buttonColorMenu = this.commonData.buttonColorMenu
        // console.log('0-3 --- buttonColorMenu: ', this.buttonColorMenu)
        this.buttonColorReg = this.commonData.buttonColorReg
        this.buttonColorEdit = this.commonData.buttonColorEdit
        this.buttonColorDel = this.commonData.buttonColorDel
        this.buttonColorCancel = this.commonData.buttonColorCancel
        this.isInitCalorSet = !this.isInitCalorSet
      }
    }
  },
  methods: {
    // test1() {
    //   this.selnum(21)
    //   // this.$nuxt.$emit('selnumside', '21')
    //   // this.$nuxt.$emit('selnum', '21')
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

    // カラー設定 1 Menu
    buttonColorMenuHover(hovered) {
      this.isHovered = hovered
      if (this.isHovered === true) {
        this.buttonColorMenu = 'background-color: ' + this.commonData.buttonColorMenu2 + ';'
        // console.log('2-1 --- buttonColorMenu: ', this.buttonColorMenu)
      } else {
        this.buttonColorMenu = 'background-color: ' + this.commonData.buttonColorMenu1 + ';'
        // console.log('2-2 --- buttonColorMenu: ', this.buttonColorMenu)
      }
    },
    // カラー設定 2 Reg
    buttonColorRegHover(hovered) {
      this.isHovered = hovered

      if (this.isHovered === true) {
        this.buttonColorReg = 'background-color: ' + this.commonData.buttonColorReg2 + ';'
      } else {
        this.buttonColorReg = 'background-color: ' + this.commonData.buttonColorReg1 + ';'
      }
    },
    // カラー設定 3 Edit
    buttonColorEditHover(hovered) {
      this.isHovered = hovered

      if (this.isHovered === true) {
        this.buttonColorEdit = 'background-color: ' + this.commonData.buttonColorEdit2 + ';'
      } else {
        this.buttonColorEdit = 'background-color: ' + this.commonData.buttonColorEdit1 + ';'
      }
    },
    // カラー設定 4 Del
    buttonColorDelHover(hovered) {
      this.isHovered = hovered

      if (this.isHovered === true) {
        this.buttonColorDel = 'background-color: ' + this.commonData.buttonColorDel2 + ';'
      } else {
        this.buttonColorDel = 'background-color: ' + this.commonData.buttonColorDel1 + ';'
      }
    },
    // カラー設定 5 Cancel
    buttonColorCancelHover(hovered) {
      this.isHovered = hovered

      if (this.isHovered === true) {
        this.buttonColorCancel = 'background-color: ' + this.commonData.buttonColorCancel2 + ';'
      } else {
        this.buttonColorCancel = 'background-color: ' + this.commonData.buttonColorCancel1 + ';'
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
    myDataSendToFooter() {
      // console.log('in myDataSendToFooter: ')
      this.$nuxt.$emit('toptitle', this.commonData.topTitle)
      this.$nuxt.$emit('home1', this.commonData.mHome1)
    },
    // myData を rightside.vue へ渡す
    myDataSendToRightSide() {
      // console.log('in myDataSendToRightSide: ')
      this.$nuxt.$emit('mydata', this.myData)
      this.$nuxt.$emit('commondata', this.commonData)
      // this.$nuxt.$emit('DBSIDEDATA', this.dbSideData)
    },
    // メニューデータをFireStoreからロードしてセット
    myDataSet() {
      // console.log('***** Test log ***** in myDataSet()')
      try {
        this.myData = this.dbHeaders[0].myData
        this.commonData = this.dbCommon.myData
        this.dbSideData = this.dbSideById.myData
      } catch (error) {
        // alert('***** error ***** in myDataSet(): ' + error)
        // console.log('***** error ***** in myDataSet(): ' + error)
      }

      // this.myData.topTitle = 'ようこそ！'
      // console.log('***************** dateTime in dbHeaders: ' + Date())
    },
    add() {
      // 下記の storeheader は store/storeheader.js のファイル名
      // this.$store.dispatch('storeheader/add', { titelName: this.myData.titleName, mainText: this.myData.mainText })
      this.$store.dispatch('storeheader/add', this.myData)
    },
    set() {
      // 下記の storeheader は store/storeheader.js のファイル名
      // this.$store.dispatch('storeheader/add', { titelName: this.myData.titleName, mainText: this.myData.mainText })
      this.$store.dispatch('storeheader/set', this.myData)
    },
  },
}
</script>

<style scoped>
.btn {
  font-weight: 700;
  /* padding: 24px 48px; */
  /* border: 0 none; */
  /* letter-spacing: 1px; */
  /* text-transform: uppercase; */
}

/* .b-navber .b-dropdown { */
/* .b-dropdown {
  background-color: $navbar-dropdown-bg;
} */

/* .menu {
  list-style: none;
  padding: 0;
  background-color: #eee;
}
.menu li {
  display: inline-block;
  padding: 5px;
} */
/* .bg-mycolor:hover { */
/* color: #000;
  background-color: #add8e6;
  border-color: #add8e6;
} */

/* 大デバイス（デスクトップ, 1200px 未満） */
@media (min-width: 992px) {
  .myTitle {
    font-size: 1.8rem;
  }
}
/* 中デバイス（タブレット, 992px 未満） */
@media (max-width: 991.98px) {
  .myTitle {
    font-size: 1.6rem;
  }
}
/* 小デバイス（横向きモバイル, 768px 未満） */
@media (max-width: 767.98px) {
  .myTitle {
    font-size: 1.4rem;
  }
}
/* @include media-breakpoint-up(sm) { */
/* 極小デバイス（縦向きモバイル, 576px 未満） */
@media (max-width: 575.98px) {
  .myTitle {
    font-size: 1rem;
  }
}
</style>
