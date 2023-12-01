<script setup>
const layout = useLayout();
const mainData = useData();

const items = [
    [{
        label: 'Date',

    }, {
        label: 'Nme',

    },
    {
        label: 'Price',

    }]
]

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


                                    <UDropdown :items="items" :popper="{ placement: 'bottom-start' }"
                                        :ui="{ background: 'bg-white dark:bg-gray-900', item: { active: 'bg-primary dark:bg-primary' } }">
                                        <button type="button"
                                            class="hs-dropdown-toggle flex items-center gap-2 font-medium text-default-950 text-sm py-2.5 px-4 xl:px-5 rounded-full border border-default-200 transition-all">
                                            Latest
                                            <Icon name="i-material-symbols-light-sort" class="w-5 h-5 font-bold" />
                                        </button>
                                    </UDropdown>
                                </div>
                            </div>
                        </div><!-- end flex -->

                        <div class="grid grid-cols-1 gap-5">

                            <div v-for="i in mainData.foods" :key="i"
                                class="border border-default-200 rounded-lg p-4 hover:border-primary transition-all duration-300 drak:hover:shadow-[0px_0px_16px_0px_rgba(245,130,32,0.50)]">
                                <div class="flex flex-col md:flex-row md:items-center justify-center gap-4 relative">
                                    <div class="shrink-0">
                                        <div class="w-full h-full">


                                            <NuxtImg quality="100" provider="cloudinary" placeholder loading="lazy"
                                                src="/v1701161319/pizza1_lfrymw.jpg" class="w-full h-48" />

                                        </div>
                                    </div><!-- end shrink-0 -->
                                    <div class="flex-grow flex items-center gap-4">
                                        <div class="grow">
                                            <div class="group">
                                                <div class="flex items-center justify-between mb-4">
                                                    <NuxtLink :to="`/products/detail-${i.id}`"
                                                        class="text-default-800 group-hover:text-primary text-2xl font-semibold line-clamp-1 after:absolute after:inset-0">
                                                        {{ i.name }}
                                                    </NuxtLink>

                                                    <Icon name="i-heroicons-heart"
                                                        class="relative z-10 h-6 w-6 text-default-200 cursor-pointer hover:text-red-500 " />
                                                </div>
                                                <p class="text-base text-default-600 max-w-2xl line-clamp-2 mb-6">Lorem
                                                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                    tempor
                                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                                </p>
                                                <div class="flex flex-wrap md:flex-nowrap items-center gap-4 mb-6">
                                                    <button>

                                                        <VueButton name="Add to cart" type="button" className="py-3" />
                                                    </button>

                                                    <div
                                                        class="relative z-10 inline-flex justify-between border border-default-200 p-1.5 rounded-full">
                                                        <button @click="i.amount--" type="button"
                                                            class="minus flex-shrink-0 bg-default-200 text-default-800 rounded-full h-8 w-8 text-xl inline-flex items-center justify-center">–</button>
                                                        <input type="number"
                                                            class="w-10 border-0 text-center focus:ring-0 p-0 bg-transparent text-default-950"
                                                            v-model="i.amount" min="0" max="100">
                                                        <button @click="i.amount++" type="button"
                                                            class="plus flex-shrink-0 bg-default-200 text-default-800 rounded-full h-8 w-8 text-xl inline-flex items-center justify-center">+</button>
                                                    </div>
                                                </div>
                                                <div class="flex items-center gap-4">
                                                    <h4 class="font-semibold text-lg sm:text-2xl text-primary">$15 <span
                                                            class="align-baseline text-xl text-default-400 font-medium line-through">$25</span>
                                                    </h4>
                                                    <div class="flex items-center gap-2">
                                                        <div class="flex gap-1.5">
                                                            <span v-for="i in 5" :key="i">
                                                                <Icon name="i-heroicons-star-solid"
                                                                    class="lucide lucide-star w-5 h-5 fill-yellow-400 text-yellow-400" />
                                                            </span>

                                                        </div>
                                                        <h6 class="text-xs text-default-500 mt-1">(45)</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <VuePagination />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>