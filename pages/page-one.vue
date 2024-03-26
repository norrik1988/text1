<template>
    <div class="container">

      <sidebar />
      
          <div class="main">
              <h1> sono page one </h1>
              <Button label="Check" icon="pi pi-check" />
              

          </div>
      </div>
  </template>
  
  <script>
  import Sidebar from '~/components/sidebar.vue'; 
  
  export default {
    components: {
      Sidebar 
    },
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
    display: flex;
    align-items: center;
    position:absolute;
    left: 55%;
    flex-direction: column;
  
  }

  </style>
  


