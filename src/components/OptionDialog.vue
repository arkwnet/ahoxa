<template>
	<div class="dialog">
		<div class="header">設定</div>
		<div class="contents">
			<table>
				<tbody>
					<tr>
						<th>テーマ</th>
						<td>
							<select>
								<option>blue</option>
							</select>
						</td>
					</tr>
					<tr>
						<th>言語 (Language)</th>
						<td>
							<select>
								<option>日本語</option>
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
	emits: ["closeDialog"],
	data() {
		return {
			logoImage: "assets/logo.svg",
			version: require("../../package.json").version
		}
	},
	methods: {
		closeDialog: function() {
			this.$emit("closeDialog");
		}
	}
}
</script>

<style scoped lang="scss">
@import "../assets/sass/Dialog.scss";
@import "../assets/sass/OptionDialog.scss";
</style>