<template>
  <the-navigation></the-navigation>
  <the-loader v-if="showLoading"></the-loader>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue'
import TheLoader from './components/TheLoader.vue'
import { mapState } from 'vuex';
import { AUTO_LOGIN_ACTION } from './store/storeconstants';

export default {
  name: 'App',
  components: {
    TheNavigation,
    TheLoader
  
  },

  computed: {
    ...mapState({
      showLoading:( state ) => state.showLoading,
      autoLogout: (state) => state.auth.autoLogout,

    })
  },

  watch: {
    autoLogout(curValue, oldValue) {
      if (curValue && curValue != oldValue) {
        this.$router.replace('/login');
      }
    },
  },

  created() {
    this.$store.dispatch(`auth/${AUTO_LOGIN_ACTION}`)
  }
};
</script>

<style>

</style>
