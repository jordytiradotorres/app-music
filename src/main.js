import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import routes from "@/routes.js";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
});

Vue.config.productionTip = false;

// filter global
Vue.filter("ms-to-mm", function(ms) {
  let min = Math.floor(ms / 60000);
  let sec = ((ms % 60000) / 1000).toFixed(0);

  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  return `${min}:${sec}`;
});

// directiva personalizada
Vue.directive("setBlur", {
  // binding para pasar un argumento mas adelante en v-blur
  bind(el, binding) {
    el.style.filter = !binding.value ? "blur(2px)" : "none";
    el.style.cursor = !binding.value ? "not-allowed" : "inherit";

    el.querySelectorAll("button").forEach((btn) => {
      if (!binding.value) {
        btn.setAttribute("disabled", true);
      } else {
        btn.removeAttribute("disabled");
      }
    });
  },
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
