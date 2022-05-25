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
    OptionDialog,
  },
  data() {
    return {
      video: "assets/img/video.mp4",
      style: "",
      nightModeImage: "assets/img/night_mode.svg",
      nightMode: 0,
      optionImage: "assets/img/option.svg",
      isCover: false,
      isUpdateAlert: false,
      isDialogCover: false,
      isVersionDialog: false,
      isOptionDialog: false,
      option: {
        theme: "default",
        language: "ja_JP",
      },
    };
  },
  mounted: function () {
    document.title = "Ahoxa";
    if (localStorage.getItem("ahoxa") !== null) {
      this.option = JSON.parse(localStorage.getItem("ahoxa"));
      if (this.option.language == undefined) {
        this.option.language = "ja_JP";
      }
    }
    this.loadTheme(this.option.theme);
    const v = document.getElementById("video");
    v.volume = 0;
    v.play();
  },
  methods: {
    changeNightMode: function () {
      this.nightMode++;
      if (this.nightMode == 2) {
        this.nightMode = 0;
      }
      if (this.nightMode == 1) {
        this.isCover = true;
      }
      if (this.nightMode == 0) {
        this.isCover = false;
      }
    },
    openVersionDialog: function () {
      this.isDialogCover = true;
      this.isVersionDialog = true;
    },
    openUpdateAlert: function () {
      this.isUpdateAlert = true;
    },
    openOptionDialog: function () {
      this.isDialogCover = true;
      this.isOptionDialog = true;
    },
    closeDialog: function () {
      this.isDialogCover = false;
      this.isVersionDialog = false;
      this.isOptionDialog = false;
    },
    loadTheme: function (name) {
      this.axios
        .get(`./themes/${name}/theme.json?timestamp=${new Date().getTime()}`)
        .then((response) => {
          this.style =
            "background-image: url('themes/" +
            name +
            "/" +
            response.data.image +
            "')";
        })
        .catch((e) => {
          console.log(e);
        });
    },
    changeOption: function (option) {
      this.option = option;
      this.loadTheme(this.option.theme);
      localStorage.setItem("ahoxa", JSON.stringify(this.option));
    },
    reload: function () {
      location.reload();
    },
  },
};
