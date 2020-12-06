<template>
  <div class="container-fluid no-gutters p-1">
    <!-- <b-container fluid class="p-4 bg-dark"> -->
    <div class="row m-0 p-0 bg-dark">
      <div class="col-12 m-0 p-1">
        <h3 class="text-light text-center m-0 p-0">管理： メニュー設定</h3>
        <p class="text-light text-center m-0 p-0">メニューの表示/非表示、および名称を変更できます。</p>
      </div>

      <!-- menu group -->
      <div class="col-sm-6 m-0 mt-0 p-2">
        <b-list-group class="p-0 mt-1">
          <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">Menu Group 1 : {{ myMenu.m1 }}</b-list-group-item>

          <!-- menu 1 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Group name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu1" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu1" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m1" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m1" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 11 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu11" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu11" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m11" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m11" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 12 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu12" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu12" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m12" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m12" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 13 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu13" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu13" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m13" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m13" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 14 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu14" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu14" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m14" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m14" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 15 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu15" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu15" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m15" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m15" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 16 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu16" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu16" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m16" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m16" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>
        </b-list-group>
      </div>

      <!-- menu group -->
      <div class="col-sm-6 m-0 mt-0 p-2">
        <b-list-group class="p-0 mt-1">
          <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">Menu Group 2 : {{ myMenu.m2 }}</b-list-group-item>

          <!-- menu 2 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Group name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu2" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu2" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m2" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m2" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 21 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu21" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu21" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m21" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m21" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 22 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu22" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu22" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m22" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m22" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 23 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu23" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu23" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m23" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m23" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 24 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu24" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu24" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m24" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m24" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 25 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu25" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu25" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m25" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m25" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 26 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu26" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu26" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m26" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m26" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>
        </b-list-group>
      </div>

      <!-- menu group -->
      <div class="col-sm-6 m-0 mt-0 p-2">
        <b-list-group class="p-0 mt-1">
          <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">Menu Group 3 : {{ myMenu.m3 }}</b-list-group-item>

          <!-- menu 3 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Group name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu3" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu3" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m3" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m3" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 31 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu31" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu31" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m31" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m31" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 32 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu32" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu32" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m32" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m32" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 33 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu33" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu33" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m33" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m33" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 34 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu34" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu34" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m34" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m34" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 35 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu35" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu35" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m35" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m35" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 36 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu36" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu36" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m36" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m36" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>
        </b-list-group>
      </div>

      <!-- menu group -->
      <div class="col-sm-6 m-0 mt-0 p-2">
        <b-list-group class="p-0 mt-1">
          <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">Menu Group 4 : {{ myMenu.m4 }}</b-list-group-item>

          <!-- menu 4 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Group name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu4" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu4" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m4" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m4" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 41 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu41" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu41" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m41" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m41" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 42 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu42" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu42" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m42" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m42" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 43 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu43" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu43" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m43" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m43" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 44 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu44" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu44" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m44" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m44" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 45 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu45" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu45" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m45" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m45" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 46 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu46" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu46" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m46" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m46" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>
        </b-list-group>
      </div>

      <!-- menu group -->
      <div class="col-sm-6 m-0 mt-0 p-2">
        <b-list-group class="p-0 mt-1">
          <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">Menu Group 5 : {{ myMenu.m5 }}</b-list-group-item>

          <!-- menu 5 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Group name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu5" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu5" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m5" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m5" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 51 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu51" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu51" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m51" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m51" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 52 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu52" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu52" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m52" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m52" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 53 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu53" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu53" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m53" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m53" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 54 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu54" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu54" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m54" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m54" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 55 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu55" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu55" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m55" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m55" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 56 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu56" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu56" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m56" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m56" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>
        </b-list-group>
      </div>

      <!-- menu group -->
      <div class="col-sm-6 m-0 mt-0 p-2">
        <b-list-group class="p-0 mt-1">
          <b-list-group-item class="m-0 mt-1 p-0 text-center text-light bg-secondary">Menu Group 6 : {{ myMenu.m6 }}</b-list-group-item>

          <!-- menu 6 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Group name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu6" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu6" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m6" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m6" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 61 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu61" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu61" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m61" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m61" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 62 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu62" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu62" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m62" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m62" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 63 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu63" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu63" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m63" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m63" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 64 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu64" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu64" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m64" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m64" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 65 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu65" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu65" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m65" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m65" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>

          <!-- menu 66 -->
          <b-input-group class="row m-0 p-0 border d-flex align-items-center" style="background-color: lightgray">
            <div class="col-3 p-1">Item name</div>

            <div class="col-1 p-0 d-flex justify-content-end">
              <b-form-checkbox v-model="myMenu2.chkMenu66" class="m-0 p-0"></b-form-checkbox>
            </div>

            <span v-if="myMenu2.chkMenu66" class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m66" class="m-0 p-0 pl-1"></b-form-input>
            </span>
            <del v-else class="col-8 m-0 p-0">
              <b-form-input v-model="myMenu2.m66" class="m-0 p-0 pl-1"></b-form-input>
            </del>
          </b-input-group>
        </b-list-group>
      </div>

      <!-- ------------------ -->

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
    <p>{{ myMenuSet() }}</p>
  </div>
</template>

<script>
// import { firestore } from 'firebase'
export default {
  data() {
    return {
      myMenuSetFlg: false,
      commonData: {},
      myMenu: {},
      myMenu2: {},
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
      // return this.$store.getters['storeheader/orderdDbHeaders']
      return this.$store.getters['storeheader/getDbHeadersById']('menu')
    },
  },

  // elementへのマウントが行われた後処理される。
  // SSR(Firebase等)では使えない。
  // mounted() {
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
      // console.log('myMenu.chkNemu1 in test1(): ' + this.myMenu.chkMenu1)
      // console.log('myMenu2.chkNemu1 in test1(): ' + this.myMenu2.chkMenu1)
    },

    myReg() {
      this.$store.dispatch('storeheader/set', { id: 'menu', myMenu: this.myMenu2 }).then(() => {
        // 以下の２行： 初期デプロイ後 add , Firebabase(Database)に項目が作成されたら update に戻す
        // this.$store.dispatch('storeheader/add', this.myMenu2).then(() => {
        // this.$store.dispatch('storeheader/update', this.myMenu2).then(() => {
        this.toastFileUpdate('登録', '登録しました。')
      })
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
      // console.log('テスト in myMenuSet(): ' + this.myMenu2.m1)
      if (this.myMenuSetFlg === false) {
        try {
          // firestore のデータを myMenu にセット
          // this.myMenu = this.dbHeaders[0].myMenu
          this.myMenu = this.dbHeaders.myMenu
          // console.log('myMenuSet-1 --- myMenu: ', this.myMenu)

          // myMenu のデータを myMenu2(=入力用) にセット
          this.myMenu2 = JSON.parse(JSON.stringify(this.dbHeaders.myMenu))

          this.myMenuSetFlg = true
          // console.log('2 ********** myMenu2.id in myMenuset(): ', this.myMenu2.id)
        } catch (error) {
          // alert('テスト in myMenuSet(): ' + error)
          // console.log('テスト in myMenuSet(): ' + error)
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
