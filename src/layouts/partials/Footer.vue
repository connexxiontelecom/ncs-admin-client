<template>
  <!-- Footer -->
  <footer id="page-footer">
    <slot>
      <div class="bg-white">
        <div class="content py-3">
          <b-row class="font-size-sm text-muted font-w500">
            <b-col sm="6" order-sm="2" class="py-1 text-center text-sm-right">
              Powered by <a class="font-w600" href="https://connexxiontelecom.com" target="_blank">Connexxion Telecom</a>
            </b-col>
            <b-col sm="6" order-sm="1" class="py-1 text-center text-sm-left">
              <a class="font-w600" href="https://interior.gov.ng/nigeria-correctional-service/" target="_blank">{{ $store.getters.appName + ' ' + $store.getters.appVersion }}</a> &copy; {{ $store.getters.appCopyright }}
            </b-col>
          </b-row>
        </div>
      </div>
    </slot>
  </footer>
  <!-- END Footer -->
</template>

<script>
export default {
  name: 'BaseFooter',
  props: {
    classes: String
  }
}
</script>
