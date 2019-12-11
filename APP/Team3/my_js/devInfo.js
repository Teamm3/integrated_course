import uCharts from '@/my_js/u-charts.js';
import { isJSON } from '@/my_js/checker.js';

var _self;
var canvaLineA = null;
export default {
	data() {
		return {
			selectedItem: 1,
			temperature: -45,
			humidity: 0.00,
			sound: 0.00,
			light: 0.00,
			history: [],
			cWidth: '',
			cHeight: '',
			pixelRatio: 1,
			textarea: '',
			temperatures: [{
				name: "temperature",
				data: []
			}],
			humidities: [
				{
					name: "humidity",
					data: []
				}
			],
			lights: [
				{
					name: "light",
					data: []
				}
			],
			sounds: [
				{
					name: "sound",
					data: []
				}
			],
			categories: []
		}
	},
	onLoad() {
		_self = this;
		//#ifdef MP-ALIPAY
		uni.getSystemInfo({
			success: function (res) {
				if (res.pixelRatio > 1) {
					//正常这里给2就行，如果pixelRatio=3性能会降低一点
					//_self.pixelRatio =res.pixelRatio;
					_self.pixelRatio = 2;
				}
			}
		});
		//#endif
		this.cWidth = uni.upx2px(750);
		this.cHeight = uni.upx2px(500);
		this.getInfo();
		this.prepareData();
		console.log(this.categories);
		console.log(this.temperatures);
		console.log(this.humidities);
		console.log(this.lights);
		console.log(this.sounds);
		this.drawLine("temperature");
	},
	onPullDownRefresh() {
		this.selectedItem = 1;
		_self = this;
		console.log("this is in refresh");
		this.getInfo();
		this.prepareData();
		console.log(this.temperatures);
		console.log(this.humidities);
		console.log(this.lights);
		console.log(this.sounds);
		console.log(this.categories);
		this.drawLine("temperature");
	},
	methods: {
		changeItem(number) {
			this.selectedItem = number;
			switch (number) {
				case 1:
					this.drawLine("temperature");
					break;
				case 2:
					this.drawLine("humidity");
					break;
				case 3:
					this.drawLine("light");
					break;
				case 4:
					this.drawLine("sound");
					break;
			}
		},
		getInfo() {
			uni.showToast({
				title: "数据加载中......",
				mask: false,
				duration: 1000
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
							this.sound = val.S;
							this.light = val.L;
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
				if (undefined == item.data) {
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
				console.log("this is a timestamp");
				console.log(time_item);
				let year = time_item.substr(0, 4);
				let month = time_item.substr(4, 2);
				let day = time_item.substr(6, 2)
				let my_time = year + '年' + month + '月' + day + '日';
				// let my_time = year + month + day;
				item.timestamp = my_time;
				result.push(item);
			}
			return result;
		},
		prepareData() {
			console.log("preparing data");
			uni.request({
				url: this.globalVal.default_url.devHistory,
				method: "POST",
				data: {
					deviceId: this.globalVal.devId
				},
				success: res => {
					// console.log("kajshdkjahdkjshdkjas");
					if (200 == res.statusCode) {
						if (undefined == res.data.error_code) {
							console.log("成功获取历史信息");
							console.log(res);
							console.log("初始历史");
							console.log(res);
							let result = this.checkHistory(res.data.deviceDataHistoryDTOs);
							this.temperatures[0].data = [];
							this.humidities[0].data = [];
							this.lights[0].data = [];
							this.sounds[0].data = [];
							this.categories = [];
							for (let item in result) {
								let each = result[item];
								this.temperatures[0].data.unshift(parseFloat(each.data.infostring.T));
								this.humidities[0].data.unshift(parseFloat(each.data.infostring.H));
								this.lights[0].data.unshift(parseFloat(each.data.infostring.L));
								this.sounds[0].data.unshift(parseFloat(each.data.infostring.S));
								this.categories.unshift(each.timestamp);
								console.log(each.timestamp);
							}

							this.categories = this.getCats(result);
						}
					}
				}
			})
		},
		getCats(items) {
			let categories = [];
			for (let item in items) {
				let each = items[item];
				categories.unshift(each.timestamp);
			}
			return categories;
		},
		showLineA(canvasId, chartData) {
			console.log("this is in showLine");
			console.log(chartData);
			canvaLineA = new uCharts({
				$this: _self,
				canvasId: canvasId,
				type: 'line',
				fontSize: 11,
				padding: [0, 0, 0, 0],
				legend: {
					show: false,
					padding: 5,
					lineHeight: 11,
					margin: 0,
				},
				dataLabel: true,
				dataPointShape: true,
				background: '#FFFFFF',
				pixelRatio: _self.pixelRatio,
				dataLabel: false,
				categories: chartData.categories,
				series: chartData.series,
				animation: true,
				enableScroll: true,
				xAxis: {
					disabled: true,
					type: 'grid',
					gridType: 'dash',
					itemCount: 6,//x轴单屏显示数据的数量，默认为5个
					scrollShow: true,//新增是否显示滚动条，默认false
					scrollAlign: 'left',//滚动条初始位置
					scrollBackgroundColor: '#F7F7FF',//默认为 #EFEBEF
					scrollColor: '#DEE7F7',//默认为 #A6A6A6
				},
				yAxis: {
					disabled: true
					// gridType: 'dash',
					// gridColor: '#CCCCCC',
					// dashLength: 8,
					// min: 21,
					// max: 22,
					// splitNumber: 1,
					// format: (val) => { return val.toFixed(0) }
				},
				width: _self.cWidth * _self.pixelRatio,
				height: _self.cHeight * _self.pixelRatio,
				extra: {
					line: {
						type: 'curve'
					}
				}
			});
		},
		touchLineA(e) {
			canvaLineA.scrollStart(e);
			canvaLineA.touchLegend(e);
			canvaLineA.showToolTip(e, {
				format: function (item, category) {
					let result;
					if ("temperature" == item.name) {
						result = category.substr(5) + ' ' + item.data + "℃";
					}
					else if ("humidity" == item.name) {
						result = category.substr(5) + ' ' + item.data + '%';
					}
					else if ("light" == item.name) {
						result = category.substr(5) + ' ' + item.data + "Lux";
					}
					else {
						result = category.substr(5) + ' ' + item.data + 'dB';
					}
					return result;
				}
			});
		},
		drawLine(type) {
			let LineA = {
				categories: [],
				series: []
			};
			LineA.categories = this.categories;
			if ("temperature" == type) {
				LineA.series = this.temperatures;
			}
			else if ("humidity" == type) {
				LineA.series = this.humidities;
			}
			else if ("light" == type) {
				LineA.series = this.lights;
			} else {
				LineA.series = this.sounds;
			}
			_self.textarea = JSON.stringify(LineA);
			_self.showLineA("canvasLineA", LineA);
		},
		changeData() {
			if (isJSON(_self.textarea)) {
				let newdata = JSON.parse(_self.textarea);
				canvaLineA.updateData({
					series: newdata.series,
					categories: newdata.categories
				});
			} else {
				uni.showToast({
					title: '数据格式错误',
					image: '../../../static/images/alert-warning.png'
				})
			}
		},
		moveLineA(e) {
			canvaLineA.scroll(e);
		},
		touchEndLineA(e) {
			canvaLineA.scrollEnd(e);
			//下面是toolTip事件，如果滚动后不需要显示，可不填写
			canvaLineA.showToolTip(e, {
				format: function (item, category) {
					let result;
					if ("temperature" == item.name) {
						result = category.substr(5) + ' ' + item.data + "℃";
					}
					else if ("humidity" == item.name) {
						result = category.substr(5) + ' ' + item.data + '%';
					}
					else if ("light" == item.name) {
						result = category.substr(5) + ' ' + item.data + "Lux";
					}
					else {
						result = category.substr(5) + ' ' + item.data + 'dB';
					}
					return result;
				}
			});
		}
	}
}