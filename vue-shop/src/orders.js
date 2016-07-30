import Vue from 'vue'
import VueResource from 'vue-resource'
import Orders from './components/vipcenter/MyOrders.vue'
import store from './stores/store'

import { currency } from './js/currency'
Vue.filter('currency', currency)

Vue.use(VueResource)

new Vue({
  el: '#app',
  store,
  components: {
  	Orders
  }
})
