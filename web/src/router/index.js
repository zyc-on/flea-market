import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import User from '../views/User'
import UserProfile from '../views/UserProfile'
import SecurityMenu from '../components/SecurityMenu'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      { path: '/user', name: 'user', component: User }
    ]
  },
  {
    path: '/user/profile',
    name: 'profile',
    component: UserProfile
  },
  {
    path: '/user/security',
    name: 'security',
    component: SecurityMenu

  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
