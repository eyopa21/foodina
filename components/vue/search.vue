<template >
    <!-- Topbar Search Modal (Small Screen) -->
    <div id="mobileSearchSidebar"
        class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-60 overflow-x-hidden overflow-y-auto">
        <div
            class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
            <div class="flex flex-col bg-white shadow-sm rounded-lg">
                <div class="relative flex w-full">
                    <span class="absolute start-4 top-3">
                        <i class="w-4 h-4 text-primary-500" data-lucide="search"></i>
                    </span>

                    <input
                        class="px-10 py-2.5 block w-full border-transparent placeholder-primary-500 rounded-lg text-sm bg-transparent text-primary-500"
                        placeholder="Search for items..." type="search">

                    <button class="absolute end-4 top-3" data-hs-overlay="#mobileSearchSidebar">
                        <i class="w-4 h-4 text-primary-500" data-lucide="x"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>