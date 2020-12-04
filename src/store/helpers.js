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
    formData.append('inmate_ref_no', form.enrollmentForm.refNo)
    formData.append('inmate_last_name', form.enrollmentForm.lastname)
    formData.append('inmate_first_name', form.enrollmentForm.firstname)
    formData.append('inmate_other_name', form.enrollmentForm.othernames)
    formData.append('inmate_gender', form.enrollmentForm.genderSelected)
    formData.append('inmate_dob', form.enrollmentForm.dob)
    formData.append('inmate_local_state', form.enrollmentForm.stateSelected)
    // formData.append('inmate_foreign_state', form.enrollmentForm.stateSelected)
    formData.append('inmate_lga', form.enrollmentForm.lgaSelected)
    formData.append('inmate_home_town', form.enrollmentForm.hometown)
    formData.append('inmate_address', form.enrollmentForm.address)
    formData.append('inmate_city', form.enrollmentForm.city)
    formData.append('inmate_nationality', form.enrollmentForm.nationalitySelected)
    formData.append('inmate_religion', form.enrollmentForm.religionSelected)
    formData.append('inmate_next_of_kin', form.enrollmentForm.nokInfo)
    formData.append('inmate_marital_status', form.enrollmentForm.maritalSelected)
    formData.append('inmate_spouse_information', form.enrollmentForm.spouseInfo)
    formData.append('inmate_children', form.enrollmentForm.children)
    formData.append('inmate_category', form.enrollmentForm.categorySelected)
    formData.append('inmate_charges', form.enrollmentForm.chargesInfo)
    formData.append('inmate_court_state', form.enrollmentForm.courtStateSelected)
    formData.append('inmate_court_type', form.enrollmentForm.courtSelected)
    formData.append('inmate_judge', form.enrollmentForm.judge)
    formData.append('inmate_judgement', form.enrollmentForm.judgementFile.name)
    formData.append('inmate_sentence_date', form.enrollmentForm.sentenceDate)
    formData.append('inmate_sentence_start_date', form.enrollmentForm.sentenceStartDate)
    formData.append('inmate_sentence_duration', form.enrollmentForm.sentenceDuration)
    formData.append('inmate_sentence_end_date', form.enrollmentForm.sentenceEndDate)
    formData.append('inmate_others', form.enrollmentForm.otherInfo)
    formData.append('inmate_blood_group', form.enrollmentForm.bloodGroupSelected)
    formData.append('inmate_genotype', form.enrollmentForm.genotypeSelected)
    formData.append('inmate_ailment', form.enrollmentForm.ailments)
    formData.append('inmate_disabilities', form.enrollmentForm.disabilities)
    formData.append('inmate_height', form.enrollmentForm.height)
    formData.append('inmate_weight', form.enrollmentForm.weight)
    formData.append('inmate_weight', form.enrollmentForm.weight)
    formData.append('inmate_cs_id', '1')
    formData.append('inmate_country_residence', form.enrollmentForm.countrySelected)
    return formData
  },
  getCellBlockForm(form) {
    let formData = new FormData()
    formData.append('cell_block_alias', form.cellBlockAlias)
    return formData
  }

}

export default helpers
