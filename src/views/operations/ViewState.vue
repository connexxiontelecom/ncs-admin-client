<template>
  <div>
    <!-- Hero -->
    <base-page-heading :title="'View '+stateName" subtitle="View State Details Here">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item active><router-link to="/operations"><i class="fa fa-home"></i></router-link></b-breadcrumb-item>
          <b-breadcrumb-item active><router-link to="/zonal_operations">Zonal Operations</router-link></b-breadcrumb-item>
          <b-breadcrumb-item active><router-link to="/zonal_operations/zone">{{ zoneName }}</router-link></b-breadcrumb-item>
          <b-breadcrumb-item href="javascript:void(0)" active>{{ stateName }}</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->
      <div class="content">
        <b-row>
          <b-col cols="6" md="3" lg="6" xl="3">
            <base-block tag="a" rounded link-shadow content-class="d-flex py-4">
              <div class="flex-grow-1">
                <div class="font-size-sm font-w600 text-uppercase text-muted">
                  State Coordinator
                </div>
                <div class="font-size-h3">
                  Sgt Abubakar<span class="font-size-sm text-muted"></span>
                </div>
              </div>
              <div class="d-flex ml-2">
                <div class="flex-grow-1 px-1 bg-warning-light rounded-lg"></div>
              </div>
            </base-block>
          </b-col>
          <b-col cols="6" md="3" lg="6" xl="3">
            <base-block tag="a" rounded link-shadow content-class="d-flex py-4">
              <div class="flex-grow-1">
                <div class="font-size-sm font-w600 text-uppercase text-muted">
                  State Capacity
                </div>
                <div class="font-size-h3">
                  110% <span class="font-size-sm text-muted">occupied</span>
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
                  {{ centerCount }} <span class="font-size-sm text-muted">total</span>
                </div>
              </div>
              <div class="d-flex ml-2">
                <div class="flex-grow-1 px-1 bg-danger-light rounded-lg"></div>
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
                  {{ centerCount }} <span class="font-size-sm text-muted">active</span>
                </div>
              </div>
              <div class="d-flex ml-2">
                <div class="flex-grow-1 px-1 bg-danger-light rounded-lg"></div>
              </div>
            </base-block>
          </b-col>
          <b-col cols="6" md="3" lg="6" xl="3">
            <base-block tag="a" rounded link-shadow content-class="d-flex py-4">
              <div class="flex-grow-1">
                <div class="font-size-sm font-w600 text-uppercase text-muted">
                  Center Coordinators
                </div>
                <div class="font-size-h3">
                  0 <span class="font-size-sm text-muted">total</span>
                </div>
              </div>
              <div class="d-flex ml-2">
                <div class="flex-grow-1 px-1 bg-warning-light rounded-lg"></div>
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
                  1,189 <span class="font-size-sm text-muted">convicted</span>
                </div>
              </div>
              <div class="d-flex ml-2">
                <div class="flex-grow-1 px-1 bg-info-light rounded-lg"></div>
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
                  890 <span class="font-size-sm text-muted">awaiting trial</span>
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
            <base-block rounded :title="'All Custodial Centers In '+stateName" :subtitle="totalRows +' total custodial centers'" btn-option-fullscreen>
              <b-row>
                <b-col lg="4" class="my-1">
                  <b-form-group label-size="sm" label-for="filterInput" class="mb-2">
                    <b-input-group size="sm">
                      <b-form-input class="form-control-alt" v-model="filter" type="search" id="filterInput" placeholder="Type to Search"></b-form-input>
                      <b-input-group-append>
                        <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                      </b-input-group-append>
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col lg="4"></b-col>
                <!--              <b-col lg="4" class="text-right">-->
                <!--                <download-excel class="btn btn-secondary btn-sm" :data="this.filteredItems" :fields="this.exportFields" name="NCS Admin - Zonal Commands.xls" v-b-tooltip.hover.nofade.topleft="'Export Excel'">-->
                <!--                  <i class="fa fa-file-excel"></i>-->
                <!--                </download-excel>-->
                <!--                <download-excel class="btn btn-secondary btn-sm" type="csv" :data="this.filteredItems" :fields="this.exportFields" name="NCS Admin - Zonal Commands.csv" v-b-tooltip.hover.nofade.topleft="'Export CSV'">-->
                <!--                  <i class="fa fa-file-csv"></i>-->
                <!--                </download-excel>-->
                <!--              </b-col>-->
              </b-row>
              <b-table class="mb-2" @filtered="onFiltered" selectable selected-variant="primary" show-empty striped hover bordered head-variant="light" :filter="filter" :items="centersSN" :fields="centreFields" :current-page="currentPage" :per-page="perPage" @row-clicked="viewCentre">
              </b-table>
              <b-row>
                <b-col lg="2" class="my-1">
                  <b-form-group label-for="perPageSelect" class="mb-3">
                    <b-form-select class="form-control-alt" v-model="perPage" id="perPageSelect" size="sm" :options="pageOptions"></b-form-select>
                  </b-form-group>
                </b-col>
                <b-col lg="8"></b-col>
                <b-col lg="2" class="my-1">
                  <b-pagination class="mb-3 my-0" v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="fill" size="sm"></b-pagination>
                </b-col>
              </b-row>
            </base-block>
          </b-col>
        </b-row>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    centersSN () {
      return this.centers.map((d, index) => ({ ...d, sno: index + 1 }))
    }
  },
  data(){
    return {
      zoneName: this.$store.getters.getZoneNameParam,
      stateName: this.$store.getters.getStateNameParam,
      centers: this.$store.getters.getStateDetails.centers,
      centerCount: this.$store.getters.getStateDetails.numCenters,
      centreFields: [
        {key: 'sno', label: 'S/n', thStyle: 'width: 10%'},
        {key: 'cc_name', label: 'Custodial Center Name', sortable: true},
        {key: 'cc_type_name', label: 'Custodial Center Type', sortable: true},

      ],
      exportFields: {'centre ID': 'cc_id', 'Centre Name': 'cc_name'},
      filter: null,
      filteredItems: this.centers,
      totalRows: this.$store.getters.getStateDetails.numCenters,
      currentPage: 1,
      perPage: 10,
      pageOptions: [{value: 5, text: '5 per page'}, {value: 10, text: '10 per page'}, {value: 15, text: '15 per page'}],
    }
  },
  methods: {
    viewCentre(item){
      let centerID = item.cc_id
      let centerName = item.cc_name
      this.$store.commit('setCenterRouteParam', { centerID, centerName })
      this.getCenterDetails().then()
      this.$router.push("/zonal_operations/zone/state/center")
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
      this.filteredItems = filteredItems
    },
  },
  destroyed() {
    // localStorage.removeItem('stateIDRouteParams')
    // localStorage.removeItem('stateNameRouteParams')
  }


}
</script>

