<template>
    <div class="card">
      <div class=" flex flex-column relative flex-auto">
            <div class="flex justify-content-between align-items-center surface-0 border-bottom-1 surface-border relative lg:static" style="height:60px">
                <div class="flex">
                    <!-- <a v-ripple class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                        v-styleclass="{ selector: '#app-sidebar-1', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }">
                        <i class="pi pi-bars text-4xl"></i>
                    </a>
                    <span class="p-input-icon-left">
                        <i class="pi pi-search customSearch"></i>
                        <InputText type="text" class="border-solid w-10rem sm:w-20rem pl-5" placeholder="Search" />
                    </span> -->


                    <i class="pi pi-search customSearch"></i>                       
                    <AutoComplete v-model="selectedTask" :suggestions="filteredTasks" field="name" @complete="searchTasks" placeholder="search" />
                                   
                </div>
            </div>
        </div>
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
            <menu-button :item="slotProps.rowData" :items="menuItems"  ></menu-button>
          </template>
        </Column>
      </DataTable>
    </div>
  </template>
  
  <script>
    import menuButton from "@/components/menuButton.vue";
    import AutoComplete from 'primevue/autocomplete';
  
  export default {
    components: {
      AutoComplete,
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
        searchText:'',
        selectedTask: null,
      };
    },

    computed: {
      filteredTasks() {
        return this.products.filter(task => task.name.toLowerCase().includes(this.searchText.toLowerCase()));
      }
    },
    methods: {
      editItem(item) {
        console.log("modifica task", item);
      },
      deleteItem(item) {
        console.log("elimina task", item);
      },
      searchTasks(event) {

      }
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

        .p-inputtext {
            padding-left: 14% !important;
        }

.customSearch {
    z-index: 90;
    position: absolute;
    top: 36%;
    left: 1%
}
  </style>
  