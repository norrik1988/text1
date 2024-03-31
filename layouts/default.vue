<template>
  <sidebar-two></sidebar-two>
  <!-- <top-bar></top-bar> -->
  <div class="wrapper">

    <div class="border-2 border-dashed surface-border border-round surface-section flex-auto">
      <div class="dashboard-content">
          <slot></slot>
      </div>
    </div>
  </div>
  
  
</template>

<style scoped>
    .wrapper {

      position:fixed;
      top: 60px;
      left: 280px;
      right: 0; 
      bottom: 0;
      /* border: 1px solid red; */
      padding: 1%;
      overflow-y: auto;

    } 

    .dashboard-content {
      max-height: calc(100% - 60px); /* Altezza massima per il contenuto del dashboard */
      overflow-y: auto; /* Abilita lo scroll verticale quando il contenuto supera l'altezza massima */
}
</style>

