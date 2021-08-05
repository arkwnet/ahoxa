<template>
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
	mounted: function() {
		document.title = "Ahoxa";
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