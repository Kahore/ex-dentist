import Main from './components/Main.vue'

export const routes = [
  { path: '/', component: Main, name: 'mainpage' },
  // { path: '/product/:id', component: ProductDetails, name: 'product' },
  // { path: '/cart', component: ShoppingCart, name: 'shoppingcart' },
  // { path: '/login', component: Login, name: 'login', onlyGuest: true },
  // { path: '/register', component: Register, name: 'register', onlyGuest: true },
  { path: '*', redirect: '/' }
]
