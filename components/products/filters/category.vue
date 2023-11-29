<template>
    <div>
        <button
            class="hs-collapse-toggle py-4 inline-flex justify-between items-center gap-2 transition-all uppercase font-medium text-lg text-default-900 w-full open"
            data-hs-collapse="#all_categories" id="hs-basic-collapse" type="button" fdprocessedid="ndzo3">
            Category
        </button>
        <div class="hs-collapse w-full overflow-hidden transition-[height] duration-300 open" id="all_categories">
            <div class="relative flex flex-col space-y-4 mb-6">

                <VueRadio name="all" label="All" />
                <VueRadio name="burger" label="Burgers" />
                <VueRadio name="pasta" label="Pastas" />
                <VueRadio name="shawarma" label="Shawarmas" />
                <VueRadio name="appetizers" label="Appetizers" />
                <VueRadio name="trational" label="Traditional" />
                <VueRadio name="more" label="More..." />




            </div>
        </div>
    </div><!-- end category -->
</template>