
<template>
  <div v-if="parseInt(user.user_type) === 1">
    <!-- Hero -->
    <div class="bg-body-light">
      <div class="content content-full">
        <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2 text-center text-sm-left">
          <div class="flex-sm-fill">
            <h1 class="h3 font-w700 mb-2">
              NCS Admin Dashboard
            </h1>
            <h2 class="h6 font-w500 text-muted mb-0">
              Welcome <a class="font-w600" href="javascript:void(0)">{{ user.user_first_name +" " +" "+ user.user_last_name }}</a>, this is an overview of the Nigerian Correctional Service Admin system.
            </h2>
          </div>
          <div class="mt-3 mt-sm-0 ml-sm-3">
            <b-button variant="alt-primary" class="mr-1" href="javascript:void(0)" v-click-ripple>
              <i class="fa fa-chart-line mr-1"></i> Reports
            </b-button>
            <b-button variant="alt-primary" href="javascript:void(0)" v-click-ripple>
              <i class="fa fa-cog"></i>
            </b-button>
          </div>
        </div>
      </div>
    </div>
    <!-- END Hero -->
    <!-- Page Content -->
    <div class="content">
      <!-- Stats -->
      <b-row>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)" v-b-tooltip.hover.top="'Manage Zones'">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Zonal Commands
              </div>
              <div class="font-size-h3">
                4 <span class="font-size-sm text-muted">Active Zones</span>
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-success-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)" v-b-tooltip.hover.top="'Manage States'">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
               State Commands
              </div>
              <div class="font-size-h3">
                15 <span class="font-size-sm text-muted">Active States</span>
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-warning-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)" v-b-tooltip.hover.top="'Manage Custodial Centers'">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Custodial Centers
              </div>
              <div class="font-size-h3">
                42 <span class="font-size-sm text-muted">Active custodial centers</span>
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-danger-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)" v-b-tooltip.hover.top="'Manage Cells'">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Cell Capacity
              </div>
              <div class="font-size-h3">
                68% <span class="font-size-sm text-muted">Occupied</span>
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-info-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <base-block rounded content-class="py-4" title="Activities" subtitle="Recent Activities">
            <ul class="timeline timeline-alt">
              <li class="timeline-event">
                <div class="timeline-event-icon bg-danger">
                  <i class="fa fa-calendar"></i>
                </div>
                <base-block rounded title="Meeting" header-bg class="timeline-event-block">
                  <template #options>
                    <div class="timeline-event-time block-options-item font-size-sm font-w600">
                      3 hrs ago
                    </div>
                  </template>
                  <b-media class="font-size-sm push">
                    <template #aside>
                      <a class="img-link" href="javascript:void(0)">
                        <i class="fa fa-utensils fa-fw fa-3x text-danger-light"></i>
                      </a>
                    </template>
                    <p>
                      You have a meal meeting scheduled with <a class="font-w600" href="javascript:void(0)">Adam McCoy</a> today at 16:18.
                    </p>
                  </b-media>
                </base-block>
              </li>
              <li class="timeline-event">
                <div class="timeline-event-icon bg-dark">
                  <i class="fa fa-cogs"></i>
                </div>
                <base-block rounded title="System" header-bg class="timeline-event-block">
                  <template #options>
                    <div class="timeline-event-time block-options-item font-size-sm font-w600">
                      1 day ago
                    </div>
                  </template>
                  <div class="alert alert-success d-flex align-items-center justify-content-between" role="alert">
                    <div class="flex-fill mr-3">
                      <p class="mb-0">NCS Admin was successfully <a class="alert-link" href="javascript:void(0)">updated</a> to v{{ $store.getters.appVersion }}!</p>
                    </div>
                    <div class="flex-00-auto">
                      <i class="fa fa-fw fa-check-circle"></i>
                    </div>
                  </div>
                </base-block>
              </li>
            </ul>
          </base-block>
        </b-col>

      </b-row>
      <!-- END Stats -->
    </div>
    <!-- END Page Content -->
  </div>
  <div v-else-if="parseInt(user.user_type) === 2">
    <!-- Hero -->
    <div class="bg-body-light">
      <div class="content content-full">
        <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2 text-center text-sm-left">
          <div class="flex-sm-fill">
            <h1 class="h3 font-w700 mb-2">
              Zonal Dashboard
            </h1>
            <h2 class="h6 font-w500 text-muted mb-0">
              Welcome <a class="font-w600" href="javascript:void(0)">{{ user.user_first_name +" " +" "+ user.user_last_name }}</a>, this is an overview of of your Zonal Command.
            </h2>
          </div>
          <div class="mt-3 mt-sm-0 ml-sm-3">
            <b-button variant="alt-primary" class="mr-1" href="javascript:void(0)" v-click-ripple>
              <i class="fa fa-chart-line mr-1"></i> Reports
            </b-button>
            <b-button variant="alt-primary" href="javascript:void(0)" v-click-ripple>
              <i class="fa fa-cog"></i>
            </b-button>
          </div>
        </div>
      </div>
    </div>
    <!-- END Hero -->
    <!-- Page Content -->
    <div class="content">
      <!-- Stats -->
      <b-row>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)" v-b-tooltip.hover.nofade.top="'Manage Inmates'">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Inmates (Zonal)
              </div>
              <div class="font-size-h3">
                10,580
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-success-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)" v-b-tooltip.hover.nofade.top="'Manage Cells'">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Capacity
              </div>
              <div class="font-size-h3">
                68% <span class="font-size-sm text-muted">Occupied</span>
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-danger-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)" v-b-tooltip.hover.nofade.top="'Manage Events'">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Events
              </div>
              <div class="font-size-h3">
                2 <span class="font-size-sm text-muted">Upcoming</span>
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-success-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)" v-b-tooltip.hover.nofade.top="'Manage Trainings'">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Trainings
              </div>
              <div class="font-size-h3">
                0 <span class="font-size-sm text-muted">Upcoming</span>
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-danger-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <base-block rounded content-class="py-4" title="Activities" subtitle="Recent Activities">
            <ul class="timeline timeline-alt">
              <li class="timeline-event">
                <div class="timeline-event-icon bg-danger">
                  <i class="fa fa-calendar"></i>
                </div>
                <base-block rounded title="Meeting" header-bg class="timeline-event-block">
                  <template #options>
                    <div class="timeline-event-time block-options-item font-size-sm font-w600">
                      3 hrs ago
                    </div>
                  </template>
                  <b-media class="font-size-sm push">
                    <template #aside>
                      <a class="img-link" href="javascript:void(0)">
                        <i class="fa fa-utensils fa-fw fa-3x text-danger-light"></i>
                      </a>
                    </template>
                    <p>
                      You have a meal meeting scheduled with <a class="font-w600" href="javascript:void(0)">Adam McCoy</a> today at 16:18.
                    </p>
                  </b-media>
                </base-block>
              </li>
              <li class="timeline-event">
                <div class="timeline-event-icon bg-dark">
                  <i class="fa fa-cogs"></i>
                </div>
                <base-block rounded title="System" header-bg class="timeline-event-block">
                  <template #options>
                    <div class="timeline-event-time block-options-item font-size-sm font-w600">
                      1 day ago
                    </div>
                  </template>
                  <div class="alert alert-success d-flex align-items-center justify-content-between" role="alert">
                    <div class="flex-fill mr-3">
                      <p class="mb-0">NCS Admin was successfully <a class="alert-link" href="javascript:void(0)">updated</a> to v{{ $store.getters.appVersion }}!</p>
                    </div>
                    <div class="flex-00-auto">
                      <i class="fa fa-fw fa-check-circle"></i>
                    </div>
                  </div>
                </base-block>
              </li>
            </ul>
          </base-block>
        </b-col>

      </b-row>
      <!-- END Stats -->
    </div>
    <!-- END Page Content -->
  </div>
  <div v-else-if="parseInt(user.user_type) === 3">
    <!-- Hero -->
    <div class="bg-body-light">
      <div class="content content-full">
        <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2 text-center text-sm-left">
          <div class="flex-sm-fill">
            <h1 class="h3 font-w700 mb-2">
              State Dashboard
            </h1>
            <h2 class="h6 font-w500 text-muted mb-0">
              Welcome <a class="font-w600" href="javascript:void(0)">{{ user.user_first_name +" " +" "+ user.user_last_name }}</a>, this is an overview of your State Command.
            </h2>
          </div>
          <div class="mt-3 mt-sm-0 ml-sm-3">
            <b-button variant="alt-primary" class="mr-1" href="javascript:void(0)" v-click-ripple>
              <i class="fa fa-chart-line mr-1"></i> Reports
            </b-button>
            <b-button variant="alt-primary" href="javascript:void(0)" v-click-ripple>
              <i class="fa fa-cog"></i>
            </b-button>
          </div>
        </div>
      </div>
    </div>
    <!-- END Hero -->
    <!-- Page Content -->
    <div class="content">
      <!-- Stats -->
      <b-row>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)" v-b-tooltip.hover.nofade.top="'Manage Inmates'">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Inmates (State)
              </div>
              <div class="font-size-h3">
                10,580
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-success-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)" v-b-tooltip.hover.nofade.top="'Manage Cells'">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Capacity
              </div>
              <div class="font-size-h3">
                68% <span class="font-size-sm text-muted">Occupied</span>
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-danger-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)" v-b-tooltip.hover.nofade.top="'Manage Custodial Centers'">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Correctional Centers
              </div>
              <div class="font-size-h3">
