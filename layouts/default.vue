<template>
  <div>
    <!-- <myHeader class="sticky-top m-0 p-0" /> -->
    <!-- <myHeader class="myStickyTop m-0 p-0" /> -->
    <myHeader class="m-0 p-0" />
    <!-- <div class="container-fluid"> -->
    <!-- <div class="row m-0"> -->
    <!-- 左サイド エリア -->
    <!-- <div class="col-lg-2 col-md-3 d-none d-md-block p-0">
        <LeftSide />
      </div> -->

    <!-- メイン エリア -->
    <!-- <div class="col-lg-8 col-md-9 col-sm-12 p-0"> -->
    <!-- <div class="col-lg-10 col-md-9 col-sm-12 p-0"> -->
    <!-- <div class="col-12 p-0"> -->
    <div class="m-0 p-0">
      <nuxt />
    </div>

    <!-- 右サイド エリア -->
    <!-- <div class="col-lg-2 d-none d-lg-block p-0">
        <RightSide />
      </div> -->
    <!-- </div> -->
    <!-- </div> -->

    <!-- サイトマップ エリア -->
    <!-- <mySitemap /> -->

    <!-- フッター エリア -->
    <!-- <myFooter class="fixed-bottom" /> -->
    <myFooter />
  </div>
</template>

<script>
// ヘッダ＆フッタをインポート
import myHeader from '~/components/myHeader.vue'
import myFooter from '~/components/myFooter.vue'
// import RightSide from '~/components/rightside.vue'
// import LeftSide from '~/components/leftside.vue'
// import mySitemap from '~/components/mySitemap.vue'

export default {
  // name: 'DefaultLayout', // テンプレート名
  components: {
    myHeader, // <header>に対応
    myFooter, // <footer>に対応
    // RightSide,
    // LeftSide
    // mySitemap
  },
  data() {
    return {
      commonData: {},
    }
  },
  // elementへのマウントが行われた後処理される。
  // SSR(Firebase等)では使えない。
  mounted() {
    this.$nuxt.$on('COMMONDATA', (commonData) => {
      this.commonData = commonData
      // console.log('1 ========== commonData in defalt.vue: ', this.commonData)
    })
  },
}
</script>

<style>
html {
  /* font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; */
  font-family: 'Hiragino Kaku Gothic ProN', 'メイリオ', sans-serif;
  font-size: 14px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

/* 大デバイス（デスクトップ, 1200px 未満） */
@media (min-width: 992px) {
  /* .myStickyTop {
    position: sticky;
    top: 0;
  } */
}
/* 中デバイス（タブレット, 992px 未満） */
@media (max-width: 991.98px) {
  /* .myStickyTop {
    position: fixed;
    top: 0;
  } */
}
/* 小デバイス（横向きモバイル, 768px 未満） */
@media (max-width: 767.98px) {
  /* .myStickyTop {
    position: sticky;
    top: 0px;
  } */
}
/* @include media-breakpoint-up(sm) { */
/* 極小デバイス（縦向きモバイル, 576px 未満） */
@media (max-width: 575.98px) {
  /* .myStickyTop {
    position: sticky;
    top: 0;
  } */
}
</style>
