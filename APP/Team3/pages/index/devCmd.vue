<template>
	<view>
		<view class="uni-padding-wrap uni-row">
			<view class="uni-flex uni-row" style="flex-wrap: nowrap;">
				<view class="uni-flex-item uni-btn-v">
					<button type="primary" @click="change_red" class="mini-btn" style="background: #FFFFFF;" size="mini">
						<image :src="'/static/images/light/'+red_src+'.png'" class="image"></image>
					</button>
				</view>
				<view class="uni-flex-item uni-btn-v">
					<button type="primary" @click="change_green" class="mini-btn" style="background: #FFFFFF;" size="mini">
						<image :src="'/static/images/light/'+green_src+'.png'" class="image"></image>
					</button>
				</view>
				<view class="uni-flex-item uni-btn-v">
					<button type="primary" @click="change_blue" class="mini-btn" style="background: #FFFFFF;" size="mini">
						<image :src="'/static/images/light/'+blue_src+'.png'" class="image"></image>
					</button>
				</view>
			</view>
		</view>
		<view class="uni-form-item uni-column">
			<view class="with-fun">
				<input class="uni-input inputText" placeholder="输入命令码" type="number" maxlength="2" v-model="cmd_code_input" style="text-align: center;"/>
			</view>
			<view class="line"></view>
			<view class="uni-padding-wrap uni-common-mt">
				<button type="primary" @tap="send_code">发送命令</button>
			</view>
		</view>
	</view>
</template>
<style>
	.image {
		margin: 40upx 0;
		width: 100upx;
	}

	.button {
		margin-top: 30upx;
		margin-bottom: 30upx;
	}

	.button-sp-area {
		margin: 0 auto;
		width: 60%;
	}

	.mini-btn {
		margin-right: 10upx;
	}
</style>
<script src="../../my_js/devCmd.js"></script>