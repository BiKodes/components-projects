<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
         <router-link class="navbar-brand" to="">M-Hub</router-link>
        <div>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item" v-if="!isAuthenticated">
                    <router-link class="nav-link" to="/login">Login</router-link>
                </li>
                <li class="nav-item" v-if="!isAuthenticated">
                    <router-link class="nav-link" to="/signup">Signup</router-link>
                </li>
                <li class="nav-item" v-if="isAuthenticated">
                    <router-link class="nav-link" to="/posts" >Posts</router-link>
                </li>
                <li class="nav-item" v-if="isAuthenticated">
                    <a class="nav-link" href="#" @click.prevent="onLogout()">Logout</a>
                </li>
            </ul>
        </div>
    </div>
</nav> 
</template> 

<script>
import { mapActions, mapGetters } from 'vuex';
import { IS_USER_AUTHENTICATE_GETTER, LOGOUT_ACTION } from '../store/storeconstants';

export default {
    name: 'TheNavigation',

    computed: {
        ...mapGetters('auth', {
            isAuthenticated: IS_USER_AUTHENTICATE_GETTER,
        }),
    },

    methods: {  
        ...mapActions('auth', {
            logout: LOGOUT_ACTION,
        }),

        onLogout() {
            this.logout();
            this.$router.replace('/login');
        }
    }
    
}
</script>