<template>
	<view style="height: 100%;">
		<view class="info-item-1">
			<view class="title">
				<image src="../../static/images/icon1.png" class="icon"></image>
				<view class="title-text">设备信息</view>
			</view>
			<view class="line">
			</view>
			<view class="content">
				<view class="content-item">
					<text>温度：</text>
					<text>{{temperature}}℃</text>
				</view>
				<view class="content-item">
					<text>湿度：</text>
					<text>{{humidity}}%</text>
				</view>
				<view class="content-item">
					<text>光强：</text>
					<text>{{light}}Lux</text>
				</view>
				<view class="content-item">
					<text>噪音：</text>
					<text>{{sound}}dB</text>
				</view>
			</view>
		</view>
		<view class="info-item-2">
			<view class="title">
				<image src="../../static/images/icon2.png" class="icon"></image>
				<view class="title-text">历史信息</view>
				<view class="history-buttom-item">
					<text type="primary" plain="true" class="history-buttom">具体历史信息</text>
				</view>
			</view>
			<view class="line"></view>
			<view class="choice">
				<view :class="selectedItem==1? 'choice-item-selected':'choice-item'" @click="changeItem(1)">
					<text>温度</text>
				</view>
				<view :class="selectedItem==2? 'choice-item-selected':'choice-item'" @click="changeItem(2)">
					<text>湿度</text>
				</view>
				<view :class="selectedItem==3? 'choice-item-selected':'choice-item'" @click="changeItem(3)">
					<text>光强</text>
				</view>
				<view :class="selectedItem==4? 'choice-item-selected':'choice-item'" @click="changeItem(4)">
					<text>噪音</text>
				</view>
			</view>
			<view class="graph">
				<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" disable-scroll=true @touchstart="touchLineA" @touchmove="moveLineA" @touchend="touchEndLineA"></canvas>
			</view>
		</view>
	</view>
</template>
<style>
	@font-face {
		font-family: "Times New Roman";
		src: url("@~/static/fonts/times.ttf");
	}
	*{
		background: #FFFFFF;
		font-family: "Times New Roman";
	}
	.info-item-1{
		/* background: #CC99CC; */
		height: 350upx;
		margin-top: 35upx;
		width: 90%;
		margin-left: 5%;
		
	}
	.info-item-2{
		/* background: #CC99CC; */
		height: 500upx;
		margin-top: 50upx;
		width: 90%;
		margin-left: 5%;
	}
	.title{
		height: 50upx;
	}
	.icon{
		width: 45upx;
		height: 45upx;
		
		text-align: center;
		vertical-align: middle;
	}
	.title-text{
		margin-left: 10upx;
		font-size: 35upx;
		font-weight: 600;
		color: #123456;
		vertical-align: middle;
		display: inline-block;
	}
	.line{
		height: 1px;
		margin-top: 35upx;
		background: #CC99CC;
		width: 70%;
		margin-left: 20%;
	}
	.history-buttom-item{
		height: 45upx;
		width: 210upx;
		margin-left: 30%;
		background: #FFFFFF;
		border-width: 2upx;
		border-color: #123456;
		border-radius: 15upx;
		border-style: solid;
		display: inline-block;
		text-align: center;
		vertical-align: middle;
		/* align-items: center; */
		padding-bottom: 9upx;
		}
	.history-buttom{
		background: #FFFFFF;
		font-size: 27upx;
		background: #FFFFFF;
		color: #123456;
		font-weight: 400;
		text-align: center;
		vertical-align: middle;
	}
	.content{
		margin-top: 25upx;
		margin-left: 8%;
		text-align: left;
	}
	.content-item{
		margin-bottom: 5upx;
		vertical-align: middle;
		font-family: "Times New Roman";
		font-size: 35upx;
		font-weight: 500;
		color: #123456;
	}
	.choice{
		width: 50%;
		height: 45upx;
		margin-left: 45%;
		margin-top: 10upx;
		background: #FFFFFF;
	}
	.choice-item{
		margin-right: 10upx;
		background: #E4C9E4;
		border: #E4C9E4;
		border-style: solid;
		border-width: 1upx;
		border-radius: 12upx;
		width: 70upx;
		height: 40upx;
		font-size: 30upx;
		font-weight: 500;
		text-align: center;
		vertical-align: middle;
		padding-bottom: 5upx;
		display: inline-block;
		/* align-items: center; */
	}
	.choice-item-selected{
		margin-right: 10upx;
		background: #FFFFFF;
		border: #E4C9E4;
		border-style: solid;
		border-width: 1upx;
		border-radius: 12upx;
		width: 70upx;
		height: 40upx;
		font-size: 30upx;
		font-weight: 500;
		text-align: center;
		vertical-align: middle;
		padding-bottom: 5upx;
		display: inline-block;
	}
	.graph{
		width: 100%;
		height: 500upx;
		margin-top: 20upx;
	}
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
	
	.charts {
		width:  100%;
		height: 500upx;
		background-color: #FFFFFF;
	}
</style> 
<script src="../../my_js/devInfo.js"></script>