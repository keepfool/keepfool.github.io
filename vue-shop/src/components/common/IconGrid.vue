<template>
	<ul class="icon-grid">
		<li v-for="cell in cells">
			<a :href="cell.url">
				<p class="iconfont" :class="cell.icon"></p>
				<p>{{ cell.text }}</p>
			</a>
		</li>
	</ul>
</template>

<script>
	export default {
		props: ['cells']
	}
</script>

<style>
	.icon-grid {}
	
	.icon-grid li {
		float: left;
		display: block;

		width: 33.33%;
		font-size: .2rem;
		text-align: center;
		border-right: 1px solid #E4E3E8;
	}
	
	.icon-grid li:last-child {
		border-right: none;
	}
	
	.icon-grid li a{
		padding: .13rem 0;
		display: block;
	}
	
	.icon-grid li .iconfont {
		font-size: .32rem;
	}
	
	.icon-grid:after {
		display: block;
		content: "";
		clear: both;
	}
</style>