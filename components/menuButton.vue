<template>
    <Button type="button" icon="pi pi-ellipsis-v"  aria-haspopup="true" aria-controls="overlay_menu" class="customThree" @click="$refs.menu.toggle($event)"/>
    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
</template>

<style>
    .customThree {
        background: #f1f5f9;
        border-color: transparent;
    color: #475569;
    }
</style>

<script>

export default {
  data() {
    return {
      items: [
        { label: 'Edit', icon: 'pi pi-pencil', command: () => this.opzione1() },
        { label: 'Delete', icon: 'pi pi-trash', command: () => this.opzione2() },
      ]
    };
  },
  methods: {
    opzione1() {
      console.log('Opzione 1 selezionata');
      // Aggiungi qui il codice per gestire l'opzione 1
    },
    opzione2() {
      console.log('Opzione 2 selezionata');
      // Aggiungi qui il codice per gestire l'opzione 2
    }
  }
}

</script>