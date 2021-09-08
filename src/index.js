import Vue from 'vue'
import App from './components/App.vue'
import { router } from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};

Vue.use(VueSweetalert2);
Vue.config.productionTip = false
//Vue.prototype.$api = 'http://bubble-api.iuh.pw/api'
Vue.prototype.$api = 'http://localhost:4001/api'

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
