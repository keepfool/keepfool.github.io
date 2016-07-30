<template>
	<div class="container">
		<div class="header">
			<page-title title="订单详情"></page-title>
		</div>
		<div class="body">
			<div class="order-detail">
				<div class="row">
					<p class="left">订单号：{{order.orderId}}</p>
					<p class="right">订单状态：{{getStatusText(order.orderStatus)}}</p>
				</div>
				<div class="content customer-info">
					<div class="bt"></div>
					<div class="bb"></div>
					<div class="info1">
						<p class="left"><span class="iconfont icon-user-copy"></span>{{order.customerName}}</p>
						<p class="right"><span class="iconfont icon-phone"></span>{{ order.phone }}</p>
						<p class="clear"></p>
					</div>
					<div class="info2">
						{{ order.address }}
					</div>
				</div>
				<div class="content bb-1px">
					<div v-for="orderItem in order.orderItems" class="order-item bb-1px">
						<p class="img"><img :src="orderItem.img" /></p>
						<p class="title">{{orderItem.title}}</p>
						<p class="price">{{ orderItem.price | currency '¥'}}</p>
						<p class="clear"></p>
					</div>
				</div>

			</div>

			<div class="order-detail">
				<div class="row bb-1px">
					<p class="left">支付方式</p>
					<p class="right">{{ order.payMethod }}</p>
				</div>
				<div class="content bb-1px si-info">
					<h3>配送信息</h3>
					<p>送货日期：{{ order.shipmentDate }}</p>
					<p>配送时间：{{ order.shipmentTime }}</p>
				</div>
				<div class="content si-info">
					<h3>发票信息</h3>
					<p>发票抬头：个人</p>
					<p>发票内容：明细</p>
				</div>
			</div>

			<div class="order-detail">
				<div class="content bb-1px">
					<div class="amount">
						<p class="left">商品总额</p>
						<p class="right price">{{ order.goodsAmount | currency '¥' }}</p>
						<p class="clear"></p>
					</div>
					<div class="amount">
						<p class="left">-返现</p>
						<p class="right price">{{ order.rebateAmount | currency '¥' }}</p>
						<p class="clear"></p>
					</div>
					<div class="amount">
						<p class="left">-运费</p>
						<p class="right price">{{ order.freightAmount | currency '¥' }}</p>
						<p class="clear"></p>
					</div>
				</div>
				<div class="content">
					<p class="text-right actual-amount">实付款：<span class="price">{{ order.totalAmount | currency '¥' }}</span></p>
					<p class="text-right">下单时间：{{ order.orderDate }}</p>
				</div>
			</div>
		</div>
	</div>

</template>
<script>
	import PageTitle from '../common/PageTitle.vue'
	import { OrderList } from './OrderList'
	import { Utils } from '../../js/utils.js'
	import { OrderService } from '../../services/orderService.js'

	export default {
		mixins: [OrderList],
		components: {
			PageTitle
		},
		data() {
			return {
				order: {}
			}
		},
		ready() {
			this.order = this.orderList.find(o => o.orderId == this.getOrderId())
		},
		methods: {
			getOrderId() {
				var param = Utils.getSearchParam(location.search)
				return param.orderId
			},
			getStatusText(status) {
				return OrderService.getStatusText(status)
			}
		}
	}
</script>

<style>
	.order-detail {
		margin-top: .1rem;
		font-size: .16rem;
		border-top: 1px solid #E2E3E8;
		background-color: #fff;
	}
	
	.order-detail .content {
		padding: .15rem .1rem;
	}
	
