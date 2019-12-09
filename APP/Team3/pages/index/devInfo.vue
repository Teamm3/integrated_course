<template>
	<view>
		<view class="title">
			<text class="main-info-text">设备号</text>
			<view></view>
			<text class="main-info-text">bakjhasd-asdaxv-asd-v-as--va--sd-as-d</text>
		</view>
		<view class="bold-line">
		</view>
		<view class="main-info">
			<view class="info-item">
				<text>温度：</text>
				<text>28.35℃</text>
			</view>
			<view class="info-item">
				<text>湿度：</text>
				<text>20%</text>
			</view>
			<view class="info-item">
				<text>光强：</text>
				<text>124124</text>
			</view>
			<view class="info-item">
				<text>音量：</text>
				<text>123Db</text>
			</view>
		</view>
		<view class="footer">
			<button type="primary" class="botton">查看历史记录</button>
		</view>
	</view>
</template>
<style>
	* {
		background: #FFFFFF;
	}
	.title{
		text-align: center;
		height: 160upx;
		vertical-align: middle;
	}
	.bold-line{
		height: 2upx;
		margin-top: 5upx;
		margin-bottom: 5upx;
		background: #CCCCCC;
	}
	.main-info{
		height: 80%;
		margin-top: 20upx;
	}
	.main-info-text{
		font-size: 38upx;
		font-weight: bold;
	}
	.info-item{
		height: 100upx;
		width: 80%;
		/* text-align: center; */
		margin-left: 32%;
		margin-top: 40upx;
		margin-bottom: 30upx;
		font-size: 40upx;
		font-weight: bold;
	}
	.footer{
		width: 45%;
		margin-top: 60upx;
		margin-left: 27.5%;
		text-align: center;
		vertical-align: middle;
		}
	.button{
		
		background: #bfa;
	}
</style>