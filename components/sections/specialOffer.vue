<template>
    <section class="rounded  py-10 relative bg-no-repeat bg-cover bg-[url(/assets/offer-bg.png)]">
        <div class="absolute inset-0 "></div>
        <div class="container p-8">
            <div class="relative lg:w-1/2 w-full">
                <h4 class="font-handrawn text-2xl text-yellow-500 mb-6">Special Combo Offer</h4>
                <h2 class="text-4xl font-semibold text-white mb-8">We make best Food in your town</h2>
                <p class="text-base text-white/75 max-w-2xl mb-10">"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                <div class="inline-flex flex-wrap items-center justify-center gap-4">

                    <VueButton name="Get started" type="button" className="py-4" />
                    <h4 class="text-yellow-400 font-medium text-2xl">$23.47 <span
                            class="text-lg line-through text-white/75">$44.99</span></h4>
                </div>

                <div class="absolute end-0 lg:-bottom-16 bottom-10">
                    <img src="/assets/offer-popup-78034aee.svg" class="lg:w-auto w-20">
                </div>
            </div>
        </div><!-- end container -->
    </section>
</template>