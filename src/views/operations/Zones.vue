<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Zonal Operations" subtitle="Manage Each Zone Here">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item active><router-link to="/operations"><i class="fa fa-home"></i></router-link></b-breadcrumb-item>
          <b-breadcrumb-item href="javascript:void(0)" active>Zonal Operations</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->
    <div class="content">
      <b-row>
        <b-col>
          <base-block rounded title="All Zonal Commands" :subtitle="totalRows +' total zonal commands'" ref="manageZoneBlock" btn-option-fullscreen>
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
              <b-col lg="4" class="text-right">
                <download-excel class="btn btn-secondary btn-sm" :data="this.filteredItems" :fields="this.exportFields" name="NCS Admin - Zonal Commands.xls" v-b-tooltip.hover.nofade.topleft="'Export Excel'">
                  <i class="fa fa-file-excel"></i>
                </download-excel>
                <download-excel class="btn btn-secondary btn-sm" type="csv" :data="this.filteredItems" :fields="this.exportFields" name="NCS Admin - Zonal Commands.csv" v-b-tooltip.hover.nofade.topleft="'Export CSV'">
                  <i class="fa fa-file-csv"></i>
                </download-excel>
              </b-col>
            </b-row>
            <b-table class="mb-2" @filtered="onFiltered" selectable selected-variant="primary" show-empty striped hover bordered head-variant="light" :filter="filter" :items="zonesSN" :fields="zoneFields" :current-page="currentPage" :per-page="perPage" @row-clicked="viewZone" ></b-table>
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
    zonesSN () {
      return this.zones.map((d, index) => ({ ...d, sno: index + 1 }))
    }
  },
  data() {
    return {
      zoneFields: [{key: 'sno', label: 'S/n', thStyle: 'width: 10%'}, {key: 'zone_name', sortable: true},],
      exportFields: {'S/n': 'sno', 'Zone Name': 'zone_name'},
      zones: this.$store.getters.getZones,
      filter: null,
      filteredItems: this.zones,
      totalRows: this.$store.getters.getNumZones,
      currentPage: 1,
      perPage: 10,
      pageOptions: [{value: 5, text: '5 per page'}, {value: 10, text: '10 per page'}, {value: 15, text: '15 per page'}],
    }
  },
  methods: {
    viewZone(item){
      let zoneID = item.zone_id
      let zoneName = item.zone_name
      this.$store.commit('setZoneRouteParam', { zoneID, zoneName })
      this.getZoneDetails()
      this.$router.push("/zonal_operations/zone")
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
      this.filteredItems = filteredItems
    },
  }
}
</script>
