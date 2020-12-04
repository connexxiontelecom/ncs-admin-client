<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Cells" subtitle="Create and manage cells here">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item active><router-link to="/dashboard"><i class="fa fa-home"></i></router-link></b-breadcrumb-item>
          <b-breadcrumb-item href="javascript:void(0)" active>Cells</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->
    <div class="content">
      <b-modal id="new-cell-form" dialog-class="modal-dialog-slideup" body-class="p-0" hide-footer hide-header>
        <div class="block block-rounded block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Create Cell</h3>
            <div class="block-options">
              <button type="button" class="btn-block-option" @click="$bvModal.hide('new-cell-form')">
                <i class="fa fa-fw fa-times"></i>
              </button>
            </div>
          </div>
          <b-form @submit.stop.prevent="onSubmit">
            <div class="block-content font-size-sm">
              <b-row>
                <b-col>
                  <b-form-group label-for="cell-alias">
                    <template #label>
                      Cell Alias <span class="text-danger">*</span>
                    </template>
                    <b-form-input id="cell-alias" type="text" name="cellAlias" v-model="$v.newCellForm.cellAlias.$model" :state="$v.newCellForm.cellAlias.$dirty ? !$v.newCellForm.cellAlias.$error : null"></b-form-input>
                    <b-form-invalid-feedback>
                      please fill in a cell alias
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group label-for="cell-capacity">
                    <template #label>
                      Cell Capacity <span class="text-danger">*</span>
                    </template>
                    <b-form-input id="cell-capacity" type="number" name="cellCapacity" v-model="$v.newCellForm.cellCapacity.$model" :state="$v.newCellForm.cellCapacity.$dirty ? !$v.newCellForm.cellCapacity.$error : null"></b-form-input>
                    <b-form-invalid-feedback>
                      please fill in a cell capacity
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group label-for="cell-block">
                    <template #label>
                      Cell Block <span class="text-danger">*</span>
                    </template>
                    <b-form-select id="cell-block" name="cellBlockSelected" v-model="$v.newCellForm.cellBlockSelected.$model" :state="$v.newCellForm.cellBlockSelected.$dirty ? !$v.newCellForm.cellBlockSelected.$error : null" :options="newCellForm.cellBlockOptions"></b-form-select>
                    <b-form-invalid-feedback>
                      please select a cell block for this cell
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
            </div>
            <div class="block-content block-content-full text-right border-top">
              <b-button type="submit" variant="alt-primary" class="mr-2" v-click-ripple>Create Cell</b-button>
              <b-button variant="alt-secondary" class="mr-1" @click="$bvModal.hide('new-cell-form')" v-click-ripple>Close</b-button>
            </div>
          </b-form>
        </div>
      </b-modal>

      <b-row>
        <b-col>
          <base-block rounded title="All Cells" btn-option-fullscreen>
            <template #options>
              <button type="button" class="btn-block-option" @click="$bvModal.show('new-cell-form')" >
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
                <download-excel class="btn btn-secondary btn-sm" :data="this.filteredItems" :fields="this.exportFields" name="NCS Admin - Cells.xls" v-b-tooltip.hover.nofade.topleft="'Export Excel'">
                  <i class="fa fa-file-excel"></i>
                </download-excel>
                <download-excel class="btn btn-secondary btn-sm" type="csv" :data="this.filteredItems" :fields="this.exportFields" name="NCS Admin - Cells.csv" v-b-tooltip.hover.nofade.topleft="'Export CSV'">
                  <i class="fa fa-file-csv"></i>
                </download-excel>
              </b-col>
            </b-row>
            <b-table class="mb-2" @filtered="onFiltered" selectable selected-variant="info" @row-selected="onRowSelected" show-empty striped hover bordered head-variant="light" :filter="filter" :items="cellsSN" :fields="fields" :current-page="currentPage" :per-page="perPage">
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
    this.getCellBlockOptions()
  },
  computed: {
    cellsSN () {
      return this.cells.map((d, index) => ({ ...d, sno: index + 1 }))
    }
  },
  data() {
    return {
      newCellForm: {
        cellAlias: null,
        cellCapacity: null,
        cellBlockSelected: null,
        cellBlockOptions: [{ value: null, text: 'Please select' }]
      },
      fields: [{key: 'sno', label: 'S/n', thStyle: 'width: 10%'}, {key: 'cell_alias', label: 'Cell Alias', sortable: true}, {key: 'cell_capacity', label: 'Cell Capacity', sortable: true}, {key: 'cell_cell_block_id', label: 'Cell Block', sortable: true},],
      exportFields: {'S/n': 'sno', 'Cell Alias': 'cell_alias', 'Cell Capacity': 'cell_capacity', 'Cell Block': 'cell_cell_block_id'},
      cells: this.$store.getters.getCells,
      filter: null,
      filteredItems: this.cellsSN,
      totalRows: this.$store.getters.getNumCells,
      currentPage: 1,
      perPage: 10,
      pageOptions: [{value: 5, text: '5 per page'}, {value: 10, text: '10 per page'}, {value: 15, text: '15 per page'}],
    }
  },
  validations: {
    newCellForm: {
      cellAlias: { required },
      cellCapacity: { required },
      cellBlockSelected: { required }
    }
  },
  methods: {
    getCellBlockOptions() {
      let cellBlocks = this.$store.getters.getCellBlocks
      if (cellBlocks) {
        cellBlocks.forEach((currentBlock) => {
          this.newCellForm.cellBlockOptions.push({value: currentBlock.cell_block_id, text: currentBlock.cell_block_alias})
        })
      }
    },
    async onSubmit() {
      this.$v.newCellForm.$touch()
      if (this.$v.newCellForm.$anyError) {
        this.launchToast('Create Cell Failure', 'Please fill all required fields', 'warning')
        return
      }
      await this.$store.dispatch('createCell', { newCellForm: this.newCellForm })
      .then(response => {
        this.launchToast('Create Cell Success', response.data.message, 'success')
        this.resetForm()
        this.reloadTableData()
      })
      .catch(error => {
        this.launchToast('Create Cell Failure', error.response.data.message, 'warning')
      })
    },
    reloadTableData () {
      this.getCells().then(() => {
        this.cells = this.$store.getters.getCells
        this.totalRows = this.$store.getters.getNumCells
      })
    },
    resetForm () {
      this.$bvModal.hide('new-cell-form')
      this.newCellForm.cellAlias = null
      this.newCellForm.cellCapacity = null
      this.newCellForm.cellBlockSelected = null
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
