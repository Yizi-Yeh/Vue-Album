import Vue from 'vue'
import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2'
import App from './App.vue'
import router from './router'
import store from './store'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueAnalytics from 'vue-analytics'
Vue.component('ImgInputer', ImgInputer)

Vue.config.productionTip = false

// 傳axios時也傳認證資訊
axios.defaults.withCredentials = true

Vue.use(VueAxios, axios)
Vue.use(VueSweetalert2)
Vue.use(VueAwesomeSwiper /* { default options with global component } */)
Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_GA
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
