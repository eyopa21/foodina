<script setup>
const colorMode = useColorMode()
const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})
</script>
<template>
    <div>

        <VueLanguage />





        <div class="sticky top-0 z-50">

            <NavHeader />
        </div>

        <NavBottomNav />

        <NavSideBar />
        <!-- Topbar Search Modal (Small Screen) -->
        <VueSearch />
        <slot />
        <NavFooter />

        <!-- Back to Top & Light/Dark Toggle -->
        <div class="fixed lg:bottom-5 end-5 bottom-18 flex flex-col items-center bg-primary/25 rounded-full z-10">
            <ClientOnly>
                <UButton :icon="isDark ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'" color="gray"
                    variant="ghost" aria-label="Theme" @click="isDark = !isDark" />

                <template #fallback>
                    <div class="w-8 h-8 bg-primary rounded-full" />
                </template>
            </ClientOnly>
        </div>


    </div>
</template>