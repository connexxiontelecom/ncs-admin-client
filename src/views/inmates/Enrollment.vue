<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Enrollment" subtitle="Admission & profiling of new inmates">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item active><router-link to="/dashboard"><i class="fa fa-home"></i></router-link></b-breadcrumb-item>
          <b-breadcrumb-item href="javascript:void(0)" active>Enrollment</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Vertically Centered Block Modal -->
    <b-modal ref="modal" id="modal-block-vcenter" body-class="p-0" centered hide-footer hide-header no-close-on-backdrop no-close-on-esc>
      <div class="block block-rounded block-themed block-transparent mb-0">
        <div class="block-header bg-primary-dark">
          <h3 class="block-title">Access Restricted</h3>
        </div>
        <div class="block-content font-size-sm">
          <p>
            You do not have the proper clearance level to access the inmate enrollment service.
          </p>
          <p>
            Please, note that all unauthorized access attempts are logged for audit trail purposes.
          </p>
        </div>
        <div class="block-content block-content-full text-right border-top">
          <b-button variant="primary" @click="redirect">Ok</b-button>
        </div>
      </div>
    </b-modal>
    <!-- END Vertically Centered Block Modal -->

    <!-- Page Content -->
    <div class="content">
      <base-block rounded title="Inmate Enrollment Form" ref="enrollmentBlock" btn-option-fullscreen>
        <b-form @submit.stop.prevent="onSubmit">
          <b-tabs v-model="tabIndex" id="form-block" class="block"  content-class="block-content overflow-hidden" pills fill>
            <b-tab title="Personal" active class="fade-left p-4">
              <h4 class="font-w400">Personal Information</h4>
              <b-row>
                <b-col lg="2">
                  <b-form-group label="Ref No." label-for="ref-no">
                    <b-form-input id="ref-no" type="text" name="refNo" v-model="$v.enrollmentForm.refNo.$model" :state="!$v.enrollmentForm.refNo.$error && null"></b-form-input>
                    <b-form-invalid-feedback>
                      A valid ref no. is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col lg="5">
                  <b-form-group label="First Name" label-for="first-name">
                    <b-form-input id="first-name" type="text" name="firstname" v-model="$v.enrollmentForm.firstname.$model" :state="!$v.enrollmentForm.firstname.$error && null"></b-form-input>
                    <b-form-invalid-feedback>
                      A first name is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col lg="5">
                  <b-form-group label="Last Name" label-for="last-name">
                    <b-form-input id="last-name" type="text" name="lastname" v-model="$v.enrollmentForm.lastname.$model" :state="!$v.enrollmentForm.lastname.$error && null"></b-form-input>
                    <b-form-invalid-feedback>
                      A last name is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="6">
                  <b-form-group label="Other Names" label-for="other-names">
                    <b-form-input id="other-names" type="text" name="othernames" v-model="$v.enrollmentForm.othernames.$model"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="3">
                  <b-form-group label="Gender" label-for="gender">
                    <b-form-select id="gender" name="genderSelected" v-model="$v.enrollmentForm.genderSelected.$model" :state="!$v.enrollmentForm.genderSelected.$error && null" :options="enrollmentForm.genderOptions"></b-form-select>
                    <b-form-invalid-feedback>
                      A gender is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col lg="3">
                  <b-form-group label="Date of Birth" label-for="dob">
                    <b-form-input id="dob" type="date" name="dob" v-model="$v.enrollmentForm.dob.$model" :state="!$v.enrollmentForm.dob.$error && null"></b-form-input>
                    <b-form-invalid-feedback>
                      A date of birth is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="3">
                  <b-form-group label="Nationality" label-for="nationality">
                    <b-form-select id="nationality" name="nationalitySelected" v-model="$v.enrollmentForm.nationalitySelected.$model" :state="!$v.enrollmentForm.nationalitySelected.$error && null" :options="enrollmentForm.nationalityOptions"></b-form-select>
                  </b-form-group>
                  <b-form-invalid-feedback>
                    A nationality is required
                  </b-form-invalid-feedback>
                </b-col>
                <b-col lg="3">
                  <b-form-group label="State of Origin" label-for="state">
                    <b-form-select id="state" name="stateSelected" v-model="$v.enrollmentForm.stateSelected.$model" :options="enrollmentForm.stateOptions"></b-form-select>
                  </b-form-group>
                </b-col>
                <b-col lg="3">
                  <b-form-group label="LGA of Origin" label-for="lga">
                    <b-form-select id="lga" name="lgaSelected" v-model="$v.enrollmentForm.lgaSelected.$model" :options="enrollmentForm.lgaOptions"></b-form-select>
                  </b-form-group>
                </b-col>
                <b-col lg="3">
                  <b-form-group label="Hometown" label-for="hometown">
                    <b-form-input id="hometown" type="text" name="hometown" v-model="$v.enrollmentForm.hometown.$model"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row >
                <b-col lg="6">
                  <b-form-group label="Street Address" label-for="address">
                    <b-form-textarea id="address" name="address" v-model="$v.enrollmentForm.address.$model" :state="!$v.enrollmentForm.address.$error && null" rows="2"></b-form-textarea>
                    <b-form-invalid-feedback>
                      A street address is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col lg="3">
                  <b-form-group label="City/State" label-for="city">
                    <b-form-input id="city" type="text" name="city" v-model="$v.enrollmentForm.city.$model" :state="!$v.enrollmentForm.city.$error && null"></b-form-input>
                    <b-form-invalid-feedback>
                      A city is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col lg="3">
                  <b-form-group label="Country of Residence" label-for="country">
                    <b-form-select id="country" name="countrySelected" v-model="$v.enrollmentForm.countrySelected.$model" :state="!$v.enrollmentForm.countrySelected.$error && null" :options="enrollmentForm.countryOptions"></b-form-select>
                    <b-form-invalid-feedback>
                      A country of residence is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="3">
                  <b-form-group label="Religion" label-for="religion">
                    <b-form-select id="religion" name="religionSelected" @change="religionChange($event)" v-model="$v.enrollmentForm.religionSelected.$model" :state="!$v.enrollmentForm.religionSelected.$error && null" :options="enrollmentForm.religionOptions"></b-form-select>
                    <b-form-invalid-feedback>
                      A religion is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col lg="3">
                  <b-form-group label="Specify Religion" label-for="specify-religion">
                    <b-form-input id="specify-religion" type="text" name="specifyReligion" v-model="$v.enrollmentForm.specifyReligion.$model" :disabled="specifyReligionDisabled"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="3">
                  <b-form-group label="Marital Status" label-for="marital-status">
                    <b-form-select id="marital-status" name="maritalSelected" v-model="$v.enrollmentForm.maritalSelected.$model" :state="!$v.enrollmentForm.maritalSelected.$error && null" :options="enrollmentForm.maritalOptions"></b-form-select>
                    <b-form-invalid-feedback>
                      A marital status is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col lg="3">
                  <b-form-group label="Number of Children" label-for="children">
                    <b-form-input id="children" type="number" name="children" v-model="$v.enrollmentForm.children.$model"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="6">
                  <b-form-group label="Spouse Information" label-for="spouse-info">
                    <b-form-textarea id="spouse-info" name="spouseInfo" v-model="$v.enrollmentForm.spouseInfo.$model" :state="!$v.enrollmentForm.spouseInfo.$error && null" rows="2"></b-form-textarea>
                  </b-form-group>
                  <b-form-invalid-feedback>
                    Spouse information is required
                  </b-form-invalid-feedback>
                </b-col>
                <b-col lg="6">
                  <b-form-group label="Next of Kin Information" label-for="nok-info">
                    <b-form-textarea id="nok-info" name="nokInfo" v-model="$v.enrollmentForm.nokInfo.$model" :state="!$v.enrollmentForm.nokInfo.$error && null" rows="2"></b-form-textarea>
                  </b-form-group>
                  <b-form-invalid-feedback>
                    Next of kin information is required
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-tab>
            <b-tab title="Crime/Court" class="fade-left p-4">
              <h4 class="font-w400">Crime/Court Information</h4>
              <b-row>
                <b-col lg="3">
                  <b-form-group label="Inmate Category" label-for="category">
                    <b-form-select id="category" name="categorySelected" v-model="$v.enrollmentForm.categorySelected.$model" :state="!$v.enrollmentForm.categorySelected.$error && null" :options="enrollmentForm.categoryOptions"></b-form-select>
                    <b-form-invalid-feedback>
                      An inmate category is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col lg="3">
                  <b-form-group label="Court Type" label-for="court-type">
                    <b-form-select id="court-type" name="courtSelected" v-model="$v.enrollmentForm.courtSelected.$model" :state="!$v.enrollmentForm.courtSelected.$error && null" :options="enrollmentForm.courtOptions"></b-form-select>
                    <b-form-invalid-feedback>
                      A court type is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col lg="6">
                  <b-form-group label="Charges Information" label-for="charges-info">
                    <b-form-textarea id="charges-info" name="chargesInfo" v-model="$v.enrollmentForm.chargesInfo.$model" :state="!$v.enrollmentForm.chargesInfo.$error && null" rows="3"></b-form-textarea>
                    <b-form-invalid-feedback>
                      Charges information is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="3">
                  <b-form-group label="Court State" label-for="court-state">
                    <b-form-select id="court-state" name="courtStateSelected" v-model="$v.enrollmentForm.courtStateSelected.$model" :state="!$v.enrollmentForm.courtStateSelected.$error && null" :options="enrollmentForm.courtStateOptions"></b-form-select>
                    <b-form-invalid-feedback>
                      A court state is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col lg="3">
                  <b-form-group label="Judgement File" label-for="judgement-file">
                    <b-form-file id="judgement-file" name="judgementFile" v-model="$v.enrollmentForm.judgementFile.$model" :state="!$v.enrollmentForm.judgementFile.$error && null"></b-form-file>
                    <b-form-invalid-feedback>
                      A judgement file is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col lg="6">
                  <b-form-group label="Judge" label-for="judge">
                    <b-form-input id="judge" type="text" name="judge" v-model="$v.enrollmentForm.judge.$model" :state="!$v.enrollmentForm.judge.$error && null"></b-form-input>
                    <b-form-invalid-feedback>
                      Judge information is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="3">
                  <b-form-group label="Sentence Date" label-for="sentence-date">
                    <b-form-input id="sentence-date" type="date" name="sentenceDate" v-model="$v.enrollmentForm.sentenceDate.$model" :state="!$v.enrollmentForm.sentenceDate.$error && null"></b-form-input>
                    <b-form-invalid-feedback>
                      A sentence date is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col lg="3">
                  <b-form-group label="Sentence Start Date" label-for="sentence-start-date">
                    <b-form-input id="sentence-start-date" type="date" name="sentenceStartDate" v-model="$v.enrollmentForm.sentenceStartDate.$model" :state="!$v.enrollmentForm.sentenceStartDate.$error && null"></b-form-input>
                    <b-form-invalid-feedback>
                      A sentence start date is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col lg="3">
                  <b-form-group label="Sentence End Date" label-for="sentence-end-date">
                    <b-form-input id="sentence-end-date" type="date" name="sentenceEndDate" v-model="$v.enrollmentForm.sentenceEndDate.$model" :state="!$v.enrollmentForm.sentenceEndDate.$error && null"></b-form-input>
                    <b-form-invalid-feedback>
                      A sentence end date is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col lg="3">
                  <b-form-group label="Sentence Duration (Months)" label-for="sentence-duration">
                    <b-form-input id="sentence-duration" type="number" name="sentenceDuration" v-model="$v.enrollmentForm.sentenceDuration.$model" :state="!$v.enrollmentForm.sentenceDuration.$error && null" min="1"></b-form-input>
                    <b-form-invalid-feedback>
                      A sentence duration is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="12">
                  <b-form-group label="Other Information" label-for="other-info">
                    <b-form-textarea id="other-info" name="otherInfo" v-model="$v.enrollmentForm.otherInfo.$model" :state="!$v.enrollmentForm.otherInfo.$error && null"  rows="3"></b-form-textarea>
                    <b-form-invalid-feedback>
                      Other information is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-tab>
            <b-tab title="Health" class="fade-left p-4">
              <h4 class="font-w400">Health Information</h4>
              <b-row>
                <b-col lg="3">
                  <b-form-group label="Blood Group" label-for="blood-group">
                    <b-form-select id="blood-group" name="bloodGroupSelected" v-model="$v.enrollmentForm.bloodGroupSelected.$model" :options="enrollmentForm.bloodGroupOptions"></b-form-select>
                  </b-form-group>
                </b-col>
                <b-col lg="3">
                  <b-form-group label="Genotype" label-for="genotype">
                    <b-form-select id="genotype" name="genotypeSelected" v-model="$v.enrollmentForm.genotypeSelected.$model" :state="!$v.enrollmentForm.genotypeSelected.$error && null" :options="enrollmentForm.genotypeOptions"></b-form-select>
                    <b-form-invalid-feedback>
                      A genotype is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col lg="3">
                  <b-form-group label="Height (ft)" label-for="height">
                    <b-form-input id="height" type="number" name="height" v-model="$v.enrollmentForm.height.$model" :state="!$v.enrollmentForm.height.$error && null" min="1"></b-form-input>
                    <b-form-invalid-feedback>
                      A height is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col lg="3">
                  <b-form-group label="Weight (kg)" label-for="weight">
                    <b-form-input id="weight" type="number" name="weight" v-model="$v.enrollmentForm.weight.$model" :state="!$v.enrollmentForm.weight.$error && null" min="1"></b-form-input>
                    <b-form-invalid-feedback>
                      A weight is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="6">
                  <b-form-group label="Ailments" label-for="ailments">
                    <b-form-textarea id="ailments" name="ailments" v-model="$v.enrollmentForm.ailments.$model" :state="!$v.enrollmentForm.ailments.$error && null" rows="3"></b-form-textarea>
                    <b-form-invalid-feedback>
                      Ailment information is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col lg="6">
                  <b-form-group label="Disabilities" label-for="disabilities">
                    <b-form-textarea id="disabilities" name="disabilities" v-model="$v.enrollmentForm.disabilities.$model" :state="!$v.enrollmentForm.disabilities.$error && null" rows="3"></b-form-textarea>
                    <b-form-invalid-feedback>
                      Disability information is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-tab>
            <b-tab title="Biometrics" class="fade-left p-4">
              <h4 class="font-w400">Biometrics Information</h4>
            </b-tab>
            <b-tab title-item-class="ml-auto" class="p-4">
              <template #title>
                Done <b-spinner type="grow" small></b-spinner>
              </template>
              <h4 class="font-w400">Finalize & Submit</h4>
              <p>Please ensure all required fields are filled before submitting</p>
              <b-row>
                <b-col>
                  <b-form-group>
                    <b-button type="submit" variant="alt-primary" class="mr-2" size="lg" v-click-ripple>Enroll Inmate</b-button>
                    <b-button type="reset" variant="alt-secondary" class=" mr-2" v-click-ripple>Reset</b-button>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-tab>
            <b-button-group class="float-right p-4">
              <b-button variant="alt-primary" @click="tabIndex--">Previous</b-button>
              <b-button variant="alt-primary" @click="tabIndex++">Next</b-button>
            </b-button-group>
          </b-tabs>
        </b-form>
      </base-block>

      <!-- END Your Block -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<style lang="scss"></style>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'
