<template>
	<div class="main-date" @click="changeScreenMode">{{ date }}</div>
	<div class="main-time">{{ time }}</div>
	<div class="main-second">{{ second }}</div>
</template>

<script>
export default {
	name: 'App',
	components: {},
	data() {
		return {
			date: '',
			time: '',
			second: '',
			screenMode: 0
		};
	},
	mounted: function() {
		this.updateClock();
	},
	methods: {
		updateClock: function() {
			let now, year, month, day, dayOfWeek, hour, min, sec;
			let dayOfWeekArray = ["日", "月", "火", "水", "木", "金", "土"];
			let vm = this;
			(function loop() {
				now = new Date();
				year = now.getFullYear();
				month = now.getMonth() + 1;
				day = now.getDate();
				dayOfWeek = dayOfWeekArray[now.getDay()];
				hour = vm.clockProcess(now.getHours());
				min = vm.clockProcess(now.getMinutes());
				sec = vm.clockProcess(now.getSeconds());
				vm.date = '' + year + '年' + month + '月' + day + '日（' + dayOfWeek + '）';
				vm.time = '' + hour + ':' + min;
				vm.second = sec;
				requestAnimationFrame(loop);
			}());
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
		}
	}
}
</script>

<style scoped>
.main-date, .main-time {
	position: fixed;
	left: 30px;
	color: #fff;
	font-family: "Roboto", "Noto Sans JP";
	text-shadow: 0 0 5px #616161;
	z-index: 1;
}

.main-date {
	bottom: 200px;
	font-size: 60px;
	font-weight: normal;
}

.main-time {
	bottom: 30px;
	font-size: 160px;
	font-weight: 500;
}

.main-second {
	position: fixed;
	right: -15px;
	top: -120px;
	color: #fff;
	font-family: "Roboto", "Noto Sans JP";
	font-size: 500px;
	opacity: 0.3;
	letter-spacing: -15px;
	z-index: 0;
}

@media screen and (max-width: 800px) {
	.main-date {
		bottom: 140px;
		font-size: 40px;
	}
	.main-time {
		font-size: 100px;
	}
}
</style>