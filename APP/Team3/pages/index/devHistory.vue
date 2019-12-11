<template>
	<view>
		<view class="header">
			<view class="icon1">
				<image src="../../static/images/his4.png" class="icon"></image>
			</view>
			<view class="icon2">
				<image src="../../static/images/his1.png" class="icon"></image>
			</view>
			<view class="icon2">
				<image src="../../static/images/his2.png" class="icon"></image>
			</view>
			<view class="icon2">
				<image src="../../static/images/his5.png" class="icon"></image>
			</view>
			<view class="icon2">
				<image src="../../static/images/his3.png" class="icon"></image>
			</view>
		</view>
		<view class="content">
			<view class="item" v-for="(item, index) in history" :key="index">
				<view class="time">
					<text class="info-item-text">{{item.day}}</text>
					<text decode="true">\n</text>
					<text class="info-item-text" style="padding-left: 10upx;">{{item.time}}</text>
				</view>
				<view class="info-detail">
					<view class="info-detail-item">
						<text class="info-item-text">{{item.T}}℃</text>
					</view>
					<view class="info-detail-item">
						<text class="info-item-text">{{item.H}}%</text>
					</view>
					<view class="info-detail-item">
						<text class="info-item-text">{{item.L}}Lux</text>
					</view>
					<view class="info-detail-item">
						<text class="info-item-text">{{item.S}}dB</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<style>
	*{
		background: #FFFFFF;
	}
	.header{
		height: 10%;
		width: 100%;
		margin-left: 6%;
		margin-top: 15upx;
	}
	.icon1{
		height: 90%;
		width: 15%;
		margin-top: 5%;
		margin-left: 20upx;
		margin-right: 20upx;
		display: inline-block;
	}
	.icon2{
		height: 90%;
		margin-left: 38upx;
		width: 13%;
		display: inline-block;
	}
	.icon{
		height: 90%;
		width: 60upx;
		height: 60upx;
	}
	.content{
		width: 100%;
		margin-left: 4%;
		margin-top: 10upx;
		display: inline-block;
	}
	.item{
		margin-top: 10upx;
	}
	.time{
		width: 15%;
		align-content: center;
		align-items: center;
		height: 50upx;
		display: inline-block;
	}
	.info-detail{
		width: 75%;
		height: 50upx;
		margin-left: 10%;
		display: inline-block;
		padding-bottom: 10upx;
		margin-bottom:25upx;
	}
	.info-detail-item{
		width: 22%;
		height: 100%;
		align-content: center;
		align-items: center;
		margin-right: 8upx;
		padding-bottom: 10%;
		vertical-align: middle;
		display: inline-block;
	}
	.info-item-text{
		color: #123456;
		font-size: 25upx;
		font-weight: bold;
		align-content: center;
		padding-left: 5upx;
	}
</style>
<script src="../../my_js/devHistory.js"></script>
