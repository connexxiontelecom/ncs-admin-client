<template>
  <!-- Sidebar -->
  <!--
    Sidebar Mini Mode - Display Helper classes

    Adding 'smini-hide' class to an element will make it invisible (opacity: 0) when the sidebar is in mini mode
    Adding 'smini-show' class to an element will make it visible (opacity: 1) when the sidebar is in mini mode
    If you would like to disable the transition animation, make sure to also add the 'no-transition' class to your element

    Adding 'smini-hidden' to an element will hide it when the sidebar is in mini mode
    Adding 'smini-visible' to an element will show it (display: inline-block) only when the sidebar is in mini mode
    Adding 'smini-visible-block' to an element will show it (display: block) only when the sidebar is in mini mode
    -->
  <nav id="sidebar" aria-label="Main Navigation">
    <slot>
      <!-- Side Header -->
      <div class="content-header bg-white-5">
        <!-- Logo -->
        <router-link to="/" class="font-w600 text-dual">
<!--          <span >-->
<!--            <i class="fa fa-circle-notch text-primary"></i>-->
<!--          </span>-->
          <span class="smini-visible"><img src="img/logos/logo.png" width="25" alt=""></span>

          <span class="smini-hide font-size-h5 tracking-wider">
            <span><img src="img/logos/logo.png" width="40" class="mr-2 mb-2" alt=""></span>  NCS <span class="font-w400">Admin</span>
          </span>
        </router-link>
        <!-- END Logo -->

        <!-- Extra -->
        <div>
          <!-- Options -->
<!--          <b-dropdown size="sm" variant="dual" class="d-inline-block ml-2" menu-class="font-size-sm smini-hide border-0" right no-caret ref="oneDropdownOptions">-->
<!--            <template #button-content>-->
<!--              <i class="si si-drop"></i>-->
<!--            </template>-->
<!--            <li @click="$refs.oneDropdownOptions.hide(true)">-->
<!--              &lt;!&ndash; Color Themes &ndash;&gt;-->
<!--              <a class="dropdown-item font-w500 d-flex align-items-center justify-content-between" @click.prevent="$store.commit('setColorTheme', { theme: '' })" href="#">-->
<!--                <span>Default</span>-->
<!--                <i class="fa fa-circle text-default"></i>-->
<!--              </a>-->
<!--              <a class="dropdown-item font-w500 d-flex align-items-center justify-content-between" @click.prevent="$store.commit('setColorTheme', { theme: 'amethyst' })" href="#">-->
<!--                <span>Amethyst</span>-->
<!--                <i class="fa fa-circle text-amethyst"></i>-->
<!--              </a>-->
<!--              <a class="dropdown-item font-w500 d-flex align-items-center justify-content-between" @click.prevent="$store.commit('setColorTheme', { theme: 'city' })" href="#">-->
<!--                <span>City</span>-->
<!--                <i class="fa fa-circle text-city"></i>-->
<!--              </a>-->
<!--              <a class="dropdown-item font-w500 d-flex align-items-center justify-content-between" @click.prevent="$store.commit('setColorTheme', { theme: 'flat' })" href="#">-->
<!--                <span>Flat</span>-->
<!--                <i class="fa fa-circle text-flat"></i>-->
<!--              </a>-->
<!--              <a class="dropdown-item font-w500 d-flex align-items-center justify-content-between" @click.prevent="$store.commit('setColorTheme', { theme: 'modern' })" href="#">-->
<!--                <span>Modern</span>-->
<!--                <i class="fa fa-circle text-modern"></i>-->
<!--              </a>-->
<!--              <a class="dropdown-item font-w500 d-flex align-items-center justify-content-between" @click.prevent="$store.commit('setColorTheme', { theme: 'smooth' })" href="#">-->
<!--                <span>Smooth</span>-->
<!--                <i class="fa fa-circle text-smooth"></i>-->
<!--              </a>-->
<!--              &lt;!&ndash; END Color Themes &ndash;&gt;-->

<!--              <div role="separator" class="dropdown-divider"></div>-->

<!--              &lt;!&ndash; Sidebar Styles &ndash;&gt;-->
<!--              <base-layout-modifier tag="a" action="sidebarStyleLight" class="dropdown-item font-w500">-->
<!--                Sidebar Light-->
<!--              </base-layout-modifier>-->
<!--              <base-layout-modifier tag="a" action="sidebarStyleDark" class="dropdown-item font-w500">-->
<!--                Sidebar Dark-->
<!--              </base-layout-modifier>-->
<!--              &lt;!&ndash; Sidebar Styles &ndash;&gt;-->

<!--              <div role="separator" class="dropdown-divider"></div>-->

<!--              &lt;!&ndash; Header Styles &ndash;&gt;-->
<!--              <base-layout-modifier tag="a" action="headerStyleLight" class="dropdown-item font-w500">-->
<!--                Header Light-->
<!--              </base-layout-modifier>-->
<!--              <base-layout-modifier tag="a" action="headerStyleDark" class="dropdown-item font-w500">-->
<!--                Header Dark-->
<!--              </base-layout-modifier>-->
<!--              &lt;!&ndash; Header Styles &ndash;&gt;-->
<!--            </li>-->
<!--          </b-dropdown>-->
          <!-- Options -->

          <!-- Close Sidebar, Visible only on mobile screens -->
          <base-layout-modifier size="sm" variant="dual" action="sidebarClose" class="d-lg-none ml-1">
            <i class="fa fa-fw fa-times"></i>
          </base-layout-modifier>
          <!-- END Close Sidebar -->
        </div>
        <!-- END Extra -->
      </div>
      <!-- END Side Header -->

      <!-- Sidebar Scrolling -->
      <simplebar class="js-sidebar-scroll">
        <!-- Side Navigation -->
        <div class="content-side">
          <base-navigation :nodes="navigation"></base-navigation>
        </div>
        <!-- END Side Navigation -->
      </simplebar>
      <!-- END Sidebar Scrolling -->
    </slot>
  </nav>
  <!-- END Sidebar -->
</template>

<script>
// SimpleBar, for more info and examples you can check out https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-vue
import simplebar from 'simplebar-vue'

// Get navigation data
import menuList from '@/data/menu'

export default {
  name: 'BaseSidebar',
  props: {
    classes: String
  },
  components: {
    simplebar
  },
  data () {
    const user = this.$store.getters["auth/currentUser"]
    let nav
    switch (parseInt(user.user_type)) {
      case 1:
        nav = menuList.ncshq
        break
      case 2:
        nav = menuList.ncszone
        break
      case 3:
        nav = menuList.ncsstate
        break
      default:
        nav = menuList.ncs
        break
    }

    return {
      // Get main navigation
      navigation: nav
    }
  }
}
</script>
