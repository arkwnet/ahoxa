<template>
	<transition name="cover">
		<div class="cover" id="cover" v-if="isCover"></div>
	</transition>
	<div class="button" id="night_mode" @click="changeNightMode"><img :src="nightModeImage"></div>
	<video class="video" id="video" loop>
		<source :src="video" type="video/mp4">
	</video>
	<div class="main">
		<Clock @openVersionDialog="openVersionDialog" />
	</div>
	<transition name="cover">
		<div class="cover" id="dialog_cover" v-if="isDialogCover" @click="closeVersionDialog"></div>
	</transition>
	<transition name="dialog">
		<VersionDialog v-if="isVersionDialog" @closeVersionDialog="closeVersionDialog" />
	</transition>
</template>

<script>
import Clock from './components/Clock.vue';
import VersionDialog from './components/VersionDialog.vue';
export default {
	name: 'App',
	components: {
		Clock,
		VersionDialog
	},
	data() {
		return {
			video: "video.mp4",
			nightModeImage: "night_mode.svg",
			nightMode: 0,
			isCover: false,
			isDialogCover: false,
			isVersionDialog: false
		}
	},
	mounted: function() {
		document.title = "Ahoxa";
		const v = document.getElementById("video");
		v.volume = 0;
		v.play();
	},
	methods: {
		changeNightMode: function() {
			this.nightMode++;
			if (this.nightMode == 2) { this.nightMode = 0; }
			if (this.nightMode == 1) { this.isCover = true; }
			if (this.nightMode == 0) { this.isCover = false; }
		},
		openVersionDialog: function() {
			this.isDialogCover = true;
			this.isVersionDialog = true;
		},
		closeVersionDialog: function() {
			this.isDialogCover = false;
			this.isVersionDialog = false;
		}
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

.cover {
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	background-color: #000;
	opacity: 0.85;
}

#cover {
	z-index: 90;
}

#dialog_cover {
	z-index: 110;
}

.cover-enter-from, .cover-leave-to {
	opacity: 0;
}

.cover-enter-to, .cover-leave-from {
	opacity: 0.85;
}

.cover-enter-active, .cover-leave-active {
	transition: opacity 1s;
}

.dialog-enter-from, .dialog-leave-to {
	opacity: 0;
}

.dialog-enter-to, .dialog-leave-from {
	opacity: 1;
}

.dialog-enter-active, .dialog-leave-active {
	transition: opacity 0.3s;
}

.button {
	width: 64px;
	height: 64px;
	border: solid 3px #fff;
	border-radius: 50%;
}

.button img {
	width: 32px;
	height: 32px;
	position: absolute;
	left: 16px;
	top: 16px;
}

#night_mode {
	position: fixed;
	right: 20px;
	top: 20px;
	z-index: 100;
	transition-property: opacity;
	transition-duration: 1s;
}

@media screen and (max-width: 800px) {
	.button {
		width: 48px;
		height: 48px;
	}

	.button img {
		width: 32px;
		height: 32px;
		position: absolute;
		left: 8px;
		top: 8px;
	}
}
</style>