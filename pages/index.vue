<template>
    <div class="grid">
      <Sidebar class="col-2" /> 
      <div class="container">
            <div class="main"> 


                <div class="col-3">
                  <card-two class="cardStyle"></card-two>
                </div>
                <div class="col-3">
                  <card-two class="cardStyle"></card-two>
                </div>
                <div class="col-3">
                  <card-two class="cardStyle"></card-two>
                </div>

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
  
  
  body {
    margin: 0px !important
  }

  .container {
    display: flex;
    align-items:start
  }
  
  .main {
    display: flex;
    align-items: center;
    position:absolute;
    left: 16%;
    top: 25%;
    flex-direction: row;
  }

  .cardStyle {
    margin-right: 3%;
  }
  </style>