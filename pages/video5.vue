<template>
  <div class="container-fluid">
    <div v-for="dbSide in dbSides" :key="dbSide.id" class="m-0 p-0">
      <h5 class="text-light bg-info text-center m-0 p-1">{{ dbSide.myData.v15 }}</h5>

      <div class="row no-gutters">
        <div class="col-12 m-1 mt3-1 p-1">
          <b-embed type="iframe" aspect="16by9" :src="dbSide.myData.v15a" allowfullscreen></b-embed>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // aaaa: 0
    }
  },
  // computedは、値が変わるとその値に依存しているすべてのバインディングが更新される
  computed: {
    dbSides() {
      return this.$store.getters['storeside/orderdDbSides']
    },
  },

  // ④ updated 画面が更新された後、呼び出される。
  // SSR(Firebase等)では使えない。
  updated() {
    this.selnum(115)
  },

  // ⑨ methods は呼び出される度に実行
  // データが変更された時、反映したくない場合はmethodsを利用
  methods: {
    selnum(num) {
      // this.selected = num
      // console.log('header selnum selected: ' + num)
      this.$nuxt.$emit('selnum', num)
    },
  },
}
</script>

<style scoped>
.no-gutters {
  margin: 0;
  padding: 0;
}
</style>
