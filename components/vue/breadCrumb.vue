<template>
    <section class="lg:flex mb-4 items-center hidden bg-default-400/10 h-14">
        <div class="container">
            <div class="flex items-center">
                <ol aria-label="Breadcrumb" class="flex items-center whitespace-nowrap min-w-0 gap-2">
                    <li class="text-sm">
                        <NuxtLink to="/"
                            class="flex items-center gap-2 align-middle text-default-800 transition-all leading-none hover:text-primary-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                data-lucide="home" class="lucide lucide-home w-4 h-4">
                                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                            Home

                        </NuxtLink>
                    </li>

                    <li v-for="i in props.name" :key="i" class="text-sm flex space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            data-lucide="chevron-right" class="lucide lucide-chevron-right w-4 h-4">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                        <NuxtLink :to="i.to" :class="i.active ? 'text-primary' : 'text-default-800'"
                            class="flex items-center gap-2 align-middle  transition-all leading-none hover:text-primary-500">

                            {{ i.name }}
                        </NuxtLink>
                    </li>


                </ol>
            </div>
        </div>
    </section>
</template>


<script setup>
const route = useRoute();
const props = defineProps({
    name: {
        type: Object,
        required: true
    }
})
</script>