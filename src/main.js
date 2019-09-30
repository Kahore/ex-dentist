import Vue from 'vue'
import App from './App.vue'
import { routes } from './routes'
import VueRouter from 'vue-router'

import store from './store/store'
import './assets/styles/app.scss'
import firebase from 'firebase'
import './config/firebaseConfig'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes,
  base: process.env.BASE_URL
})
let userType

router.beforeEach((to, from, next) => {
  userType = store.getters.currentUser.type
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!firebase.auth().currentUser) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else if (userType !== to.meta.typeToProtect) {
      next({
        path: '/NoAccess',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (firebase.auth().currentUser !== null && to.path !== '/login') {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

let app
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
