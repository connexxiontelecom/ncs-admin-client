<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="View Zonal Command" subtitle="View Details of Zonal Command Here">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item active><router-link to="/zonal_operations"><i class="fa fa-home"></i></router-link></b-breadcrumb-item>
          <b-breadcrumb-item href="javascript:void(0)" active>{{ states[0].zone_name }} Zonal Command</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->
      <div class="content">
          <b-row>

            <b-col cols="6" md="3" lg="6" xl="3">

                <base-block tag="a" rounded link-pop content-class="d-flex py-4">
                  <div class="flex-grow-1">
                    <div class="font-size-sm font-w600 text-uppercase text-muted">
                      State Commands
                    </div>
                    <div class="font-size-h3">
                      {{ stateCount }} <span class="font-size-sm text-muted">total</span>
                    </div>
                  </div>
                  <div class="d-flex ml-2">
                    <div class="flex-grow-1 px-1 bg-warning-light rounded-lg"></div>
                  </div>
                </base-block>

            </b-col>
            <b-col cols="6" md="3" lg="6" xl="3">

                <base-block tag="a" rounded link-pop content-class="d-flex py-4">
                  <div class="flex-grow-1">
                    <div class="font-size-sm font-w600 text-uppercase text-muted">
                      Custodial Centers
                    </div>
                    <div class="font-size-h3">
                      {{ ccs }} <span class="font-size-sm text-muted">total</span>
                    </div>
                  </div>
                  <div class="d-flex ml-2">
                    <div class="flex-grow-1 px-1 bg-danger-light rounded-lg"></div>
                  </div>
                </base-block>

            </b-col>
            <b-col cols="6" md="3" lg="6" xl="3">
              <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)" v-b-tooltip.hover.top="'Manage Inmates'">
                <div class="flex-grow-1">
                  <div class="font-size-sm font-w600 text-uppercase text-muted">
                    Inmates
                  </div>
                  <div class="font-size-h3">
                    30,129 <span class="font-size-sm text-muted">convicted</span>
                  </div>
                </div>
                <div class="d-flex ml-2">
                  <div class="flex-grow-1 px-1 bg-info-light rounded-lg"></div>
                </div>
              </base-block>


            </b-col>


          </b-row>

        <b-row>
          <b-col>
            <base-block rounded>

              <b-table class="mb-2" @filtered="onFiltered" selectable show-empty striped hover bordered head-variant="light" :filter="filter" :items="states" :fields="stateFields" :current-page="currentPage" :per-page="perPage" @row-clicked="viewState" >
                <template #cell(actions)>

                  <b-button-group>
                    <router-link to="/zonal_operations">
                      <b-button size="sm" variant="light">
                        <i class="fa fa-fw fa-eye"></i>
                      </b-button>
                    </router-link>
                  </b-button-group>
                </template>
              </b-table>
            </base-block>
          </b-col>
        </b-row>
      </div>
  </div>
</template>

<script>
export default {
  mounted() {

    this.$store.dispatch('getZoneDetails', {zoneID: this.$store.getters.getZoneParams})
    .then(response =>{
      this.states = response.data.message.states
      this.stateCount = response.data.message.states.length
      this.ccs = response.data.message.cc.length

     // console.log(response.data.message)
      }
    )
    .catch(error => {
      console.log(error)
    })


    //console.log(this.$store.getters.getZoneParams)
  },
  data(){
    return{
      states: null,
      ccs: 0,
      stateCount: 0,
      stateFields: [{key: 'state_id', sortable: true, thStyle: 'width: 10%'}, {key: 'state_name', sortable: true}, {key: 'actions', sortable: false, thStyle: 'width: 9px'}],
      exportFields: {'State ID': 'state_id', 'State Name': 'state_name'},
      filter: null,
      filteredItems: this.states,
      totalRows: this.stateCount,
      currentPage: 1,
      perPage: 10,
      pageOptions: [{value: 5, text: '5 per page'}, {value: 10, text: '10 per page'}, {value: 15, text: '15 per page'}],
    }
  },
  methods: {
    viewState(item){
      let stateID = item.state_id
      this.$store.commit('setStateRouteParam', {stateID})
      this.$router.push("/zonal_operations/view_state")
    }
  }


}
</script>