/*	.order-detail .content p {
		font-size: .14rem;
	}*/
	
	.order-detail .left {
		float: left;
	}
	
	.order-detail .right {
		float: right;
	}
	
	.order-detail .row {
		height: .4rem;
		line-height: .4rem;
		padding: 0 .1rem;
	}
	/* 再次购买 */
	
	.order-detail .row .button-box {
		float: right;
		color: #f15353;
		margin-top: .06rem;
		width: .7rem;
		height: .26rem;
		display: block;
		overflow: hidden;
	}
	
	.order-detail .row .buy-again {
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
	/* 订单明细 */
	
	.order-detail .order-item {
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		margin-bottom: .1rem;
		padding: 0 .1rem;
	}
	
	.order-detail .order-item:last-child {
		margin-bottom: 0;
	}
	
	.order-detail .order-item .title {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-align: center;
		margin-left: .1rem;
		margin-right: .1rem;
	}
	
	.order-detail .price {
		color: #FF0066;
		float: right;
	}
	
	.order-detail .order-item .img img {
		max-width: .7rem;
		max-height: .7rem;
		border: 1px solid #E2E3E8;
	}
	/* 配送和发票信息 */
	
	.order-detail .si-info h3 {
		font-size: .16rem;
		font-weight: normal;
	}
	
	.order-detail .si-info p {
		margin-top: .1rem;
	}
	/* 订单金额 */
	
	.order-detail .amount {
		margin-bottom: .1rem;
	}
	
	.order-detail .amount:last-child {
		margin-bottom: 0;
	}
	
	.content .actual-amount {
		font-size: .2rem;
		margin-bottom: .05rem;
	}
	
	.customer-info {
		position: relative;
		background-color: #fffaf3;
	}
	
	.customer-info .bt {
		position: absolute;
		top: 1px;
		left: 0;
		height: 3px;
		width: 100%;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAFCAIAAAACIXP3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjIyQkExRjJCMUI2MTFFNEEyMDNFNjcyOTdEQTZCRUIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjIyQkExRjFCMUI2MTFFNEEyMDNFNjcyOTdEQTZCRUIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc0MTI4MkYxQjFCMTExRTQ4RjM3RDQ3NUVENjMxMkRDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc0MTI4MkYyQjFCMTExRTQ4RjM3RDQ3NUVENjMxMkRDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+erFnsgAAAOVJREFUeNq0lM0KglAQRufeq1BIJSIIgkujNtGmlvXKPUZQm8iVQhTUpiQX/UlXZ/IJKoWZBzgwh48jFgcNjc6QMPNUxwCuI8I4ptMJ+E4IORgI32fCI8E2w/0dv2lshrYMmHvKlGxqtMYooixjtG+acjQSts2EfyOs0jLN6ceOG6C9tpi6kk8+PJ/lZgOvF6N9y1LjMbRaTPi7puUFHwX9DklddL8rhz3BZ4au12r7UBSM4XGcavugFBP/nNM6LTX+V/Ja6Ikr/Tan/eMRk6SqP6P9IJBhWNWfib+7YZTh/w98BBgA/7JRnu9VHPIAAAAASUVORK5CYII=) repeat-x;
		background-size: 64px 3px;
	}
	.customer-info .bb {
		position: absolute;
		bottom: 1px;
		left: 0;
		height: 3px;
		width: 100%;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAFCAIAAAACIXP3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjIyQkExRjJCMUI2MTFFNEEyMDNFNjcyOTdEQTZCRUIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjIyQkExRjFCMUI2MTFFNEEyMDNFNjcyOTdEQTZCRUIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc0MTI4MkYxQjFCMTExRTQ4RjM3RDQ3NUVENjMxMkRDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc0MTI4MkYyQjFCMTExRTQ4RjM3RDQ3NUVENjMxMkRDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+erFnsgAAAOVJREFUeNq0lM0KglAQRufeq1BIJSIIgkujNtGmlvXKPUZQm8iVQhTUpiQX/UlXZ/IJKoWZBzgwh48jFgcNjc6QMPNUxwCuI8I4ptMJ+E4IORgI32fCI8E2w/0dv2lshrYMmHvKlGxqtMYooixjtG+acjQSts2EfyOs0jLN6ceOG6C9tpi6kk8+PJ/lZgOvF6N9y1LjMbRaTPi7puUFHwX9DklddL8rhz3BZ4au12r7UBSM4XGcavugFBP/nNM6LTX+V/Ja6Ikr/Tan/eMRk6SqP6P9IJBhWNWfib+7YZTh/w98BBgA/7JRnu9VHPIAAAAASUVORK5CYII=) repeat-x;
		background-size: 64px 3px;
	}
	
	.customer-info .info1 {
		line-height: .3rem;
		color: #333;
	}
	
	.customer-info .info1 .iconfont{
		color: #FF0066;
		font-size: .2rem;
	}
	
	.customer-info .info2 {
		line-height: .3rem;
		color: #999;
	}
</style>