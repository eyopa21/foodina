<template>
    <section class="lg:py-16 py-6 m-4 md:m-16 border-2 border-primary rounded-2xl">
        <div class="container">
            <div class="grid lg:grid-cols-2 items-start gap-10">
                <div
                    class="flex items-center justify-center h-96 mt-32 align-middle place-content-center w-full bg-default-500/5 rounded-lg">
                    <img src="/assets/about-us-d5778dfe.png" class="h-full w-full py-16">
                </div>
                <div class="">
                    <span class="inline-flex py-2 px-4 text-sm text-primary rounded-full bg-primary/20 mb-6">About Us</span>
                    <h2 class="text-3xl font-semibold text-default-900 max-w-xl mb-6">Where quality food meet Excellent
                        services.</h2>
                    <p class="text-default-500 font-medium max-w-2xl mb-16 xl:mb-20">It’s the perfect dining experience
                        where
                        every dish is crafted with fresh, high-quality ingredients and served by friendly staff who go.</p>

                    <div class="grid xl:grid-cols-3 sm:grid-cols-2 gap-4">
                        <div v-for="i in 3" :key="i"
                            class="bg-transparent rounded-md shadow-lg border border-default-100 hover:border-primary transition-all duration-200">
                            <div class="p-6">
                                <div class="mb-2">
                                    <img src="data:image/png;base64,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"
                                        class="">
                                </div>
                                <h3 class="text-xl font-medium text-default-900 mb-6">Fast Foods</h3>
                                <p class="text-base text-default-500">Healthy Foods are nutrient-Dense Foods</p>
                            </div>
                        </div><!-- end grid-cols -->

                    </div><!-- end grid -->

                    <div class="flex flex-wrap items-center md:justify-start justify-center gap-4 mt-10">

                        <VueButton name="Get started" type="button" className="py-3" />
                        <div class=" group hover:scale-[105%] translate-all duration-300 flex items-center gap-2">
                            <img src="/assets/avatar3-2bbdc0fd.png" class="h-12 w-12 rounded-full">
                            <div class="">
                                <h6 class="text-base font-medium text-default-900">Marley Culhane</h6>
                                <p class="text-sm font-medium text-default-500">Founder CEO</p>
                            </div>
                        </div>
                    </div><!-- end flex -->
                </div>
            </div>
        </div>
    </section>
</template>