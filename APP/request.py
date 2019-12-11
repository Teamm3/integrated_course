import requests

headers = {
    'Host': 'wifirelay.hanxe.com',
    'Referer': 'https://servicewechat.com/touristappid/devtools/page-frame.html',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.3 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1 wechatdevtools/1.02.1910120 MicroMessenger/7.0.4 Language/zh_CN webview/'
}
data = {
    'deviceId': 'bbd9557f-a4e0-43fd-9e77-6cec9f34c998'
}
try:
    res = requests.post(
        url="https://wifirelay.hanxe.com/gateway/iotgateway/ke1extend/devhistory", headers=headers, data=data)
    with open('result.json', 'w', encoding='utf8') as file:
        file.write(res.text)
        file.close()
except Exception as e:
    print(str(e))
