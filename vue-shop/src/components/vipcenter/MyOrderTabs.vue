<template>
	<div class="tabs">
		<a v-for="(index, entry) in tabs" :href="entry.url" class="item" :class="highLight(index)" 
			@click.stop.prevent="onTab(index)">{{entry.text}}</a>
	</div>
	<div class="tab-content">
		<order v-for="order in dataList" :order="order"></order>
</template>

<script>
	import Order from './Order.vue'
	import {Utils} from '../../js/utils.js'
	import * as actions from '../../stores/actions.js'
	import store from '../../stores/store.js'
	
	export default {
		vuex: {
		    getters: {
		      count: state => state.count,
		      urlList: state => state.urlList,
		      currentUrl: state => state.currentUrl
		    },
		    actions: actions
		},
		props: ['tabs'],
		data() {
			return {
				index: -1,
				orderList: {},
				dataList: {},
			}
		},
		components: {
			Order
		},
		ready(){
			this.search = location.search
			this.getOrders()
		},

		methods: {
			getOrders() {
				this.$http.get('/src/data/orders.json')
				.then((response) => {
					this.orderList = this.dataList = response.data
					this.init()
				}).catch((response) => {
					console.log(response)
				})
			},
			init(){
				var index = Utils.getHashParameter('orderStatus')
				if(!index) index = 0
				this.setSelected(index)
			},
			highLight(index) {
				return this.index == index ? 'highlight' : ''
			},
			onTab(index) {
				if(this.index != index){
					this.index = index
					this.filterByStatus(index)
					history.replaceState(null,'', index == 0 ? '#orderStatus=' : '#orderStatus='+ index)
				}
			},
			setSelected(index){
				this.index = index
			},
			getStatus(index){
				return this.tabs[index].status
			},
			filterByStatus(status) {
				if(status != 0) {
					this.dataList = this.orderList.filter(item => item.orderStatus == status)
				} else {
					this.dataList = this.orderList
				}
			}
		}
	}
	
	window.onpopstate = function(event){
		console.log("location: " + document.location.search + ", state: " + JSON.stringify(event.state));
	}
</script>

<style>
	.tabs {
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		width: 100%;
		padding-left: .1rem;
		padding-right: .1rem;
		font-size: .2rem;
		background: #fff;
		border-bottom: 1px solid #E2E3E8;
	}
	
	.tabs .item {
		display: block;
		-webkit-box-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		height: .4rem;
		line-height: .4rem;
		text-align: center;
	}
	
	.tabs .highlight {
		border-bottom: 1px solid #ff397e;
		color: #ff397e;
	}
	
	.tab-content {
		font-size: .15rem;
	}
	
</style>