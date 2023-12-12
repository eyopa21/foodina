<template>
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
                                    className="!text-xs " />
                            </div>



                            <div class="lg:col-span-2">
                                <label for="userName" class="block text-sm text-default-700 mb-2">Company Name <span
                                        class="text-default-500">(Optional)</span> </label>
                                <input id="userName"
                                    class="block w-full bg-transparent dark:bg-default-50 rounded-full py-2.5 px-4 border border-default-200"
                                    type="text" placeholder="Company Name" fdprocessedid="k798x">
                            </div>

                            <div class="lg:col-span-4">
                                <label for="userName" class="block text-sm text-default-700 mb-2">Address </label>
                                <input id="userName"
                                    class="block w-full bg-transparent dark:bg-default-50 rounded-full py-2.5 px-4 border border-default-200"
                                    type="text" placeholder="Enter your address" fdprocessedid="uehrpl">
                            </div>

                            <div>
                                <label for="country" class="block text-sm text-default-700 mb-2">Country</label>
                                <select id="country"
                                    class="block w-full bg-transparent dark:bg-default-50 rounded-full py-2.5 px-4 border border-default-200 focus:ring-transparent focus:border-default-200"
                                    fdprocessedid="8cjsx5">
                                    <option value="United States" selected="">United States</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="China">China</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Bharat">Bharat</option>
                                    <option value="Afghanistan">Afghanistan</option>
                                    <option value="France">France</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Albania">Albania</option>
                                </select>
                            </div>

                            <div>
                                <label for="state" class="block text-sm text-default-700 mb-2">Region/State</label>
                                <select id="state"
                                    class="block w-full bg-transparent dark:bg-default-50 rounded-full py-2.5 px-4 border border-default-200 focus:ring-transparent focus:border-default-200"
                                    fdprocessedid="9xrkvc">
                                    <option value="Alabama" selected="">Alabama</option>
                                    <option value="Alaska">Alaska</option>
                                    <option value="Arizona">Arizona</option>
                                    <option value="Arkansas">Arkansas</option>
                                    <option value="California">California</option>
                                    <option value="Colorado">Colorado</option>
                                    <option value="Connecticut">Connecticut</option>
                                    <option value="Delaware">Delaware</option>
                                    <option value="Florida">Florida</option>
                                    <option value="Indiana">Indiana</option>
                                    <option value="Iowa">Iowa</option>
                                    <option value="Kansas">Kansas</option>
                                    <option value="Kentucky">Kentucky</option>
                                </select>
                            </div>

                            <div>
                                <label for="city" class="block text-sm text-default-700 mb-2">City</label>
                                <select id="city"
                                    class="block w-full bg-transparent dark:bg-default-50 rounded-full py-2.5 px-4 border border-default-200 focus:ring-transparent focus:border-default-200"
                                    fdprocessedid="benr2o">
                                    <option value="Alexander" selected="">Alexander City</option>
                                    <option value="Andalusia">Andalusia</option>
                                    <option value="Anniston">Anniston</option>
                                    <option value="Athens">Athens</option>
                                    <option value="Atmore">Atmore</option>
                                    <option value="Auburn">Auburn</option>
                                    <option value="Chickasaw">Chickasaw</option>
                                    <option value="Clanton">Clanton</option>
                                    <option value="Demopolis">Demopolis</option>
                                    <option value="Guntersville">Guntersville</option>
                                    <option value="Huntsville">Huntsville</option>
                                    <option value="Jasper">Jasper</option>
                                    <option value="Marion">Marion</option>
                                </select>
                            </div>

                            <div>
                                <label for="userName" class="block text-sm text-default-700 mb-2">Zip Code</label>
                                <select name="" id=""
                                    class="block w-full bg-transparent dark:bg-default-50 rounded-full py-2.5 px-4 border border-default-200 focus:ring-transparent focus:border-default-200"
                                    placeholder="Select..." fdprocessedid="d9hiora">
                                    <option value="35010" selected="">35010</option>
                                    <option value="35011">35011</option>
                                    <option value="35012">35012</option>
                                    <option value="35013">35013</option>
                                    <option value="35014">35014</option>
                                </select>
                            </div>

                            <div class="lg:col-span-2">
                                <label for="userName" class="block text-sm text-default-700 mb-2">Email </label>
                                <input id="userName"
                                    class="block w-full bg-transparent dark:bg-default-50 rounded-full py-2.5 px-4 border border-default-200"
                                    type="text" placeholder="example@example.com" fdprocessedid="711ocn">
                            </div>

                            <div class="lg:col-span-2">
                                <label for="userName" class="block text-sm text-default-700 mb-2">Phone Number </label>
                                <input id="userName"
                                    class="block w-full bg-transparent dark:bg-default-50 rounded-full py-2.5 px-4 border border-default-200"
                                    type="text" placeholder="+1  123-XXX-7890" fdprocessedid="4ai7aq">
                            </div>

                            <div class="flex items-center">
                                <input id="shipmentAddress"
                                    class="text-primary w-5 h-5 rounded border-default-200 focus:ring-0 bg-transparent"
                                    type="checkbox" placeholder="+1  123-XXX-7890">
                                <label for="shipmentAddress" class="block text-sm text-default-700 ms-2">Ship into different
                                    address </label>
                            </div>
                        </div>
                    </div>

                    <div class="mb-8">
                        <h4 class="text-lg font-medium text-default-800 mb-6">Payment Option</h4>

                        <div class="border border-default-200 rounded-lg p-6 lg:w-5/6 mb-5">
                            <div class="grid lg:grid-cols-4 grid-cols-2">
                                <div class="text-center p-6">
                                    <label for="paymentCOD" class="flex flex-col items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" data-lucide="dollar-sign"
                                            class="lucide lucide-dollar-sign text-primary mb-4">
                                            <line x1="12" x2="12" y1="2" y2="22"></line>
                                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                        </svg>
                                        <h5 class="text-sm font-medium text-default-700">Cash on Delivery</h5>
                                    </label>
                                    <input id="paymentCOD"
                                        class="text-primary w-5 h-5 bg-transparent border-default-200 focus:ring-0"
                                        type="radio" name="paymentOption" checked="">
                                </div>

                                <div class="text-center p-6">
                                    <label for="paymentPaypal" class="flex flex-col items-center justify-center mb-4">
                                        <img src="/assets/paypal-2-80f6ebd0.svg" class="w-6 h-6 mb-4">
                                        <h5 class="text-sm font-medium text-default-700">Paypal</h5>
                                    </label>
                                    <input id="paymentPaypal"
                                        class="text-primary w-5 h-5 bg-transparent border-default-200 focus:ring-0"
                                        type="radio" name="paymentOption">
                                </div>

                                <div class="text-center p-6">
                                    <label for="paymentAmazonPay" class="flex flex-col items-center justify-center mb-4">
                                        <img src="/assets/amazon-b4e0cd8f.svg" class="w-6 h-6 mb-4">
                                        <h5 class="text-sm font-medium text-default-700">Amazon Pay</h5>
                                    </label>
                                    <input id="paymentAmazonPay"
                                        class="text-primary w-5 h-5 bg-transparent border-default-200 focus:ring-0"
                                        type="radio" name="paymentOption">
                                </div>

                                <div class="text-center p-6">
                                    <label for="paymentCard" class="flex flex-col items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" data-lucide="credit-card"
                                            class="lucide lucide-credit-card text-primary mb-4">
                                            <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                                            <line x1="2" x2="22" y1="10" y2="10"></line>
                                        </svg>
                                        <h5 class="text-sm font-medium text-default-700">Debid/Credit Card</h5>
                                    </label>
                                    <input id="paymentCard"
                                        class="text-primary w-5 h-5 bg-transparent border-default-200 focus:ring-0"
                                        type="radio" name="paymentOption">
                                </div>
                            </div>
                        </div>

                        <div class="grid lg:grid-cols-2 gap-6">
                            <div class="lg:col-span-2">
                                <label for="userName" class="block text-sm text-default-700 mb-2">Name on Card</label>
                                <input id="userName"
                                    class="block w-full bg-transparent dark:bg-default-50 rounded-full py-2.5 px-4 border border-default-200"
                                    type="text" placeholder="Enter card holder name" fdprocessedid="8ckc1w">
                            </div>

                            <div class="lg:col-span-2">
                                <label for="userName" class="block text-sm text-default-700 mb-2">Card Number</label>
                                <input id="userName"
                                    class="block w-full bg-transparent dark:bg-default-50 rounded-full py-2.5 px-4 border border-default-200"
                                    type="text" placeholder="Enter card number" fdprocessedid="a2hh9i">
                            </div>

                            <div>
                                <label for="userName" class="block text-sm text-default-700 mb-2">Expire Date</label>
                                <input id="userName"
                                    class="block w-full bg-transparent dark:bg-default-50 rounded-full py-2.5 px-4 border border-default-200"
                                    type="text" placeholder="DD/YY" fdprocessedid="5k5ht">
                            </div>

                            <div>
                                <label for="userName" class="block text-sm text-default-700 mb-2">CVC</label>
                                <input id="userName"
                                    class="block w-full bg-transparent dark:bg-default-50 rounded-full py-2.5 px-4 border border-default-200"
                                    type="text" placeholder="Enter CVV number" fdprocessedid="enqklc">
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

                <div class="mb-5">
                    <div class="border border-default-200 rounded-lg p-5">
                        <h4 class="text-lg font-semibold text-default-700 mb-5">Order Summary</h4>
                        <div class="flex items-center mb-4">
                            <img src="/assets/onion-rings-6902e6d8.png" class="h-20 w-20 me-2">
                            <div>
                                <h4 class="text-sm text-default-600 mb-2">Onion Rings</h4>
                                <h4 class="text-sm text-default-400">1 x <span class="text-primary font-semibold">$29</span>
                                </h4>
                            </div>
                        </div>

                        <div class="flex items-center mb-4">
                            <img src="/assets/burrito-bowl-79a7c64f.png" class="h-20 w-20 me-2">
                            <div>
                                <h4 class="text-sm text-default-600 mb-2">Burrito Bowl</h4>
                                <h4 class="text-sm text-default-400">3 x <span class="text-primary font-semibold">$50</span>
                                </h4>
                            </div>
                        </div>

                        <div class="flex items-center mb-4">
                            <img src="/assets/garlic-herb-bread-8a00951d.png" class="h-20 w-20 me-2">
                            <div>
                                <h4 class="text-sm text-default-600 mb-2">Garlic &amp; Herb Bread</h4>
                                <h4 class="text-sm text-default-400">2 x <span class="text-primary font-semibold">$42</span>
                                </h4>
                            </div>
                        </div>

                        <div class="flex items-center mb-4">
                            <img src="/assets/red-velvet-pastry-b09214ba.png" class="h-20 w-20 me-2">
                            <div>
                                <h4 class="text-sm text-default-600 mb-2">Red Velvet Pastry</h4>
                                <h4 class="text-sm text-default-400">1 x <span class="text-primary font-semibold">$68</span>
                                </h4>
                            </div>
                        </div>

                        <div class="mb-6">
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
</template>