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
          <base-block rounded title="All Cell Blocks" :subtitle="totalRows +' total cell blocks'" btn-option-fullscreen>
            <template #options>
              <button type="button" class="btn-block-option" @click="$bvModal.show('new-cell-block-form')" >
                <i class="si si-plus" v-b-tooltip.hover.nofade.topleft="'Create Cell Block'"></i>
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
                <download-excel class="btn btn-secondary btn-sm" :data="this.filteredItems" :fields="this.exportFields" name="NCS Admin - Cell Blocks.xls" v-b-tooltip.hover.nofade.topleft="'Export Excel'">
                  <i class="fa fa-file-excel"></i>
                </download-excel>
                <download-excel class="btn btn-secondary btn-sm" type="csv" :data="this.filteredItems" :fields="this.exportFields" name="NCS Admin - Cell Blocks.csv" v-b-tooltip.hover.nofade.topleft="'Export CSV'">
                  <i class="fa fa-file-csv"></i>
                </download-excel>
              </b-col>
            </b-row>
            <b-table class="mb-2" @filtered="onFiltered" selectable selected-variant="info" @row-selected="onRowSelected" show-empty striped hover bordered head-variant="light" :filter="filter" :items="cellBlocksSN" :fields="fields" :current-page="currentPage" :per-page="perPage">
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
  computed: {
    cellBlocksSN () {
      return this.cellBlocks.map((d, index) => ({ ...d, sno: index + 1 }))
    }
  },
  data() {
    return {
      newCellBlockForm: {
        cellBlockAlias: null
      },
      fields: [
        {key: 'sno', label: 'S/n', thStyle: 'width: 10%'},
        {key: 'cell_block_alias', label: 'Cell Block Alias', sortable: true},
        {key: 'count_cells', label: 'Total Cells', sortable: true},
        {key: 'count_inmates', label: 'Total Inmates', sortable: true},
        {key: 'actions', sortable: false, thStyle: 'width: 9px'},
      ],
      exportFields: {'S/n': 'sno', 'Cell Block Alias': 'cell_block_alias'},
      cellBlocks: this.$store.getters.getCellBlocks,
      filter: null,
      filteredItems: this.cellBlocksSN,
      totalRows: this.$store.getters.getNumCellBlocks,
      currentPage: 1,
      perPage: 5,
      pageOptions: [{value: 5, text: '5 per page'}, {value: 10, text: '10 per page'}, {value: 15, text: '15 per page'}],
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
      await this.$store.dispatch('createCellBlock', { newCellBlockForm: this.newCellBlockForm })
      .then(response => {
        this.launchToast('Create Cell Block Success', response.data.message, 'success')
        this.resetForm()
        this.reloadTableData()
      })
      .catch(error => {
        this.launchToast('Create Cell Block Failure', error.response.data.message, 'warning')
      })
    },
    reloadTableData () {
      this.getCellBlocks().then(() => {
        this.cellBlocks = this.$store.getters.getCellBlocks
        this.totalRows = this.$store.getters.getNumCellBlocks
      })
    },
    resetForm () {
      this.$bvModal.hide('new-cell-block-form')
      this.newCellBlockForm.cellBlockAlias = null
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
      this.filteredItems = filteredItems
    },
    onRowSelected() {
      // this.$router.push('/dashboard')
    }
  }
}
</script>
