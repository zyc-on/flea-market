import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main/Main'
import User from '../views/main/User'
import Home from '../views/main/Home'

import user from './modules/user'
import goods from './modules/goods'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      { path: '/user', name: 'user', component: User },
      { path: '/home', name: 'home', component: Home }
    ]
  },
  ...user,
  ...goods
]

const router = new VueRouter({
  routes
})

export default router
