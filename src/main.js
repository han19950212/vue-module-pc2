import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//基本初始化样式
import './assets/style/reset.css'


//引入element-ui
import './utils/elementUi/index'


Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
