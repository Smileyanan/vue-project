// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import VueTouch from 'vue-touch'

require('./assets/js/rem.js');
Vue.config.productionTip = false

/*全局常量*/
global.API_PROXY = 'https://bird.ioliu.cn/v1/?url='
/* eslint-disable no-new */
Vue.use(VueTouch,{name:'v-touch'})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
