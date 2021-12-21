<template>
	<div class="dialog">
		<div class="header">設定</div>
		<div class="contents">
			<table>
				<tbody>
					<tr>
						<th>テーマ</th>
						<td>
							<select v-model="option.theme" @change="changeOption">
								<option v-for="theme in optionThemes" :key="theme.name" :value="theme.name">{{ theme.name }}</option>
							</select>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="button" @click="closeDialog()">閉じる</div>
	</div>
</template>

<script>
export default {
	name: "App",
	components: {},
	props: {
		currentOption: Object
	},
	emits: ["closeDialog", "changeOption"],
	data() {
		return {
			option: {
				"theme": "blue"
			},
			optionThemes: []
		}
	},
	mounted: function() {
		this.option = this.currentOption;
		this.axios.get("./config.json").then((response) => {
			let optionThemes = [];
			for (let i = 0; i < response.data.themes.length; i++) {
				optionThemes.push({name: response.data.themes[i]});
			}
			this.optionThemes = optionThemes;
		}).catch((e) => {
			console.log(e);
		});
	},
	methods: {
		closeDialog: function() {
			this.$emit("closeDialog");
		},
		changeOption: function() {
			this.$emit("changeOption", this.option);
		}
	}
}
</script>

<style scoped lang="scss">
@import "../assets/sass/Dialog.scss";
@import "../assets/sass/OptionDialog.scss";
</style>