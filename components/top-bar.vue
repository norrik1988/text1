<template>
    <div class="row">
        <Button type="button" icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" class="customTwo"/>
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
        <InputSwitch v-model="checked" class="custom" />
    </div>
    
</template>

<style scoped>

        .row {
            width: 100%;
            display: flex;
            flex-direction: row-reverse;
            padding: 8px 2%;
            align-items: center;
        }

        .custom {
            margin-right: 1%
        }   

        .customTwo {
            background-color:rgb(255, 255, 255, 0.0)         
        }

        .p-button {
            color: #000000;
            border:0px
        }
</style>