<template>
    <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl text-center">Update User</h1>
        <ImageCropper></ImageCropper>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import ImageCropper from './ui/ImageCropper.vue'


export default defineComponent({
   name: 'UserName',

   components: {
       ImageCropper
   }

});
</script>

<style scoped>

</style>