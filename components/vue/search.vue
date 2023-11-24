
<script setup>



const layout = useLayout();

const people = [
    { id: 1, label: 'Wade Cooper' },
    { id: 2, label: 'Arlene Mccoy' },
    { id: 3, label: 'Devon Webb' },
    { id: 4, label: 'Tom Cook' },
    { id: 5, label: 'Tanya Fox' },
    { id: 6, label: 'Hellen Schmidt' },
    { id: 7, label: 'Caroline Schultz' },
    { id: 8, label: 'Mason Heaney' },
    { id: 9, label: 'Claudie Smitham' },
    { id: 10, label: 'Emil Schaefer' }
]

const selected = ref([])
</script>

<template>
    <div>


        <UModal v-model="layout.showSearchPopUp">
            <UCommandPalette v-model="selected" :groups="[{ key: 'people', commands: people }]"
                :ui="{ wrapper: '', input: { base: 'bg-light dark:bg-dark border dark:border-0 ', height: 'h-16' } }" /> />
        </UModal>
    </div>
</template>


