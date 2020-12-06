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
          <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">Menu1 : {{ menuData2.menuGroupName[0] }}</b-list-group-item>

          <!-- menu 1 -->
          <b-input-group class="row m-0 p-0 d-flex align-items-center" style="background-color: white">
            <!-- <div class="col-3 m-0 p-0" style="background-color: darkgray">Menu1</div> -->
            <!-- <div class="col-3 m-0 p-2 bg-secondary">Menu1</div> -->
            <div class="col-3 p-2 bg-secondary">Group name</div>
            <!-- <input class="col-1 m-0 p-0" type="checkbox" :checked="menuData2.menuGroupChk[0]" @click="menuData2.menuGroupChk[0] = !menuData2.menuGroupChk[0]" /> -->
            <input class="col-1 m-0 p-0" type="checkbox" :checked="menuData2.menuGroupChk[0]" @change="toggleChk(1)" />
            <span v-if="menuData2.menuGroupChk[0]" class="col-8 m-0 p-0">
              <b-form-input v-model="menuData2.menuGroupName[0]" class="border m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="menuData2.menuGroupName[0]" class="border m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 11 -->
          <b-input-group class="row m-0 p-0 d-flex align-items-center bg-white">
            <input size="lg" class="col-2 m-0 p-2" type="checkbox" :checked="menuData2.menu1Chk[0]" @change="menuData2.menu1Chk[0] = !menuData2.menu1Chk[0]" />
            <span v-if="menuData2.menu1Chk[0]" class="col-10 m-0 p-0">
              <b-form-input v-model="menuData2.menu1Name[0]" class="border pl-4"></b-form-input>
            </span>
            <del v-else class="col-10 m-0 p-0">
              <b-form-input v-model="menuData2.menu1Name[0]" class="border pl-4"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 12 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk12" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu1Chk[1]" @change="menuData2.menu1Chk[1] = !menuData2.menu1Chk[1]" />
            <span v-if="menuData2.menu1Chk[1]">
              <b-form-input v-model="menuData2.menu1Name[1]" class="border pl-4" for="idChk12"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu1Name[1]" class="border pl-4" for="idChk12"></b-form-input>
            </del>
          </div>

          <!-- menu 13 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk13" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu1Chk[2]" @change="menuData2.menu1Chk[2] = !menuData2.menu1Chk[2]" />
            <span v-if="menuData2.menu1Chk[2]">
              <b-form-input v-model="menuData2.menu1Name[2]" class="border pl-4" for="idChk13"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu1Name[2]" class="border pl-4" for="idChk13"></b-form-input>
            </del>
          </div>

          <!-- menu 14 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk14" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu1Chk[3]" @change="menuData2.menu1Chk[3] = !menuData2.menu1Chk[3]" />
            <span v-if="menuData2.menu1Chk[3]">
              <b-form-input v-model="menuData2.menu1Name[3]" class="border pl-4" for="idChk14"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu1Name[3]" class="border pl-4" for="idChk14"></b-form-input>
            </del>
          </div>

          <!-- menu 15 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk15" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu1Chk[4]" @change="menuData2.menu1Chk[4] = !menuData2.menu1Chk[4]" />
            <span v-if="menuData2.menu1Chk[4]">
              <b-form-input v-model="menuData2.menu1Name[4]" class="border pl-4" for="idChk15"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu1Name[4]" class="border pl-4" for="idChk15"></b-form-input>
            </del>
          </div>

          <!-- menu 16 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk16" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu1Chk[5]" @change="menuData2.menu1Chk[5] = !menuData2.menu1Chk[5]" />
            <span v-if="menuData2.menu1Chk[5]">
              <b-form-input v-model="menuData2.menu1Name[5]" class="border pl-4" for="idChk16"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu1Name[5]" class="border pl-4" for="idChk16"></b-form-input>
            </del>
          </div>
        </b-list-group>
      </div>
      <!-- <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 px-1 py-0" @click="test1()">test1</b-button=> -->

      <div class="col-sm-6 m-0 mt-0 p-2">
        <b-list-group class="p-0 mt-1">
          <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">Menu2 : {{ menuData2.menuGroupName[1] }}</b-list-group-item>

          <!-- menu 2 -->
          <div class="row m-0 p-0" style="background-color: white">
            <div class="col-3 pt-2" style="background-color: darkgray">Menu2</div>
            <input id="idChk2" class="col-1 mt-3 p-2" type="checkbox" :checked="menuData2.menuGroupChk[1]" @change="menuData2.menuGroupChk[1] = !menuData2.menuGroupChk[1]" />
            <span v-if="menuData2.menuGroupChk[1]" class="col-8 m-0 p-0">
              <b-form-input v-model="menuData2.menuGroupName[1]" class="border m-0 p-0 pl-1" for="idChk2"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="menuData2.menuGroupName[1]" class="border m-0 p-0 pl-2" for="idChk2"></b-form-input>
            </del>
          </div>

          <!-- menu 21 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk21" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu2Chk[0]" @change="menuData2.menu2Chk[0] = !menuData2.menu2Chk[0]" />
            <span v-if="menuData2.menu2Chk[0]">
              <b-form-input v-model="menuData2.menu2Name[0]" class="border pl-4" for="idChk21"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu2Name[0]" class="border pl-4" for="idChk21"></b-form-input>
            </del>
          </div>

          <!-- menu 22 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk22" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu2Chk[1]" @change="menuData2.menu2Chk[1] = !menuData2.menu2Chk[1]" />
            <span v-if="menuData2.menu2Chk[1]">
              <b-form-input v-model="menuData2.menu2Name[1]" class="border pl-4" for="idChk22"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu2Name[1]" class="border pl-4" for="idChk22"></b-form-input>
            </del>
          </div>

          <!-- menu 23 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk23" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu2Chk[2]" @change="menuData2.menu2Chk[2] = !menuData2.menu2Chk[2]" />
            <span v-if="menuData2.menu2Chk[2]">
              <b-form-input v-model="menuData2.menu2Name[2]" class="border pl-4" for="idChk23"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu2Name[2]" class="border pl-4" for="idChk23"></b-form-input>
            </del>
          </div>

          <!-- menu 24 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk24" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu2Chk[3]" @change="menuData2.menu2Chk[3] = !menuData2.menu2Chk[3]" />
            <span v-if="menuData2.menu2Chk[3]">
              <b-form-input v-model="menuData2.menu2Name[3]" class="border pl-4" for="idChk24"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu2Name[3]" class="border pl-4" for="idChk24"></b-form-input>
            </del>
          </div>

          <!-- menu 25 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk25" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu2Chk[4]" @change="menuData2.menu2Chk[4] = !menuData2.menu2Chk[4]" />
            <span v-if="menuData2.menu4Chk[4]">
              <b-form-input v-model="menuData2.menu2Name[4]" class="border pl-4" for="idChk25"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu2Name[4]" class="border pl-4" for="idChk25"></b-form-input>
            </del>
          </div>

          <!-- menu 26 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk26" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu2Chk[5]" @change="menuData2.menu2Chk[5] = !menuData2.menu2Chk[5]" />
            <span v-if="menuData2.menu2Chk[5]">
              <b-form-input v-model="menuData2.menu2Name[5]" class="border pl-4" for="idChk26"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu2Name[5]" class="border pl-4" for="idChk26"></b-form-input>
            </del>
          </div>
        </b-list-group>
      </div>

      <div class="col-sm-6 m-0 mt-0 p-2">
        <b-list-group>
          <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">Menu3 : {{ menuData2.menuGroupName[2] }}</b-list-group-item>

          <!-- menu 3 -->
          <div class="row m-0 p-0" style="background-color: white">
            <div class="col-3 pt-2" style="background-color: darkgray">Menu3</div>
            <input id="idChk3" class="col-1 mt-3 p-2" type="checkbox" :checked="menuData2.menuGroupChk[2]" @change="menuData2.menuGroupChk[2] = !menuData2.menuGroupChk[2]" />
            <span v-if="menuData2.menuGroupChk[2]" class="col-8 m-0 p-0">
              <b-form-input v-model="menuData2.menuGroupName[2]" class="border m-0 p-0 pl-1" for="idChk3"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="menuData2.menuGroupName[2]" class="border m-0 p-0 pl-2" for="idChk3"></b-form-input>
            </del>
          </div>

          <!-- menu 31 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk31" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu3Chk[0]" @change="menuData2.menu3Chk[0] = !menuData2.menu3Chk[0]" />
            <span v-if="menuData2.menu3Chk[0]">
              <b-form-input v-model="menuData2.menu3Name[0]" class="border pl-4" for="idChk31"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu3Name[0]" class="border pl-4" for="idChk31"></b-form-input>
            </del>
          </div>

          <!-- menu 32 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk32" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu3Chk[1]" @change="menuData2.menu3Chk[1] = !menuData2.menu3Chk[1]" />
            <span v-if="menuData2.menu3Chk[1]">
              <b-form-input v-model="menuData2.menu3Name[1]" class="border pl-4" for="idChk32"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu3Name[1]" class="border pl-4" for="idChk32"></b-form-input>
            </del>
          </div>

          <!-- menu 33 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk33" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu3Chk[2]" @change="menuData2.menu3Chk[2] = !menuData2.menu3Chk[2]" />
            <span v-if="menuData2.menu3Chk[2]">
              <b-form-input v-model="menuData2.menu3Name[2]" class="border pl-4" for="idChk33"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu3Name[2]" class="border pl-4" for="idChk33"></b-form-input>
            </del>
          </div>

          <!-- menu 34 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk34" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu3Chk[3]" @change="menuData2.menu3Chk[3] = !menuData2.menu3Chk[3]" />
            <span v-if="menuData2.menu3Chk[3]">
              <b-form-input v-model="menuData2.menu3Name[3]" class="border pl-4" for="idChk34"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu3Name[3]" class="border pl-4" for="idChk34"></b-form-input>
            </del>
          </div>

          <!-- menu 35 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk35" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu3Chk[4]" @change="menuData2.menu3Chk[4] = !menuData2.menu3Chk[4]" />
            <span v-if="menuData2.menu3Chk[4]">
              <b-form-input v-model="menuData2.menu3Name[4]" class="border pl-4" for="idChk35"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu3Name[4]" class="border pl-4" for="idChk35"></b-form-input>
            </del>
          </div>

          <!-- menu 36 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk36" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu3Chk[5]" @change="menuData2.menu3Chk[5] = !menuData2.menu3Chk[5]" />
            <span v-if="menuData2.menu3Chk[5]">
              <b-form-input v-model="menuData2.menu3Name[5]" class="border pl-4" for="idChk36"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu3Name[5]" class="border pl-4" for="idChk36"></b-form-input>
            </del>
          </div>
        </b-list-group>
      </div>

      <div class="col-sm-6 m-0 mt-0 p-2">
        <b-list-group>
          <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">Menu4 : {{ menuData2.menuGroupName[3] }}</b-list-group-item>

          <!-- menu 4 -->
          <div class="row m-0 p-0" style="background-color: white">
            <div class="col-3 pt-2" style="background-color: darkgray">Menu4</div>
            <input id="idChk4" class="col-1 mt-3 p-2" type="checkbox" :checked="menuData2.menuGroupChk[3]" @change="menuData2.menuGroupChk[3] = !menuData2.menuGroupChk[3]" />
            <span v-if="menuData2.menuGroupChk[3]" class="col-8 m-0 p-0">
              <b-form-input v-model="menuData2.menuGroupName[3]" class="border m-0 p-0 pl-1" for="idChk4"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="menuData2.menuGroupName[3]" class="border m-0 p-0 pl-2" for="idChk4"></b-form-input>
            </del>
          </div>

          <!-- menu 41 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk41" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu4Chk[0]" @change="menuData2.menu4Chk[0] = !menuData2.menu4Chk[0]" />
            <span v-if="menuData2.menu4Chk[0]">
              <b-form-input v-model="menuData2.menu4Name[0]" class="border pl-4" for="idChk41"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu4Name[0]" class="border pl-4" for="idChk41"></b-form-input>
            </del>
          </div>

          <!-- menu 42 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk42" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu4Chk[1]" @change="menuData2.menu4Chk[1] = !menuData2.menu4Chk[1]" />
            <span v-if="menuData2.menu4Chk[1]">
              <b-form-input v-model="menuData2.menu4Name[1]" class="border pl-4" for="idChk42"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu4Name[1]" class="border pl-4" for="idChk42"></b-form-input>
            </del>
          </div>

          <!-- menu 43 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk43" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu4Chk[2]" @change="menuData2.menu4Chk[2] = !menuData2.menu4Chk[2]" />
            <span v-if="menuData2.menu4Chk[2]">
              <b-form-input v-model="menuData2.menu4Name[2]" class="border pl-4" for="idChk43"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu4Name[2]" class="border pl-4" for="idChk43"></b-form-input>
            </del>
          </div>

          <!-- menu 44 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk44" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu4Chk[3]" @change="menuData2.menu4Chk[3] = !menuData2.menu4Chk[3]" />
            <span v-if="menuData2.menu4Chk[3]">
              <b-form-input v-model="menuData2.menu4Name[3]" class="border pl-4" for="idChk44"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu4Name[3]" class="border pl-4" for="idChk44"></b-form-input>
            </del>
          </div>

          <!-- menu 45 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk45" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu4Chk[4]" @change="menuData2.menu4Chk[4] = !menuData2.menu4Chk[4]" />
            <span v-if="menuData2.menu4Chk[4]">
              <b-form-input v-model="menuData2.menu4Name[4]" class="border pl-4" for="idChk45"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu4Name[4]" class="border pl-4" for="idChk45"></b-form-input>
            </del>
          </div>

          <!-- menu 46 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk46" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu4Chk[5]" @change="menuData2.menu4Chk[5] = !menuData2.menu4Chk[5]" />
            <span v-if="menuData2.menu4Chk[5]">
              <b-form-input v-model="menuData2.menu4Name[5]" class="border pl-4" for="idChk46"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu4Name[5]" class="border pl-4" for="idChk46"></b-form-input>
            </del>
          </div>
        </b-list-group>
      </div>

      <div class="col-sm-6 m-0 mt-0 p-2">
        <b-list-group>
          <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">Menu5 : {{ menuData2.menuGroupName[4] }}</b-list-group-item>

          <!-- menu 5 -->
          <div class="row m-0 p-0" style="background-color: white">
            <div class="col-3 pt-2" style="background-color: darkgray">Menu5</div>
            <input id="idChk5" class="col-1 mt-3 p-2" type="checkbox" :checked="menuData2.menuGroupChk[4]" @change="menuData2.menuGroupChk[4] = !menuData2.menuGroupChk[4]" />
            <span v-if="menuData2.menuGroupChk[4]" class="col-8 m-0 p-0">
              <b-form-input v-model="menuData2.menuGroupName[4]" class="border m-0 p-0 pl-1" for="idChk5"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="menuData2.menuGroupName[4]" class="border m-0 p-0 pl-2" for="idChk5"></b-form-input>
            </del>
          </div>

          <!-- menu 51 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk51" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu5Chk[0]" @change="menuData2.menu5Chk[0] = !menuData2.menu5Chk[0]" />
            <span v-if="menuData2.menu5Chk[0]">
              <b-form-input v-model="menuData2.menu5Name[0]" class="border pl-4" for="idChk51"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu5Name[0]" class="border pl-4" for="idChk51"></b-form-input>
            </del>
          </div>

          <!-- menu 52 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk52" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu5Chk[1]" @change="menuData2.menu5Chk[1] = !menuData2.menu5Chk[1]" />
            <span v-if="menuData2.menu5Chk[1]">
              <b-form-input v-model="menuData2.menu5Name[1]" class="border pl-4" for="idChk52"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu5Name[1]" class="border pl-4" for="idChk52"></b-form-input>
            </del>
          </div>

          <!-- menu 53 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk53" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu5Chk[2]" @change="menuData2.menu5Chk[2] = !menuData2.menu5Chk[2]" />
            <span v-if="menuData2.menu5Chk[2]">
              <b-form-input v-model="menuData2.menu5Name[2]" class="border pl-4" for="idChk53"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu5Name[2]" class="border pl-4" for="idChk53"></b-form-input>
            </del>
          </div>

          <!-- menu 54 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk54" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu5Chk[3]" @change="menuData2.menu5Chk[3] = !menuData2.menu5Chk[3]" />
            <span v-if="menuData2.menu5Chk[3]">
              <b-form-input v-model="menuData2.menu5Name[3]" class="border pl-4" for="idChk54"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu5Name[3]" class="border pl-4" for="idChk54"></b-form-input>
            </del>
          </div>

          <!-- menu 55 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk55" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu5Chk[4]" @change="menuData2.menu5Chk[4] = !menuData2.menu5Chk[4]" />
            <span v-if="menuData2.menu5Chk[4]">
              <b-form-input v-model="menuData2.menu5Name[4]" class="border pl-4" for="idChk55"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu5Name[4]" class="border pl-4" for="idChk55"></b-form-input>
            </del>
          </div>

          <!-- menu 56 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk56" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu5Chk[5]" @change="menuData2.menu5Chk[5] = !menuData2.menu5Chk[5]" />
            <span v-if="menuData2.menu5Chk[5]">
              <b-form-input v-model="menuData2.menu5Name[5]" class="border pl-4" for="idChk56"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu5Name[5]" class="border pl-4" for="idChk56"></b-form-input>
            </del>
          </div>
        </b-list-group>
      </div>

      <div class="col-sm-6 m-0 mt-0 p-2">
        <b-list-group>
          <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">Menu6 : {{ menuData2.menuGroupName[5] }}</b-list-group-item>

          <!-- menu 6 -->
          <div class="row m-0 p-0" style="background-color: white">
            <div class="col-3 pt-2" style="background-color: darkgray">Menu6</div>
            <input id="idChk6" class="col-1 mt-3 p-2" type="checkbox" :checked="menuData2.menuGroupChk[5]" @change="menuData2.menuGroupChk[5] = !menuData2.menuGroupChk[5]" />
            <span v-if="menuData2.menuGroupChk[5]" class="col-8 m-0 p-0">
              <b-form-input v-model="menuData2.menuGroupName[5]" class="border m-0 p-0 pl-1" for="idChk6"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="menuData2.menuGroupName[5]" class="border m-0 p-0 pl-2" for="idChk6"></b-form-input>
            </del>
          </div>

          <!-- menu 61 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk61" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu6Chk[0]" @change="menuData2.menu6Chk[0] = !menuData2.menu6Chk[0]" />
            <span v-if="menuData2.menu6Chk[0]">
              <b-form-input v-model="menuData2.menu6Name[0]" class="border pl-4" for="idChk61"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu6Name[0]" class="border pl-4" for="idChk61"></b-form-input>
            </del>
          </div>

          <!-- menu 62 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk62" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu6Chk[1]" @change="menuData2.menu6Chk[1] = !menuData2.menu6Chk[1]" />
            <span v-if="menuData2.menu6Chk[1]">
              <b-form-input v-model="menuData2.menu6Name[1]" class="border pl-4" for="idChk62"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu6Name[1]" class="border pl-4" for="idChk62"></b-form-input>
            </del>
          </div>

          <!-- menu 63 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk63" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu6Chk[2]" @change="menuData2.menu6Chk[2] = !menuData2.menu6Chk[2]" />
            <span v-if="menuData2.menu6Chk[2]">
              <b-form-input v-model="menuData2.menu6Name[2]" class="border pl-4" for="idChk63"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu6Name[2]" class="border pl-4" for="idChk63"></b-form-input>
            </del>
          </div>

          <!-- menu 64 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk64" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu6Chk[3]" @change="menuData2.menu6Chk[3] = !menuData2.menu6Chk[3]" />
            <span v-if="menuData2.menu6Chk[3]">
              <b-form-input v-model="menuData2.menu6Name[3]" class="border pl-4" for="idChk64"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu6Name[3]" class="border pl-4" for="idChk64"></b-form-input>
            </del>
          </div>

          <!-- menu 65 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk65" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu6Chk[4]" @change="menuData2.menu6Chk[4] = !menuData2.menu6Chk[4]" />
            <span v-if="menuData2.menu6Chk[4]">
              <b-form-input v-model="menuData2.menu6Name[4]" class="border pl-4" for="idChk65"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu6Name[4]" class="border pl-4" for="idChk65"></b-form-input>
            </del>
          </div>

          <!-- menu 66 -->
          <div class="form-group form-check m-0 p-0">
            <input id="idChk66" class="form-check-input ml-2 mt-3 p-2" type="checkbox" :checked="menuData2.menu6Chk[5]" @change="menuData2.menu6Chk[5] = !menuData2.menu6Chk[5]" />
            <span v-if="menuData2.menu6Chk[5]">
              <b-form-input v-model="menuData2.menu6Name[5]" class="border pl-4" for="idChk66"></b-form-input>
            </span>
            <del v-else>
              <b-form-input v-model="menuData2.menu6Name[5]" class="border pl-4" for="idChk66"></b-form-input>
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
          <!-- <p class="m-0 mt-1 p-0 text-light">なお一旦登録すると元に戻すことはできません。</p> -->
        </div>
      </div>
      <!-- <b-button @click="test1()"> DBテスト </b-button> -->
      <!-- <b-button variant="primary" class="m-0 px-1 py-0" @click="test1()">test1</b-button=> -->
    </div>
    <p>{{ myMenuSet() }}</p>
  </div>
