<template>
    <div>
      <h1>Autocomplete Example</h1>
      <p>Selected Task: {{ selectedTask }}</p>
      <AutoComplete v-model="selectedTask" :suggestions="filteredTasks" field="name" placeholder="Search Task" />
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  import  AutoComplete from 'primevue/autocomplete';
  
  export default {
    components: {
      AutoComplete,
    },
    data() {
      return {
        products: [
          { id: 1, name: "Task A" },
          { id: 2, name: "Task B" },
          { id: 3, name: "Task C" },
          { id: 4, name: "Task D" },
        ],
        selectedTask: null,
        searchText: '',
      };
    },
    computed: {
      filteredTasks() {
        return this.products.filter(task => task.name.toLowerCase().includes(this.searchText.toLowerCase()));
      }
    },
  };
  </script>
  
  <style>
  /* Stili personalizzati se necessario */
  </style>
  