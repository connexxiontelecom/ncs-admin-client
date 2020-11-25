<template >
  <div v-if=" parseInt(user.user_type) === 1">
    <!-- Hero -->
    <div class="bg-body-light">
      <div class="content content-full">
        <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2 text-center text-sm-left">
          <div class="flex-sm-fill">

            <h2 class="h6 font-w500 text-muted mb-0">
              Welcome <a class="font-w600" href="javascript:void(0)">{{ user.user_first_name +" " +" "+ user.user_last_name }}</a>, this is an overview of Nigerian Correctional Service System.

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
                Total Inmates In Nigeria
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

  <div v-else-if=" parseInt(user.user_type) === 2">
    <!-- Hero -->
    <div class="bg-body-light">
      <div class="content content-full">
        <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2 text-center text-sm-left">
          <div class="flex-sm-fill">

            <h2 class="h6 font-w500 text-muted mb-0">
              Welcome <a class="font-w600" href="javascript:void(0)">{{ user.user_first_name +" " +" "+ user.user_last_name }}</a>, this is an overview of the activities in South South Zone.

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
                Total Inmates In Your Zone
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

  <div v-else-if=" parseInt(user.user_type) === 3">
    <!-- Hero -->
    <div class="bg-body-light">
      <div class="content content-full">
        <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2 text-center text-sm-left">
          <div class="flex-sm-fill">

            <h2 class="h6 font-w500 text-muted mb-0">
              Welcome <a class="font-w600" href="javascript:void(0)">{{ user.user_first_name +" " +" "+ user.user_last_name }}</a>, this is an overview of the activities in FCT.

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
                Total Inmates In Your state
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
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)" v-b-tooltip.hover.nofade.top="'Manage Inmates'">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
               Correctional Centres
              </div>
              <div class="font-size-h3">
                4
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

  <div v-else-if=" parseInt(user.user_type) === 4">
    <!-- Hero -->
    <div class="bg-body-light">
      <div class="content content-full">
        <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2 text-center text-sm-left">
          <div class="flex-sm-fill">

            <h2 class="h6 font-w500 text-muted mb-0">
              Welcome <a class="font-w600" href="javascript:void(0)">{{ user.user_first_name +" " +" "+ user.user_last_name }}</a>, this is an overview of the activities in Suleja Correctional Centre.

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
                Total Inmates In Your Correctional Centre
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
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)" v-b-tooltip.hover.nofade.top="'Manage Inmates'">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Correctional Centres
              </div>
              <div class="font-size-h3">
                4
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
</template>

<script>

export default {
  data () {
    const user_details = this.$jwt.decode(localStorage.getItem('username')).data

    return {
      user:  user_details,

    }
  }
}
</script>
