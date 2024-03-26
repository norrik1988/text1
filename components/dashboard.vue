<template>
    <div class="container grid">

        <div class="col-3"><card-two class="text-center p-3 mt-8 ml-4 border-round-sm"/></div>
        <div class="col-3"><card-two class="text-center p-3 mt-8 ml-4 border-round-sm"/></div>
        <div class="col-3"><card-two class="text-center p-3 mt-8 ml-4 border-round-sm"/></div>
        <div class="col-2"><card-three class="text-center p-3 mt-8 ml-4 border-round-sm"/></div>
        

        <div class="col-9"><card-four class="text-center p-3 mt-1 ml-4 border-round-sm"/></div>
        <div class="col-2"><card-three class="text-center p-3 mt-1 ml-4 border-round-sm "/></div>
    </div>

    <link rel="stylesheet" href="https://unpkg.com/primeflex@latest/primeflex.css">      
</template>




<style scoped>

 /* .row {
    display: flex;
    flex-direction: row; 
 } */


.container {
    display: flex;
    margin-left: 15%;
    overflow: hidden;
    
}

.mt-8 {
    margin-top: 13rem !important;
}
</style>