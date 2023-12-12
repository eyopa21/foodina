<template>
    <section class="lg:py-10 py-6">
        <VueBreadCrumb :name="[{ name: 'favorite', to: '/favorite', active: true }]" />
        <div class="container pt-4">
            <div class="border border-default-200 divide-y divide-default-200 rounded-lg overflow-hidden ">
                <div v-for="i in 4" :key="i" class="px-4 py-4 flex flex-wrap justify-between items-center">
                    <div class="md:w-1/2 w-auto">
                        <div class="flex items-center">

                            <NuxtImg quality="100" provider="cloudinary" placeholder loading="lazy"
                                src="/v1701161319/pizza1_lfrymw.jpg" class="lg:h-28 lg:w-28 w-14 h-14 m-4 rounded-full" />
                            <div class="md:w-auto w-2/3">
                                <p class="text-xs font-medium text-primary mb-2">Japan Food</p>
                                <h4 class="text-xl font-semibold text-default-800 mb-2 line-clamp-1">Sushi Roll</h4>
                                <div class="flex items-center gap-2">
                                    <div class="flex items-center gap-1.5">
                                        <Icon v-for="i in 5" :key="i" name="i-heroicons-star-solid"
                                            class="lucide lucide-star h-5 w-5 text-yellow-400 fill-yellow-400" />
                                        <span class="lg:hidden flex text-primary text-base font-semibold">4.2</span>

                                    </div>
                                    <h6 class="text-sm text-default-500 font-medium mt-1">(1.2k)</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="md:w-1/4 w-auto">
                        <div class="text-end">
                            <h4 class="text-2xl font-medium text-default-500">$15</h4>
                            <h4 class="text-base font-medium text-default-500 line-through">$25</h4>
                        </div>
                    </div>

                    <div class="md:w-auto w-full lg:mt-0 mt-4">
                        <div class="flex lg:flex-col justify-between gap-2">

                            <NuxtLink to="/cart">
                                <button class="bg-primary p-2 px-4 rounded-full hover:underline text-xs text-white"
                                    type="button">Add to
                                    cart</button>
                            </NuxtLink>

                            <NuxtLink>
                                <button
                                    class="bg-white text-primary text-xs hover:underline border border-primary p-2 rounded-full text-black"
                                    type="button">Remove</button>
                            </NuxtLink>


                        </div>
                    </div>
                </div>


            </div><!-- end grid-cols -->
        </div>
    </section>
</template>