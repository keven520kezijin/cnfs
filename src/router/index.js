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
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: () => import('@/views/home/Home')
  // },
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
