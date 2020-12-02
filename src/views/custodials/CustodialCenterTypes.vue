<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Custodial Center Types" subtitle="Create and manage custodial center types here">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item active><router-link to="/dashboard"><i class="fa fa-home"></i></router-link></b-breadcrumb-item>
          <b-breadcrumb-item href="javascript:void(0)" active>Custodial Center Types</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->
    <div class="content">
      <b-modal id="new-center-type-form" dialog-class="modal-dialog-slideup" body-class="p-0" hide-footer hide-header>
        <div class="block block-rounded block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Create Custodial Center Type</h3>
            <div class="block-options">
              <button type="button" class="btn-block-option" @click="$bvModal.hide('new-center-type-form')">
                <i class="fa fa-fw fa-times"></i>
              </button>
            </div>
          </div>
          <b-form @submit.stop.prevent="onSubmit">
            <div class="block-content font-size-sm">
              <b-row>
                <b-col>
                  <b-form-group label-for="type-name">
                    <template #label>
                      Custodial Center Type Name <span class="text-danger">*</span>
                    </template>
                    <b-form-input id="type-name" type="text" name="zoneName" v-model="$v.newCenterTypeForm.centerTypeName.$model" :state="$v.newCenterTypeForm.centerTypeName.$dirty ? !$v.newCenterTypeForm.centerTypeName.$error : null"></b-form-input>
                    <b-form-invalid-feedback>
                      please fill in a Custodial Center Type Name
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
            </div>
            <div class="block-content block-content-full text-right border-top">
              <b-button type="submit" variant="alt-primary" class="mr-2" v-click-ripple>Create Center Type</b-button>
              <b-button variant="alt-secondary" class="mr-1" @click="$bvModal.hide('new-center-type-form')" v-click-ripple>Close</b-button>
            </div>
          </b-form>
        </div>
      </b-modal>

      <b-row>
        <b-col>
          <base-block rounded title="All Custodial Center Types" btn-option-fullscreen>
            <template #options>
              <button type="button" class="btn-block-option" @click="$bvModal.show('new-center-type-form')" >
                <i class="si si-plus" v-b-tooltip.hover.nofade.topleft="'Create Center Type'"></i>
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
  data() {
    return {
      newCenterTypeForm: {
        centerTypeName: null
      }
    }
  },
  validations: {
    newCenterTypeForm: {
      centerTypeName: { required }
    }
  },
  methods: {
    async onSubmit () {
      this.$v.newCenterTypeForm.$touch()
      if (this.$v.newCenterTypeForm.$anyError) {
        this.launchToast('Create Custodial Center Type Failure', 'Please fill all required fields', 'warning')
        return
      }
    }
  }
}

</script>
