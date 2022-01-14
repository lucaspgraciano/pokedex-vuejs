import Vue from "vue";
import "./commons/plugins/axios";
import App from "@/App";
import router from "@/views/router";
import store from "@/commons/store";
import vuetify from "@/commons/plugins/vuetify";

Vue.config.productionTip = false;

async function start() {
  try {
    new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  } catch (error) {
    console.log(`ERROR AT RENDERING APP => [ ${error} ]`);
  }
}

start();
