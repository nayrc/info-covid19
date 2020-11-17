import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import vSelect from "vue-select";
import titleMixin from "./titleMixin";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component("v-select", vSelect);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.mixin(titleMixin);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vue-select/dist/vue-select.css";
import "./../public/css/style.css";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
