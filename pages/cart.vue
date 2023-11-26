<template>
    <div>

        <section class="lg:py-10 py-6">
            <VueBreadCrumb />
            <div class="container">
                <div class="grid lg:grid-cols-3 grid-cols-1 gap-6">
                    <div class="lg:col-span-2 col-span-1">
                        <div class="border border-default-200 rounded-lg">
                            <div class="border-b border-default-200 px-6 py-5">
                                <h4 class="text-lg font-medium text-default-800">Shopping Cart</h4>
                            </div>

                            <div class="flex flex-col overflow-hidden">
                                <div class="-m-1.5 overflow-x-auto">
                                    <div class="p-1.5 min-w-full inline-block align-middle">
                                        <div class="overflow-hidden">
                                            <table class="min-w-full divide-y divide-default-200">
                                                <thead class="bg-default-400/10">
                                                    <tr>
                                                        <th scope="col"
                                                            class="min-w-[14rem] px-5 py-3 text-start text-xs font-medium text-default-500 uppercase">
                                                            Products</th>
                                                        <th scope="col"
                                                            class="px-5 py-3 text-start text-xs font-medium text-default-500 uppercase">
                                                            Price</th>
                                                        <th scope="col"
                                                            class="px-5 py-3 text-start text-xs font-medium text-default-500 uppercase">
                                                            Quantity</th>
                                                        <th scope="col"
                                                            class="px-5 py-3 text-center text-xs font-medium text-default-500 uppercase">
                                                            Sub-Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="divide-y divide-default-200">
                                                    <tr v-for="i in 4" :key="i">
                                                        <td class="px-5 py-3 whitespace-nowrap">
                                                            <div class="flex items-center gap-2">
                                                                <button fdprocessedid="t3bs79"><svg
                                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24" fill="none"
                                                                        stroke="currentColor" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"
                                                                        data-lucide="x-circle"
                                                                        class="lucide lucide-x-circle w-5 h-5 text-default-400">
                                                                        <circle cx="12" cy="12" r="10"></circle>
                                                                        <path d="m15 9-6 6"></path>
                                                                        <path d="m9 9 6 6"></path>
                                                                    </svg></button>
                                                                <img src="/assets/onion-rings-6902e6d8.png"
                                                                    class="h-18 w-18">
                                                                <h4 class="text-sm font-medium text-default-800">Onion
                                                                    Rings
                                                                </h4>
                                                            </div>
                                                        </td>
                                                        <td class="px-5 py-3 whitespace-nowrap text-sm text-default-800">
                                                            $29
                                                        </td>
                                                        <td class="px-5 py-3 whitespace-nowrap">
                                                            <div
                                                                class="inline-flex justify-between border border-default-200 p-1 rounded-full">
                                                                <button type="button"
                                                                    class="minus flex-shrink-0 bg-default-200 text-default-800 rounded-full h-6 w-6 text-sm inline-flex items-center justify-center"
                                                                    fdprocessedid="jte3ek">–</button>
                                                                <input type="text"
                                                                    class="w-8 border-0 text-sm text-center text-default-800 focus:ring-0 p-0 bg-transparent"
                                                                    value="1" min="0" max="100" readonly=""
                                                                    fdprocessedid="z12s4o">
                                                                <button type="button"
                                                                    class="plus flex-shrink-0 bg-default-200 text-default-800 rounded-full h-6 w-6 text-sm inline-flex items-center justify-center"
                                                                    fdprocessedid="wpuepa">+</button>
                                                            </div>
                                                        </td>
                                                        <td
                                                            class="px-5 py-3 whitespace-nowrap text-sm text-center text-default-800">
                                                            $50</td>
                                                    </tr>


                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="border-t border-default-200 px-6 py-5">
                                <div class="flex flex-wrap justify-between items-center gap-2">
                                    <VueButton name="Return to Shop" mode="outline" type="button" />

                                    <VueButton name="Update Cart" mode="outline" type="button" />
                                </div>
                            </div>
                        </div><!-- end grid-cols -->
                    </div>

                    <ProductsCartTotal class="sticky top-[20%]" />
                </div>
            </div>
        </section>
    </div>
</template>