import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../components/views/Dashboard.vue')
    },
    {
      path: '/markets',
      name: 'markets',
      component: () => import('../components/views/Markets/Markets.vue')
    },
    {
      path: '/scenarios',
      name: 'scenarios',
      component: () => import('../components/views/Scenarios/Scenarios.vue')
    },
    {
      path: '/assets',
      name: 'assets',
      component: () => import('../components/views/Assets.vue')
    },
    {
      path: '/positions',
      name: 'positions',
      component: () => import('../components/views/Positions.vue')
    },
    {
      path: '/compliance',
      name: 'compliance',
      component: () => import('../components/views/Compliance.vue')
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import('../components/views/Reports.vue')
    },
  ]
})

export default router
