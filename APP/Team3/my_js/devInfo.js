	export default {
		data() {
			return {
				temperature: null,
				humidity: null,
				history: [],
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			}
		},
		onLoad() {
			console.info("执行onLoad");
			this.getInfo();
			this.getHistory();
		},
		onPullDownRefresh() {
			console.info("执行onPullDownRefresh");
			this.getInfo();
			this.getHistory();
		},
		methods: {
			getInfo() {
				uni.showToast({
					title: "数据加载中......",
					mask: false
				});
				uni.request({
					url: this.globalVal.default_url.devInfo,
					method: "POST",
					data: {
						deviceId: this.globalVal.devId
					},
					success: res => {
						if (200 == res.statusCode) {
							console.info(res)
							let devinfo = JSON.stringify(res.data);
							if (undefined == res.data.error_code) {
								let userinfo = res.data.services[0].data.infostring;
								let val = JSON.parse(userinfo);
								this.temperature = val.T;
								this.humidity = val.H;
							}
						}
					}
				});
			},
			checkHistory(history) {
				// console.log(history);
				let result = [];
				for (let index in history) {
					let item = history[index];
					if (undefined == item.data)
						{
							// console.log("踢掉了一个");
							continue;
						}
					// console.log(Object.keys(item.data));
					let info = item.data.infostring;
					if (undefined == info)
						continue;
					if (null == info)
						continue;
					let tem = item.data.infostring.T;
					let hum = item.data.infostring.H;
					if (hum == 0.00)
						continue;
					let time_item = item.timestamp.toString();
					let year = time_item.substr(0, 4);
					let month = time_item.substr(4, 2);
					let day = time_item.substr(6, 2)
					let my_time = year + '年' + month + '月' + day + '日';
					item.timestamp = my_time;
					result.push(item);
				}
				return result;
			},
			getHistory() {
				uni.request({
					url: this.globalVal.default_url.devHistory,
					method: "POST",
					data: {
						deviceId: this.globalVal.devId
					},
					success: res => {
						if (200 == res.statusCode) {
							if (undefined == res.data.error_code) {
								this.history = this.checkHistory(res.data.deviceDataHistoryDTOs);
							}
						}
					}
				});
			},
			upper: function(e) {
				console.log(e);
			},
			lower: function(e) {
				console.log(e);
			},
			scroll: function(e) {
				console.log(e);
				this.old.scrollTop = e.detail.scrollTop;
			},
			goTop: function(e) {
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
			}
		}
	}