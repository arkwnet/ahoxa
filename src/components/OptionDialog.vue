<template>
	<div class="dialog">
		<div class="header">設定</div>
		<div class="contents">
		</div>
		<div class="button" @click="closeOptionDialog()">閉じる</div>
	</div>
</template>

<script>
export default {
	name: "App",
	components: {},
	emits: ["closeOptionDialog"],
	data() {
		return {
			logoImage: "assets/logo.svg",
			version: require("../../package.json").version
		}
	},
	methods: {
		closeOptionDialog: function() {
			this.$emit("closeOptionDialog");
		}
	}
}
</script>

<style scoped lang="scss">
@import "../assets/sass/Dialog.scss";
</style>