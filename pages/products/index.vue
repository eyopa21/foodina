<script setup>
const layout = useLayout();
</script>

<template>
    <div class="">
        <VueBreadCrumb />
        <section class="py-10">
            <div class="container">
                <div class="lg:flex gap-6">

                    <ProductsFilterSideBar />

                    <div class="lg:w-3/4">
                        <div class="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 mb-10">
                            <div class="flex flex-wrap md:flex-nowrap items-center gap-4">
                                <button @click="layout.showFilterSideBar = true" type="button"
                                    class="inline-flex lg:hidden items-center gap-4 text-sm py-2.5 px-4 xl:px-5 rounded-full text-default-950 border border-default-200 transition-all">
                                    Filter
                                    <Icon name="i-heroicons-adjustments-horizontal-solid" />
                                </button>

                                <h6 class="lg:flex hidden text-default-950 text-base">Showing 1–10 of 99 results</h6>
                            </div>
                            <div class="flex items-center">
                                <span class="text-base text-default-950 me-3">Sort By :</span>
                                <div class="hs-dropdown relative inline-flex [--placement:bottom-left]">
                                    <button type="button"
                                        class="hs-dropdown-toggle flex items-center gap-2 font-medium text-default-950 text-sm py-2.5 px-4 xl:px-5 rounded-full border border-default-200 transition-all"
                                        fdprocessedid="ogkzkl">
                                        Latest <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" data-lucide="chevron-down"
                                            class="lucide lucide-chevron-down h-4 w-4">
                                            <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                    </button><!-- end dropdown button -->

                                    <div
                                        class="hs-dropdown-menu hs-dropdown-open:opacity-100 min-w-[200px] transition-[opacity,margin] mt-4 opacity-0 hidden z-20 bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg border border-default-100 p-1.5 dark:bg-default-50">
                                        <ul class="flex flex-col gap-1">
                                            <li><a class="flex items-center gap-3 font-normal py-2 px-3 transition-all text-default-700 bg-default-400/20 rounded"
                                                    href="javascript:void(0)">Latest</a></li>
                                            <li><a class="flex items-center gap-3 font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-400/20 rounded"
                                                    href="javascript:void(0)">Featured</a></li>
                                            <li><a class="flex items-center gap-3 font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-400/20 rounded"
                                                    href="javascript:void(0)">Release Date</a></li>
                                            <li><a class="flex items-center gap-3 font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-400/20 rounded"
                                                    href="javascript:void(0)">Avg. Rating</a></li>
                                        </ul><!-- end dropdown items -->
                                    </div><!-- end dropdown menu -->
                                </div>
                            </div>
                        </div><!-- end flex -->

                        <div class="grid grid-cols-1 gap-5">
                            <div v-for="i in 7" :key="i"
                                class="border border-default-200 rounded-lg p-4 hover:border-primary transition-all duration-300 drak:hover:shadow-[0px_0px_16px_0px_rgba(245,130,32,0.50)]">
                                <div class="flex flex-col md:flex-row md:items-center justify-center gap-4 relative">
                                    <div class="shrink-0">
                                        <div class="w-full h-full">
                                            <img src="/assets/red-velvet-pastry-b09214ba.png" class="w-full h-full">
                                        </div>
                                    </div><!-- end shrink-0 -->
                                    <div class="flex-grow flex items-center gap-4">
                                        <div class="grow">
                                            <div class="">
                                                <div class="flex items-center justify-between mb-4">
                                                    <a href="product-detail.html"
                                                        class="text-default-800 text-2xl font-semibold line-clamp-1 after:absolute after:inset-0">Red
                                                        Velvet Pastry</a>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        data-lucide="heart"
                                                        class="lucide lucide-heart relative z-10 h-6 w-6 text-default-200 cursor-pointer hover:text-red-500 hover:fill-red-500">
                                                        <path
                                                            d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z">
                                                        </path>
                                                    </svg>
                                                </div>
                                                <p class="text-base text-default-600 max-w-2xl line-clamp-2 mb-6">Lorem
                                                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                    tempor
                                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                                </p>
                                                <div class="flex flex-wrap md:flex-nowrap items-center gap-4 mb-6">
                                                    <a href="cart.html"
                                                        class="relative z-10 inline-flex items-center justify-center rounded-full border border-primary bg-primary px-12 py-3 text-center text-sm font-medium text-white shadow-sm transition-all duration-500 hover:bg-primary-500">Add
                                                        to cart</a>
                                                    <div
                                                        class="relative z-10 inline-flex justify-between border border-default-200 p-1.5 rounded-full">
                                                        <button type="button"
                                                            class="minus flex-shrink-0 bg-default-200 text-default-800 rounded-full h-8 w-8 text-xl inline-flex items-center justify-center"
                                                            fdprocessedid="a8oxv">–</button>
                                                        <input type="text"
                                                            class="w-10 border-0 text-center focus:ring-0 p-0 bg-transparent text-default-950"
                                                            value="5" min="0" max="100" readonly="" fdprocessedid="3o9fio">
                                                        <button type="button"
                                                            class="plus flex-shrink-0 bg-default-200 text-default-800 rounded-full h-8 w-8 text-xl inline-flex items-center justify-center"
                                                            fdprocessedid="otf8w">+</button>
                                                    </div>
                                                </div>
                                                <div class="flex items-center gap-4">
                                                    <h4 class="font-semibold text-lg sm:text-2xl text-primary">$15 <span
                                                            class="align-baseline text-xl text-default-400 font-medium line-through">$25</span>
                                                    </h4>
                                                    <div class="flex items-center gap-2">
                                                        <div class="flex gap-1.5">
                                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                    height="24" viewBox="0 0 24 24" fill="none"
                                                                    stroke="currentColor" stroke-width="2"
                                                                    stroke-linecap="round" stroke-linejoin="round"
                                                                    data-lucide="star"
                                                                    class="lucide lucide-star w-5 h-5 fill-yellow-400 text-yellow-400">
                                                                    <polygon
                                                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                                    </polygon>
                                                                </svg></span>
                                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                    height="24" viewBox="0 0 24 24" fill="none"
                                                                    stroke="currentColor" stroke-width="2"
                                                                    stroke-linecap="round" stroke-linejoin="round"
                                                                    data-lucide="star"
                                                                    class="lucide lucide-star w-5 h-5 fill-yellow-400 text-yellow-400">
                                                                    <polygon
                                                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                                    </polygon>
                                                                </svg></span>
                                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                    height="24" viewBox="0 0 24 24" fill="none"
                                                                    stroke="currentColor" stroke-width="2"
                                                                    stroke-linecap="round" stroke-linejoin="round"
                                                                    data-lucide="star"
                                                                    class="lucide lucide-star w-5 h-5 fill-yellow-400 text-yellow-400">
                                                                    <polygon
                                                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                                    </polygon>
                                                                </svg></span>
                                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                    height="24" viewBox="0 0 24 24" fill="none"
                                                                    stroke="currentColor" stroke-width="2"
                                                                    stroke-linecap="round" stroke-linejoin="round"
                                                                    data-lucide="star"
                                                                    class="lucide lucide-star w-5 h-5 fill-yellow-400 text-yellow-400">
                                                                    <polygon
                                                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                                    </polygon>
                                                                </svg></span>
                                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                    height="24" viewBox="0 0 24 24" fill="none"
                                                                    stroke="currentColor" stroke-width="2"
                                                                    stroke-linecap="round" stroke-linejoin="round"
                                                                    data-lucide="star"
                                                                    class="lucide lucide-star w-5 h-5 fill-default-200 text-default-200">
                                                                    <polygon
                                                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                                    </polygon>
                                                                </svg></span>
                                                        </div>
                                                        <h6 class="text-xs text-default-500 mt-1">(45)</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end grow -->
                                    </div><!-- end grow -->
                                </div><!-- end flex -->
                            </div><!-- end grid-col -->

                        </div><!-- end grid -->

                        <VuePagination />
                    </div><!-- end width -->
                </div><!-- end flex -->
            </div>
        </section>
    </div>
</template>