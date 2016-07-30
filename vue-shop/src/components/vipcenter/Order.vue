<template>

	<div class="my-order">
		<div class="header">
			<p class="left">订单号：{{order.orderId}}</p>
			<p class="right">订单状态：{{getStatusText(order.orderStatus)}}</p>
		</div>
		<div class="content">
			<a href="orderDetails.html?orderId={{order.orderId}}">
				<div v-if="order.orderItems.length == 1" class="order-item" >
					<p class="img"><img :src="order.orderItems[0].img" /></p>
					<p class="title">{{order.orderItems[0].title}}</p>
					<p class="clear"></p>
				</div>
				<div v-else class="order-item" >
					<p v-for="orderItem in order.orderItems" class="img"><img :src="orderItem.img" /></p>
					<p class="clear"></p>
				</div>
			</a>
		</div>
		<div class="footer">
			<p class="left">实付款：{{ order.totalAmount | currency '¥'}}</p>
			<p class="right">
				<div class="button-box"><button class="buy-again">再次购买</button></div>
			</p>
			<p class="clear"></p>
		</div>
	</div>

</template>

<script>
	import {OrderService} from '../../services/orderService.js'
	export default {
		props: ['order'],
		methods: {
			getStatusText(status) {
				return OrderService.getStatusText(status)
			}
		}
	}
</script>

<style>
	.my-order {
		margin-top: .1rem;
		border-top: 1px solid #E2E3E8;
		border-bottom: 1px solid #E2E3E8;
		background-color: #fff;
	}
	
	.my-order:first-child{
		border-top: none;
	}
	
	.my-order .left {
		float: left;
	}
	
	.my-order .right {
		float: right;
	}
	
	.my-order .header {
		padding: 0 .1rem;
		height: .4rem;
		line-height: .4rem;
		border-bottom: 1px solid #E2E3E8;
	}
	
	.my-order .order-item {
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		padding: .15rem .1rem;
	}
	
	.my-order .order-item .img{
		margin-right: .1rem;
	}
	
	.my-order .order-item img {
		max-width: .7rem;
		max-height: .7rem;
		border:1px solid #E2E3E8;
	}
	
	.my-order .order-item .title {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-align: center;
		margin-right: .1rem;
	}
	
	.my-order .footer {
		padding: 0 .1rem;
		height: .4rem;
		line-height: .4rem;
		border-top: 1px solid #E2E3E8;
	}
	
	.my-order .footer .button-box {
		float: right;
		color: #f15353;
		margin-top: .06rem;
		width: .7rem;
		height: .26rem;
		display: block;
		overflow: hidden;
	}
	
	.my-order .footer .buy-again {
		background: #fff;
		border: 1px solid #f15353;
		color: #f15353;
		border-radius: 6px;
		width: 1.3rem;
		text-align: center;
		height: .52rem;
		line-height: .52rem;
		display: block;
		font-size: .28rem;
		transform: scale(.5, .5);
		-webkit-transform: scale(.5, .5);
		transform-origin: top left;
		-webkit-transform-origin: top left;
	}
</style>