<template>
	<view class="uni-common-mt">
		<view class="uni-form-item uni-column">
			<view class="uni-row" style="text-align: center;">
				<view>
					温度： {{temperature}}
				</view>
				<view>
					湿度： {{humidity}}%
				</view>
			</view>
		</view>
		<view>
			<!-- :data-newsid="item.post_id"  :表示参数为动态，data- 语法（任意类型数据）item.post_id 中post_id是服务器返回数据中的一个参数 -->
			<scroll-view scroll-y="true" class="scroll-Y" :scroll-top="scrollTop" @scroll="scroll" @scrolltoupper="upper"
			 @scrolltolower="lower">
				<view class="scroll-view-item" v-for="(item,index) in history" :key="index">
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">温度:&nbsp;{{item.data.infostring.T}}'C&nbsp;湿度:&nbsp;{{item.data.infostring.H}}%</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">时间: {{item.timestamp}}</view>
					</view>
				</view>
			</scroll-view>
			<view @tap="goTop" class="uni-link uni-center uni-common-mt">
				点击这里返回顶部
			</view>
		</view>
	</view>
</template>
<style>
	.uni-list-cell {
		justify-content: flex-start
	}

	.uni-list .label-3 {
		padding: 0;
	}

	.label-2-text {
		flex: 1;
	}
</style>
<style>
	.scroll-Y {
		height: 800upx;
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}

	.scroll-view-item {
		height: 150upx;
		line-height: 300upx;
		text-align: center;
		font-size: 36upx;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		height: 300upx;
		line-height: 300upx;
		text-align: center;
		font-size: 36upx;
	}
</style>
<script src="../../my_js/devInfo.js"></script>
