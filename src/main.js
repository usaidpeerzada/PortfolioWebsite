import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "@/assets/css/tailwind.css";
import VueProgressBar from "vue-progressbar";
import VueLazyload from "vue-lazyload";

const options = {
  color: "#7FFFA8",
  failedColor: " #7D0000",
  thickness: "5px",
  transition: {
    speed: "0.2s",
    opacity: "0.5s",
    termination: 300
  },
  autoRevert: true,
  location: "top",
  inverse: false
};
Vue.use(VueProgressBar, options);

Vue.use(VueLazyload);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
