
<template>
    <Card class="customCard h-18rem">
        <template #title><h4>Title card</h4></template>
        <template #content>
            <p class="m-0">
            paragraph              
            </p>

            
        </template>
    </Card>
</template>



<style scoped>

.customCard {
      width: 92%;  
      overflow:hidden;
}

p, h4 {
    text-align: left;
}

h4 {
    margin: 0 0 8px 0;
}

.simple-card {
    text-align: left;
}

.p-card .p-card-caption {
    text-align: left;
}


</style>


