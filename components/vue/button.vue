<template>
    <div>
        <a :type="props.type"
            class="group hover:scale-[103%] py-5 px-10 font-medium text-white cursor-pointer bg-primary rounded-full hover:bg-primary-500 dark:hover:bg-primary-500 transition-all duration-500">
            <span class="group-hover:border-b">

                {{ props.name }}
            </span>
        </a>
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
    }
})
</script>