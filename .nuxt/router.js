import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a4aa4f5c = () => interopDefault(import('../pages/Reports.vue' /* webpackChunkName: "" */))
const _21061bd8 = () => interopDefault(import('../pages/Compliance.vue' /* webpackChunkName: "" */))
const _a3365a86 = () => interopDefault(import('../pages/Positions.vue' /* webpackChunkName: "" */))
const _0cd7f480 = () => interopDefault(import('../pages/Assets.vue' /* webpackChunkName: "" */))
const _28ad60b6 = () => interopDefault(import('../pages/Scenarios.vue' /* webpackChunkName: "" */))
const _653e836c = () => interopDefault(import('../pages/Markets.vue' /* webpackChunkName: "" */))
const _44200be7 = () => interopDefault(import('../pages/Dashboard.vue' /* webpackChunkName: "" */))
const _968b0348 = () => interopDefault(import('../pages/Home.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/reports",
    component: _a4aa4f5c,
    name: "reports"
  }, {
    path: "/compliance",
    component: _21061bd8,
    name: "compliance"
  }, {
    path: "/positions",
    component: _a3365a86,
    name: "positions"
  }, {
    path: "/assets",
    component: _0cd7f480,
    name: "assets"
  }, {
    path: "/scenarios",
    component: _28ad60b6,
    name: "scenarios"
  }, {
    path: "/markets",
    component: _653e836c,
    name: "markets"
  }, {
    path: "/dashboard",
    component: _44200be7,
    name: "dashboard"
  }, {
    path: "/",
    component: _968b0348,
    name: "home"
  }, {
    path: "/Assets",
    component: _0cd7f480,
    name: "Assets"
  }, {
    path: "/Compliance",
    component: _21061bd8,
    name: "Compliance"
  }, {
    path: "/Dashboard",
    component: _44200be7,
    name: "Dashboard"
  }, {
    path: "/Home",
    component: _968b0348,
    name: "Home"
  }, {
    path: "/Markets",
    component: _653e836c,
    name: "Markets"
  }, {
    path: "/Positions",
    component: _a3365a86,
    name: "Positions"
  }, {
    path: "/Reports",
    component: _a4aa4f5c,
    name: "Reports"
  }, {
    path: "/Scenarios",
    component: _28ad60b6,
    name: "Scenarios"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
