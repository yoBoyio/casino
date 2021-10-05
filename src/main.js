import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/index.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
// import firebaseConfig from '../credentials'
import { initializeApp } from "firebase/app";

import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import "./assets/tailwind.css";

library.add(faGithub, faGoogle, faHandHoldingUsd);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyDztEr6nBt6r0tzB-SZKxuvtUO-rZYeKYs",
  authDomain: "casino-live-bet.firebaseapp.com",
  projectId: "casino-live-bet",
  storageBucket: "casino-live-bet.appspot.com",
  messagingSenderId: "465966181775",
  appId: "1:465966181775:web:cca02b0cbd80fa60f6effa",
};

// Initialize Firebase
initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
