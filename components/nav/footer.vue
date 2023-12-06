<template>
    <footer class="border-t border-default-200 max-w-full">
        <div class="container">
            <div class="grid lg:grid-cols-3 items-center gap-6 lg:py-10 py-6">
                <div class="lg:col-span-2">
                    <div class="grid md:grid-cols-4 grid-cols-2 gap-6 mb-6">
                        <div class="flex flex-col gap-3">
                            <h5 class="mb-3 font-semibold text-default-950">About</h5>
                            <div class="text-default-600">
                                <NuxtLink to="/about">About Us</NuxtLink>
                            </div>
                            <div class="text-default-600">
                                <NuxtLink to="/services">Features</NuxtLink>
                            </div>
                            <div class="text-default-600">
                                <NuxtLink to="/blog">News</NuxtLink>
                            </div>

                            <div class="text-default-600">
                                <NuxtLink to="/services">Services</NuxtLink>
                            </div>
                        </div>

                        <div class="flex flex-col gap-3">
                            <h5 class="mb-3 font-semibold text-default-950">Company</h5>
                            <div class="text-default-600">
                                <NuxtLink to="/team">Our Team</NuxtLink>
                            </div>
                            <div class="text-default-600">
                                <NuxtLink to="/contact">Partner with Us</NuxtLink>
                            </div>
                            <div class="text-default-600">
                                <NuxtLink to="/faqs">FAQs</NuxtLink>
                            </div>

                        </div>

                        <div class="flex flex-col gap-3">
                            <h5 class="mb-3 font-semibold text-default-950">Support</h5>
                            <div class="text-default-600">
                                <NuxtLink to="/contact">About</NuxtLink>
                            </div>
                            <div class="text-default-600">
                                <NuxtLink to="/contact">Support Center</NuxtLink>
                            </div>
                            <div class="text-default-600">
                                <NuxtLink to="/contact">Feedback</NuxtLink>
                            </div>
                            <div class="text-default-600">
                                <NuxtLink to="/contact">Contact Us</NuxtLink>
                            </div>
                            <div class="text-default-600">
                                <NuxtLink to="/contact">Accessibility</NuxtLink>
                            </div>
                        </div>

                        <div class="flex flex-col gap-3">
                            <h5 class="mb-3 font-semibold text-default-950">Get in touch</h5>
                            <div class="text-default-600 hover:underline truncate"><a href="tel:0918784596">(+251)
                                    918784596</a>
                            </div>
                            <div class="text-default-600 hover:underline truncate"><a
                                    href="mailto:jobtennis21@gmail.com">jobtennis21@mail.com</a>
                            </div>
                            <div class="flex items-center gap-4">
                                <a v-for="i in 3" :key="i" href="#!" class="cursor-pointer">

                                    <Icon name="i-heroicons-arrow-right-20-solid"
                                        class="h-6 w-6 transition-all text-default-600 hover:text-primary"></Icon>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="flex flex-col gap-3">
                        <div class="bg-primary/10 rounded-lg">
                            <div class="p-8">
                                <form class="space-y-2 mb-6">
                                    <label for="subscribeEmail"
                                        class="text-lg font-medium text-default-950 mb-4">Subscribe</label>
                                    <div class="flex rounded-md shadow-sm">
                                        <VueInput type="email" name="subscribe" placeholder="Email address" />

                                        <button type="button"
                                            class="inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] rounded-e-md border border-transparent font-semibold bg-primary text-white hover:bg-primary-500 transition-all text-sm">
                                            <Icon name="i-heroicons-arrow-right-20-solid" class="h-5 w-5"></Icon>
                                        </button>
                                    </div>
                                </form>
                                <p class="text-sm text-default-500 mb-6">Foodina is a self-service shop offering a wide
                                    variety of
                                    food,
                                    beverages &amp; household products we’re engage with their clients &amp; their team.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-6 border-t border-default-200 lg:flex hidden">
                <div class="container">
                    <div class="grid lg:grid-cols-2 items-center gap-6">
                        <div>
                            <p class="text-default-600">
                                2023 Developed with <i data-lucide="heart"
                                    class="inline h-4 w-4 text-red-500 fill-red-500"></i> by
                                Eyob Nigussie
                            </p>
                        </div>

                        <div class="flex justify-end gap-6">
                            <a class="text-default-500 font-medium">
                                Terms
                            </a>
                            <a class="text-default-500 font-medium">
                                Privacy
                            </a>
                            <a class="text-default-500 font-medium">
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>