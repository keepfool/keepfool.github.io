<template>
	<div class="container">
		<div class="header">
			<page-title title="我的订单"></page-title>
		</div>
		<div class="body">
			<tabs :tabs="tabs"></tabs>
		</div>
	</div>
</template>

<script>
	import PageTitle from '../common/PageTitle.vue'
	import Tabs from './MyOrderTabs.vue'
	import Order from './Order.vue'

	var OrderTabs = {
		data() {
			return {
				tabs: [{
					url: '#orderStatus=',
					text: '全部订单',
					status: 0
				}, {
					url: '#orderStatus=1',
					text: '待支付',
					status: 1
				}, {
					url: '#orderStatus=2',
					text: '待收货',
					content: '333',
					status: 2
				}, {
					url: '#orderStatus=3',
					text: '待评价',
					status: 3
				}]
			}
		}
	}

	export default {
		components: {
			PageTitle,
			Tabs
		},
		mixins: [OrderTabs]
	}
</script>