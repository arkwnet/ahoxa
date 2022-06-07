import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { createI18n } from "vue-i18n";

const messages = {
  ja_JP: {
    message: {
      dialogClose: "閉じる",
      optionTitle: "設定",
      optionTheme: "テーマ",
      optionLanguage: "言語",
      versionTitle: "Ahoxa について",
      updateTitle: "新しいAhoxaを利用可能",
      updateDescription: "ここをタップして再読み込み",
    },
  },
};

const i18n = createI18n({
  locale: "ja_JP",
  messages,
});

const app = createApp(App);
app.use(VueAxios, axios).use(i18n);
app.mount("#app");
