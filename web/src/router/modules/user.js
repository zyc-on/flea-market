// import UserProfile from '@/views/user/UserProfile'

export default [
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/user/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/user/Register')
  },
  {
    path: '/user/profile',
    name: 'Profile',
    component: () => import('@/views/user/UserProfile')
  },
  {
    path: '/user/security',
    name: 'Security',
    component: () => import('@/views/user/SecurityMenu')
  },
  {
    path: '/user/sell',
    name: 'Sell',
    component: () => import('@/views/user/UploadGoods')
  },
  {
    path: '/user/selling',
    name: 'Selling',
    component: () => import('@/views/user/SellingGoods')
  },
  {
    path: '/user/selling/:id',
    name: 'EditSelling',
    component: () => import('@/views/user/EditGoods'),
    props: true
  }
]
