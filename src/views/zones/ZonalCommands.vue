<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Zonal Commands" subtitle="">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Zones</b-breadcrumb-item>
          <b-breadcrumb-item active>New Zonal Command</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->
    <div class="content">
      <b-row>
        <b-col lg="6">
          <base-block rounded title="New Zonal Command Form" ref="newZoneBlock" btn-option-fullscreen>
            <b-form>
              <b-row>
                <b-col>
                  <b-form-group label="Zone Name" label-for="zone-name">
                    <b-form-input id="zone-name" type="text" name="zoneName" ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group class="text-right">
                    <b-button type="submit" variant="alt-primary" class="mr-2" size="lg" v-click-ripple>Create Zone</b-button>
                    <b-button type="reset" variant="alt-secondary" class=" mr-2" v-click-ripple>Reset</b-button>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form>
          </base-block>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
