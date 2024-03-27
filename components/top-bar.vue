<template>
    <div class="row">
        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" style="width: 36px; height: 36px" />
        
        <div class="userdata">
            <h4>h4 </h4>
            <p> pppp </p>
        </div>
        
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
            padding: 8px 8%;
            align-items: center;
        }

        .custom {
            margin-right: 9%
        }   

        .customTwo {
            background-color:rgb(255, 255, 255, 0.0)         
        }

        .p-button {
            color: #000000;
            border:0px
        }

        .userdata {
            width: 50px;
            display: flex;
            flex-direction: column;
        }

        h4, p {

            margin: 4px
        }
</style>