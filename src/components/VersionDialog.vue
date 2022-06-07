<template>
  <div class="dialog">
    <div class="header">{{ $t("message.versionTitle") }}</div>
    <div class="contents">
      <div class="logo"><img :src="logoImage" /></div>
      <div class="version">Version {{ version }}</div>
      <div class="license">
        <p>
          Copyright (c) 2021,2022 Sora Arakawa<br />
          Licensed under the MIT License
        </p>
        <p>
          <a href="https://arkw.net/products/web/ahoxa/" target="blank"
            >https://arkw.net/products/web/ahoxa/</a
          >
        </p>
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
  emits: ["close-dialog"],
  data() {
    return {
      logoImage: "assets/img/logo.svg",
      version: require("../../package.json").version,
    };
  },
  methods: {
    closeDialog: function () {
      this.$emit("close-dialog");
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/sass/Dialog.scss";
</style>
