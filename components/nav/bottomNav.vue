<template>
    <div>
        <!-- Mobile Nav (Bottom Navbar) -->
        <div class="flex lg:hidden">
            <div
                class="fixed inset-x-0 bottom-0 h-16 w-full grid grid-cols-4 items-center justify-items-center border-t border-default-200 bg-white dark:bg-default-50 z-40">
                <NuxtLink active-class="text-primary" to="/"
                    class="flex flex-col items-center justify-center gap-1 text-default-600" type="button">

                    <Icon name="i-heroicons-home-20-solid" class="w-6 h-6" />
                    <span class="text-xs font-medium">Home</span>
                </NuxtLink>
                <NuxtLink to="/products" active-class="text-primary"
                    class="flex flex-col items-center justify-center gap-1 text-default-600" type="button">
                    <Icon name="i-mdi-food" class="w-6 h-6" />
                    <span class="text-xs font-medium">Products</span>
                </NuxtLink>
                <NuxtLink to="/favorite" active-class="text-primary"
                    class="flex flex-col items-center justify-center gap-1 text-default-600" type="button">
                    <Icon name="i-mdi-bookmark" active-class="text-primary" class="w-6 h-6" />
                    <span class="text-xs font-medium">Wishlist</span>
                </NuxtLink>
                <NuxtLink to="/cart" active-class="text-primary"
                    class="flex flex-col items-center justify-center gap-1 text-default-600" type="button">
                    <Icon name="i-heroicons-shopping-cart-20-solid" class="w-6 h-6" />
                    <span class="text-xs font-medium">Cart</span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>