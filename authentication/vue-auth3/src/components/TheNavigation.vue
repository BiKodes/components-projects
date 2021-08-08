<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
         <router-link class="navbar-brand" to="/">Home</router-link>
        <div>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/login">Login</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/signup">Signup</router-link>
                </li>
            </ul>
        </div>
    </div>
</nav> 
</template> 

<script>
export default {
    name: 'TheNavigation'
    
}
</script>