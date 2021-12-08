<template>
	<div class="dialog">
		<div class="header">設定</div>
		<div class="contents">
		</div>
		<div class="button" @click="closeDialog()">閉じる</div>
	</div>
</template>

<script>
export default {
	name: "App",
	components: {},
	emits: ["closeDialog"],
	data() {
		return {
			logoImage: "assets/logo.svg",
			version: require("../../package.json").version
		}
	},
	methods: {
		closeDialog: function() {
			this.$emit("closeDialog");
		}
	}
}
</script>

<style scoped lang="scss">
@import "../assets/sass/Dialog.scss";
</style>