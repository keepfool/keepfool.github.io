import Vue from 'vue'
import VueResource from 'vue-resource'
import OrderDetails from './components/vipcenter/MyOrderDetails.vue'

import { currency } from './js/currency'
Vue.filter('currency', currency)

Vue.use(VueResource)

new Vue({
  el: '#app',
  components: {
  	'OrderDetails': OrderDetails
  }
})
