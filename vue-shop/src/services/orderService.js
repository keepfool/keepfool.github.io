export const OrderService = {
	getStatusText(status) {
		switch (status) {
			case 1:
				return '待支付'
			case 2:
				return '待收货'
			case 3:
				return '待评价'
			default:
				return '全部订单'
		}
	}
}