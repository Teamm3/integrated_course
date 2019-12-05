//http://127.0.0.1:8888, https://wifirelay.hanxe.com
const default_host = "https://wifirelay.hanxe.com/gateway/iotgateway/ke1extend/";
var devId = "bbd9557f-a4e0-43fd-9e77-6cec9f34c998";

var default_url = {
	devReg: default_host + 'devreg',
	devInfo: default_host + 'devinfo',
	devCmd: default_host + 'devcmd',
	devHistory: default_host + 'devhistory'
}
export default {
	default_url,
	devId
}
