export default {
    data() {
        return {
            history: []
        }
    },
    onLoad() {
        this.getHistory();
    },
    onPullDownRefresh() {
        this.getHistory();
    },
    methods: {
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
                let hour = (parseInt(time_item.substr(9, 2)) + 8).toString();
                let minute = time_item.substr(11, 2);
                let my_time = year + '年' + month + '月' + day + '日 ' + hour + ':' + minute;
                // let my_time = year + month + day;
                item.timestamp = my_time;
                result.push(item);
            }
            return result;
        },
        getHistory() {
            console.log("getHistory");
            uni.request({
                url: this.globalVal.default_url.devHistory,
                method: "POST",
                data: {
                    deviceId: this.globalVal.devId
                },
                success: res => {
                    if (200 == res.statusCode) {
                        if (undefined == res.data.error_code) {
                            console.log("成功获取历史信息");
                            let result = this.checkHistory(res.data.deviceDataHistoryDTOs);
                            for (let each_item in result) {
                                let each = result[each_item];
                                let item = {
                                    T: each.data.infostring.T,
                                    H: each.data.infostring.H,
                                    L: each.data.infostring.L,
                                    S: each.data.infostring.S,
                                    timestamp: each.timestamp
                                }
                                this.history.push(item);
                            }
                        }
                    }
                }
            });
        }
    }
}