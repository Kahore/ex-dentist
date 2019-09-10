import Main from './components/Main.vue'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import PasswordRecovery from './components/auth/PasswordRecovery.vue'

export const routes = [
  { path: '/', component: Main, name: 'mainpage' },
  // { path: '/product/:id', component: ProductDetails, name: 'product' },
  // { path: '/cart', component: ShoppingCart, name: 'shoppingcart' },
  { path: '/recovery', component: PasswordRecovery, name: 'recovery', onlyGuest: true },
  { path: '/login', component: Login, name: 'login', onlyGuest: true },
  { path: '/register', component: Register, name: 'register', onlyGuest: true },
  { path: '*', redirect: '/' }
]
