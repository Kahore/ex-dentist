import Vue from 'vue'
import App from './App.vue'
import { routes } from './routes'
import VueRouter from 'vue-router'

import store from './store/store'
// import { firebaseListener } from './config/firebaseConfig'
import './assets/styles/app.scss'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes,
  base: process.env.BASE_URL
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
