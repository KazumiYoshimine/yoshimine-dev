<template>
  <div class="container-fluid p-1">
    <h4 class="text-light text-center m-0 p-0 bg-info">test1: Vuex , Module のテスト</h4>

    <br />
    <br />

    <div class="text-center m-0 p-0">
      <!--  -->
      <!-- <b-button class="m-3" variant="outline-info" @click="isMessage1=!isMessage1"> -->
      <b-button class="m-3" variant="outline-info" @click="setMessage1"> Color code list 表示 </b-button>

      <!-- ＠＠＠  myUiMessage ウィンドウ 1  ----- start ----- ＠＠＠＠＠＠＠＠＠＠＠＠＠ -->
      <myUiMessage v-if="isMessage1" @close="isMessage1 = false">
        <!-- ポップアップ ウィンドウ に表示したい内容を記述 -->
        <uiColorCode />

        <!-- フッター内容 start -->
        <template slot="footer">
          <button @click="isMessage1 = !isMessage1">Close</button>
        </template>
        <!-- フッター内容 end -->
      </myUiMessage>
      <!-- ＠＠＠ myUiMessage ウィンドウ 1  ----- end ----- ＠＠＠＠＠＠＠＠＠＠＠＠＠ -->
    </div>
  </div>
</template>

<script>
// import { firestore } from 'firebase'
export default {
  data() {
    return {
      // myUiMessage 用 start
      isMessage1: false,
      // myUiMessage 用 end

      // myCommon 用 start
      myCommon: {
        dummy1: 'dummy1',
        dummy2: 'dummy2',
      },
      // myCommon 用 end
    }
  },

  computed: {
    // eleme
  },

  // created は画面を開いたとき呼ばれる。
  created() {
    // eleme
  },
  // elementへのマウントが行われた後処理される。
  // SSR(Firebase等)では使えない。
  mounted() {
    // eleme
  },

  // ④ updated 画面が更新された後、呼び出される。
  // SSR(Firebase等)では使えない。
  updated() {
    // eleme
  },

  // ⑨ methods は呼び出される度に実行
  // データが変更された時、反映したくない場合はmethodsを利用
  methods: {
    addMyCommon() {
      this.$store.dispatch('myCommon/add', this.myCommon)
    },

    setMessage1() {
      // this.myCommon.category = 'category1'
      this.$store.dispatch('myCommon/updateCategory', 'category1')
      this.addMyCommon()
      this.isMessage1 = !this.isMessage1
      // console.log('2-1 category -----: ', this.myCommon.category)
    },

    setMessage2() {
      // this.myCommon.category = 'category2'
      this.$store.dispatch('myCommon/updateCategory', 'category2')
      this.addMyCommon()
      this.isMessage2 = !this.isMessage2
    },
  },
}
</script>

<style scoped>
.fadeout {
  opacity: 0;
  transition: 0.5s ease-in-out;
  -webkit-transition: 0.5s ease-in-out;
}
.fadein {
  opacity: 1;
  transition: 0.5s ease-in-out;
  -webkit-transition: 0.5s ease-in-out;
}
</style>
