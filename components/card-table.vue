
<template>
    <Card class="customCard h-18rem">
        <template #title><h4>Title card</h4>
        
            <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static" style="height:60px">
            <div class="flex">
                <a v-ripple class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                    v-styleclass="{ selector: '#app-sidebar-1', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
                <span class="p-input-icon-left">
                    <i class="pi pi-search"></i>
                    <InputText type="text" class="border-none w-10rem sm:w-20rem" placeholder="Search" />
                </span>
            </div>
        </div>
        </div>
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
    gap: 1rem !important;
}


</style>


