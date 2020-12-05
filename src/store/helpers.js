const helpers = {
  getWindowWidth () {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  },
  getCurrentYear () {
    return new Date().getFullYear()
  },
  getLoginForm(form) {
    let formData = new FormData()
    formData.append('username', form.username)
    formData.append('password', form.password)
    return formData
  },
  getZonalForm(form) {
    let formData = new FormData()
    formData.append('zone_name', form.zoneName)
    return formData
  },
  getStatesForm(form) {
    let formData = new FormData()
    formData.append('state_name', form.stateName)
    formData.append('state_zone_id', form.stateZoneSelected)
    return formData
  },
  getCCTypeForm(form) {
    let formData = new FormData()
    formData.append('cc_type_name', form.centerTypeName)
    return formData
  },
  getCenterForm(form) {
    let formData = new FormData()
    formData.append('cc_name', form.centerName)
    formData.append('cc_type', form.centerTypeSelected)
    formData.append('cc_state_id', form.centerStateSelected)
    return formData
  },
  getEnrollmentForm(form) {
    let formData = new FormData()
    formData.append('inmate_ref_no', form.refNo)
    formData.append('inmate_last_name', form.lastname)
    formData.append('inmate_first_name', form.firstname)
    formData.append('inmate_other_name', form.othernames)
    formData.append('inmate_gender', form.genderSelected)
    formData.append('inmate_dob', form.dob)
    formData.append('inmate_local_state', form.stateSelected)
    // formData.append('inmate_foreign_state', form.stateSelected)
    formData.append('inmate_lga', form.lgaSelected)
    formData.append('inmate_home_town', form.hometown)
    formData.append('inmate_address', form.address)
    formData.append('inmate_city', form.city)
    formData.append('inmate_nationality', form.nationalitySelected)
    formData.append('inmate_religion', form.religionSelected)
    formData.append('inmate_next_of_kin', form.nokInfo)
    formData.append('inmate_marital_status', form.maritalSelected)
    formData.append('inmate_spouse_information', form.spouseInfo)
    formData.append('inmate_children', form.children)
    formData.append('inmate_category', form.categorySelected)
    formData.append('inmate_charges', form.chargesInfo)
    formData.append('inmate_court_state', form.courtStateSelected)
    formData.append('inmate_court_type', form.courtSelected)
    formData.append('inmate_judge', form.judge)
    formData.append('inmate_judgement', form.judgementFile.name)
    formData.append('inmate_sentence_date', form.sentenceDate)
    formData.append('inmate_sentence_start_date', form.sentenceStartDate)
    formData.append('inmate_sentence_duration', form.sentenceDuration)
    formData.append('inmate_sentence_end_date', form.sentenceEndDate)
    formData.append('inmate_others', form.otherInfo)
    formData.append('inmate_blood_group', form.bloodGroupSelected)
    formData.append('inmate_genotype', form.genotypeSelected)
    formData.append('inmate_ailment', form.ailments)
    formData.append('inmate_disabilities', form.disabilities)
    formData.append('inmate_height', form.height)
    formData.append('inmate_weight', form.weight)
    formData.append('inmate_weight', form.weight)
    formData.append('inmate_cs_id', '1')
    formData.append('inmate_country_residence', form.countrySelected)
    return formData
  },
  getCellBlockForm(form) {
    let formData = new FormData()
    formData.append('cell_block_alias', form.cellBlockAlias)
    return formData
  },
  getCellForm(form) {
    let formData = new FormData()
    formData.append('cell_alias', form.cellAlias)
    formData.append('cell_capacity', form.cellCapacity)
    formData.append('cell_cell_block_id', form.cellBlockSelected)
    return formData
  }

}

export default helpers
