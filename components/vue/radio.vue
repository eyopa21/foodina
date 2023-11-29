<template>
    <div>
        <div class="flex items-center">
            <input
                class="form-checkbox rounded-full text-primary border-default-400 bg-transparent w-5 h-5 focus:ring-0 focus:ring-transparent ring-offset-0 cursor-pointer"
                id="all" :name="props.name" type="checkbox">
            <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none" for="all">{{ props.label
            }}</label>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    }
})
</script>