// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

Vue.config.productionTip = false

import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'
Axios.defaults.baseURL="http:k73.top/lx/api/"
Vue.prototype.$axios = Axios;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
