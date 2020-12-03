<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Custodial Centers" subtitle="Create and manage custodial centers here">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item active><router-link to="/dashboard"><i class="fa fa-home"></i></router-link></b-breadcrumb-item>
          <b-breadcrumb-item href="javascript:void(0)" active>Custodial Centers</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->
    <div class="content">
      <b-modal id="new-center-form" dialog-class="modal-dialog-slideup" body-class="p-0" hide-footer hide-header>
        <div class="block block-rounded block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Create Custodial Center</h3>
            <div class="block-options">
              <button type="button" class="btn-block-option" @click="$bvModal.hide('new-center-form')">
                <i class="fa fa-fw fa-times"></i>
              </button>
            </div>
          </div>
          <b-form @submit.stop.prevent="onSubmit">
            <div class="block-content font-size-sm">
              <b-row>
                <b-col>
                  <b-form-group label-for="center-name">
                    <template #label>
                     Custodial Center Name <span class="text-danger">*</span>
                    </template>
                    <b-form-input id="center-name" type="text" name="centerName" v-model="$v.newCenterForm.centerName.$model" :state="$v.newCenterForm.centerName.$dirty ? !$v.newCenterForm.centerName.$error : null"></b-form-input>
                    <b-form-invalid-feedback>
                      please fill in a custodial center name
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group label-for="cc-type">
                    <template #label>
                      Custodial Center Type <span class="text-danger">*</span>
                    </template>
                    <b-form-select id="cc-type" name="centerTypeSelected" v-model="$v.newCenterForm.centerTypeSelected.$model" :state="$v.newCenterForm.centerTypeSelected.$dirty ? !$v.newCenterForm.centerTypeSelected.$error : null" :options="newCenterForm.centerTypeOptions"></b-form-select>
                    <b-form-invalid-feedback>
                      please select a center type for this custodial center
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group label-for="center-state">
                    <template #label>
                      Custodial Center State <span class="text-danger">*</span>
                    </template>
                    <b-form-select id="center-state" name="centerStateSelected" v-model="$v.newCenterForm.centerStateSelected.$model" :state="$v.newCenterForm.centerStateSelected.$dirty ? !$v.newCenterForm.centerTypeSelected.$error : null" :options="newCenterForm.centerStateOptions"></b-form-select>
                    <b-form-invalid-feedback>
                      please select a center state for this custodial center
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
            </div>
            <div class="block-content block-content-full text-right border-top">
              <b-button type="submit" variant="alt-primary" class="mr-2" v-click-ripple>Create Center</b-button>
              <b-button variant="alt-secondary" class="mr-1" @click="$bvModal.hide('new-center-form')" v-click-ripple>Close</b-button>
            </div>
          </b-form>
        </div>
      </b-modal>

      <b-row>
        <b-col>
          <base-block rounded title="All Custodial Centers" :subtitle="totalRows +' total custodial centers'" btn-option-fullscreen>
            <template #options>
              <button type="button" class="btn-block-option" @click="$bvModal.show('new-center-form')" >
                <i class="si si-plus" v-b-tooltip.hover.nofade.topleft="'Create Custodial Center'"></i>
              </button>
            </template>
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
                <download-excel class="btn btn-secondary btn-sm" :data="this.filteredItems" :fields="this.exportFields" name="NCS Admin - Custodial Centers.xls" v-b-tooltip.hover.nofade.topleft="'Export Excel'">
                  <i class="fa fa-file-excel"></i>
                </download-excel>
                <download-excel class="btn btn-secondary btn-sm" type="csv" :data="this.filteredItems" :fields="this.exportFields" name="NCS Admin - Custodial Centers.csv" v-b-tooltip.hover.nofade.topleft="'Export CSV'">
                  <i class="fa fa-file-csv"></i>
                </download-excel>
              </b-col>
            </b-row>
            <b-table class="mb-2" @filtered="onFiltered" show-empty striped hover bordered head-variant="light" :filter="filter" :items="centers" :fields="fields" :current-page="currentPage" :per-page="perPage">
              <template #cell(actions)>
                <b-button-group>
                  <b-button size="sm" variant="light">
                    <i class="fa fa-fw fa-pencil-alt"></i>
                  </b-button>
                  <b-button size="sm" variant="light">
                    <i class="fa fa-fw fa-times"></i>
                  </b-button>
                </b-button-group>
              </template>
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
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  mounted() {
    this.getCenterTypeOptions()
    this.getCenterStateOptions()
  },
  data() {
    return {
      newCenterForm: {
        centerName: null,
        centerTypeSelected: null,
        centerTypeOptions: [
          { value: null, text: 'Please select' },
        ],
        centerStateSelected: null,
        centerStateOptions: [
          { value: null, text: 'Please select' },
        ]
      },
      fields: [{key: 'cc_id', sortable: true, thStyle: 'width: 10%'}, {key: 'cc_name', label: 'Correctional Center', sortable: true}, {key: 'cc_type', label: 'Center Type', sortable: true}, {key: 'state_name', label: 'State', sortable: true}, {key: 'zone_name', label: 'Zone', sortable: true}, {key: 'actions', sortable: false, thStyle: 'width: 9px'}],
      exportFields: {'Correctional Center ID': 'cc_id', 'Correctional Center Name': 'cc_name', 'Correctional Center Type': 'cc_type' , 'Correctional Center State': 'state_name', 'Zone Name': 'zone_name'},
      centers: this.$store.getters.getCenters,
      filter: null,
      filteredItems: this.centers,
      totalRows: this.$store.getters.getNumCenters,
      currentPage: 1,
      perPage: 5,
      pageOptions: [{value: 5, text: '5 per page'}, {value: 10, text: '10 per page'}, {value: 15, text: '15 per page'}],
    }
  },
  validations: {
    newCenterForm: {
      centerName: { required },
      centerTypeSelected: { required },
      centerStateSelected: { required }
    }
  },
  methods: {
    getCenterTypeOptions() {
      let centerTypes = this.$store.getters.getCCTypes
      if (centerTypes) {
        centerTypes.forEach((currentType) => {
          this.newCenterForm.centerTypeOptions.push({value: currentType.cc_type_id, text: currentType.cc_type_name})
        })
      }
    },
    getCenterStateOptions() {
      let centerStates = this.$store.getters.getStates
      if (centerStates) {
        centerStates.forEach((currentState) => {
          this.newCenterForm.centerStateOptions.push({value: currentState.state_id, text: currentState.state_name})
        })
      }
    },
    async onSubmit() {
      this.$v.newCenterForm.$touch()
      if (this.$v.newCenterForm.$anyError) {
        this.launchToast('Create Custodial Center Failure', 'Please fill all required fields', 'warning')
        return
      }
      await this.$store.dispatch('createCustodialCenter', { newCenterForm: this.newCenterForm })
      .then(response => {
        this.launchToast('Create Custodial Center Success', response.data.message, 'success')
        this.$bvModal.hide('new-center-form')
        this.newCenterForm.centerName = null
        this.newCenterForm.centerTypeSelected = null
        this.newCenterForm.centerStateSelected = null
        this.getCenters().then(() => {
          this.centers = this.$store.getters.getCenters
          this.totalRows = this.$store.getters.getNumCenters
        })
      })
      .catch(error => {
        this.launchToast('Create Custodial Center Failure', error.response.data.message, 'warning')
      })
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
      this.filteredItems = filteredItems
    },
  }
}
</script>
