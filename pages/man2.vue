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
        <div class="row m-0 p-0 text-center text-light bg-secondary" style="background-color: white">
          <div class="col-6 p-0 align-self-center">Side Menu を利用する/しない</div>

          <div class="col-6 d-flex justify-content-center m-0 p-1 border-left">
            <div class="p-0 align-self-center">
              <div class="p-0">Menu名</div>
            </div>
          </div>
        </div>

        <!-- Side menu 利用する／しない -->
        <div class="row m-0 p-0 border" style="background-color: white">
          <div class="col-6 p-0 d-flex justify-content-center align-items-center">
            <b-form-checkbox v-model="mySide2.chkSideMenu" class="m-0 p-0"></b-form-checkbox>
          </div>
          <span v-if="mySide2.chkSideMenu" class="col-6 m-0 p-0">
            <b-form-input v-model="mySide2.sideMenu" class="border m-0 p-0 pl-1" for="idChk"></b-form-input>
          </span>
          <del v-else class="col-6 m-0 p-0">
            <b-form-input v-model="mySide2.sideMenu" class="border m-0 p-0 pl-1" for="idChk"></b-form-input>
          </del>
          <!-- ------------------ -->
        </div>
      </b-list-group>
    </div>

    <!-- ------------------ -->
    <div v-show="mySide2.chkSideMenu" class="row m-0 p-0">
      <!-- ================= PR動画 === -->
      <div class="col-12 m-0 mt-0 p-2">
        <b-list-group class="p-0 mt-1">
          <div class="row m-0 p-0 text-center text-light bg-secondary" style="background-color: white">
            <div class="col-2 p-0 align-self-center">Menu 1</div>
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
          </div>

          <!-- menu 1 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Gropu name</div>
            <div class="col-1 p-0 d-flex justify-content-end align-items-center">
              <b-form-checkbox v-model="mySide2.chkMenu1" class="m-0 mr-1 p-0"></b-form-checkbox>
            </div>
            <span v-if="mySide2.chkMenu1" class="col-9 m-0 p-0">
              <b-form-input v-model="mySide2.v1" class="border m-0 p-0 pl-1" for="idChk1"></b-form-input>
            </span>
            <del v-else class="col-9 m-0 p-0">
              <b-form-input v-model="mySide2.v1" class="border m-0 p-0 pl-1" for="idChk1"></b-form-input>
            </del>
          </div>

          <!-- menu 11 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Item name</div>
            <div class="col-1 p-0 d-flex justify-content-end align-items-center">
              <b-form-checkbox v-model="mySide2.chkMenu11" class="m-0 mr-1 p-0"></b-form-checkbox>
            </div>
            <span v-if="mySide2.chkMenu11" class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.v11" class="border m-0 p-0 pl-1" for="idChk11"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.v11" class="border m-0 p-0 pl-1" for="idChk11"></b-form-input>
            </del>
            <b-form-input v-model="mySide2.v11a" class="col-5 border m-0 p-0 pl-1" for="idChk11"></b-form-input>
          </div>

          <!-- menu 12 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Item name</div>
            <div class="col-1 p-0 d-flex justify-content-end align-items-center">
              <b-form-checkbox v-model="mySide2.chkMenu12" class="m-0 mr-1 p-0"></b-form-checkbox>
            </div>
            <span v-if="mySide2.chkMenu12" class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.v12" class="border m-0 p-0 pl-1" for="idChk12"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.v12" class="border m-0 p-0 pl-1" for="idChk12"></b-form-input>
            </del>
            <b-form-input v-model="mySide2.v12a" class="col-5 border m-0 p-0 pl-1" for="idChk12"></b-form-input>
          </div>

          <!-- menu 13 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Item name</div>
            <div class="col-1 p-0 d-flex justify-content-end align-items-center">
              <b-form-checkbox v-model="mySide2.chkMenu13" class="m-0 mr-1 p-0"></b-form-checkbox>
            </div>
            <span v-if="mySide2.chkMenu13" class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.v13" class="border m-0 p-0 pl-1" for="idChk13"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.v13" class="border m-0 p-0 pl-1" for="idChk13"></b-form-input>
            </del>
            <b-form-input v-model="mySide2.v13a" class="col-5 border m-0 p-0 pl-1" for="idChk13"></b-form-input>
          </div>

          <!-- menu 14 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Item name</div>
            <div class="col-1 p-0 d-flex justify-content-end align-items-center">
              <b-form-checkbox v-model="mySide2.chkMenu14" class="m-0 mr-1 p-0"></b-form-checkbox>
            </div>
            <span v-if="mySide2.chkMenu14" class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.v14" class="border m-0 p-0 pl-1" for="idChk14"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.v14" class="border m-0 p-0 pl-1" for="idChk14"></b-form-input>
            </del>
            <b-form-input v-model="mySide2.v14a" class="col-5 border m-0 p-0 pl-1" for="idChk14"></b-form-input>
          </div>

          <!-- menu 15 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Item name</div>
            <div class="col-1 p-0 d-flex justify-content-end align-items-center">
              <b-form-checkbox v-model="mySide2.chkMenu15" class="m-0 mr-1 p-0"></b-form-checkbox>
            </div>
            <span v-if="mySide2.chkMenu15" class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.v15" class="border m-0 p-0 pl-1" for="idChk15"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.v15" class="border m-0 p-0 pl-1" for="idChk15"></b-form-input>
            </del>
            <b-form-input v-model="mySide2.v15a" class="col-5 border m-0 p-0 pl-1" for="idChk15"></b-form-input>
          </div>
          <!-- ------------------ -->
        </b-list-group>
      </div>
      <!-- <b-button :size="commonData.selectedBtnSize" variant="primary" class="m-0 px-1 py-0" @click="test1()">test1</b-button> -->

      <!-- ================= リンク集 === -->
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
                <div class="p-0">リンク先URL</div>
              </div>
            </div>
          </div>

          <!-- menu 2 -->
          <div class="row m-0 p-0" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Group name</div>
            <div class="col-1 p-0 d-flex justify-content-end align-items-center">
              <b-form-checkbox v-model="mySide2.chkMenu2" class="m-0 mr-1 p-0"></b-form-checkbox>
            </div>
            <span v-if="mySide2.chkMenu2" class="col-9 m-0 p-0">
              <b-form-input v-model="mySide2.l1" class="border m-0 p-0 pl-1" for="idChk2"></b-form-input>
            </span>
            <del v-else class="col-9 m-0 p-0">
              <b-form-input v-model="mySide2.l1" class="border m-0 p-0 pl-1" for="idChk2"></b-form-input>
            </del>
          </div>

          <!-- menu 21 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Item name</div>
            <div class="col-1 p-0 d-flex justify-content-end align-items-center">
              <b-form-checkbox v-model="mySide2.chkMenu21" class="m-0 mr-1 p-0"></b-form-checkbox>
            </div>
            <span v-if="mySide2.chkMenu21" class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.l11" class="border m-0 p-0 pl-1" for="idChk21"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.l11" class="border m-0 p-0 pl-1" for="idChk21"></b-form-input>
            </del>
            <b-form-input v-model="mySide2.l11a" class="col-5 border m-0 p-0 pl-1" for="idChk21"></b-form-input>
          </div>

          <!-- menu 22 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Item name</div>
            <div class="col-1 p-0 d-flex justify-content-end align-items-center">
              <b-form-checkbox v-model="mySide2.chkMenu22" class="m-0 mr-1 p-0"></b-form-checkbox>
            </div>
            <span v-if="mySide2.chkMenu22" class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.l12" class="border m-0 p-0 pl-1" for="idChk22"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.l12" class="border m-0 p-0 pl-1" for="idChk22"></b-form-input>
            </del>
            <b-form-input v-model="mySide2.l12a" class="col-5 border m-0 p-0 pl-1" for="idChk22"></b-form-input>
          </div>

          <!-- menu 23 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Item name</div>
            <div class="col-1 p-0 d-flex justify-content-end align-items-center">
              <b-form-checkbox v-model="mySide2.chkMenu23" class="m-0 mr-1 p-0"></b-form-checkbox>
            </div>
            <span v-if="mySide2.chkMenu23" class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.l13" class="border m-0 p-0 pl-1" for="idChk23"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.l13" class="border m-0 p-0 pl-1" for="idChk23"></b-form-input>
            </del>
            <b-form-input v-model="mySide2.l13a" class="col-5 border m-0 p-0 pl-1" for="idChk23"></b-form-input>
          </div>

          <!-- menu 24 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Item name</div>
            <div class="col-1 p-0 d-flex justify-content-end align-items-center">
              <b-form-checkbox v-model="mySide2.chkMenu24" class="m-0 mr-1 p-0"></b-form-checkbox>
            </div>
            <span v-if="mySide2.chkMenu24" class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.l14" class="border m-0 p-0 pl-1" for="idChk24"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.l14" class="border m-0 p-0 pl-1" for="idChk24"></b-form-input>
            </del>
            <b-form-input v-model="mySide2.l14a" class="col-5 border m-0 p-0 pl-1" for="idChk24"></b-form-input>
          </div>

          <!-- menu 25 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Item name</div>
            <div class="col-1 p-0 d-flex justify-content-end align-items-center">
              <b-form-checkbox v-model="mySide2.chkMenu25" class="m-0 mr-1 p-0"></b-form-checkbox>
            </div>
            <span v-if="mySide2.chkMenu25" class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.l15" class="border m-0 p-0 pl-1" for="idChk25"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.l15" class="border m-0 p-0 pl-1" for="idChk25"></b-form-input>
            </del>
            <b-form-input v-model="mySide2.l15a" class="col-5 border m-0 p-0 pl-1" for="idChk25"></b-form-input>
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
          </div>

          <!-- menu 3 -->
          <div class="row m-0 p-0" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Group name</div>
            <div class="col-1 p-0 d-flex justify-content-end align-items-center">
              <b-form-checkbox v-model="mySide2.chkMenu3" class="m-0 mr-1 p-0"></b-form-checkbox>
            </div>
            <span v-if="mySide2.chkMenu3" class="col-9 m-0 p-0">
              <b-form-input v-model="mySide2.m1" class="border m-0 p-0 pl-1" for="idChk3"></b-form-input>
            </span>
            <del v-else class="col-9 m-0 p-0">
              <b-form-input v-model="mySide2.m1" class="border m-0 p-0 pl-1" for="idChk3"></b-form-input>
            </del>
          </div>

          <!-- menu 31 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Item name</div>
            <div class="col-1 p-0 d-flex justify-content-end align-items-center">
              <b-form-checkbox v-model="mySide2.chkMenu31" class="m-0 mr-1 p-0"></b-form-checkbox>
            </div>
            <span v-if="mySide2.chkMenu31" class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.m11" class="border m-0 p-0 pl-1" for="idChk31"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.m11" class="border m-0 p-0 pl-1" for="idChk31"></b-form-input>
            </del>
            <b-form-input v-model="mySide2.m11a" class="col-5 border m-0 p-0 pl-1" for="idChk31"></b-form-input>
          </div>

          <!-- menu 32 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Item name</div>
            <div class="col-1 p-0 d-flex justify-content-end align-items-center">
              <b-form-checkbox v-model="mySide2.chkMenu32" class="m-0 mr-1 p-0"></b-form-checkbox>
            </div>
            <span v-if="mySide2.chkMenu32" class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.m12" class="border m-0 p-0 pl-1" for="idChk32"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.m12" class="border m-0 p-0 pl-1" for="idChk32"></b-form-input>
            </del>
            <b-form-input v-model="mySide2.m12a" class="col-5 border m-0 p-0 pl-1" for="idChk32"></b-form-input>
          </div>

          <!-- menu 33 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Item name</div>
            <div class="col-1 p-0 d-flex justify-content-end align-items-center">
              <b-form-checkbox v-model="mySide2.chkMenu33" class="m-0 mr-1 p-0"></b-form-checkbox>
            </div>
            <span v-if="mySide2.chkMenu33" class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.m13" class="border m-0 p-0 pl-1" for="idChk33"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.m13" class="border m-0 p-0 pl-1" for="idChk33"></b-form-input>
            </del>
            <b-form-input v-model="mySide2.m13a" class="col-5 border m-0 p-0 pl-1" for="idChk33"></b-form-input>
          </div>

          <!-- menu 34 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Item name</div>
            <div class="col-1 p-0 d-flex justify-content-end align-items-center">
              <b-form-checkbox v-model="mySide2.chkMenu34" class="m-0 mr-1 p-0"></b-form-checkbox>
            </div>
            <span v-if="mySide2.chkMenu34" class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.m14" class="border m-0 p-0 pl-1" for="idChk34"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.m14" class="border m-0 p-0 pl-1" for="idChk34"></b-form-input>
            </del>
            <b-form-input v-model="mySide2.m14a" class="col-5 border m-0 p-0 pl-1" for="idChk34"></b-form-input>
          </div>

          <!-- menu 35 -->
          <div class="row m-0 p-0 border" style="background-color: white">
            <div class="col-2 p-0 pt-2 pl-1" style="background-color: darkgray">Item name</div>
            <div class="col-1 p-0 d-flex justify-content-end align-items-center">
              <b-form-checkbox v-model="mySide2.chkMenu35" class="m-0 mr-1 p-0"></b-form-checkbox>
            </div>
            <span v-if="mySide2.chkMenu35" class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.m15" class="border m-0 p-0 pl-1" for="idChk35"></b-form-input>
            </span>
            <del v-else class="col-4 m-0 p-0">
              <b-form-input v-model="mySide2.m15" class="border m-0 p-0 pl-1" for="idChk35"></b-form-input>
            </del>
            <b-form-input v-model="mySide2.m15a" class="col-5 border m-0 p-0 pl-1" for="idChk35"></b-form-input>
          </div>
          <!-- menu 35 end -->
        </b-list-group>
      </div>
    </div>
    <!-- v-show のend (サイドメニュー全体の表示／非表示) -->

    <hr class="col-12 m-0 my-2 p-0" color="#000000" />

    <div class="col-12 m-2 pb-2">
      <b-button :size="commonData.selectedBtnSize" class="mx-1" variant="primary" @click="myReg()">登録</b-button>
      <b-button :size="commonData.selectedBtnSize" class="mx-1" @click="myUndo()">登録取消</b-button>
      <!-- <b-button :size="commonData.selectedBtnSize" class="mx-1" @click="myTest()">テストLog</b-button> -->
      <p class="text-light mt-2">「登録取消」は登録前に戻します。なお一旦登録すると元に戻すことはできません。</p>
    </div>

    <hr class="col-12 m-0 my-2 p-0" color="#000000" />
    <div v-show="mySide2.chkSideMenu" class="row m-0 p-0">
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
        </div>
        <div class="col-5 m-0 p-2">
          <b-img src="../assets/accessMap1.jpg" class="img-fluid" />
          <b-img src="../assets/accessMap3.jpg" class="img-fluid mt-2" />
        </div>
      </div>
    </div>
    <p>{{ mySideSet() }}</p>
  </div>
