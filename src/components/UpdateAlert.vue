<template>
  <div class="alert">
    <div class="icon">
      <img src="assets/img/update.svg" />
    </div>
    <div class="heading">{{ $t("message.updateTitle") }}</div>
    <div class="text">{{ $t("message.updateDescription") }}</div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import "../assets/sass/UpdateAlert.scss";
</style>
