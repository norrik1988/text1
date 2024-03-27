<template>
      
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
  </template>
  
 
  
  
  <style scoped>
 
  .container {
    display: flex;
  }

  .main {
    display: flex;
    align-items: center;
    position:absolute;
    left: 18%;
    top: 22%;
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
  
