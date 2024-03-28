<template>
    <div class="main">
        <div class="surface-card shadow-2 border-round p-4">
    <div class="flex justify-content-between align-items-center mb-5">
        <span class="text-xl text-900 font-medium">Recent Invoices</span>
        <div>
            <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu3.toggle($event)"></Button>
            <Menu ref="menu3" :popup="true" :model="items"></Menu>
        </div>
    </div>
    <ul class="list-none p-0 m-0" style="width: 600px">
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3 bg-yellow-50 border-yellow-500" style="border-radius: 10px;">
            <div>
                <div>
                    <span class="inline-flex justify-content-center align-items-center w-2rem h-2rem border-circle border-1 border-yellow-200">
                        <i class="pi pi-file text-yellow-700"></i>
                    </span>
                    <span class="text-yellow-700 font-bold ml-2">Jenny Wilson</span>
                </div>
                <p class="text-yellow-700 mt-2 mb-0">Due <span class="font-medium">10/09/2021</span></p>
            </div>
            <div class="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
                <span class="bg-yellow-400 text-yellow-900 font-bold text-sm py-1 px-2" style="border-radius: 10px">PENDING</span>
                <div class="text-right ml-3">
                    <span class="text-yellow-700 font-bold">120.00</span>
                    <p class="mt-1 mb-0 text-yellow-700">EUR</p>
                </div>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3 bg-green-50 border-green-500" style="border-radius: 10px;">
            <div>
                <div>
                    <span class="inline-flex justify-content-center align-items-center w-2rem h-2rem border-circle border-1 border-green-200">
                        <i class="pi pi-file text-green-600"></i>
                    </span>
                    <span class="text-green-700 font-bold ml-2">Dianne Russell</span>
                </div>
                <p class="text-green-700 mt-2 mb-0">Due <span class="font-medium">21/10/2021</span></p>
            </div>
            <div class="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
                <span class="bg-green-400 text-green-900 font-bold text-sm py-1 px-2" style="border-radius: 10px">PAID</span>
                <div class="text-right ml-3">
                    <span class="text-green-700 font-bold">82.50</span>
                    <p class="mt-1 mb-0 text-green-700">EUR</p>
                </div>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3 bg-green-50 border-green-500">
            <div>
                <div>
                    <span class="inline-flex justify-content-center align-items-center w-2rem h-2rem border-circle border-1 border-green-200" style="border-color:rgba(33,197,94,.5)">
                        <i class="pi pi-file text-green-600"></i>
                    </span>
                    <span class="text-green-700 font-bold ml-2">Jerome Bell</span>
                </div>
                <p class="text-green-700 mt-2 mb-0">Due <span class="font-medium">20/12/2021</span></p>
            </div>
            <div class="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
                <span class="bg-green-400 text-green-900 font-bold text-sm py-1 px-2" style="border-radius: 10px">PAID</span>
                <div class="text-right ml-3">
                    <span class="text-green-700 font-bold">250.00</span>
                    <p class="mt-1 mb-0 text-green-700">EUR</p>
                </div>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3 bg-pink-50 border-pink-500" style="border-radius: 10px;">
            <div>
                <div>
                    <span class="inline-flex justify-content-center align-items-center w-2rem h-2rem border-circle border-1 border-pink-200">
                        <i class="pi pi-file text-pink-500"></i>
                    </span>
                    <span class="text-pink-500 font-bold ml-2">Courtney Henry</span>
                </div>
                <p class="text-pink-500 mt-2 mb-0">Due <span class="font-medium">01/05/2021</span></p>
            </div>
            <div class="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
                <span class="bg-pink-400 text-pink-50 font-bold text-sm py-1 px-2" style="border-radius: 10px">UNPAID</span>
                <div class="text-right ml-3">
                    <span class="text-pink-500 font-bold">60.00</span>
                    <p class="mt-1 mb-0 text-pink-500">EUR</p>
                </div>
            </div>
        </li>
    </ul>
</div>
    </div>

    <link rel="stylesheet" href="https://unpkg.com/primeflex@latest/primeflex.css">     
</template>

<style scoped>
    .main {
    display: flex;
    align-items: center;
    position:absolute;
    left: 18%;
    top: 22%;
    flex-direction: row;
    overflow: hidden;
  }
</style>