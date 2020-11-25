/*
 * Starter Router
 */

// Vue and Vue Router
import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

// Main layouts
// import LayoutBackend from '@/layouts/variations/BackendStarter.vue'
// import LayoutSimple from '@/layouts/variations/Simple.vue'

// Register Vue Router
Vue.use(Router)

// Frontend Page Example
// const Landing = () => import("@/views/starter/Landing.vue")

// Backend Page Example
// const Dashboard = () => import("@/views/starter/Dashboard.vue")

// Router Configuration
const router = new Router({
  mode: 'history',
  // linkActiveClass: 'active',
  // linkExactActiveClass: '',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    // {
    //   path: '/',
    //   redirect: '/landing',
    //   component: LayoutSimple,
    //   children: [
    //     {
    //       path: '/landing',
    //       name: 'Landing',
    //       component: Landing
    //     }
    //   ]
    // },
    {
      path: '',
      component: () => import('@/layouts/variations/BackendStarter.vue'),
      children: [
        {
          path: '/',
          name: 'Dashboard',
          component: () => import('@/views/starter/Dashboard.vue'),
          meta: {
            authRequired: true,
            // splash: true
          }
        }

      ]
    },
    {
      path: '/auth',
      component: () => import('@/layouts/variations/Simple.vue'),
      children: [
        {
          path: 'signin',
          name: 'Sign In',
          component: () => import('@/views/pages/auth/SignIn.vue'),
          meta: {
            splash: true
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.authRequired) {
    if (!localStorage.getItem('accessToken')) {
      router.push({ path: '/auth/signin' })
    }
  }
  return next()
})

router.afterEach((to, from) => {
  // page loader splash screen
  if (to.meta.splash || from.meta.splash) {
    store.commit('pageLoader', {mode: 'on'})
    setTimeout(() => {
      store.commit('pageLoader', {mode: 'off'})
    }, 1000);
  }
})
export default router
