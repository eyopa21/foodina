<template>
    <div>
        <button
            class="hs-collapse-toggle py-4 inline-flex justify-between items-center gap-2 transition-all uppercase font-medium text-lg text-default-900 w-full open"
            data-hs-collapse="#cafe_restaurant" id="hs-basic-collapse" type="button" fdprocessedid="goll6">
            Popular Café / Restaurant
        </button>
        <div class="hs-collapse w-full overflow-hidden transition-[height] duration-300 open" id="cafe_restaurant">
            <div class="relative flex flex-col space-y-5 mb-6">
                <div class="flex gap-x-6">
                    <div class="flex items-center w-1/2">
                        <input checked=""
                            class="form-checkbox bg-transparent border-default-200 rounded text-primary focus:ring-transparent checked:bg-primary h-5 w-5 cursor-pointer"
                            id="monginis" type="checkbox">
                        <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                            for="monginis">Monginis</label>
                    </div>

                    <div class="flex items-center w-1/2">
                        <input checked=""
                            class="form-checkbox bg-transparent border-default-200 rounded text-primary focus:ring-transparent checked:bg-primary h-5 w-5 cursor-pointer"
                            id="ferrero" type="checkbox">
                        <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                            for="ferrero">Ferrero</label>
                    </div>
                </div>
                <div class="flex gap-x-6">
                    <div class="flex items-center w-1/2">
                        <input checked=""
                            class="form-checkbox bg-transparent border-default-200 rounded text-primary focus:ring-transparent checked:bg-primary h-5 w-5 cursor-pointer"
                            id="burger_king" type="checkbox">
                        <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                            for="burger_king">Burger
                            King</label>
                    </div>

                    <div class="flex items-center w-1/2">
                        <input
                            class="form-checkbox bg-transparent border-default-200 rounded text-primary focus:ring-transparent checked:bg-primary h-5 w-5 cursor-pointer"
                            id="starbucks" type="checkbox">
                        <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                            for="starbucks">Starbucks</label>
                    </div>
                </div>
                <div class="flex gap-x-6">
                    <div class="flex items-center w-1/2">
                        <input
                            class="form-checkbox bg-transparent border-default-200 rounded text-primary focus:ring-transparent checked:bg-primary h-5 w-5 cursor-pointer"
                            id="macDonald" type="checkbox">
                        <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                            for="macDonald">MacDonald's</label>
                    </div>

                    <div class="flex items-center w-1/2">
                        <input checked=""
                            class="form-checkbox bg-transparent border-default-200 rounded text-primary focus:ring-transparent checked:bg-primary h-5 w-5 cursor-pointer"
                            id="tim_hortons" type="checkbox">
                        <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                            for="tim_hortons">Tim
                            Hortons</label>
                    </div>
                </div>
                <div class="flex gap-x-6">
                    <div class="flex items-center w-1/2">
                        <input
                            class="form-checkbox bg-transparent border-default-200 rounded text-primary focus:ring-transparent checked:bg-primary h-5 w-5 cursor-pointer"
                            id="coffee_cafe" type="checkbox">
                        <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                            for="coffee_cafe">Coffee
                            Café</label>
                    </div>

                    <div class="flex items-center w-1/2">
                        <input
                            class="form-checkbox bg-transparent border-default-200 rounded text-primary focus:ring-transparent checked:bg-primary h-5 w-5 cursor-pointer"
                            id="dominos" type="checkbox">
                        <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                            for="dominos">Dominos</label>
                    </div>
                </div>
                <div class="flex gap-x-6">
                    <div class="flex items-center w-1/2">
                        <input
                            class="form-checkbox bg-transparent border-default-200 rounded text-primary focus:ring-transparent checked:bg-primary h-5 w-5 cursor-pointer"
                            id="café_beats" type="checkbox">
                        <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                            for="café_beats">Café
                            Beats</label>
                    </div>

                    <div class="flex items-center w-1/2">
                        <input checked=""
                            class="form-checkbox bg-transparent border-default-200 rounded text-primary focus:ring-transparent checked:bg-primary h-5 w-5 cursor-pointer"
                            id="blaze_pizza" type="checkbox">
                        <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                            for="blaze_pizza">Blaze
                            Pizza</label>
                    </div>
                </div>
                <div class="flex gap-x-6">
                    <div class="flex items-center w-1/2">
                        <input checked=""
                            class="form-checkbox bg-transparent border-default-200 rounded text-primary focus:ring-transparent checked:bg-primary h-5 w-5 cursor-pointer"
                            id="tgb" type="checkbox">
                        <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                            for="tgb">TGB</label>
                    </div>

                    <div class="flex items-center w-1/2">
                        <input
                            class="form-checkbox bg-transparent border-default-200 rounded text-primary focus:ring-transparent checked:bg-primary h-5 w-5 cursor-pointer"
                            id="red_robbin" type="checkbox">
                        <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                            for="red_robbin">Red
                            Robbin</label>
                    </div>
                </div>
                <div class="flex gap-x-6">
                    <div class="flex items-center w-1/2">
                        <input
                            class="form-checkbox bg-transparent border-default-200 rounded text-primary focus:ring-transparent checked:bg-primary h-5 w-5 cursor-pointer"
                            id="nestle" type="checkbox">
                        <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                            for="nestle">Nestle</label>
                    </div>
                </div>
            </div>
        </div>
    </div><!-- end popular-cafe & restaurant -->
</template>