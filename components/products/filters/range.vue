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
                    <div id="product-price-range" class="noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr">
                        <div class="noUi-base">
                            <div class="noUi-connects">
                                <div class="noUi-connect noUi-draggable"
                                    style="transform: translate(10%, 0px) scale(0.2, 1);">
                                </div>
                            </div>
                            <div class="noUi-origin" style="transform: translate(-90%, 0px); z-index: 5;">
                                <div class="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider"
                                    aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="10.0"
                                    aria-valuenow="10.0" aria-valuetext="$ 10">
                                    <div class="noUi-touch-area"></div>
                                </div>
                            </div>
                            <div class="noUi-origin" style="transform: translate(-70%, 0px); z-index: 6;">
                                <div class="noUi-handle noUi-handle-upper" data-handle="1" tabindex="0" role="slider"
                                    aria-orientation="horizontal" aria-valuemin="30.0" aria-valuemax="100.0"
                                    aria-valuenow="30.0" aria-valuetext="$ 30">
                                    <div class="noUi-touch-area"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-wrap xl:flex-nowrap gap-2 items-center !mt-4">
                        <div
                            class="inline-flex items-center justify-center whitespace-nowrap w-full xl:w-1/2 gap-1 border border-default-200 py-2 px-4 rounded-full">
                            Min price :
                            <input class="border-none p-0 w-10 bg-transparent focus:ring-0" id="minCost" type="text"
                                value="0" fdprocessedid="v5rvak">
                        </div>
                        <div
                            class="inline-flex items-center justify-center whitespace-nowrap w-full xl:w-1/2 gap-1 border border-default-200 py-2 px-4 rounded-full">
                            Max price :
                            <input class="border-none p-0 w-10 bg-transparent focus:ring-0" id="maxCost" type="text"
                                value="1000" fdprocessedid="kjimidk">
                        </div>
                    </div>
                </div>

                <div class="relative flex flex-col space-y-4 mb-6">
                    <div class="flex items-center">
                        <input
                            class="form-radio rounded-full text-primary border-default-400 bg-transparent w-5 h-5 focus:ring-0 focus:ring-transparent cursor-pointer"
                            id="all_price" name="radio" type="radio">
                        <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                            for="all_price">All
                            Price</label>
                    </div>
                    <div class="flex items-center">
                        <input
                            class="form-radio rounded-full text-primary border-default-400 bg-transparent w-5 h-5 focus:ring-0 focus:ring-transparent cursor-pointer"
                            id="under_$20" name="radio" type="radio">
                        <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                            for="under_$20">Under
                            $20</label>
                    </div>
                    <div class="flex items-center">
                        <input
                            class="form-radio rounded-full text-primary border-default-400 bg-transparent w-5 h-5 focus:ring-0 focus:ring-transparent cursor-pointer"
                            id="$25_$100" name="radio" type="radio">
                        <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none" for="$25_$100">$25
                            to $100</label>
                    </div>
                    <div class="flex items-center">
                        <input
                            class="form-radio rounded-full text-primary border-default-400 bg-transparent w-5 h-5 focus:ring-0 focus:ring-transparent cursor-pointer"
                            id="$100_$300" name="radio" type="radio">
                        <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                            for="$100_$300">$100
                            to $300</label>
                    </div>
                    <div class="flex items-center">
                        <input checked=""
                            class="form-radio rounded-full text-primary border-default-400 bg-transparent w-5 h-5 focus:ring-0 focus:ring-transparent cursor-pointer"
                            id="$300_$500" name="radio" type="radio">
                        <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                            for="$300_$500">$300
                            to $500</label>
                    </div>
                    <div class="flex items-center">
                        <input
                            class="form-radio rounded-full text-primary border-default-400 bg-transparent w-5 h-5 focus:ring-0 focus:ring-transparent cursor-pointer"
                            id="$500_$1,000" name="radio" type="radio">
                        <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                            for="$500_$1,000">$500
                            to $1,000</label>
                    </div>
                    <div class="flex items-center">
                        <input
                            class="form-radio rounded-full text-primary border-default-400 bg-transparent w-5 h-5 focus:ring-0 focus:ring-transparent cursor-pointer"
                            id="$1,000_$10,000" name="radio" type="radio">
                        <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                            for="$1,000_$10,000">$1,000
                            to $10,000</label>
                    </div>
                </div>
            </div>
        </div>
    </div><!-- end range -->
</template>