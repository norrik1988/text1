
import 'primeicons/primeicons.css'


<template>
  
        <div class="container">
          <div class="main">
              <h1> sono page one </h1>
              <Button label="Check" icon="pi pi-check" />
              

          </div>
    </div>
  </template>
  
  <script>

  
  export default {
    data() {
      return {
        isActive: false 
      };
    }
  }

  import 'primevue/resources/themes/aura-light-green/theme.css'


  </script>
  
  <style scoped>


 
  .container {
    display: flex;
    align-items: center; /* Centra verticalmente */
  }
  
  .main {
    align-items: center;
    position:absolute;
    left: 44%;
    top: 40%;
    flex-direction: column;
  
  }

  </style>
  


