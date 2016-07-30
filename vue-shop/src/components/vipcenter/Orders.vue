<template>
	<div class="container">
		<tabs :tabs="tabs" :order-list="orderList"></tabs>
	</div>
</template>

<script>
	import Tabs from '../common/Tabs.vue'
	import Order from '../common/Order.vue'

	var OrderTabs = {
		data() {
			return {
				tabs: [{
					url: '#orderStatus=',
					text: '全部订单',
					status: ''
				}, {
					url: '#orderStatus=1',
					text: '待支付',
					status: 'NotPay'
				}, {
					url: '#orderStatus=2',
					text: '待收货',
					content: '333',
					status: 'Payed'
				}, {
					url: '#orderStatus=3',
					text: '待评价',
					status: 'Received'
				}]
			}
		}
	}

	var OrderList = {
		data() {
			return {
				orderList: [{
					orderNo: '201607220001',
					orderStatus: 'Received',
					orderDate: '2016-07-22 10:00:00',
					customerName: '王二麻子',
					address: '广东省深圳市罗湖区东门南路101号',
					phone: '13012345678',
					shipmentDate: '2016-07-23',
					shipmentTime: '9:00-15:00',
					payMethod: '在线支付',
					goodsAmount: 200.00,
					freightAmount: 6.00,
					rebateAmount: 10.00,
					totalAmount: 196.00,
					orderItems: [{
						title: '华为（HUAWEI）荣耀路由 百兆入户带宽大户穿墙王1200Mbps千兆WiFi智能无线路由器（陶瓷白）',
						price: 200.00,
						quantity: 1,
						img: '/src/assets/images/huawei.jpg'
					}]
				},{
					orderNo: '201607220001',
					orderStatus: 'NotPay',
					orderDate: '2016-07-22 10:00:00',
					customerName: '王二麻子',
					address: '广东省深圳市罗湖区东门南路102号',
					phone: '13012345678',
					shipmentDate: '2016-07-23',
					shipmentTime: '9:00-15:00',
					payMethod: '在线支付',
					goodsAmount: 200.00,
					freightAmount: 6.00,
					rebateAmount: 10.00,
					totalAmount: 196.00,
					orderItems: [{
						title: '华为（HUAWEI）荣耀路由 百兆入户带宽大户穿墙王1200Mbps千兆WiFi智能无线路由器（陶瓷白）',
						price: 200.00,
						quantity: 1,
						img: '/src/assets/images/huawei.jpg'
					}]
				},{
					orderNo: '201607220001',
					orderStatus: 'Payed',
					orderDate: '2016-07-22 10:00:00',
					customerName: '王二麻子',
					address: '广东省深圳市罗湖区东门南路103号',
					phone: '13012345678',
					shipmentDate: '2016-07-23',
					shipmentTime: '9:00-15:00',
					payMethod: '在线支付',
					goodsAmount: 200.00,
					freightAmount: 6.00,
					rebateAmount: 10.00,
					totalAmount: 196.00,
					orderItems: [{
						title: '华为（HUAWEI）荣耀路由 百兆入户带宽大户穿墙王1200Mbps千兆WiFi智能无线路由器（陶瓷白）',
						price: 200.00,
						quantity: 1,
						img: '/src/assets/images/huawei.jpg'
					}]
				}]
			}
		}
	}

	export default {
		components: {
			Tabs
		},
		mixins: [OrderTabs, OrderList]
	}
</script>

<style>

</style>