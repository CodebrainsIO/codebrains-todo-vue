import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/index.css";
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App)
  .use(ElementPlus)
  .use(VueAxios, axios)
  .mount("#app");
