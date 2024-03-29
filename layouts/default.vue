<template>
  <sidebar-two></sidebar-two>
  <!-- <top-bar></top-bar> -->
  <div class="wrapper">

    <div class="border-2 border-dashed surface-border border-round surface-section flex-auto">
      <slot></slot>

    </div>
  </div>
  
  
</template>

<style scoped>
    .wrapper {

      position:absolute;
      top: 60px;
      left: 280px;
      width: calc(100% - 280px);
      height: calc(100% - 60px);
      /* border: 1px solid red; */
      padding: 1%;

    } 
</style>

