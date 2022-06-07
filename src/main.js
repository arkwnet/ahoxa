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
  en_US: {
    message: {
      dialogClose: "Close",
      optionTitle: "Settings",
      optionTheme: "Theme",
      optionLanguage: "Language",
      versionTitle: "About Ahoxa",
      updateTitle: "New version of Ahoxa is available",
      updateDescription: "Tap here to reload",
    },
  },
  zh_CN: {
    message: {
      dialogClose: "关闭",
      optionTitle: "设定",
      optionTheme: "外观",
      optionLanguage: "语言",
      versionTitle: "关于 Ahoxa",
      updateTitle: "可以使用新的Ahoxa",
      updateDescription: "点这里重新加载",
    },
  },
};

const i18n = createI18n({
  locale: "zh_CN",
  messages,
});

const app = createApp(App);
app.use(VueAxios, axios).use(i18n);
app.mount("#app");
