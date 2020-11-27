<template>
  <base-layout :layout-classes="layoutClasses">
    <!-- Side Overlay Content -->
    <!-- Using the available v-slot, we can override the default Side Overlay content from layouts/partials/SideOvelay.vue -->
<!--    <template #side-overlay>-->
<!--      &lt;!&ndash; Side Header &ndash;&gt;-->
<!--      <div class="content-header border-bottom">-->
<!--        &lt;!&ndash; User Avatar &ndash;&gt;-->
<!--        <a class="mr-1" href="javascript:void(0)">-->
<!--          <img class="img-avatar img-avatar32" src="img/avatars/avatar10.jpg" alt="Avatar">-->
<!--        </a>-->
<!--        &lt;!&ndash; END User Avatar &ndash;&gt;-->

<!--        &lt;!&ndash; User Info &ndash;&gt;-->
<!--        <div class="ml-2">-->
<!--          <a class="text-dark font-w600" href="javascript:void(0)">Adam McCoy</a>-->
<!--        </div>-->
<!--        &lt;!&ndash; END User Info &ndash;&gt;-->

<!--        &lt;!&ndash; Close Side Overlay &ndash;&gt;-->
<!--        <base-layout-modifier action="sideOverlayClose" variant="alt-danger" size="sm" class="ml-auto">-->
<!--          <i class="fa fa-fw fa-times text-danger"></i>-->
<!--        </base-layout-modifier>-->
<!--        &lt;!&ndash; END Close Side Overlay &ndash;&gt;-->
<!--      </div>-->
<!--      &lt;!&ndash; END Side Header &ndash;&gt;-->

<!--      &lt;!&ndash; Side Content &ndash;&gt;-->
<!--      <div class="content-side">-->
<!--        <p>-->
<!--          Side Overlay content..-->
<!--        </p>-->
<!--      </div>-->
<!--    </template>-->
    <!-- END Side Overlay Content -->

    <!-- Sidebar Content -->
    <!-- Using the available v-slot, we can override the default Sidebar content from layouts/partials/Sidebar.vue -->
<!--    <template #sidebar>-->
<!--      &lt;!&ndash; Side Header &ndash;&gt;-->
<!--      <div class="content-header bg-white-5">-->
<!--        &lt;!&ndash; Logo &ndash;&gt;-->
<!--        <router-link to="/landing" class="font-w600 text-dual">-->
<!--          <span class="smini-visible">-->
<!--            <i class="fa fa-circle-notch text-primary"></i>-->
<!--          </span>-->
<!--          <span class="smini-hide font-size-h5 tracking-wider">-->
<!--            OneUI <span class="font-w400">Vue</span>-->
<!--          </span>-->
<!--        </router-link>-->
<!--        &lt;!&ndash; END Logo &ndash;&gt;-->

<!--        &lt;!&ndash; Extra &ndash;&gt;-->
<!--        <div>-->
<!--          &lt;!&ndash; Close Sidebar, Visible only on mobile screens &ndash;&gt;-->
<!--          <base-layout-modifier size="sm" variant="dual" action="sidebarClose" class="d-lg-none ml-2">-->
<!--            <i class="fa fa-times"></i>-->
<!--          </base-layout-modifier>-->
<!--          &lt;!&ndash; END Close Sidebar &ndash;&gt;-->
<!--        </div>-->
<!--        &lt;!&ndash; END Extra &ndash;&gt;-->
<!--      </div>-->
<!--      &lt;!&ndash; END Side Header &ndash;&gt;-->

<!--      &lt;!&ndash; Sidebar Scrolling &ndash;&gt;-->
<!--      <simplebar class="js-sidebar-scroll">-->
<!--        &lt;!&ndash; Side Navigation &ndash;&gt;-->
<!--        <div class="content-side">-->
<!--          <base-navigation-->
<!--            :nodes="[-->
<!--              {-->
<!--                name: 'Dashboard - Custodial',-->
<!--                to: '/',-->
<!--                icon: 'si si-speedometer'-->
<!--              },-->
<!--              {-->
<!--                name: 'More',-->
<!--                heading: true-->
<!--              },-->
<!--              {-->
<!--                name: 'Landing',-->
<!--                to: '/landing',-->
<!--                icon: 'si si-rocket'-->
<!--              }-->
<!--            ]"-->
<!--          ></base-navigation>-->
<!--        </div>-->
<!--        &lt;!&ndash; END Side Navigation &ndash;&gt;-->
<!--      </simplebar>-->
<!--      &lt;!&ndash; END Sidebar Scrolling &ndash;&gt;-->
<!--    </template>-->
    <!-- END Sidebar Content -->

    <!-- Header Content -->
    <!-- Using the available v-slot, we can override the default Header content from layouts/partials/Header.vue -->
<!--    <template #header>-->
<!--      &lt;!&ndash; Header Content &ndash;&gt;-->
<!--      <div class="content-header">-->
<!--        &lt;!&ndash; Left Section &ndash;&gt;-->
<!--        <div class="d-flex align-items-center">-->
<!--          &lt;!&ndash; Toggle Sidebar &ndash;&gt;-->
<!--          <base-layout-modifier action="sidebarToggle" size="sm" variant="dual" class="mr-2 d-lg-none">-->
<!--            <i class="fa fa-fw fa-bars"></i>-->
<!--          </base-layout-modifier>-->
<!--          &lt;!&ndash; END Toggle Sidebar &ndash;&gt;-->

<!--          &lt;!&ndash; Toggle Mini Sidebar &ndash;&gt;-->
<!--          <base-layout-modifier action="sidebarMiniToggle" size="sm" variant="dual" class="mr-2 d-none d-lg-inline-block">-->
<!--            <i class="fa fa-fw fa-ellipsis-v"></i>-->
<!--          </base-layout-modifier>-->
<!--          &lt;!&ndash; END Toggle Mini Sidebar &ndash;&gt;-->
<!--        </div>-->
<!--        &lt;!&ndash; END Left Section &ndash;&gt;-->

<!--        &lt;!&ndash; Right Section &ndash;&gt;-->
<!--        <div class="d-flex align-items-center">-->
<!--          &lt;!&ndash; Toggle Side Overlay &ndash;&gt;-->
<!--          <base-layout-modifier action="sideOverlayToggle" variant="dual" size="sm" class="ml-2">-->
<!--            <i class="fa fa-fw fa-list-ul fa-flip-horizontal"></i>-->
<!--          </base-layout-modifier>-->
<!--          &lt;!&ndash; END Toggle Side Overlay &ndash;&gt;-->
<!--        </div>-->
<!--        &lt;!&ndash; END Right Section &ndash;&gt;-->
<!--      </div>-->
<!--      &lt;!&ndash; END Header Content &ndash;&gt;-->
<!--    </template>-->
    <!-- END Header Content -->


  </base-layout>
</template>

<script>
import BaseLayout from '../Base'

// SimpleBar, for more info and examples you can check out https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-vue
// import simplebar from 'simplebar-vue'

export default {
  name: 'LayoutBackend',
  components: {
    BaseLayout,
    // simplebar
  },
  data () {
    return {
      // Override and set custom CSS classes to the container of each base layout element
      layoutClasses: {
        sideOverlay: '',
        sidebar: '',
        header: '',
        footer: ''
      }
    }
  },
  created () {
    // Set default elements for this layout
    this.$store.commit('setLayout', {
      header: true,
      sidebar: true,
      sideOverlay: true,
      footer: true
    })

    // Set various template options
    this.$store.commit('headerStyle', { mode: 'light'})
    this.$store.commit('mainContent', { mode: 'full'})
  }
}
</script>
