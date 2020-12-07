/*
 * Starter Router
 */

// Vue and Vue Router
import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

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
      path: '/',
      component: () => import('@/layouts/variations/BackendStarter.vue'),
      children: [
        {
          path: 'dashboard',
          name: 'Home',
          alias: '/',
          component: () => import('@/views/starter/Dashboard.vue'),
          meta: {
            title: 'Home | NCS Admin',
            authRequired: true,
          },
        },
        // zones routes
        {
          path: 'zonal_commands',
          name: 'Zones',
          component: () => import('@/views/zones/ZonalCommands'),
          meta: {
            title: 'Zonal Commands | NCS Admin',
            authRequired: true,
          }
        },
        {
          path: 'zonal_operations/view_state',
          name: 'zonal_operations/view_state',
          component: () => import('@/views/operations/ViewState'),
          meta: {
            title:  'Zonal Operations | NCS Admin',
            authRequired: true,
          }
        },
        // states routes
        {
          path: 'state_commands',
          name: 'States',
          component: () => import('@/views/states/StateCommands'),
          meta: {
            title: 'State Commands | NCS Admin',
            authRequired: true
          }
        },
        // custodial centers
        {
          path: 'custodial_centers',
          name: 'Custodial Centers',
          component: () => import('@/views/custodials/CustodialCenters'),
          meta: {
            title: 'Custodial Centers | NCS Admin',
            authRequired: true
          }
        },
        {
          path: 'custodial_center_types',
          name: 'Custodial Center Types',
          component: () => import('@/views/custodials/CustodialCenterTypes'),
          meta: {
            title: 'Custodial Center Types | NCS Admin',
            authRequired: true
          }
        },
        // cells
        {
          path: 'cells',
          name: 'Cells',
          component: () => import('@/views/cells/Cells'),
          meta: {
            title: 'Cells | NCS Admin',
            authRequired: true
          }
        },
        {
          path: 'cell_blocks',
          name: 'Cell Blocks',
          component: () => import('@/views/cells/CellBlocks'),
          meta: {
            title: 'Cell Blocks | NCS Admin',
            authRequired: true
          }
        },
        // inmates routes
        {
          path: 'enrollment',
          name: 'Enrollment',
          component: () => import('@/views/inmates/Enrollment'),
          meta: {
            title: 'Enrollment | NCS Admin',
            authRequired: true,
          }
        },
        {
          path: 'manage_inmates',
          name: 'Manage Inmates',
          component: () => import('@/views/inmates/ManageInmates'),
          meta: {
            title: 'Manage Inmates | NCS Admin',
            authRequired: true,
          }
        },
      ]
    },
    // operations
    {
      path: '',
      component: () => import('@/layouts/variations/Operations'),
      children: [
        {
          path: 'operations',
          name: 'operations',
          component: () => import('@/views/operations/Operations'),
          meta: {
            title:  'Operations | NCS Admin',
            authRequired: true,
          }
        },
        {
          path: 'zonal_operations',
          name: 'zonal_operations',
          component: () => import('@/views/operations/Zones'),
          meta: {
            title:  'Zonal Operations | NCS Admin',
            authRequired: true,
          }
        },
        {
          path: 'zonal_operations/view_zone',
          name: 'zonal_operations_view_zone',
          component: () => import('@/views/operations/ViewZone'),
          meta: {
            title:  'View Zone | NCS Admin',
            authRequired: true,
          }
        },
      ]
    },
    // auth routes
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
    },
    // error pages
    {
      path: '',
      component: () => import('@/layouts/variations/Simple'),
      children: [
        {
          path: '/error404',
          name: 'Error 404',
          component: () => import('@/views/pages/errors/404'),
          meta: {
            title: 'Not Found | NCS Admin'
          }
        }
      ]
    },
    {
      path: '*',
      redirect: '/error404'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.meta.title) {
    document.title = to.meta.title
  }
  if (to.meta.authRequired) {
    if (!localStorage.getItem('accessToken')) {
      router.push({ path: '/auth/signin' }).catch(() => {})
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
  // prevent routing back to app after logging out
  if (!localStorage.getItem('accessToken')) {
    router.push({ path: '/auth/signin' }).catch(() => {})
  }
  // don't route to sign in page if user hasn't logged out
  if (to.name === 'Sign In') {
    if(localStorage.getItem('accessToken')) {
      router.push(from.fullPath)
    } else {
      router.push({ path: '/auth/signin' }).catch(() => {})
    }
  }
})
export default router
