<template>
    <nav class="navbar navbar-expand navbar-light fixed-top">
      <div class="container">
        <router-link class="navbar-brand" to="/">Home</router-link>       
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto" v-if="!user">
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            
            <li class="nav-item">
              <router-link class="nav-link" to="/register">Sign up</router-link>
            </li>            
          </ul>

          <ul class="navbar-nav ml-auto" v-if="user">
            <li class="nav-item">
              <a href="javascript:void(0)" class="nav-link" @click="handleClick">Logout</a>
            </li>
                   
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
   name: 'Nav',
   
   methods: {
     handleClick(){
        localStorage.removeItem('token');
        this.$store.dispatch('user', null)
        this.$router.push('/')
     }
   },

   computed: {
     ...mapGetters(['user'])
   }
}
</script>