<!--                2 <span class="font-size-sm text-muted">Upcoming</span>-->
                10
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-success-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)" v-b-tooltip.hover.nofade.top="'Manage Trainings'">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Trainings
              </div>
              <div class="font-size-h3">
                0 <span class="font-size-sm text-muted">Upcoming</span>
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-danger-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <base-block rounded content-class="py-4" title="Activities" subtitle="Recent Activities">
            <ul class="timeline timeline-alt">
              <li class="timeline-event">
                <div class="timeline-event-icon bg-danger">
                  <i class="fa fa-calendar"></i>
                </div>
                <base-block rounded title="Meeting" header-bg class="timeline-event-block">
                  <template #options>
                    <div class="timeline-event-time block-options-item font-size-sm font-w600">
                      3 hrs ago
                    </div>
                  </template>
                  <b-media class="font-size-sm push">
                    <template #aside>
                      <a class="img-link" href="javascript:void(0)">
                        <i class="fa fa-utensils fa-fw fa-3x text-danger-light"></i>
                      </a>
                    </template>
                    <p>
                      You have a meal meeting scheduled with <a class="font-w600" href="javascript:void(0)">Adam McCoy</a> today at 16:18.
                    </p>
                  </b-media>
                </base-block>
              </li>
              <li class="timeline-event">
                <div class="timeline-event-icon bg-dark">
                  <i class="fa fa-cogs"></i>
                </div>
                <base-block rounded title="System" header-bg class="timeline-event-block">
                  <template #options>
                    <div class="timeline-event-time block-options-item font-size-sm font-w600">
                      1 day ago
                    </div>
                  </template>
                  <div class="alert alert-success d-flex align-items-center justify-content-between" role="alert">
                    <div class="flex-fill mr-3">
                      <p class="mb-0">NCS Admin was successfully <a class="alert-link" href="javascript:void(0)">updated</a> to v{{ $store.getters.appVersion }}!</p>
                    </div>
                    <div class="flex-00-auto">
                      <i class="fa fa-fw fa-check-circle"></i>
                    </div>
                  </div>
                </base-block>
              </li>
            </ul>
          </base-block>
        </b-col>

      </b-row>
      <!-- END Stats -->
    </div>
    <!-- END Page Content -->
  </div>
  <div v-else-if="parseInt(user.user_type) === 4">
    <!-- Hero -->
    <div class="bg-body-light">
      <div class="content content-full">
        <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2 text-center text-sm-left">
          <div class="flex-sm-fill">
            <h1 class="h3 font-w700 mb-2">
              Custodial Dashboard
            </h1>
            <h2 class="h6 font-w500 text-muted mb-0">
              Welcome <a class="font-w600" href="javascript:void(0)">{{ user.user_first_name +" " +" "+ user.user_last_name }}</a>, this is an overview of your Custodial Center.
            </h2>
          </div>
          <div class="mt-3 mt-sm-0 ml-sm-3">
            <b-button variant="alt-primary" class="mr-1" href="javascript:void(0)" v-click-ripple>
              <i class="fa fa-chart-line mr-1"></i> Reports
            </b-button>
            <b-button variant="alt-primary" href="javascript:void(0)" v-click-ripple>
              <i class="fa fa-cog"></i>
            </b-button>
          </div>
        </div>
      </div>
    </div>
    <!-- END Hero -->
    <!-- Page Content -->
    <div class="content">
      <!-- Stats -->
      <b-row>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)" v-b-tooltip.hover.nofade.top="'Manage Inmates'">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Inmates (State)
              </div>
              <div class="font-size-h3">
                10,580
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-success-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)" v-b-tooltip.hover.nofade.top="'Manage Cells'">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Capacity
              </div>
              <div class="font-size-h3">
                68% <span class="font-size-sm text-muted">Occupied</span>
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-danger-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)" v-b-tooltip.hover.nofade.top="'Manage Custodial Centers'">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Events
              </div>
              <div class="font-size-h3">
                2 <span class="font-size-sm text-muted">Upcoming</span>
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-success-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)" v-b-tooltip.hover.nofade.top="'Manage Trainings'">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Trainings
              </div>
              <div class="font-size-h3">
                0 <span class="font-size-sm text-muted">Upcoming</span>
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-danger-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <base-block rounded content-class="py-4" title="Activities" subtitle="Recent Activities">
            <ul class="timeline timeline-alt">
              <li class="timeline-event">
                <div class="timeline-event-icon bg-danger">
                  <i class="fa fa-calendar"></i>
                </div>
                <base-block rounded title="Meeting" header-bg class="timeline-event-block">
                  <template #options>
                    <div class="timeline-event-time block-options-item font-size-sm font-w600">
                      3 hrs ago
                    </div>
                  </template>
                  <b-media class="font-size-sm push">
                    <template #aside>
                      <a class="img-link" href="javascript:void(0)">
                        <i class="fa fa-utensils fa-fw fa-3x text-danger-light"></i>
                      </a>
                    </template>
                    <p>
                      You have a meal meeting scheduled with <a class="font-w600" href="javascript:void(0)">Adam McCoy</a> today at 16:18.
                    </p>
                  </b-media>
                </base-block>
              </li>
              <li class="timeline-event">
                <div class="timeline-event-icon bg-dark">
                  <i class="fa fa-cogs"></i>
                </div>
                <base-block rounded title="System" header-bg class="timeline-event-block">
                  <template #options>
                    <div class="timeline-event-time block-options-item font-size-sm font-w600">
                      1 day ago
                    </div>
                  </template>
                  <div class="alert alert-success d-flex align-items-center justify-content-between" role="alert">
                    <div class="flex-fill mr-3">
                      <p class="mb-0">NCS Admin was successfully <a class="alert-link" href="javascript:void(0)">updated</a> to v{{ $store.getters.appVersion }}!</p>
                    </div>
                    <div class="flex-00-auto">
                      <i class="fa fa-fw fa-check-circle"></i>
                    </div>
                  </div>
                </base-block>
              </li>
            </ul>
          </base-block>
        </b-col>

      </b-row>
      <!-- END Stats -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>

export default {
  data () {
    return {
      user: this.$store.getters["auth/currentUser"]
    }
  }
}
</script>
