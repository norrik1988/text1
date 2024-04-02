<template>
    <div class="card">
    
      <DataTable :value="products" tableStyle="min-width: 35rem">
        <Column field="name" header="Name" class="customColumn"></Column>
        <Column field="points" header="Points" class="customColumn"></Column>
        <Column field="project" header="Project" class="customColumn"></Column>
        <Column field="feature" header="Feature" class="customColumn"></Column>
        <Column field="start" header="Start" class="customColumn"></Column>
        <Column field="end" header="End" class="customColumn"></Column>

        <Column>
          <template #header>
            <span></span>
          </template>
          <template #body="slotProps">
            <menu-button :item="slotProps.rowData" :items="menuItems" ></menu-button>
          </template>
        </Column>
      </DataTable>
    </div>
  </template>
  
  <script>
   import menuButton from "@/components/menuButton.vue"
  
  export default {
    components: {
      menuButton,
    },
    data() {
      return {
        products: [
          {  name: "task A", points: "1", project: "progetto A", feature: "feature A", start: "01-01-2024", end: "07-01-2024" },
          {  name: "task B", points: "2", project: "progetto B", feature: "feature B", start: "01-01-2024", end: "10-01-2024"},
          {  name: "task C", points: "5", project: "progetto C", feature: "feature C", start: "01-01-2024", end: "15-01-2024"},
          {  name: "task D", points: "8", project: "progetto B", feature: "feature D", start: "01-01-2024", end: ""},
        ],
        menuItems: [
          { label: "Edit", icon: "pi pi-pencil", command: this.editItem },
          { label: "Delete", icon: "pi pi-trash", command: this.deleteItem },
        ],
      };
    },
    methods: {
      editItem(item) {
        console.log("Edit Action for", item);
      },
      deleteItem(item) {
        console.log("Delete Action for", item);
      },
    },
  };
  </script>
  
  <style>
        .customColumn {
            text-align: center !important;
        }

        .p-datatable .p-column-header-content {
            display: block;
            align-items: center;
}
  </style>
  