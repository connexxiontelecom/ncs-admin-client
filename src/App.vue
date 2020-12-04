<template>
  <router-view></router-view>
</template>

<style lang="scss">
// Main Stylesheet
@import './src/assets/scss/main';

// Bootstrap Vue Stylesheet
@import '~bootstrap-vue/src/index';

// All color themes are included and available by default
// Feel free to comment out any of them if you won't use them in your project
//@import './src/assets/scss/oneui/themes/amethyst';
//@import './src/assets/scss/oneui/themes/flat';
//@import './src/assets/scss/oneui/themes/modern';
//@import './src/assets/scss/oneui/themes/smooth';

@import './src/assets/scss/oneui/themes/city';

</style>

<script>

import store from "@/store";
import starter from "@/router/starter";

export default {
  name: 'App',
  created() {
    // if token has an issue the app gracefully exits
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function () {
        console.log('Created')
        if (err.response.data.message === 'Unauthorized Access' || err.response.data.message === 'Access Denied') {
          store.dispatch('logout')
          starter.push('/auth/signin')
        }
        // if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
        //   this.$store.dispatch('auth/logout')
        // }
        throw err
      })
    })
    // if local storage is altered, app gracefully exits
    window.addEventListener("storage", function () {
      store.dispatch('logout')
      starter.push('/auth/signin')
    }, false);
  },
}

</script>
