<template>
    <div class="">

        <div class="">
            <div class="  border border-default-200 rounded-lg p-5 mb-5">
                <h4 class="text-lg font-semibold text-default-800 mb-5">Cart Totals</h4>
                <div class="mb-6">
                    <div class="flex justify-between mb-3">
                        <p class="text-sm text-default-500">Sub-total</p>
                        <p class="text-sm text-default-700 font-medium">$320</p>
                    </div>
                    <div class="flex justify-between mb-3">
                        <p class="text-sm text-default-500">Delivery</p>
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

                <NuxtLink to="checkout">

                    <VueButton name="Proceed to checkout" type="button" className="w-full py-3 text-center items-center" />
                </NuxtLink>
            </div>

            <div class="border border-default-200 rounded-lg">
                <div class="px-6 py-5 border-b border-default-200">
                    <h4 class="text-lg font-semibold text-default-800">Coupon Code</h4>
                </div>
                <div class="p-6">
                    <VueInput name="apply-coupon" placeholder="Enter Coupon Code" type="text" />

                    <div class="flex justify-end mt-4">
                        <VueButton name="Apply coupon" type="button" className="py-3" />
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>