<script setup>
const items = [
    [{
        label: 'AMharic',
        icon: 'i-heroicons-archive-box-20-solid'
    }, {
        label: 'English',
        icon: 'i-heroicons-arrow-right-circle-20-solid'
    }]
]
</script>

<template>
    <!-- Offer/Help Menu -->
    <div class="h-8 lg:flex sticky z-50 top-0 items-center hidden bg-primary-300 text-white ">
        <div class="container">
            <nav class="grid lg:grid-cols-3 items-center gap-4">
                <!-- Language Dropdown -->
                <div class="flex relative ">
                    <div class=" relative inline-flex [--trigger:hover] [--placement:bottom]">
                        <a class="hover:border-b z-50 relative flex items-center text-base">


                            <UDropdown :items="items" :popper="{ placement: 'bottom-start' }"
                                :ui="{ background: 'bg-white dark:bg-gray-900', item: { active: 'bg-primary dark:bg-primary' } }">
                                <span class="font-medium text-xs">English (USA)</span>
                            </UDropdown>
                        </a>


                    </div>
                </div>

                <!-- Offer Link -->
                <h5 class="text-sm text-primary-50 text-center">Free Delivery Over $50 <a class="font-semibold underline"
                        href="javascript:void(0)">Claim Offer</a></h5>

                <ul class="flex items-center justify-end gap-4">
                    <li class="flex menu-item">
                        <NuxtLink class="text-sm hover:text-primary" to="/help">Help</NuxtLink>
                    </li>

                    <li class="flex menu-item">
                        <NuxtLink class="text-sm hover:text-primary" to="/contact">Contact Us</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>