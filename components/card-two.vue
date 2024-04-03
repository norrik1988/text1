
<template>
    <Card class="customCard h-18rem">
        <template #title><h4>Title card</h4></template>
        <template #content>
            <p class="m-0">
            paragraph              
            </p>

            <!-- <template v-if="showTable1">
                 <table1></table1>
            </template> -->

            <div class="text-900 font-medium text-xl">Team Activity</div>
                        <div>
                            <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu1.toggle($event)"></Button>
                            <Menu ref="menu1" :popup="true" :model="items"></Menu>
                        </div>
                    <ul class="list-none p-0 m-0">
                        <li class="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                            <div class="flex align-items-start mr-0 lg:mr-5">
                                <!-- <img src="/images/blocks/avatars/circle-big/avatar-f-1.png" class="mr-3 w-3rem h-3rem"/> -->
                                <div>
                                    <span class="text-900 font-medium block mb-2">Jane Cooper</span>
                                    <div class="text-700 mb-2">responded to an issue.</div>
                                    <a class="text-primary cursor-pointer">
                                        <i class="pi pi-github text-sm mr-2"></i>
                                        <span>Issue #1185</span>
                                    </a>
                                </div>
                            </div>
                            <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">14 mins ago</span>
                        </li>
                        <li class="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                            <div class="flex align-items-start mr-0 lg:mr-5">
                                <!-- <img src="/images/blocks/avatars/circle-big/avatar-m-1.png" class="mr-3 w-3rem h-3rem"/> -->
                                <div>
                                    <span class="text-900 font-medium block mb-2">Robert Fox</span>
                                    <div class="text-700">changed team size from <span class="text-900 font-medium">5</span> to <span class="text-900 font-medium">6</span>.</div>
                                </div>
                            </div>
                            <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">20 mins ago</span>
                        </li>
                        <li class="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                            <div class="flex align-items-start mr-0 lg:mr-5">
                                <!-- <img src="/images/blocks/avatars/circle-big/avatar-f-2.png" class="mr-3 w-3rem h-3rem"/> -->
                                <div>
                                    <span class="text-900 font-medium block mb-2">Kristin Watson Cooper</span>
                                    <div class="text-700 mb-2">created a Q4 presentation to an issue.</div>
                                    <a class="text-primary cursor-pointer">
                                        <i class="pi pi-file-pdf text-sm mr-2"></i>
                                        <span>q4_presentation.pdf</span>
                                    </a>
                                </div>
                            </div>
                            <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">38 mins ago</span>
                        </li>
                        <li class="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                            <div class="flex align-items-start mr-0 lg:mr-5">
                                <!-- <img src="/images/blocks/avatars/circle-big/avatar-f-3.png" class="mr-3 w-3rem h-3rem"/> -->
                                <div>
                                    <span class="text-900 font-medium block mb-2">Annette Black</span>
                                    <div class="text-700">added <span class="text-900 font-medium">Nico Greenberg</span> to <span class="text-primary">Watchlist Tier-1</span>.</div>
                                </div>
                            </div>
                            <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">1 day ago</span>
                        </li>
                        <li class="py-3 flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                            <div class="flex align-items-start mr-0 lg:mr-5">
                                <!-- <img src="/images/blocks/avatars/circle-big/avatar-m-2.png" class="mr-3 w-3rem h-3rem"/> -->
                                <div>
                                    <span class="text-900 font-medium block mb-2">Floyd Miles</span>
                                    <div class="text-700">has refunded a blue t-shirt for <span class="text-primary">$79</span>.</div>
                                </div>
                            </div>
                            <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">4 days ago</span>
                        </li>
                    </ul>
              
            <div class="col-12 lg:col-6">
                <div class="surface-card shadow-2 border-round p-4 h-full">
                    <div class="flex align-items-center justify-content-between mb-4">
                        <div class="text-900 font-medium text-xl">Notifications</div>
                        <div>
                            <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu2.toggle($event)"></Button>
                            <Menu ref="menu2" :popup="true" :model="items"></Menu>
                        </div>
                    </div>
                    
                    <span class="block text-600 font-medium mb-3">TODAY</span>
                    <ul class="p-0 mx-0 mt-0 mb-4 list-none">
                        <li class="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                <i class="pi pi-dollar text-xl text-blue-500"></i>
                            </div>
                            <span class="text-900 line-height-3 font-medium">Richard Jones
                                <span class="text-700 font-normal">has purchased a blue t-shirt for <span class="text-primary font-medium">$79</span></span>
                            </span>
                        </li>
                        <li class="flex align-items-center py-2">
                            <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-orange-100 border-circle mr-3 flex-shrink-0">
                                <i class="pi pi-download text-xl text-orange-500"></i>
                            </div>
                            <span class="text-700 line-height-3">Your request for withdrawal of <span class="text-primary font-medium">$2500</span> has been initiated.</span>
                        </li>
                    </ul>
            
                    <span class="block text-600 font-medium mb-3">YESTERDAY</span>
                    <ul class="p-0 m-0 list-none">
                        <li class="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                <i class="pi pi-dollar text-xl text-blue-500"></i>
                            </div>
                            <span class="text-900 line-height-3 font-medium">Keyser Wick
                                <span class="text-700 font-normal">has purchased a black jacket for <span class="text-primary font-medium">$59</span></span>
                            </span>
                        </li>
                        <li class="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0">
                                <i class="pi pi-question text-xl text-pink-500"></i>
                            </div>
                            <span class="text-900 line-height-3 font-medium">Jane Davis
                                <span class="text-700 font-normal">has posted a new questions about your product.</span>
                            </span>
                        </li>
                        <li class="flex align-items-center py-2">
                            <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-green-100 border-circle mr-3 flex-shrink-0">
                                <i class="pi pi-arrow-up text-xl text-green-500"></i>
                            </div>
                            <span class="text-900 line-height-3 font-medium">Claire Smith
                                <span class="text-700 font-normal">has upvoted your store along with a comment.</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-12 lg:col-4">
                <div class="surface-card border-round shadow-2 p-4 text-center">
                    <!-- <img src="/images/blocks/illustration/windows.svg" alt="Image" class="mx-auto block mb-4"> -->
                    <div class="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
                    <p class="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
                    <Button label="Learn More" icon="pi pi-arrow-right p-button-rounded"></Button>
                </div>
            </div>

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


