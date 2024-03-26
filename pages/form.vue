<template>
    <div>
      <Sidebar /> 

      <div class="container">
            <div class="main">
                <form-one />
            </div>
      </div>
    </div>

  


    <link rel="stylesheet" href="https://unpkg.com/primeflex@latest/primeflex.css">                    
  </template>
  
  <script>
  import Sidebar from '~/components/sidebar.vue';
  
  export default {
    components: {
      Sidebar,
 
    },
  }
  </script>
  
  <style scoped>
  
  
  body {
    margin: 0px !important
  }

  .container {
    display: flex;
    align-items: center; /* Centra verticalmente */
  }
  
  .main {
    display: flex;
    align-items: center;
    left: 15%;
    top: 25%;
    flex-direction: row;
  
  }
  </style>