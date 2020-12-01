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
            <b-table striped hover bordered :items="zones"></b-table>
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
  data() {
    return {
      newZoneForm: {
        zoneName: null
      },
      zones: []
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
      })
      .catch(error => {
        this.launchToast('Create Zonal Command Failure', error.response.data.message, 'warning')
      })

    }
  }
}
</script>
