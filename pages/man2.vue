<template>
  <div class="container-fluid row m-0 m-1 p-1 bg-dark">
    <div class="col-12 m-0 p-0">
      <h3 class="text-light text-center m-0 p-0">管理： Side Menu 設定</h3>
      <p class="text-light text-center m-0 p-0">メニューの表示/非表示、および名称を変更できます。</p>
    </div>
    <hr class="col-12 m-0 my-2 p-0 py-1" color="#000000" />

    <!-- ================= Side Menu === -->
    <div class="col-12 m-0 mt-0 p-2">
      <b-list-group class="p-0 mt-1">
        <!-- <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">Menu1 : {{ myData.v1 }}</b-list-group-item> -->
        <div class="row m-0 p-0 text-center text-light bg-secondary" style="background-color: white">
          <div class="col-6 p-0 align-self-center">Side Menu を利用する/しない</div>
          <!-- <div class="col-1 p-0 align-self-center border-left" style="font-size:12px;">表示/<br />非表示</div> -->

          <div class="col-6 d-flex justify-content-center m-0 p-1 border-left">
            <div class="p-0 align-self-center">
              <div class="p-0">Menu名</div>
            </div>
          </div>

          <!-- <div class="col-5 d-flex justify-content-center m-0 p-1 border-left ">
              <div class="p-0 align-self-center">
                <div class="p-0 ">Side Menu</div>
              </div>
            </div> -->
          <!-- <div class="col-5 p-0 align-self-center border-left">動画URL</div> -->
        </div>

        <!-- Side menu 利用する／しない -->
        <div class="row m-0 p-0 border" style="background-color: white">
          <!-- <div class="col-2 p-0 pt-2 pl-1" style="background-color:darkgray;">Menu1</div> -->
          <input id="idChk" class="col-6 mt-3 p-2" type="checkbox" :checked="myData2.chkSideMenu" @change="toggleChk(0)" />
          <span v-if="myData2.chkSideMenu" class="col-6 m-0 p-0">
            <b-form-input v-model="myData2.sideMenu" class="border m-0 p-0 pl-1" for="idChk"></b-form-input>
          </span>
          <del v-else class="col-6 m-0 p-0">
            <b-form-input v-model="myData2.sideMenu" class="border m-0 p-0 pl-1" for="idChk"></b-form-input>
          </del>
          <!-- ------------------ -->
        </div>
      </b-list-group>
    </div>
    <!-- ------------------ -->
    <div v-show="myData2.chkSideMenu" class="row m-0 p-0">
      <!-- ================= PR動画 === -->
      <div class="col-12 m-0 mt-0 p-2">
        <b-list-group class="p-0 mt-1">
          <!-- <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">Menu1 : {{ myData.v1 }}</b-list-group-item> -->
          <div class="row m-0 p-0 text-center text-light bg-secondary" style="background-color: white">
            <div class="col-2 p-0 align-self-center">Menu</div>
            <!-- <div class="col-1 p-0 align-self-center border-left" style="font-size:12px;">表示/非表示</div> -->
            <div class="col-1 p-0 align-self-center border-left" style="font-size: 12px">表示/<br />非表示</div>

            <div class="col-4 d-flex justify-content-center m-0 p-1 border-left">
              <div class="p-0 align-self-center">
                <div class="p-0">Menu名</div>
              </div>
            </div>

            <div class="col-5 d-flex justify-content-center m-0 p-1 border-left">
              <div class="p-0 align-self-center">
                <div class="p-0">動画URL</div>
              </div>
            </div>
            <!-- <div class="col-5 p-0 align-self-center border-left">動画URL</div> -->
          </div>

          <!-- menu 1 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Menu1</div>
            <input id="idChk1" class="col-1 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu1" @change="toggleChk(1)" />
            <span v-if="myData2.chkMenu1" class="col-9 m-0 p-0">
              <b-form-input v-model="myData2.v1" class="border m-0 p-0 pl-1" for="idChk1"></b-form-input>
            </span>
            <del v-else class="col-9 m-0 p-0">
              <b-form-input v-model="myData2.v1" class="border m-0 p-0 pl-1" for="idChk1"></b-form-input>
            </del>
          </div>

          <!-- menu 11 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Menu11</div>
            <input id="idChk11" class="col-1 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu11" @change="toggleChk(11)" />
            <span v-if="myData2.chkMenu11" class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.v11" class="border m-0 p-0 pl-1" for="idChk11"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.v11" class="border m-0 p-0 pl-1" for="idChk11"></b-form-input>
            </del>
            <b-form-input v-model="myData2.v11a" class="col-5 border m-0 p-0 pl-1" for="idChk11"></b-form-input>
          </div>

          <!-- menu 12 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Menu12</div>
            <input id="idChk12" class="col-1 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu12" @change="toggleChk(12)" />
            <span v-if="myData2.chkMenu12" class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.v12" class="border m-0 p-0 pl-1" for="idChk12"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.v12" class="border m-0 p-0 pl-1" for="idChk12"></b-form-input>
            </del>
            <b-form-input v-model="myData2.v12a" class="col-5 border m-0 p-0 pl-1" for="idChk12"></b-form-input>
          </div>

          <!-- menu 13 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Menu13</div>
            <input id="idChk13" class="col-1 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu13" @change="toggleChk(13)" />
            <span v-if="myData2.chkMenu13" class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.v13" class="border m-0 p-0 pl-1" for="idChk13"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.v13" class="border m-0 p-0 pl-1" for="idChk13"></b-form-input>
            </del>
            <b-form-input v-model="myData2.v13a" class="col-5 border m-0 p-0 pl-1" for="idChk13"></b-form-input>
          </div>

          <!-- menu 14 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Menu14</div>
            <input id="idChk14" class="col-1 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu14" @change="toggleChk(14)" />
            <span v-if="myData2.chkMenu14" class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.v14" class="border m-0 p-0 pl-1" for="idChk14"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.v14" class="border m-0 p-0 pl-1" for="idChk14"></b-form-input>
            </del>
            <b-form-input v-model="myData2.v14a" class="col-5 border m-0 p-0 pl-1" for="idChk14"></b-form-input>
          </div>

          <!-- menu 15 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Menu15</div>
            <input id="idChk15" class="col-1 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu15" @change="toggleChk(15)" />
            <span v-if="myData2.chkMenu15" class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.v15" class="border m-0 p-0 pl-1" for="idChk15"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.v15" class="border m-0 p-0 pl-1" for="idChk15"></b-form-input>
            </del>
            <b-form-input v-model="myData2.v15a" class="col-5 border m-0 p-0 pl-1" for="idChk15"></b-form-input>
          </div>
          <!-- ------------------ -->
        </b-list-group>
      </div>
      <!-- <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 px-1 py-0" @click="test1()">test1</b-button> -->

      <!-- ================= リンク集 === -->
      <div class="col-12 m-0 mt-0 p-2">
        <b-list-group class="p-0 mt-1">
          <!-- <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">Menu2 : {{ myData.l1 }}</b-list-group-item> -->
          <div class="row m-0 p-0 text-center text-light bg-secondary" style="background-color: white">
            <div class="col-2 p-0 align-self-center">Menu</div>
            <div class="col-1 p-0 align-self-center border-left" style="font-size: 12px">表示/<br />非表示</div>

            <div class="col-4 d-flex justify-content-center m-0 p-1 border-left">
              <div class="p-0 align-self-center">
                <div class="p-0">Menu名</div>
              </div>
            </div>

            <div class="col-5 d-flex justify-content-center m-0 p-1 border-left">
              <div class="p-0 align-self-center">
                <div class="p-0">リンク先URL</div>
              </div>
            </div>
            <!-- <div class="col-5 p-0 align-self-center border-left">リンク先URL</div> -->
          </div>

          <!-- menu 2 -->
          <div class="row m-0 p-0" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Menu2</div>
            <input id="idChk2" class="col-1 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu2" @change="toggleChk(2)" />
            <span v-if="myData2.chkMenu2" class="col-9 m-0 p-0">
              <b-form-input v-model="myData2.l1" class="border m-0 p-0 pl-1" for="idChk2"></b-form-input>
            </span>
            <del v-else class="col-9 m-0 p-0">
              <b-form-input v-model="myData2.l1" class="border m-0 p-0 pl-1" for="idChk2"></b-form-input>
            </del>
          </div>

          <!-- menu 21 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Menu21</div>
            <input id="idChk21" class="col-1 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu21" @change="toggleChk(21)" />
            <span v-if="myData2.chkMenu21" class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.l11" class="border m-0 p-0 pl-1" for="idChk21"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.l11" class="border m-0 p-0 pl-1" for="idChk21"></b-form-input>
            </del>
            <b-form-input v-model="myData2.l11a" class="col-5 border m-0 p-0 pl-1" for="idChk21"></b-form-input>
          </div>
          <!-- menu 22 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Menu22</div>
            <input id="idChk22" class="col-1 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu22" @change="toggleChk(22)" />
            <span v-if="myData2.chkMenu22" class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.l12" class="border m-0 p-0 pl-1" for="idChk22"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.l12" class="border m-0 p-0 pl-1" for="idChk22"></b-form-input>
            </del>
            <b-form-input v-model="myData2.l12a" class="col-5 border m-0 p-0 pl-1" for="idChk22"></b-form-input>
          </div>
          <!-- menu 23 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Menu23</div>
            <input id="idChk23" class="col-1 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu23" @change="toggleChk(23)" />
            <span v-if="myData2.chkMenu23" class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.l13" class="border m-0 p-0 pl-1" for="idChk23"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.l13" class="border m-0 p-0 pl-1" for="idChk23"></b-form-input>
            </del>
            <b-form-input v-model="myData2.l13a" class="col-5 border m-0 p-0 pl-1" for="idChk23"></b-form-input>
          </div>
          <!-- menu 24 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Menu24</div>
            <input id="idChk24" class="col-1 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu24" @change="toggleChk(24)" />
            <span v-if="myData2.chkMenu24" class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.l14" class="border m-0 p-0 pl-1" for="idChk24"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.l14" class="border m-0 p-0 pl-1" for="idChk24"></b-form-input>
            </del>
            <b-form-input v-model="myData2.l14a" class="col-5 border m-0 p-0 pl-1" for="idChk24"></b-form-input>
          </div>
          <!-- menu 25 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Menu25</div>
            <input id="idChk25" class="col-1 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu25" @change="toggleChk(25)" />
            <span v-if="myData2.chkMenu25" class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.l15" class="border m-0 p-0 pl-1" for="idChk25"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.l15" class="border m-0 p-0 pl-1" for="idChk25"></b-form-input>
            </del>
            <b-form-input v-model="myData2.l15a" class="col-5 border m-0 p-0 pl-1" for="idChk25"></b-form-input>
          </div>
          <!-- menu 25 end -->
        </b-list-group>
      </div>

      <!-- ================= アクセスマップ === -->
      <div class="col-12 m-0 mt-0 p-2">
        <b-list-group class="p-0 mt-1">
          <div class="row m-0 p-0 text-center text-light bg-secondary" style="background-color: white">
            <div class="col-2 p-0 align-self-center">Menu</div>
            <div class="col-1 p-0 align-self-center border-left" style="font-size: 12px">表示/<br />非表示</div>

            <div class="col-4 d-flex justify-content-center m-0 p-1 border-left">
              <div class="p-0 align-self-center">
                <div class="p-0">Menu名</div>
              </div>
            </div>

            <div class="col-5 d-flex justify-content-center m-0 p-1 border-left">
              <div class="p-0 align-self-center">
                <div class="p-0">アクセスマップURL</div>
              </div>
            </div>
            <!-- <div class="col-5 p-0 align-self-center border-left">アクセスマップURL</div> -->
          </div>

          <!-- menu 3 -->
          <div class="row m-0 p-0" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Menu3</div>
            <input id="idChk3" class="col-1 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu3" @change="toggleChk(3)" />
            <span v-if="myData2.chkMenu3" class="col-9 m-0 p-0">
              <b-form-input v-model="myData2.m1" class="border m-0 p-0 pl-1" for="idChk3"></b-form-input>
            </span>
            <del v-else class="col-9 m-0 p-0">
              <b-form-input v-model="myData2.m1" class="border m-0 p-0 pl-1" for="idChk3"></b-form-input>
            </del>
          </div>

          <!-- menu 31 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Menu31</div>
            <input id="idChk31" class="col-1 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu31" @change="toggleChk(31)" />
            <span v-if="myData2.chkMenu31" class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.m11" class="border m-0 p-0 pl-1" for="idChk31"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.m11" class="border m-0 p-0 pl-1" for="idChk31"></b-form-input>
            </del>
            <b-form-input v-model="myData2.m11a" class="col-5 border m-0 p-0 pl-1" for="idChk31"></b-form-input>
          </div>
          <!-- menu 32 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Menu32</div>
            <input id="idChk32" class="col-1 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu32" @change="toggleChk(32)" />
            <span v-if="myData2.chkMenu32" class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.m12" class="border m-0 p-0 pl-1" for="idChk32"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.m12" class="border m-0 p-0 pl-1" for="idChk32"></b-form-input>
            </del>
            <b-form-input v-model="myData2.m12a" class="col-5 border m-0 p-0 pl-1" for="idChk32"></b-form-input>
          </div>
          <!-- menu 33 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Menu33</div>
            <input id="idChk33" class="col-1 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu33" @change="toggleChk(33)" />
            <span v-if="myData2.chkMenu33" class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.m13" class="border m-0 p-0 pl-1" for="idChk33"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.m13" class="border m-0 p-0 pl-1" for="idChk33"></b-form-input>
            </del>
            <b-form-input v-model="myData2.m13a" class="col-5 border m-0 p-0 pl-1" for="idChk33"></b-form-input>
          </div>
          <!-- menu 34 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Menu34</div>
            <input id="idChk34" class="col-1 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu34" @change="toggleChk(34)" />
            <span v-if="myData2.chkMenu34" class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.m14" class="border m-0 p-0 pl-1" for="idChk34"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.m14" class="border m-0 p-0 pl-1" for="idChk34"></b-form-input>
            </del>
            <b-form-input v-model="myData2.m14a" class="col-5 border m-0 p-0 pl-1" for="idChk34"></b-form-input>
          </div>
          <!-- menu 35 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Menu35</div>
            <input id="idChk35" class="col-1 mt-3 p-2" type="checkbox" :checked="myData2.chkMenu35" @change="toggleChk(35)" />
            <span v-if="myData2.chkMenu35" class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.m15" class="border m-0 p-0 pl-1" for="idChk35"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="myData2.m15" class="border m-0 p-0 pl-1" for="idChk35"></b-form-input>
            </del>
            <b-form-input v-model="myData2.m15a" class="col-5 border m-0 p-0 pl-1" for="idChk35"></b-form-input>
          </div>
          <!-- menu 35 end -->
        </b-list-group>
      </div>
    </div>
    <!-- v-show のend (サイドメニュー全体の表示／非表示) -->

    <hr class="col-12 m-0 my-2 p-0" color="#000000" />
    <b-button :size="commonData.selectedBtnSize" class="mx-1" variant="primary" @click="myReg()">登録</b-button>
    <b-button :size="commonData.selectedBtnSize" class="mx-1" @click="myUndo()">登録取消</b-button>
    <!-- <b-button :size="commonData.selectedBtnSize" class="mx-1" @click="myTest()">テストLog</b-button> -->
    <p class="text-light mt-2">「登録取消」は登録前に戻します。なお一旦登録すると元に戻すことはできません。</p>

    <hr class="col-12 m-0 my-2 p-0" color="#000000" />
    <div v-show="myData2.chkSideMenu" class="row m-0 p-0">
      <div class="row m-0 p-0">
        <div class="col-7 m-0 p-0">
          <h5 class="text-light mt-2">アクセスマップURLの取得方法：</h5>
          <span class="text-light m-0 ml-2">①ブラウザでく</span>
          <a href="https://www.google.co.jp/maps/" target="_blank" class="m-0">Geegle map</a>
          <span class="text-light m-0 ml-2">を開く</span>
          <p class="text-light m-0 ml-2">②住所を入力して検索する</p>
          <p class="text-light m-0 ml-2">③「共有」をクリック（右図参照）</p>
          <p class="text-light m-0 ml-2">④「リンクをコピー」をクリック（右図参照）</p>
          <p class="text-light m-0 ml-2">⑤上の「アクセスマップURL」へ貼付け</p>
          <p class="text-light m-0 ml-2">⑥「登録」をクリック</p>
          <!-- <p class="text-light m-0 ml-2">④「地図を埋め込む」をクリック（右図参照）</p>
            <p class="text-light m-0 ml-2">⑤「HTMLをコピー」をクリック（右図参照）</p>
            <p class="text-light m-0 ml-2">⑥上の「アクセスマップURL」へ貼付け</p>
            <p class="text-light m-0 ml-2">⑦「登録」をクリック</p> -->
        </div>
        <div class="col-5 m-0 p-2">
          <!-- <b-img src="../assets/accessMap.jpg" height="100" width="130" /> -->
          <b-img src="../assets/accessMap1.jpg" class="img-fluid" />
          <b-img src="../assets/accessMap3.jpg" class="img-fluid mt-2" />
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
        chkSideMenu: '',
        chkMenu1: '',
        chkMenu11: '',
        chkMenu12: '',
        chkMenu13: '',
        chkMenu14: '',
        chkMenu15: '',
        chkMenu2: '',
        chkMenu21: '',
        chkMenu22: '',
        chkMenu23: '',
        chkMenu24: '',
        chkMenu25: '',
        chkMenu3: '',
        chkMenu31: '',
        chkMenu32: '',
        chkMenu33: '',
        chkMenu34: '',
        chkMenu35: '',
        chkAccessMap: '',
      },
    }
  },
  // computedは、値が変わるとその値に依存しているすべてのバインディングが更新される
  computed: {
    dbSides() {
      return this.$store.getters['storeside/orderdDbSides']
    },
  },
  // elementへのマウントが行われた後処理される。
  // SSR(Firebase等)では使えない。
  mounted() {
    this.$nuxt.$on('COMMONDATA', (commonData) => {
      this.commonData = commonData
    })
  },
  // created は画面を開いたとき呼ばれる。
  created() {
    // 下記の storeside は store/storeside.js のファイル名
    this.$store.dispatch('storeside/init')

    // 下記の commonDB は store/commonDB.js のファイル名
    this.$store.dispatch('commonDB/init')
  },

  // ④ updated 画面が更新された後、呼び出される。
  // SSR(Firebase等)では使えない。
  updated() {
    this.selnum(931)
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
      // this.$router.go()
    },
    toggleChk(num) {
      switch (num) {
        case 0:
          this.myData2.chkSideMenu = !this.myData2.chkSideMenu
          break
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
        default:
          // console.log('---- error --- num in toggleChk(): ' + num)
          break
      }

      // console.log('------- chkNemu1 in toggleChk(): ' + this.myData2.chkMenu1)
    },

    myReg() {
      // this.$store.dispatch('storeside/update', { myDataNo: '1', side: this.myData2 })
      // 下記の storeside は store/storeside.js のファイル名

      // 以下の２行： 初期デプロイ後 add , Firebabase(Database)に項目が作成されたら update に戻す
      // this.$store.dispatch('storeside/add', this.myData2).then(() => {
      this.$store.dispatch('storeside/update', this.myData2).then(() => {
        this.toastFileUpdate('登録', '登録しました。')
        // this.myDataSetFlg = false
        // this.myDataSet()
        // this.$router.go()
        // console.log('+++++++++++++++++++++++++++++++++')
        // console.log('myData.chkNemu1 in myReg(): ' + this.myData.chkMenu1)
        // console.log('myData2.chkNemu1 in myReg(): ' + this.myData2.chkMenu1)
        // this.$router.go()
      })
      // console.log('---------------------------------')
      // console.log('myData.chkNemu1 in myReg(): ' + this.myData.chkMenu1)
      // console.log('myData2.chkNemu1 in myReg(): ' + this.myData2.chkMenu1)
    },
    // 「登録取消」ボタンをクリックした時、Firestoreのデータを再設定
    myUndo() {
      this.$router.go()
      // this.myDataSet()
      // this.$forceUpdate()
      // this.$router.go({ name: 'man1' })
      // this.$router.replace()
      // this.router.push('man1')
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
      // console.log('0 ====== テスト in myDataSet(): ' + this.myDataSetFlg)
      // console.log('1 ********** myData2.chkMenu1 in myDataset(): ', this.myData2.chkMenu1)
      if (this.myDataSetFlg === false) {
        // console.log('1======= count', this.dbSides.length)
        // console.log('1 -------- v1: ', this.dbSides[0].myData.v1)
        try {
          // firestore のデータを myData にセット
          this.myData = this.dbSides[0].myData

          // console.log('2======= count', this.dbSides.length)
          // myData のデータを myData2(=入力用) にセット

          // 以下の1行、 初期データの登録時にコメントアウトを外し、終わったら元に戻す
          // this.myData2.id = 'kari-data'

          // 以下の1行、 初期データの登録時にコメントアウトし、終わったら元に戻す
          // なお、ブラウザでFirebaseを開き myData.id の設定（例：f8sO13EuzfLTFSFeEjQw）も行う
          this.myData2.id = this.myData.id

          // Side Menu 名
          this.myData2.sideMenu = this.myData.sideMenu

          // メニュー 1 PR動画
          this.myData2.v1 = this.myData.v1
          this.myData2.v11 = this.myData.v11
          this.myData2.v12 = this.myData.v12
          this.myData2.v13 = this.myData.v13
          this.myData2.v14 = this.myData.v14
          this.myData2.v15 = this.myData.v15
          this.myData2.v11a = this.myData.v11a
          this.myData2.v12a = this.myData.v12a
          this.myData2.v13a = this.myData.v13a
          this.myData2.v14a = this.myData.v14a
          this.myData2.v15a = this.myData.v15a

          // メニュー 2 リンク集
          this.myData2.l1 = this.myData.l1
          this.myData2.l11 = this.myData.l11
          this.myData2.l12 = this.myData.l12
          this.myData2.l13 = this.myData.l13
          this.myData2.l14 = this.myData.l14
          this.myData2.l15 = this.myData.l15
          this.myData2.l11a = this.myData.l11a
          this.myData2.l12a = this.myData.l12a
          this.myData2.l13a = this.myData.l13a
          this.myData2.l14a = this.myData.l14a
          this.myData2.l15a = this.myData.l15a

          // メニュー 3 アクセスマップ
          this.myData2.m1 = this.myData.m1
          this.myData2.m11 = this.myData.m11
          this.myData2.m12 = this.myData.m12
          this.myData2.m13 = this.myData.m13
          this.myData2.m14 = this.myData.m14
          this.myData2.m15 = this.myData.m15
          this.myData2.m11a = this.myData.m11a
          this.myData2.m12a = this.myData.m12a
          this.myData2.m13a = this.myData.m13a
          this.myData2.m14a = this.myData.m14a
          this.myData2.m15a = this.myData.m15a

          // Side Menu
          this.myData2.chkSideMenu = this.myData.chkSideMenu

          // メニュー 1 PR動画
          this.myData2.chkMenu1 = this.myData.chkMenu1
          this.myData2.chkMenu11 = this.myData.chkMenu11
          this.myData2.chkMenu12 = this.myData.chkMenu12
          this.myData2.chkMenu13 = this.myData.chkMenu13
          this.myData2.chkMenu14 = this.myData.chkMenu14
          this.myData2.chkMenu15 = this.myData.chkMenu15

          // メニュー 2 リンク集
          this.myData2.chkMenu2 = this.myData.chkMenu2
          this.myData2.chkMenu21 = this.myData.chkMenu21
          this.myData2.chkMenu22 = this.myData.chkMenu22
          this.myData2.chkMenu23 = this.myData.chkMenu23
          this.myData2.chkMenu24 = this.myData.chkMenu24
          this.myData2.chkMenu25 = this.myData.chkMenu25

          // メニュー 3 アクセスマップ
          // this.myData2.chkAccessMap = this.myData.chkAccessMap
          // this.myData2.accessMap = this.myData.accessMap
          // this.myData2.accessMapUrl = this.myData.accessMapUrl
          this.myData2.chkMenu3 = this.myData.chkMenu3
          this.myData2.chkMenu31 = this.myData.chkMenu31
          this.myData2.chkMenu32 = this.myData.chkMenu32
          this.myData2.chkMenu33 = this.myData.chkMenu33
          this.myData2.chkMenu34 = this.myData.chkMenu34
          this.myData2.chkMenu35 = this.myData.chkMenu35

          this.myDataSetFlg = true
          // console.log('2 ********** myData.chkMenu1 in myDataset(): ', this.myData.chkMenu1)
          // console.log('2 ********** myData2.chkMenu1 in myDataset(): ', this.myData2.chkMenu1)
        } catch (error) {
          // alert('テスト in myDataSet(): ' + error)
          // console.log('error in myDataSet(): ' + error)
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
/* .positionRadioBtn {
  position: absolute;
  top: 5px;
  right: 5px;
} */
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
