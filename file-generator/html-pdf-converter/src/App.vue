<template>
  <div id="app">
    <div ref="content">
        <h1>Waridi Ni Zawadi.</h1>
    </div>

    <button 
      @click.prevent="download"
    >
      Download PDF
    </button>
  </div>
</template>

<script>
import { jsPDF } from "jspdf";


export default {
  name: 'App',
  
  methods: {
    download(){
      const doc = new jsPDF()
      const data = this.$refs.content.innerHTML;
      doc.html(data, { 
        'x': 15,
        'y': 15,
        'width':150
      });

      doc.save("output.pdf")
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
