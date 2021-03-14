import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyDGx6AWj5CfpbCqfvMmJ_OPOqWN6M0OKDg",
    authDomain: "test-1b825.firebaseapp.com",
    projectId: "test-1b825",
    storageBucket: "test-1b825.appspot.com",
    messagingSenderId: "1087113890010",
    appId: "1:1087113890010:web:6e7cd4dd3fddcc4642fde3",
    measurementId: "G-2VXG5DGL6Z"
  }
  firebase.initializeApp(firebaseConfig)
}

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')