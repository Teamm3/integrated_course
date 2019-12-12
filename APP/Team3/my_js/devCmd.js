export default {
    data() {
        return {
            minT: 20.1,
            maxT: 30.1,
            minH: 10.1,
            maxH: 40.1,
            red_light: true,
            blue_light: true,
            green_light: true,
            autoWarn: true,
            img_path: '0',
            cmd_str: '123321'
            // cmd_code_input: 0
        }
    },
    methods: {
        refresh() {
            let red = this.red_light ? 100 : 0;
            let green = this.green_light ? 10 : 0;
            let blue = this.blue_light ? 1 : 0;
            this.img_path = (red + green + blue).toString();
        },
        change(number) {
            let cmd_code = 0;
            let target = "";
            let cmd_para = {
                cmdstring: this.cmd_str,
                cmdlen: this.cmd_str.length,
                cmdcode: cmd_code
            }
            let cmdstr;
            switch (number) {
                case 1:
                    cmd_code = this.red_light ? 1 : 0;
                    cmd_para.cmdcode = cmd_code;
                    cmdstr = JSON.stringify(cmd_para);
                    uni.request({
                        url: this.globalVal.default_url.devCmd,
                        method: 'POST',
                        data: {
                            deviceId: this.globalVal.devId,
                            cmdInfo: cmdstr
                        },
                        success: res => {
                            target = !this.red_light ? "点亮红灯" : "熄灭红灯";
                            uni.showToast({
                                title: target + "成功!",
                                duration: 1000,
                                icon: "none"
                            });
                            this.red_light = !this.red_light;
                            this.refresh();
                        },
                        fail: () => {
                            target = !this.red_light ? "点亮红灯" : "熄灭红灯";
                            uni.showToast({
                                title: target + "失败!",
                                duration: 1000,
                                icon: "none"
                            });
                        }
                    });
                    break;
                case 2:
                    cmd_code = this.green_light ? 3 : 2;
                    cmd_para.cmdcode = cmd_code;
                    cmdstr = JSON.stringify(cmd_para);
                    uni.request({
                        url: this.globalVal.default_url.devCmd,
                        method: 'POST',
                        data: {
                            deviceId: this.globalVal.devId,
                            cmdInfo: cmdstr
                        },
                        success: res => {
                            target = !this.green_light ? "点亮绿灯" : "熄灭绿灯";
                            uni.showToast({
                                title: target + "成功!",
                                duration: 1000,
                                icon: "none"
                            });
                            this.green_light = !this.green_light;
                            this.refresh();
                        },
                        fail: () => {
                            target = !this.green_light ? "点亮绿灯" : "熄灭绿灯";
                            uni.showToast({
                                title: target + "失败!",
                                duration: 1000,
                                icon: "none"
                            });
                        }
                    });
                    break;
                case 3:
                    cmd_code = this.blue_light ? 5 : 4;
                    cmd_para.cmdcode = cmd_code;
                    cmdstr = JSON.stringify(cmd_para);
                    uni.request({
                        url: this.globalVal.default_url.devCmd,
                        method: 'POST',
                        data: {
                            deviceId: this.globalVal.devId,
                            cmdInfo: cmdstr
                        },
                        success: res => {
                            target = !this.blue_light ? "点亮蓝灯" : "熄灭蓝灯";
                            uni.showToast({
                                title: target + "成功!",
                                duration: 1000,
                                icon: "none"
                            });
                            this.blue_light = !this.blue_light;
                            this.refresh();
                        },
                        fail: () => {
                            target = !this.blue_light ? "点亮蓝灯" : "熄灭蓝灯";
                            uni.showToast({
                                title: target + "失败!",
                                duration: 1000,
                                icon: "none"
                            });
                        }
                    });
                    break;
            }
        },
        changeAuto() {
            let cmd_code = this.autoWarn ? 11 : 10;
            // let cmd_code = 0;
            // let target = "";
            let cmd_para = {
                cmdstring: this.cmd_str,
                cmdlen: this.cmd_str.length,
                cmdcode: cmd_code
            }
            let target = this.autoWarn ? "关闭自动报警" : "打开自动报警";
            let cmdstr = JSON.stringify(cmd_para);
            uni.request({
                url: this.globalVal.default_url.devCmd,
                method: 'POST',
                data: {
                    deviceId: this.globalVal.devId,
                    cmdInfo: cmdstr
                },
                success: res => {
                    // target = this.red_light ? "点亮蓝灯" : "熄灭蓝灯";
                    uni.showToast({
                        title: target + "成功!",
                        duration: 1000,
                        icon: "none"
                    });
                    this.red_light = !this.red_light;
                    this.refresh();
                },
                fail: () => {
                    // target = this.red_light ? "点亮蓝灯" : "熄灭蓝灯";
                    uni.showToast({
                        title: target + "失败!",
                        duration: 1000,
                        icon: "none"
                    });
                }
            });
        },
        submitWarn() {
            let cmd_code = 12;
            this.cmd_str = this.minT.toString() + ' ' + this.maxT.toString() + ' ' + this.minH.toString() + ' ' + this.maxH.toString();
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
                        title: "上传警戒值成功!",
                        icon: "none",
                        duration: 1000
                    });
                },
                fail: () => {
                    uni.showToast({
                        title: "上传警戒值失败!",
                        icon: "none",
                        duration: 1000
                    });
                }
            });
        },
    }
}