import enrollmentOptions from '@/data/formOptions/enrollmentOptions'

export default {
  mounted() {
    let user = this.$store.getters["auth/currentUser"]
    if (user.user_type !== 4) {
      this.$bvModal.show('modal-block-vcenter')
    }
  },
  mixins: [ validationMixin ],
  components: {},
  data () {
    return {
      tabIndex: 1,
      // enrollment form
      enrollmentForm: {
        refNo: null,
        firstname: null,
        lastname: null,
        othernames: null,
        genderSelected: null,
        genderOptions: enrollmentOptions.genderOptions,
        dob: null,
        nationalitySelected: 1,
        nationalityOptions: enrollmentOptions.nationalityOptions,
        lgaSelected: null,
        lgaOptions: enrollmentOptions.lgaOptions,
        stateSelected: null,
        stateOptions: enrollmentOptions.stateOptions,
        hometown: null,
        address: null,
        city: null,
        countrySelected: null,
        countryOptions: enrollmentOptions.countryOptions,
        religionSelected: null,
        religionOptions: enrollmentOptions.religionOptions,
        specifyReligion: null,
        maritalSelected: null,
        maritalOptions: enrollmentOptions.maritalOptions,
        children: 0,
        spouseInfo: null,
        nokInfo: null,
        categorySelected: null,
        categoryOptions: enrollmentOptions.categoryOptions,
        courtSelected: null,
        courtOptions: enrollmentOptions.courtOptions,
        courtStateSelected: null,
        courtStateOptions: enrollmentOptions.courtStateOptions,
        chargesInfo: null,
        judgementFile: null,
        judge: null,
        sentenceDate: null,
        sentenceStartDate: null,
        sentenceEndDate: null,
        sentenceDuration: 1,
        otherInfo: null,
        bloodGroupSelected: null,
        bloodGroupOptions: enrollmentOptions.bloodGroupOptions,
        genotypeSelected: null,
        genotypeOptions: enrollmentOptions.genotypeOptions,
        height: null,
        weight: null,
        ailments: null,
        disabilities: null,
      },
      specifyReligionDisabled: true,
    }
  },
  validations: {
    enrollmentForm: {
      refNo: { required, minLength: minLength(3) },
      firstname: { required },
      lastname: { required },
      othernames: {},
      genderSelected: { required },
      dob: { required },
      nationalitySelected: { required },
      lgaSelected: {},
      stateSelected: {},
      hometown: {},
      address: { required },
      city: { required },
      countrySelected: { required },
      religionSelected: { required },
      specifyReligion: {},
      maritalSelected: { required },
      children: {},
      spouseInfo: { required },
      nokInfo: { required },
      categorySelected: { required },
      courtSelected: { required },
      chargesInfo: { required },
      judgementFile: { required },
      judge: { required },
      courtStateSelected: { required },
      sentenceDate: { required },
      sentenceStartDate: { required },
      sentenceEndDate: { required },
      sentenceDuration: { required },
      otherInfo: { required },
      bloodGroupSelected: {},
      genotypeSelected: { required },
      height: { required },
      weight: { required },
      ailments: { required },
      disabilities: { required },
    }
  },
  methods: {
    async onSubmit () {
      this.$v.enrollmentForm.$touch()
      if (this.$v.enrollmentForm.$anyError) {
        this.launchToast('Enrollment Failure', 'Please fill all required fields', 'warning')
        return
      }

      if (!this.specifyReligionDisabled && this.$v.enrollmentForm.specifyReligion.$model) {
        this.$v.enrollmentForm.religionSelected.$model = this.$v.enrollmentForm.specifyReligion.$model
      }

      await this.$store.dispatch('enrollInmate', { enrollmentForm: this.enrollmentForm })
      .then(response => {
        this.launchToast('Enrollment Success', response.data.message, 'success')
      })
      .catch(error => {
        this.launchToast('Enrollment Failure', error.response.data.message, 'warning')
      })
    },
    religionChange(event) {
      this.specifyReligionDisabled = event !== 'other';
    },
  }
}
</script>
