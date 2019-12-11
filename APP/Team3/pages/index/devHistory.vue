<template>
	<view>
		<view v-for="(item, index) in history" :key="index">
			<text>{{item.T}}</text>
			<text>{{item.H}}</text>
			<text>{{item.L}}</text>
			<text>{{item.S}}</text>
		</view>
	</view>
</template>
<script src="../../my_js/devHistory.js"></script>
