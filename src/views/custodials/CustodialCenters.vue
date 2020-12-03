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
          <base-block rounded title="All Custodial Centers" btn-option-fullscreen>
            <template #options>
              <button type="button" class="btn-block-option" @click="$bvModal.show('new-center-form')" >
                <i class="si si-plus" v-b-tooltip.hover.nofade.topleft="'Create Custodial Center'"></i>
              </button>
            </template>
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
      }
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
      })
      .catch(error => {
        this.launchToast('Create Custodial Center Failure', error.response.data.message, 'warning')
      })
    }

  }
}
</script>
