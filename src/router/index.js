import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/home/home'),
      meta: { title: '首页' }
    }]
  },
  {
    path: '/retrieve',
    name: 'Retrieve',
    component: () => import('@/views/retrieve/')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register/')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/')
  },
  {
    path: '/regionalAgent',
    name: 'RegionalAgent',
    component: () => import('@/views/regionalAgent/')
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
    
    path: '/store',
    name: 'store',
    component: () => import('@/views/store/')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
