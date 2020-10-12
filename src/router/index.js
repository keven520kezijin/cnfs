import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

// /compute">计算
// /ecology">生态
// /browser">区块浏览器
// /partner">城市合伙人
// /login">登录

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home'),
      meta: { title: '首页' }
    }, {
      path: '/store',
      name: 'Store',
      component: () => import('@/views/store'),
      meta: { title: '存储' }
    }, {
      path: '/partner',
      name: 'Partner',
      component: () => import('@/views/partner'),
      meta: { title: '合作伙伴' }
    }, {
      path: '/regionalAgent',
      name: 'RegionalAgent',
      meta: { title: '区域代理' },
      component: () => import('@/views/regionalAgent')
    }, {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/register')
    }, {
      path: '/retrieve',
      name: 'Retrieve',
      component: () => import('@/views/retrieve')
    }, {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login')
    }]
  },
  {
    path: '/admin',
    component: () => import('@/layout/admin.vue'),
    redirect: '/information',
    children: [{
      path: '/information',
      name: 'Info',
      component: () => import('@/admin/information/info.vue'),
      meta: { title: '首页' }
    }]
  },
  {
    path: '/retrieve', // 找回密码
    name: 'Retrieve',
    component: () => import('@/views/retrieve/')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register/mRegister')
  },
  {
    path: '/mlogin',
    name: 'Login',
    component: () => import('@/views/login/mLogin')
  },
  {
    path: '/regionalAgent',
    name: 'RegionalAgent',
    component: () => import('@/views/regionalAgent/mRegionalAgent')
  },
  {
    path: '/mobileHome',
    name: 'm-Home',
    component: () => import('@/views/home/mHome')
  },
  {
    path: '/mobilePartner',
    name: 'm-Partner',
    component: () => import('@/views/partner/mPartner')
  },
  {
    path: '/m-store',
    name: 'm-store',
    component: () => import('@/views/store/')
  },
  {
    path: '/p-store',
    name: 'p-store',
    component: () => import('@/views/store/store')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
