// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' // add
// import Vuex from 'vuex'                        // add
import { BootstrapVue } from 'bootstrap-vue' // add
// import firebase from 'firebase'                 // add
// import store from './store'                     // add
// import 'bootstrap/dist/css/bootstrap.min.css' // add
import 'bootstrap/dist/css/bootstrap.css' // add
import 'bootstrap-vue/dist/bootstrap-vue.css' // add
// import 'bootstrap/scss/bootstrap.scss' // add

Vue.use(BootstrapVue)

export function mySleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}
