<template>
  <div class="container-fluid no-gutters p-1">
    <!-- <b-container fluid class="p-4 bg-dark"> -->
    <div class="row m-0 p-0 bg-dark">
      <div class="col-12 m-0 p-1">
        <h3 class="text-light text-center m-0 p-0">管理： メニュー設定</h3>
        <p class="text-light text-center m-0 p-0">メニューの表示/非表示、および名称を変更できます。</p>
      </div>
      <div class="col-12 mb-2"></div>

      <div class="col-sm-6 m-0 mt-0 p-2">
        <b-list-group class="p-0 mt-1">
          <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">Menu1 : {{ myData.m1 }}</b-list-group-item>

          <!-- menu 1 -->
          <div class="row m-0 p-0" style="background-color: white">
            <div class="col-3 pt-2" style="background-color: darkgray">Menu1</div>
            <input id="idChk1" class="col-1 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu1" @change="toggleChk(1)" />
            <span v-if="myData2.chkMenu1" class="col-8 m-0 p-0">
              <b-form-input v-model="myData2.m1" class="border m-0 p-0 pl-1" for="idChk1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myData2.m1" class="border m-0 p-0 pl-1" for="idChk1"></b-form-input>
            </del>
          </div>

          <!-- menu 11 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk11" size="lg" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu11" @change="toggleChk(11)" />
            <span v-if="myData2.chkMenu11">
              <b-form-input v-model="myData2.m11" class="border pl-4" for="idChk11"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m11" class="border pl-4" for="idChk11"></b-form-input>
            </del>
          </div>

          <!-- menu 12 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk12" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu12" @change="toggleChk(12)" />
            <span v-if="myData2.chkMenu12">
              <b-form-input v-model="myData2.m12" class="border pl-4" for="idChk12"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m12" class="border pl-4" for="idChk12"></b-form-input>
            </del>
          </div>

          <!-- menu 13 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk13" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu13" @change="toggleChk(13)" />
            <span v-if="myData2.chkMenu13">
              <b-form-input v-model="myData2.m13" class="border pl-4" for="idChk13"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m13" class="border pl-4" for="idChk13"></b-form-input>
            </del>
          </div>

          <!-- menu 14 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk14" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu14" @change="toggleChk(14)" />
            <span v-if="myData2.chkMenu14">
              <b-form-input v-model="myData2.m14" class="border pl-4" for="idChk14"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m14" class="border pl-4" for="idChk14"></b-form-input>
            </del>
          </div>

          <!-- menu 15 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk15" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu15" @change="toggleChk(15)" />
            <span v-if="myData2.chkMenu15">
              <b-form-input v-model="myData2.m15" class="border pl-4" for="idChk15"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m15" class="border pl-4" for="idChk15"></b-form-input>
            </del>
          </div>

          <!-- menu 16 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk16" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu16" @change="toggleChk(16)" />
            <span v-if="myData2.chkMenu16">
              <b-form-input v-model="myData2.m16" class="border pl-4" for="idChk16"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m16" class="border pl-4" for="idChk16"></b-form-input>
            </del>
          </div>
        </b-list-group>
      </div>
      <!-- <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 px-1 py-0" @click="test1()">test1</b-button=> -->

      <div class="col-sm-6 m-0 mt-0 p-2">
        <b-list-group class="p-0 mt-1">
          <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">Menu2 : {{ myData.m2 }}</b-list-group-item>

          <!-- menu 2 -->
          <div class="row m-0 p-0" style="background-color: white">
            <div class="col-3 pt-2" style="background-color: darkgray">Menu2</div>
            <input id="idChk2" class="col-1 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu2" @change="toggleChk(2)" />
            <span v-if="myData2.chkMenu2" class="col-8 m-0 p-0">
              <b-form-input v-model="myData2.m2" class="border m-0 p-0 pl-1" for="idChk2"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myData2.m2" class="border m-0 p-0 pl-2" for="idChk2"></b-form-input>
            </del>
          </div>

          <!-- menu 21 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk21" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu21" @change="toggleChk(21)" />
            <span v-if="myData2.chkMenu21">
              <b-form-input v-model="myData2.m21" class="border pl-4" for="idChk21"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m21" class="border pl-4" for="idChk21"></b-form-input>
            </del>
          </div>

          <!-- menu 22 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk22" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu22" @change="toggleChk(22)" />
            <span v-if="myData2.chkMenu22">
              <b-form-input v-model="myData2.m22" class="border pl-4" for="idChk22"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m22" class="border pl-4" for="idChk22"></b-form-input>
            </del>
          </div>

          <!-- menu 23 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk23" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu23" @change="toggleChk(23)" />
            <span v-if="myData2.chkMenu23">
              <b-form-input v-model="myData2.m23" class="border pl-4" for="idChk23"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m23" class="border pl-4" for="idChk23"></b-form-input>
            </del>
          </div>

          <!-- menu 24 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk24" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu24" @change="toggleChk(24)" />
            <span v-if="myData2.chkMenu24">
              <b-form-input v-model="myData2.m24" class="border pl-4" for="idChk24"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m24" class="border pl-4" for="idChk24"></b-form-input>
            </del>
          </div>

          <!-- menu 25 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk25" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu25" @change="toggleChk(25)" />
            <span v-if="myData2.chkMenu25">
              <b-form-input v-model="myData2.m25" class="border pl-4" for="idChk25"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m25" class="border pl-4" for="idChk25"></b-form-input>
            </del>
          </div>

          <!-- menu 26 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk26" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu26" @change="toggleChk(26)" />
            <span v-if="myData2.chkMenu26">
              <b-form-input v-model="myData2.m26" class="border pl-4" for="idChk26"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m26" class="border pl-4" for="idChk26"></b-form-input>
            </del>
          </div>
        </b-list-group>
      </div>

      <div class="col-sm-6 m-0 mt-0 p-2">
        <b-list-group>
          <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">Menu3 : {{ myData.m3 }}</b-list-group-item>

          <!-- menu 3 -->
          <div class="row m-0 p-0" style="background-color: white">
            <div class="col-3 pt-2" style="background-color: darkgray">Menu3</div>
            <input id="idChk3" class="col-1 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu3" @change="toggleChk(3)" />
            <span v-if="myData2.chkMenu3" class="col-8 m-0 p-0">
              <b-form-input v-model="myData2.m3" class="border m-0 p-0 pl-1" for="idChk3"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myData2.m3" class="border m-0 p-0 pl-2" for="idChk3"></b-form-input>
            </del>
          </div>

          <!-- menu 31 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk31" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu31" @change="toggleChk(31)" />
            <span v-if="myData2.chkMenu31">
              <b-form-input v-model="myData2.m31" class="border pl-4" for="idChk31"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m31" class="border pl-4" for="idChk31"></b-form-input>
            </del>
          </div>

          <!-- menu 32 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk32" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu32" @change="toggleChk(32)" />
            <span v-if="myData2.chkMenu32">
              <b-form-input v-model="myData2.m32" class="border pl-4" for="idChk32"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m32" class="border pl-4" for="idChk32"></b-form-input>
            </del>
          </div>

          <!-- menu 33 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk33" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu33" @change="toggleChk(33)" />
            <span v-if="myData2.chkMenu33">
              <b-form-input v-model="myData2.m33" class="border pl-4" for="idChk33"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m33" class="border pl-4" for="idChk33"></b-form-input>
            </del>
          </div>

          <!-- menu 34 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk34" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu34" @change="toggleChk(34)" />
            <span v-if="myData2.chkMenu34">
              <b-form-input v-model="myData2.m34" class="border pl-4" for="idChk34"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m34" class="border pl-4" for="idChk34"></b-form-input>
            </del>
          </div>

          <!-- menu 35 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk35" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu35" @change="toggleChk(35)" />
            <span v-if="myData2.chkMenu35">
              <b-form-input v-model="myData2.m35" class="border pl-4" for="idChk35"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m35" class="border pl-4" for="idChk35"></b-form-input>
            </del>
          </div>

          <!-- menu 36 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk36" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu36" @change="toggleChk(36)" />
            <span v-if="myData2.chkMenu36">
              <b-form-input v-model="myData2.m36" class="border pl-4" for="idChk36"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m36" class="border pl-4" for="idChk36"></b-form-input>
            </del>
          </div>
        </b-list-group>
      </div>

      <div class="col-sm-6 m-0 mt-0 p-2">
        <b-list-group>
          <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">Menu4 : {{ myData.m4 }}</b-list-group-item>

          <!-- menu 4 -->
          <div class="row m-0 p-0" style="background-color: white">
            <div class="col-3 pt-2" style="background-color: darkgray">Menu4</div>
            <input id="idChk4" class="col-1 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu4" @change="toggleChk(4)" />
            <span v-if="myData2.chkMenu4" class="col-8 m-0 p-0">
              <b-form-input v-model="myData2.m4" class="border m-0 p-0 pl-1" for="idChk4"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myData2.m4" class="border m-0 p-0 pl-2" for="idChk4"></b-form-input>
            </del>
          </div>

          <!-- menu 41 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk41" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu41" @change="toggleChk(41)" />
            <span v-if="myData2.chkMenu41">
              <b-form-input v-model="myData2.m41" class="border pl-4" for="idChk41"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m41" class="border pl-4" for="idChk41"></b-form-input>
            </del>
          </div>

          <!-- menu 42 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk42" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu42" @change="toggleChk(42)" />
            <span v-if="myData2.chkMenu42">
              <b-form-input v-model="myData2.m42" class="border pl-4" for="idChk42"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m42" class="border pl-4" for="idChk42"></b-form-input>
            </del>
          </div>

          <!-- menu 43 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk43" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu43" @change="toggleChk(43)" />
            <span v-if="myData2.chkMenu43">
              <b-form-input v-model="myData2.m43" class="border pl-4" for="idChk43"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m43" class="border pl-4" for="idChk43"></b-form-input>
            </del>
          </div>

          <!-- menu 44 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk44" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu44" @change="toggleChk(44)" />
            <span v-if="myData2.chkMenu44">
              <b-form-input v-model="myData2.m44" class="border pl-4" for="idChk44"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m44" class="border pl-4" for="idChk44"></b-form-input>
            </del>
          </div>

          <!-- menu 45 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk45" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu45" @change="toggleChk(45)" />
            <span v-if="myData2.chkMenu45">
              <b-form-input v-model="myData2.m45" class="border pl-4" for="idChk45"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m45" class="border pl-4" for="idChk45"></b-form-input>
            </del>
          </div>

          <!-- menu 46 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk46" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu46" @change="toggleChk(46)" />
            <span v-if="myData2.chkMenu46">
              <b-form-input v-model="myData2.m46" class="border pl-4" for="idChk46"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m46" class="border pl-4" for="idChk46"></b-form-input>
            </del>
          </div>
        </b-list-group>
      </div>

      <div class="col-sm-6 m-0 mt-0 p-2">
        <b-list-group>
          <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">Menu5 : {{ myData.m5 }}</b-list-group-item>

          <!-- menu 5 -->
          <div class="row m-0 p-0" style="background-color: white">
            <div class="col-3 pt-2" style="background-color: darkgray">Menu5</div>
            <input id="idChk5" class="col-1 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu5" @change="toggleChk(5)" />
            <span v-if="myData2.chkMenu5" class="col-8 m-0 p-0">
              <b-form-input v-model="myData2.m5" class="border m-0 p-0 pl-1" for="idChk5"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myData2.m5" class="border m-0 p-0 pl-2" for="idChk5"></b-form-input>
            </del>
          </div>

          <!-- menu 55 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk51" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu51" @change="toggleChk(51)" />
            <span v-if="myData2.chkMenu51">
              <b-form-input v-model="myData2.m51" class="border pl-4" for="idChk51"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m51" class="border pl-4" for="idChk51"></b-form-input>
            </del>
          </div>

          <!-- menu 52 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk52" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu52" @change="toggleChk(52)" />
            <span v-if="myData2.chkMenu52">
              <b-form-input v-model="myData2.m52" class="border pl-4" for="idChk52"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m52" class="border pl-4" for="idChk52"></b-form-input>
            </del>
          </div>

          <!-- menu 53 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk53" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu53" @change="toggleChk(53)" />
            <span v-if="myData2.chkMenu53">
              <b-form-input v-model="myData2.m53" class="border pl-4" for="idChk53"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m53" class="border pl-4" for="idChk53"></b-form-input>
            </del>
          </div>

          <!-- menu 54 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk54" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu54" @change="toggleChk(54)" />
            <span v-if="myData2.chkMenu54">
              <b-form-input v-model="myData2.m54" class="border pl-4" for="idChk54"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m54" class="border pl-4" for="idChk54"></b-form-input>
            </del>
          </div>

          <!-- menu 55 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk55" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu55" @change="toggleChk(55)" />
            <span v-if="myData2.chkMenu55">
              <b-form-input v-model="myData2.m55" class="border pl-4" for="idChk55"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m55" class="border pl-4" for="idChk55"></b-form-input>
            </del>
          </div>

          <!-- menu 56 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk56" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu56" @change="toggleChk(56)" />
            <span v-if="myData2.chkMenu56">
              <b-form-input v-model="myData2.m56" class="border pl-4" for="idChk56"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m56" class="border pl-4" for="idChk56"></b-form-input>
            </del>
          </div>
        </b-list-group>
      </div>

      <div class="col-sm-6 m-0 mt-0 p-2">
        <b-list-group>
          <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">Menu6 : {{ myData.m6 }}</b-list-group-item>

          <!-- menu 6 -->
          <div class="row m-0 p-0" style="background-color: white">
            <div class="col-3 pt-2" style="background-color: darkgray">Menu6</div>
            <input id="idChk6" class="col-1 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu6" @change="toggleChk(6)" />
            <span v-if="myData2.chkMenu6" class="col-8 m-0 p-0">
              <b-form-input v-model="myData2.m6" class="border m-0 p-0 pl-1" for="idChk6"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myData2.m6" class="border m-0 p-0 pl-2" for="idChk6"></b-form-input>
            </del>
          </div>

          <!-- menu 61 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk61" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu61" @change="toggleChk(61)" />
            <span v-if="myData2.chkMenu61">
              <b-form-input v-model="myData2.m61" class="border pl-4" for="idChk61"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m61" class="border pl-4" for="idChk61"></b-form-input>
            </del>
          </div>

          <!-- menu 62 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk62" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu62" @change="toggleChk(62)" />
            <span v-if="myData2.chkMenu62">
              <b-form-input v-model="myData2.m62" class="border pl-4" for="idChk62"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m62" class="border pl-4" for="idChk62"></b-form-input>
            </del>
          </div>

          <!-- menu 63 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk63" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu63" @change="toggleChk(63)" />
            <span v-if="myData2.chkMenu63">
              <b-form-input v-model="myData2.m63" class="border pl-4" for="idChk63"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m63" class="border pl-4" for="idChk63"></b-form-input>
            </del>
          </div>

          <!-- menu 64 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk64" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu64" @change="toggleChk(64)" />
            <span v-if="myData2.chkMenu64">
              <b-form-input v-model="myData2.m64" class="border pl-4" for="idChk64"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m64" class="border pl-4" for="idChk64"></b-form-input>
            </del>
          </div>

          <!-- menu 65 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk65" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu65" @change="toggleChk(65)" />
            <span v-if="myData2.chkMenu65">
              <b-form-input v-model="myData2.m65" class="border pl-4" for="idChk65"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m65" class="border pl-4" for="idChk65"></b-form-input>
            </del>
          </div>

          <!-- menu 66 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk66" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu66" @change="toggleChk(66)" />
            <span v-if="myData2.chkMenu66">
              <b-form-input v-model="myData2.m66" class="border pl-4" for="idChk66"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="myData2.m66" class="border pl-4" for="idChk66"></b-form-input>
            </del>
          </div>
          <!-- ------------------ -->
        </b-list-group>
      </div>

      <hr class="m-0 p-0 col-12" color="#000000" />
      <div class="col-12 m-0 mt-0 p-2">
        <div class="m-2 pb-2">
          <b-button :size="commonData.selectedBtnSize" class="mx-1" variant="primary" @click="myReg()">登録</b-button>
          <b-button :size="commonData.selectedBtnSize" class="mx-1" @click="myUndo()">登録取消</b-button>
          <!-- <b-button :size="commonData.selectedBtnSize" class="mx-1" @click="myTest()">テストLog</b-button> -->
          <p class="m-0 mt-1 p-0 text-light">「登録取消」は編集した内容を破棄して、登録前に戻します。</p>
          <p class="m-0 mt-1 p-0 text-light">なお一旦登録すると元に戻すことはできません。</p>
        </div>
      </div>
    </div>
    <p>{{ myDataSet() }}</p>
  </div>
