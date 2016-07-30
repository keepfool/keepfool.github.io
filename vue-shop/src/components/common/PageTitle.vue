<template>
	<div class="page-title">
		<a href="javascript:void(0)" class="left iconfont icon-back02" @click="goBack">
		</a>
		<p>{{title}}</p>
	</div>
</template>

<script>

	import * as actions from '../../stores/actions.js'
	export default {
		props: ['title'],
		methods: {
			goBack() {
				history.go(-1)
			}
		},
		ready(){
			console.log('ready!!!')
		}
	}
</script>

<style>
	.page-title {
		background-color: #49c1f2;
	}
	
	.page-title p {
		margin-left: .5rem;
		margin-right: .5rem;
		height: .5rem;
		font-size: .22rem;
		color: #fff;
		text-align: center;
		letter-spacing: 5px;
	}
	
	.page-title a {
		display: block;
		padding: 0;
		vertical-align: top;
		width: .5rem;
		height: .5rem;
		color: #FFF;
	}
	
	.page-title .left {
		float: left;
		font-size: .26rem;
		text-align: left;
		border-width: 0 .1rem;
		border-style: solid;
		border-color: transparent;		
	}

	.page-title .right {
		float: right;
		width: .3rem;
		height: .3rem;
		line-height: .3rem;
		font-size: .20rem;
		color: lightgray;
	}
</style>