import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/home/home')
const Catagory = () => import('../views/catagory/catagory')
const Cart = () => import('../views/cart/cart')
const Profile = () => import('../views/profile/profile')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/catagory',
      component: Catagory
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    }
  ],
  mode: 'history'
})
