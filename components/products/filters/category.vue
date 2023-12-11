<template>
    <div>
        <button
            class="hs-collapse-toggle py-4 inline-flex justify-between items-center gap-2 transition-all uppercase font-medium text-lg text-default-900 w-full open"
            data-hs-collapse="#all_categories" id="hs-basic-collapse" type="button" fdprocessedid="ndzo3">
            Category
        </button>
        <div class="hs-collapse w-full overflow-hidden transition-[height] duration-300 open" id="all_categories">
            <div class="relative flex flex-col space-y-4 mb-6 pl-1">
                {{ categories }}
                <VueRadio @value="addCategory('all')" @remove="remove('all')" name="all" label="All" />
                <VueRadio @value="addCategory('burger')" @remove="remove('burger')" name="burger" label="Burgers" />
                <VueRadio @value="addCategory('pasta')" @remove="remove('pasta')" name="pasta" label="Pastas" />
                <VueRadio @value="addCategory('shawarma')" @remove="remove('shawarma')" name="shawarma" label="Shawarmas" />
                <VueRadio @value="addCategory('appetizers')" @remove="remove('appetizers')" name="appetizers"
                    label="Appetizers" />
                <VueRadio @value="addCategory('traditional')" @remove="remove('traditional')" name="trational"
                    label="Traditional" />
                <VueRadio @value="addCategory('more')" @remove="remove('more')" name="more" label="More..." />




            </div>
        </div>
    </div><!-- end category -->
</template>


<script setup>
const categories = ref([])
const emit = defineEmits(['category'])

const addCategory = (val) => {
    if (!categories.value.includes(val)) {
        categories.value.push(val);
        emit('category', categories)
    }

}
const remove = (val) => {
    categories.value = categories.value.filter(category => category !== val)
    emit('category', categories)
}
</script>