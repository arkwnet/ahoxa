import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { createI18n } from "vue-i18n";

const messages = require("./i18n");
const i18n = createI18n({
  locale: "ja_JP",
  messages,
});

const app = createApp(App);
app.use(VueAxios, axios).use(i18n);
app.mount("#app");
