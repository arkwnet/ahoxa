<template>
	<div class="main-date" @click="changeScreenMode">{{ date }}</div>
	<div class="main-time" @click="openVersionDialog">{{ time }}</div>
	<div class="main-second">{{ second }}</div>
</template>

<script>
export default {
	name: "App",
	components: {},
	emits: ["open-version-dialog", "open-update-alert"],
	data() {
		return {
			date: "",
			time: "",
			second: "",
			screenMode: 0,
			frame: 0,
			updateFlag: false
		};
	},
	mounted: function() {
		this.updateClock();
	},
	methods: {
		updateClock: function() {
			const dayOfWeekArray = ["日", "月", "火", "水", "木", "金", "土"];
			let now, year, month, day, dayOfWeek, hour, min, sec;
			let vm = this;
			let frame = this.frame;
			(function loop() {
				now = new Date();
				year = now.getFullYear();
				month = now.getMonth() + 1;
				day = now.getDate();
				dayOfWeek = dayOfWeekArray[now.getDay()];
				hour = vm.clockProcess(now.getHours());
				min = vm.clockProcess(now.getMinutes());
				sec = vm.clockProcess(now.getSeconds());
				vm.date = "" + year + "年" + month + "月" + day + "日（" + dayOfWeek + "）";
				vm.time = "" + hour + ":" + min;
				vm.second = sec;
				if (frame == 360 && vm.updateFlag == false) {
					vm.axios.get(`./config.json?timestamp=${new Date().getTime()}`).then((response) => {
						const oldVersion = vm.convertVersion(require("../../package.json").version);
						const newVersion = vm.convertVersion(response.data.version);
						if (newVersion > oldVersion) {
							vm.$emit("open-update-alert");
							vm.updateFlag = true;
						}
					}).catch((e) => {
						console.log(e);
					});
				}
				if (frame >= 18000) {
					frame = 0;
				}
				frame++;
				requestAnimationFrame(loop);
			}());
		},
		convertVersion: function(version) {
			const versionArray = version.split(".");
			const versionInt = (versionArray[0] * 100) + (versionArray[1] * 10) + versionArray[2];
			return versionInt;
		},
		clockProcess: function(str) {
			if (str < 10) {
				str = "0" + str;
			} else {
				str = str.toString();
			}
			return str;
		},
		changeScreenMode: function() {
			this.screenMode++;
			if (this.screenMode == 2) { this.screenMode = 0; }
			if (this.screenMode == 1) { document.body.requestFullscreen(); }
			if (this.screenMode == 0) { document.exitFullscreen(); }
		},
		openVersionDialog: function() {
			this.$emit("open-version-dialog");
		}
	}
}
</script>

<style scoped lang="scss">
@import "../assets/sass/Clock.scss";
</style>