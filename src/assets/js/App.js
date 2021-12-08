import Clock from "../../components/Clock.vue";
import UpdateAlert from "../../components/UpdateAlert.vue";
import VersionDialog from "../../components/VersionDialog.vue";
import OptionDialog from "../../components/OptionDialog.vue";
export default {
	name: "App",
	components: {
		Clock,
		UpdateAlert,
		VersionDialog,
		OptionDialog
	},
	data() {
		return {
			video: "assets/video.mp4",
			style: "background-image: url('assets/bg.jpg')",
			nightModeImage: "assets/night_mode.svg",
			nightMode: 0,
			optionImage: "assets/option.svg",
			isCover: false,
			isUpdateAlert: false,
			isDialogCover: false,
			isVersionDialog: false,
			isOptionDialog: false
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
		openUpdateAlert: function() {
			this.isUpdateAlert = true;
		},
		openOptionDialog: function() {
			this.isDialogCover = true;
			this.isOptionDialog = true;
		},
		closeDialog: function() {
			this.isDialogCover = false;
			this.isVersionDialog = false;
			this.isOptionDialog = false;
		},
		reload: function() {
			location.reload();
		}
	}
}