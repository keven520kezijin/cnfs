import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss' // global css
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import VueProgressBar from 'vue-progressbar'
import AOS from 'aos'
import 'aos/dist/aos.css'


Vue.config.productionTip = false

import {Swiper as SwiperClass, Pagination, Mousewheel, Autoplay} from 'swiper'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
// Swiper modules
SwiperClass.use([Pagination, Mousewheel, Autoplay])
// Global use
Vue.use(getAwesomeSwiper(SwiperClass))

Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)

AOS.init();
Vue.use(VueProgressBar, {
  color: 'rgb(40, 120, 255)',
  failedColor: 'red',
  height: '2px'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
