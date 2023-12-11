<template>
    <div>

        <div class="flex items-center">
            <input @change="changeValue(value)" v-model="value"
                class="form-checkbox rounded-full text-primary border-default-400 bg-transparent w-5 h-5 focus:ring-0 focus:ring-transparent ring-offset-0 cursor-pointer"
                :name="props.name" type="checkbox">
            <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none">{{ props.label
            }}</label>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['value', 'remove'])
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

const value = ref(false)

const changeValue = (val) => {
    if (val) {
        emit('value')
    } else {
        emit('remove')
    }
}
</script>