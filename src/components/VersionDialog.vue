<template>
	<div class="dialog">
		<div class="header">Ahoxa について</div>
		<div class="contents">
			<div class="logo"><img :src="logoImage"></div>
			<div class="version">Version 1.4.0</div>
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
	data() {
		return {
			logoImage: "logo.svg"
		}
	},
	methods: {
		closeVersionDialog: function() {
			this.$emit("closeVersionDialog");
		}
	}
}
</script>

<style scoped>
.dialog {
	position: fixed;
	left: 15%;
	top: 15%;
	width: 70%;
	height: 70%;
	background-color: #FAFAFA;
	font-family: "Roboto", "Noto Sans JP";
	z-index: 200;
	border-radius: 20px;
}

.dialog .header, .dialog .contents, .dialog .button {
	box-sizing: border-box;
}

.dialog .header {
	width: 100%;
	height: 60px;
	padding: 11px 15px;
	position: absolute;
	left: 0;
	top: 0;
	font-size: 24px;
	border-bottom: solid 1px gray;
}

.dialog .contents {
	width: 100%;
	height: calc(100% - 60px);
	padding: 30px 15px;
	position: absolute;
	left: 0;
	top: 60px;
	font-size: 18px;
	overflow-y: auto;
}

.dialog .contents a {
	color: #2196F3;
}

.dialog .contents a:hover {
	color: #64B5F6;
}

.dialog .contents .logo {
	margin-bottom: 30px;
	text-align: center;
}

.dialog .contents .version {
	margin-bottom: 40px;
	text-align: center;
	font-size: 24px;
}

.dialog .contents .license {
	text-align: center;
}

.dialog .button {
	padding: 6px 20px;
	height: 40px;
	position: absolute;
	right: 20px;
	top: 10px;
	color: #212121;
	background-color: #BDBDBD;
	border-radius: 20px;
	transition-property: background-color,color;
	transition-duration: 0.1s;
	transition-timing-function: ease-in-out;
}

.dialog .button:hover {
	color: #FAFAFA;
	background-color: #212121;
	cursor: pointer;
}

@media screen and (max-width: 700px) {
	.dialog {
		width: 90%;
		left: 5%;
	}
}

@media screen and (max-width: 500px) {
	.dialog .contents .logo img {
		width: 80%;
	}
}

@media screen and (max-height: 500px) {
	.dialog {
		height: 90%;
		top: 5%;
	}
}
</style>