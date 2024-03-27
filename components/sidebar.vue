<template>
    <aside class="sidebar">
      <div class="sidebar-header">
        <img class="logo" :src="randomLogoUrl" alt="Logo">
      </div>
      <div class="sidebar-content">
        <ul>
          <li><i class="fas fa-home"></i><nuxt-link to="/">Home</nuxt-link></li>
          <li><i class="fas fa-info-circle"></i><nuxt-link to="/page-one">Page one</nuxt-link></li>
          <li><i class="fas fa-tools"></i><nuxt-link to="/page-two">Page two</nuxt-link></li>
          <li><i class="fas fa-envelope"></i><nuxt-link to="/page-three">Page button</nuxt-link></li>
          <li><i class="fas fa-car"></i><nuxt-link to="/cards">Cards</nuxt-link></li>
          <li><i class="fas fa-sun"></i><nuxt-link to="/form">Form</nuxt-link></li>
          <li><i class="fas fa-tools"></i><nuxt-link to="/login">Login</nuxt-link></li>
          <li><i class="fas fa-info"></i><nuxt-link to="/register">Register</nuxt-link></li>
          <li><i class="fas fa-train"></i><nuxt-link to="/grid">Grid</nuxt-link></li>


        </ul>
      </div>
    </aside>
  </template>
  
  <script >
   export default {
     data() {
       return {
  randomLogoUrl: "https://i.imgur.com/eoeuv15.png/200x100" // URL logo
       };
  }
  }
  </script>
  
  <style scoped>
  .sidebar {
    background-color: #3498db; 
    color: #fff; 
    width: 26cqh; 
    height: 100vh;
    position: fixed; 
  }
  
  .sidebar-header {
    padding: 20px;
  }
  
  .logo {
    max-width: 60%;
    margin-bottom: 4%;
    margin-top: 10%
  }
  
  .sidebar-content ul {
    list-style: none;
    padding: 13%;
  }
  
  .sidebar-content ul li {
    margin-bottom: 15%;
  }
  
  .sidebar-content ul li a {
    text-decoration: none;
    color: inherit; 
    padding: 10px 0px;
    margin-bottom: 8px;
  }
  
  .sidebar-content ul li a:hover {
    background-color: #2980b9; 
  }
  /* Stili per le icone */
  .sidebar-content ul li i {
    margin-right: 10px;
  }
  
  </style>