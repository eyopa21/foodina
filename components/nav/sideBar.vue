<script setup>
const layout = useLayout();
</script>

<template>
    <div>
        <!-- Mobile Menu (Sidebar Menu) -->

        <USlideover v-model="layout.showSidebar" side="left"
            :ui="{ wrapper: 'mr-16', background: 'bg-white dark:bg-slate-900' }">
            <div class="p-4 flex-1">

                <div class="flex items-center justify-between">
                    <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                        <div
                            class="flex justify-center items-center border-b border-dashed border-default-200 h-16 transition-all duration-300">
                            <a href="home.html">
                                <img src="/assets/logo-dark-6dbab3e1.png" alt="logo" class="h-10 flex dark:hidden">
                                <img src="/assets/logo-light-35c89c2c.png" alt="logo" class="h-10 hidden dark:flex">
                            </a>
                        </div>
                    </h3>
                    <UButton color="gray" variant="outline" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                        @click="layout.showSidebar = false" />
                </div>

                <div class="h-[calc(100%-4rem)]" data-simplebar="">
                    <nav class="hs-accordion-group p-4 w-full flex flex-col flex-wrap">
                        <ul class="space-y-2.5">
                            <li v-for="i in 6" :key="i">
                                <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                                    href="home.html">
                                    Home
                                </a>
                            </li>


                        </ul>
                    </nav>
                </div>
            </div>
        </USlideover>
    </div>
</template>