
<template>
    <Card class="customCard h-18rem">
        <template #title><h4>Title card</h4>
        
       
        </template>
        <template #content>
            <table1></table1>
        </template>
    </Card>
</template>




<style>

.customCard {
    width: 97%;  
    overflow:hidden;
    padding: 0rem;
    overflow-y: auto;

}

p, h4 {
    text-align: left;
}

h4 {
    margin: 0 0 8px 0;
}

p {
    font-weight: 300;
}
.simple-card {
    text-align: left;
}

.p-card .p-card-caption {
    text-align: left;
}

.p-card .p-card-body {
    padding: 0rem !important;
    gap: 0rem !important;
}

.p-inputtext:enabled:focus {
    outline: 1px solid var(--blue-300);
}


</style>


