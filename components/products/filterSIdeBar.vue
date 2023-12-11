
<script setup>
const layout = useLayout();
const categories = ref(null)
const range = ref({
    min: null,
    max: null
})
const search = () => {
    console.log("search")
}
</script>

<template>
    <div>
        <!-- Mobile Menu (Sidebar Menu) -->
        <section class="py-10 hidden lg:block">
            <div class="container">
                <div class="lg:flex gap-6">


                    <div class="h-[calc(100vh-128px)] overflow-y-auto lg:h-auto" data-simplebar="init">
                        <div class="simplebar-wrapper" style="margin: 0px;">
                            <div class="simplebar-height-auto-observer-wrapper">
                                <div class="simplebar-height-auto-observer"></div>
                            </div>
                            <div class="simplebar-mask">
                                <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                                    <div class="simplebar-content-wrapper" tabindex="0" role="region"
                                        aria-label="scrollable content" style="height: auto; overflow: hidden;">
                                        <div class="simplebar-content" style="padding: 0px;">
                                            <div class="p-6 lg:p-0 divide-y divide-default-200">
                                                <ProductsFiltersCategory @category="(a) => console.log(' A', a)" />


                                                <ProductsFiltersRange />

                                                <!--ProductsFiltersFilter /-->

                                                <!--ProductsFiltersTags /-->

                                                <div class="py-6">
                                                    <div
                                                        class="relative rounded-lg bg-[url(../images/other/offer-bg.png)] bg-opacity-5 bg-center bg-cover overflow-hidden">
                                                        <div class="absolute inset-0 bg-primary/10 -z-10"></div>
                                                        <div class="p-12">
                                                            <div class="flex justify-center mb-6">

                                                                <NuxtImg quality="100" provider="cloudinary" placeholder
                                                                    loading="lazy" src="/v1701161319/pizza1_lfrymw.jpg"
                                                                    class="rounded-full" />

                                                            </div>
                                                            <div class="text-center mb-10">
                                                                <h3 class="text-2xl font-medium text-default-900 mb-2">
                                                                    Burger Combo</h3>
                                                                <p class="text-sm text-default-500">Lorem ipsum
                                                                    dolor
                                                                    sit
                                                                    amet, consectetur adipiscing elit, sed do.</p>
                                                            </div>
                                                            <div
                                                                class="flex items-center justify-center gap-2 w-full font-medium text-default-950 mb-6">
                                                                Sort By :
                                                                <span
                                                                    class="inline-flex items-center gap-4 text-sm py-2 px-4 xl:px-5 bg-default-50 rounded-full">
                                                                    $59 USD
                                                                </span>
                                                            </div>

                                                            <VueButton name="Shop Now" type="button"
                                                                className="py-2.5 px-8 w-full" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="simplebar-placeholder" style="width: 242px; height: 2307px;"></div>
                        </div>
                        <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                            <div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
                        </div>
                        <div class="simplebar-track simplebar-vertical" style="visibility: hidden;">
                            <div class="simplebar-scrollbar" style="height: 0px; display: none;"></div>
                        </div>
                    </div>

                    <div class="block lg:hidden py-4 px-4 border-t border-default-200">
                        <a class="w-full inline-flex items-center justify-center rounded border border-primary bg-primary px-6 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary focus:ring focus:ring-primary/50"
                            href="javascript:void(0)">Reset</a>
                    </div>
                </div>



            </div>
        </section>
        <USlideover class="block lg:hidden " v-model="layout.showFilterSideBar" side="left"
            :ui="{ wrapper: 'mr-16 ', background: 'min-h-screen bg-white dark:bg-slate-900' }">
            <div class="p-4 flex-1">

                <div class="flex items-center justify-between">
                    <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                        <div
                            class="flex justify-center items-center border-b border-dashed border-default-200 h-16 transition-all duration-300">
                            <NuxtLink to="/">
                                <span class="h-10 text-primary text-2xl uppercase border-b">Foodina</span>
                            </NuxtLink>
                        </div>
                    </h3>
                    <UButton color="gray" variant="outline" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                        @click="layout.showFilterSideBar = false" />
                </div>

                <div class="">
                    <div class="h-[calc(100vh-150px)] overflow-y-auto lg:h-auto">
                        <div class="h-full" style="margin: 0px;">

                            <div class="">
                                <div class="" style="right: 0px; bottom: 0px;">
                                    <div class="simplebar-content-wrapper" aria-label="scrollable content"
                                        style="height: auto; overflow: hidden;">
                                        <div class="simplebar-content" style="padding: 0px;">
                                            <div class="p-6 lg:p-0 divide-y divide-default-200">
                                                <ProductsFiltersCategory @category="(a) => categories = a.value" />


                                                <ProductsFiltersRange
                                                    @range="(min, max) => { range.min = min; range.max = max }" />

                                                <!--ProductsFiltersFilter /-->

                                                <!--ProductsFiltersTags /-->

                                                <div class="py-6">
                                                    <div
                                                        class="relative rounded-lg bg-primary bg-opacity-10 bg-center bg-cover overflow-hidden">
                                                        <div class="absolute inset-0 bg-primary/10 -z-10"></div>
                                                        <div class="p-12">
                                                            <div class="flex justify-center mb-6">
                                                                <img src="/assets/filter-offer-dish-1d78b7ee.png">
                                                            </div>
                                                            <div class="text-center mb-10">
                                                                <h3 class="text-2xl font-medium text-default-900 mb-2">
                                                                    Burger Combo</h3>
                                                                <p class="text-sm text-default-500">Lorem ipsum
                                                                    dolor
                                                                    sit
                                                                    amet, consectetur adipiscing elit, sed do.</p>
                                                            </div>
                                                            <div
                                                                class="flex items-center justify-center gap-2 w-full font-medium text-default-950 mb-6">
                                                                Sort By :
                                                                <span
                                                                    class="inline-flex items-center gap-4 text-sm py-2 px-4 xl:px-5 bg-default-50 rounded-full">
                                                                    $59 USD
                                                                </span>
                                                            </div>
                                                            <button
                                                                class="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full bg-primary text-white hover:bg-primary-500 transition-all"
                                                                type="button" fdprocessedid="cg6tx5">
                                                                Shop Now <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                    height="24" viewBox="0 0 24 24" fill="none"
                                                                    stroke="currentColor" stroke-width="2"
                                                                    stroke-linecap="round" stroke-linejoin="round"
                                                                    data-lucide="move-right"
                                                                    class="lucide lucide-move-right h-5 w-5">
                                                                    <path d="M18 8L22 12L18 16"></path>
                                                                    <path d="M2 12H22"></path>
                                                                </svg></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="flex flex-row space-x-2 lg:hidden py-2 px-4 border-t border-default-200">

                        <a class="w-full inline-flex items-center justify-center rounded border border-primary  px-6 py-1 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary focus:ring focus:ring-primary/50"
                            href="javascript:void(0)">Reset</a>
                        <a class="w-full inline-flex items-center justify-center rounded border border-primary bg-primary px-6 py-1.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary focus:ring focus:ring-primary/50"
                            @click="search()">Search</a>
                    </div>

                </div>
            </div>
        </USlideover>
    </div>
</template>