<template>
	<video class="video" id="video" loop>
		<source :src="src" type="video/mp4">
	</video>
	<div class="main">
		<Clock />
	</div>
</template>

<script>
import Clock from './components/Clock.vue';
export default {
	name: 'App',
	components: {
		Clock
	},
	data() {
		return {
			src: "video.mp4"
		}
	},
	mounted: function() {
		document.title = "Ahoxa";
		const v = document.getElementById("video");
		v.volume = 0;
		v.play();
	}
}
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}

body {
	background-color: #000;
}

.video {
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	background-color: #000;
	opacity: 0;
}

.main {
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	background-image: url("assets/bg.jpg");
	background-size: cover;
	background-position: bottom;
}
</style>