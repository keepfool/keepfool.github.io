<template>
	<div class="tabs common-head-foot s-tab-head">
		<a v-for="(index, entry) in tabs" :href="entry.url" class="item" :class="highLight(index)" @click="onTab(index)">{{entry.text}}</a>
	</div>
	<div class="tab-content">
		<div v-for="order in dataList" class="order-item">
			<div class="img"><img :src="order.orderItems[0].img" /></div>
			<div class="title">{{order.orderItems[0].title}}</div>
		</div>
	</div>
	</div>
</template>

<script>
	import './Order.vue'

	export default {
		props: ['tabs', 'orderList'],
		ready() {
			this.dataList = this.orderList
		},
		data() {
			return {
				index: 0,
				dataList: {}
			}
		},
		methods: {
			highLight(index) {
				return this.index == index ? 'highlight' : ''
			},
			onTab(index) {

				var status = this.tabs[index].status
				this.index = index

				if (status) {
					this.dataList = this.orderList.filter(item => item.orderStatus == status)
				} else {
					this.dataList = this.orderList
				}
			}
		}
	}
</script>

<style>
	.tabs {
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		width: 100%;
		padding-left: .1rem;
		padding-right: .1rem;
		font-size: .16rem;
		background: #fff;
		border-bottom: 1px solid #E2E3E8;
	}
	
	.tabs .item {
		display: block;
		-webkit-box-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		height: .4rem;
		line-height: .4rem;
		text-align: center;
	}
	
	.highlight {
		border-bottom: 1px solid #ff397e;
		color: #ff397e;
	}
	
	.tab-content {
		font-size: .12rem;
	}
	
	.order-item {
		margin-top: .1rem;
		padding: .15rem .1rem;
		border-top: 1px solid #E2E3E8;
		background-color: #fff;
	}
	
	.order-item .img,
	.order-item .title {
		float: left;
	}
	
	.order-item .img img {
		max-width: 60px;
		max-height: 60px;
	}
	
	.order-item .title {
		float: left;
		width: 68%;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-align: center;
		height: 60px;
	}
	
	.order-item:after {
		display: block;
		content: "";
		clear: both;
	}
</style>