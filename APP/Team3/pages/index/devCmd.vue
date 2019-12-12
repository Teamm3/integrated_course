<template>
	<view>
		<view class="light">
			<view class="title">
				<text class="title-text">灯光控制</text>
			</view>
			<view class="line"></view>
			<view class="light-content">
				<view class="picture">
					<image :src="'../../static/images/light/'+img_path+'.png'" class="light-image"></image>
				</view>
				<view class="switchs">
					<view class="switch-item">
						<text class="switch-text">红灯</text>
						<switch color="#123456" :checked="red_light" @change="change(1)" class="switch" />
					</view>
					<view class="switch-item">
						<text class="switch-text">绿灯</text>
						<switch color="#123456" :checked="green_light" @change="change(2)" class="switch" />
					</view>
					<view class="switch-item">
						<text class="switch-text">蓝灯</text>
						<switch color="#123456" :checked="blue_light" @change="change(3)" class="switch" />
					</view>
				</view>
			</view>
		</view>
		<view class="beep">
			<view class="title">
				<text class="title-text">蜂鸣器控制</text>
			</view>
			<view class="line"></view>
			<view class="beep-content">
				<view class="auto-beep">
					<text class="switch-text">自动报警</text>
					<switch color="#123456" :checked="autoWarn" @change="changeAuto" class="switch"/>
				</view>
				<view class="beep-range">
					<view class="beep-range-item">
						<view class="range-item-text">
							<text class="switch-text">温度范围</text>
						</view>
						<view class="range-item-input">
							<input v-model="minT" class="input" type="number"/>
						</view>
						<view class="line-view">
							<view class="short-line"></view>
						</view>
						<view class="range-item-input">
							<input v-model="maxT" class="input" type="number"/>
						</view>
					</view>
					<view class="beep-range-item">
						<view class="range-item-text">
							<text class="switch-text">湿度范围</text>
						</view>
						<view class="range-item-input">
							<input v-model="minH" class="input" type="number"/>
						</view>
						<view class="line-view">
							<view class="short-line"></view>
						</view>
						<view class="range-item-input">
							<input v-model="maxH" class="input" type="number"/>
						</view>
					</view>
				</view>
				<view class="warning">
					<text class="warning-text">注意！超出温湿度范围将会触发警报</text>
				</view>
				<view class="beep-buttom">
					<button type="default" class="buttom" plain="true" @click="submitWarn">上传警戒值</button>
				</view>
			</view>
		</view>
	</view>
</template>
<style>
	* {
		background: #FFFFFF;
	}

	.beep-buttom{
		width: 60%;
		text-align: center;
		height: 100upx;
		margin-top: 10upx;
		margin-left: 20%;
	}

	.buttom{
		background: #FFFFFF;
		border-color: #123456;
		border-width: 2upx;
		border-radius: 15upx;
		width: 50%;
		font-size: 27upx;
		color: #123456;
		font-weight: 500;
	}

	.warning{
		width: 80%;
		text-align: center;
		margin-top: 3upx;
	}
	.warning-text{
		color: #DD524D;
		font-size: 30upx;
		font-weight: bold;
	}

	.range-item-text{
		display: inline-block;
		margin-top: 26upx;
		margin-right: 10upx;
		vertical-align: top;
	}

	.range-item-input{
		display: inline-block;
		margin-top: 6upx;
		margin-left: 10upx;
		margin-right: 10upx;
	}

	.light {
		width: 100%;
		height: 40%;
		margin-top: 5%;
	}

	.beep {
		width: 100%;
		height: 50%;
		margin-top: 3%;
	}

	.title {
		width: 40%;
		height: 50upx;
		margin-left: 60upx;
	}

	.title-text {
		color: #123456;
		font-size: 36upx;
		font-weight: bold;
	}

	.line {
		background: #CC99CC;
		height: 2upx;
		width: 70%;
		margin-left: 15%;
		margin-top: 10upx;
	}

	.light-content {
		/* background: #007AFF; */
		height: 400upx;
		width: 90%;
		margin-left: 7%;
		margin-top: 10upx;
	}

	.beep-content {
		/* background: #007AFF; */
		height: 450upx;
		width: 90%;
		margin-left: 5%;
		margin-top: 10upx;
	}

	.switch {
		transform: scale(0.8);
		margin-left: 10upx;
		color: #123456;
	}

	.picture {
		display: inline-block;
		width: 40%;
		height: 400upx;
		margin-top: 15upx;
		/* padding-bottom: 15upx; */
	}

	.light-image {
		width: 100%;
		height: 90%;
		padding-bottom: 5%;
	}

	.switch-text {
		font-size: 30upx;
		font-weight: 500;
		color: #123456;
	}

	.switch-item {
		margin-top: 30upx;
		height: 60upx;
		width: 80%;
	}

	.switchs {
		display: inline-block;
		margin-left: 10%;
		width: 50%;
		height: 400upx;
		vertical-align: top;
		padding-bottom: 250upx;
	}
	.auto-beep{
		/* background: #8A6DE9; */
		width: 100%;
		text-align: center;
		vertical-align: middle;
		align-items: center;
		padding-top: 10upx;
		height: 80upx;
	}
	.beep-range{
		/* background: #333333; */
		width: 100%;
		text-align: center;
		vertical-align: middle;
		height: 200upx;
		margin-top: 3upx;
		margin-left: 48upx;
	}
	.warning{
		/* background: #B2B2B2; */
		width: 100%;
		height: 50upx;
		text-align: center;
		vertical-align: middle;
	}
	.beep-bottom{
		/* background: #123456; */
		width: 100%;
		height: 100upx;
		text-align: center;
		vertical-align: middle;
	}
	.beep-range-item{
		width: 80%;
		/* padding-left: 20%; */
		height: 40%;
		padding-top: 2%;
		text-align: center;
		vertical-align: top;
	}
	.input{
		width: 100upx;
		height: 50upx;
		display: inline-block;
		border-color: #CC99CC;
		border-radius: 15upx;
		border-style: solid;
		border-width: 2upx;
		color: #123456;
		font-weight: 500;
		font-size: 32upx;
	}
	.short-line{
		width: 50upx;
		height: 2upx;
		background: #123456;
		margin-top: 20upx;
		
	}
	
	.line-view{
		width: 50upx;
		height: 50upx;
		margin-top: 30upx;
		/* vertical-align: top; */
		vertical-align: center;
		display: inline-block;
		margin-left: 10upx;
		margin-right: 10upx;
	}
</style>
<script src="../../my_js/devCmd.js"></script>
