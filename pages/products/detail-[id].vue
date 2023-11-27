<template>
    <section class="">
        <VueBreadCrumb />
        <div class="container">
            <div class="grid lg:grid-cols-2 gap-6">
                <div class="grid grid-cols-1">
                    <div>
                        <div
                            class="swiper cart-swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                            <div class="swiper-wrapper"
                                style="transition-duration: 0ms; transform: translate3d(-508px, 0px, 0px);">
                                <div class="swiper-slide swiper-slide-duplicate swiper-slide-prev"
                                    data-swiper-slide-index="2" style="width: 484px; margin-right: 24px;">
                                    <img src="/assets/burrito-bowl-3-61929adc.png" class="max-w-full h-full mx-auto">
                                </div>
                                <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="0"
                                    style="width: 484px; margin-right: 24px;">
                                    <img src="/assets/burrito-bowl-79a7c64f.png" class="max-w-full h-full mx-auto">
                                </div>
                                <div class="swiper-slide swiper-slide-next" data-swiper-slide-index="1"
                                    style="width: 484px; margin-right: 24px;">
                                    <img src="/assets/burrito-bowl-2-b0c1cb2a.png" class="max-w-full h-full mx-auto">
                                </div>
                                <div class="swiper-slide swiper-slide-duplicate-prev" data-swiper-slide-index="2"
                                    style="width: 484px; margin-right: 24px;">
                                    <img src="/assets/burrito-bowl-3-61929adc.png" class="max-w-full h-full mx-auto">
                                </div>
                                <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                                    data-swiper-slide-index="0" style="width: 484px; margin-right: 24px;">
                                    <img src="/assets/burrito-bowl-79a7c64f.png" class="max-w-full h-full mx-auto">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="swiper cart-swiper-pagination justify-center swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-watch-progress swiper-backface-hidden swiper-thumbs">
                        <div class="swiper-wrapper justify-center gap-2 w-full"
                            style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
                            <div class="swiper-slide cursor-pointer !w-24 !h-24 lg:!w-32 lg:!h-32 swiper-slide-visible swiper-slide-active swiper-slide-thumb-active"
                                style="width: 100px; margin-right: 10px;">
                                <img src="/assets/burrito-bowl-79a7c64f.png" class="w-full h-full rounded">
                            </div>
                            <div class="swiper-slide cursor-pointer !w-24 !h-24 lg:!w-32 lg:!h-32 swiper-slide-visible swiper-slide-next"
                                style="width: 100px; margin-right: 10px;">
                                <img src="/assets/burrito-bowl-2-b0c1cb2a.png" class="w-full h-full rounded">
                            </div>
                            <div class="swiper-slide cursor-pointer !w-24 !h-24 lg:!w-32 lg:!h-32 swiper-slide-visible"
                                style="width: 100px; margin-right: 10px;">
                                <img src="/assets/burrito-bowl-3-61929adc.png" class="w-full h-full rounded">
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 class="text-4xl font-medium text-default-800 mb-1">Burrito Bowl</h3>
                    <h5 class="text-lg font-medium text-default-600 mb-2"><span
                            class="text-base font-normal text-default-500">by</span> Blaze Pizza</h5>

                    <div class="flex items-center gap-3 mb-3">
                        <div class="flex gap-1.5">
                            <span v-for="i in 5" :key="i">
                                <Icon name="i-heroicons-star-solid" class="fa-solid fa-star text-base text-yellow-400">
                                </Icon>
                            </span>

                        </div>
                        <div class="h-4 w-px bg-default-400"></div>
                        <h5 class="text-sm text-default-500">54 Reviews</h5>
                    </div>

                    <p class="text-sm text-default-500 mb-4">Mexican burritos are usually made with a wheat tortilla and
                        contain grilled meat, cheese toppings, and fresh vegetables which are sources of vitamins,
                        proteins,
                        fibers, minerals, and antioxidants.
                        This makes burritos a balanced meal that can be enjoyed in moderation as part of a healthy meal
                        plan.</p>

                    <div class="flex gap-2 mb-5">
                        <div v-for="i in 2" :key="i"
                            class="border border-default-200 hover:border-primary rounded-full px-3 py-1.5 flex items-center gap-2.5">
                            <Icon name="i-heroicons-star-solid" class="w-4 h-4" />
                            <span class="text-xs">Non Vegetable</span>
                        </div>

                    </div>

                    <div class="flex items-center gap-3 mb-8">
                        <h4 class="text-sm text-default-700">Size :</h4>

                        <div>
                            <input type="radio" name="option" id="1" value="1" class="peer hidden" checked="">
                            <label for="1"
                                class="w-9 h-9 flex justify-center items-center cursor-pointer select-none rounded-full text-sm text-center bg-default-200 peer-checked:bg-primary peer-checked:text-white">S</label>
                        </div>

                        <div>
                            <input type="radio" name="option" id="2" value="2" class="peer hidden">
                            <label for="2"
                                class="w-9 h-9 flex justify-center items-center cursor-pointer select-none rounded-full text-sm text-center bg-default-200 peer-checked:bg-primary peer-checked:text-white">M</label>
                        </div>

                        <div>
                            <input type="radio" name="option" id="3" value="3" class="peer hidden">
                            <label for="3"
                                class="w-9 h-9 flex justify-center items-center cursor-pointer select-none rounded-full text-sm text-center bg-default-200 peer-checked:bg-primary peer-checked:text-white">L</label>
                        </div>
                    </div>

                    <div class="flex items-center gap-2 mb-8">
                        <div class="relative z-10 inline-flex justify-between border border-default-200 p-1 rounded-full">
                            <button type="button"
                                class="minus flex-shrink-0 bg-default-200 text-default-800 rounded-full h-9 w-9 text-sm inline-flex items-center justify-center">–</button>
                            <input type="text" class="w-12 border-0 text-sm text-center focus:ring-0 p-0 bg-transparent"
                                value="1" min="0" max="100" readonly="">
                            <button type="button"
                                class="plus flex-shrink-0 bg-default-200 text-default-800 rounded-full h-9 w-9 text-sm inline-flex items-center justify-center">+</button>
                        </div>

                        <VueButton name="Buy now" type="button" className="py-3" />

                        <Icon name="i-heroicons-heart-20-solid"
                            class="lucide lucide-heart h-10 w-10 text-default-400 cursor-pointer hover:fill-red-600 hover:text-red-600 focus:fill-red-600 focus:text-red-600" />
                    </div>

                    <div class="mb-6">
                        <h4 class="text-lg font-medium text-default-700 mb-4">Nutrition Facts <span
                                class="text-sm text-default-400">(per serving)</span></h4>

                        <div class="border border-default-200 p-3 rounded-lg">
                            <div class="grid grid-cols-4 justify-center">
                                <div class="text-center">
                                    <h4 class="text-base font-medium text-default-700 mb-1">1524</h4>
                                    <h4 class="text-base text-default-700">Calories</h4>
                                </div>
                                <div class="text-center">
                                    <h4 class="text-base font-medium text-default-700 mb-1">56g</h4>
                                    <h4 class="text-base text-default-700">Fat</h4>
                                </div>
                                <div class="text-center">
                                    <h4 class="text-base font-medium text-default-700 mb-1">134g</h4>
                                    <h4 class="text-base text-default-700">Carbs</h4>
                                </div>
                                <div class="text-center">
                                    <h4 class="text-base font-medium text-default-700 mb-1">78g</h4>
                                    <h4 class="text-base text-default-700">Protein</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center">

                        <Icon name="i-heroicons-eye" class="lucide lucide-eye w-5 h-5 me-2 text-primary" />
                        <h5 class="text-sm text-default-600"><span class="text-primary font-semibold">152</span>&nbsp;
                            People are viewing this right now</h5>
                    </div>
                </div>
            </div><!-- end grid -->
        </div><!-- end container -->
    </section>
    <section class="lg:py-10 py-6">
        <div class="container">
            <h4 class="text-xl font-semibold text-default-800 mb-4">May you also like</h4>
            <div class="grid xl:grid-cols-4 sm:grid-cols-2 gap-5 mb-10">
                <div v-for="i in 4" :key="i"
                    class="group border border-default-200 rounded-lg p-4 overflow-hidden hover:border-primary transition-all duration-300">
                    <div class="relative rounded-lg overflow-hidden divide-y divide-default-200">
                        <div class="w-56 h-52 mb-4 mx-auto">
                            <img src="/assets/burger-dee4db61.png"
                                class="w-full h-full group-hover:scale-105 transition-all">
                        </div>

                        <div class="pt-2">
                            <div class="flex items-center justify-between mb-4">
                                <a href="product-detail.html"
                                    class="text-default-800 text-xl font-semibold line-clamp-1 after:absolute after:inset-0">Veg
                                    Burger</a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" data-lucide="heart"
                                    class="lucide lucide-heart h-6 w-6 text-default-200 cursor-pointer hover:text-red-500 hover:fill-red-500 relative z-10 transition-all">
                                    <path
                                        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z">
                                    </path>
                                </svg>
                            </div>
                            <span class="inline-flex items-center gap-2 mb-4">
                                <span class="bg-primary rounded-full p-1"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" data-lucide="star"
                                        class="lucide lucide-star h-3 w-3 text-white fill-white">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                        </polygon>
                                    </svg></span>
                                <span class="text-sm text-default-950 from-inherit">4.2</span>
                            </span>
                            <div class="flex items-end justify-between mb-4">
                                <h4 class="font-semibold text-xl text-default-900">$12.78</h4>
                                <div
                                    class="relative z-10 inline-flex justify-between border border-default-200 p-1 rounded-full">
                                    <button type="button"
                                        class="minus flex-shrink-0 bg-default-200 text-default-800 rounded-full h-6 w-6 text-sm inline-flex items-center justify-center"
                                        fdprocessedid="atib">–</button>
                                    <input type="text"
                                        class="w-8 border-0 text-sm text-center text-default-800 focus:ring-0 p-0 bg-transparent"
                                        value="1" min="0" max="100" readonly="" fdprocessedid="ld53w">
                                    <button type="button"
                                        class="plus flex-shrink-0 bg-default-200 text-default-800 rounded-full h-6 w-6 text-sm inline-flex items-center justify-center"
                                        fdprocessedid="gbgc5x">+</button>
                                </div>
                            </div>

                            <VueButton name="Add to cart" type="button" className="py-3 w-full text-center" />
                        </div>
                    </div>
                </div><!-- end grid-cols -->

            </div><!-- end grid -->

            <ProductsRating />

            <div class="pt-10 md:m-8">
                <h4 class="text-base font-medium text-default-800">Customer Review</h4>

                <div v-for="i in 6" :key="i" class="border-b mb-2 border-default-200 py-5">
                    <div class="flex items-center mb-3">
                        <img src="/assets/avatar1-25906796.png" class="h-12 w-12 rounded-full me-4">
                        <div class="">
                            <div class="flex items-center gap-2 mb-2">
                                <h4 class="text-sm font-medium text-default-800">Jaylon Botosh</h4>
                                <i class="fa-solid fa-circle text-[5px] text-default-400"></i>
                                <h4 class="text-sm font-medium text-default-400">Just now</h4>
                            </div>
                            <div class="flex gap-1.5">
                                <span><i class="fa-solid fa-star text-base text-yellow-400"></i></span>
                                <span><i class="fa-solid fa-star text-base text-yellow-400"></i></span>
                                <span><i class="fa-solid fa-star text-base text-yellow-400"></i></span>
                                <span><i class="fa-solid fa-star text-base text-default-200"></i></span>
                                <span><i class="fa-solid fa-star text-base text-default-200"></i></span>
                            </div>
                        </div>
                    </div>
                    <p class="text-default-600">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                        blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi,
                        id
                        est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                </div><!-- end card -->

            </div><!-- end py -->
        </div>
    </section>
</template>