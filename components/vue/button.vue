<template>
    <div>

        <div v-if="props.mode == 'outline'">
            <button :type="props.type" :class="props.className"
                class="inline-flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 text-center text-sm font-medium shadow-sm transition-all duration-500">
                {{ props.name }}
            </button>
        </div>
        <div v-else>
            <a :type="props.type" :class="props.className"
                class="group hover:scale-[103%]  px-10 font-medium text-white cursor-pointer bg-primary rounded-full hover:bg-primary-500 dark:hover:bg-primary-500 transition-all duration-500">
                <span class="group-hover:border-b">

                    {{ props.name }}
                </span>
            </a>
        </div>

    </div>
</template>
<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    className: {
        type: String,
        required: false
    },
    mode: {
        type: String,
        required: false
    }
})
</script>