</template>

<script>
// import { firestore } from 'firebase'
export default {
  data() {
    return {
      mySideSetFlg: false,
      commonData: {},
      mySide: {},
      mySide2: {},
    }
  },
  // computedは、値が変わるとその値に依存しているすべてのバインディングが更新される
  computed: {
    dbSides() {
      // return this.$store.getters['storeside/orderdDbSides']
      return this.$store.getters['storeside/getSideById']('side')
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

    // test1() {
    // console.log('mySide.chkNemu1 in test1(): ' + this.mySide.chkMenu1)
    // this.$router.go()
    // },

    myReg() {
      // this.$store.dispatch('storeside/update', { mySideNo: '1', side: this.mySide2 })
      // 下記の storeside は store/storeside.js のファイル名

      // 以下の２行： 初期デプロイ後 add , Firebabase(Database)に項目が作成されたら update に戻す
      // this.$store.dispatch('storeside/set', { id: 'side', mySide: this.mySide2 }).then(() => {
      this.$store.dispatch('storeside/update', { id: 'side', mySide: this.mySide2 }).then(() => {
        this.toastFileUpdate('登録', '登録しました。')
      })
      // console.log('mySide.chkNemu1 in myReg(): ' + this.mySide.chkMenu1)
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
    mySideSet() {
      if (this.mySideSetFlg === false) {
        try {
          // firestore のデータを mySide にセット
          this.mySide = this.dbSides.mySide
          this.mySide2 = JSON.parse(JSON.stringify(this.dbSides.mySide))
          this.mySideSetFlg = true
          // console.log('2 ********** mySide.chkMenu1 in mySideset(): ', this.mySide.chkMenu1)
        } catch (error) {
          // alert('テスト in mySideSet(): ' + error)
          // console.log('error in mySideSet(): ' + error)
        }
      }
    },
  },
}
</script>

<style scoped>
del {
  color: rgba(255, 0, 0, 1);
}
</style>
