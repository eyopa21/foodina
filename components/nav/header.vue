<script setup>
const layout = useLayout();
const navs = ref([{
    name: 'home',
    icon: '',
    to: '/'
}, {
    name: 'Products',
    icon: '',
    to: '/products'
},
{
    name: 'Cart',
    icon: '',
    to: '/cart'
},
{
    name: 'Contact',
    icon: '',
    to: '/contact'
},
{
    name: 'About',
    icon: '',
    to: '/about'
}])
const items = [
    [{
        label: 'Profile',
        avatar: {
            src: 'https://avatars.githubusercontent.com/u/739984?v=4'
        }
    }, {
        label: 'Profile',
        avatar: {
            src: 'https://avatars.githubusercontent.com/u/739984?v=4'
        }
    }]
]
</script>

<template>
    <div>
        <!-- Main Navigation Menu -->
        <header id="navbar" class=" w-full bg-white dark:bg-gray-900 border-b border-primary  transition-all">
            <div class="lg:h-20 h-14 flex items-center">
                <div class="container">
                    <div class="grid lg:grid-cols-3 grid-cols-2 items-center gap-4">
                        <div class="flex">
                            <!-- Mobile Menu Toggle Button -->
                            <button @click="layout.showSidebar = true" class="lg:hidden block ">
                                <Icon name="i-heroicons-bars-3-20-solid"
                                    class="w-7 h-7 text-default-600 me-4 hover:text-primary"></Icon>
                            </button>

                            <!-- Navbar Brand Logo -->
                            <a href="home.html">
                                <img src="/assets/logo-dark-6dbab3e1.png" alt="logo" class="h-10 flex dark:hidden">
                                <img src="/assets/logo-light-35c89c2c.png" alt="logo" class="h-10 hidden dark:flex">
                            </a>
                        </div>

                        <!-- Nevigation Menu -->
                        <ul class="menu lg:flex items-center justify-center hidden relative">
                            <!-- Home Menu -->
                            <li v-for="i in navs" :key="i" class="menu-item">
                                <NuxtLink
                                    class="inline-flex items-center text-sm lg:text-base font-medium text-default-800 py-2 px-4 rounded-full hover:text-primary "
                                    :to="i.to">{{ i.name }}
                                </NuxtLink>
                            </li>




                        </ul>

                        <ul class="flex items-center justify-end gap-x-6">


                            <!-- Search Button (small screen) -->
                            <li class="2xl:hidden flex menu-item">
                                <button @click="layout.showSearchPopUp = true"
                                    class="relative flex text-base transition-all text-default-600 hover:text-primary">
                                    <Icon name="i-heroicons-magnifying-glass-solid" class="w-5 h-5">
                                    </Icon>
                                </button>
                            </li>

                            <!-- Cart Page link -->
                            <li class="flex menu-item">
                                <Nuxtlink to="/cart"
                                    class="relative flex text-base transition-all text-default-600 hover:text-primary">
                                    <Icon name="i-heroicons-shopping-cart-20-solid" class="w-5 h-5"></Icon>
                                    <span
                                        class="absolute z-10 -top-2.5 end-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 bg-red-500 rounded-full">1</span>
                                </Nuxtlink>
                            </li>

                            <!-- User Dropdown -->
                            <li class="flex menu-item">
                                <div class=" relative inline-flex [--trigger:hover] [--placement:bottom]">


                                    <UDropdown :items="items" mode="hover" :popper="{ placement: 'bottom-start' }">
                                        <a class=" relative flex items-center text-base transition-all text-default-600 hover:text-primary"
                                            href="javascript:void(0)">
                                            <Icon name="i-material-symbols-person-2-outline-rounded" class="w-6 h-6"
                                                data-lucide="user"></Icon>
                                        </a>
                                    </UDropdown>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>