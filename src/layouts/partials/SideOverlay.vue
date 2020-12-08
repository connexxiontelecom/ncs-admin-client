<template>
  <!-- Side Overlay-->
  <simplebar id="side-overlay">
    <slot>
      <!-- Side Header -->
      <div class="content-header border-bottom">
        <!-- User Avatar -->
        <a class="img-link mr-1" href="javascript:void(0)">
          <img class="img-avatar img-avatar32" src="img/logos/logo-1.png" alt="Avatar">
        </a>
        <!-- END User Avatar -->

        <!-- User Info -->
        <div class="ml-2" >
          <a v-if="isHQ" class="text-dark font-w600 font-size-sm" href="javascript:void(0)">NCS HQ Command</a>
        </div>
        <!-- END User Info -->

        <!-- Close Side Overlay -->
        <base-layout-modifier action="sideOverlayClose" variant="alt-danger" size="sm" class="ml-auto">
          <i class="fa fa-fw fa-times"></i>
        </base-layout-modifier>
        <!-- END Close Side Overlay -->
      </div>
      <!-- END Side Header -->

      <!-- Side Content -->
      <div class="content-side">
        <!-- Side Overlay Tabs -->
        <b-tabs class="block block-transparent pull-x pull-t" nav-class="nav-tabs-alt" content-class="block-content" justified>
          <b-tab class="fade-right pull-x" active>
            <template #title>
              <i class="fa fa-fw fa-coffee text-gray mr-1"></i> Overview
            </template>
            <!-- Stats -->
            <div class="block-content">
              <b-row class="items-push pull-t">
                <b-col cols="4">
                  <div class="font-size-sm font-w600 text-uppercase">Zones</div>
                  <a class="font-size-lg" href="javascript:void(0)">{{ numZones }}</a>
                </b-col>
                <b-col cols="4">
                  <div class="font-size-sm font-w600 text-uppercase">States</div>
                  <a class="font-size-lg" href="javascript:void(0)">{{ numStates }}</a>
                </b-col>
                <b-col cols="4">
                  <div class="font-size-sm font-w600 text-uppercase">Centers</div>
                  <a class="font-size-lg" href="javascript:void(0)">{{ numCenters }}</a>
                </b-col>
              </b-row>
            </div>
            <!-- END Stats -->
            <!-- Activity -->
            <base-block title="Zonal Commands" header-bg btn-option-content>
              <ul class="nav-items mb-0">
                <li v-for="(zone, index) in zones" :key="`zone-${index}`">
                  <a class="text-dark media py-1" href="javascript:void(0)">
                    <div class="mr-3 ml-2">
                      <i class="fa fa-layer-group text-danger"></i>
                    </div>
                    <div class="media-body">
<!--                      <div class="font-size-sm font-w600">Cmdr Benjamin Masari</div>-->
                      <div class="text-danger">{{ zone.zone_name }}</div>
                      <small class="font-size-sm text-muted">3 active states</small>
                    </div>
                  </a>
                </li>
              </ul>
            </base-block>
            <!-- END Activity -->

            <!-- Online Friends -->
            <base-block title="State Commands" header-bg btn-option-content>
              <ul class="nav-items mb-0">
                <li v-for="(state, index) in states" :key="`state-${index}`">
                  <a class="text-dark media py-1" href="javascript:void(0)">
                    <div class="mr-3 ml-2">
                      <i class="fa fa-globe text-info"></i>
                    </div>
                    <div class="media-body">
                      <div class="font-size-sm font-w600">{{ state.zone_name }}</div>
                      <div class="text-info">{{ state.state_name }}</div>
                      <small class="font-size-sm text-muted">3 active states</small>
                    </div>
                  </a>
                </li>
              </ul>
            </base-block>
            <!-- END Online Friends -->

            <!-- Online Friends -->
            <base-block title="Custodial Centers" header-bg btn-option-content>
              <ul class="nav-items mb-0">
                <li v-for="(center, index) in centers" :key="`center-${index}`">
                  <a class="media py-1" href="javascript:void(0)">
                    <div class="mr-3 ml-2 overlay-container overlay-bottom">
                      <i class="fa fa-university"></i>
                    </div>
                    <div class="media-body">
                      <div class="font-w600">{{ center.cc_name }}</div>
                      <small class="font-size-sm text-muted">3 active states</small>
                    </div>
                  </a>
                </li>
              </ul>
            </base-block>
            <!-- END Online Friends -->

            <!-- Quick Settings -->
            <base-block title="Quick Settings" class="mb-0" header-bg btn-option-content>
              <div class="form-group">
                <p class="font-size-sm font-w600 mb-2">
                  Online Status
                </p>
                <b-form-checkbox v-model="settings.status" name="so-settings-status" class="mb-1" switch>
                  Show your status to all
                </b-form-checkbox>
              </div>
              <div class="form-group">
                <p class="font-size-sm font-w600 mb-2">
                  Auto Updates
                </p>
                <b-form-checkbox v-model="settings.updated" name="so-settings-updated" class="mb-1" switch>
                  Keep up to date
                </b-form-checkbox>
              </div>
              <div class="form-group">
                <p class="font-size-sm font-w600 mb-1">
                  Application Alerts
                </p>
                <b-form-checkbox v-model="settings.notifications.email" name="so-settings-notifications-email" class="mb-1" switch>
                  Email Notifications
                </b-form-checkbox>
                <b-form-checkbox v-model="settings.notifications.sms" name="so-settings-notifications-sms" class="mb-1" switch>
                  SMS Notifications
                </b-form-checkbox>
              </div>
              <div class="form-group">
                <p class="font-size-sm font-w600 mb-1">
                  API
                </p>
                <b-form-checkbox v-model="settings.api" name="so-settings-api" class="mb-1" switch>
                  Enable access
                </b-form-checkbox>
              </div>
            </base-block>
            <!-- END Quick Settings -->
          </b-tab>
          <b-tab class="fade-left pull-x">
            <template #title>
              <i class="fa fa-fw fa-users text-gray mr-1"></i> Users
            </template>
            <base-block class="mb-0" content-class="p-0">
              <!-- Today -->
              <div class="block-content block-content-full block-content-sm bg-body-light">
                <b-row>
                  <b-col cols="6">
                    <span class="font-size-sm font-w600 text-uppercase">Active Users</span>
                  </b-col>
                  <b-col cols="6" class="text-right">
                    <span class="ext-muted">12</span>
                  </b-col>
                </b-row>
              </div>
              <div class="block-content">
                <ul class="nav-items push">
                  <li>
                    <a href="javascript:void(0)" class="text-dark media py-1">
                      <div class="mr-3 ml-2">
                        <i class="fa fa-fw fa-circle text-success"></i>
                      </div>
                      <div class="media-body">
                        <div class="font-w600">Cmdr Nabil Salau</div>
                        <small class="text-muted">2hr ago</small>
                      </div>
                    </a>
                  </li>
