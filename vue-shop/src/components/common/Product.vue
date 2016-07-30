<template>
	<a href="#">
		<div class="item-wrapper">
			<p class="img">
				<img :src="item.img" />
			</p>
			<p class="title">
				{{ item.title }}
			</p>
			<p class="price">
				{{ item.price }}
			</p>
		</div>
	</a>
</template>

<script>
	export default {
		props: ['item']
	}
</script>

<style>
	.item-wrapper {
		padding: .1rem;
		background-color: #fff;
	}
	
	.item-wrapper .title{
		margin-bottom: .2rem;
	}
	
	.item-wrapper img {
		max-width: 100%;
		max-height: 100%;
	}

</style>