</template>

<script>
// import { firestore } from 'firebase'
export default {
  // el: '#listGroup',
  data() {
    return {
      myDataSetFlg: false,
      commonData: {},
      myData: {},
      myData2: {
        // headerLogo: '',
        myDataNo: '1',
        m1: '',
        m11: '',
        m12: '',
        m13: '',
        m14: '',
        m15: '',
        m16: '',
        m2: '',
        m21: '',
        m22: '',
        m23: '',
        m24: '',
        m25: '',
        m26: '',
        m3: '',
        m31: '',
        m32: '',
        m33: '',
        m34: '',
        m35: '',
        m36: '',
        m4: '',
        m41: '',
        m42: '',
        m43: '',
        m44: '',
        m45: '',
        m46: '',
        m5: '',
        m51: '',
        m52: '',
        m53: '',
        m54: '',
        m55: '',
        m56: '',
        m6: '',
        m61: '',
        m62: '',
        m63: '',
        m64: '',
        m65: '',
        m66: '',
        chkMenu1: '',
        chkMenu11: '',
        chkMenu12: '',
        chkMenu13: '',
        chkMenu14: '',
        chkMenu15: '',
        chkMenu16: '',
        chkMenu2: '',
        chkMenu21: '',
        chkMenu22: '',
        chkMenu23: '',
        chkMenu24: '',
        chkMenu25: '',
        chkMenu26: '',
        chkMenu3: '',
        chkMenu31: '',
        chkMenu32: '',
        chkMenu33: '',
        chkMenu34: '',
        chkMenu35: '',
        chkMenu36: '',
        chkMenu4: '',
        chkMenu41: '',
        chkMenu42: '',
        chkMenu43: '',
        chkMenu44: '',
        chkMenu45: '',
        chkMenu46: '',
        chkMenu5: '',
        chkMenu51: '',
        chkMenu52: '',
        chkMenu53: '',
        chkMenu54: '',
        chkMenu55: '',
        chkMenu56: '',
        chkMenu6: '',
        chkMenu61: '',
        chkMenu62: '',
        chkMenu63: '',
        chkMenu64: '',
        chkMenu65: '',
        chkMenu66: '',
      },
    }
  },
  // beforeDestroy() {
  // this.$nuxt.$off('selnum')
  // },
  computed: {
    // dbOshirases() {
    //   // return this.$store.state.firestore.dbOshirases
    //   return this.$store.getters['firestore/orderdDbOshirases']
    // },
    dbHeaders() {
      return this.$store.getters['storeheader/orderdDbHeaders']
    },
  },
  // elementへのマウントが行われた後処理される。
  // SSR(Firebase等)では使えない。
  // mounted() {
  //   this.$nuxt.$on('selnum', (selected) => {
  //     this.selected = selected
  //     // console.log('header components からのデータ: ' + selected)
  //   })
  // },
  // created は画面を開いたとき呼ばれる。
  created() {
    // 下記の firestore は store/firestore.js のファイル名
    // this.$store.dispatch('firestore/init')

    // 下記の storeheader は store/storeheader.js のファイル名
    this.$store.dispatch('storeheader/init')
  },
  // elementへのマウントが行われた後処理される。
  // SSR(Firebase等)では使えない。
  mounted() {
    this.$nuxt.$on('commondata', (commonData) => {
      this.commonData = commonData
    })
  },

  // ④ updated 画面が更新された後、呼び出される。
  // SSR(Firebase等)では使えない。
  updated() {
    this.selnum(921)
  },

  // ⑨ methods は呼び出される度に実行
  // データが変更された時、反映したくない場合はmethodsを利用
  methods: {
    selnum(num) {
      // this.selected = num
      // console.log('header selnum selected: ' + num)
      this.$nuxt.$emit('selnum', num)
    },

    test1() {
      // console.log('myData.chkNemu1 in test1(): ' + this.myData.chkMenu1)
      // console.log('myData2.chkNemu1 in test1(): ' + this.myData2.chkMenu1)
    },
    toggleChk(num) {
      switch (num) {
        case 1:
          this.myData2.chkMenu1 = !this.myData2.chkMenu1
          break
        case 11:
          this.myData2.chkMenu11 = !this.myData2.chkMenu11
          break
        case 12:
          this.myData2.chkMenu12 = !this.myData2.chkMenu12
          break
        case 13:
          this.myData2.chkMenu13 = !this.myData2.chkMenu13
          break
        case 14:
          this.myData2.chkMenu14 = !this.myData2.chkMenu14
          break
        case 15:
          this.myData2.chkMenu15 = !this.myData2.chkMenu15
          break
        case 16:
          this.myData2.chkMenu16 = !this.myData2.chkMenu16
          break
        case 2:
          this.myData2.chkMenu2 = !this.myData2.chkMenu2
          break
        case 21:
          this.myData2.chkMenu21 = !this.myData2.chkMenu21
          break
        case 22:
          this.myData2.chkMenu22 = !this.myData2.chkMenu22
          break
        case 23:
          this.myData2.chkMenu23 = !this.myData2.chkMenu23
          break
        case 24:
          this.myData2.chkMenu24 = !this.myData2.chkMenu24
          break
        case 25:
          this.myData2.chkMenu25 = !this.myData2.chkMenu25
          break
        case 26:
          this.myData2.chkMenu26 = !this.myData2.chkMenu26
          break
        case 3:
          this.myData2.chkMenu3 = !this.myData2.chkMenu3
          break
        case 31:
          this.myData2.chkMenu31 = !this.myData2.chkMenu31
          break
        case 32:
          this.myData2.chkMenu32 = !this.myData2.chkMenu32
          break
        case 33:
          this.myData2.chkMenu33 = !this.myData2.chkMenu33
          break
        case 34:
          this.myData2.chkMenu34 = !this.myData2.chkMenu34
          break
        case 35:
          this.myData2.chkMenu35 = !this.myData2.chkMenu35
          break
        case 36:
          this.myData2.chkMenu36 = !this.myData2.chkMenu36
          break
        case 4:
          this.myData2.chkMenu4 = !this.myData2.chkMenu4
          break
        case 41:
          this.myData2.chkMenu41 = !this.myData2.chkMenu41
          break
        case 42:
          this.myData2.chkMenu42 = !this.myData2.chkMenu42
          break
        case 43:
          this.myData2.chkMenu43 = !this.myData2.chkMenu43
          break
        case 44:
          this.myData2.chkMenu44 = !this.myData2.chkMenu44
          break
        case 45:
          this.myData2.chkMenu45 = !this.myData2.chkMenu45
          break
        case 46:
          this.myData2.chkMenu46 = !this.myData2.chkMenu46
          break
        case 5:
          this.myData2.chkMenu5 = !this.myData2.chkMenu5
          break
        case 51:
          this.myData2.chkMenu51 = !this.myData2.chkMenu51
          break
        case 52:
          this.myData2.chkMenu52 = !this.myData2.chkMenu52
          break
        case 53:
          this.myData2.chkMenu53 = !this.myData2.chkMenu53
          break
        case 54:
          this.myData2.chkMenu54 = !this.myData2.chkMenu54
          break
        case 55:
          this.myData2.chkMenu55 = !this.myData2.chkMenu55
          break
        case 56:
          this.myData2.chkMenu56 = !this.myData2.chkMenu56
          break
        case 6:
          this.myData2.chkMenu6 = !this.myData2.chkMenu6
          break
        case 61:
          this.myData2.chkMenu61 = !this.myData2.chkMenu61
          break
        case 62:
          this.myData2.chkMenu62 = !this.myData2.chkMenu62
          break
        case 63:
          this.myData2.chkMenu63 = !this.myData2.chkMenu63
          break
        case 64:
          this.myData2.chkMenu64 = !this.myData2.chkMenu64
          break
        case 65:
          this.myData2.chkMenu65 = !this.myData2.chkMenu65
          break
        case 66:
          this.myData2.chkMenu66 = !this.myData2.chkMenu66
          break
        default:
          // console.log('---- error --- num in toggleChk(): ' + num)
          break
      }

      // console.log('------- chkNemu1 in toggleChk(): ' + this.myData2.chkMenu1)
    },

    myReg() {
      // this.$store.dispatch('storeheader/update', { id: 'dbHeaderId1', myData: this.myData2 }).then(() => {
      // 下記の storeheader は store/storeheader.js のファイル名

      // 以下の２行： 初期デプロイ後 add , Firebabase(Database)に項目が作成されたら update に戻す
      // this.$store.dispatch('storeheader/add', this.myData2).then(() => {
      this.$store.dispatch('storeheader/update', this.myData2).then(() => {
        this.toastFileUpdate('登録', '登録しました。')
        // this.myDataSetFlg = false
        // this.myDataSet()
        // console.log('+++++++++++++++++++++++++++++++++')
        // console.log('myData.chkNemu1 in myReg(): ' + this.myData.chkMenu1)
        // console.log('myData2.chkNemu1 in myReg(): ' + this.myData2.chkMenu1)
      })
      // console.log('---------------------------------')
      // console.log('myData.chkNemu1 in myReg(): ' + this.myData.chkMenu1)
      // console.log('myData2.chkNemu1 in myReg(): ' + this.myData2.chkMenu1)
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
      // console.log('テスト in myDataSet(): ' + this.myData2.m1)
      if (this.myDataSetFlg === false) {
        try {
          // firestore のデータを myData にセット
          this.myData = this.dbHeaders[0].myData

          // myData のデータを myData2(=入力用) にセット
          this.myData2.id = this.myData.id

          this.myData2.m1 = this.myData.m1
          this.myData2.m11 = this.myData.m11
          this.myData2.m12 = this.myData.m12
          this.myData2.m13 = this.myData.m13
          this.myData2.m14 = this.myData.m14
          this.myData2.m15 = this.myData.m15
          this.myData2.m16 = this.myData.m16
          this.myData2.m2 = this.myData.m2
          this.myData2.m21 = this.myData.m21
          this.myData2.m22 = this.myData.m22
          this.myData2.m23 = this.myData.m23
          this.myData2.m24 = this.myData.m24
          this.myData2.m25 = this.myData.m25
          this.myData2.m26 = this.myData.m26
          this.myData2.m3 = this.myData.m3
          this.myData2.m31 = this.myData.m31
          this.myData2.m32 = this.myData.m32
          this.myData2.m33 = this.myData.m33
          this.myData2.m34 = this.myData.m34
          this.myData2.m35 = this.myData.m35
          this.myData2.m36 = this.myData.m36
          this.myData2.m4 = this.myData.m4
          this.myData2.m41 = this.myData.m41
          this.myData2.m42 = this.myData.m42
          this.myData2.m43 = this.myData.m43
          this.myData2.m44 = this.myData.m44
          this.myData2.m45 = this.myData.m45
          this.myData2.m46 = this.myData.m46
          this.myData2.m5 = this.myData.m5
          this.myData2.m51 = this.myData.m51
          this.myData2.m52 = this.myData.m52
          this.myData2.m53 = this.myData.m53
          this.myData2.m54 = this.myData.m54
          this.myData2.m55 = this.myData.m55
          this.myData2.m56 = this.myData.m56
          this.myData2.m6 = this.myData.m6
          this.myData2.m61 = this.myData.m61
          this.myData2.m62 = this.myData.m62
          this.myData2.m63 = this.myData.m63
          this.myData2.m64 = this.myData.m64
          this.myData2.m65 = this.myData.m65
          this.myData2.m66 = this.myData.m66
          // メニュー 1
          this.myData2.chkMenu1 = this.myData.chkMenu1
          this.myData2.chkMenu11 = this.myData.chkMenu11
          this.myData2.chkMenu12 = this.myData.chkMenu12
          this.myData2.chkMenu13 = this.myData.chkMenu13
          this.myData2.chkMenu14 = this.myData.chkMenu14
          this.myData2.chkMenu15 = this.myData.chkMenu15
          this.myData2.chkMenu16 = this.myData.chkMenu16
          // メニュー 2
          this.myData2.chkMenu2 = this.myData.chkMenu2
          this.myData2.chkMenu21 = this.myData.chkMenu21
          this.myData2.chkMenu22 = this.myData.chkMenu22
          this.myData2.chkMenu23 = this.myData.chkMenu23
          this.myData2.chkMenu24 = this.myData.chkMenu24
          this.myData2.chkMenu25 = this.myData.chkMenu25
          this.myData2.chkMenu26 = this.myData.chkMenu26
          // メニュー 3
          this.myData2.chkMenu3 = this.myData.chkMenu3
          this.myData2.chkMenu31 = this.myData.chkMenu31
          this.myData2.chkMenu32 = this.myData.chkMenu32
          this.myData2.chkMenu33 = this.myData.chkMenu33
          this.myData2.chkMenu34 = this.myData.chkMenu34
          this.myData2.chkMenu35 = this.myData.chkMenu35
          this.myData2.chkMenu36 = this.myData.chkMenu36
          // メニュー 4
          this.myData2.chkMenu4 = this.myData.chkMenu4
          this.myData2.chkMenu41 = this.myData.chkMenu41
          this.myData2.chkMenu42 = this.myData.chkMenu42
          this.myData2.chkMenu43 = this.myData.chkMenu43
          this.myData2.chkMenu44 = this.myData.chkMenu44
          this.myData2.chkMenu45 = this.myData.chkMenu45
          this.myData2.chkMenu46 = this.myData.chkMenu46
          // メニュー 5
          this.myData2.chkMenu5 = this.myData.chkMenu5
          this.myData2.chkMenu51 = this.myData.chkMenu51
          this.myData2.chkMenu52 = this.myData.chkMenu52
          this.myData2.chkMenu53 = this.myData.chkMenu53
          this.myData2.chkMenu54 = this.myData.chkMenu54
          this.myData2.chkMenu55 = this.myData.chkMenu55
          this.myData2.chkMenu56 = this.myData.chkMenu56
          // メニュー 6
          this.myData2.chkMenu6 = this.myData.chkMenu6
          this.myData2.chkMenu61 = this.myData.chkMenu61
          this.myData2.chkMenu62 = this.myData.chkMenu62
          this.myData2.chkMenu63 = this.myData.chkMenu63
          this.myData2.chkMenu64 = this.myData.chkMenu64
          this.myData2.chkMenu65 = this.myData.chkMenu65
          this.myData2.chkMenu66 = this.myData.chkMenu66

          this.myDataSetFlg = true
          // console.log('2 ********** myData.chkMenu1 in myDataset(): ', this.myData.chkMenu1)
          // console.log('2 ********** myData2.id in myDataset(): ', this.myData2.id)
        } catch (error) {
          // alert('テスト in myDataSet(): ' + error)
          // console.log('テスト in myDataSet(): ' + error)
        }
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
del {
  color: rgba(255, 0, 0, 1);
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
/* .no-gutters {
  margin:0;
  padding:0;
}

.no-gutters > .col,
.no-gutters > [class*="col-"] {
  margin:0;
  padding:0;
} */
/* h1,
h2 {
  font-weight: normal;
} */
/* img {
  width: 100%;
} */
</style>
