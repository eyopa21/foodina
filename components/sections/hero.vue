<template>
    <section class="lg:py-0 py-6 relative ">
        <div class="absolute inset-0 blur-[60px] bg-gradient-to-l from-orange-600/20 via-orange-600/5 to-orange-600/0">

        </div>
        <div class="container relative">
            <div class="grid lg:grid-cols-2 items-center">
                <div class="py-20 px-10">
                    <div class="flex items-center justify-center lg:justify-start order-last lg:order-first z-10">
                        <div class="text-center lg:text-start">
                            <span
                                class="inline-flex py-2 px-4 text-sm text-primary rounded-full bg-primary/20 mb-8 lg:mb-2">#Special
                                Food 🍇</span>
                            <h1
                                class="lg:text-6xl/normal md:text-5xl/snug text-3xl font-bold text-default-950 capitalize mb-5">
                                We
                                Offer
                                <span class="inline-flex relative">
                                    <span>Delicious</span>
                                    <img src="data:image/png;base64,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"
                                        class="absolute z-10 h-full w-full lg:flex hidden">
                                </span>
                                <span class="text-primary">Food</span> And Quick Service
                            </h1>
                            <p class="text-lg text-default-700 font-medium mb-8 md:max-w-md lg:mx-0 mx-auto">Imagine you
                                don’t need
                                a diet because we provide healthy and delicious food for you!.</p>
                            <div class="flex flex-wrap  items-center justify-center lg:justify-normal gap-5 mt-10">
                                <VueButton name="Order now" type="button" className="py-5 " />
                                <a href="javascript:void(0)"
                                    class="group text-primary transition-all duration-1000 hover:scale-[105%] flex items-center">
                                    <span
                                        class="h-14 w-14 rounded-full border-2 border-e-transparent border-yellow-400 flex items-center justify-center me-2">
                                        <Icon name="i-heroicons-play-20-solid" class="h-6 w-6 fill-primary"></Icon>
                                    </span>
                                    <span class="font-semibold group-hover:border-b border-primary">How to Order</span>
                                </a>
                            </div>
                            <div class="mt-14">
                                <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                                    <div class="flex items-center -space-x-1">
                                        <div v-for="i in 3" :key="i" class="h-12 w-12">
                                            <NuxtImg provider="cloudinary" loading="lazy" placeholder
                                                class="h-full w-full rounded-full object-cover object-center ring ring-default-50"
                                                src="/v1699086989/hxhsmc9ihoavcpogkyxw.jpg" />
                                        </div>

                                    </div>
                                    <div>
                                        <h1 class="text-base font-medium text-default-800">Our Happy Customer</h1>
                                        <p class="text-base text-default-900">
                                            <Icon name="i-heroicons-star-solid"
                                                class="h-4 w-4 inline text-yellow-400 fill-yellow-400" /> 4.7 <span
                                                class="text-default-500 text-sm">(13.7k Reviews)</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- end grid-col -->

                <div class="relative flex items-center justify-center py-20">
                    <span class="absolute top-0 start-0 text-3xl -rotate-[40deg]">🔥</span>
                    <span
                        class="absolute top-0 end-[10%] -rotate-12 h-14 w-14 inline-flex items-center justify-center bg-yellow-400 text-white rounded-lg">
                        <Icon name="i-heroicons-clock" class="h-6 w-6" />
                    </span>
                    <span
                        class="absolute top-1/4 end-0 -rotate-12 h-4 w-4 inline-flex items-center justify-center bg-primary text-white rounded"></span>
                    <div class="absolute bottom-1/4 -end-0 2xl:-end-24 hidden md:block lg:hidden xl:block">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAACpCAMAAACCueo0AAAAQlBMVEUAAAD/xwD/xwD/ywD/xwD/xgD/xwD/xwD/xgD/xgD/xwD/xwD/xwD/xwD/xQD/wwD/xwD/xwD/xwD/yAD/xgD/xwBcJNpgAAAAFXRSTlMAIN8Q72C/nzCQcFDPQIBAgI+vf6De6s6XAAADjklEQVRo3u2a626jMBCFPb7hGzQhnfd/1XUEuwQoWzscS6ma86eVqn6ZwZ5rEEKJBuqkgzMNM18VGioz1Quw6JO5E3CZoMRPUidvcCbdbwGcmjI1EZrqM1XCqZdM1R9oatQZG9FUki0CgZKO4rfLjVc81LY4rsAtqJcfRr01oRo49RNfD7MG/7NKVwuFq4IzI7OFQ/ulxoKva4BTPzPVoaEqMUv4YZFudVgfcOoF/1SzYi9+uz4inkmnw1U5Y4Kaf51+ulP3SoVR8l2juEsya3uNTownAuvGk+YKrXiWzFAenoTKO0GnsZvdvyTN/6TpOWiQNmz+VfWDzWT7TIel/nsOvVH3HGBsMnX9fvi+GbxLFmNddtB/nwS9rMCSLJmhFAky5dixYi7L2KLCZeoK0SVjU8ntHOoWDzIWGFrqfJdMeRk2xclKP1pjxKHI2tJcoR+TlQEN85fHWI2gYb7P/qv1MA+otHKVrHsNGQ38OpxJfk0lm1yV/1JsqfsEF6vypMoOqy3V76eQutnGstx5SntoXYyqWHCnJyhA7aEGMjCHFOFQ2hRwd8+4Fbp+1VUpuW7ila6DMvNXQbEpMdHTeajwS6qpFy1xunsAw4nkZw+nGHr+Bo5F6yylqnLfcDxwrRJNqFkzfxwW0G51U3XNQvz4j9saWZ5Pu+IaaYtNNar041vMtJ8Fplb346RBa3PJdvVUZUG/na7fJwb1ELkFUJLftrF25TF5B+jht71GkZ3sYNuxhWmKG9hF5nronStgzsG5ZrjjZ6YyU5uyfON2gaXDUcxJ91yr7zKVuy+NpUCl6TbuT2OLVTdTdUdGv3fT36npXyQHC1hLzld8nqtnGcRyb3BTxE2yUUC/ltGpMy+xl29hhAGvcJfch1YCV7sl9cO070te+yuMv+3by5+TanROVsDlpRNvvbrcQHAmyQb36cacGhjKpoGhEm4oNzC0a2MoPuk1eStIsyY4NHbvN42Aoi4A4jEe7L5PqN9syq7MTIB4DJvvLwdE7KR1F+8BLdgmyp2FZCN8G6J5MRX5YjH8LeBxgmoF7RVnDWjv0UdlZ6YmZCWaFRp4303bBaj3Uk3rH2mA3pMQYcYbAnk/CLL8V/J2Epvm9z6C5kd1dNp76ezCOx+0foLqDVKfslTyXtr36uQ4tydC0vMiuRBB3ttLLxDqF2IgXKs8ExW2rdUWvVDzL7Kie+utt36V/gAoj0UJQoRlYQAAAABJRU5ErkJggg==">
                        <div class="flex items-center gap-2 p-2 pe-6 bg-default-50 rounded-full shadow-lg">
                            <NuxtImg provider="cloudinary" placeholder loading="lazy"
                                src="/v1699086989/hxhsmc9ihoavcpogkyxw.jpg" class="h-16 w-16 rounded-full"
                                alt="owner image" />
                            <div class="">
                                <h6 class="text-sm font-medium text-default-900">Eyob Nigussie</h6>
                                <p class="text-[10px] font-medium text-default-900">Healthy and Delicious Food</p>
                                <span class="inline-flex gap-0.5">
                                    <Icon v-for="i in 3" :key="i" name="i-heroicons-star-solid"
                                        class="h-3 w-3 text-yellow-400 fill-yellow-400" />

                                </span>
                            </div>
                        </div>
                    </div>
                    <span
                        class="absolute bottom-0 end-0 -rotate-12 h-4 w-4 inline-flex items-center justify-center bg-primary text-white rounded-full"></span>
                    <span class="absolute -bottom-16 end-1/3 text-3xl">🔥</span>
                    <div class="absolute bottom-0 start-0">
                        <div class="flex items-center gap-2 p-2 pe-6 bg-default-50 rounded-full shadow-lg">
                            <span class="inline-flex items-center justify-center h-16 w-16 bg-primary/20 rounded-full"><img
                                    src="/assets/burger-1-0c3ba5a6.svg" class="h-10 w-10 rounded-full"></span>
                            <div class="">
                                <h6 class="text-sm font-medium text-default-900">MCD Veg Burger</h6>
                                <span class="inline-flex gap-0.5">
                                    <Icon v-for="i in 3" :key="i" name="i-heroicons-star-solid"
                                        class="h-3 w-3 text-yellow-400 fill-yellow-400" />
                                    <Icon v-for="i in 2" :key="i" name="i-heroicons-star"
                                        class="h-3 w-3 text-yellow-400 fill-yellow-400" />



                                </span>
                                <h6 class="text-sm font-medium text-default-900"><span class="text-sm text-primary">$</span>
                                    8.14</h6>
                            </div>
                        </div>
                    </div>
                    <!-- end icons && img -->

                    <NuxtImg quality="100" provider="cloudinary" placeholder loading="lazy"
                        src="/v1701161319/pizza1_lfrymw.jpg" class="mx-auto w-full h-full -mt-72 rounded-xl"
                        alt="main image" />
                </div><!-- end grid-col -->
            </div><!-- end grid -->
        </div><!-- end container -->
    </section>
</template>