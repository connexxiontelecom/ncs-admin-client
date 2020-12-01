<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="State Commands" subtitle="Create and manage state commands here">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)" active>State Commands</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->
    <div class="content">
      <b-modal id="new-state-form" dialog-class="modal-dialog-slideup" body-class="p-0" hide-footer hide-header>
        <div class="block block-rounded block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Create State Command</h3>
            <div class="block-options">
              <button type="button" class="btn-block-option" @click="$bvModal.hide('new-state-form')">
                <i class="fa fa-fw fa-times"></i>
              </button>
            </div>
          </div>
          <b-form @submit.stop.prevent="onSubmit">
            <div class="block-content font-size-sm">
              <b-row>
                <b-col>
                  <b-form-group label-for="state-name">
                    <template #label>
                      State Command Name <span class="text-danger">*</span>
                    </template>
                    <b-form-input id="state-name" type="text" name="zoneName" v-model="$v.newStateForm.stateName.$model" :state="$v.newStateForm.stateName.$dirty ? !$v.newStateForm.stateName.$error : null"></b-form-input>
                    <b-form-invalid-feedback>
                      please fill in a state command name
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group label-for="state-zone">
                    <template #label>
                      State Command Zone <span class="text-danger">*</span>
                    </template>
                    <b-form-select id="state-zone" name="stateZoneSelected" v-model="$v.newStateForm.stateZoneSelected.$model" :state="$v.newStateForm.stateZoneSelected.$dirty ? !$v.newStateForm.stateZoneSelected.$error : null" :options="newStateForm.stateZoneOptions"></b-form-select>
                    <b-form-invalid-feedback>
                      please select a zone for this state command
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
            </div>
            <div class="block-content block-content-full text-right border-top">
              <b-button type="submit" variant="alt-primary" class="mr-2" v-click-ripple>Create State</b-button>
              <b-button variant="alt-secondary" class="mr-1" @click="$bvModal.hide('new-state-form')" v-click-ripple>Close</b-button>
            </div>
          </b-form>
        </div>
      </b-modal>

      <b-row>
        <b-col>
          <base-block rounded title="All State Commands" ref="manageStateBlock" btn-option-fullscreen>
            <template #options>
              <button type="button" class="btn-block-option" @click="$bvModal.show('new-state-form')" >
                <i class="si si-plus" v-b-tooltip.hover.nofade.topleft="'Create State Command'"></i>
              </button>
            </template>
<!--            <b-row>-->
<!--              <b-col lg="4" class="my-1">-->
<!--                <b-form-group label-size="sm" label-for="filterInput" class="mb-2">-->
<!--                  <b-input-group size="sm">-->
<!--                    <b-form-input class="form-control-alt" v-model="filter" type="search" id="filterInput" placeholder="Type to Search"></b-form-input>-->
<!--                    <b-input-group-append>-->
<!--                      <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>-->
<!--                    </b-input-group-append>-->
<!--                  </b-input-group>-->
<!--                </b-form-group>-->
<!--              </b-col>-->
<!--              <b-col lg="4"></b-col>-->
<!--              <b-col lg="4" class="text-right">-->
<!--                <download-excel class="btn btn-secondary btn-sm" :data="this.filteredItems" :fields="this.exportFields" name="NCS Admin - Zonal Commands.xls" v-b-tooltip.hover.nofade.topleft="'Export Excel'">-->
<!--                  <i class="fa fa-file-excel"></i>-->
<!--                </download-excel>-->
<!--                <download-excel class="btn btn-secondary btn-sm" type="csv" :data="this.filteredItems" :fields="this.exportFields" name="NCS Admin - Zonal Commands.csv" v-b-tooltip.hover.nofade.topleft="'Export CSV'">-->
<!--                  <i class="fa fa-file-csv"></i>-->
<!--                </download-excel>-->
<!--              </b-col>-->
<!--            </b-row>-->
<!--            <b-table class="mb-2" @filtered="onFiltered" show-empty striped hover bordered head-variant="light" :filter="filter" :items="zones" :fields="zoneFields" :current-page="currentPage" :per-page="perPage">-->
<!--              <template #cell(actions)>-->
<!--                <b-button-group>-->
<!--                  <b-button size="sm" variant="light">-->
<!--                    <i class="fa fa-fw fa-pencil-alt"></i>-->
<!--                  </b-button>-->
<!--                  <b-button size="sm" variant="light">-->
<!--                    <i class="fa fa-fw fa-times"></i>-->
<!--                  </b-button>-->
<!--                </b-button-group>-->
<!--              </template>-->
<!--            </b-table>-->
<!--            <b-row>-->
<!--              <b-col lg="2" class="my-1">-->
<!--                <b-form-group label-for="perPageSelect" class="mb-3">-->
<!--                  <b-form-select class="form-control-alt" v-model="perPage" id="perPageSelect" size="sm" :options="pageOptions"></b-form-select>-->
<!--                </b-form-group>-->
<!--              </b-col>-->
<!--              <b-col lg="8"></b-col>-->
<!--              <b-col lg="2" class="my-1">-->
<!--                <b-pagination class="mb-3 my-0" v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="fill" size="sm"></b-pagination>-->
<!--              </b-col>-->
<!--            </b-row>-->
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
      newStateForm: {
        stateName: null,
        stateZoneSelected: null,
        stateZoneOptions: [
          { value: null, text: 'Please select' },
        ]
      }
    }
  },
  validations: {
    newStateForm: {
      stateName: { required },
      stateZoneSelected: { required }
    }
  },
  methods: {
    async onSubmit () {
      this.$v.newStateForm.$touch()
      if (this.$v.newStateForm.$anyError()) {
        return
      }
    },
    async getZones() {
      await this.$store.dispatch('zone/getZonalCommands')
        .then(response => {
          let zones = response.data.message
          if (zones) {
            zones.forEach((currentZone) => {
              this.newStateForm.stateZoneOptions.push({ value: currentZone.zone_id, text: currentZone.zone_name })
            })
          }
        })
        .catch(error => {
          this.launchToast('Loading Zonal Command Failure', error.response.data.message, 'warning')
        })
    },
  }
}
</script>
