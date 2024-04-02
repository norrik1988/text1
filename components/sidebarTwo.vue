
<template>
<div class="min-h-screen flex relative lg:static surface-ground">
        <div id="app-sidebar-1" class="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style="width:280px; background-color: #3498db !important">
            <div class="flex flex-column h-full">
                <nuxt-link to="/" class="flex align-items-center px-5 flex-shrink-0 mt-5 mb-5" style="height:60px">
                     <img src="https://i.imgur.com/eoeuv15.png/200x100" alt="Image" height="100" /> 
                </nuxt-link>
                <div class="overflow-y-auto">
                    <ul class="list-none p-3 m-0">
                        <li>
                            <div v-ripple class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple customListTitle"
                                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                                <span class="font-medium">FAVORITES</span>
                                <i class="pi pi-chevron-down"></i>
                            </div>
                            <ul class="list-none p-0 m-0 overflow-hidden">
                                <li>
                                    <nuxt-link to="/grid" class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple customList no-underline">
                                            <i class="pi pi-home mr-2"></i>
                                            <span class="font-medium">Dashboard</span>
                                    </nuxt-link>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple customList">
                                        <i class="pi pi-bookmark mr-2"></i>
                                        <span class="font-medium">Bookmarks</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple customList"
                                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                                        <i class="pi pi-chart-line mr-2"></i>
                                        <span class="font-medium">Reports</span>
                                        <i class="pi pi-chevron-down ml-auto"></i>
                                    </a>
                                    <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple customList"
                                                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                                                <i class="pi pi-chart-line mr-2"></i>
                                                <span class="font-medium">Revenue</span>
                                                <i class="pi pi-chevron-down ml-auto"></i>
                                            </a>
                                            <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                <li>
                                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple customList">
                                                        <i class="pi pi-table mr-2"></i>
                                                        <span class="font-medium">View</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple customList">
                                                        <i class="pi pi-search mr-2"></i>
                                                        <span class="font-medium">Search</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple customList">
                                                <i class="pi pi-chart-line mr-2"></i>
                                                <span class="font-medium">Expenses</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple customList">
                                        <i class="pi pi-users mr-2"></i>
                                        <span class="font-medium">Team</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple customList">
                                        <i class="pi pi-comments mr-2"></i>
                                        <span class="font-medium">Messages</span>
                                        <span class="inline-flex align-items-center justify-content-center ml-auto bg-orange-400 text-0 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple customList">
                                        <i class="pi pi-calendar mr-2"></i>
                                        <span class="font-medium">Calendar</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple customList">
                                        <i class="pi pi-cog mr-2"></i>
                                        <span class="font-medium">Settings</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="list-none p-3 m-0">
                        <li>
                            <div v-ripple class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple customListTitle"
                                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                                <span class="font-medium">APPLICATION</span>
                                <i class="pi pi-chevron-down"></i>
                            </div>
                            <ul class="list-none p-0 m-0 overflow-hidden">
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple customList" >
                                        <i class="pi pi-folder mr-2"></i>
                                        <span class="font-medium">Projects</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple customList">
                                        <i class="pi pi-chart-bar mr-2"></i>
                                        <span class="font-medium">Performance</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple customList">
                                        <i class="pi pi-cog mr-2"></i>
                                        <span class="font-medium">Settings</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="mt-auto">
                    <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
                    <a v-ripple class="m-3 flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple sidebarName">
                         <img src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" style="width: 28px; height: 28px"/> 
                        <span class="font-medium">Amy Elsner</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="min-h-screen flex flex-column relative flex-auto">
            <div class="flex justify-content-between align-items-center px-8 surface-0 border-bottom-1 surface-border relative lg:static" style="height:60px">
                <div class="flex">
                    <a v-ripple class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                        v-styleclass="{ selector: '#app-sidebar-1', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }">
                        <i class="pi pi-bars text-4xl"></i>
                    </a>
                    <!-- <span class="p-input-icon-left">
                        <i class="pi pi-search"></i>
                        <InputText type="text" class="border-none w-10rem sm:w-20rem" placeholder="Search" />
                    </span> -->
                </div>
                <a v-ripple class="cursor-pointer block lg:hidden text-700 p-ripple"
                    v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                    <i class="pi pi-ellipsis-v text-2xl"></i>
                </a>
                <InputSwitch v-model="checked" />
               
                <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
                    surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">

                    <li>
                        <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                            <span class="block lg:hidden font-medium">Inbox</span>
                        </a>
                    </li>
                    <li class="pr-5">
                        <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                            <span class="block lg:hidden font-medium">Notifications</span>
                        </a>
                    </li>
                   <li>
                        <Button type="button" icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" class="customTwo"/>
                        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
                   </li>
                    
                    <li class="border-top-1 surface-border lg:border-top-none pr-8">
                        <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors p-ripple" disabled>
                            <div class="block mr-3">
                                <div class="text-900 font-medium">Josephine Lillard</div>
                                <span class="text-600 font-semibold text-sm">Marketing Specialist</span>
                            </div>
                            <img src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/> 
                           
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <link rel="stylesheet" href="https://unpkg.com/primeflex@latest/primeflex.css"> 
</template>

<script>
export default {
  data() {
    return {
      checked: false // Imposta il valore iniziale a false
    };
  },
 
}
</script>

<style scoped>

.customList {
    color: #ffffff !important
}

.customList:hover {
    color: #3498db !important
}

.customListTitle {
    color: #ffffff !important
}

.sidebarName {
    color:#ffffff !important
}

.sidebarName:hover {
    background-color: rgba(255,255,255,0) !important; 
}

.wrapper {

position:absolute;
top: 60px;
left: 280px;
width: calc(100% - 15%);
height: calc(100% - 15%);
border: 1px solid red;

}

.p-button:not(:disabled) {
    background:transparent;
    color: #475569;
    border-color: transparent;
}

.p-button:not(:disabled):hover {
    background:#f1f5f9;
    color: #475569;
    border-color: transparent;
}

</style>

