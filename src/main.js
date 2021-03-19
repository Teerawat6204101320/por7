import Vue from "vue";
import "v-slim-dialog/dist/v-slim-dialog.css";
import SlimDialog from "v-slim-dialog";
import App from "./App.vue";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyBVj1oqWJKD29mjjQzFx2jZfg9Pofcfvls",
    authDomain: "webphone-56166.firebaseapp.com",
    projectId: "webphone-56166",
    storageBucket: "webphone-56166.appspot.com",
    messagingSenderId: "60987827353",
    appId: "1:60987827353:web:8e4d645135acb95e81c408",
    measurementId: "G-MKBR6YNMH6"
  };
  firebase.initializeApp(firebaseConfig);
}

Vue.use(SlimDialog);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
