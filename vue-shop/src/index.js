import Vue from 'vue'
import Personal from './components/vipcenter/Personal.vue'
/*import VueRouter from 'vue-router'
import routeConfig from './route-config'*/

/*Vue.use(VueRouter)

// create router
const router = new VueRouter()
router.map(routeConfig)
const App = Vue.extend(require('./app/Personal.vue'))
router.start(App, '#app')*/

new Vue({
  el: '#app',
  components: {
  	'Personal': Personal
  }
})
