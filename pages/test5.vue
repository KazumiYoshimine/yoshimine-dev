<template>
  <div class="container-fluid p-1">
    <h4 class="text-light text-center m-0 p-0 bg-info">test5: myAlert のテストです</h4>

    <div id="idAlert" class="fadeout" style="background-color: #ffffff; visibility: hidden; position: absolute; border-width: thick; border-style: ridge; width: 50%; box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); border-radius: 10px">
      <div style="float: right">
        <div onclick="myAlertClose()"><img src="../assets/smiling.svg" /></div>
      </div>
      <div id="idAlertTitle" style="background-color: #c0c0c0; text-align: center; padding: 10px 0px; border-radius: 5px 5px 0px 0px"></div>
      <div style="margin: 20px 20px 0px 0px">
        <div style="display: table; float: left; width: 100px; height: 100px">
          <p style="display: table-cell; vertical-align: middle; text-align: center"><img src="../assets/restaurant.svg" /></p>
        </div>
        <div style="display: table; height: 100px"><div id="idAlertMessage" style="display: table-cell; vertical-align: middle"></div></div>
      </div>
      <div style="padding: 10px 0px; text-align: center">
        <input style="border-radius: 5px; font-size: large; width: 100px" type="button" value="O K" onclick="myAlertClose()" />
      </div>
    </div>
    <!-- <button @click="sendAlert"></button> -->
    <b-button class="px-1 py-0 m-1 ml-2 float-center text-body" style="background-color: honeydew" @click="sendAlert">AlertTest</b-button>
  </div>
</template>

<script>
// import { firestore } from 'firebase'
export default {
  data() {
    return {
      myDataSetFlg: false,
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
    // eleme
    sendAlert() {
      this.myAlert('警告', 'それは、だめでしょ')
    },

    myAlert(myTitle, myMessage) {
      // タイトルとメッセージをセットする
      myMessage = myMessage.replace(/\n/g, '<BR>')
      document.getElementById('idAlertTitle').innerHTML = myTitle
      document.getElementById('idAlertMessage').innerHTML = myMessage

      // いったん上端に移動する
      let myY = window.innerHeight !== undefined ? window.innerHeight : document.body.clientHeight
      document.getElementById('idAlert').style.top = (myY / 2) * -1 // (適当な計算)

      // 中央に移動する
      const myXs = document.body.scrollLeft
      const myYs = document.body.scrollTop
      const myX = window.innerWidth !== undefined ? window.innerWidth : document.body.clientWidth
      myY = window.innerHeight !== undefined ? window.innerHeight : document.body.clientHeight
      document.getElementById('idAlert').style.left = myX / 2 - myX / 2 / 2 + myXs
      document.getElementById('idAlert').style.top = myY / 2 - myY / 2 / 2 + myYs // (適当な計算)

      // 警告画面を表示
      document.getElementById('idAlert').style.visibility = 'visible'

      // フェードイン
      document.getElementById('idAlert').className = 'fadein'
    },

    myAlertClose() {
      // 上端に移動する
      const myY = window.innerHeight !== undefined ? window.innerHeight : document.body.clientHeight
      document.getElementById('idAlert').style.top = (myY / 2) * -1 // (適当な計算)

      // フェードアウト
      document.getElementById('idAlert').className = 'fadeout'

      // 警告画面を隠す
      document.getElementById('idAlert').style.visibility = 'hidden'
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
