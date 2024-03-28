<template>
    <aside class="sidebar">
      <div class="sidebar-header">
        <img class="logo" :src="randomLogoUrl" alt="Logo">
      </div>
      <div class="sidebar-content overflow-y-auto">
        <ul>
          <li class="p-2"><i class="fas fa-home"></i><nuxt-link to="/">Home</nuxt-link></li>
          <li class="p-2"><i class="fas fa-info-circle"></i><nuxt-link to="/page-one">Page one</nuxt-link></li>
          <li class="p-2"><i class="fas fa-tools"></i><nuxt-link to="/page-two">Page two</nuxt-link></li>
          <li class="p-2"><i class="fas fa-envelope"></i><nuxt-link to="/page-three">Page button</nuxt-link></li>
          <li class="p-2"><i class="fas fa-car"></i><nuxt-link to="/cards">Cards</nuxt-link></li>
          <li class="p-2"><i class="fas fa-sun"></i><nuxt-link to="/form">Form</nuxt-link></li>
          <li class="p-2"><i class="fas fa-tools"></i><nuxt-link to="/login">Login</nuxt-link></li>
          <li class="p-2"><i class="fas fa-info"></i><nuxt-link to="/register">Register</nuxt-link></li>
          <li class="p-2"><i class="fas fa-train"></i><nuxt-link to="/grid">Grid</nuxt-link></li>
          <li class="hover:bg-cyan-50 border-round transition-colors transition-duration-150 p-ripple"><i class="fas fa-home"></i><nuxt-link to="/blocks">Blocks</nuxt-link></li>
          <li>
                <a v-ripple class="cursor-pointer p-2 text-700 hover:bg-cyan-50 border-round transition-colors transition-duration-150 p-ripple"
                    v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                    <i class="pi pi-chart-line mr-2"></i>
                    <span class="font-medium">Reports</span>
                    <i class="pi pi-chevron-down ml-auto mr-1"></i>
                </a>
                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-2 text-700 hover:surface-100 border-round transition-colors transition-duration-150 p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                            <i class="pi pi-chart-line mr-2"></i>
                            <span class="font-medium">Revenue</span>
                            <i class="pi pi-chevron-down ml-auto mr-1"></i>
                        </a>
                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 p-ripple">
                                    <i class="pi pi-table mr-2"></i>
                                    <span class="font-medium">View</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 p-ripple">
                                    <i class="pi pi-search mr-2"></i>
                                    <span class="font-medium">Search</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 p-ripple">
                            <i class="pi pi-chart-line mr-2"></i>
                            <span class="font-medium">Expenses</span>
                        </a>
                    </li>
                </ul>
            </li>
          


        </ul>
      </div>
    </aside>

    <link rel="stylesheet" href="https://unpkg.com/primeflex@latest/primeflex.css">     
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

  .sidebar-content ul li:hover {
    color: #3498db;
    background-color: #ffffff
  }
  /* Stili per le icone */
  .sidebar-content ul li i {
    margin-right: 10px;
  }
  
  </style>