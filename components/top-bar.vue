<template>
        <div class="container">
            <div class="row">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" style="width: 36px; height: 36px" />
                
                <div class="userdata">
                    <h5>Mirko Esposito </h5>
                    <p> Software developer </p>
                </div>
                
                <!-- <Button type="button" icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" class="customTwo"/>
                <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
                <InputSwitch v-model="checked" class="custom" /> -->

               
                
            </div>
        </div>
    
        <Divider />
</template>

<style scoped>

        .container {
            z-index: 10; 
        }


        .row {
            width: 100%;
            display: flex;
            flex-direction: row-reverse;
            padding: 8px 7.5%;
            align-items: center;
        }

        .custom {
            margin-right: 3%
        }   

        .customTwo {
            background-color:rgb(255, 255, 255, 0.0)         
        }

        .p-button {
            color: #000000;
            border:0px
        }

        .userdata {
            width: 150px;
            display: flex;
            flex-direction: column;
            margin-right: 8px;
        }

        h5, p {
            margin: 4px
        }

        .p-divider.p-divider-horizontal {
        margin: 0.2rem 0rem;
        padding: 0 1rem;
}
</style>