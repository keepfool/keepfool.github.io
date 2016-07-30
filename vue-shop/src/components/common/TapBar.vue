<template>
	<div class="tap-bar">
		<a :href="url">
			<ul>
				<li><span class="badge"></span></li>
				<li><span class="title">{{ title }}</span></li>
				<li>
					<i class="iconfont icon-right"></i>
				</li>
			</ul>
		</a>
	</div>
</template>

<script>
	export default {
		props: ['url', 'title']
	}
</script>

<style>

	
	.tap-bar ul {
		height: .5rem;
		padding: .15rem .1rem;
		font-size: .2rem;
	}
	
	.tap-bar ul li {
		display: inline-block;
		float: left;
	}
	
	.tap-bar ul li:last-child {
		float: right;
	}
	
	.tap-bar ul .badge {
		display: inline-block;
		margin-top: .03rem;
		margin-right: .1rem;
	}
	
	.tap-bar ul .guide {
		color: #999;
	}
	
	.tap-bar ul .icon-right {
		color: #999;
		font-size: .24rem;
	}
	
	.tap-bar:after {
		display: block;
		content: "";
		clear: both;
	}
</style>