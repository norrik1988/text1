<template>
    <div class="container">
      
        
        <button 
          class="buttonPers"
          :class="{ active: isActive, inactive: !isActive }"
          :style="{ backgroundColor: isActive ? 'green' : 'gray', color: isActive ? 'white' : 'black' }"
          @mouseover="isActive = true"
          @mouseleave="isActive = false"
        >
          hover me
        </button>
      </div>
  </template>
  
  <script>

  
  export default {
    data() {
      return {
        isActive: true 
      };
    }
  }
  </script>
  <style scoped>
 
  .container {
    display: flex;
    align-items: center; /* Centra verticalmente */
  }
  
  .buttonPers {
    margin-left: 250px; 
    border-radius: 8px;
    padding: 1%
  }
  
  .active {
    font-weight: bold;
  }
  
  .inactive {
    font-style: italic;
  }
  
  button {
      position: absolute;
    left: 37%;
    top: 50% 
  }
  </style>
  

