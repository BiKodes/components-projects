<template>
  <v-app>
    <PdfGenerator></PdfGenerator>
  </v-app>
</template> 

<script>
import PdfGenerator from './components/PdfGenrator.vue'

export default {
  name: 'App',

  components: {
    PdfGenerator
  },

  data: () => ({
    //
  }),
};
</script>
