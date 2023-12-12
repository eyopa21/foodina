<template>
    <div class="relative">

        <VueBreadCrumb :name="[{ name: 'Checkout', to: '/checkout', active: true }]" />
        <section class="lg:py-10 py-6">
            <div class="container">
                <div class="grid lg:grid-cols-3 grid-cols-1 gap-6">
                    <div class="lg:col-span-2 col-span-1">
                        <div class="mb-8">
                            <h4 class="text-lg font-medium text-default-800 mb-6">Billing Information</h4>

                            <div class="grid lg:grid-cols-4 gap-6">
                                <div class="lg:col-span-2">

                                    <VueInput name="fullname" label="Full name" type="text" placeholder="Your Full here..."
                                        className="!text-sm mb-2  " />
                                </div>

                                <div class="lg:col-span-2">

                                    <VueInput name="companyname" label="Company Name(optional)" type="text"
                                        placeholder="Company Name here..." className="!text-sm mb-2  " />
                                </div>

                                <div class="lg:col-span-4">

                                    <VueInput name="adress" label="Address" type="text" placeholder="Your address here..."
                                        className="!text-sm mb-2  " />
                                </div>

                                <div class="lg:col-span-2">

                                    <VueInput name="email" label="Email" type="email" placeholder="example@gmail.com"
                                        className="!text-sm mb-2  " />
                                </div>

                                <div class="lg:col-span-2">

                                    <VueInput name="phone" label="Phone number" type="text" placeholder="09_ _ _ _ _ _ _ _"
                                        className="!text-sm mb-2  " />
                                </div>

                                <div class="flex items-center">
                                    <input
                                        class="text-primary w-5 h-5 rounded border-default-200 focus:ring-0 bg-transparent"
                                        type="checkbox">
                                    <label for="shipmentAddress" class="block text-sm text-default-700 ms-2"> Accept
                                        Company
                                        policy </label>

                                </div>
                            </div>
                        </div>

                        <div class="mb-8">
                            <h4 class="text-lg font-medium text-default-800 mb-6">Payment Option</h4>

                            <div class="border border-default-200 rounded-lg p-6 lg:w-5/6 mb-5">
                                <div class="grid lg:grid-cols-4 grid-cols-2">

                                    <div v-for="i in 4" :key="i" class="text-center p-6">
                                        <label for="paymentPaypal" class="flex flex-col items-center justify-center mb-4">
                                            <img src="/new/paypal.svg" class="w-6 h-6 mb-4">
                                            <h5 class="text-sm font-medium text-default-700">Paypal</h5>
                                        </label>
                                        <input id="paymentPaypal"
                                            class="text-primary w-5 h-5 bg-transparent border-default-200 focus:ring-0"
                                            type="radio" name="paymentOption">
                                    </div>

                                </div>
                            </div>

                            <div class="grid lg:grid-cols-2 gap-6">
                                <div class="lg:col-span-2">

                                    <VueInput name="name" label="Name on Card" type="text"
                                        placeholder="Enter Card holder name here..." className="!text-sm mb-2  " />
                                </div>

                                <div class="lg:col-span-2">

                                    <VueInput name="cardnumber" label="Card number" type="text"
                                        placeholder="Enter card number ..." className="!text-sm mb-2  " />
                                </div>

                                <div>

                                    <VueInput name="expiredate" label="Expire date" type="text" placeholder="DD/YY"
                                        className="!text-sm mb-2  " />
                                </div>

                                <div>

                                    <VueInput name="CVV" label="CVV" type="text" placeholder="Enter CVV number..."
                                        className="!text-sm mb-2  " />
                                </div>

                            </div>
                        </div>

                        <div>
                            <h4 class="text-lg font-medium text-default-800 mb-6">Additional Information</h4>

                            <div>
                                <label for="userName" class="block text-sm text-default-700 mb-2">Company Name <span
                                        class="text-default-500">(Optional)</span></label>
                                <textarea id="userName"
                                    class="block w-full bg-transparent dark:bg-default-50 rounded-lg py-2.5 px-4 border border-default-200"
                                    rows="4" type="text"
                                    placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="mb-5 lg:sticky top-32">
                        <div class="border border-default-200 rounded-lg p-5">
                            <h4 class="text-lg font-semibold text-default-700 mb-5">Order Summary</h4>
                            <div v-for="i in 4" :key="i" class="flex items-center mb-4">
                                <img src="/new/onion-rings.png" class="h-20 w-20 me-2">
                                <div>
                                    <h4 class="text-sm text-default-600 mb-2">Onion Rings</h4>
                                    <h4 class="text-sm text-default-400">1 x <span
                                            class="text-primary font-semibold">$29</span>
                                    </h4>
                                </div>
                            </div>

                            <hr class="opacity-10" />

                            <div class="mb-6 mt-6">
                                <div class="flex justify-between mb-3">
                                    <p class="text-sm text-default-500">Sub-total</p>
                                    <p class="text-sm text-default-700 font-medium">$320</p>
                                </div>
                                <div class="flex justify-between mb-3">
                                    <p class="text-sm text-default-500">Shipping</p>
                                    <p class="text-sm text-default-700 font-medium">Free</p>
                                </div>
                                <div class="flex justify-between mb-3">
                                    <p class="text-sm text-default-500">Discount</p>
                                    <p class="text-sm text-default-700 font-medium">$24</p>
                                </div>
                                <div class="flex justify-between mb-3">
                                    <p class="text-sm text-default-500">Tax</p>
                                    <p class="text-sm text-default-700 font-medium">$61.99</p>
                                </div>
                                <div class="border-b border-default-200 my-4"></div>
                                <div class="flex justify-between mb-3">
                                    <p class="text-base text-default-700">Total</p>
                                    <p class="text-base text-default-700 font-medium">$357.99 USD</p>
                                </div>
                            </div>

                            <button
                                class="w-full inline-flex items-center justify-center rounded-full border border-primary bg-primary px-10 py-3 text-center text-sm font-medium text-white shadow-sm transition-all duration-500 hover:bg-primary-500"
                                fdprocessedid="qy45ay">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>