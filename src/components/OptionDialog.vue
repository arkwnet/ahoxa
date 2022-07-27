<template>
  <div class="dialog">
    <div class="header">{{ $t("message.optionTitle") }}</div>
    <div class="contents">
      <div class="option">
        <div class="columns">
          <div class="left">{{ $t("message.optionTheme") }}</div>
          <div class="right">
            <select v-model="option.theme" @change="changeOption">
              <option
                v-for="theme in optionThemes"
                :key="theme.name"
                :value="theme.name"
              >
                {{ theme.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="option">
        <div class="columns">
          <div class="left">{{ $t("message.optionLanguage") }}</div>
          <div class="right">
            <select v-model="option.language" @change="changeOption">
              <option
                v-for="language in optionLanguages"
                :key="language.id"
                :value="language.id"
              >
                {{ language.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="button" @click="closeDialog()">
      {{ $t("message.dialogClose") }}
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  props: {
    currentOption: {
      type: Object,
      default: () => this.option,
    },
  },
  emits: ["close-dialog", "change-option"],
  data() {
    return {
      option: {
        theme: "default",
        language: "ja_JP",
      },
      optionThemes: [],
      optionLanguages: [],
    };
  },
  mounted: function () {
    this.option = this.currentOption;
    this.axios
      .get(`./config.json?timestamp=${new Date().getTime()}`)
      .then((response) => {
        let optionThemes = [];
        for (let i = 0; i < response.data.themes.length; i++) {
          optionThemes.push({ name: response.data.themes[i] });
        }
        this.optionThemes = optionThemes;
        this.optionLanguages = response.data.languages;
      })
      .catch((e) => {
        console.log(e);
      });
  },
  methods: {
    closeDialog: function () {
      this.$emit("close-dialog");
    },
    changeOption: function () {
      this.$emit("change-option", this.option);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/sass/Dialog.scss";
@import "../assets/sass/OptionDialog.scss";
</style>
