// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/css/bootstrap.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios=axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})