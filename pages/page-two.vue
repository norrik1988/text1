<template>
    <div class="container">
      <sidebar />
      
      <div class="main">
              <h1> sono page two </h1>
             
              <testbutton></testbutton>
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
    left: 45%;
    flex-direction: column;
  }

  h1 {
    margin-bottom: 1%;
  }
  
 
  </style>
  
