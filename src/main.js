import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import VueRouter from 'vue-router'
import routers from './routers'

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routers
})

const app = new Vue({
      router: router,
      render: h => h(App)
}).$mount('#app')