<template>
    <div class="">

        <VueBreadCrumb :name="[{ name: 'contact', to: '/contact', active: true }]" />
        <section class="lg:py-16 py-6">
            <div class="container ">
                <div class="grid lg:grid-cols-5 gap-10">
                    <div class="lg:col-span-2">
                        <h1 class="text-2xl font-semibold text-default-800 mb-2">Contact Information</h1>
                        <p class="text-sm text-default-600 max-w-xl mb-8">Loremum et malesuada fames ac ante ipsum primis in
                            faucibus. Sed molestie accumsan dui, non iaculis.</p>

                        <div class="flex items-center justify-center">
                            <img src="/assets/contact-9b0d2548.png" class="max-w-full h-full">
                        </div>
                    </div><!-- end grid-cols -->

                    <div class="lg:col-span-3">
                        <form>
                            <div class="grid lg:grid-cols-2 gap-6">
                                <div>


                                    <VueInput name="name" label="Name" type="text" placeholder="Your name here..." />
                                </div>
                                <div>


                                    <VueInput name="subject" label="Subject" type="text" placeholder="The subject here.." />
                                </div>
                                <div class="lg:col-span-2">

                                    <VueInput name="email" label="Email" type="email" placeholder="Your email here.." />
                                </div>
                                <div class="lg:col-span-2">
                                    <label class="block text-base/normal text-default-950 mb-2"
                                        for="message">Message</label>
                                    <textarea id="message"
                                        class="block w-full rounded-lg py-2.5 px-4 bg-transparent dark:bg-default-50 border border-default-200 focus:ring-transparent focus:border-default-200"
                                        rows="5" type="text" placeholder="Enter your message"></textarea>
                                </div>
                                <div>

                                    <VueButton name="Send Message" type="submit" className="py-3" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div><!-- end grid -->
            </div><!-- end container -->
        </section>
        <section class="lg:py-16 py-6">
            <div class="container">
                <div class="grid lg:grid-cols-3 gap-6">
                    <div class="bg-default-400/10 rounded-lg">
                        <div class="p-8">
                            <div class="flex items-center gap-4 mb-6">
                                <span class="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" data-lucide="phone"
                                        class="lucide lucide-phone h-5 w-5 text-primary fill-white">
                                        <path
                                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                        </path>
                                    </svg>
                                </span>
                                <h4 class="text-lg font-medium text-default-950">Call Us</h4>
                            </div>
                            <p class="text-default-500 text-sm mb-2">+1 234 XXXX 123</p>
                            <p class="text-default-500 text-sm">+1 234 XXXX 567</p>
                        </div>
                    </div><!-- end grid-cols -->
                    <div class="bg-default-400/10 rounded-lg">
                        <div class="p-8">
                            <div class="flex items-center gap-4 mb-6">
                                <span
                                    class="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" data-lucide="mail"
                                        class="lucide lucide-mail h-5 w-5 text-primary fill-white">
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </svg>
                                </span>
                                <h4 class="text-lg font-medium text-default-950">Email</h4>
                            </div>
                            <p class="text-default-500 text-sm mb-2">demomail123@mail.com</p>
                            <p class="text-default-500 text-sm">helpdemo123@mail.com</p>
                        </div>
                    </div><!-- end grid-cols -->
                    <div class="bg-default-400/10 rounded-lg">
                        <div class="p-8">
                            <div class="flex items-center gap-4 mb-6">
                                <span
                                    class="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" data-lucide="map-pin"
                                        class="lucide lucide-map-pin h-5 w-5 text-primary fill-white">
                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </span>
                                <h4 class="text-lg font-medium text-default-950">Address</h4>
                            </div>
                            <p class="text-default-500 text-sm mb-2">37125 Maya Estate Dr, Victoria Road,</p>
                            <p class="text-default-500 text-sm">Warsaw, Poland - 234834</p>
                        </div>
                    </div><!-- end grid-cols -->
                </div><!-- end grid -->
            </div><!-- container -->
        </section>
    </div>
</template>