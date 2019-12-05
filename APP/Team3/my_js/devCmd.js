export default {
	data() {
		return {
			red_src: 'off',
			green_src: 'off',
			blue_src: 'off',
			cmd_str: '123321',
			cmd_code_input: 0
		}
	},
	methods: {
		send_code() {
			let cmd_code = this.cmd_code_input;
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
					uni.showToast({
						title: "命令已发送!",
						icon: "none",
						duration: 2000
					})
				},
				fail: () => {
					uni.showToast({
						title: "命令发送失败!",
						duration: 2000
					});
				}
			});
		},
		test() {
			console.info('this is a info');
			console.log('this is a log');
		},
		change_red(e) {
			console.log(this.red_src);
			let cmd_code = 0;
			if ('off' == this.red_src) {
				cmd_code = 1;
			}
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
					let title = "";
					if (cmd_code == 1) {
						title = "红灯已点亮！";
						this.red_src = 'red';
					} else {
						title = "红灯已熄灭！";
						this.red_src = 'off';
					}
					uni.showToast({
						title: title,
						icon: "none",
						duration: 2000
					})
				},
				fail: () => {
					let title = "";
					if (cmd_code == 1) {
						title = "红灯点亮失败！";
					} else {
						title = "红灯熄灭失败！";
					}
					uni.showToast({
						title: title,
						duration: 2000
					});

				},
				complete: () => {}
			});
			console.log(this.red_src);
		},
		change_green(e) {
			console.log(this.green_src);
			let cmd_code = 2;
			if ('off' == this.green_src) {
				cmd_code = 3;
			}
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
					let title = "";
					if (cmd_code == 3) {
						title = "绿灯已点亮！";
						this.green_src = 'green';
					} else {
						title = "绿灯已熄灭！";
						this.green_src = 'off';
					}
					uni.showToast({
						title: title,
						icon: "none",
						duration: 2000
					})
				},
				fail: () => {
					let title = "";
					if (cmd_code == 3) {
						title = "绿灯点亮失败！";
					} else {
						title = "绿灯熄灭失败！";
					}
					uni.showToast({
						title: title,
						duration: 2000
					});

				},
				complete: () => {}
			});
			console.log(this.green_src);
		},
		change_blue(e) {
			console.log(this.blue_src);
			let cmd_code = 4;
			if ('off' == this.blue_src) {
				cmd_code = 5;
			}
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
					let title = "";
					if (cmd_code == 5) {
						title = "蓝灯已点亮！";
						this.blue_src = 'blue';
					} else {
						title = "蓝灯已熄灭！";
						this.blue_src = 'off';
					}
					uni.showToast({
						title: title,
						icon: "none",
						duration: 2000
					})
				},
				fail: () => {
					let title = "";
					if (cmd_code == 5) {
						title = "蓝灯点亮失败！";
					} else {
						title = "蓝灯熄灭失败！";
					}
					uni.showToast({
						title: title,
						duration: 2000
					});

				},
				complete: () => {}
			});
			console.log(this.blue_src);
		}
	}
}
