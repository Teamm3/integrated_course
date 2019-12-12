export default {
	data() {
		return {
			minT: 20.1,
			maxT: 30.1,
			minH: 10.1,
			maxH: 40.1,
			red_light: false,
			blue_light: false,
			green_light: false,
			autoWarn: true,
			img_path: '0',
			cmd_str: '123321'
			// cmd_code_input: 0
		}
	},
	methods: {
		send_code(cmd_code) {
			let result = {};
			let cmd_para = {
				cmdstring: this.cmd_str,
				cmdlen: this.cmd_str.length,
				cmdcode: cmd_code
			}
			let cmdstr = JSON.stringify(cmd_para);
			uni.request({
				url: this.globalVal.default_url.devCmd,
				method: 'POST',
				data: {
					deviceId: this.globalVal.devId,
					cmdInfo: cmdstr
				},
				success: res => {
					result = {
						code: 200,
						response: res
					}
				},
				fail: () => {
					result = {
						code: 400,
						response: null
					}
				}
			});
			return result;
		},
		refresh() {
			let red = this.red_light ? 100 : 0;
			let green = this.green_light ? 10 : 0;
			let blue = this.blue_light ? 1 : 0;
			this.img_path = (red + green + blue).toString();
		},
		change(num) {
			console.log("this is in change");
			console.log(this.red_light);
			console.log(this.green_light);
			console.log(this.blue_light);
			let cmd_code = 0;
			let res;
			let target;
			switch (num) {
				case 1:
					if (true == this.red_light)
						cmd_code = 0;
					else cmd_code = 1;
					res = this.send_code(cmd_code);
					target = this.red_light ? "点亮红灯" : "熄灭红灯";
					if (200 == res.code) {
						uni.showToast({
							title: target + "成功!",
							duration: 1000,
							icon: "none"
						});
						this.red_light = !this.red_light;
						this.refresh();
					} else {
						uni.showToast({
							title: target + "失败!",
							duration: 1000,
							icon: "none"
						});
					}
					break;
				case 2:
					// let cmd_code;
					if (true == this.green_light)
						cmd_code = 2;
					else cmd_code = 3;
					res = this.send_code(cmd_code);
					target = this.green_light ? "点亮绿灯" : "熄灭绿灯";
					if (200 == res.code) {
						uni.showToast({
							title: target + "成功!",
							duration: 1000,
							icon: "none"
						});
						this.green_light = !this.green_light;
						this.refresh();
					} else {
						uni.showToast({
							title: target + "失败!",
							duration: 1000,
							icon: "none"
						});
					}
					break;
				case 3:
					// let cmd_code;
					if (true == this.blue_light)
						cmd_code = 4;
					else cmd_code = 5;
					res = this.send_code(cmd_code);
					target = this.blue_light ? "点亮蓝灯" : "熄灭蓝灯";
					if (200 == res.code) {
						uni.showToast({
							title: target + "成功!",
							duration: 1000,
							icon: "none"
						});
						this.blue_light = !this.blue_light;
						this.refresh();
					} else {
						uni.showToast({
							title: target + "失败!",
							duration: 1000,
							icon: "none"
						});
					}
					break;
			}
			console.log("change is over");
			console.log(this.red_light);
			console.log(this.green_light);
			console.log(this.blue_light);
		},
		changeAuto() {
			let cmd_code = this.autoWarn ? 11 : 10;
			let res = this.send_code(cmd_code);
			let target = this.autoWarn ? "关闭自动报警" : "打开自动报警";
			if (200 == res.code) {
				uni.showToast({
					title: target + "成功!",
					icon: "none",
					duration: 1000
				});
				this.autoWarn = !this.autoWarn;
			} else {
				uni.showToast({
					title: target + "失败!",
					icon: "none",
					duration: 1000
				});
			}
		},
		submitWarn() {
			let cmd_code = 12;
			this.cmd_str = this.minT.toString() + ' ' + this.maxT.toString() + ' ' + this.minH.toString() + ' ' + this.maxH.toString();
			let res = this.send_code(cmd_code);
			if (200 == res.code) {
				uni.showToast({
					title: "上传警戒值成功!",
					icon: "none",
					duration: 1000
				});
			} else {
				uni.showToast({
					title: "上传警戒值失败!",
					icon: "none",
					duration: 1000
				});
			}
		}
	}
}
