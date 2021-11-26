<template>
	<transition name="cover">
		<div class="cover" id="cover" v-if="isCover"></div>
	</transition>
	<div class="button" id="night_mode" @click="changeNightMode"><img :src="nightModeImage"></div>
	<video class="video" id="video" loop>
		<source :src="video" type="video/mp4">
	</video>
	<div class="main" :style="style">
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

<script src="./assets/js/App.js">
</script>

<style scoped lang="scss">
@import "./assets/sass/App.scss";
</style>