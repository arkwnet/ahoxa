<template>
	<div class="dialog">
		<div class="header">Ahoxa について</div>
		<div class="contents">
			<div class="logo"><img :src="logoImage"></div>
			<div class="version">Version {{ version }}</div>
			<div class="license">
				<p>
					Copyright (c) 2021,2022 Sora Arakawa<br>
					Licensed under the MIT License
				</p>
				<p>
					<a href="https://arkw.net/products/web/ahoxa/" target="blank">https://arkw.net/products/web/ahoxa/</a>
				</p>
			</div>
		</div>
		<div class="button" @click="closeDialog()">閉じる</div>
	</div>
</template>

<script>
export default {
	name: "App",
	components: {},
	emits: ["close-dialog"],
	data() {
		return {
			logoImage: "assets/logo.svg?version=20220101",
			version: require("../../package.json").version
		}
	},
	methods: {
		closeDialog: function() {
			this.$emit("close-dialog");
		}
	}
}
</script>

<style scoped lang="scss">
@import "../assets/sass/Dialog.scss";
</style>