import Vue from 'vue'
import App from './components/App.vue'
import { router } from './router'
require ('./../static/font-awesome/css/all.css');
import Notifications from 'vue-notification';




Vue.config.productionTip = false
Vue.prototype.$api = 'http://bubble-api.iuh.pw/api'
//Vue.prototype.$api = 'http://localhost:4001/api'
Vue.use(Notifications)

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
