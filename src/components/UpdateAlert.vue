<template>
	<div class="alert">
		<div class="icon">
			<img src="update.svg">
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
	name: 'App',
	components: {},
	data() {
		return {}
	}
}
</script>

<style scoped lang="scss">
.alert {
	width: 400px;
	height: 64px;
	position: fixed;
	left: 20px;
	top: 20px;
	color: #212121;	// 900
	background-color: #C5E1A5;	// 200
	border-radius: 20px;
	box-sizing: border-box;
	.icon, .heading, .text {
		position: absolute;
	}
	.icon {
		width: 32px;
		height: 32px;
		left: 15px;
		top: 10px;
	}
	.heading, .text {
		font-family: "Roboto", "Noto Sans JP";
	}
	.heading {
		left: 50px;
		top: 4px;
		font-size: 22px;
	}
	.text {
		left: 50px;
		top: 36px;
		font-size: 14px;
	}
}
</style>