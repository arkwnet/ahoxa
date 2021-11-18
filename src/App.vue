<template>
	<transition name="cover">
		<div class="cover" id="cover" v-if="isCover"></div>
	</transition>
	<div class="button" id="night_mode" @click="changeNightMode"><img :src="nightModeImage"></div>
	<video class="video" id="video" loop>
		<source :src="video" type="video/mp4">
	</video>
	<div class="main">
		<Clock @openVersionDialog="openVersionDialog" @openUpdateAlert="openUpdateAlert" />
	</div>
	<transition name="dialog">
		<UpdateAlert v-if="isUpdateAlert" @click="reload" />
	</transition>
	<transition name="cover">
		<div class="cover" id="dialog_cover" v-if="isDialogCover" @click="closeVersionDialog"></div>
	</transition>
	<transition name="dialog">
		<VersionDialog v-if="isVersionDialog" @closeVersionDialog="closeVersionDialog" />
	</transition>
</template>

<script>
import Clock from './components/Clock.vue';
import UpdateAlert from './components/UpdateAlert.vue';
import VersionDialog from './components/VersionDialog.vue';
export default {
	name: 'App',
	components: {
		Clock,
		UpdateAlert,
		VersionDialog
	},
	data() {
		return {
			video: "assets/video.mp4",
			nightModeImage: "assets/night_mode.svg",
			nightMode: 0,
			isCover: false,
			isUpdateAlert: false,
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
		},
		openUpdateAlert: function() {
			this.isUpdateAlert = true;
		},
		reload: function() {
			location.reload();
		}
	}
}
</script>

<style scoped lang="scss">
@import "./assets/css/App.scss";
</style>