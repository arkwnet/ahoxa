<template>
	<div class="dialog">
		<div class="header">Ahoxa について</div>
		<div class="contents">
			<div class="logo"><img :src="logoImage"></div>
			<div class="version">Version {{ version }}</div>
			<div class="license">
				<p>
					Copyright (c) 2021 Sora Arakawa<br>
					Licensed under the MIT License
				</p>
				<p>
					<a href="https://arkw.net/products/web/ahoxa/" target="blank">https://arkw.net/products/web/ahoxa/</a>
				</p>
			</div>
		</div>
		<div class="button" @click="closeVersionDialog()">閉じる</div>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {},
	emits: ["closeVersionDialog"],
	data() {
		return {
			logoImage: "assets/logo.svg",
			version: require("../../package.json").version
		}
	},
	methods: {
		closeVersionDialog: function() {
			this.$emit("closeVersionDialog");
		}
	}
}
</script>

<style scoped lang="scss">
@import "../assets/css/VersionDialog.scss";
</style>