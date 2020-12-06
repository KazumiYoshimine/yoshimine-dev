<template>
  <div class="container-fluid m-2 p-0">
    <!-- HOME へ -->
    <h3 class="m-0 p-0">Color code list</h3>

    <div v-for="(myColorCode, index) in myColorCodes" :key="index" class="m-0 p-0">
      <!-- <b-card> -->
      <p class="m-0 p-0">
        <span class="m-1 p-0">color code: {{ myColorCode.value }}</span>
        <span class="m-1 p-0">color name: {{ myColorCode.text }}</span>
      </p>
      <!-- </b-card> -->
    </div>
    <!-- </div> -->

    <hr />

    <!-- カテゴリ選択 start -->
    <!-- <div @change="setValue">
      <b-form-group label="カテゴリ選択">
        <b-form-radio-group v-model="selected" :options="options" buttons button-variant="outline-primary" size="md" name="radio-btn-outline" />
      </b-form-group>
    </div> -->
    <!-- カテゴリ選択 end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputColorCode: {
        // value: 'colorCode',
        // text: 'colorName',
        value: '',
        text: '',
      },

      // selected: '',
    }
  },

  computed: {
    myColorCodes() {
      return this.$store.getters['myColorCode/getColorCode']
    },
  },

  mounted() {
    // dumy
  },

  methods: {
    // add(myColorCode) {
    //   this.$store.dispatch('myColorCode/add', myColorCode)
    //   myColorCode= ''
    // },

    // toggle(myColorCode) {
    //   this.$store.dispatch('myColorCode/toggle', myColorCode)
    // },

    remove(myColorCode) {
      this.$store.dispatch('myColorCode/remove', myColorCode)
    },

    // setValue() {
    // console.log('1-1 selected ---------: ', this.selected)
    // this.$store.getters[
    //   'myColorCode/findArticlesByCategory'
    // ](this.selected)
    // },
  },
}
</script>

<style>
.done {
  text-decoration: line-through;
  color: red;
}
</style>
