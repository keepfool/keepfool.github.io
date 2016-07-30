<template>
	<div class="container">
		<div class="member-info">
			<div class="left">
				<div class="left-content-wrapper">
					<div class="photo">
						<a href="#">
							<img src="/src/assets/images/user.png" />
						</a>
					</div>
					<div class="ribbon">
						<div class="ribbon-content">金卡会员</div>
					</div>
				</div>
			</div>
			<div class="right">
				<div class="profile">
					<p class="name">朱丽叶</p>
					<p class="score">积分：<span class="highlight">9000</span></p>
					<hr />
					<p class="score-desc">距离升级到金卡会员，还需消费1000积分</p>
				</div>
			</div>
		</div>
		<div>
			<!--订单tab-->
			<div class="my-content">
				<tap-bar title="全部订单" url="orders.html#orderStatus=" class="bb-1px"></tap-bar>
				<icon-grid :cells="orderStatus"></icon-grid>
			</div>

			<div class="my-content">
				<tap-bar title="我的钱包" url="http://www.baidu.com" class="bb-1px"></tap-bar>
				<icon-grid :cells="wallet"></icon-grid>
			</div>

			<!--收获地址管理-->
			<div class="my-content">
				<tap-bar title="收货地址" url="http://www.baidu.com" class="bb-1px"></tap-bar>
				<tap-bar title="商品收藏" url="http://www.baidu.com" class="bb-1px"></tap-bar>
				<tap-bar title="应用推荐" url="http://www.baidu.com"></tap-bar>
			</div>

			<div class="my-content">
				<tap-bar title="您浏览过的商品" url="http://www.baidu.com" class="bb-1px"></tap-bar>
				<viewed-products></viewed-products>
			</div>
		</div>
	</div>
</template>

<script>
	import TapBar from '../common/TapBar.vue'
	import IconGrid from '../common/IconGrid.vue'
	import ViewedProducts from './ViewedProducts.vue'

	var MyOrderStatus = {
		data: function() {
			return {
				orderStatus: [{
					url: 'orders.html#orderStatus=1',
					icon: 'icon-daifukuan',
					text: '待支付'
				}, {
					url: 'orders.html#orderStatus=2',
					icon: 'icon-daishouhuo',
					text: '待收货'
				}, {
					url: 'orders.html#orderStatus=3',
					icon: 'icon-p-wait-assess',
					text: '待评价'
				}]
			}
		}
	}

	var MyWallet = {
		data: function() {
			return {
				wallet: [{
					url: 'http://www.baidu.com',
					icon: 'icon-yue',
					text: '余额'
				}, {
					url: 'http://www.baidu.com',
					icon: 'icon-youhuiquan',
					text: '优惠券'
				}, {
					url: 'http://www.baidu.com',
					icon: 'icon-jifen',
					text: '积分'
				}]
			}
		}
	}

	export default {
		components: {
			TapBar,
			IconGrid,
			ViewedProducts
		},
		mixins: [MyOrderStatus, MyWallet]
	}
</script>

<style>
	/* [03.会员信息] */
	
	.member-info {
		position: relative;
		height: 1.8rem;
		font-size: 0;
		background-color: #49c1f2;
		/*background-image: url(../assets/images/user-info-bg.jpg);
		background-size: 100%;*/
	}
	
	.member-info .left {
		float: left;
		padding-top: .2rem;
		width: 40%;
		height: 100%;
	}
	
	.member-info .left-content-wrapper {
		margin: 0 auto;
		width: 1rem;
	}
	
	.member-info .right {
		float: left;
		height: 100%;
		width: 55%;
		color: #fff;
		padding-top: .4rem;
		padding-bottom: .4rem;
	}
	
	.member-info .photo img {
		width: .8rem;
	}
	
	.member-info .profile {
		height: 1.4rem;
	}
	
	.member-info .profile p {
		padding-bottom: .1rem;
	}
	
	.profile {
		font-size: .2rem;
	}
	
	.profile hr {
		margin-top: .1rem;
		border: none;
		height: 1px;
		background-color: rgba(255, 255, 255, 0.6);
	}
	
	.profile .score-desc {
		padding-top: .1rem;
	}
	
	.profile .highlight {
		color: #ffff00;
	}
	/* [04.订单Tab] */
	
	.my-content {
		margin-bottom: .15rem;
		background: #fff;
	}

	/* [07.收获地址管理] */
	
	.shipping-address {}
	/* [08.你浏览过的商品] */
</style>