<template>
    <div class="container">
      
      
      <div class="main">
              <h1> sono page two </h1>
             
              <testbutton></testbutton>
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
    top: 40%;
    flex-direction: column;
  }

  h1 {
    margin-bottom: 1%;
  }
  
 
  </style>
  
