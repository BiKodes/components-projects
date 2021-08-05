<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Home</router-link>
        
        <div>
            <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="!auth">
                <li class="nav-item">
                    <router-link class="nav-link" to="/login">Login</router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" to="/register">Register</router-link>
                </li>           
            </ul>

            <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="auth">
                <li class="nav-item">
                    <router-link class="nav-link" to="/login" @click="logout">Logout</router-link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    name: "Nav",

    setup() {
        const store = useStore();

        const auth = computed( () => store.state.authenticated)

        const logout = async () => {
            await fetch('http://localhost:8080/api/logout', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
            });
        }

        return {
            auth
        }
    }
    
}
</script>