// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import firebase from "firebase";
import VueRessource from "vue-resource";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
require("firebase/firestore");
Vue.use(VueRessource);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAU62E1ugDtS3fbESTzEtEskIIRkBf11G4",
  authDomain: "wahla-6a952.firebaseapp.com",
  projectId: "wahla-6a952",
  storageBucket: "wahla-6a952.appspot.com",
  messagingSenderId: "343829052096",
  appId: "1:343829052096:web:b86adccac206533c8b0b25",
  measurementId: "G-YLEXF1VZ2D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();

window.db = db;
window.firebase = firebase;
db.settings({
  timestampsInSnapshots: true
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  vuetify,
  template: "<App/>",
  render: h => h(App)
}).$mount("#app");