</template>

<script>
// import { firestore } from 'firebase'
export default {
  // el: '#listGroup',
  data() {
    return {
      myMenuSetFlg: false,
      commonData: {},
      menuData: {
        // menuGroupName: [],
        // menu1Name: [],
        // menu2Name: [],
        // menu3Name: [],
        // menu4Name: [],
        // menu5Name: [],
        // menu6Name: [],
        // menuGroupChk: [],
        // menu1Chk: [],
        // menu2Chk: [],
        // menu3Chk: [],
        // menu4Chk: [],
        // menu5Chk: [],
        // menu6Chk: [],
      },

      menuData2: {
        menuGroupName: [],
        menu1Name: [],
        menu2Name: [],
        menu3Name: [],
        menu4Name: [],
        menu5Name: [],
        menu6Name: [],
        menuGroupChk: [],
        menu1Chk: [],
        menu2Chk: [],
        menu3Chk: [],
        menu4Chk: [],
        menu5Chk: [],
        menu6Chk: [],
      },

      // menuData2: {
      // headerLogo: '',
      // menuData.menu1Name[0]No: '1',
      // m1: '',
      // m11: '',
      // m12: '',
      // m13: '',
      // m14: '',
      // m15: '',
      // m16: '',
      // m2: '',
      // m21: '',
      // m22: '',
      // m23: '',
      // m24: '',
      // m25: '',
      // m26: '',
      // m3: '',
      // m31: '',
      // m32: '',
      // m33: '',
      // m34: '',
      // m35: '',
      // m36: '',
      // m4: '',
      // m41: '',
      // m42: '',
      // m43: '',
      // m44: '',
      // m45: '',
      // m46: '',
      // m5: '',
      // m51: '',
      // m52: '',
      // m53: '',
      // m54: '',
      // m55: '',
      // m56: '',
      // m6: '',
      // m61: '',
      // m62: '',
      // m63: '',
      // m64: '',
      // m65: '',
      // m66: '',
      // chkMenu1: '',
      // chkMenu11: '',
      // chkMenu12: '',
      // chkMenu13: '',
      // chkMenu14: '',
      // chkMenu15: '',
      // chkMenu16: '',
      // chkMenu2: '',
      // chkMenu21: '',
      // chkMenu22: '',
      // chkMenu23: '',
      // chkMenu24: '',
      // chkMenu25: '',
      // chkMenu26: '',
      // chkMenu3: '',
      // chkMenu31: '',
      // chkMenu32: '',
      // chkMenu33: '',
      // chkMenu34: '',
      // chkMenu35: '',
      // chkMenu36: '',
      // chkMenu4: '',
      // chkMenu41: '',
      // chkMenu42: '',
      // chkMenu43: '',
      // chkMenu44: '',
      // chkMenu45: '',
      // chkMenu46: '',
      // chkMenu5: '',
      // chkMenu51: '',
      // chkMenu52: '',
      // chkMenu53: '',
      // chkMenu54: '',
      // chkMenu55: '',
      // chkMenu56: '',
      // chkMenu6: '',
      // chkMenu61: '',
      // chkMenu62: '',
      // chkMenu63: '',
      // chkMenu64: '',
      // chkMenu65: '',
      // chkMenu66: '',
      // },
    }
  },
  // beforeDestroy() {
  // this.$nuxt.$off('selnum')
  // },
  computed: {
    dbMenus() {
      // return this.$store.getters['storeheader/orderdDbHeaders']
      return this.$store.getters['storeheader/getDbHeadersById']('menu')
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

    // test1() {
    //   console.log('test1-1 -----------------')
    //   this.dbMenus()
    // },

    toggleChk(num) {
      this.myMenuSetFlg = true

      switch (num) {
        case 1:
          // console.log('toggle-1 --- menuGroupName : ', this.menuData2.menuGroupName[0])
          // this.menuData2.menuGroupChk[0] = !this.menuData2.menuGroupChk[0]
          this.menuData2.menuGroupName[0] = this.menuData.menuGroupName[1]
          // console.log('toggle-2 --- menuGroupName : ', this.menuData2.menuGroupName[0])
          break
        case 11:
          this.menuData2.menu1Name[0].chkMenu11 = !this.menuData2.menu1Name[0].chkMenu11
          break
        case 12:
          this.menuData2.menu1Name[0].chkMenu12 = !this.menuData2.menu1Name[0].chkMenu12
          break
        case 13:
          this.menuData2.menu1Name[0].chkMenu13 = !this.menuData2.menu1Name[0].chkMenu13
          break
        case 14:
          this.menuData2.menu1Name[0].chkMenu14 = !this.menuData2.menu1Name[0].chkMenu14
          break
        case 15:
          this.menuData2.menu1Name[0].chkMenu15 = !this.menuData2.menu1Name[0].chkMenu15
          break
        case 16:
          this.menuData2.menu1Name[0].chkMenu16 = !this.menuData2.menu1Name[0].chkMenu16
          break
        case 2:
          this.menuData2.menu1Name[0].chkMenu2 = !this.menuData2.menu1Name[0].chkMenu2
          break
        case 21:
          this.menuData2.menu1Name[0].chkMenu21 = !this.menuData2.menu1Name[0].chkMenu21
          break
        case 22:
          this.menuData2.menu1Name[0].chkMenu22 = !this.menuData2.menu1Name[0].chkMenu22
          break
        case 23:
          this.menuData2.menu1Name[0].chkMenu23 = !this.menuData2.menu1Name[0].chkMenu23
          break
        case 24:
          this.menuData2.menu1Name[0].chkMenu24 = !this.menuData2.menu1Name[0].chkMenu24
          break
        case 25:
          this.menuData2.menu1Name[0].chkMenu25 = !this.menuData2.menu1Name[0].chkMenu25
          break
        case 26:
          this.menuData2.menu1Name[0].chkMenu26 = !this.menuData2.menu1Name[0].chkMenu26
          break
        case 3:
          this.menuData2.menu1Name[0].chkMenu3 = !this.menuData2.menu1Name[0].chkMenu3
          break
        case 31:
          this.menuData2.menu1Name[0].chkMenu31 = !this.menuData2.menu1Name[0].chkMenu31
          break
        case 32:
          this.menuData2.menu1Name[0].chkMenu32 = !this.menuData2.menu1Name[0].chkMenu32
          break
        case 33:
          this.menuData2.menu1Name[0].chkMenu33 = !this.menuData2.menu1Name[0].chkMenu33
          break
        case 34:
          this.menuData2.menu1Name[0].chkMenu34 = !this.menuData2.menu1Name[0].chkMenu34
          break
        case 35:
          this.menuData2.menu1Name[0].chkMenu35 = !this.menuData2.menu1Name[0].chkMenu35
          break
        case 36:
          this.menuData2.menu1Name[0].chkMenu36 = !this.menuData2.menu1Name[0].chkMenu36
          break
        case 4:
          this.menuData2.menu1Name[0].chkMenu4 = !this.menuData2.menu1Name[0].chkMenu4
          break
        case 41:
          this.menuData2.menu1Name[0].chkMenu41 = !this.menuData2.menu1Name[0].chkMenu41
          break
        case 42:
          this.menuData2.menu1Name[0].chkMenu42 = !this.menuData2.menu1Name[0].chkMenu42
          break
        case 43:
          this.menuData2.menu1Name[0].chkMenu43 = !this.menuData2.menu1Name[0].chkMenu43
          break
        case 44:
          this.menuData2.menu1Name[0].chkMenu44 = !this.menuData2.menu1Name[0].chkMenu44
          break
        case 45:
          this.menuData2.menu1Name[0].chkMenu45 = !this.menuData2.menu1Name[0].chkMenu45
          break
        case 46:
          this.menuData2.menu1Name[0].chkMenu46 = !this.menuData2.menu1Name[0].chkMenu46
          break
        case 5:
          this.menuData2.menu1Name[0].chkMenu5 = !this.menuData2.menu1Name[0].chkMenu5
          break
        case 51:
          this.menuData2.menu1Name[0].chkMenu51 = !this.menuData2.menu1Name[0].chkMenu51
          break
        case 52:
          this.menuData2.menu1Name[0].chkMenu52 = !this.menuData2.menu1Name[0].chkMenu52
          break
        case 53:
          this.menuData2.menu1Name[0].chkMenu53 = !this.menuData2.menu1Name[0].chkMenu53
          break
        case 54:
          this.menuData2.menu1Name[0].chkMenu54 = !this.menuData2.menu1Name[0].chkMenu54
          break
        case 55:
          this.menuData2.menu1Name[0].chkMenu55 = !this.menuData2.menu1Name[0].chkMenu55
          break
        case 56:
          this.menuData2.menu1Name[0].chkMenu56 = !this.menuData2.menu1Name[0].chkMenu56
          break
        case 6:
          this.menuData2.menu1Name[0].chkMenu6 = !this.menuData2.menu1Name[0].chkMenu6
          break
        case 61:
          this.menuData2.menu1Name[0].chkMenu61 = !this.menuData2.menu1Name[0].chkMenu61
          break
        case 62:
          this.menuData2.menu1Name[0].chkMenu62 = !this.menuData2.menu1Name[0].chkMenu62
          break
        case 63:
          this.menuData2.menu1Name[0].chkMenu63 = !this.menuData2.menu1Name[0].chkMenu63
          break
        case 64:
          this.menuData2.menu1Name[0].chkMenu64 = !this.menuData2.menu1Name[0].chkMenu64
          break
        case 65:
          this.menuData2.menu1Name[0].chkMenu65 = !this.menuData2.menu1Name[0].chkMenu65
          break
        case 66:
          this.menuData2.menu1Name[0].chkMenu66 = !this.menuData2.menu1Name[0].chkMenu66
          break
        default:
          // console.log('---- error --- num in toggleChk(): ' + num)
          break
      }

      // console.log('------- myMenuSetFlg in toggleChk(): ', this.myMenuSetFlg)
    },

    myReg() {
      // this.$store.dispatch('storeheader/update', { id: 'dbHeaderId1', menuData.menu1Name[0]: this.menuData2.menu1Name[0] }).then(() => {
      // 下記の storeheader は store/storeheader.js のファイル名

      // 以下の２行： 初期デプロイ後 add , Firebabase(Database)に項目が作成されたら update に戻す
      // this.$store.dispatch('storeheader/add', this.menuData2.menu1Name[0]).then(() => {
      // this.$store.dispatch('storeheader/update', this.menuData2.menu1Name[0]).then(() => {
      // console.log('myReg-1 --- menuData2 --- : ', this.menuData2)
      this.$store.dispatch('storeheader/update', { id: 'menu', menuData: this.menuData2 }).then(() => {
        this.toastFileUpdate('登録', '登録しました。')
        // this.myMenuSetFlg = false
        // this.menuData.menu1Name[0]Set()
        // console.log('+++++++++++++++++++++++++++++++++')
        // console.log('menuData.menu1Name[0].chkNemu1 in myReg(): ' + this.menuData.menu1Name[0].chkMenu1)
        // console.log('menuData2.menu1Name[0].chkNemu1 in myReg(): ' + this.menuData2.menu1Name[0].chkMenu1)
      })
      // console.log('---------------------------------')
      // console.log('menuData.menu1Name[0].chkNemu1 in myReg(): ' + this.menuData.menu1Name[0].chkMenu1)
      // console.log('menuData2.menu1Name[0].chkNemu1 in myReg(): ' + this.menuData2.menu1Name[0].chkMenu1)
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
    myMenuSet() {
      // console.log('テスト in menuData.menu1Name[0]Set(): ' + this.menuData2.menu1Name[0].m1)
      if (this.myMenuSetFlg === false) {
        try {
          // firestore のデータを menuData.menu1Name[0] にセット
          // this.menuData.menu1Name[0] = this.dbMenus[0].menuData.menu1Name[0]
          if (typeof this.dbMenus !== 'undefined') {
            this.menuData = this.dbMenus.menuData
            this.menuData2 = JSON.parse(JSON.stringify(this.dbMenus.menuData))
            // console.log('myMenuSet-1 --- menuData2: ', this.menuData2)
            this.myMenuSetFlg = true
          } else {
            // console.log('myMenuSet-2 --- dbMenus: ', this.dbMenus)
            // this.menuData2 = JSON.parse(JSON.stringify(this.dbMenus.menuData))
          }

          // -------- kari copy end
          // this.menuData.menu1Name[0] = this.dbMenus.menuData

          // // menuData.menu1Name[0] のデータを menuData2.menu1Name[0](=入力用) にセット
          // this.menuData2.menuGroupName[0] = this.menuData.menu1Name[0].m1
          // this.menuData2.menuGroupName[1] = this.menuData.menu1Name[0].m2
          // this.menuData2.menuGroupName[2] = this.menuData.menu1Name[0].m3
          // this.menuData2.menuGroupName[3] = this.menuData.menu1Name[0].m4
          // this.menuData2.menuGroupName[4] = this.menuData.menu1Name[0].m5
          // this.menuData2.menuGroupName[5] = this.menuData.menu1Name[0].m6

          // this.menuData2.menu1Name[0] = this.menuData.menu1Name[0].m11
          // this.menuData2.menu1Name[1] = this.menuData.menu1Name[0].m12
          // this.menuData2.menu1Name[2] = this.menuData.menu1Name[0].m13
          // this.menuData2.menu1Name[3] = this.menuData.menu1Name[0].m14
          // this.menuData2.menu1Name[4] = this.menuData.menu1Name[0].m15
          // this.menuData2.menu1Name[5] = this.menuData.menu1Name[0].m16

          // this.menuData2.menu2Name[0] = this.menuData.menu1Name[0].m21
          // this.menuData2.menu2Name[1] = this.menuData.menu1Name[0].m22
          // this.menuData2.menu2Name[2] = this.menuData.menu1Name[0].m23
          // this.menuData2.menu2Name[3] = this.menuData.menu1Name[0].m24
          // this.menuData2.menu2Name[4] = this.menuData.menu1Name[0].m25
          // this.menuData2.menu2Name[5] = this.menuData.menu1Name[0].m26

          // this.menuData2.menu3Name[0] = this.menuData.menu1Name[0].m31
          // this.menuData2.menu3Name[1] = this.menuData.menu1Name[0].m32
          // this.menuData2.menu3Name[2] = this.menuData.menu1Name[0].m33
          // this.menuData2.menu3Name[3] = this.menuData.menu1Name[0].m34
          // this.menuData2.menu3Name[4] = this.menuData.menu1Name[0].m35
          // this.menuData2.menu3Name[5] = this.menuData.menu1Name[0].m36

          // this.menuData2.menu4Name[0] = this.menuData.menu1Name[0].m41
          // this.menuData2.menu4Name[1] = this.menuData.menu1Name[0].m42
          // this.menuData2.menu4Name[2] = this.menuData.menu1Name[0].m43
          // this.menuData2.menu4Name[3] = this.menuData.menu1Name[0].m44
          // this.menuData2.menu4Name[4] = this.menuData.menu1Name[0].m45
          // this.menuData2.menu4Name[5] = this.menuData.menu1Name[0].m46

          // this.menuData2.menu5Name[0] = this.menuData.menu1Name[0].m51
          // this.menuData2.menu5Name[1] = this.menuData.menu1Name[0].m52
          // this.menuData2.menu5Name[2] = this.menuData.menu1Name[0].m53
          // this.menuData2.menu5Name[3] = this.menuData.menu1Name[0].m54
          // this.menuData2.menu5Name[4] = this.menuData.menu1Name[0].m55
          // this.menuData2.menu5Name[5] = this.menuData.menu1Name[0].m56

          // this.menuData2.menu6Name[0] = this.menuData.menu1Name[0].m61
          // this.menuData2.menu6Name[1] = this.menuData.menu1Name[0].m62
          // this.menuData2.menu6Name[2] = this.menuData.menu1Name[0].m63
          // this.menuData2.menu6Name[3] = this.menuData.menu1Name[0].m64
          // this.menuData2.menu6Name[4] = this.menuData.menu1Name[0].m65
          // this.menuData2.menu6Name[5] = this.menuData.menu1Name[0].m66

          // this.menuData2.menuGroupChk[0] = false
          // this.menuData2.menuGroupChk[1] = false
          // this.menuData2.menuGroupChk[2] = false
          // this.menuData2.menuGroupChk[3] = false
          // this.menuData2.menuGroupChk[4] = false
          // this.menuData2.menuGroupChk[5] = false

          // this.menuData2.menu1Chk[0] = false
          // this.menuData2.menu1Chk[1] = false
          // this.menuData2.menu1Chk[2] = false
          // this.menuData2.menu1Chk[3] = false
          // this.menuData2.menu1Chk[4] = false
          // this.menuData2.menu1Chk[5] = false

          // this.menuData2.menu2Chk[0] = false
          // this.menuData2.menu2Chk[1] = false
          // this.menuData2.menu2Chk[2] = false
          // this.menuData2.menu2Chk[3] = false
          // this.menuData2.menu2Chk[4] = false
          // this.menuData2.menu2Chk[5] = false

          // this.menuData2.menu3Chk[0] = false
          // this.menuData2.menu3Chk[1] = false
          // this.menuData2.menu3Chk[2] = false
          // this.menuData2.menu3Chk[3] = false
          // this.menuData2.menu3Chk[4] = false
          // this.menuData2.menu3Chk[5] = false

          // this.menuData2.menu4Chk[0] = false
          // this.menuData2.menu4Chk[1] = false
          // this.menuData2.menu4Chk[2] = false
          // this.menuData2.menu4Chk[3] = false
          // this.menuData2.menu4Chk[4] = false
          // this.menuData2.menu4Chk[5] = false

          // this.menuData2.menu5Chk[0] = false
          // this.menuData2.menu5Chk[1] = false
          // this.menuData2.menu5Chk[2] = false
          // this.menuData2.menu5Chk[3] = false
          // this.menuData2.menu5Chk[4] = false
          // this.menuData2.menu5Chk[5] = false

          // this.menuData2.menu6Chk[0] = false
          // this.menuData2.menu6Chk[1] = false
          // this.menuData2.menu6Chk[2] = false
          // this.menuData2.menu6Chk[3] = false
          // this.menuData2.menu6Chk[4] = false
          // this.menuData2.menu6Chk[5] = false

          // -------- kari copy end

          // this.menuData2.menu1Name[0].id = this.menuData.menu1Name[0].id

          // this.menuData2.menuGroupName[0] = this.menuData.menuGroupName[0]
          // this.menuData2.menuGroupChk[0] = this.menuData.menuGroupChk[0]
          // this.menuData2.menu1Name[0].m11 = this.menuData.menu1Name[0].m11
          // this.menuData2.menu1Name[0].m12 = this.menuData.menu1Name[0].m12
          // this.menuData2.menu1Name[0].m13 = this.menuData.menu1Name[0].m13
          // this.menuData2.menu1Name[0].m14 = this.menuData.menu1Name[0].m14
          // this.menuData2.menu1Name[0].m15 = this.menuData.menu1Name[0].m15
          // this.menuData2.menu1Name[0].m16 = this.menuData.menu1Name[0].m16
          // this.menuData2.menu1Name[0].m2 = this.menuData.menu1Name[0].m2
          // this.menuData2.menu1Name[0].m21 = this.menuData.menu1Name[0].m21
          // this.menuData2.menu1Name[0].m22 = this.menuData.menu1Name[0].m22
          // this.menuData2.menu1Name[0].m23 = this.menuData.menu1Name[0].m23
          // this.menuData2.menu1Name[0].m24 = this.menuData.menu1Name[0].m24
          // this.menuData2.menu1Name[0].m25 = this.menuData.menu1Name[0].m25
          // this.menuData2.menu1Name[0].m26 = this.menuData.menu1Name[0].m26
          // this.menuData2.menu1Name[0].m3 = this.menuData.menu1Name[0].m3
          // this.menuData2.menu1Name[0].m31 = this.menuData.menu1Name[0].m31
          // this.menuData2.menu1Name[0].m32 = this.menuData.menu1Name[0].m32
          // this.menuData2.menu1Name[0].m33 = this.menuData.menu1Name[0].m33
          // this.menuData2.menu1Name[0].m34 = this.menuData.menu1Name[0].m34
          // this.menuData2.menu1Name[0].m35 = this.menuData.menu1Name[0].m35
          // this.menuData2.menu1Name[0].m36 = this.menuData.menu1Name[0].m36
          // this.menuData2.menu1Name[0].m4 = this.menuData.menu1Name[0].m4
          // this.menuData2.menu1Name[0].m41 = this.menuData.menu1Name[0].m41
          // this.menuData2.menu1Name[0].m42 = this.menuData.menu1Name[0].m42
          // this.menuData2.menu1Name[0].m43 = this.menuData.menu1Name[0].m43
          // this.menuData2.menu1Name[0].m44 = this.menuData.menu1Name[0].m44
          // this.menuData2.menu1Name[0].m45 = this.menuData.menu1Name[0].m45
          // this.menuData2.menu1Name[0].m46 = this.menuData.menu1Name[0].m46
          // this.menuData2.menu1Name[0].m5 = this.menuData.menu1Name[0].m5
          // this.menuData2.menu1Name[0].m51 = this.menuData.menu1Name[0].m51
          // this.menuData2.menu1Name[0].m52 = this.menuData.menu1Name[0].m52
          // this.menuData2.menu1Name[0].m53 = this.menuData.menu1Name[0].m53
          // this.menuData2.menu1Name[0].m54 = this.menuData.menu1Name[0].m54
          // this.menuData2.menu1Name[0].m55 = this.menuData.menu1Name[0].m55
          // this.menuData2.menu1Name[0].m56 = this.menuData.menu1Name[0].m56
          // this.menuData2.menu1Name[0].m6 = this.menuData.menu1Name[0].m6
          // this.menuData2.menu1Name[0].m61 = this.menuData.menu1Name[0].m61
          // this.menuData2.menu1Name[0].m62 = this.menuData.menu1Name[0].m62
          // this.menuData2.menu1Name[0].m63 = this.menuData.menu1Name[0].m63
          // this.menuData2.menu1Name[0].m64 = this.menuData.menu1Name[0].m64
          // this.menuData2.menu1Name[0].m65 = this.menuData.menu1Name[0].m65
          // this.menuData2.menu1Name[0].m66 = this.menuData.menu1Name[0].m66
          // // メニュー 1
          // this.menuData2.menu1Name[0].chkMenu1 = this.menuData.menu1Name[0].chkMenu1
          // this.menuData2.menu1Name[0].chkMenu11 = this.menuData.menu1Name[0].chkMenu11
          // this.menuData2.menu1Name[0].chkMenu12 = this.menuData.menu1Name[0].chkMenu12
          // this.menuData2.menu1Name[0].chkMenu13 = this.menuData.menu1Name[0].chkMenu13
          // this.menuData2.menu1Name[0].chkMenu14 = this.menuData.menu1Name[0].chkMenu14
          // this.menuData2.menu1Name[0].chkMenu15 = this.menuData.menu1Name[0].chkMenu15
          // this.menuData2.menu1Name[0].chkMenu16 = this.menuData.menu1Name[0].chkMenu16
          // // メニュー 2
          // this.menuData2.menu1Name[0].chkMenu2 = this.menuData.menu1Name[0].chkMenu2
          // this.menuData2.menu1Name[0].chkMenu21 = this.menuData.menu1Name[0].chkMenu21
          // this.menuData2.menu1Name[0].chkMenu22 = this.menuData.menu1Name[0].chkMenu22
          // this.menuData2.menu1Name[0].chkMenu23 = this.menuData.menu1Name[0].chkMenu23
          // this.menuData2.menu1Name[0].chkMenu24 = this.menuData.menu1Name[0].chkMenu24
          // this.menuData2.menu1Name[0].chkMenu25 = this.menuData.menu1Name[0].chkMenu25
          // this.menuData2.menu1Name[0].chkMenu26 = this.menuData.menu1Name[0].chkMenu26
          // // メニュー 3
          // this.menuData2.menu1Name[0].chkMenu3 = this.menuData.menu1Name[0].chkMenu3
          // this.menuData2.menu1Name[0].chkMenu31 = this.menuData.menu1Name[0].chkMenu31
          // this.menuData2.menu1Name[0].chkMenu32 = this.menuData.menu1Name[0].chkMenu32
          // this.menuData2.menu1Name[0].chkMenu33 = this.menuData.menu1Name[0].chkMenu33
          // this.menuData2.menu1Name[0].chkMenu34 = this.menuData.menu1Name[0].chkMenu34
          // this.menuData2.menu1Name[0].chkMenu35 = this.menuData.menu1Name[0].chkMenu35
          // this.menuData2.menu1Name[0].chkMenu36 = this.menuData.menu1Name[0].chkMenu36
          // // メニュー 4
          // this.menuData2.menu1Name[0].chkMenu4 = this.menuData.menu1Name[0].chkMenu4
          // this.menuData2.menu1Name[0].chkMenu41 = this.menuData.menu1Name[0].chkMenu41
          // this.menuData2.menu1Name[0].chkMenu42 = this.menuData.menu1Name[0].chkMenu42
          // this.menuData2.menu1Name[0].chkMenu43 = this.menuData.menu1Name[0].chkMenu43
          // this.menuData2.menu1Name[0].chkMenu44 = this.menuData.menu1Name[0].chkMenu44
          // this.menuData2.menu1Name[0].chkMenu45 = this.menuData.menu1Name[0].chkMenu45
          // this.menuData2.menu1Name[0].chkMenu46 = this.menuData.menu1Name[0].chkMenu46
          // // メニュー 5
          // this.menuData2.menu1Name[0].chkMenu5 = this.menuData.menu1Name[0].chkMenu5
          // this.menuData2.menu1Name[0].chkMenu51 = this.menuData.menu1Name[0].chkMenu51
          // this.menuData2.menu1Name[0].chkMenu52 = this.menuData.menu1Name[0].chkMenu52
          // this.menuData2.menu1Name[0].chkMenu53 = this.menuData.menu1Name[0].chkMenu53
          // this.menuData2.menu1Name[0].chkMenu54 = this.menuData.menu1Name[0].chkMenu54
          // this.menuData2.menu1Name[0].chkMenu55 = this.menuData.menu1Name[0].chkMenu55
          // this.menuData2.menu1Name[0].chkMenu56 = this.menuData.menu1Name[0].chkMenu56
          // // メニュー 6
          // this.menuData2.menu1Name[0].chkMenu6 = this.menuData.menu1Name[0].chkMenu6
          // this.menuData2.menu1Name[0].chkMenu61 = this.menuData.menu1Name[0].chkMenu61
          // this.menuData2.menu1Name[0].chkMenu62 = this.menuData.menu1Name[0].chkMenu62
          // this.menuData2.menu1Name[0].chkMenu63 = this.menuData.menu1Name[0].chkMenu63
          // this.menuData2.menu1Name[0].chkMenu64 = this.menuData.menu1Name[0].chkMenu64
          // this.menuData2.menu1Name[0].chkMenu65 = this.menuData.menu1Name[0].chkMenu65
          // this.menuData2.menu1Name[0].chkMenu66 = this.menuData.menu1Name[0].chkMenu66

          // this.myMenuSetFlg = true
        } catch (error) {
          // alert('テスト in myMenuSet(): ' + error)
          // console.log('テスト in myMenuSet(): ' + error)
        }
      } else {
        // console.log('myMenuSet-3 --- myMenuSetFlg: ', this.myMenuSetFlg)
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
