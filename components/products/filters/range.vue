
<script setup>

const minValue = ref(100)
const maxValue = ref(999)
</script>
<template>
    <div>
        <button
            class="hs-collapse-toggle py-4 inline-flex justify-between items-center gap-2 transition-all uppercase font-medium text-lg text-default-900 w-full open"
            data-hs-collapse="#price_range" id="hs-basic-collapse" type="button" fdprocessedid="mq0ukc">
            Price Range
        </button>
        <div class="hs-collapse w-full overflow-hidden transition-[height] duration-300 open" id="price_range">
            <div class="relative flex flex-col space-y-5 mb-6">
                <div class="space-y-2 py-4">
                    <div class="p-1">
                        <URange v-model="minValue" :min="50" :max="500" name="range" />
                    </div>

                    <div class="flex flex-wrap xl:flex-nowrap gap-2 items-center !mt-4">
                        <div
                            class="inline-flex text-xs items-center justify-center whitespace-nowrap w-full xl:w-1/2 gap-1 border border-default-200 py-2 px-4 rounded-full">
                            Min price :
                            <input v-model="minValue" class="border-none p-0 w-12 bg-transparent focus:ring-0"
                                type="number">
                        </div>

                    </div>
                    <div class="p-1">
                        <URange v-model="maxValue" name="range" :min="500" :max="999" />
                    </div>

                    <div class="flex flex-wrap xl:flex-nowrap gap-2 items-center !mt-4">
                        <div
                            class="inline-flex  text-xs items-center justify-center whitespace-nowrap w-full xl:w-1/2 gap-1 border border-default-200 py-2 px-4 rounded-full">
                            Max price :
                            <input v-model="maxValue" class="border-none p-0 w-12 bg-transparent focus:ring-0"
                                type="number">
                        </div>

                    </div>
                </div>

                <div class="relative flex flex-col space-y-4 mb-6">
                    <VueRadio name="all" label="All Price" />
                    <VueRadio name="100" label="Under 20ETB" />
                    <VueRadio name="100-300" label="100ETB - 300ETB" />
                    <VueRadio name="300-500" label="300ETB - 500ETB " />
                    <VueRadio name="500" label="Above 500" />
                </div>
            </div>
        </div>
    </div><!-- end range -->
</template>