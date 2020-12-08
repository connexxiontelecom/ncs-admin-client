<template>
  <div>
    <!-- Hero -->
    <base-page-heading :title="'View '+centerName" subtitle="View Custodial Center Details Here">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item active><router-link to="/operations"><i class="fa fa-home"></i></router-link></b-breadcrumb-item>
          <b-breadcrumb-item active><router-link to="/zonal_operations">Zonal Operations</router-link></b-breadcrumb-item>
          <b-breadcrumb-item active><router-link to="/zonal_operations/zone">{{ zoneName }}</router-link></b-breadcrumb-item>
          <b-breadcrumb-item active><router-link to="/zonal_operations/zone/state">{{ stateName }}</router-link></b-breadcrumb-item>
          <b-breadcrumb-item href="javascript:void(0)" active>{{ centerName }}</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->
  </div>
</template>

<script>
export default {
  data(){
    return {
      zoneName: this.$store.getters.getZoneNameParam,
      stateName: this.$store.getters.getStateNameParam,
      centerName: this.$store.getters.getCenterNameParam
    }
  }
}
</script>
