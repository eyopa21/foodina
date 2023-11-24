<template>
    <div>
        <section class="lg:flex items-center hidden bg-default-400/10 h-14">
            <div class="container">
                <div class="flex items-center">
                    <ol aria-label="Breadcrumb" class="flex items-center whitespace-nowrap min-w-0 gap-2">
                        <li class="text-sm">
                            <a class="flex items-center gap-2 align-middle text-default-800 transition-all leading-none hover:text-primary-500"
                                href="javascript:void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" data-lucide="home" class="lucide lucide-home w-4 h-4">
                                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                                Home
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" data-lucide="chevron-right"
                                    class="lucide lucide-chevron-right w-4 h-4">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </a>
                        </li>


                        <li aria-current="page"
                            class="text-sm font-medium text-primary truncate leading-none hover:text-primary-500">
                            Contact us
                        </li>
                    </ol>
                </div>
            </div>
        </section>
        <section class="lg:py-16 py-6">
            <div class="container">
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
                                    <label class="block text-base/normal text-default-950 mb-2" for="firstName">First
                                        Name</label>
                                    <input id="firstName"
                                        class="block w-full rounded-full py-2.5 px-4 bg-transparent dark:bg-default-50 border border-default-200 focus:ring-transparent focus:border-default-200"
                                        type="text" placeholder="First name" fdprocessedid="z3ntk">
                                </div>
                                <div>
                                    <label class="block text-base/normal text-default-950 mb-2" for="lastName">Last
                                        Name</label>
                                    <input id="lastName"
                                        class="block w-full rounded-full py-2.5 px-4 bg-transparent dark:bg-default-50 border border-default-200 focus:ring-transparent focus:border-default-200"
                                        type="text" placeholder="Last Name" fdprocessedid="exe59h">
                                </div>
                                <div class="lg:col-span-2">
                                    <label class="block text-base/normal text-default-950 mb-2" for="e_mail">E-mail</label>
                                    <input id="e_mail"
                                        class="block w-full rounded-full py-2.5 px-4 bg-transparent dark:bg-default-50 border border-default-200 focus:ring-transparent focus:border-default-200"
                                        type="email" placeholder="Enter your email" fdprocessedid="pwxu9">
                                </div>
                                <div class="lg:col-span-2">
                                    <label class="block text-base/normal text-default-950 mb-2"
                                        for="message">Message</label>
                                    <textarea id="message"
                                        class="block w-full rounded-lg py-2.5 px-4 bg-transparent dark:bg-default-50 border border-default-200 focus:ring-transparent focus:border-default-200"
                                        rows="5" type="text" placeholder="Enter your message"></textarea>
                                </div>
                                <div>
                                    <a href="javascript:void(0)"
                                        class="inline-flex items-center justify-center px-10 py-3 rounded-full text-base font-medium bg-primary text-white capitalize transition-all hover:bg-primary-500">Send
                                        Message</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div><!-- end grid -->
            </div><!-- end container -->
        </section>
    </div>
</template>