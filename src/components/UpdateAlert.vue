<template>
	<div class="alert">
		<div class="icon">
			<img src="assets/update.svg?version=20220101">
		</div>
		<div class="heading">
			新しいAhoxaを利用可能
		</div>
		<div class="text">
			ここをタップして再読み込み
		</div>
	</div>
</template>

<script>
export default {
	name: "App",
	components: {},
	data() {
		return {}
	}
}
</script>

<style scoped lang="scss">
@import "../assets/sass/UpdateAlert.scss";
</style>