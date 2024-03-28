
import { NuxtLayout } from '#build/components';

<template>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">  
  </head>
    <div id="app">
      <NuxtLayout>
      <NuxtPage /> 

      </NuxtLayout>
    </div>
  </template>
  
  <script>
  </script>
  
  <style>
  
  #app {
    font-family: Arial, sans-serif;
    overflow: hidden;
  }
  
  body {
    margin: 0px !important
  }
  </style>