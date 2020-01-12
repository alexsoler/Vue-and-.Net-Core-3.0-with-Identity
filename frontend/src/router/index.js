/**
 * Vue Router
 *
 * @library
 *
 * https://router.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import Router from 'vue-router'
import Meta from 'vue-meta'
import OidcCallback from '../views/oidc/OidcCallback.vue'
import OidcPopupCallback from '../views/oidc/OidcPopupCallback.vue'
import OidcCallbackError from '../views/oidc/OidcCallbackError.vue'
import { vuexOidcCreateRouterMiddleware } from 'vuex-oidc'
import store from '@/store'

// Routes
import paths from './paths'

function route (path, view, name, meta) {
  return {
    name: name || view,
    path,
    component: (resolve) => import(
      `@/views/${view}.vue`
    ).then(resolve),
    meta
  }
}

Vue.use(Router)

const routesOidc = [
  {
    path: '/protected',
    name: 'protected',
    component: () => import(/* webpackChunkName: "protected" */ '../views/oidc/Protected.vue')
  },
  {
    path: '/oidc-callback', // Needs to match redirectUri in you oidcSettings
    name: 'oidcCallback',
    component: OidcCallback
  },
  {
    path: '/oidc-popup-callback', // Needs to match popupRedirectUri in you oidcSettings
    name: 'oidcPopupCallback',
    component: OidcPopupCallback
  },
  {
    path: '/oidc-callback-error', // Needs to match redirect_uri in you oidcSettings
    name: 'oidcCallbackError',
    component: OidcCallbackError,
    meta: {
      isPublic: true
    }
  }
]

// Create a new router
const router = new Router({
  mode: 'history',
  routes: [
    ...paths.map(path => route(path.path, path.view, path.name, path.meta)).concat([
      { path: '*', redirect: '/' }
    ]),
    ...routesOidc
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

router.beforeEach(vuexOidcCreateRouterMiddleware(store, 'oidcStore'))

Vue.use(Meta)

// Bootstrap Analytics
// Set in .env
// https://github.com/MatteoGabriele/vue-analytics
if (process.env.GOOGLE_ANALYTICS) {
  Vue.use(VueAnalytics, {
    id: process.env.GOOGLE_ANALYTICS,
    router,
    autoTracking: {
      page: process.env.NODE_ENV !== 'development'
    }
  })
}

export default router
