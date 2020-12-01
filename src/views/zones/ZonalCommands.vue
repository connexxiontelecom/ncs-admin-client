<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Zonal Commands" subtitle="Create and manage zonal commands here">
      <template #extra>
        <b-breadcrumb class="breadcrumb">
          <b-breadcrumb-item href="javascript:void(0)" active>Zonal Commands</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->
    <div class="content">
      <b-modal id="new-zone-form" dialog-class="modal-dialog-slideup" body-class="p-0" hide-footer hide-header>
        <div class="block block-rounded block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Create Zonal Command</h3>
            <div class="block-options">
              <button type="button" class="btn-block-option" @click="$bvModal.hide('new-zone-form')">
                <i class="fa fa-fw fa-times"></i>
              </button>
            </div>
          </div>
          <b-form @submit.stop.prevent="onSubmit">
            <div class="block-content font-size-sm">
              <b-row>
                <b-col>
                  <b-form-group label-for="zone-name">
                    <template #label>
                      Zonal Command Name <span class="text-danger">*</span>
                    </template>
                    <b-form-input id="zone-name" type="text" name="zoneName" v-model="$v.newZoneForm.zoneName.$model" :state="$v.newZoneForm.zoneName.$dirty ? !$v.newZoneForm.zoneName.$error : null"></b-form-input>
                    <b-form-invalid-feedback>
                      please fill in a zonal command name
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
            </div>
            <div class="block-content block-content-full text-right border-top">
              <b-button type="submit" variant="alt-primary" class="mr-2" v-click-ripple>Create Zone</b-button>
              <b-button variant="alt-secondary" class="mr-1" @click="$bvModal.hide('new-zone-form')" v-click-ripple>Close</b-button>
            </div>
          </b-form>
        </div>
      </b-modal>

      <b-row>
        <b-col>
          <base-block rounded title="All Zonal Commands" ref="manageZoneBlock" btn-option-fullscreen>
            <template #options>
              <button type="button" class="btn-block-option" @click="$bvModal.show('new-zone-form')" >
                <i class="si si-plus" v-b-tooltip.hover.nofade.topleft="'Create Zonal Command'"></i>
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
              <b-col lg="4" class="text-right mb-2">
                <b-button variant="alt-primary" size="sm" v-click-ripple>Export</b-button>
              </b-col>
            </b-row>
            <b-table class="mb-2" @filtered="onFiltered" show-empty striped hover bordered head-variant="light" :filter="filter" :items="zones" :fields="zoneFields" :current-page="currentPage" :per-page="perPage">
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
    this.getZones()
  },
  data() {
    return {
      newZoneForm: {
        zoneName: null
      },
      zoneFields: [{key: 'zone_id', sortable: true, thStyle: 'width: 10%'}, {key: 'zone_name', sortable: true}, {key: 'actions', sortable: false, thStyle: 'width: 9px'}],
      zones: [],
      filter: null,
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [{value: 5, text: '5 per page'}, {value: 10, text: '10 per page'}, {value: 15, text: '15 per page'}],
    }
  },
  validations: {
    newZoneForm: {
      zoneName: { required }
    }
  },
  methods: {
    async onSubmit () {
      this.$v.newZoneForm.$touch()
      if (this.$v.newZoneForm.$anyError) {
        this.launchToast('Create Zonal Command Failure', 'Please fill all required fields', 'warning')
        return
      }
      await this.$store.dispatch('zone/createZonalCommand', { newZoneForm: this.newZoneForm })
      .then(response => {
        this.launchToast('Create Zonal Command Success', response.data.message, 'success')
        this.$bvModal.hide('new-zone-form')
        this.newZoneForm.zoneName = null
        this.getZones()
      })
      .catch(error => {
        this.launchToast('Create Zonal Command Failure', error.response.data.message, 'warning')
      })
    },
    async getZones() {
      this.$store.dispatch('zone/getZonalCommands')
        .then(response => {
          this.zones = response.data.message
          this.totalRows = response.data.message.length
        })
        .catch(error => {
          this.launchToast('Loading Zonal Command Failure', error.response.data.message, 'warning')
        })
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  }
}
</script>
