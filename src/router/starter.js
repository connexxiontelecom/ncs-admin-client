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


// Router Configuration
const router = new Router({
  mode: 'history',
  // linkActiveClass: 'active',
  // linkExactActiveClass: '',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '',
      component: () => import('@/layouts/variations/BackendStarter.vue'),
      children: [
        {
          path: '/',
          name: 'Dashboard',
          component: () => import('@/views/starter/Dashboard.vue'),
          meta: {
            title: 'Home | NCS Admin',
            authRequired: true,
          },

        },
        {
          path: 'inmates/enrollment',
          name: 'Enrollment',
          component: () => import('@/views/inmates/Enrollment'),
          meta: {
            title: 'Enrollment | NCS Admin',
            accessRequired: 4,
          }
        },
        {
          path: 'inmates/manage_inmates',
          name: 'Manage Inmates',
          component: () => import('@/views/inmates/ManageInmates'),
          meta: {
            title: 'Manage Inmates | NCS Admin',
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
            title: 'Sign In | NCS Admin',
            splash: true
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.meta.title) {
    document.title = to.meta.title
  }
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
    }, 3000);
  }
})
export default router
