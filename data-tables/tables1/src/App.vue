<template>
  <div class="container y:margin-5">
    <DataTable></DataTable>
  </div>
</template>

<script >
import DataTable from './components/DataTable.vue'

export default {
  name: 'App',
  components: {
    DataTable
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