<!--                  <li v-for="(sale, index) in salesToday" :key="`sale-today-${index}`">-->
<!--                    <a class="text-dark media py-2" :href="`${sale.href}`">-->
<!--                      <div class="mr-3 ml-2">-->
<!--                        <i :class="`${sale.icon}`"></i>-->
<!--                      </div>-->
<!--                      <div class="media-body">-->
<!--                        <div class="font-w600">{{ sale.title }}</div>-->
<!--                        <small class="text-muted">{{ sale.time }}</small>-->
<!--                      </div>-->
<!--                    </a>-->
<!--                  </li>-->
                </ul>

              </div>
              <!-- More -->
              <div class="text-center">
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-arrow-down mr-1"></i> Load More..
                </b-button>
              </div>
              <!-- END More -->
              <!-- END Today -->
            </base-block>
          </b-tab>
        </b-tabs>
        <!-- END Side Overlay Tabs -->
      </div>
      <!-- END Side Content -->
    </slot>
  </simplebar>
  <!-- END Side Overlay -->
</template>

<script>
// SimpleBar, for more info and examples you can check out https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-vue
import simplebar from 'simplebar-vue'

export default {
  name: 'BaseSideOverlay',
  props: {
    classes: String
  },
  components: {
    simplebar
  },
  data () {
    return {
      isHQ: this.$store.getters.getIsHQ,
      zones: this.$store.getters.getZones,
      numZones: this.$store.getters.getNumZones,
      states: this.$store.getters.getStates,
      numStates: this.$store.getters.getNumStates,
      centers: this.$store.getters.getCenters,
      numCenters: this.$store.getters.getNumCenters,
      settings: {
        status: true,
        updated: true,
        notifications: {
          email: true,
          sms: true
        },
        api: true
      },
      activity: [
        {
          href: 'javascript:void(0)',
          icon: 'si si-wallet',
          color: 'success',
          title: 'New sale ($15)',
          subtitle: 'Admin Template',
          time: '3 min ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'si si-pencil',
          color: 'info',
          title: 'You edited the file',
          subtitle: 'Documentation.doc',
          time: '15 min ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'si si-close',
          color: 'danger',
          title: 'Project deleted',
          subtitle: 'Line Icon Set',
          time: '4 hours ago'
        }
      ],
      userList: [
        {
          href: 'javascript:void(0)',
          name: 'Judy Ford',
          profession: 'Copywriter',
          avatar: 'avatar2',
          statusColor: 'success'
        },
        {
          href: 'javascript:void(0)',
          name: 'Carl Wells',
          profession: 'Web Developer',
          avatar: 'avatar11',
          statusColor: 'success'
        },
        {
          href: 'javascript:void(0)',
          name: 'Amber Shaw',
          profession: 'Web Designer',
          avatar: 'avatar5',
          statusColor: 'success'
        },
        {
          href: 'javascript:void(0)',
          name: 'Lisa Jekins',
          profession: 'Photographer',
          avatar: 'avatar7',
          statusColor: 'warning'
        },
        {
          href: 'javascript:void(0)',
          name: 'Adam Ford',
          profession: 'Graphic Designer',
          avatar: 'avatar16',
          statusColor: 'warning'
        }
      ],
      salesToday: [
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-circle text-success',
          title: 'New sale! + $249',
          time: '3 min ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-circle text-success',
          title: 'New sale! + $129',
          time: '50 min ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-circle text-success',
          title: 'New sale! + $119',
          time: '2 hours ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-circle text-success',
          title: 'New sale! + $499',
          time: '3 hours ago'
        }
      ],
      salesYesterday: [
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-circle text-success',
          title: 'New sale! + $249',
          time: '26 hours ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-circle text-danger',
          title: 'Product Purchase - $50',
          time: '28 hours ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-circle text-success',
          title: 'New sale! + $119',
          time: '29 hours ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-circle text-danger',
          title: 'Paypal Withdrawal - $300',
          time: '37 hours ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-circle text-success',
          title: 'New sale! + $129',
          time: '39 hours ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-circle text-success',
          title: 'New sale! + $119',
          time: '45 hours ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-circle text-success',
          title: 'New sale! + $499',
          time: '46 hours ago'
        }
      ]
    }
  },
  methods: {
    eventSideOverlay (event) {
      // When ESCAPE key is hit close the side overlay
      if (event.which === 27) {
        event.preventDefault()
        this.$store.commit('sideOverlay', { mode: 'close' })
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', this.eventSideOverlay)
  },
  destroyed() {
    document.removeEventListener('keydown', this.eventSideOverlay)
  }
}
</script>
