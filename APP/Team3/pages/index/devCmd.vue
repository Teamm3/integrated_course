<template style="background: #FFFFFF;">
	<view style="background: #FFFFFF;">
		<view class="example-body" style="align-content: center;">
			<view class="icon-item">
				<button type="primary" @click="change_red" style="align-content: center; background: #FFFFFF;" size="40">
					<image :src="'/static/images/light/'+red_src+'.png'" class="image"></image>
				</button>
				<text class="icon-item-text">红灯</text>
			</view>
			<view class="icon-item">
				<button type="primary" @click="change_green" style="align-content: center; background: #FFFFFF;" size="40">
					<image :src="'/static/images/light/'+green_src+'.png'" class="image"></image>
				</button>
				<text class="icon-item-text">绿灯</text>
			</view>
			<view class="icon-item">
				<button type="primary" @click="change_blue" style="align-content: center; background: #FFFFFF;" size="40">
					<image :src="'/static/images/light/'+blue_src+'.png'" class="image"></image>
				</button>
				<text class="icon-item-text">蓝灯</text>
			</view>
		</view>
	</view>
</template>
<style>
	/* 头条小程序组件内不能引入字体 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		font-weight: normal;
		font-style: normal;
		src: url('~@/static/uni.ttf') format('truetype');
	}

	/* #endif */

	/* #ifndef APP-NVUE */
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	view {
		font-size: 28rpx;
		line-height: inherit;
	}

    .base{
		background: #FFFFFF;
	}

	.image{
		width: 90upx;
		height: 90upx;
		margin-top: 40upx;
		margin-bottom: 40upx;
	}

	.example {
		padding: 0 30rpx 30rpx;
	}

	.example-info {
		padding: 30rpx;
		color: #3b4144;
		background: #ffffff;
	}

	.example-body {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14rpx;
		background-color: #ffffff;
	}

	/* #endif */
	.example {
		padding: 0 30rpx;
	}

	.example-info {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 30rpx;
		color: #3b4144;
		background-color: #ffffff;
		font-size: 30rpx;
	}

	.example-info-text {
		font-size: 28rpx;
		line-height: 36rpx;
	}


	.example-body {
		flex-direction: column;
		padding: 30rpx;
		background-color: #ffffff;
	}

	.word-btn-white {
		font-size: 18px;
		color: #FFFFFF;
	}

	.word-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
		height: 48px;
		margin: 15px;
		background-color: #007AFF;
	}

	.word-btn--hover {
		background-color: #4ca2ff;
	}


	.example-body {
		padding: 0;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}

	.uni-right {
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		color: #666;
	}

	.uni-right-text {
		font-size: 28rpx;
	}

	.switch {
		transform: scale(0.8);
		margin-left: 5px;
	}

	.icon-item {
		/* #ifndef APP-NVUE */
		display: inline-flex;
		/* box-sizing: border-box; */
		/* #endif */
		width: 180upx;
		height: 160upx;
		padding: 1upx 1upx;
		text-align: center;
		flex-direction: column;
		margin-left: 30upx;
		margin-right: 30upx;
	}

	.icon-item-text {
		font-size: 24rpx;
		text-align: center;
	}
</style>
<script src="../../my_js/devCmd.js"></script>
