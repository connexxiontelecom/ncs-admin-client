<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Cell Blocks" subtitle="Create and manage cell blocks here">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item active><router-link to="/dashboard"><i class="fa fa-home"></i></router-link></b-breadcrumb-item>
          <b-breadcrumb-item href="javascript:void(0)" active>Cell Blocks</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->
    <div class="content">
      <b-modal id="new-cell-block-form" dialog-class="modal-dialog-slideup" body-class="p-0" hide-footer hide-header>
        <div class="block block-rounded block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Create Cell Block</h3>
            <div class="block-options">
              <button type="button" class="btn-block-option" @click="$bvModal.hide('new-cell-block-form')">
                <i class="fa fa-fw fa-times"></i>
              </button>
            </div>
          </div>
          <b-form @submit.stop.prevent="onSubmit">
            <div class="block-content font-size-sm">
              <b-row>
                <b-col>
                  <b-form-group label-for="block-alias">
                    <template #label>
                      Cell Block Alias <span class="text-danger">*</span>
                    </template>
                    <b-form-input id="block-alias" type="text" name="cellBlockAlias" v-model="$v.newCellBlockForm.cellBlockAlias.$model" :state="$v.newCellBlockForm.cellBlockAlias.$dirty ? !$v.newCellBlockForm.cellBlockAlias.$error : null"></b-form-input>
                    <b-form-invalid-feedback>
                      please fill in a cell block alias
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
            </div>
            <div class="block-content block-content-full text-right border-top">
              <b-button type="submit" variant="alt-primary" class="mr-2" v-click-ripple>Create Cell Block</b-button>
              <b-button variant="alt-secondary" class="mr-1" @click="$bvModal.hide('new-cell-block-form')" v-click-ripple>Close</b-button>
            </div>
          </b-form>
        </div>
      </b-modal>

      <b-row>
        <b-col>
          <base-block rounded title="All Cell Blocks" btn-option-fullscreen>
            <template #options>
              <button type="button" class="btn-block-option" @click="$bvModal.show('new-cell-block-form')" >
                <i class="si si-plus" v-b-tooltip.hover.nofade.topleft="'Create Cell Block'"></i>
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
      newCellBlockForm: {
        cellBlockAlias: null
      }
    }
  },
  validations: {
    newCellBlockForm: {
      cellBlockAlias: { required }
    }
  },
  methods: {
    async onSubmit () {
      this.$v.newCellBlockForm.$touch()
      if (this.$v.newCellBlockForm.$anyError) {
        this.launchToast('Create Cell Block Failure', 'Please fill all required fields', 'warning')
        return
      }
    }
  }
}
</script>
