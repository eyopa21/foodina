<template>
    <section class="lg:py-16 py-6 m-8">
        <div class="container  md:p-32 border-2 border-primary rounded-xl ">
            <div class="grid lg:grid-cols-2 grid-cols-1 items-center gap-20">
                <div>
                    <div class="relative">
                        <img src="/assets/testimonial-img-11d36fc9.png" class="lg:mx-0 mx-auto">

                        <div class="absolute -bottom-10 end-20">
                            <div class="bg-white shadow-lg rounded-xl dark:bg-default-100">
                                <div class="p-6">
                                    <h6 class="text-base font-semibold text-default-900 mb-2">Our Reviewers</h6>
                                    <div class="flex items-center justify-center -space-x-1">
                                        <div v-for="i in 3" :key="i" class="h-12 w-12">
                                            <NuxtImg provider="cloudinary" loading="lazy" placeholder
                                                class="h-full w-full rounded-full object-cover object-center ring ring-default-100"
                                                src="/v1699086989/hxhsmc9ihoavcpogkyxw.jpg" />
                                        </div>

                                        <div
                                            class="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-primary text-default-50 font-medium ring ring-default-100">
                                            <span class="text-base"> 12K </span>
                                        </div>
                                    </div>
                                </div>
                            </div><!-- end Reviewers -->
                        </div>
                    </div>
                </div>

                <div>
                    <span
                        class="inline-flex py-2 px-4 text-sm text-primary rounded-full bg-primary/20 mb-6">Testimonials</span>
                    <h2 class="text-3xl font-semibold text-default-900 max-w-xl mb-4">What They Say About Us.</h2>

                    <div class="product-img-slider sticky-side-div">
                        <div class="swiper clients-testimonial p-2 ">
                            <div class="swiper-wrapper mb-4">
                                <div class="swiper-slide">
                                    <div class="relative cursor-pointer">
                                        <div class="flex items-center gap-3 mb-12">

                                            <NuxtImg provider="cloudinary" loading="lazy" placeholder
                                                class="h-12 w-12 rounded-full"
                                                src="/v1699086989/hxhsmc9ihoavcpogkyxw.jpg" />
                                            <div class="">
                                                <h6 class="text-base/none font-medium text-default-900 mb-2">Eyob
                                                    Nigussie</h6>
                                                <div class="flex gap-1.5">
                                                    <button v-for="i in 5" :key="i">
                                                        <Icon name="i-heroicons-star-solid"
                                                            class="h-4 w-4 text-yellow-400 fill-yellow-400"></Icon>
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="relative px-12">
                                            <div class="absolute -top-5 start-0">
                                                <Icon name="i-material-symbols-format-quote"
                                                    class="h-8 w-8 text-primary fill-primary rotate-180" />
                                            </div>
                                            <div class="absolute -bottom-5 end-0">
                                                <Icon name="i-material-symbols-format-quote"
                                                    class="h-8 w-8 text-primary fill-primary" />
                                            </div>
                                            <p class="text-base text-default-400 font-medium">Food is the best. Besides the
                                                many and
                                                delicious meals, the service is also very good, especially in the very fast
                                                delivery. I highly
                                                recommend Food to you.</p>
                                        </div>
                                    </div>
                                </div><!-- end slide -->

                            </div>
                        </div>
                        <div class="swiper h-24 clients-testimonial-pagination relative !mt-6">
                            <div class="swiper-wrapper ps-12 !py-6 space-x-2">
                                <div v-for="i in 4" :key="i" class="swiper-slide cursor-pointer !w-12 !h-12">
                                    <NuxtImg provider="cloudinary" loading="lazy" placeholder class="h-12 w-12 rounded-full"
                                        src="/v1699086989/hxhsmc9ihoavcpogkyxw.jpg" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>