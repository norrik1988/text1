<template>
    <Button type="button" icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" class="customThree"/>
    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
</template>

<style>
    .customThree {
        background: #f1f5f9;
        border-color: transparent;
    color: #475569;
    }
</style>