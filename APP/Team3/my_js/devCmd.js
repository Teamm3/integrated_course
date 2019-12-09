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
		send_requests(cmd_code) {
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
		send_code() {
			let res = this.send_requests(this.cmd_code_input);
			if (200 == res.code) {
				uni.showToast({
					title: "命令发送成功！",
					icon: "none",
					duration: 2000
				});
			} else {
				uni.showToast({
					title: "命令发送失败！",
					icon: "none",
					duration: 2000
				});
			}
		},
		change_red() {
			let cmd_code = "off" == this.red_src ? 0 : 1;
			let res = this.send_requests(cmd_code);
			if (200 == res.code) {
				uni.showToast({
					title: "点亮红灯成功！",
					icon: "none",
					duration: 3000
				});
				this.red_src = "red";
			} else {
				uni.showToast({
					title: "点亮红灯失败！",
					icon: "none",
					duration: 3000
				});
			}
		},
		change_green() {
			let cmd_code = "off" == this.green_src ? 2 : 3;
			let res = this.send_requests(cmd_code);
			if (200 == res.code) {
				uni.showToast({
					title: "绿灯点亮成功！",
					icon: "none",
					duration: 3000
				});
				this.green_src = "green";
			} else {
				uni.showToast({
					title: "绿灯点亮失败！",
					icon: "none",
					duration: 3000
				});
			}
		},
		change_blue() {
			let cmd_code = "off" == this.blue_src ? 4 : 5;
			let res = this.send_requests(cmd_code);
			if (200 == res.code) {
				uni.showToast({
					title: "蓝灯点亮成功！",
					icon: "none",
					duration: 3000
				});
				this.blue_src = "blue";
			} else {
				uni.showToast({
					title: "蓝灯点亮失败！",
					icon: "none",
					duration: 3000
				})
			}
		},
		beep_up(){
			let cmd_code = 8;
			let res = this.send_requests(cmd_code);
			if(200 == res.code){
				uni.showToast({
					title:"蜂鸣器警报已经打开",
					icon:"none",
					duration:2000
				})
			}
			else{
				uni.showToast({
					title:"蜂鸣器打开失败",
					icon:"none",
					duration:2000
				})
			}
		}
	}
}
