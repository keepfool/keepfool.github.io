<template>
	<div class="viewed-items">
		<ul>
			<li v-for="item in items" class="item">
				<product :item="item"></product>
			</li>
		</ul>
	</div>
</template>

<script>
	import Product from '../common/Product.vue'
	export default {
		data: function(){
			return {
				items: [
					{ img: '/src/assets/images/product.png' , title: '商品名称，商品规格，商品描述...', price: '¥100.00'},
					{ img: '/src/assets/images/product.png' , title: '商品名称，商品规格，商品描述...', price: '¥100.00'}
				]
			}
		},
		components: {
			Product
		}
	}
</script>

<style>
	.viewed-items .item{
		float: left;
		width: 50%;
		font-size: .2rem;
	}
	.viewed-items .item:first-child{
		border-right: 1px solid #e2e3e8;
	}
</style>