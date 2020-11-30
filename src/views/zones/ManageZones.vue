<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Manage Zonal Commands" subtitle="Manage zonal commands here">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Zones</b-breadcrumb-item>
          <b-breadcrumb-item active>Manage Zonal Commands</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->
    <div class="content">
      <base-block rounded title="All Zonal Commands" ref="manageZoneBlock" btn-option-fullscreen>
        <b-form>

        </b-form>
      </base-block>
    </div>
  </div>
</template>
