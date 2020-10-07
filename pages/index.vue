<template>
  <div class="container-fluid no-gutters">
    <div class="row">
      <!-- メイン エリア  -->
      <!-- <Home /> -->
      <Auth />
    </div>
  </div>
</template>

<script>
// import Home from '~/components/home.vue'
import Auth from '~/components/Auth.vue'

export default {
  components: {
    // Home,
    Auth,
  },

  // layout: 'sampleLayout', // レイアウトファイルを指定

  // head情報は {}nuxt.config.js で設定のため省略
  // head() {
  // return {
  //   title: '○○マンション管理組合',
  //   meta: [
  //     {
  //       hid: 'description',
  //       name: 'description',
  //       content: 'トップページです。'
  //     }
  //   ]
  // }
  // }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  /* font-weight: 300;
  font-size: 100px; */
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
