<template>
    <div>
        <label :for="props.name" class="text-md font-medium text-default-950 mb-4">{{ props.label }}</label>

        <input :type="props.type" :name="props.name"
            class="py-3 px-4 block w-full bg-white border-default-300  rounded-lg text-sm dark:bg-default-50"
            :placeholder="props.placeholder">
    </div>
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
        required: false,

    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,

    },
    placeholder: {
        type: String,
        required: true
    }
})
</script>