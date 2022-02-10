import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import i18n from './i18n/i18n';

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  render: h => h(App),
  router,
  store,
  i18n
}).$mount('#app')
