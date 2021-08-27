<template>
    <div>
        <UserForm></UserForm>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import UserForm from '../components/UserForm.vue';


export default defineComponent ({
    name: 'Details',

    components: {
        UserForm,
    }

})
</script>

<style scoped>

</style>