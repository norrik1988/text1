<template>
    <div class="container grid">
      <sidebar class="col-2"/>
      
      <div class="main">
            <div class="col-3 cardStyle" >
              <card-one></card-one>
            </div>
            <div class="col-3 cardStyle">
              <card-one></card-one>
            </div>
            <div class="col-3 cardStyle">
              <card-one></card-one>
            </div>
          </div>
      </div>
  </template>
  
  <script>
  import Sidebar from '~/components/sidebar.vue'; 
  
  export default {
    components: {
      Sidebar 
    },

  }
  </script>
  
  <style scoped>
 
  .container {
    display: flex;
  }

  .main {
    display: flex;
    align-items: center;
    position:absolute;
    left: 14%;
    flex-direction: row;
    overflow: hidden;
  }

  h1 {
    margin-bottom: 1%;
  }
  
  .cardStyle {
    margin-right: 3%;
  } 
 
  </style>
  
